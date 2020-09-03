module.exports = {
  date: '', // 出发日期 格式：yyyy-mm-dd 如：2020-08-31
  from: '', // 起始站中文
  to: '', // 到达站中文
  type: '', // 乘客类型 成人:ADULT，学生:0X00
  trainNo: '', // 需要监测的车次 多个车次用|隔开 如：K6610|K9122 可忽略大小写
  mail: '', // 邮箱地址 默认是qq邮箱 其他邮箱需要改nodemailer的配置
  pass: '', // 邮箱的smtp授权码 不是qq密码 放心填写
}
