# Nodejs版 12306查询余票小工具
一个 Nodejs 写的查询12306余票的小工具，查询到指定车次的车票后会反馈到邮箱

git地址：https://github.com/isxiaoxin/12306



### 已实现的功能

- 根据中文站点名称去查找对应的站点代号

- 支持查询单个/多个车次数据

- 定时监控余票数量

- 检测到指定车次票数的变化后发送新结果到邮箱

  

### 使用方法

1、把代码克隆到本地

```bash
$ git clone https://github.com/isxiaoxin/12306.git
```

2、安装依赖

```bash
$ npm install
// 或 yarn install
```

3、配置 config.js 内的信息

车次信息需要自行到12306网站搜集

```javascript
date: '2020-09-03', // 出发日期 格式：yyyy-mm-dd 如：2020-08-31
from: '广州', // 起始站中文
to: '郴州', // 到达站中文
type: 'ADULT', // 乘客类型 成人:ADULT，学生:0X00
trainNo: 'G822', // 需要监测的车次 多个车次用|隔开 如：G822|G1112 可忽略大小写
mail: '', // 邮箱地址 默认是qq邮箱 其他邮箱需要改nodemailer的配置
pass: '', // 邮箱的smtp授权码 不是qq密码 放心填写
```

4、执行命令

```bash
node start.js
```

执行之后是这样的 终端也能看到此次查询的信息 this.logger 为true时会输出 可自行更改

![http://xiaoxina.cc](https://s1.ax1x.com/2020/09/03/wCKgln.png)

默认每隔1分钟查询余票，有需要可自行调整 **start.js** 里的 this.interval

检测到余票后会收到这样一个邮件，可自行调整邮件模板或样式

![http://xiaoxina.cc](https://s1.ax1x.com/2020/09/03/wCE3gf.png)



### 其他

- 在不使用进程守护的情况下只能通过 `ctrl + c` 关闭查询（小菜鸡没用过 mac 哈哈）

- 有需要进程守护的可自行使用 pm2 - https://www.jianshu.com/p/e15fd72727fe
- 如果 `setInterval` 满足不了需求可自行使用 node-schedule



### 最后

目前只是实现出来第一版，有任何问题或建议可以给我提 issue 或者咨询我，代码里有我的联系方式噢~

