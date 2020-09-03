const STATION = require('./station')
const CONFIG = require('./config')
const axios = require('axios')
const nodemailer = require('nodemailer')

class QueryTicket {
  constructor({ CONFIG, STATION }) {
    this.config = CONFIG
    this.mail = CONFIG.mail // 邮箱地址
    this.pass = CONFIG.pass // 邮箱 smtp 授权码
    this.prev = {} // 记录上一个车次信息 用于查找票数是否有变化
    this.timer = null // 定时器
    this.interval = 60000 // 查询的间隔 单位毫秒 默认60秒
    this.logger = true // 开启终端输出日志

    this.init()
  }

  /**
   * 初始化
   */
  init() {
    const stationInfo = Object.values(STATION.stationInfo)
    if (this.checkConfig({ CONFIG, stationInfo })) {
      this.config = this.convertStationName({ CONFIG, stationInfo })
    }

    this.mailer = nodemailer.createTransport({
      host: 'smtp.qq.com', // 邮箱的服务器地址 如果需要换其他类型的邮箱 需要更改对应的服务器地址
      posrt: 465, // SMTP 端口
      auth: {
        user: this.mail,
        pass: this.pass,
      },
    })

    this.getTrainList()
    this.timer = setInterval(() => {
      this.getTrainList()
    }, this.interval)
  }

  /**
   * 检查各项配置格式
   */
  checkConfig({ CONFIG, stationInfo }) {
    if (!stationInfo.some((item) => item.name == CONFIG.from)) {
      console.log('请检查\u001b[31m起始站\u001b[39m的名称是否正确！')
      return false
    }

    if (!stationInfo.some((item) => item.name == CONFIG.to)) {
      console.log('请检查\u001b[31m到达站\u001b[39m的名称是否正确！')
      return false
    }

    if (!(CONFIG.type === 'ADULT' || CONFIG.type === '0X00')) {
      console.log('请检查是否输入了正确的乘客类型！', CONFIG)
      return false
    }

    return true
  }

  /**
   * 把车站名字转换为车站代号
   */
  convertStationName({ CONFIG, stationInfo }) {
    Object.values(stationInfo).map((item) => {
      if (item.name == CONFIG.from) {
        CONFIG.from = item.code
      }
      if (item.name == CONFIG.to) {
        CONFIG.to = item.code
      }
    })

    return CONFIG
  }

  /**
   * 格式化车次数据
   */
  formatTrainData(data) {
    let ret = {}
    for (let i = 0; i < data.length; i++) {
      let row = data.split('|')
      ret = {
        trainNo: row[3], //车次
        trainNumber: row[2], //车票号
        startTime: row[8], //出发时间
        endTime: row[9], //到达时间
        fromStation: row[6], //出发站代号
        toStation: row[7], //到达站代号
        date: row[13], //出发日期
        canWebBuy: row[11], //是否能购买：Y 可以
        rw: row[23] ? row[23] : '无', //软卧
        rz: row[24] ? row[24] : '无', //软座
        yz: row[29] ? row[29] : '无',
        wz: row[26] ? row[26] : '无', //无座
        yw: row[28] ? row[28] : '无', //硬卧
        edz: row[30] ? row[30] : '无', //二等座
        ydz: row[31] ? row[31] : '无', //一等座
        swz: row[32] ? row[32] : '无', //商务座
      }
    }
    return ret
  }

  /**
   * 查询有没有余票
   */
  checkTickets(data) {
    const { rw, rz, wz, yw, edz, ydz, swz, trainNo } = data
    let tickets = [rw, rz, wz, yw, edz, ydz, swz]
    let haveEqually = false
    let littleTail = '余票数量没变化，不重复发邮件'

    if (tickets.some((item) => item != '无')) {
      if (this.isEqually(this.prev[data.trainNo], data)) {
        littleTail = '余票数量发生了变化，邮件已发送'
        this.upDatePrevData(data)
        this.sendMail(data)
      }

      if (!this.logger) return false
      console.log(
        `车次：${trainNo} 软卧：${rw} 软座：${rz} 无座：${wz} 硬卧：${yw} 二等座：${edz}  一等座：${ydz} 商务座：${swz} 当前时间：${new Date()}`
      )
      console.log(littleTail)
    }
  }

  /**
   * 检测票数是否有变化
   */
  isEqually(prev, next) {
    let ret = false
    let contrastKeys = ['rw', 'rz', 'wz', 'yw', 'edz', 'ydz', 'swz']

    if (prev == undefined) return true

    contrastKeys.map((item) => {
      if (prev[item] != next[item]) {
        ret = true
        return ret
      }
    })

    return ret
  }

  /**
   * 更新上一次的记录
   */
  upDatePrevData(data) {
    this.prev[data.trainNo] = data
  }

  /**
   * 查询目标车次信息
   */
  findTrainNo(trainData, target) {
    const { trainNo } = trainData

    // 检测有没有符合的车票
    target.split('|').map((item) => {
      if (trainNo.toUpperCase() == item.toUpperCase()) {
        this.checkTickets(trainData)
      }
    })
  }

  /**
   * 获取车次数据
   */
  async getTrainList() {
    if (!this.config) return false
    let config = this.config
    let url = `https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date=${config.date}&leftTicketDTO.from_station=${config.from}&leftTicketDTO.to_station=${config.to}&purpose_codes=${config.type}`

    let res = await axios.get(url, {
      headers: {
        Cookie: '_uab_collina=WX:xiaosin2333; JSESSIONID=WX:xiaosin2333;',
      },
    })

    if (res.data && res.data.httpstatus === 200) {
      const { data = {} } = res.data
      const { result = [] } = data

      if (result.length <= 0) {
        console.log('暂无车票信息')
        return false
      }

      result.map((item) => {
        let formatData = this.formatTrainData(item)
        // 寻找目标车次
        this.findTrainNo(formatData, config.trainNo)
      })
    } else {
      console.log('查询失败！请按照格式填写config配置的信息')
    }
  }

  /**
   * 发送邮件
   */
  sendMail(data) {
    const { trainNo, startTime, endTime, rw, rz, wz, yw, edz, ydz, swz } = data

    let mailOptions = {
      from: this.mail,
      to: this.mail, // 默认收件箱是发件箱 有需要可以自行更改
      subject: `${trainNo} 有票啦`,
      html: `
        车次：${trainNo}  <br />
        出发时间：${startTime} 到达时间：${endTime} <br />
        软卧：${rw} 软座：${rz}  <br />
        无座：${wz} 硬卧：${yw}  <br />
        二等座：${edz}  一等座：${ydz}  <br />
        商务座：${swz}  <br />
      `,
    }

    this.mailer.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log('发送失败：', err)
      }
    })
  }
}

new QueryTicket({
  CONFIG,
  STATION,
})
