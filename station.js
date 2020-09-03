// 车站信息
const station = {
  "stationName": [
      "beijingbei",
      "beijingdong",
      "beijing",
      "beijingnan",
      "beijingxi",
      "guangzhounan",
      "chongqingbei",
      "chongqing",
      "chongqingnan",
      "guangzhoudong",
      "shanghai",
      "shanghainan",
      "shanghaihongqiao",
      "shanghaixi",
      "tianjinbei",
      "tianjin",
      "tianjinnan",
      "tianjinxi",
      "changchun",
      "changchunnan",
      "changchunxi",
      "chengdudong",
      "chengdunan",
      "chengdu",
      "changsha",
      "changshanan",
      "fuzhou",
      "fuzhounan",
      "guiyang",
      "guangzhou",
      "guangzhouxi",
      "haerbin",
      "haerbindong",
      "haerbinxi",
      "hefei",
      "hefeixi",
      "huhehaotedong",
      "huhehaote",
      "haikoudong",
      "haikou",
      "hangzhoudong",
      "hangzhou",
      "hangzhounan",
      "jinan",
      "jinandong",
      "jinanxi",
      "kunming",
      "kunmingxi",
      "lasa",
      "lanzhoudong",
      "lanzhou",
      "lanzhouxi",
      "nanchang",
      "nanjing",
      "nanjingnan",
      "nanning",
      "shijiazhuangbei",
      "shijiazhuang",
      "shenyang",
      "shenyangbei",
      "shenyangdong",
      "shenyangnan",
      "taiyuanbei",
      "taiyuandong",
      "taiyuan",
      "wuhan",
      "wangjiayingxi",
      "wulumuqinan",
      "xianbei",
      "xian",
      "xiannan",
      "xining",
      "yinchuan",
      "zhengzhou",
      "aershan",
      "ankang",
      "akesu",
      "alihe",
      "alashankou",
      "anping",
      "anqing",
      "anshun",
      "anshan",
      "anyang",
      "beian",
      "bengbu",
      "baicheng",
      "beihai",
      "baihe",
      "baijian",
      "baoji",
      "binjiang",
      "boketu",
      "baise",
      "baishanshi",
      "beitai",
      "baotoudong",
      "baotou",
      "beitunshi",
      "benxi",
      "baiyunebo",
      "baiyinxi",
      "bozhou",
      "chibi",
      "changde",
      "chengde",
      "changdian",
      "chifeng",
      "chaling",
      "cangnan",
      "changping",
      "chongren",
      "changtu",
      "changtingzhen",
      "caoxian",
      "chuxiongnan",
      "chenxiangtun",
      "changzhibei",
      "chizhou",
      "changzheng",
      "changzhou",
      "chenzhou",
      "changzhi",
      "cangzhou",
      "chongzuo",
      "daanbei",
      "dacheng",
      "dandong",
      "dongfanghong",
      "dongguandong",
      "dahushan",
      "dunhuang",
      "dunhua",
      "dehui",
      "dongjingcheng",
      "dajian",
      "dujiangyan",
      "dalianbei",
      "dali",
      "dalian",
      "dingnan",
      "daqing",
      "dongsheng",
      "dashiqiao",
      "datong",
      "dongying",
      "dayangshu",
      "duyun",
      "dengzhou",
      "dazhou",
      "dezhou",
      "ejina",
      "erlian",
      "enshi",
      "fuding",
      "fenghuangjichang",
      "fenglingdu",
      "fuling",
      "fulaerji",
      "fushunbei",
      "foshan",
      "fuxinnan",
      "fuyang",
      "geermu",
      "guanghan",
      "gujiao",
      "guilinbei",
      "gulian",
      "guilin",
      "gushi",
      "guangshui",
      "gantang",
      "guangyuan",
      "guangzhoubei",
      "ganzhou",
      "gongzhuling",
      "gongzhulingnan",
      "huaian",
      "huaibei",
      "hebei",
      "huaibin",
      "hebian",
      "huangchuan",
      "hancheng",
      "handan",
      "hengdaohezi",
      "hegang",
      "huanggutun",
      "hongguo",
      "heihe",
      "huaihua",
      "hankou",
      "huludao",
      "hailaer",
      "huolinguole",
      "hailun",
      "houma",
      "hami",
      "huainan",
      "huanan",
      "hainingxi",
      "heqing",
      "huairoubei",
      "huairou",
      "huangshidong",
      "huashan",
      "huangshan",
      "huangshi",
      "hengshui",
      "hengyang",
      "heze",
      "hezhou",
      "hanzhong",
      "huizhou",
      "jian",
      "jian",
      "jiangbiancun",
      "jincheng",
      "jinchengjiang",
      "jingdezhen",
      "jiafeng",
      "jiagedaqi",
      "jinggangshan",
      "jiaohe",
      "jinhuanan",
      "jinhua",
      "jiujiang",
      "jilin",
      "jingmen",
      "jiamusi",
      "jining",
      "jiningnan",
      "jiuquan",
      "jiangshan",
      "jishou",
      "jiutai",
      "jingtieshan",
      "jixi",
      "jiayuguan",
      "jiangyou",
      "jinzhou",
      "jinzhou",
      "jizhou",
      "kuerle",
      "kaifeng",
      "kelan",
      "kaili",
      "kashi",
      "kunshannan",
      "kuitun",
      "kaiyuan",
      "luan",
      "lingbao",
      "luchaogang",
      "longchang",
      "luchuan",
      "lichuan",
      "linchuan",
      "lucheng",
      "ludao",
      "loudi",
      "linfen",
      "lianggezhuang",
      "linhe",
      "luohe",
      "lvhua",
      "longhua",
      "lijiang",
      "linjiang",
      "longjing",
      "lvliang",
      "liling",
      "liulinnan",
      "luanping",
      "liupanshui",
      "lingqiu",
      "lvshun",
      "lanxi",
      "longxi",
      "lixian",
      "linxi",
      "longyan",
      "leiyang",
      "luoyang",
      "lianyungangdong",
      "luoyangdong",
      "linyi",
      "luoyanglongmen",
      "liuyuan",
      "lingyuan",
      "liaoyuan",
      "lizhi",
      "liuzhou",
      "liaozhong",
      "macheng",
      "mianduhe",
      "mudanjiang",
      "moerdaoga",
      "mingguang",
      "mangui",
      "mohe",
      "maoming",
      "maomingxi",
      "mishan",
      "masanjia",
      "mawei",
      "mianyang",
      "meizhou",
      "manzhouli",
      "ningbodong",
      "ningbo",
      "nancha",
      "nanchong",
      "nandan",
      "nandamiao",
      "nanfen",
      "nehe",
      "nenjiang",
      "neijiang",
      "nanping",
      "nantong",
      "nanyang",
      "nianzishan",
      "pingdingshan",
      "panjin",
      "pingliang",
      "pingliangnan",
      "pingquan",
      "pingshi",
      "pingxiang",
      "pingxiang",
      "pixianxi",
      "panzhihua",
      "qichun",
      "qingchengshan",
      "qingdao",
      "qinghecheng",
      "qujing",
      "qianjiang",
      "qianjinzhen",
      "qiqihaer",
      "qitaihe",
      "qinxian",
      "quanzhoudong",
      "quanzhou",
      "quzhou",
      "rongan",
      "rujigou",
      "ruijin",
      "rizhao",
      "shuangchengpu",
      "suifenhe",
      "shaoguandong",
      "shanhaiguan",
      "suihua",
      "sanjianfang",
      "sujiatun",
      "shulan",
      "sanming",
      "shenmu",
      "sanmenxia",
      "shangnan",
      "suining",
      "siping",
      "shangqiu",
      "shangrao",
      "shaoshan",
      "susong",
      "shantou",
      "shaowu",
      "shexian",
      "sanya",
      "shaoyang",
      "shiyan",
      "shuangyashan",
      "songyuan",
      "suzhou",
      "shenzhen",
      "suzhou",
      "suizhou",
      "shuozhou",
      "shenzhenxi",
      "tangbao",
      "taerqi",
      "tongguan",
      "tanggu",
      "tahe",
      "tonghua",
      "tailai",
      "tulufan",
      "tongliao",
      "tieling",
      "taolaizhao",
      "tumen",
      "tongren",
      "tangshanbei",
      "tianshifu",
      "taishan",
      "tangshan",
      "tianshui",
      "tongyuanpu",
      "taiyangsheng",
      "taizhou",
      "tongzi",
      "tongzhouxi",
      "wuchang",
      "wuchang",
      "wafangdian",
      "weihai",
      "wuhu",
      "wuhaixi",
      "wujiatun",
      "wulong",
      "wulanhaote",
      "weinan",
      "weishe",
      "waitoushan",
      "wuwei",
      "wuweinan",
      "wuxi",
      "wuxi",
      "wuyiling",
      "wuyishan",
      "wanyuan",
      "wanzhou",
      "wuzhou",
      "wenzhou",
      "wenzhounan",
      "xichang",
      "xuchang",
      "xichangnan",
      "xiangfang",
      "xuangang",
      "xingguo",
      "xuanhan",
      "xinhui",
      "xinhuang",
      "xilinhaote",
      "xinglongxian",
      "xiamenbei",
      "xiamen",
      "xiamengaoqi",
      "xiaoshi",
      "xiushan",
      "xiangtang",
      "xuanwei",
      "xinxiang",
      "xinyang",
      "xianyang",
      "xiangyang",
      "xiongyuecheng",
      "xinyi",
      "xingyi",
      "xinyu",
      "xuzhou",
      "yanan",
      "yibin",
      "yabulinan",
      "yebaishou",
      "yichangdong",
      "yongchuan",
      "yancheng",
      "yichang",
      "yuncheng",
      "yichun",
      "yuci",
      "yangcun",
      "yichunxi",
      "yiershi",
      "yangang",
      "yongji",
      "yanji",
      "yingkou",
      "yakeshi",
      "yanliang",
      "yulin",
      "yulin",
      "yalongwan",
      "yimianpo",
      "yining",
      "yangpingguan",
      "yuping",
      "yuanping",
      "yanqing",
      "yangquanqu",
      "yuquan",
      "yangquan",
      "yingshan",
      "yushan",
      "yanshan",
      "yushu",
      "yingtan",
      "yantai",
      "yitulihe",
      "yutianxian",
      "yiwu",
      "yangxin",
      "yixian",
      "yiyang",
      "yueyang",
      "yazhou",
      "yongzhou",
      "yangzhou",
      "zibo",
      "zhenchengdi",
      "zigong",
      "zhuhai",
      "zhuhaibei",
      "zhanjiang",
      "zhenjiang",
      "zhangjiajie",
      "zhangjiakou",
      "zhangjiakounan",
      "zhoukou",
      "zhelimu",
      "zhalantun",
      "zhumadian",
      "zhaoqing",
      "zhoushuizi",
      "zhaotong",
      "zhongwei",
      "ziyang",
      "zunyixi",
      "zaozhuang",
      "zizhong",
      "zhuzhou",
      "zaozhuangxi",
      "angangxi",
      "acheng",
      "anda",
      "ande",
      "anding",
      "anduo",
      "anguang",
      "aohan",
      "aihe",
      "anhua",
      "aijiacun",
      "aojiang",
      "anjia",
      "ajin",
      "anjing",
      "aketao",
      "ankouyao",
      "aolibugao",
      "anlong",
      "alongshan",
      "anlu",
      "amuer",
      "ananzhuang",
      "anqingxi",
      "anshanxi",
      "antang",
      "antingbei",
      "atushi",
      "antu",
      "anxi",
      "boao",
      "beibei",
      "baibiguan",
      "bengbunan",
      "bachu",
      "bancheng",
      "beidaihe",
      "baoding",
      "baodi",
      "badaling",
      "badong",
      "baiguo",
      "buhai",
      "baihedong",
      "benhong",
      "baohuashan",
      "baihexian",
      "baijigou",
      "bijiguan",
      "beijiao",
      "bijiang",
      "baijipo",
      "bijiashan",
      "bajiaotai",
      "baokang",
      "baikuipu",
      "bailang",
      "bailang",
      "bole",
      "baolage",
      "balin",
      "baolin",
      "beiliu",
      "boli",
      "buliekai",
      "baolongshan",
      "bailixia",
      "bamiancheng",
      "banmaoqing",
      "bamiantong",
      "beimaquanzi",
      "beipiaonan",
      "baiqi",
      "baoquanling",
      "baiquan",
      "bashan",
      "baishuijiang",
      "baishapo",
      "baishishan",
      "baishuizhen",
      "bantian",
      "botou",
      "beitun",
      "benxihu",
      "boxing",
      "baxiantong",
      "baiyinchagan",
      "beiyinhe",
      "beiying",
      "bayangaole",
      "baiyintala",
      "bayuquan",
      "baiyinshi",
      "baiyinhushuo",
      "bazhong",
      "bazhou",
      "beizhai",
      "chibibei",
      "chabuga",
      "changcheng",
      "changchong",
      "chengdedong",
      "chifengxi",
      "cuogang",
      "chaigang",
      "changge",
      "chaigoupu",
      "chenggu",
      "chenguanying",
      "chenggaozi",
      "caohai",
      "chaihe",
      "ceheng",
      "caohekou",
      "cuihuangkou",
      "chaohu",
      "caijiagou",
      "chengjisihan",
      "chajiang",
      "caijiapo",
      "changle",
      "chaolianggou",
      "cili",
      "changli",
      "changlingzi",
      "chenming",
      "changnong",
      "changpingbei",
      "changping",
      "changpoling",
      "chenqing",
      "caishan",
      "chushan",
      "changshou",
      "cishan",
      "cangshi",
      "caoshi",
      "chasuqi",
      "changshantun",
      "changting",
      "changtuxi",
      "chunwan",
      "cixian",
      "cenxi",
      "chenxi",
      "cixi",
      "changxingnan",
      "ciyao",
      "chunyang",
      "chengyang",
      "chuangyecun",
      "chaoyangchuan",
      "chaoyangdi",
      "chaoyangnan",
      "changyuan",
      "chaoyangzhen",
      "chuzhoubei",
      "changzhoubei",
      "chuzhou",
      "chaozhou",
      "changzhuang",
      "caozili",
      "chezhuanwan",
      "chenzhouxi",
      "cangzhouxi",
      "dean",
      "daan",
      "daba",
      "daban",
      "daba",
      "daobao",
      "dingbian",
      "dongbianjing",
      "debosi",
      "dachaigou",
      "dechang",
      "didao",
      "dadenggou",
      "daoerdeng",
      "deerbuer",
      "dongfang",
      "danfeng",
      "dongfeng",
      "duge",
      "daguantun",
      "daguan",
      "dongguang",
      "donghai",
      "dahuichang",
      "dahongqi",
      "shaodong",
      "donghaixian",
      "dehuixi",
      "dajiagou",
      "dongjin",
      "dujia",
      "dakoutun",
      "donglai",
      "delingha",
      "daluhao",
      "dailing",
      "dalin",
      "dalateqi",
      "dulitun",
      "douluo",
      "dalatexi",
      "dalianxi",
      "dongmingcun",
      "dongmiaohe",
      "dongmingxian",
      "dani",
      "dapingfang",
      "dapanshi",
      "dapu",
      "dapu",
      "daqilaha",
      "daoqing",
      "duiqingshan",
      "deqingxi",
      "daqingxi",
      "dongsheng",
      "dangshan",
      "dushan",
      "dengshahe",
      "dushupu",
      "dashitou",
      "dongshengxi",
      "dashizhai",
      "dongtai",
      "dingtao",
      "dengta",
      "datianbian",
      "dongtonghua",
      "dantu",
      "datun",
      "dongwan",
      "dawukou",
      "diwopu",
      "dawangtan",
      "dawanzi",
      "daxinggou",
      "daxing",
      "dingxi",
      "dianxin",
      "dongxiang",
      "daixian",
      "dingxiang",
      "dongxu",
      "dongxinzhuang",
      "danyang",
      "deyang",
      "dayan",
      "dangyang",
      "danyangbei",
      "dayingdong",
      "dongyudi",
      "daying",
      "dingyuan",
      "daiyue",
      "dayuan",
      "dayingzhen",
      "dayingzi",
      "dazhanchang",
      "dezhoudong",
      "dongzhi",
      "dizhuang",
      "dongzhen",
      "daozhou",
      "dongzhuang",
      "duizhen",
      "douzhuang",
      "dingzhou",
      "dazhuyuan",
      "dazhangzi",
      "douzhangzhuang",
      "ebian",
      "erdaogoumen",
      "erdaowan",
      "eerduosi",
      "erlong",
      "erlongshantun",
      "emei",
      "ermihe",
      "erying",
      "ezhou",
      "fuan",
      "fengcheng",
      "fengchengnan",
      "feidong",
      "faer",
      "fuhai",
      "fuhai",
      "fenghuangcheng",
      "fenhe",
      "fenghua",
      "fujin",
      "fanjiatun",
      "fuliqu",
      "fulitun",
      "fenglezhen",
      "funan",
      "funing",
      "funing",
      "fuqing",
      "fuquan",
      "fengshuicun",
      "fengshun",
      "fanshi",
      "fushun",
      "fushankou",
      "fusui",
      "fengtun",
      "futuyu",
      "fuxiandong",
      "fengxian",
      "fuxian",
      "feixian",
      "fengyang",
      "fenyang",
      "fuyubei",
      "fenyi",
      "fuyuan",
      "fuyu",
      "fuyu",
      "fuzhoubei",
      "fengzhou",
      "fengzhen",
      "fanzhen",
      "guan",
      "guangan",
      "gaobeidian",
      "goubangzi",
      "gancaodian",
      "gucheng",
      "gaocheng",
      "gaocun",
      "guchengzhen",
      "guangde",
      "guiding",
      "guidingnan",
      "gudong",
      "guigang",
      "guangao",
      "gegenmiao",
      "gangou",
      "gangu",
      "gaogezhuang",
      "ganhe",
      "genhe",
      "guojiadian",
      "gujiazi",
      "gulang",
      "gaolan",
      "gaoloufang",
      "guiliuhe",
      "guanlin",
      "ganluo",
      "guoleizhuang",
      "gaomi",
      "gongmiaozi",
      "gongnonghu",
      "guangningsinan",
      "guangnanwei",
      "gaoping",
      "ganquanbei",
      "gongqingcheng",
      "ganqika",
      "ganquan",
      "gaoqiaozhen",
      "guanshui",
      "ganshui",
      "gushankou",
      "guosong",
      "gaoshanzi",
      "gashidianzi",
      "gaotai",
      "gaotan",
      "gutian",
      "guanting",
      "guantingxi",
      "guixi",
      "guoyang",
      "gongyi",
      "gaoyi",
      "gongyinan",
      "guangyuannan",
      "guyuan",
      "guyuan",
      "gongyingzi",
      "guangze",
      "guzhen",
      "guzhen",
      "guozhen",
      "guazhou",
      "gaozhou",
      "gaizhou",
      "guanzijing",
      "guanzhaishan",
      "gaizhouxi",
      "huaiannan",
      "hongan",
      "haianxian",
      "honganxi",
      "huangbai",
      "haibei",
      "hebi",
      "huichangbei",
      "huacheng",
      "hechun",
      "hanchuan",
      "haicheng",
      "hechuan",
      "heichongtan",
      "huangcun",
      "haichengxi",
      "huade",
      "hongtong",
      "huoerguosi",
      "hengfeng",
      "hanfuwan",
      "hangu",
      "huangguayuan",
      "hongguangzhen",
      "hunhe",
      "honghuagou",
      "huanghuatong",
      "hejiadian",
      "hejing",
      "hongjiang",
      "heijing",
      "huojia",
      "hejin",
      "hanjiang",
      "huajia",
      "hangjinhouqi",
      "hejianxi",
      "huajiazhuang",
      "hekounan",
      "huangkou",
      "hukou",
      "hulan",
      "huludaobei",
      "haolianghe",
      "halahai",
      "heli",
      "hualin",
      "huangling",
      "hailin",
      "hulin",
      "hanling",
      "helong",
      "hailong",
      "halasu",
      "hulusitai",
      "huolianzhai",
      "huangmei",
      "hanmaying",
      "huangnihe",
      "haining",
      "huinong",
      "heping",
      "huapengzi",
      "huaqiao",
      "hongqing",
      "huairen",
      "huarong",
      "huangsongdian",
      "heshituoluogai",
      "hongshan",
      "hanshou",
      "hengshan",
      "heishui",
      "huishan",
      "hushiha",
      "hongsipu",
      "hushitai",
      "haishiwan",
      "hengshanxi",
      "hongshaxian",
      "heitai",
      "huantai",
      "hetian",
      "huitong",
      "haituozi",
      "heiwang",
      "haiwan",
      "hongxing",
      "huixian",
      "hongxinglong",
      "huanxintian",
      "hongxiantai",
      "hongyan",
      "heyang",
      "haiyang",
      "hengyangdong",
      "huaying",
      "hanyin",
      "huangyangtan",
      "hanyuan",
      "heyuan",
      "huayuan",
      "huangyuan",
      "huangyangzhen",
      "huzhou",
      "huazhou",
      "huangzhou",
      "huozhou",
      "huizhouxi",
      "jubao",
      "jingbian",
      "jinbaotun",
      "jinchengbei",
      "jinchang",
      "juancheng",
      "jiaocheng",
      "jianchang",
      "junde",
      "jingdian",
      "jidong",
      "jiangdu",
      "jiguanshan",
      "jingoutun",
      "jinghai",
      "jinhe",
      "jinhe",
      "jinghe",
      "jinghenan",
      "jianghua",
      "jianhu",
      "jijiagou",
      "jinjiang",
      "jinjie",
      "jiangjia",
      "jiangjin",
      "jinkeng",
      "jiling",
      "jinmacun",
      "jiangmendong",
      "jiaomei",
      "junan",
      "jingnan",
      "jianou",
      "jingpeng",
      "jiangqiao",
      "jiusan",
      "jinshanbei",
      "jiashan",
      "jingshan",
      "jianshi",
      "jishan",
      "jishu",
      "jianshe",
      "jiashan",
      "jiashannan",
      "jinshantun",
      "jiangsuotian",
      "jingtai",
      "jiutainan",
      "jiwen",
      "jinxian",
      "juxian",
      "jiaxiang",
      "jiexiu",
      "jiaxing",
      "jingxing",
      "jiaxingnan",
      "jiaxinzi",
      "jiangyan",
      "jieyang",
      "jianyang",
      "jianyang",
      "juye",
      "jiangyong",
      "jinyun",
      "jingyuan",
      "jiangyuan",
      "jiyuan",
      "jingyuanxi",
      "jiaozhoubei",
      "jiaozuodong",
      "jinzhai",
      "jingzhou",
      "jingzhou",
      "jiaozhou",
      "jinzhou",
      "jinzhounan",
      "jiaozuo",
      "jiuzhuangwo",
      "jinzhangzi",
      "kaian",
      "kuche",
      "kangcheng",
      "kuduer",
      "kuandian",
      "kedong",
      "kundulunzhao",
      "kaijiang",
      "kangjinjing",
      "kalaqi",
      "kailu",
      "kelamayi",
      "kouqian",
      "kunshan",
      "kuishan",
      "keshan",
      "kaitong",
      "kangxiling",
      "kunyang",
      "keyihe",
      "kaiyuanxi",
      "kangzhuang",
      "laibin",
      "laobian",
      "lingbaoxi",
      "longchuan",
      "lechang",
      "licheng",
      "liaocheng",
      "lancun",
      "liangdang",
      "lindong",
      "ledu",
      "liangdixia",
      "liudaohezi",
      "lufan",
      "langfang",
      "luofa",
      "langfangbei",
      "laofu",
      "langang",
      "longgudian",
      "lugou",
      "longgou",
      "lagu",
      "linhai",
      "linhai",
      "laha",
      "linghai",
      "liuhe",
      "liuhe",
      "longhua",
      "luanheyan",
      "liuhezhen",
      "liangjiadian",
      "liujiadian",
      "liujiahe",
      "lianjiang",
      "lujiang",
      "lijia",
      "luojiang",
      "lianjiang",
      "liangjia",
      "longjiang",
      "longjia",
      "lianjiangkou",
      "linjialou",
      "lijiaping",
      "lankao",
      "linkou",
      "lukoupu",
      "laolai",
      "lalin",
      "luliang",
      "longli",
      "linli",
      "lanling",
      "lingling",
      "lulong",
      "lamadian",
      "limudian",
      "luomen",
      "longnan",
      "liangping",
      "luoping",
      "luopoling",
      "liupanshan",
      "linqing",
      "longquansi",
      "leshanbei",
      "leshancun",
      "lengshuijiangdong",
      "lianshanguan",
      "liushuigou",
      "lingshui",
      "lishui",
      "luoshan",
      "lushan",
      "liangshan",
      "lingshi",
      "lushuihe",
      "lushan",
      "linshengpu",
      "liushutun",
      "longshanzhen",
      "lishuzhen",
      "lishizhai",
      "litang",
      "luntai",
      "lutai",
      "longtangba",
      "laituan",
      "luotuoxiang",
      "liwang",
      "laiwudong",
      "langweishan",
      "lingwu",
      "laiwuxi",
      "langxiang",
      "longxian",
      "linxiang",
      "luxi",
      "laixi",
      "linxi",
      "luanxian",
      "lueyang",
      "laiyang",
      "liaoyang",
      "linyibei",
      "lingyuandong",
      "lianyungang",
      "linying",
      "laoying",
      "longyou",
      "luoyuan",
      "linyuan",
      "lianyuan",
      "laiyuan",
      "leiyangxi",
      "linze",
      "longzhuagou",
      "leizhou",
      "liuzhi",
      "luzhai",
      "laizhou",
      "longzhen",
      "lazha",
      "lanzhouxinqu",
      "maanshan",
      "maoba",
      "maobaguan",
      "machengbei",
      "mianchi",
      "mingcheng",
      "miaocheng",
      "mianchinan",
      "maocaoping",
      "mengdonghe",
      "modaoshi",
      "midu",
      "maoershan",
      "minggang",
      "meihekou",
      "mahuang",
      "mengjiagang",
      "meilan",
      "miluodong",
      "malianhe",
      "maoling",
      "miaoling",
      "maolin",
      "muling",
      "malin",
      "malong",
      "mulitu",
      "miluo",
      "manasihu",
      "mianning",
      "mupang",
      "maqiaohe",
      "minqing",
      "minquan",
      "mingshuihe",
      "mashan",
      "meishan",
      "manshuiwan",
      "maoshezu",
      "mishazi",
      "meixi",
      "mianxian",
      "mayang",
      "miyunbei",
      "miyi",
      "maiyuan",
      "moyu",
      "miaozhuang",
      "mizhi",
      "mingzhu",
      "ningan",
      "nongan",
      "nanboshan",
      "nanqiu",
      "nanchengsi",
      "ningcun",
      "ningde",
      "nanguancun",
      "nangongdong",
      "nanguanling",
      "ningguo",
      "ninghai",
      "nanhuabei",
      "nanhechuan",
      "nihezi",
      "ningjia",
      "nanjing",
      "niujia",
      "nengjia",
      "nankou",
      "nankouqian",
      "nanlang",
      "nailin",
      "nileke",
      "naluo",
      "ninglingxian",
      "naiman",
      "ningming",
      "nanmu",
      "nanpingnan",
      "napu",
      "nanqiao",
      "naqu",
      "nuanquan",
      "nantai",
      "nantou",
      "ningwu",
      "nanwanzi",
      "nanxiangbei",
      "ningxiang",
      "neixiang",
      "niuxintai",
      "nanyu",
      "niangziguan",
      "nanzhao",
      "nanzamu",
      "pengan",
      "pingan",
      "pinganyi",
      "pananzhen",
      "pinganzhen",
      "puchengdong",
      "pucheng",
      "peide",
      "piandian",
      "pingdingshanxi",
      "podixia",
      "piaoertun",
      "pingfang",
      "pinggang",
      "pingguan",
      "panguan",
      "pingguo",
      "paihuaibei",
      "pinghekou",
      "pinghu",
      "panjinbei",
      "panjiadian",
      "pikounan",
      "pulandian",
      "pianling",
      "pingshan",
      "pengshan",
      "pishan",
      "panshi",
      "pingshe",
      "pengshui",
      "pingtai",
      "pingtian",
      "putian",
      "putaojing",
      "puwan",
      "pingwang",
      "pingxingguan",
      "puxiong",
      "pixian",
      "pingyang",
      "pengyang",
      "pingyao",
      "pingyi",
      "pingyuanpu",
      "pingyuan",
      "pingyu",
      "pengze",
      "pizhou",
      "pingzhuang",
      "paozi",
      "pingzhuangnan",
      "qianan",
      "qingan",
      "qianan",
      "qidongbei",
      "qidian",
      "qufudong",
      "qingfeng",
      "qifengta",
      "qufu",
      "qionghai",
      "qinhuangdao",
      "qianhe",
      "qinghe",
      "qinghemen",
      "qinghuayuan",
      "quanjiao",
      "qujiu",
      "qianjiang",
      "qinjia",
      "qijiang",
      "qijiapu",
      "qingjianxian",
      "qinjiazhuang",
      "qilihe",
      "qinling",
      "quli",
      "qinglong",
      "qinglongshan",
      "qimen",
      "qianmotou",
      "qingshan",
      "queshan",
      "qianshan",
      "qingshui",
      "qishuyan",
      "qingtian",
      "qiaotou",
      "qingtongxia",
      "qianwei",
      "qianweitang",
      "quxian",
      "qixian",
      "qingxian",
      "qiaoxi",
      "qingxu",
      "qixiaying",
      "qianyang",
      "qinyang",
      "quanyang",
      "qiyangbei",
      "qiying",
      "qingyangshan",
      "qingyuan",
      "qingyuan",
      "qinzhoudong",
      "qinzhou",
      "qingzhoushi",
      "ruian",
      "rongchang",
      "ruichang",
      "rugao",
      "ronggui",
      "renqiu",
      "rushan",
      "rongshui",
      "reshui",
      "rongxian",
      "raoyang",
      "ruyang",
      "raoyanghe",
      "ruzhou",
      "shiba",
      "shangbancheng",
      "shibing",
      "shangbanchengnan",
      "shiboyuan",
      "shuangchengbei",
      "shucheng",
      "shangcheng",
      "shache",
      "shunchang",
      "shenchi",
      "shacheng",
      "shicheng",
      "shanchengzhen",
      "shandan",
      "shunde",
      "suide",
      "shuidong",
      "shangdu",
      "shidu",
      "sidaowan",
      "shundexueyuan",
      "shenfang",
      "shuangfeng",
      "sifangtai",
      "shuifu",
      "sanguankou",
      "sanggendalai",
      "shaoguan",
      "shanggaozhen",
      "shanghang",
      "shahai",
      "songhe",
      "shahe",
      "shahekou",
      "saihantala",
      "shaheshi",
      "shahousuo",
      "shanhetun",
      "sanhexian",
      "siheyong",
      "sanhuizhen",
      "shuanghezhen",
      "shihezi",
      "sanhezhuang",
      "sanjiadian",
      "shuijiahu",
      "shenjiahe",
      "songjianghe",
      "shangjia",
      "sunjia",
      "shenjia",
      "shuangji",
      "songjiang",
      "sanjiangkou",
      "sijialing",
      "songjiangnan",
      "shijingshannan",
      "shaojiatang",
      "sanjiangxian",
      "sanjiazhai",
      "shijiazi",
      "songjiangzhen",
      "shijiazui",
      "shenjingzi",
      "shilidian",
      "shule",
      "shulehe",
      "shelihu",
      "shilin",
      "shilin",
      "shuangliao",
      "suiling",
      "shiling",
      "shilinnan",
      "shilong",
      "salaqi",
      "suolun",
      "shangluo",
      "shalingzi",
      "shimenxianbei",
      "sanmenxianan",
      "sanmenxian",
      "shimenxian",
      "sanmenxiaxi",
      "suning",
      "song",
      "shuangpai",
      "sipingdong",
      "suiping",
      "shapotou",
      "shaqiao",
      "shangqiunan",
      "shuiquan",
      "shiquanxian",
      "shiqiaozi",
      "shirencheng",
      "shiren",
      "shanshi",
      "shenshu",
      "shanshan",
      "sanshui",
      "sishui",
      "shishan",
      "songshu",
      "shoushan",
      "sanshijia",
      "sanshilipu",
      "songshuzhen",
      "songtao",
      "suotuhan",
      "santangji",
      "shitou",
      "shentou",
      "shatuo",
      "shangwan",
      "sunwu",
      "shawanxian",
      "shexian",
      "suixi",
      "shaxian",
      "shaoxing",
      "shixian",
      "shangxipu",
      "shixiazi",
      "shuyang",
      "suiyang",
      "shouyang",
      "shuiyang",
      "sanyangchuan",
      "shangyaodun",
      "sanying",
      "shunyi",
      "sanyijing",
      "sanyuanpu",
      "shangyu",
      "sanyuan",
      "shangyuan",
      "shuiyuan",
      "sangyuanzi",
      "suizhongbei",
      "suzhoubei",
      "suzhoudong",
      "shenzhendong",
      "shenzhou",
      "sunzhen",
      "suizhong",
      "shangzhi",
      "shizhuang",
      "songzi",
      "shizong",
      "suzhouyuanqu",
      "suzhouxinqu",
      "taian",
      "taian",
      "tonganyi",
      "tongbai",
      "tongbei",
      "tongcheng",
      "tangchi",
      "tancheng",
      "tiechang",
      "taocun",
      "tongdao",
      "tiandong",
      "tiangang",
      "tuguiwula",
      "tonggou",
      "taigu",
      "taha",
      "tanghai",
      "tanghe",
      "taihe",
      "taihu",
      "tuanjie",
      "tanjiajing",
      "taojiatun",
      "tangjiawan",
      "tongjunzhuang",
      "taikang",
      "tuliemaodu",
      "tulihe",
      "tongling",
      "tianlin",
      "tingliang",
      "tieli",
      "tielingxi",
      "tumenbei",
      "tianmen",
      "tianmennan",
      "taimushan",
      "tumuertai",
      "tumenzi",
      "taonan",
      "tongnan",
      "taipingchuan",
      "taipingzhen",
      "tuqiang",
      "taiqian",
      "tianqiaoling",
      "tuqiaozi",
      "tangshancheng",
      "taoshan",
      "tashizui",
      "tongtu",
      "tongxin",
      "tuxi",
      "tongxiang",
      "tianyang",
      "tianyi",
      "tangyin",
      "tuoyaoling",
      "taiyangshan",
      "tangyuan",
      "tayayi",
      "tengzhoudong",
      "taizhou",
      "tianzhu",
      "tengzhou",
      "tianzhen",
      "tongzilin",
      "tianzhushan",
      "wenan",
      "wuan",
      "wanganzhen",
      "wubu",
      "wangcang",
      "wuchagou",
      "wenchang",
      "wenchun",
      "wudalianchi",
      "wendeng",
      "wudaogou",
      "wudaohe",
      "wendi",
      "weidong",
      "wudangshan",
      "wangdu",
      "wuerqihan",
      "weifang",
      "wanfatun",
      "wangfu",
      "wafangdianxi",
      "wanggang",
      "wugong",
      "wangou",
      "wuguantian",
      "wuhai",
      "weihe",
      "weihui",
      "wujiachuan",
      "wujia",
      "weiqing",
      "wuji",
      "weijin",
      "wangjiawan",
      "woken",
      "wukeshu",
      "wulongbei",
      "wulanhada",
      "wanle",
      "walagan",
      "wenling",
      "wulian",
      "wulateqianqi",
      "wulashan",
      "wolitun",
      "weinanbei",
      "wunuer",
      "wanning",
      "wannian",
      "weinannan",
      "weinanzhen",
      "wopi",
      "wuqiao",
      "wangqing",
      "wuqing",
      "wushan",
      "wenshui",
      "weishanzhuang",
      "wangtong",
      "wutaishan",
      "wangtuanzhuang",
      "wuwu",
      "wuxidong",
      "weixing",
      "wenxi",
      "wuxiang",
      "wuxixinqu",
      "wuxue",
      "wuxu",
      "wangyang",
      "wuyi",
      "wuying",
      "wayaotian",
      "wuyuan",
      "weizigou",
      "weizhuang",
      "wuzhai",
      "wangzhaotun",
      "weizizhen",
      "weizhangzi",
      "xinan",
      "xingan",
      "xinanxian",
      "xinbaoan",
      "xiabancheng",
      "xibali",
      "xuancheng",
      "xingcheng",
      "xiaocun",
      "xinchuoyuan",
      "xiachengzi",
      "xinchengzi",
      "xide",
      "xiaodejiang",
      "xidamiao",
      "xiaodong",
      "xiaodong",
      "xinfeng",
      "xiangfen",
      "xifeng",
      "xingan",
      "xiaogan",
      "xigucheng",
      "xigu",
      "xiaguanying",
      "xigangzi",
      "xianghe",
      "xinhe",
      "xuanhe",
      "xiehejian",
      "xinhuatun",
      "xinhua",
      "xinhua",
      "xuanhua",
      "xinghexi",
      "xiaoheyan",
      "xiahuayuan",
      "xiaohezhen",
      "xujia",
      "xiajiang",
      "xinjiang",
      "xinji",
      "xinjiang",
      "xijiekou",
      "xujiatun",
      "xujiatai",
      "xiejiazhen",
      "xingkai",
      "xiaolan",
      "xianglan",
      "xinglongdian",
      "xinle",
      "xinlin",
      "xiaoling",
      "xinli",
      "xilin",
      "xiliu",
      "xianlin",
      "xinlitun",
      "xinglongzhen",
      "xinlizhen",
      "xinmin",
      "ximashan",
      "xiamatang",
      "xiaonan",
      "xianningbei",
      "xingning",
      "xianning",
      "xipudong",
      "xiping",
      "xingping",
      "xinpingtian",
      "xiapu",
      "xupu",
      "xipu",
      "xinqing",
      "xinqiu",
      "xingquanbu",
      "xianrenqiao",
      "xiaosigou",
      "xingshu",
      "xishui",
      "xiashe",
      "xushui",
      "xiashi",
      "xiaoshao",
      "xinsongpu",
      "xingshutun",
      "xusanwan",
      "xiangtan",
      "xingtai",
      "xiantaoxi",
      "xiataizi",
      "xuwen",
      "xinwopu",
      "xiuwu",
      "xinxian",
      "xixian",
      "xixiang",
      "xiangxiang",
      "xixia",
      "xiaoxi",
      "xiaoxinjie",
      "xinxingxian",
      "xixiaozhao",
      "xiaoxizhuang",
      "xiangyang",
      "xunyang",
      "xunyangbei",
      "xiangyangdong",
      "xingye",
      "xiaoyugu",
      "xinyi",
      "xiaoyuejiu",
      "xiaoyangqi",
      "xiangyun",
      "xiangyuan",
      "xiayixian",
      "xinyouyi",
      "xinyangzhen",
      "xuzhoudong",
      "xinzhangfang",
      "xuanzhong",
      "xinzhao",
      "xinzhou",
      "xizi",
      "xizhelimu",
      "xinzhangzi",
      "yaoan",
      "yian",
      "yongan",
      "yonganxiang",
      "yabuli",
      "yuanbaoshan",
      "yangcao",
      "yangcaodi",
      "yangchenghu",
      "yingchun",
      "yecheng",
      "yanchi",
      "yanchuan",
      "yangchun",
      "yicheng",
      "yingcheng",
      "yucheng",
      "yancheng",
      "yangcheng",
      "yangcha",
      "yuncheng",
      "yanchi",
      "yuncailing",
      "yuchengxian",
      "yingchengzi",
      "yingde",
      "yongdeng",
      "yindi",
      "yongding",
      "yandangshan",
      "yudu",
      "yuandun",
      "yingdexi",
      "yongfengying",
      "yanggang",
      "yanggao",
      "yanggu",
      "youhao",
      "yuhang",
      "yanhecheng",
      "yanhui",
      "yangjiuhe",
      "yongjia",
      "yingjie",
      "yanjin",
      "yujiang",
      "yanjiao",
      "yaojia",
      "yuejiajing",
      "yijianpu",
      "yingjisha",
      "yunjusi",
      "yanjiazhuang",
      "yongkang",
      "yinlang",
      "yonglang",
      "yiliangbei",
      "yongledian",
      "yilaha",
      "yilin",
      "yangling",
      "yiliang",
      "yanglin",
      "yuliangpu",
      "yangliuqing",
      "yueliangtian",
      "yima",
      "yangmingbu",
      "yumen",
      "yunmeng",
      "yuanmou",
      "yimianshan",
      "yinan",
      "yinai",
      "yiningdong",
      "yingpanshui",
      "yangpu",
      "yangquanbei",
      "yueqing",
      "yanqi",
      "yuanqian",
      "yaoqianhutun",
      "yangqu",
      "yushugou",
      "yueshan",
      "yushi",
      "yushe",
      "yanshi",
      "yishui",
      "yushe",
      "yingshang",
      "yaoshang",
      "yuanshi",
      "yangshuling",
      "yesanpo",
      "yushutun",
      "yushutai",
      "yingshouyingzi",
      "yuantan",
      "yatunpu",
      "yantongshan",
      "yantongtun",
      "yangweishao",
      "yuexi",
      "youxian",
      "yongxiu",
      "yuxixi",
      "yiyang",
      "yuyao",
      "youyang",
      "yueyangdong",
      "yangyi",
      "yayuan",
      "yuanyangzhen",
      "yanzibian",
      "yizheng",
      "yizhou",
      "yanzhou",
      "yizi",
      "yangzhewo",
      "yangzhangzi",
      "zhenan",
      "zhian",
      "zhaobai",
      "zhangbaiwan",
      "zhongchuanjichang",
      "zhicheng",
      "zichang",
      "zhucheng",
      "zoucheng",
      "zhaocheng",
      "zhangdang",
      "zhengding",
      "zhaodong",
      "zhaofupu",
      "zhanggutai",
      "zhaoguang",
      "zhonghe",
      "zhonghuamen",
      "zhijiangbei",
      "zhongjiacun",
      "zhujiagou",
      "zijingguan",
      "zhoujia",
      "zhuji",
      "zhenjiangnan",
      "zhoujiatun",
      "zhujiawan",
      "zhanjiangxi",
      "zhujiayao",
      "zengjiapingzi",
      "zhanglan",
      "zhenlai",
      "zaolin",
      "zhalute",
      "zhalainuoerxi",
      "zhangmutou",
      "zhongmu",
      "zhongningdong",
      "zhongning",
      "zhongningnan",
      "zhenping",
      "zhangping",
      "zepu",
      "zaoqiang",
      "zhangqiao",
      "zhangqiu",
      "zhurihe",
      "zerunli",
      "zhongshanbei",
      "zhangshudong",
      "zhusihua",
      "zhongshan",
      "zhashui",
      "zhongshan",
      "zhangshu",
      "zhuwo",
      "zhangweitun",
      "zhangwu",
      "zongxi",
      "zhongxiang",
      "zixi",
      "zhenxi",
      "zhangxin",
      "zhengxiangbaiqi",
      "ziyang",
      "zaoyang",
      "zhuyuanba",
      "zhangye",
      "zhenyuan",
      "zhangzhoudong",
      "zhangzhou",
      "zhuangzhi",
      "zizhou",
      "zhongzhai",
      "zhuozhou",
      "zhazi",
      "zhuozishan",
      "zhuzhouxi",
      "zhengzhouxi",
      "abagaqi",
      "aershanbei",
      "aletai",
      "anren",
      "anshunxi",
      "antuxi",
      "anyangdong",
      "bobai",
      "babu",
      "bencha",
      "baodingdong",
      "bafangshan",
      "baigou",
      "binhai",
      "binhaibei",
      "baojinan",
      "beijingzi",
      "baimajing",
      "baoqing",
      "bishan",
      "baishapu",
      "baishuixian",
      "bantang",
      "benxixincheng",
      "binxian",
      "binyang",
      "baiyangdian",
      "baiyi",
      "baiyinhuanan",
      "bazhongdong",
      "binzhou",
      "bazhouxi",
      "chengcheng",
      "chenggubei",
      "chaganhu",
      "chaohudong",
      "congjiang",
      "chaka",
      "changlinhe",
      "chalingnan",
      "changpingdong",
      "changpingnan",
      "changqingqiao",
      "changshoubei",
      "changshouhu",
      "chaoshan",
      "changshan",
      "changshaxi",
      "chaotian",
      "changtingnan",
      "changwu",
      "changxing",
      "cangxi",
      "changyang",
      "chaoyang",
      "chengzitan",
      "dongandong",
      "debao",
      "duchang",
      "dongcha",
      "dongchengnan",
      "dongdaihe",
      "dandongxi",
      "dongerdaohe",
      "dafeng",
      "dafangnan",
      "donggangbei",
      "dagushan",
      "dongguan",
      "dinghudong",
      "dinghushan",
      "daojiao",
      "dongjing",
      "dianjiang",
      "daju",
      "dali",
      "dalangzhen",
      "daqinggou",
      "deqing",
      "dangshannan",
      "dashitounan",
      "dangtudong",
      "datongxi",
      "dawang",
      "dingxibei",
      "dexingdong",
      "dexing",
      "danxiashan",
      "dayebei",
      "duyundong",
      "dayu",
      "dingzhoudong",
      "duanzhou",
      "dazunan",
      "emeishan",
      "epanggong",
      "ezhoudong",
      "fangchenggangbei",
      "fengchengdong",
      "fuchuan",
      "fanchangxi",
      "fengdu",
      "fulingbei",
      "fenglin",
      "funing",
      "foping",
      "faqi",
      "furongnan",
      "fusheng",
      "fusong",
      "foshanxi",
      "fushanzhen",
      "futian",
      "fuyuanbei",
      "fuyuan",
      "fuzhoudong",
      "fuzhou",
      "gaoan",
      "guangannan",
      "guian",
      "gaobeidiandong",
      "gongcheng",
      "gaochengnan",
      "guidingbei",
      "gediannan",
      "guidingxian",
      "guanghanbei",
      "gaohua",
      "geju",
      "guanling",
      "guilinxi",
      "guangmingcheng",
      "guangning",
      "guangningsi",
      "guangnanxian",
      "guiping",
      "gongpengzi",
      "guangshan",
      "gushan",
      "guanshaling",
      "gutianbei",
      "guangtongbei",
      "gaotainan",
      "gutianhuizhi",
      "guiyangbei",
      "guiyangdong",
      "gaoyixi",
      "huian",
      "huaibeibei",
      "hebidong",
      "hanconggou",
      "huocheng",
      "hunchun",
      "handandong",
      "huidong",
      "hadapu",
      "haidongxi",
      "hongtongxi",
      "haerbinbei",
      "hefeibeicheng",
      "hefeinan",
      "huanggang",
      "huanggangdong",
      "henggouqiaodong",
      "huanggangxi",
      "honghe",
      "huaihuanan",
      "huanghejingqu",
      "huahu",
      "huihuan",
      "houhu",
      "huaiji",
      "hekoubei",
      "huangliu",
      "huanglingnan",
      "houmen",
      "humen",
      "houmaxi",
      "hengnan",
      "huainandong",
      "hepu",
      "huoqiu",
      "huairendong",
      "huarongdong",
      "huarongnan",
      "huangshibei",
      "huangshanbei",
      "hengshuibei",
      "heshengqiaodong",
      "heshuo",
      "huashannan",
      "hetang",
      "huangtudian",
      "heyangbei",
      "haiyangbei",
      "huaiyin",
      "huyi",
      "huayuankou",
      "huozhoudong",
      "huizhounan",
      "jianan",
      "jingchuan",
      "jingdezhenbei",
      "jingde",
      "jianfeng",
      "jinhai",
      "jiaohexi",
      "junliangchengbei",
      "jiangle",
      "jialuhe",
      "jiulangshan",
      "jimobei",
      "jianmenguan",
      "jianningxianbei",
      "jiangning",
      "jiangningxi",
      "jianouxi",
      "jiuquannan",
      "jurongxi",
      "jianshui",
      "jianshan",
      "jieshoushi",
      "jixibei",
      "jiexiudong",
      "jingxian",
      "jingxi",
      "jinxiannan",
      "jiangyoubei",
      "jiayuguannan",
      "jianyangnan",
      "jinyintan",
      "jingyu",
      "jinyuewan",
      "jinyunxi",
      "jinzhong",
      "jingzhou",
      "kaifengbei",
      "kaifusi",
      "kaihua",
      "kailinan",
      "kulun",
      "kunmingnan",
      "kuitan",
      "kaiyang",
      "longandong",
      "laibinbei",
      "lingbi",
      "liaobu",
      "lvboyuan",
      "longchangbei",
      "lechangdong",
      "lincheng",
      "luocheng",
      "lingcheng",
      "laochengzhen",
      "longdongbao",
      "ledunan",
      "loudinan",
      "ledong",
      "liduigongyuan",
      "lufeng",
      "longfeng",
      "lufengnan",
      "linfenxi",
      "lingaonan",
      "lugu",
      "luanhe",
      "luohexi",
      "luojiangdong",
      "liujiang",
      "lijinnan",
      "lankaonan",
      "lanlingbei",
      "longlibei",
      "lilinbei",
      "lilingdong",
      "longnan",
      "liangpingnan",
      "liquan",
      "lingshidong",
      "leshan",
      "longshi",
      "lishui",
      "luowansanjiang",
      "laixibei",
      "liyang",
      "linyi",
      "liuyuannan",
      "luzhaibei",
      "langzhong",
      "linzenan",
      "maanshandong",
      "maochen",
      "minggangdong",
      "minhenan",
      "minji",
      "malan",
      "minle",
      "mile",
      "manasi",
      "muping",
      "minqingbei",
      "minquanbei",
      "meishandong",
      "miaoshan",
      "minxian",
      "menyuan",
      "muyun",
      "mengzibei",
      "mengzhuang",
      "mengzi",
      "nanbu",
      "nancao",
      "nanchongbei",
      "nancheng",
      "nanchangxi",
      "ningdongnan",
      "ningdong",
      "nanfenbei",
      "nanfeng",
      "nanhudong",
      "neijiangbei",
      "nanjiang",
      "nanjiangkou",
      "nanling",
      "nimu",
      "nanningdong",
      "nanningxi",
      "nanpingbei",
      "ningqiangnan",
      "nanxiong",
      "nayong",
      "nanyangzhai",
      "puan",
      "puanxian",
      "pingbian",
      "pingbanan",
      "pingchang",
      "puding",
      "pingdu",
      "pikou",
      "panlongcheng",
      "puning",
      "pingnannan",
      "pengshanbei",
      "panshan",
      "pingshang",
      "pingxiangbei",
      "puyang",
      "poyang",
      "pingyaogucheng",
      "pingyuandong",
      "puzhehei",
      "panzhou",
      "pengzhou",
      "qinan",
      "qingbaijiangdong",
      "qingchuan",
      "qingdaobei",
      "qidong",
      "qingdui",
      "qianfeng",
      "qujingbei",
      "qujiang",
      "qinglian",
      "qiqihaernan",
      "qingshuibei",
      "qingshen",
      "qishan",
      "qingsheng",
      "qingshuixian",
      "qushuixian",
      "qixiandong",
      "qianxian",
      "qixiayingnan",
      "qiyang",
      "quanzhounan",
      "qiziwan",
      "renbu",
      "rongchangbei",
      "rongcheng",
      "ruichangxi",
      "rudong",
      "rongjiang",
      "rikaze",
      "raoping",
      "songchenglu",
      "sandaohu",
      "shaodong",
      "sanduxian",
      "shengfang",
      "shuangfengbei",
      "shanghe",
      "sihong",
      "sihui",
      "shijiazhuangdong",
      "sanjiangnan",
      "sanjingzi",
      "shuangliujichang",
      "shilinxi",
      "shalingzixi",
      "shuangliuxi",
      "sanmingbei",
      "songming",
      "shumuling",
      "sunitezuoqi",
      "shanpodong",
      "shiqiao",
      "shenqiu",
      "shanshanbei",
      "shishanbei",
      "sanshuibei",
      "songshanhubei",
      "shishan",
      "sanshuinan",
      "shaoshannan",
      "sansui",
      "shiti",
      "shanwei",
      "shexianbei",
      "shaoxingbei",
      "shaoxingdong",
      "sixian",
      "shixing",
      "siyang",
      "shuangyang",
      "shaoyangbei",
      "songyuanbei",
      "shanyin",
      "shenzhenbei",
      "shenzhou",
      "shenzhenpingshan",
      "shizuishan",
      "shizhuxian",
      "taiannan",
      "taocunbei",
      "tiandongbei",
      "tuditangdong",
      "taiguxi",
      "tuha",
      "tonghai",
      "taihebei",
      "tianhejichang",
      "tianhejie",
      "tonghuaxian",
      "tongjiang",
      "tonglingbei",
      "tulufanbei",
      "taining",
      "tongrennan",
      "tianshuinan",
      "tongwei",
      "tianxindong",
      "tangxunhu",
      "tengxian",
      "taiyuannan",
      "tongyuanpuxi",
      "tongzhou",
      "wendengdong",
      "wufushan",
      "weihulingbei",
      "weihaibei",
      "wulanchabu",
      "wulongbeidong",
      "wulongquannan",
      "wulumuqi",
      "wunvshan",
      "wusheng",
      "wuwei",
      "wawushan",
      "wenxixi",
      "wuyibei",
      "wuyishanbei",
      "wuyishandong",
      "wuyuan",
      "weiyuan",
      "wanzhoubei",
      "wuzhi",
      "wuzhounan",
      "xinganbei",
      "xuchangdong",
      "xiangcheng",
      "xindudong",
      "xifeng",
      "xianfeng",
      "xiangfulu",
      "xiangfenxi",
      "xiaoganbei",
      "xiaogandong",
      "xihudong",
      "xinhuanan",
      "xinhuangxi",
      "xinjin",
      "xiaojinkou",
      "xinjinan",
      "xinjinnan",
      "xianningdong",
      "xianningnan",
      "xupunan",
      "xipingxi",
      "xiangtanbei",
      "xingtaidong",
      "xiwuqi",
      "xiuwuxi",
      "xiaoxianbei",
      "xinxiangdong",
      "xinyubei",
      "xiyangcun",
      "xinyangdong",
      "xianyangqindu",
      "xianyou",
      "xinzhengjichang",
      "xiangzhanglu",
      "yingbinlu",
      "yongchengbei",
      "yunchengbei",
      "yongchuandong",
      "yuchengdong",
      "yichun",
      "yuechi",
      "yundonghai",
      "yaodu",
      "yunfudong",
      "yongfunan",
      "yuge",
      "yanghe",
      "yongjibei",
      "yijiang",
      "yujiapu",
      "yanjixi",
      "yongkangnan",
      "yunlianghe",
      "yanling",
      "yanglingnan",
      "yimin",
      "yunan",
      "yinping",
      "yongshou",
      "yangshuo",
      "yunshan",
      "yushannan",
      "yintan",
      "yongtai",
      "yingtanbei",
      "yantainan",
      "yitong",
      "youxi",
      "yunxiao",
      "yixing",
      "yuxi",
      "yangxin",
      "yingxian",
      "youxiannan",
      "yangxianxi",
      "yuyaobei",
      "yuzhong",
      "zhaoan",
      "zhengdingjichang",
      "zhifangdong",
      "zhungeer",
      "zhuanghebei",
      "zhaohua",
      "zhijinbei",
      "zhangjiachuan",
      "zhijiang",
      "zhijin",
      "zhongkai",
      "zengkou",
      "zuoling",
      "zhangmutoudong",
      "zhumadianxi",
      "zhangpu",
      "zhaoqingdong",
      "zhuangqiao",
      "zhaoshan",
      "zhongshanxi",
      "zhangxian",
      "ziyangbei",
      "zhangyexi",
      "zizhongbei",
      "zhuozhoudong",
      "zaozhuangdong",
      "zhuozidong",
      "zhengzhoudong"
  ],
  "stationInfo": {
      "beijingbei": {
          "name": "北京北",
          "code": "VAP",
          "pinyin": "beijingbei",
          "suoxie": "bjb",
          "other": "0@bjd"
      },
      "beijingdong": {
          "name": "北京东",
          "code": "BOP",
          "pinyin": "beijingdong",
          "suoxie": "bjd",
          "other": "1@bji"
      },
      "beijing": {
          "name": "北京",
          "code": "BJP",
          "pinyin": "beijing",
          "suoxie": "bj",
          "other": "2@bjn"
      },
      "beijingnan": {
          "name": "北京南",
          "code": "VNP",
          "pinyin": "beijingnan",
          "suoxie": "bjn",
          "other": "3@bjx"
      },
      "beijingxi": {
          "name": "北京西",
          "code": "BXP",
          "pinyin": "beijingxi",
          "suoxie": "bjx",
          "other": "4@gzn"
      },
      "guangzhounan": {
          "name": "广州南",
          "code": "IZQ",
          "pinyin": "guangzhounan",
          "suoxie": "gzn",
          "other": "5@cqb"
      },
      "chongqingbei": {
          "name": "重庆北",
          "code": "CUW",
          "pinyin": "chongqingbei",
          "suoxie": "cqb",
          "other": "6@cqi"
      },
      "chongqing": {
          "name": "重庆",
          "code": "CQW",
          "pinyin": "chongqing",
          "suoxie": "cq",
          "other": "7@cqn"
      },
      "chongqingnan": {
          "name": "重庆南",
          "code": "CRW",
          "pinyin": "chongqingnan",
          "suoxie": "cqn",
          "other": "8@gzd"
      },
      "guangzhoudong": {
          "name": "广州东",
          "code": "GGQ",
          "pinyin": "guangzhoudong",
          "suoxie": "gzd",
          "other": "9@sha"
      },
      "shanghai": {
          "name": "上海",
          "code": "SHH",
          "pinyin": "shanghai",
          "suoxie": "sh",
          "other": "10@shn"
      },
      "shanghainan": {
          "name": "上海南",
          "code": "SNH",
          "pinyin": "shanghainan",
          "suoxie": "shn",
          "other": "11@shq"
      },
      "shanghaihongqiao": {
          "name": "上海虹桥",
          "code": "AOH",
          "pinyin": "shanghaihongqiao",
          "suoxie": "shhq",
          "other": "12@shx"
      },
      "shanghaixi": {
          "name": "上海西",
          "code": "SXH",
          "pinyin": "shanghaixi",
          "suoxie": "shx",
          "other": "13@tjb"
      },
      "tianjinbei": {
          "name": "天津北",
          "code": "TBP",
          "pinyin": "tianjinbei",
          "suoxie": "tjb",
          "other": "14@tji"
      },
      "tianjin": {
          "name": "天津",
          "code": "TJP",
          "pinyin": "tianjin",
          "suoxie": "tj",
          "other": "15@tjn"
      },
      "tianjinnan": {
          "name": "天津南",
          "code": "TIP",
          "pinyin": "tianjinnan",
          "suoxie": "tjn",
          "other": "16@tjx"
      },
      "tianjinxi": {
          "name": "天津西",
          "code": "TXP",
          "pinyin": "tianjinxi",
          "suoxie": "tjx",
          "other": "17@cch"
      },
      "changchun": {
          "name": "长春",
          "code": "CCT",
          "pinyin": "changchun",
          "suoxie": "cc",
          "other": "18@ccn"
      },
      "changchunnan": {
          "name": "长春南",
          "code": "CET",
          "pinyin": "changchunnan",
          "suoxie": "ccn",
          "other": "19@ccx"
      },
      "changchunxi": {
          "name": "长春西",
          "code": "CRT",
          "pinyin": "changchunxi",
          "suoxie": "ccx",
          "other": "20@cdd"
      },
      "chengdudong": {
          "name": "成都东",
          "code": "ICW",
          "pinyin": "chengdudong",
          "suoxie": "cdd",
          "other": "21@cdn"
      },
      "chengdunan": {
          "name": "成都南",
          "code": "CNW",
          "pinyin": "chengdunan",
          "suoxie": "cdn",
          "other": "22@cdu"
      },
      "chengdu": {
          "name": "成都",
          "code": "CDW",
          "pinyin": "chengdu",
          "suoxie": "cd",
          "other": "23@csh"
      },
      "changsha": {
          "name": "长沙",
          "code": "CSQ",
          "pinyin": "changsha",
          "suoxie": "cs",
          "other": "24@csn"
      },
      "changshanan": {
          "name": "长沙南",
          "code": "CWQ",
          "pinyin": "changshanan",
          "suoxie": "csn",
          "other": "25@fzh"
      },
      "fuzhou": [
          {
              "name": "福州",
              "code": "FZS",
              "pinyin": "fuzhou",
              "suoxie": "fz",
              "other": "26@fzn"
          },
          {
              "name": "抚州",
              "code": "FZG",
              "pinyin": "fuzhou",
              "suoxie": "fz",
              "other": "2240@gan"
          }
      ],
      "fuzhounan": {
          "name": "福州南",
          "code": "FYS",
          "pinyin": "fuzhounan",
          "suoxie": "fzn",
          "other": "27@gya"
      },
      "guiyang": {
          "name": "贵阳",
          "code": "GIW",
          "pinyin": "guiyang",
          "suoxie": "gy",
          "other": "28@gzh"
      },
      "guangzhou": {
          "name": "广州",
          "code": "GZQ",
          "pinyin": "guangzhou",
          "suoxie": "gz",
          "other": "29@gzx"
      },
      "guangzhouxi": {
          "name": "广州西",
          "code": "GXQ",
          "pinyin": "guangzhouxi",
          "suoxie": "gzx",
          "other": "30@heb"
      },
      "haerbin": {
          "name": "哈尔滨",
          "code": "HBB",
          "pinyin": "haerbin",
          "suoxie": "heb",
          "other": "31@hed"
      },
      "haerbindong": {
          "name": "哈尔滨东",
          "code": "VBB",
          "pinyin": "haerbindong",
          "suoxie": "hebd",
          "other": "32@hex"
      },
      "haerbinxi": {
          "name": "哈尔滨西",
          "code": "VAB",
          "pinyin": "haerbinxi",
          "suoxie": "hebx",
          "other": "33@hfe"
      },
      "hefei": {
          "name": "合肥",
          "code": "HFH",
          "pinyin": "hefei",
          "suoxie": "hf",
          "other": "34@hfx"
      },
      "hefeixi": {
          "name": "合肥西",
          "code": "HTH",
          "pinyin": "hefeixi",
          "suoxie": "hfx",
          "other": "35@hhd"
      },
      "huhehaotedong": {
          "name": "呼和浩特东",
          "code": "NDC",
          "pinyin": "huhehaotedong",
          "suoxie": "hhhtd",
          "other": "36@hht"
      },
      "huhehaote": {
          "name": "呼和浩特",
          "code": "HHC",
          "pinyin": "huhehaote",
          "suoxie": "hhht",
          "other": "37@hkd"
      },
      "haikoudong": {
          "name": "海口东",
          "code": "HMQ",
          "pinyin": "haikoudong",
          "suoxie": "hkd",
          "other": "39@hko"
      },
      "haikou": {
          "name": "海口",
          "code": "VUQ",
          "pinyin": "haikou",
          "suoxie": "hk",
          "other": "40@hzd"
      },
      "hangzhoudong": {
          "name": "杭州东",
          "code": "HGH",
          "pinyin": "hangzhoudong",
          "suoxie": "hzd",
          "other": "41@hzh"
      },
      "hangzhou": {
          "name": "杭州",
          "code": "HZH",
          "pinyin": "hangzhou",
          "suoxie": "hz",
          "other": "42@hzn"
      },
      "hangzhounan": {
          "name": "杭州南",
          "code": "XHH",
          "pinyin": "hangzhounan",
          "suoxie": "hzn",
          "other": "43@jna"
      },
      "jinan": {
          "name": "济南",
          "code": "JNK",
          "pinyin": "jinan",
          "suoxie": "jn",
          "other": "44@jnd"
      },
      "jinandong": {
          "name": "济南东",
          "code": "JAK",
          "pinyin": "jinandong",
          "suoxie": "jnd",
          "other": "45@jnx"
      },
      "jinanxi": {
          "name": "济南西",
          "code": "JGK",
          "pinyin": "jinanxi",
          "suoxie": "jnx",
          "other": "46@kmi"
      },
      "kunming": {
          "name": "昆明",
          "code": "KMM",
          "pinyin": "kunming",
          "suoxie": "km",
          "other": "47@kmx"
      },
      "kunmingxi": {
          "name": "昆明西",
          "code": "KXM",
          "pinyin": "kunmingxi",
          "suoxie": "kmx",
          "other": "48@lsa"
      },
      "lasa": {
          "name": "拉萨",
          "code": "LSO",
          "pinyin": "lasa",
          "suoxie": "ls",
          "other": "49@lzd"
      },
      "lanzhoudong": {
          "name": "兰州东",
          "code": "LVJ",
          "pinyin": "lanzhoudong",
          "suoxie": "lzd",
          "other": "50@lzh"
      },
      "lanzhou": {
          "name": "兰州",
          "code": "LZJ",
          "pinyin": "lanzhou",
          "suoxie": "lz",
          "other": "51@lzx"
      },
      "lanzhouxi": {
          "name": "兰州西",
          "code": "LAJ",
          "pinyin": "lanzhouxi",
          "suoxie": "lzx",
          "other": "52@nch"
      },
      "nanchang": {
          "name": "南昌",
          "code": "NCG",
          "pinyin": "nanchang",
          "suoxie": "nc",
          "other": "53@nji"
      },
      "nanjing": [
          {
              "name": "南京",
              "code": "NJH",
              "pinyin": "nanjing",
              "suoxie": "nj",
              "other": "54@njn"
          },
          {
              "name": "南靖",
              "code": "NJS",
              "pinyin": "nanjing",
              "suoxie": "nj",
              "other": "1338@nji"
          }
      ],
      "nanjingnan": {
          "name": "南京南",
          "code": "NKH",
          "pinyin": "nanjingnan",
          "suoxie": "njn",
          "other": "55@nni"
      },
      "nanning": {
          "name": "南宁",
          "code": "NNZ",
          "pinyin": "nanning",
          "suoxie": "nn",
          "other": "56@sjb"
      },
      "shijiazhuangbei": {
          "name": "石家庄北",
          "code": "VVP",
          "pinyin": "shijiazhuangbei",
          "suoxie": "sjzb",
          "other": "57@sjz"
      },
      "shijiazhuang": {
          "name": "石家庄",
          "code": "SJP",
          "pinyin": "shijiazhuang",
          "suoxie": "sjz",
          "other": "58@sya"
      },
      "shenyang": {
          "name": "沈阳",
          "code": "SYT",
          "pinyin": "shenyang",
          "suoxie": "sy",
          "other": "59@syb"
      },
      "shenyangbei": {
          "name": "沈阳北",
          "code": "SBT",
          "pinyin": "shenyangbei",
          "suoxie": "syb",
          "other": "60@syd"
      },
      "shenyangdong": {
          "name": "沈阳东",
          "code": "SDT",
          "pinyin": "shenyangdong",
          "suoxie": "syd",
          "other": "61@syn"
      },
      "shenyangnan": {
          "name": "沈阳南",
          "code": "SOT",
          "pinyin": "shenyangnan",
          "suoxie": "syn",
          "other": "62@tyb"
      },
      "taiyuanbei": {
          "name": "太原北",
          "code": "TBV",
          "pinyin": "taiyuanbei",
          "suoxie": "tyb",
          "other": "63@tyd"
      },
      "taiyuandong": {
          "name": "太原东",
          "code": "TDV",
          "pinyin": "taiyuandong",
          "suoxie": "tyd",
          "other": "64@tyu"
      },
      "taiyuan": {
          "name": "太原",
          "code": "TYV",
          "pinyin": "taiyuan",
          "suoxie": "ty",
          "other": "65@wha"
      },
      "wuhan": {
          "name": "武汉",
          "code": "WHN",
          "pinyin": "wuhan",
          "suoxie": "wh",
          "other": "66@wjx"
      },
      "wangjiayingxi": {
          "name": "王家营西",
          "code": "KNM",
          "pinyin": "wangjiayingxi",
          "suoxie": "wjyx",
          "other": "67@wln"
      },
      "wulumuqinan": {
          "name": "乌鲁木齐南",
          "code": "WMR",
          "pinyin": "wulumuqinan",
          "suoxie": "wlmqn",
          "other": "68@xab"
      },
      "xianbei": {
          "name": "西安北",
          "code": "EAY",
          "pinyin": "xianbei",
          "suoxie": "xab",
          "other": "69@xan"
      },
      "xian": {
          "name": "西安",
          "code": "XAY",
          "pinyin": "xian",
          "suoxie": "xa",
          "other": "70@xan"
      },
      "xiannan": {
          "name": "西安南",
          "code": "CAY",
          "pinyin": "xiannan",
          "suoxie": "xan",
          "other": "71@xni"
      },
      "xining": {
          "name": "西宁",
          "code": "XNO",
          "pinyin": "xining",
          "suoxie": "xn",
          "other": "72@ych"
      },
      "yinchuan": {
          "name": "银川",
          "code": "YIJ",
          "pinyin": "yinchuan",
          "suoxie": "yc",
          "other": "73@zzh"
      },
      "zhengzhou": {
          "name": "郑州",
          "code": "ZZF",
          "pinyin": "zhengzhou",
          "suoxie": "zz",
          "other": "74@aes"
      },
      "aershan": {
          "name": "阿尔山",
          "code": "ART",
          "pinyin": "aershan",
          "suoxie": "aes",
          "other": "75@aka"
      },
      "ankang": {
          "name": "安康",
          "code": "AKY",
          "pinyin": "ankang",
          "suoxie": "ak",
          "other": "76@aks"
      },
      "akesu": {
          "name": "阿克苏",
          "code": "ASR",
          "pinyin": "akesu",
          "suoxie": "aks",
          "other": "77@alh"
      },
      "alihe": {
          "name": "阿里河",
          "code": "AHX",
          "pinyin": "alihe",
          "suoxie": "alh",
          "other": "78@alk"
      },
      "alashankou": {
          "name": "阿拉山口",
          "code": "AKR",
          "pinyin": "alashankou",
          "suoxie": "alsk",
          "other": "79@api"
      },
      "anping": {
          "name": "安平",
          "code": "APT",
          "pinyin": "anping",
          "suoxie": "ap",
          "other": "80@aqi"
      },
      "anqing": {
          "name": "安庆",
          "code": "AQH",
          "pinyin": "anqing",
          "suoxie": "aq",
          "other": "81@ash"
      },
      "anshun": {
          "name": "安顺",
          "code": "ASW",
          "pinyin": "anshun",
          "suoxie": "as",
          "other": "82@ash"
      },
      "anshan": {
          "name": "鞍山",
          "code": "AST",
          "pinyin": "anshan",
          "suoxie": "as",
          "other": "83@aya"
      },
      "anyang": {
          "name": "安阳",
          "code": "AYF",
          "pinyin": "anyang",
          "suoxie": "ay",
          "other": "84@ban"
      },
      "beian": {
          "name": "北安",
          "code": "BAB",
          "pinyin": "beian",
          "suoxie": "ba",
          "other": "85@bbu"
      },
      "bengbu": {
          "name": "蚌埠",
          "code": "BBH",
          "pinyin": "bengbu",
          "suoxie": "bb",
          "other": "86@bch"
      },
      "baicheng": {
          "name": "白城",
          "code": "BCT",
          "pinyin": "baicheng",
          "suoxie": "bc",
          "other": "87@bha"
      },
      "beihai": {
          "name": "北海",
          "code": "BHZ",
          "pinyin": "beihai",
          "suoxie": "bh",
          "other": "88@bhe"
      },
      "baihe": {
          "name": "白河",
          "code": "BEL",
          "pinyin": "baihe",
          "suoxie": "bh",
          "other": "89@bji"
      },
      "baijian": {
          "name": "白涧",
          "code": "BAP",
          "pinyin": "baijian",
          "suoxie": "bj",
          "other": "90@bji"
      },
      "baoji": {
          "name": "宝鸡",
          "code": "BJY",
          "pinyin": "baoji",
          "suoxie": "bj",
          "other": "91@bji"
      },
      "binjiang": {
          "name": "滨江",
          "code": "BJB",
          "pinyin": "binjiang",
          "suoxie": "bj",
          "other": "92@bkt"
      },
      "boketu": {
          "name": "博克图",
          "code": "BKX",
          "pinyin": "boketu",
          "suoxie": "bkt",
          "other": "93@bse"
      },
      "baise": {
          "name": "百色",
          "code": "BIZ",
          "pinyin": "baise",
          "suoxie": "bs",
          "other": "94@bss"
      },
      "baishanshi": {
          "name": "白山市",
          "code": "HJL",
          "pinyin": "baishanshi",
          "suoxie": "bss",
          "other": "95@bta"
      },
      "beitai": {
          "name": "北台",
          "code": "BTT",
          "pinyin": "beitai",
          "suoxie": "bt",
          "other": "96@btd"
      },
      "baotoudong": {
          "name": "包头东",
          "code": "BDC",
          "pinyin": "baotoudong",
          "suoxie": "btd",
          "other": "97@bto"
      },
      "baotou": {
          "name": "包头",
          "code": "BTC",
          "pinyin": "baotou",
          "suoxie": "bt",
          "other": "98@bts"
      },
      "beitunshi": {
          "name": "北屯市",
          "code": "BXR",
          "pinyin": "beitunshi",
          "suoxie": "bts",
          "other": "99@bxi"
      },
      "benxi": {
          "name": "本溪",
          "code": "BXT",
          "pinyin": "benxi",
          "suoxie": "bx",
          "other": "100@byb"
      },
      "baiyunebo": {
          "name": "白云鄂博",
          "code": "BEC",
          "pinyin": "baiyunebo",
          "suoxie": "byeb",
          "other": "101@byx"
      },
      "baiyinxi": {
          "name": "白银西",
          "code": "BXJ",
          "pinyin": "baiyinxi",
          "suoxie": "byx",
          "other": "102@bzh"
      },
      "bozhou": {
          "name": "亳州",
          "code": "BZH",
          "pinyin": "bozhou",
          "suoxie": "bz",
          "other": "103@cbi"
      },
      "chibi": {
          "name": "赤壁",
          "code": "CBN",
          "pinyin": "chibi",
          "suoxie": "cb",
          "other": "104@cde"
      },
      "changde": {
          "name": "常德",
          "code": "VGQ",
          "pinyin": "changde",
          "suoxie": "cd",
          "other": "105@cde"
      },
      "chengde": {
          "name": "承德",
          "code": "CDP",
          "pinyin": "chengde",
          "suoxie": "cd",
          "other": "106@cdi"
      },
      "changdian": {
          "name": "长甸",
          "code": "CDT",
          "pinyin": "changdian",
          "suoxie": "cd",
          "other": "107@cfe"
      },
      "chifeng": {
          "name": "赤峰",
          "code": "CFD",
          "pinyin": "chifeng",
          "suoxie": "cf",
          "other": "108@cli"
      },
      "chaling": {
          "name": "茶陵",
          "code": "CDG",
          "pinyin": "chaling",
          "suoxie": "cl",
          "other": "109@cna"
      },
      "cangnan": {
          "name": "苍南",
          "code": "CEH",
          "pinyin": "cangnan",
          "suoxie": "cn",
          "other": "110@cpi"
      },
      "changping": [
          {
              "name": "昌平",
              "code": "CPP",
              "pinyin": "changping",
              "suoxie": "cp",
              "other": "111@cre"
          },
          {
              "name": "常平",
              "code": "DAQ",
              "pinyin": "changping",
              "suoxie": "cp",
              "other": "659@cpl"
          }
      ],
      "chongren": {
          "name": "崇仁",
          "code": "CRG",
          "pinyin": "chongren",
          "suoxie": "cr",
          "other": "112@ctu"
      },
      "changtu": {
          "name": "昌图",
          "code": "CTT",
          "pinyin": "changtu",
          "suoxie": "ct",
          "other": "113@ctz"
      },
      "changtingzhen": {
          "name": "长汀镇",
          "code": "CDB",
          "pinyin": "changtingzhen",
          "suoxie": "ctz",
          "other": "114@cxi"
      },
      "caoxian": {
          "name": "曹县",
          "code": "CXK",
          "pinyin": "caoxian",
          "suoxie": "cx",
          "other": "115@cxn"
      },
      "chuxiongnan": {
          "name": "楚雄南",
          "code": "COM",
          "pinyin": "chuxiongnan",
          "suoxie": "cxn",
          "other": "116@cxt"
      },
      "chenxiangtun": {
          "name": "陈相屯",
          "code": "CXT",
          "pinyin": "chenxiangtun",
          "suoxie": "cxt",
          "other": "117@czb"
      },
      "changzhibei": {
          "name": "长治北",
          "code": "CBF",
          "pinyin": "changzhibei",
          "suoxie": "czb",
          "other": "118@czh"
      },
      "chizhou": {
          "name": "池州",
          "code": "IYH",
          "pinyin": "chizhou",
          "suoxie": "cz",
          "other": "119@czh"
      },
      "changzheng": {
          "name": "长征",
          "code": "CZJ",
          "pinyin": "changzheng",
          "suoxie": "cz",
          "other": "120@czh"
      },
      "changzhou": {
          "name": "常州",
          "code": "CZH",
          "pinyin": "changzhou",
          "suoxie": "cz",
          "other": "121@czh"
      },
      "chenzhou": {
          "name": "郴州",
          "code": "CZQ",
          "pinyin": "chenzhou",
          "suoxie": "cz",
          "other": "122@czh"
      },
      "changzhi": {
          "name": "长治",
          "code": "CZF",
          "pinyin": "changzhi",
          "suoxie": "cz",
          "other": "123@czh"
      },
      "cangzhou": {
          "name": "沧州",
          "code": "COP",
          "pinyin": "cangzhou",
          "suoxie": "cz",
          "other": "124@czu"
      },
      "chongzuo": {
          "name": "崇左",
          "code": "CZZ",
          "pinyin": "chongzuo",
          "suoxie": "cz",
          "other": "125@dab"
      },
      "daanbei": {
          "name": "大安北",
          "code": "RNT",
          "pinyin": "daanbei",
          "suoxie": "dab",
          "other": "126@dch"
      },
      "dacheng": {
          "name": "大成",
          "code": "DCT",
          "pinyin": "dacheng",
          "suoxie": "dc",
          "other": "127@ddo"
      },
      "dandong": {
          "name": "丹东",
          "code": "DUT",
          "pinyin": "dandong",
          "suoxie": "dd",
          "other": "128@dfh"
      },
      "dongfanghong": {
          "name": "东方红",
          "code": "DFB",
          "pinyin": "dongfanghong",
          "suoxie": "dfh",
          "other": "129@dgd"
      },
      "dongguandong": {
          "name": "东莞东",
          "code": "DMQ",
          "pinyin": "dongguandong",
          "suoxie": "dgd",
          "other": "130@dhs"
      },
      "dahushan": {
          "name": "大虎山",
          "code": "DHD",
          "pinyin": "dahushan",
          "suoxie": "dhs",
          "other": "131@dhu"
      },
      "dunhuang": {
          "name": "敦煌",
          "code": "DHJ",
          "pinyin": "dunhuang",
          "suoxie": "dh",
          "other": "132@dhu"
      },
      "dunhua": {
          "name": "敦化",
          "code": "DHL",
          "pinyin": "dunhua",
          "suoxie": "dh",
          "other": "133@dhu"
      },
      "dehui": {
          "name": "德惠",
          "code": "DHT",
          "pinyin": "dehui",
          "suoxie": "dh",
          "other": "134@djc"
      },
      "dongjingcheng": {
          "name": "东京城",
          "code": "DJB",
          "pinyin": "dongjingcheng",
          "suoxie": "djc",
          "other": "135@dji"
      },
      "dajian": {
          "name": "大涧",
          "code": "DFP",
          "pinyin": "dajian",
          "suoxie": "dj",
          "other": "136@djy"
      },
      "dujiangyan": {
          "name": "都江堰",
          "code": "DDW",
          "pinyin": "dujiangyan",
          "suoxie": "djy",
          "other": "137@dlb"
      },
      "dalianbei": {
          "name": "大连北",
          "code": "DFT",
          "pinyin": "dalianbei",
          "suoxie": "dlb",
          "other": "138@dli"
      },
      "dali": [
          {
              "name": "大理",
              "code": "DKM",
              "pinyin": "dali",
              "suoxie": "dl",
              "other": "139@dli"
          },
          {
              "name": "大荔",
              "code": "DNY",
              "pinyin": "dali",
              "suoxie": "dl",
              "other": "2198@dlz"
          }
      ],
      "dalian": {
          "name": "大连",
          "code": "DLT",
          "pinyin": "dalian",
          "suoxie": "dl",
          "other": "140@dna"
      },
      "dingnan": {
          "name": "定南",
          "code": "DNG",
          "pinyin": "dingnan",
          "suoxie": "dn",
          "other": "141@dqi"
      },
      "daqing": {
          "name": "大庆",
          "code": "DZX",
          "pinyin": "daqing",
          "suoxie": "dq",
          "other": "142@dsh"
      },
      "dongsheng": [
          {
              "name": "东胜",
              "code": "DOC",
              "pinyin": "dongsheng",
              "suoxie": "ds",
              "other": "143@dsq"
          },
          {
              "name": "东升",
              "code": "DRQ",
              "pinyin": "dongsheng",
              "suoxie": "ds",
              "other": "752@dsh"
          }
      ],
      "dashiqiao": {
          "name": "大石桥",
          "code": "DQT",
          "pinyin": "dashiqiao",
          "suoxie": "dsq",
          "other": "144@dto"
      },
      "datong": {
          "name": "大同",
          "code": "DTV",
          "pinyin": "datong",
          "suoxie": "dt",
          "other": "145@dyi"
      },
      "dongying": {
          "name": "东营",
          "code": "DPK",
          "pinyin": "dongying",
          "suoxie": "dy",
          "other": "146@dys"
      },
      "dayangshu": {
          "name": "大杨树",
          "code": "DUX",
          "pinyin": "dayangshu",
          "suoxie": "dys",
          "other": "147@dyu"
      },
      "duyun": {
          "name": "都匀",
          "code": "RYW",
          "pinyin": "duyun",
          "suoxie": "dy",
          "other": "148@dzh"
      },
      "dengzhou": {
          "name": "邓州",
          "code": "DOF",
          "pinyin": "dengzhou",
          "suoxie": "dz",
          "other": "149@dzh"
      },
      "dazhou": {
          "name": "达州",
          "code": "RXW",
          "pinyin": "dazhou",
          "suoxie": "dz",
          "other": "150@dzh"
      },
      "dezhou": {
          "name": "德州",
          "code": "DZP",
          "pinyin": "dezhou",
          "suoxie": "dz",
          "other": "151@ejn"
      },
      "ejina": {
          "name": "额济纳",
          "code": "EJC",
          "pinyin": "ejina",
          "suoxie": "ejn",
          "other": "152@eli"
      },
      "erlian": {
          "name": "二连",
          "code": "RLC",
          "pinyin": "erlian",
          "suoxie": "el",
          "other": "153@esh"
      },
      "enshi": {
          "name": "恩施",
          "code": "ESN",
          "pinyin": "enshi",
          "suoxie": "es",
          "other": "154@fdi"
      },
      "fuding": {
          "name": "福鼎",
          "code": "FES",
          "pinyin": "fuding",
          "suoxie": "fd",
          "other": "155@fhc"
      },
      "fenghuangjichang": {
          "name": "凤凰机场",
          "code": "FJQ",
          "pinyin": "fenghuangjichang",
          "suoxie": "fhjc",
          "other": "156@fld"
      },
      "fenglingdu": {
          "name": "风陵渡",
          "code": "FLV",
          "pinyin": "fenglingdu",
          "suoxie": "fld",
          "other": "157@fli"
      },
      "fuling": {
          "name": "涪陵",
          "code": "FLW",
          "pinyin": "fuling",
          "suoxie": "fl",
          "other": "158@flj"
      },
      "fulaerji": {
          "name": "富拉尔基",
          "code": "FRX",
          "pinyin": "fulaerji",
          "suoxie": "flej",
          "other": "159@fsb"
      },
      "fushunbei": {
          "name": "抚顺北",
          "code": "FET",
          "pinyin": "fushunbei",
          "suoxie": "fsb",
          "other": "160@fsh"
      },
      "foshan": {
          "name": "佛山",
          "code": "FSQ",
          "pinyin": "foshan",
          "suoxie": "fs",
          "other": "161@fxn"
      },
      "fuxinnan": {
          "name": "阜新南",
          "code": "FXD",
          "pinyin": "fuxinnan",
          "suoxie": "fxn",
          "other": "162@fya"
      },
      "fuyang": {
          "name": "阜阳",
          "code": "FYH",
          "pinyin": "fuyang",
          "suoxie": "fy",
          "other": "163@gem"
      },
      "geermu": {
          "name": "格尔木",
          "code": "GRO",
          "pinyin": "geermu",
          "suoxie": "gem",
          "other": "164@gha"
      },
      "guanghan": {
          "name": "广汉",
          "code": "GHW",
          "pinyin": "guanghan",
          "suoxie": "gh",
          "other": "165@gji"
      },
      "gujiao": {
          "name": "古交",
          "code": "GJV",
          "pinyin": "gujiao",
          "suoxie": "gj",
          "other": "166@glb"
      },
      "guilinbei": {
          "name": "桂林北",
          "code": "GBZ",
          "pinyin": "guilinbei",
          "suoxie": "glb",
          "other": "167@gli"
      },
      "gulian": {
          "name": "古莲",
          "code": "GRX",
          "pinyin": "gulian",
          "suoxie": "gl",
          "other": "168@gli"
      },
      "guilin": {
          "name": "桂林",
          "code": "GLZ",
          "pinyin": "guilin",
          "suoxie": "gl",
          "other": "169@gsh"
      },
      "gushi": {
          "name": "固始",
          "code": "GXN",
          "pinyin": "gushi",
          "suoxie": "gs",
          "other": "170@gsh"
      },
      "guangshui": {
          "name": "广水",
          "code": "GSN",
          "pinyin": "guangshui",
          "suoxie": "gs",
          "other": "171@gta"
      },
      "gantang": {
          "name": "干塘",
          "code": "GNJ",
          "pinyin": "gantang",
          "suoxie": "gt",
          "other": "172@gyu"
      },
      "guangyuan": {
          "name": "广元",
          "code": "GYW",
          "pinyin": "guangyuan",
          "suoxie": "gy",
          "other": "173@gzb"
      },
      "guangzhoubei": {
          "name": "广州北",
          "code": "GBQ",
          "pinyin": "guangzhoubei",
          "suoxie": "gzb",
          "other": "174@gzh"
      },
      "ganzhou": {
          "name": "赣州",
          "code": "GZG",
          "pinyin": "ganzhou",
          "suoxie": "gz",
          "other": "175@gzl"
      },
      "gongzhuling": {
          "name": "公主岭",
          "code": "GLT",
          "pinyin": "gongzhuling",
          "suoxie": "gzl",
          "other": "176@gzn"
      },
      "gongzhulingnan": {
          "name": "公主岭南",
          "code": "GBT",
          "pinyin": "gongzhulingnan",
          "suoxie": "gzln",
          "other": "177@han"
      },
      "huaian": {
          "name": "淮安",
          "code": "AUH",
          "pinyin": "huaian",
          "suoxie": "ha",
          "other": "178@hbe"
      },
      "huaibei": {
          "name": "淮北",
          "code": "HRH",
          "pinyin": "huaibei",
          "suoxie": "hb",
          "other": "179@hbe"
      },
      "hebei": {
          "name": "鹤北",
          "code": "HMB",
          "pinyin": "hebei",
          "suoxie": "hb",
          "other": "180@hbi"
      },
      "huaibin": {
          "name": "淮滨",
          "code": "HVN",
          "pinyin": "huaibin",
          "suoxie": "hb",
          "other": "181@hbi"
      },
      "hebian": {
          "name": "河边",
          "code": "HBV",
          "pinyin": "hebian",
          "suoxie": "hb",
          "other": "182@hch"
      },
      "huangchuan": {
          "name": "潢川",
          "code": "KCN",
          "pinyin": "huangchuan",
          "suoxie": "hc",
          "other": "183@hch"
      },
      "hancheng": {
          "name": "韩城",
          "code": "HCY",
          "pinyin": "hancheng",
          "suoxie": "hc",
          "other": "184@hda"
      },
      "handan": {
          "name": "邯郸",
          "code": "HDP",
          "pinyin": "handan",
          "suoxie": "hd",
          "other": "185@hdz"
      },
      "hengdaohezi": {
          "name": "横道河子",
          "code": "HDB",
          "pinyin": "hengdaohezi",
          "suoxie": "hdhz",
          "other": "186@hga"
      },
      "hegang": {
          "name": "鹤岗",
          "code": "HGB",
          "pinyin": "hegang",
          "suoxie": "hg",
          "other": "187@hgt"
      },
      "huanggutun": {
          "name": "皇姑屯",
          "code": "HTT",
          "pinyin": "huanggutun",
          "suoxie": "hgt",
          "other": "188@hgu"
      },
      "hongguo": {
          "name": "红果",
          "code": "HEM",
          "pinyin": "hongguo",
          "suoxie": "hg",
          "other": "189@hhe"
      },
      "heihe": {
          "name": "黑河",
          "code": "HJB",
          "pinyin": "heihe",
          "suoxie": "hh",
          "other": "190@hhu"
      },
      "huaihua": {
          "name": "怀化",
          "code": "HHQ",
          "pinyin": "huaihua",
          "suoxie": "hh",
          "other": "191@hko"
      },
      "hankou": {
          "name": "汉口",
          "code": "HKN",
          "pinyin": "hankou",
          "suoxie": "hk",
          "other": "192@hld"
      },
      "huludao": {
          "name": "葫芦岛",
          "code": "HLD",
          "pinyin": "huludao",
          "suoxie": "hld",
          "other": "193@hle"
      },
      "hailaer": {
          "name": "海拉尔",
          "code": "HRX",
          "pinyin": "hailaer",
          "suoxie": "hle",
          "other": "194@hll"
      },
      "huolinguole": {
          "name": "霍林郭勒",
          "code": "HWD",
          "pinyin": "huolinguole",
          "suoxie": "hlgl",
          "other": "195@hlu"
      },
      "hailun": {
          "name": "海伦",
          "code": "HLB",
          "pinyin": "hailun",
          "suoxie": "hl",
          "other": "196@hma"
      },
      "houma": {
          "name": "侯马",
          "code": "HMV",
          "pinyin": "houma",
          "suoxie": "hm",
          "other": "197@hmi"
      },
      "hami": {
          "name": "哈密",
          "code": "HMR",
          "pinyin": "hami",
          "suoxie": "hm",
          "other": "198@hna"
      },
      "huainan": {
          "name": "淮南",
          "code": "HAH",
          "pinyin": "huainan",
          "suoxie": "hn",
          "other": "199@hna"
      },
      "huanan": {
          "name": "桦南",
          "code": "HNB",
          "pinyin": "huanan",
          "suoxie": "hn",
          "other": "200@hnx"
      },
      "hainingxi": {
          "name": "海宁西",
          "code": "EUH",
          "pinyin": "hainingxi",
          "suoxie": "hnx",
          "other": "201@hqi"
      },
      "heqing": {
          "name": "鹤庆",
          "code": "HQM",
          "pinyin": "heqing",
          "suoxie": "hq",
          "other": "202@hrb"
      },
      "huairoubei": {
          "name": "怀柔北",
          "code": "HBP",
          "pinyin": "huairoubei",
          "suoxie": "hrb",
          "other": "203@hro"
      },
      "huairou": {
          "name": "怀柔",
          "code": "HRP",
          "pinyin": "huairou",
          "suoxie": "hr",
          "other": "204@hsd"
      },
      "huangshidong": {
          "name": "黄石东",
          "code": "OSN",
          "pinyin": "huangshidong",
          "suoxie": "hsd",
          "other": "205@hsh"
      },
      "huashan": {
          "name": "华山",
          "code": "HSY",
          "pinyin": "huashan",
          "suoxie": "hs",
          "other": "206@hsh"
      },
      "huangshan": {
          "name": "黄山",
          "code": "HKH",
          "pinyin": "huangshan",
          "suoxie": "hs",
          "other": "207@hsh"
      },
      "huangshi": {
          "name": "黄石",
          "code": "HSN",
          "pinyin": "huangshi",
          "suoxie": "hs",
          "other": "208@hsh"
      },
      "hengshui": {
          "name": "衡水",
          "code": "HSP",
          "pinyin": "hengshui",
          "suoxie": "hs",
          "other": "209@hya"
      },
      "hengyang": {
          "name": "衡阳",
          "code": "HYQ",
          "pinyin": "hengyang",
          "suoxie": "hy",
          "other": "210@hze"
      },
      "heze": {
          "name": "菏泽",
          "code": "HIK",
          "pinyin": "heze",
          "suoxie": "hz",
          "other": "211@hzh"
      },
      "hezhou": {
          "name": "贺州",
          "code": "HXZ",
          "pinyin": "hezhou",
          "suoxie": "hz",
          "other": "212@hzh"
      },
      "hanzhong": {
          "name": "汉中",
          "code": "HOY",
          "pinyin": "hanzhong",
          "suoxie": "hz",
          "other": "213@hzh"
      },
      "huizhou": {
          "name": "惠州",
          "code": "HCQ",
          "pinyin": "huizhou",
          "suoxie": "hz",
          "other": "214@jan"
      },
      "jian": [
          {
              "name": "吉安",
              "code": "VAG",
              "pinyin": "jian",
              "suoxie": "ja",
              "other": "215@jan"
          },
          {
              "name": "集安",
              "code": "JAL",
              "pinyin": "jian",
              "suoxie": "ja",
              "other": "216@jbc"
          }
      ],
      "jiangbiancun": {
          "name": "江边村",
          "code": "JBG",
          "pinyin": "jiangbiancun",
          "suoxie": "jbc",
          "other": "217@jch"
      },
      "jincheng": {
          "name": "晋城",
          "code": "JCF",
          "pinyin": "jincheng",
          "suoxie": "jc",
          "other": "218@jcj"
      },
      "jinchengjiang": {
          "name": "金城江",
          "code": "JJZ",
          "pinyin": "jinchengjiang",
          "suoxie": "jcj",
          "other": "219@jdz"
      },
      "jingdezhen": {
          "name": "景德镇",
          "code": "JCG",
          "pinyin": "jingdezhen",
          "suoxie": "jdz",
          "other": "220@jfe"
      },
      "jiafeng": {
          "name": "嘉峰",
          "code": "JFF",
          "pinyin": "jiafeng",
          "suoxie": "jf",
          "other": "221@jgq"
      },
      "jiagedaqi": {
          "name": "加格达奇",
          "code": "JGX",
          "pinyin": "jiagedaqi",
          "suoxie": "jgdq",
          "other": "222@jgs"
      },
      "jinggangshan": {
          "name": "井冈山",
          "code": "JGG",
          "pinyin": "jinggangshan",
          "suoxie": "jgs",
          "other": "223@jhe"
      },
      "jiaohe": {
          "name": "蛟河",
          "code": "JHL",
          "pinyin": "jiaohe",
          "suoxie": "jh",
          "other": "224@jhn"
      },
      "jinhuanan": {
          "name": "金华南",
          "code": "RNH",
          "pinyin": "jinhuanan",
          "suoxie": "jhn",
          "other": "225@jhu"
      },
      "jinhua": {
          "name": "金华",
          "code": "JBH",
          "pinyin": "jinhua",
          "suoxie": "jh",
          "other": "226@jji"
      },
      "jiujiang": {
          "name": "九江",
          "code": "JJG",
          "pinyin": "jiujiang",
          "suoxie": "jj",
          "other": "227@jli"
      },
      "jilin": {
          "name": "吉林",
          "code": "JLL",
          "pinyin": "jilin",
          "suoxie": "jl",
          "other": "228@jme"
      },
      "jingmen": {
          "name": "荆门",
          "code": "JMN",
          "pinyin": "jingmen",
          "suoxie": "jm",
          "other": "229@jms"
      },
      "jiamusi": {
          "name": "佳木斯",
          "code": "JMB",
          "pinyin": "jiamusi",
          "suoxie": "jms",
          "other": "230@jni"
      },
      "jining": {
          "name": "济宁",
          "code": "JIK",
          "pinyin": "jining",
          "suoxie": "jn",
          "other": "231@jnn"
      },
      "jiningnan": {
          "name": "集宁南",
          "code": "JAC",
          "pinyin": "jiningnan",
          "suoxie": "jnn",
          "other": "232@jqu"
      },
      "jiuquan": {
          "name": "酒泉",
          "code": "JQJ",
          "pinyin": "jiuquan",
          "suoxie": "jq",
          "other": "233@jsh"
      },
      "jiangshan": {
          "name": "江山",
          "code": "JUH",
          "pinyin": "jiangshan",
          "suoxie": "js",
          "other": "234@jsh"
      },
      "jishou": {
          "name": "吉首",
          "code": "JIQ",
          "pinyin": "jishou",
          "suoxie": "js",
          "other": "235@jta"
      },
      "jiutai": {
          "name": "九台",
          "code": "JTL",
          "pinyin": "jiutai",
          "suoxie": "jt",
          "other": "236@jts"
      },
      "jingtieshan": {
          "name": "镜铁山",
          "code": "JVJ",
          "pinyin": "jingtieshan",
          "suoxie": "jts",
          "other": "237@jxi"
      },
      "jixi": {
          "name": "鸡西",
          "code": "JXB",
          "pinyin": "jixi",
          "suoxie": "jx",
          "other": "238@jxx"
      },
      "jiayuguan": {
          "name": "嘉峪关",
          "code": "JGJ",
          "pinyin": "jiayuguan",
          "suoxie": "jyg",
          "other": "240@jyo"
      },
      "jiangyou": {
          "name": "江油",
          "code": "JFW",
          "pinyin": "jiangyou",
          "suoxie": "jy",
          "other": "241@jzh"
      },
      "jinzhou": [
          {
              "name": "锦州",
              "code": "JZD",
              "pinyin": "jinzhou",
              "suoxie": "jz",
              "other": "242@jzh"
          },
          {
              "name": "金州",
              "code": "JZT",
              "pinyin": "jinzhou",
              "suoxie": "jz",
              "other": "243@jzh"
          },
          {
              "name": "晋州",
              "code": "JXP",
              "pinyin": "jinzhou",
              "suoxie": "jz",
              "other": "1118@jzn"
          }
      ],
      "jizhou": {
          "name": "蓟州",
          "code": "JKP",
          "pinyin": "jizhou",
          "suoxie": "jz",
          "other": "244@kel"
      },
      "kuerle": {
          "name": "库尔勒",
          "code": "KLR",
          "pinyin": "kuerle",
          "suoxie": "kel",
          "other": "245@kfe"
      },
      "kaifeng": {
          "name": "开封",
          "code": "KFF",
          "pinyin": "kaifeng",
          "suoxie": "kf",
          "other": "246@kla"
      },
      "kelan": {
          "name": "岢岚",
          "code": "KLV",
          "pinyin": "kelan",
          "suoxie": "kl",
          "other": "247@kli"
      },
      "kaili": {
          "name": "凯里",
          "code": "KLW",
          "pinyin": "kaili",
          "suoxie": "kl",
          "other": "248@ksh"
      },
      "kashi": {
          "name": "喀什",
          "code": "KSR",
          "pinyin": "kashi",
          "suoxie": "ks",
          "other": "249@ksn"
      },
      "kunshannan": {
          "name": "昆山南",
          "code": "KNH",
          "pinyin": "kunshannan",
          "suoxie": "ksn",
          "other": "250@ktu"
      },
      "kuitun": {
          "name": "奎屯",
          "code": "KTR",
          "pinyin": "kuitun",
          "suoxie": "kt",
          "other": "251@kyu"
      },
      "kaiyuan": {
          "name": "开原",
          "code": "KYT",
          "pinyin": "kaiyuan",
          "suoxie": "ky",
          "other": "252@lan"
      },
      "luan": {
          "name": "六安",
          "code": "UAH",
          "pinyin": "luan",
          "suoxie": "la",
          "other": "253@lba"
      },
      "lingbao": {
          "name": "灵宝",
          "code": "LBF",
          "pinyin": "lingbao",
          "suoxie": "lb",
          "other": "254@lcg"
      },
      "luchaogang": {
          "name": "芦潮港",
          "code": "UCH",
          "pinyin": "luchaogang",
          "suoxie": "lcg",
          "other": "255@lch"
      },
      "longchang": {
          "name": "隆昌",
          "code": "LCW",
          "pinyin": "longchang",
          "suoxie": "lc",
          "other": "256@lch"
      },
      "luchuan": {
          "name": "陆川",
          "code": "LKZ",
          "pinyin": "luchuan",
          "suoxie": "lc",
          "other": "257@lch"
      },
      "lichuan": {
          "name": "利川",
          "code": "LCN",
          "pinyin": "lichuan",
          "suoxie": "lc",
          "other": "258@lch"
      },
      "linchuan": {
          "name": "临川",
          "code": "LCG",
          "pinyin": "linchuan",
          "suoxie": "lc",
          "other": "259@lch"
      },
      "lucheng": {
          "name": "潞城",
          "code": "UTP",
          "pinyin": "lucheng",
          "suoxie": "lc",
          "other": "260@lda"
      },
      "ludao": {
          "name": "鹿道",
          "code": "LDL",
          "pinyin": "ludao",
          "suoxie": "ld",
          "other": "261@ldi"
      },
      "loudi": {
          "name": "娄底",
          "code": "LDQ",
          "pinyin": "loudi",
          "suoxie": "ld",
          "other": "262@lfe"
      },
      "linfen": {
          "name": "临汾",
          "code": "LFV",
          "pinyin": "linfen",
          "suoxie": "lf",
          "other": "263@lgz"
      },
      "lianggezhuang": {
          "name": "良各庄",
          "code": "LGP",
          "pinyin": "lianggezhuang",
          "suoxie": "lgz",
          "other": "264@lhe"
      },
      "linhe": {
          "name": "临河",
          "code": "LHC",
          "pinyin": "linhe",
          "suoxie": "lh",
          "other": "265@lhe"
      },
      "luohe": {
          "name": "漯河",
          "code": "LON",
          "pinyin": "luohe",
          "suoxie": "lh",
          "other": "266@lhu"
      },
      "lvhua": {
          "name": "绿化",
          "code": "LWJ",
          "pinyin": "lvhua",
          "suoxie": "lh",
          "other": "267@lhu"
      },
      "longhua": [
          {
              "name": "隆化",
              "code": "UHP",
              "pinyin": "longhua",
              "suoxie": "lh",
              "other": "268@lji"
          },
          {
              "name": "龙华",
              "code": "LHP",
              "pinyin": "longhua",
              "suoxie": "lh",
              "other": "1174@lhy"
          }
      ],
      "lijiang": {
          "name": "丽江",
          "code": "LHM",
          "pinyin": "lijiang",
          "suoxie": "lj",
          "other": "269@lji"
      },
      "linjiang": {
          "name": "临江",
          "code": "LQL",
          "pinyin": "linjiang",
          "suoxie": "lj",
          "other": "270@lji"
      },
      "longjing": {
          "name": "龙井",
          "code": "LJL",
          "pinyin": "longjing",
          "suoxie": "lj",
          "other": "271@lli"
      },
      "lvliang": {
          "name": "吕梁",
          "code": "LHV",
          "pinyin": "lvliang",
          "suoxie": "ll",
          "other": "272@lli"
      },
      "liling": {
          "name": "醴陵",
          "code": "LLG",
          "pinyin": "liling",
          "suoxie": "ll",
          "other": "273@lln"
      },
      "liulinnan": {
          "name": "柳林南",
          "code": "LKV",
          "pinyin": "liulinnan",
          "suoxie": "lln",
          "other": "274@lpi"
      },
      "luanping": {
          "name": "滦平",
          "code": "UPP",
          "pinyin": "luanping",
          "suoxie": "lp",
          "other": "275@lps"
      },
      "liupanshui": {
          "name": "六盘水",
          "code": "UMW",
          "pinyin": "liupanshui",
          "suoxie": "lps",
          "other": "276@lqi"
      },
      "lingqiu": {
          "name": "灵丘",
          "code": "LVV",
          "pinyin": "lingqiu",
          "suoxie": "lq",
          "other": "277@lsh"
      },
      "lvshun": {
          "name": "旅顺",
          "code": "LST",
          "pinyin": "lvshun",
          "suoxie": "ls",
          "other": "278@lxi"
      },
      "lanxi": {
          "name": "兰溪",
          "code": "LWH",
          "pinyin": "lanxi",
          "suoxie": "lx",
          "other": "279@lxi"
      },
      "longxi": {
          "name": "陇西",
          "code": "LXJ",
          "pinyin": "longxi",
          "suoxie": "lx",
          "other": "280@lxi"
      },
      "lixian": {
          "name": "澧县",
          "code": "LEQ",
          "pinyin": "lixian",
          "suoxie": "lx",
          "other": "281@lxi"
      },
      "linxi": [
          {
              "name": "临西",
              "code": "UEP",
              "pinyin": "linxi",
              "suoxie": "lx",
              "other": "282@lya"
          },
          {
              "name": "林西",
              "code": "LXC",
              "pinyin": "linxi",
              "suoxie": "lx",
              "other": "1247@lxi"
          }
      ],
      "longyan": {
          "name": "龙岩",
          "code": "LYS",
          "pinyin": "longyan",
          "suoxie": "ly",
          "other": "283@lya"
      },
      "leiyang": {
          "name": "耒阳",
          "code": "LYQ",
          "pinyin": "leiyang",
          "suoxie": "ly",
          "other": "284@lya"
      },
      "luoyang": {
          "name": "洛阳",
          "code": "LYF",
          "pinyin": "luoyang",
          "suoxie": "ly",
          "other": "285@lyd"
      },
      "lianyungangdong": {
          "name": "连云港东",
          "code": "UKH",
          "pinyin": "lianyungangdong",
          "suoxie": "lygd",
          "other": "286@lyd"
      },
      "luoyangdong": {
          "name": "洛阳东",
          "code": "LDF",
          "pinyin": "luoyangdong",
          "suoxie": "lyd",
          "other": "287@lyi"
      },
      "linyi": [
          {
              "name": "临沂",
              "code": "LVK",
              "pinyin": "linyi",
              "suoxie": "ly",
              "other": "288@lym"
          },
          {
              "name": "临邑",
              "code": "LUK",
              "pinyin": "linyi",
              "suoxie": "ly",
              "other": "2410@lyn"
          }
      ],
      "luoyanglongmen": {
          "name": "洛阳龙门",
          "code": "LLF",
          "pinyin": "luoyanglongmen",
          "suoxie": "lylm",
          "other": "289@lyu"
      },
      "liuyuan": {
          "name": "柳园",
          "code": "DHR",
          "pinyin": "liuyuan",
          "suoxie": "ly",
          "other": "290@lyu"
      },
      "lingyuan": {
          "name": "凌源",
          "code": "LYD",
          "pinyin": "lingyuan",
          "suoxie": "ly",
          "other": "291@lyu"
      },
      "liaoyuan": {
          "name": "辽源",
          "code": "LYL",
          "pinyin": "liaoyuan",
          "suoxie": "ly",
          "other": "292@lzh"
      },
      "lizhi": {
          "name": "立志",
          "code": "LZX",
          "pinyin": "lizhi",
          "suoxie": "lz",
          "other": "293@lzh"
      },
      "liuzhou": {
          "name": "柳州",
          "code": "LZZ",
          "pinyin": "liuzhou",
          "suoxie": "lz",
          "other": "294@lzh"
      },
      "liaozhong": {
          "name": "辽中",
          "code": "LZD",
          "pinyin": "liaozhong",
          "suoxie": "lz",
          "other": "295@mch"
      },
      "macheng": {
          "name": "麻城",
          "code": "MCN",
          "pinyin": "macheng",
          "suoxie": "mc",
          "other": "296@mdh"
      },
      "mianduhe": {
          "name": "免渡河",
          "code": "MDX",
          "pinyin": "mianduhe",
          "suoxie": "mdh",
          "other": "297@mdj"
      },
      "mudanjiang": {
          "name": "牡丹江",
          "code": "MDB",
          "pinyin": "mudanjiang",
          "suoxie": "mdj",
          "other": "298@meg"
      },
      "moerdaoga": {
          "name": "莫尔道嘎",
          "code": "MRX",
          "pinyin": "moerdaoga",
          "suoxie": "medg",
          "other": "299@mgu"
      },
      "mingguang": {
          "name": "明光",
          "code": "MGH",
          "pinyin": "mingguang",
          "suoxie": "mg",
          "other": "300@mgu"
      },
      "mangui": {
          "name": "满归",
          "code": "MHX",
          "pinyin": "mangui",
          "suoxie": "mg",
          "other": "301@mhe"
      },
      "mohe": {
          "name": "漠河",
          "code": "MVX",
          "pinyin": "mohe",
          "suoxie": "mh",
          "other": "302@mmi"
      },
      "maoming": {
          "name": "茂名",
          "code": "MDQ",
          "pinyin": "maoming",
          "suoxie": "mm",
          "other": "303@mmx"
      },
      "maomingxi": {
          "name": "茂名西",
          "code": "MMZ",
          "pinyin": "maomingxi",
          "suoxie": "mmx",
          "other": "304@msh"
      },
      "mishan": {
          "name": "密山",
          "code": "MSB",
          "pinyin": "mishan",
          "suoxie": "ms",
          "other": "305@msj"
      },
      "masanjia": {
          "name": "马三家",
          "code": "MJT",
          "pinyin": "masanjia",
          "suoxie": "msj",
          "other": "306@mwe"
      },
      "mawei": {
          "name": "麻尾",
          "code": "VAW",
          "pinyin": "mawei",
          "suoxie": "mw",
          "other": "307@mya"
      },
      "mianyang": {
          "name": "绵阳",
          "code": "MYW",
          "pinyin": "mianyang",
          "suoxie": "my",
          "other": "308@mzh"
      },
      "meizhou": {
          "name": "梅州",
          "code": "MOQ",
          "pinyin": "meizhou",
          "suoxie": "mz",
          "other": "309@mzl"
      },
      "manzhouli": {
          "name": "满洲里",
          "code": "MLX",
          "pinyin": "manzhouli",
          "suoxie": "mzl",
          "other": "310@nbd"
      },
      "ningbodong": {
          "name": "宁波东",
          "code": "NVH",
          "pinyin": "ningbodong",
          "suoxie": "nbd",
          "other": "311@nbo"
      },
      "ningbo": {
          "name": "宁波",
          "code": "NGH",
          "pinyin": "ningbo",
          "suoxie": "nb",
          "other": "312@nch"
      },
      "nancha": {
          "name": "南岔",
          "code": "NCB",
          "pinyin": "nancha",
          "suoxie": "nc",
          "other": "313@nch"
      },
      "nanchong": {
          "name": "南充",
          "code": "NCW",
          "pinyin": "nanchong",
          "suoxie": "nc",
          "other": "314@nda"
      },
      "nandan": {
          "name": "南丹",
          "code": "NDZ",
          "pinyin": "nandan",
          "suoxie": "nd",
          "other": "315@ndm"
      },
      "nandamiao": {
          "name": "南大庙",
          "code": "NMP",
          "pinyin": "nandamiao",
          "suoxie": "ndm",
          "other": "316@nfe"
      },
      "nanfen": {
          "name": "南芬",
          "code": "NFT",
          "pinyin": "nanfen",
          "suoxie": "nf",
          "other": "317@nhe"
      },
      "nehe": {
          "name": "讷河",
          "code": "NHX",
          "pinyin": "nehe",
          "suoxie": "nh",
          "other": "318@nji"
      },
      "nenjiang": {
          "name": "嫩江",
          "code": "NGX",
          "pinyin": "nenjiang",
          "suoxie": "nj",
          "other": "319@nji"
      },
      "neijiang": {
          "name": "内江",
          "code": "NJW",
          "pinyin": "neijiang",
          "suoxie": "nj",
          "other": "320@npi"
      },
      "nanping": {
          "name": "南平",
          "code": "NPS",
          "pinyin": "nanping",
          "suoxie": "np",
          "other": "321@nto"
      },
      "nantong": {
          "name": "南通",
          "code": "NUH",
          "pinyin": "nantong",
          "suoxie": "nt",
          "other": "322@nya"
      },
      "nanyang": {
          "name": "南阳",
          "code": "NFF",
          "pinyin": "nanyang",
          "suoxie": "ny",
          "other": "323@nzs"
      },
      "nianzishan": {
          "name": "碾子山",
          "code": "NZX",
          "pinyin": "nianzishan",
          "suoxie": "nzs",
          "other": "324@pds"
      },
      "pingdingshan": {
          "name": "平顶山",
          "code": "PEN",
          "pinyin": "pingdingshan",
          "suoxie": "pds",
          "other": "325@pji"
      },
      "panjin": {
          "name": "盘锦",
          "code": "PVD",
          "pinyin": "panjin",
          "suoxie": "pj",
          "other": "326@pli"
      },
      "pingliang": {
          "name": "平凉",
          "code": "PIJ",
          "pinyin": "pingliang",
          "suoxie": "pl",
          "other": "327@pln"
      },
      "pingliangnan": {
          "name": "平凉南",
          "code": "POJ",
          "pinyin": "pingliangnan",
          "suoxie": "pln",
          "other": "328@pqu"
      },
      "pingquan": {
          "name": "平泉",
          "code": "PQP",
          "pinyin": "pingquan",
          "suoxie": "pq",
          "other": "329@psh"
      },
      "pingshi": {
          "name": "坪石",
          "code": "PSQ",
          "pinyin": "pingshi",
          "suoxie": "ps",
          "other": "330@pxi"
      },
      "pingxiang": [
          {
              "name": "萍乡",
              "code": "PXG",
              "pinyin": "pingxiang",
              "suoxie": "px",
              "other": "331@pxi"
          },
          {
              "name": "凭祥",
              "code": "PXZ",
              "pinyin": "pingxiang",
              "suoxie": "px",
              "other": "332@pxx"
          }
      ],
      "pixianxi": {
          "name": "郫县西",
          "code": "PCW",
          "pinyin": "pixianxi",
          "suoxie": "pxx",
          "other": "333@pzh"
      },
      "panzhihua": {
          "name": "攀枝花",
          "code": "PRW",
          "pinyin": "panzhihua",
          "suoxie": "pzh",
          "other": "334@qch"
      },
      "qichun": {
          "name": "蕲春",
          "code": "QRN",
          "pinyin": "qichun",
          "suoxie": "qc",
          "other": "335@qcs"
      },
      "qingchengshan": {
          "name": "青城山",
          "code": "QSW",
          "pinyin": "qingchengshan",
          "suoxie": "qcs",
          "other": "336@qda"
      },
      "qingdao": {
          "name": "青岛",
          "code": "QDK",
          "pinyin": "qingdao",
          "suoxie": "qd",
          "other": "337@qhc"
      },
      "qinghecheng": {
          "name": "清河城",
          "code": "QYP",
          "pinyin": "qinghecheng",
          "suoxie": "qhc",
          "other": "338@qji"
      },
      "qujing": {
          "name": "曲靖",
          "code": "QJM",
          "pinyin": "qujing",
          "suoxie": "qj",
          "other": "339@qji"
      },
      "qianjiang": [
          {
              "name": "黔江",
              "code": "QNW",
              "pinyin": "qianjiang",
              "suoxie": "qj",
              "other": "340@qjz"
          },
          {
              "name": "潜江",
              "code": "QJN",
              "pinyin": "qianjiang",
              "suoxie": "qj",
              "other": "1437@qji"
          }
      ],
      "qianjinzhen": {
          "name": "前进镇",
          "code": "QEB",
          "pinyin": "qianjinzhen",
          "suoxie": "qjz",
          "other": "341@qqe"
      },
      "qiqihaer": {
          "name": "齐齐哈尔",
          "code": "QHX",
          "pinyin": "qiqihaer",
          "suoxie": "qqhe",
          "other": "342@qth"
      },
      "qitaihe": {
          "name": "七台河",
          "code": "QTB",
          "pinyin": "qitaihe",
          "suoxie": "qth",
          "other": "343@qxi"
      },
      "qinxian": {
          "name": "沁县",
          "code": "QVV",
          "pinyin": "qinxian",
          "suoxie": "qx",
          "other": "344@qzd"
      },
      "quanzhoudong": {
          "name": "泉州东",
          "code": "QRS",
          "pinyin": "quanzhoudong",
          "suoxie": "qzd",
          "other": "345@qzh"
      },
      "quanzhou": {
          "name": "泉州",
          "code": "QYS",
          "pinyin": "quanzhou",
          "suoxie": "qz",
          "other": "346@qzh"
      },
      "quzhou": {
          "name": "衢州",
          "code": "QEH",
          "pinyin": "quzhou",
          "suoxie": "qz",
          "other": "347@ran"
      },
      "rongan": {
          "name": "融安",
          "code": "RAZ",
          "pinyin": "rongan",
          "suoxie": "ra",
          "other": "348@rjg"
      },
      "rujigou": {
          "name": "汝箕沟",
          "code": "RQJ",
          "pinyin": "rujigou",
          "suoxie": "rjg",
          "other": "349@rji"
      },
      "ruijin": {
          "name": "瑞金",
          "code": "RJG",
          "pinyin": "ruijin",
          "suoxie": "rj",
          "other": "350@rzh"
      },
      "rizhao": {
          "name": "日照",
          "code": "RZK",
          "pinyin": "rizhao",
          "suoxie": "rz",
          "other": "351@scp"
      },
      "shuangchengpu": {
          "name": "双城堡",
          "code": "SCB",
          "pinyin": "shuangchengpu",
          "suoxie": "scp",
          "other": "352@sfh"
      },
      "suifenhe": {
          "name": "绥芬河",
          "code": "SFB",
          "pinyin": "suifenhe",
          "suoxie": "sfh",
          "other": "353@sgd"
      },
      "shaoguandong": {
          "name": "韶关东",
          "code": "SGQ",
          "pinyin": "shaoguandong",
          "suoxie": "sgd",
          "other": "354@shg"
      },
      "shanhaiguan": {
          "name": "山海关",
          "code": "SHD",
          "pinyin": "shanhaiguan",
          "suoxie": "shg",
          "other": "355@shu"
      },
      "suihua": {
          "name": "绥化",
          "code": "SHB",
          "pinyin": "suihua",
          "suoxie": "sh",
          "other": "356@sjf"
      },
      "sanjianfang": {
          "name": "三间房",
          "code": "SFX",
          "pinyin": "sanjianfang",
          "suoxie": "sjf",
          "other": "357@sjt"
      },
      "sujiatun": {
          "name": "苏家屯",
          "code": "SXT",
          "pinyin": "sujiatun",
          "suoxie": "sjt",
          "other": "358@sla"
      },
      "shulan": {
          "name": "舒兰",
          "code": "SLL",
          "pinyin": "shulan",
          "suoxie": "sl",
          "other": "359@smi"
      },
      "sanming": {
          "name": "三明",
          "code": "SMS",
          "pinyin": "sanming",
          "suoxie": "sm",
          "other": "360@smu"
      },
      "shenmu": {
          "name": "神木",
          "code": "OMY",
          "pinyin": "shenmu",
          "suoxie": "sm",
          "other": "361@smx"
      },
      "sanmenxia": {
          "name": "三门峡",
          "code": "SMF",
          "pinyin": "sanmenxia",
          "suoxie": "smx",
          "other": "362@sna"
      },
      "shangnan": {
          "name": "商南",
          "code": "ONY",
          "pinyin": "shangnan",
          "suoxie": "sn",
          "other": "363@sni"
      },
      "suining": {
          "name": "遂宁",
          "code": "NIW",
          "pinyin": "suining",
          "suoxie": "sn",
          "other": "364@spi"
      },
      "siping": {
          "name": "四平",
          "code": "SPT",
          "pinyin": "siping",
          "suoxie": "sp",
          "other": "365@sqi"
      },
      "shangqiu": {
          "name": "商丘",
          "code": "SQF",
          "pinyin": "shangqiu",
          "suoxie": "sq",
          "other": "366@sra"
      },
      "shangrao": {
          "name": "上饶",
          "code": "SRG",
          "pinyin": "shangrao",
          "suoxie": "sr",
          "other": "367@ssh"
      },
      "shaoshan": {
          "name": "韶山",
          "code": "SSQ",
          "pinyin": "shaoshan",
          "suoxie": "ss",
          "other": "368@sso"
      },
      "susong": {
          "name": "宿松",
          "code": "OAH",
          "pinyin": "susong",
          "suoxie": "ss",
          "other": "369@sto"
      },
      "shantou": {
          "name": "汕头",
          "code": "OTQ",
          "pinyin": "shantou",
          "suoxie": "st",
          "other": "370@swu"
      },
      "shaowu": {
          "name": "邵武",
          "code": "SWS",
          "pinyin": "shaowu",
          "suoxie": "sw",
          "other": "371@sxi"
      },
      "shexian": [
          {
              "name": "涉县",
              "code": "OEP",
              "pinyin": "shexian",
              "suoxie": "sx",
              "other": "372@sya"
          },
          {
              "name": "歙县",
              "code": "OVH",
              "pinyin": "shexian",
              "suoxie": "sx",
              "other": "1609@sxi"
          }
      ],
      "sanya": {
          "name": "三亚",
          "code": "SEQ",
          "pinyin": "sanya",
          "suoxie": "sy",
          "other": "373@sya"
      },
      "shaoyang": {
          "name": "邵阳",
          "code": "SYQ",
          "pinyin": "shaoyang",
          "suoxie": "sy",
          "other": "375@sya"
      },
      "shiyan": {
          "name": "十堰",
          "code": "SNN",
          "pinyin": "shiyan",
          "suoxie": "sy",
          "other": "376@sys"
      },
      "shuangyashan": {
          "name": "双鸭山",
          "code": "SSB",
          "pinyin": "shuangyashan",
          "suoxie": "sys",
          "other": "377@syu"
      },
      "songyuan": {
          "name": "松原",
          "code": "VYT",
          "pinyin": "songyuan",
          "suoxie": "sy",
          "other": "378@szh"
      },
      "suzhou": [
          {
              "name": "苏州",
              "code": "SZH",
              "pinyin": "suzhou",
              "suoxie": "sz",
              "other": "379@szh"
          },
          {
              "name": "宿州",
              "code": "OXH",
              "pinyin": "suzhou",
              "suoxie": "sz",
              "other": "381@szh"
          }
      ],
      "shenzhen": {
          "name": "深圳",
          "code": "SZQ",
          "pinyin": "shenzhen",
          "suoxie": "sz",
          "other": "380@szh"
      },
      "suizhou": {
          "name": "随州",
          "code": "SZN",
          "pinyin": "suizhou",
          "suoxie": "sz",
          "other": "382@szh"
      },
      "shuozhou": {
          "name": "朔州",
          "code": "SUV",
          "pinyin": "shuozhou",
          "suoxie": "sz",
          "other": "383@szx"
      },
      "shenzhenxi": {
          "name": "深圳西",
          "code": "OSQ",
          "pinyin": "shenzhenxi",
          "suoxie": "szx",
          "other": "384@tba"
      },
      "tangbao": {
          "name": "塘豹",
          "code": "TBQ",
          "pinyin": "tangbao",
          "suoxie": "tb",
          "other": "385@teq"
      },
      "taerqi": {
          "name": "塔尔气",
          "code": "TVX",
          "pinyin": "taerqi",
          "suoxie": "teq",
          "other": "386@tgu"
      },
      "tongguan": {
          "name": "潼关",
          "code": "TGY",
          "pinyin": "tongguan",
          "suoxie": "tg",
          "other": "387@tgu"
      },
      "tanggu": {
          "name": "塘沽",
          "code": "TGP",
          "pinyin": "tanggu",
          "suoxie": "tg",
          "other": "388@the"
      },
      "tahe": {
          "name": "塔河",
          "code": "TXX",
          "pinyin": "tahe",
          "suoxie": "th",
          "other": "389@thu"
      },
      "tonghua": {
          "name": "通化",
          "code": "THL",
          "pinyin": "tonghua",
          "suoxie": "th",
          "other": "390@tla"
      },
      "tailai": {
          "name": "泰来",
          "code": "TLX",
          "pinyin": "tailai",
          "suoxie": "tl",
          "other": "391@tlf"
      },
      "tulufan": {
          "name": "吐鲁番",
          "code": "TFR",
          "pinyin": "tulufan",
          "suoxie": "tlf",
          "other": "392@tli"
      },
      "tongliao": {
          "name": "通辽",
          "code": "TLD",
          "pinyin": "tongliao",
          "suoxie": "tl",
          "other": "393@tli"
      },
      "tieling": {
          "name": "铁岭",
          "code": "TLT",
          "pinyin": "tieling",
          "suoxie": "tl",
          "other": "394@tlz"
      },
      "taolaizhao": {
          "name": "陶赖昭",
          "code": "TPT",
          "pinyin": "taolaizhao",
          "suoxie": "tlz",
          "other": "395@tme"
      },
      "tumen": {
          "name": "图们",
          "code": "TML",
          "pinyin": "tumen",
          "suoxie": "tm",
          "other": "396@tre"
      },
      "tongren": {
          "name": "铜仁",
          "code": "RDQ",
          "pinyin": "tongren",
          "suoxie": "tr",
          "other": "397@tsb"
      },
      "tangshanbei": {
          "name": "唐山北",
          "code": "FUP",
          "pinyin": "tangshanbei",
          "suoxie": "tsb",
          "other": "398@tsf"
      },
      "tianshifu": {
          "name": "田师府",
          "code": "TFT",
          "pinyin": "tianshifu",
          "suoxie": "tsf",
          "other": "399@tsh"
      },
      "taishan": {
          "name": "泰山",
          "code": "TAK",
          "pinyin": "taishan",
          "suoxie": "ts",
          "other": "400@tsh"
      },
      "tangshan": {
          "name": "唐山",
          "code": "TSP",
          "pinyin": "tangshan",
          "suoxie": "ts",
          "other": "401@tsh"
      },
      "tianshui": {
          "name": "天水",
          "code": "TSJ",
          "pinyin": "tianshui",
          "suoxie": "ts",
          "other": "402@typ"
      },
      "tongyuanpu": {
          "name": "通远堡",
          "code": "TYT",
          "pinyin": "tongyuanpu",
          "suoxie": "typ",
          "other": "403@tys"
      },
      "taiyangsheng": {
          "name": "太阳升",
          "code": "TQT",
          "pinyin": "taiyangsheng",
          "suoxie": "tys",
          "other": "404@tzh"
      },
      "taizhou": [
          {
              "name": "泰州",
              "code": "UTH",
              "pinyin": "taizhou",
              "suoxie": "tz",
              "other": "405@tzi"
          },
          {
              "name": "台州",
              "code": "TZH",
              "pinyin": "taizhou",
              "suoxie": "tz",
              "other": "1708@tzh"
          }
      ],
      "tongzi": {
          "name": "桐梓",
          "code": "TZW",
          "pinyin": "tongzi",
          "suoxie": "tz",
          "other": "406@tzx"
      },
      "tongzhouxi": {
          "name": "通州西",
          "code": "TAP",
          "pinyin": "tongzhouxi",
          "suoxie": "tzx",
          "other": "407@wch"
      },
      "wuchang": [
          {
              "name": "五常",
              "code": "WCB",
              "pinyin": "wuchang",
              "suoxie": "wc",
              "other": "408@wch"
          },
          {
              "name": "武昌",
              "code": "WCN",
              "pinyin": "wuchang",
              "suoxie": "wc",
              "other": "409@wfd"
          }
      ],
      "wafangdian": {
          "name": "瓦房店",
          "code": "WDT",
          "pinyin": "wafangdian",
          "suoxie": "wfd",
          "other": "410@wha"
      },
      "weihai": {
          "name": "威海",
          "code": "WKK",
          "pinyin": "weihai",
          "suoxie": "wh",
          "other": "411@whu"
      },
      "wuhu": {
          "name": "芜湖",
          "code": "WHH",
          "pinyin": "wuhu",
          "suoxie": "wh",
          "other": "412@whx"
      },
      "wuhaixi": {
          "name": "乌海西",
          "code": "WXC",
          "pinyin": "wuhaixi",
          "suoxie": "whx",
          "other": "413@wjt"
      },
      "wujiatun": {
          "name": "吴家屯",
          "code": "WJT",
          "pinyin": "wujiatun",
          "suoxie": "wjt",
          "other": "414@wlo"
      },
      "wulong": {
          "name": "武隆",
          "code": "WLW",
          "pinyin": "wulong",
          "suoxie": "wl",
          "other": "415@wlt"
      },
      "wulanhaote": {
          "name": "乌兰浩特",
          "code": "WWT",
          "pinyin": "wulanhaote",
          "suoxie": "wlht",
          "other": "416@wna"
      },
      "weinan": {
          "name": "渭南",
          "code": "WNY",
          "pinyin": "weinan",
          "suoxie": "wn",
          "other": "417@wsh"
      },
      "weishe": {
          "name": "威舍",
          "code": "WSM",
          "pinyin": "weishe",
          "suoxie": "ws",
          "other": "418@wts"
      },
      "waitoushan": {
          "name": "歪头山",
          "code": "WIT",
          "pinyin": "waitoushan",
          "suoxie": "wts",
          "other": "419@wwe"
      },
      "wuwei": [
          {
              "name": "武威",
              "code": "WUJ",
              "pinyin": "wuwei",
              "suoxie": "ww",
              "other": "420@wwn"
          },
          {
              "name": "无为",
              "code": "IIH",
              "pinyin": "wuwei",
              "suoxie": "ww",
              "other": "2592@wws"
          }
      ],
      "wuweinan": {
          "name": "武威南",
          "code": "WWJ",
          "pinyin": "wuweinan",
          "suoxie": "wwn",
          "other": "421@wxi"
      },
      "wuxi": [
          {
              "name": "无锡",
              "code": "WXH",
              "pinyin": "wuxi",
              "suoxie": "wx",
              "other": "422@wxi"
          },
          {
              "name": "乌西",
              "code": "WXR",
              "pinyin": "wuxi",
              "suoxie": "wx",
              "other": "423@wyl"
          }
      ],
      "wuyiling": {
          "name": "乌伊岭",
          "code": "WPB",
          "pinyin": "wuyiling",
          "suoxie": "wyl",
          "other": "424@wys"
      },
      "wuyishan": {
          "name": "武夷山",
          "code": "WAS",
          "pinyin": "wuyishan",
          "suoxie": "wys",
          "other": "425@wyu"
      },
      "wanyuan": {
          "name": "万源",
          "code": "WYY",
          "pinyin": "wanyuan",
          "suoxie": "wy",
          "other": "426@wzh"
      },
      "wanzhou": {
          "name": "万州",
          "code": "WYW",
          "pinyin": "wanzhou",
          "suoxie": "wz",
          "other": "427@wzh"
      },
      "wuzhou": {
          "name": "梧州",
          "code": "WZZ",
          "pinyin": "wuzhou",
          "suoxie": "wz",
          "other": "428@wzh"
      },
      "wenzhou": {
          "name": "温州",
          "code": "RZH",
          "pinyin": "wenzhou",
          "suoxie": "wz",
          "other": "429@wzn"
      },
      "wenzhounan": {
          "name": "温州南",
          "code": "VRH",
          "pinyin": "wenzhounan",
          "suoxie": "wzn",
          "other": "430@xch"
      },
      "xichang": {
          "name": "西昌",
          "code": "ECW",
          "pinyin": "xichang",
          "suoxie": "xc",
          "other": "431@xch"
      },
      "xuchang": {
          "name": "许昌",
          "code": "XCF",
          "pinyin": "xuchang",
          "suoxie": "xc",
          "other": "432@xcn"
      },
      "xichangnan": {
          "name": "西昌南",
          "code": "ENW",
          "pinyin": "xichangnan",
          "suoxie": "xcn",
          "other": "433@xfa"
      },
      "xiangfang": {
          "name": "香坊",
          "code": "XFB",
          "pinyin": "xiangfang",
          "suoxie": "xf",
          "other": "434@xga"
      },
      "xuangang": {
          "name": "轩岗",
          "code": "XGV",
          "pinyin": "xuangang",
          "suoxie": "xg",
          "other": "435@xgu"
      },
      "xingguo": {
          "name": "兴国",
          "code": "EUG",
          "pinyin": "xingguo",
          "suoxie": "xg",
          "other": "436@xha"
      },
      "xuanhan": {
          "name": "宣汉",
          "code": "XHY",
          "pinyin": "xuanhan",
          "suoxie": "xh",
          "other": "437@xhu"
      },
      "xinhui": {
          "name": "新会",
          "code": "EFQ",
          "pinyin": "xinhui",
          "suoxie": "xh",
          "other": "438@xhu"
      },
      "xinhuang": {
          "name": "新晃",
          "code": "XLQ",
          "pinyin": "xinhuang",
          "suoxie": "xh",
          "other": "439@xlt"
      },
      "xilinhaote": {
          "name": "锡林浩特",
          "code": "XTC",
          "pinyin": "xilinhaote",
          "suoxie": "xlht",
          "other": "440@xlx"
      },
      "xinglongxian": {
          "name": "兴隆县",
          "code": "EXP",
          "pinyin": "xinglongxian",
          "suoxie": "xlx",
          "other": "441@xmb"
      },
      "xiamenbei": {
          "name": "厦门北",
          "code": "XKS",
          "pinyin": "xiamenbei",
          "suoxie": "xmb",
          "other": "442@xme"
      },
      "xiamen": {
          "name": "厦门",
          "code": "XMS",
          "pinyin": "xiamen",
          "suoxie": "xm",
          "other": "443@xmq"
      },
      "xiamengaoqi": {
          "name": "厦门高崎",
          "code": "XBS",
          "pinyin": "xiamengaoqi",
          "suoxie": "xmgq",
          "other": "444@xsh"
      },
      "xiaoshi": {
          "name": "小市",
          "code": "XST",
          "pinyin": "xiaoshi",
          "suoxie": "xs",
          "other": "445@xsh"
      },
      "xiushan": {
          "name": "秀山",
          "code": "ETW",
          "pinyin": "xiushan",
          "suoxie": "xs",
          "other": "446@xta"
      },
      "xiangtang": {
          "name": "向塘",
          "code": "XTG",
          "pinyin": "xiangtang",
          "suoxie": "xt",
          "other": "447@xwe"
      },
      "xuanwei": {
          "name": "宣威",
          "code": "XWM",
          "pinyin": "xuanwei",
          "suoxie": "xw",
          "other": "448@xxi"
      },
      "xinxiang": {
          "name": "新乡",
          "code": "XXF",
          "pinyin": "xinxiang",
          "suoxie": "xx",
          "other": "449@xya"
      },
      "xinyang": {
          "name": "信阳",
          "code": "XUN",
          "pinyin": "xinyang",
          "suoxie": "xy",
          "other": "450@xya"
      },
      "xianyang": {
          "name": "咸阳",
          "code": "XYY",
          "pinyin": "xianyang",
          "suoxie": "xy",
          "other": "451@xya"
      },
      "xiangyang": [
          {
              "name": "襄阳",
              "code": "XFN",
              "pinyin": "xiangyang",
              "suoxie": "xy",
              "other": "452@xyc"
          },
          {
              "name": "向阳",
              "code": "XDB",
              "pinyin": "xiangyang",
              "suoxie": "xy",
              "other": "1900@xya"
          }
      ],
      "xiongyuecheng": {
          "name": "熊岳城",
          "code": "XYT",
          "pinyin": "xiongyuecheng",
          "suoxie": "xyc",
          "other": "453@xyi"
      },
      "xinyi": [
          {
              "name": "新沂",
              "code": "VIH",
              "pinyin": "xinyi",
              "suoxie": "xy",
              "other": "454@xyi"
          },
          {
              "name": "信宜",
              "code": "EEQ",
              "pinyin": "xinyi",
              "suoxie": "xy",
              "other": "1906@xyj"
          }
      ],
      "xingyi": {
          "name": "兴义",
          "code": "XRZ",
          "pinyin": "xingyi",
          "suoxie": "xy",
          "other": "455@xyu"
      },
      "xinyu": {
          "name": "新余",
          "code": "XUG",
          "pinyin": "xinyu",
          "suoxie": "xy",
          "other": "456@xzh"
      },
      "xuzhou": {
          "name": "徐州",
          "code": "XCH",
          "pinyin": "xuzhou",
          "suoxie": "xz",
          "other": "457@yan"
      },
      "yanan": {
          "name": "延安",
          "code": "YWY",
          "pinyin": "yanan",
          "suoxie": "ya",
          "other": "458@ybi"
      },
      "yibin": {
          "name": "宜宾",
          "code": "YBW",
          "pinyin": "yibin",
          "suoxie": "yb",
          "other": "459@ybn"
      },
      "yabulinan": {
          "name": "亚布力南",
          "code": "YWB",
          "pinyin": "yabulinan",
          "suoxie": "ybln",
          "other": "460@ybs"
      },
      "yebaishou": {
          "name": "叶柏寿",
          "code": "YBD",
          "pinyin": "yebaishou",
          "suoxie": "ybs",
          "other": "461@ycd"
      },
      "yichangdong": {
          "name": "宜昌东",
          "code": "HAN",
          "pinyin": "yichangdong",
          "suoxie": "ycd",
          "other": "462@ych"
      },
      "yongchuan": {
          "name": "永川",
          "code": "YCW",
          "pinyin": "yongchuan",
          "suoxie": "yc",
          "other": "463@ych"
      },
      "yancheng": [
          {
              "name": "盐城",
              "code": "AFH",
              "pinyin": "yancheng",
              "suoxie": "yc",
              "other": "464@ych"
          },
          {
              "name": "晏城",
              "code": "YEK",
              "pinyin": "yancheng",
              "suoxie": "yc",
              "other": "1939@ych"
          }
      ],
      "yichang": {
          "name": "宜昌",
          "code": "YCN",
          "pinyin": "yichang",
          "suoxie": "yc",
          "other": "465@ych"
      },
      "yuncheng": [
          {
              "name": "运城",
              "code": "YNV",
              "pinyin": "yuncheng",
              "suoxie": "yc",
              "other": "466@ych"
          },
          {
              "name": "郓城",
              "code": "YPK",
              "pinyin": "yuncheng",
              "suoxie": "yc",
              "other": "1942@ych"
          }
      ],
      "yichun": [
          {
              "name": "伊春",
              "code": "YCB",
              "pinyin": "yichun",
              "suoxie": "yc",
              "other": "467@yci"
          },
          {
              "name": "宜春",
              "code": "YEG",
              "pinyin": "yichun",
              "suoxie": "yc",
              "other": "2642@ych"
          }
      ],
      "yuci": {
          "name": "榆次",
          "code": "YCV",
          "pinyin": "yuci",
          "suoxie": "yc",
          "other": "468@ycu"
      },
      "yangcun": {
          "name": "杨村",
          "code": "YBP",
          "pinyin": "yangcun",
          "suoxie": "yc",
          "other": "469@ycx"
      },
      "yichunxi": {
          "name": "宜春西",
          "code": "YCG",
          "pinyin": "yichunxi",
          "suoxie": "ycx",
          "other": "470@yes"
      },
      "yiershi": {
          "name": "伊尔施",
          "code": "YET",
          "pinyin": "yiershi",
          "suoxie": "yes",
          "other": "471@yga"
      },
      "yangang": {
          "name": "燕岗",
          "code": "YGW",
          "pinyin": "yangang",
          "suoxie": "yg",
          "other": "472@yji"
      },
      "yongji": {
          "name": "永济",
          "code": "YIV",
          "pinyin": "yongji",
          "suoxie": "yj",
          "other": "473@yji"
      },
      "yanji": {
          "name": "延吉",
          "code": "YJL",
          "pinyin": "yanji",
          "suoxie": "yj",
          "other": "474@yko"
      },
      "yingkou": {
          "name": "营口",
          "code": "YKT",
          "pinyin": "yingkou",
          "suoxie": "yk",
          "other": "475@yks"
      },
      "yakeshi": {
          "name": "牙克石",
          "code": "YKX",
          "pinyin": "yakeshi",
          "suoxie": "yks",
          "other": "476@yli"
      },
      "yanliang": {
          "name": "阎良",
          "code": "YNY",
          "pinyin": "yanliang",
          "suoxie": "yl",
          "other": "477@yli"
      },
      "yulin": [
          {
              "name": "玉林",
              "code": "YLZ",
              "pinyin": "yulin",
              "suoxie": "yl",
              "other": "478@yli"
          },
          {
              "name": "榆林",
              "code": "ALY",
              "pinyin": "yulin",
              "suoxie": "yl",
              "other": "479@ylw"
          }
      ],
      "yalongwan": {
          "name": "亚龙湾",
          "code": "TWQ",
          "pinyin": "yalongwan",
          "suoxie": "ylw",
          "other": "480@ymp"
      },
      "yimianpo": {
          "name": "一面坡",
          "code": "YPB",
          "pinyin": "yimianpo",
          "suoxie": "ymp",
          "other": "481@yni"
      },
      "yining": {
          "name": "伊宁",
          "code": "YMR",
          "pinyin": "yining",
          "suoxie": "yn",
          "other": "482@ypg"
      },
      "yangpingguan": {
          "name": "阳平关",
          "code": "YAY",
          "pinyin": "yangpingguan",
          "suoxie": "ypg",
          "other": "483@ypi"
      },
      "yuping": {
          "name": "玉屏",
          "code": "YZW",
          "pinyin": "yuping",
          "suoxie": "yp",
          "other": "484@ypi"
      },
      "yuanping": {
          "name": "原平",
          "code": "YPV",
          "pinyin": "yuanping",
          "suoxie": "yp",
          "other": "485@yqi"
      },
      "yanqing": {
          "name": "延庆",
          "code": "YNP",
          "pinyin": "yanqing",
          "suoxie": "yq",
          "other": "486@yqq"
      },
      "yangquanqu": {
          "name": "阳泉曲",
          "code": "YYV",
          "pinyin": "yangquanqu",
          "suoxie": "yqq",
          "other": "487@yqu"
      },
      "yuquan": {
          "name": "玉泉",
          "code": "YQB",
          "pinyin": "yuquan",
          "suoxie": "yq",
          "other": "488@yqu"
      },
      "yangquan": {
          "name": "阳泉",
          "code": "AQP",
          "pinyin": "yangquan",
          "suoxie": "yq",
          "other": "489@ysh"
      },
      "yingshan": {
          "name": "营山",
          "code": "NUW",
          "pinyin": "yingshan",
          "suoxie": "ys",
          "other": "490@ysh"
      },
      "yushan": {
          "name": "玉山",
          "code": "YNG",
          "pinyin": "yushan",
          "suoxie": "ys",
          "other": "491@ysh"
      },
      "yanshan": {
          "name": "燕山",
          "code": "AOP",
          "pinyin": "yanshan",
          "suoxie": "ys",
          "other": "492@ysh"
      },
      "yushu": {
          "name": "榆树",
          "code": "YRT",
          "pinyin": "yushu",
          "suoxie": "ys",
          "other": "493@yta"
      },
      "yingtan": {
          "name": "鹰潭",
          "code": "YTG",
          "pinyin": "yingtan",
          "suoxie": "yt",
          "other": "494@yta"
      },
      "yantai": {
          "name": "烟台",
          "code": "YAK",
          "pinyin": "yantai",
          "suoxie": "yt",
          "other": "495@yth"
      },
      "yitulihe": {
          "name": "伊图里河",
          "code": "YEX",
          "pinyin": "yitulihe",
          "suoxie": "ytlh",
          "other": "496@ytx"
      },
      "yutianxian": {
          "name": "玉田县",
          "code": "ATP",
          "pinyin": "yutianxian",
          "suoxie": "ytx",
          "other": "497@ywu"
      },
      "yiwu": {
          "name": "义乌",
          "code": "YWH",
          "pinyin": "yiwu",
          "suoxie": "yw",
          "other": "498@yxi"
      },
      "yangxin": [
          {
              "name": "阳新",
              "code": "YON",
              "pinyin": "yangxin",
              "suoxie": "yx",
              "other": "499@yxi"
          },
          {
              "name": "阳信",
              "code": "YVK",
              "pinyin": "yangxin",
              "suoxie": "yx",
              "other": "2674@yxi"
          }
      ],
      "yixian": {
          "name": "义县",
          "code": "YXD",
          "pinyin": "yixian",
          "suoxie": "yx",
          "other": "500@yya"
      },
      "yiyang": [
          {
              "name": "益阳",
              "code": "AEQ",
              "pinyin": "yiyang",
              "suoxie": "yy",
              "other": "501@yya"
          },
          {
              "name": "弋阳",
              "code": "YIG",
              "pinyin": "yiyang",
              "suoxie": "yy",
              "other": "2030@yya"
          }
      ],
      "yueyang": {
          "name": "岳阳",
          "code": "YYQ",
          "pinyin": "yueyang",
          "suoxie": "yy",
          "other": "502@yzh"
      },
      "yazhou": {
          "name": "崖州",
          "code": "YUQ",
          "pinyin": "yazhou",
          "suoxie": "yz",
          "other": "503@yzh"
      },
      "yongzhou": {
          "name": "永州",
          "code": "AOQ",
          "pinyin": "yongzhou",
          "suoxie": "yz",
          "other": "504@yzh"
      },
      "yangzhou": {
          "name": "扬州",
          "code": "YLH",
          "pinyin": "yangzhou",
          "suoxie": "yz",
          "other": "505@zbo"
      },
      "zibo": {
          "name": "淄博",
          "code": "ZBK",
          "pinyin": "zibo",
          "suoxie": "zb",
          "other": "506@zcd"
      },
      "zhenchengdi": {
          "name": "镇城底",
          "code": "ZDV",
          "pinyin": "zhenchengdi",
          "suoxie": "zcd",
          "other": "507@zgo"
      },
      "zigong": {
          "name": "自贡",
          "code": "ZGW",
          "pinyin": "zigong",
          "suoxie": "zg",
          "other": "508@zha"
      },
      "zhuhai": {
          "name": "珠海",
          "code": "ZHQ",
          "pinyin": "zhuhai",
          "suoxie": "zh",
          "other": "509@zhb"
      },
      "zhuhaibei": {
          "name": "珠海北",
          "code": "ZIQ",
          "pinyin": "zhuhaibei",
          "suoxie": "zhb",
          "other": "510@zji"
      },
      "zhanjiang": {
          "name": "湛江",
          "code": "ZJZ",
          "pinyin": "zhanjiang",
          "suoxie": "zj",
          "other": "511@zji"
      },
      "zhenjiang": {
          "name": "镇江",
          "code": "ZJH",
          "pinyin": "zhenjiang",
          "suoxie": "zj",
          "other": "512@zjj"
      },
      "zhangjiajie": {
          "name": "张家界",
          "code": "DIQ",
          "pinyin": "zhangjiajie",
          "suoxie": "zjj",
          "other": "513@zjk"
      },
      "zhangjiakou": {
          "name": "张家口",
          "code": "ZKP",
          "pinyin": "zhangjiakou",
          "suoxie": "zjk",
          "other": "514@zjn"
      },
      "zhangjiakounan": {
          "name": "张家口南",
          "code": "ZMP",
          "pinyin": "zhangjiakounan",
          "suoxie": "zjkn",
          "other": "515@zko"
      },
      "zhoukou": {
          "name": "周口",
          "code": "ZKN",
          "pinyin": "zhoukou",
          "suoxie": "zk",
          "other": "516@zlm"
      },
      "zhelimu": {
          "name": "哲里木",
          "code": "ZLC",
          "pinyin": "zhelimu",
          "suoxie": "zlm",
          "other": "517@zlt"
      },
      "zhalantun": {
          "name": "扎兰屯",
          "code": "ZTX",
          "pinyin": "zhalantun",
          "suoxie": "zlt",
          "other": "518@zmd"
      },
      "zhumadian": {
          "name": "驻马店",
          "code": "ZDN",
          "pinyin": "zhumadian",
          "suoxie": "zmd",
          "other": "519@zqi"
      },
      "zhaoqing": {
          "name": "肇庆",
          "code": "ZVQ",
          "pinyin": "zhaoqing",
          "suoxie": "zq",
          "other": "520@zsz"
      },
      "zhoushuizi": {
          "name": "周水子",
          "code": "ZIT",
          "pinyin": "zhoushuizi",
          "suoxie": "zsz",
          "other": "521@zto"
      },
      "zhaotong": {
          "name": "昭通",
          "code": "ZDW",
          "pinyin": "zhaotong",
          "suoxie": "zt",
          "other": "522@zwe"
      },
      "zhongwei": {
          "name": "中卫",
          "code": "ZWJ",
          "pinyin": "zhongwei",
          "suoxie": "zw",
          "other": "523@zya"
      },
      "ziyang": [
          {
              "name": "资阳",
              "code": "ZYW",
              "pinyin": "ziyang",
              "suoxie": "zy",
              "other": "524@zyx"
          },
          {
              "name": "紫阳",
              "code": "ZVY",
              "pinyin": "ziyang",
              "suoxie": "zy",
              "other": "2108@zya"
          }
      ],
      "zunyixi": {
          "name": "遵义西",
          "code": "ZIW",
          "pinyin": "zunyixi",
          "suoxie": "zyx",
          "other": "525@zzh"
      },
      "zaozhuang": {
          "name": "枣庄",
          "code": "ZEK",
          "pinyin": "zaozhuang",
          "suoxie": "zz",
          "other": "526@zzh"
      },
      "zizhong": {
          "name": "资中",
          "code": "ZZW",
          "pinyin": "zizhong",
          "suoxie": "zz",
          "other": "527@zzh"
      },
      "zhuzhou": {
          "name": "株洲",
          "code": "ZZQ",
          "pinyin": "zhuzhou",
          "suoxie": "zz",
          "other": "528@zzx"
      },
      "zaozhuangxi": {
          "name": "枣庄西",
          "code": "ZFK",
          "pinyin": "zaozhuangxi",
          "suoxie": "zzx",
          "other": "529@aax"
      },
      "angangxi": {
          "name": "昂昂溪",
          "code": "AAX",
          "pinyin": "angangxi",
          "suoxie": "aax",
          "other": "530@ach"
      },
      "acheng": {
          "name": "阿城",
          "code": "ACB",
          "pinyin": "acheng",
          "suoxie": "ac",
          "other": "531@ada"
      },
      "anda": {
          "name": "安达",
          "code": "ADX",
          "pinyin": "anda",
          "suoxie": "ad",
          "other": "532@ade"
      },
      "ande": {
          "name": "安德",
          "code": "ARW",
          "pinyin": "ande",
          "suoxie": "ad",
          "other": "533@adi"
      },
      "anding": {
          "name": "安定",
          "code": "ADP",
          "pinyin": "anding",
          "suoxie": "ad",
          "other": "534@adu"
      },
      "anduo": {
          "name": "安多",
          "code": "ADO",
          "pinyin": "anduo",
          "suoxie": "ad",
          "other": "535@agu"
      },
      "anguang": {
          "name": "安广",
          "code": "AGT",
          "pinyin": "anguang",
          "suoxie": "ag",
          "other": "536@aha"
      },
      "aohan": {
          "name": "敖汉",
          "code": "YED",
          "pinyin": "aohan",
          "suoxie": "ah",
          "other": "537@ahe"
      },
      "aihe": {
          "name": "艾河",
          "code": "AHP",
          "pinyin": "aihe",
          "suoxie": "ah",
          "other": "538@ahu"
      },
      "anhua": {
          "name": "安化",
          "code": "PKQ",
          "pinyin": "anhua",
          "suoxie": "ah",
          "other": "539@ajc"
      },
      "aijiacun": {
          "name": "艾家村",
          "code": "AJJ",
          "pinyin": "aijiacun",
          "suoxie": "ajc",
          "other": "540@aji"
      },
      "aojiang": {
          "name": "鳌江",
          "code": "ARH",
          "pinyin": "aojiang",
          "suoxie": "aj",
          "other": "541@aji"
      },
      "anjia": {
          "name": "安家",
          "code": "AJB",
          "pinyin": "anjia",
          "suoxie": "aj",
          "other": "542@aji"
      },
      "ajin": {
          "name": "阿金",
          "code": "AJD",
          "pinyin": "ajin",
          "suoxie": "aj",
          "other": "543@aji"
      },
      "anjing": {
          "name": "安靖",
          "code": "PYW",
          "pinyin": "anjing",
          "suoxie": "aj",
          "other": "544@akt"
      },
      "aketao": {
          "name": "阿克陶",
          "code": "AER",
          "pinyin": "aketao",
          "suoxie": "akt",
          "other": "545@aky"
      },
      "ankouyao": {
          "name": "安口窑",
          "code": "AYY",
          "pinyin": "ankouyao",
          "suoxie": "aky",
          "other": "546@alg"
      },
      "aolibugao": {
          "name": "敖力布告",
          "code": "ALD",
          "pinyin": "aolibugao",
          "suoxie": "albg",
          "other": "547@alo"
      },
      "anlong": {
          "name": "安龙",
          "code": "AUZ",
          "pinyin": "anlong",
          "suoxie": "al",
          "other": "548@als"
      },
      "alongshan": {
          "name": "阿龙山",
          "code": "ASX",
          "pinyin": "alongshan",
          "suoxie": "als",
          "other": "549@alu"
      },
      "anlu": {
          "name": "安陆",
          "code": "ALN",
          "pinyin": "anlu",
          "suoxie": "al",
          "other": "550@ame"
      },
      "amuer": {
          "name": "阿木尔",
          "code": "JTX",
          "pinyin": "amuer",
          "suoxie": "ame",
          "other": "551@anz"
      },
      "ananzhuang": {
          "name": "阿南庄",
          "code": "AZM",
          "pinyin": "ananzhuang",
          "suoxie": "anz",
          "other": "552@aqx"
      },
      "anqingxi": {
          "name": "安庆西",
          "code": "APH",
          "pinyin": "anqingxi",
          "suoxie": "aqx",
          "other": "553@asx"
      },
      "anshanxi": {
          "name": "鞍山西",
          "code": "AXT",
          "pinyin": "anshanxi",
          "suoxie": "asx",
          "other": "554@ata"
      },
      "antang": {
          "name": "安塘",
          "code": "ATV",
          "pinyin": "antang",
          "suoxie": "at",
          "other": "555@atb"
      },
      "antingbei": {
          "name": "安亭北",
          "code": "ASH",
          "pinyin": "antingbei",
          "suoxie": "atb",
          "other": "556@ats"
      },
      "atushi": {
          "name": "阿图什",
          "code": "ATR",
          "pinyin": "atushi",
          "suoxie": "ats",
          "other": "557@atu"
      },
      "antu": {
          "name": "安图",
          "code": "ATL",
          "pinyin": "antu",
          "suoxie": "at",
          "other": "558@axi"
      },
      "anxi": {
          "name": "安溪",
          "code": "AXS",
          "pinyin": "anxi",
          "suoxie": "ax",
          "other": "559@bao"
      },
      "boao": {
          "name": "博鳌",
          "code": "BWQ",
          "pinyin": "boao",
          "suoxie": "ba",
          "other": "560@bbe"
      },
      "beibei": {
          "name": "北碚",
          "code": "BPW",
          "pinyin": "beibei",
          "suoxie": "bb",
          "other": "561@bbg"
      },
      "baibiguan": {
          "name": "白壁关",
          "code": "BGV",
          "pinyin": "baibiguan",
          "suoxie": "bbg",
          "other": "562@bbn"
      },
      "bengbunan": {
          "name": "蚌埠南",
          "code": "BMH",
          "pinyin": "bengbunan",
          "suoxie": "bbn",
          "other": "563@bch"
      },
      "bachu": {
          "name": "巴楚",
          "code": "BCR",
          "pinyin": "bachu",
          "suoxie": "bc",
          "other": "564@bch"
      },
      "bancheng": {
          "name": "板城",
          "code": "BUP",
          "pinyin": "bancheng",
          "suoxie": "bc",
          "other": "565@bdh"
      },
      "beidaihe": {
          "name": "北戴河",
          "code": "BEP",
          "pinyin": "beidaihe",
          "suoxie": "bdh",
          "other": "566@bdi"
      },
      "baoding": {
          "name": "保定",
          "code": "BDP",
          "pinyin": "baoding",
          "suoxie": "bd",
          "other": "567@bdi"
      },
      "baodi": {
          "name": "宝坻",
          "code": "BPP",
          "pinyin": "baodi",
          "suoxie": "bd",
          "other": "568@bdl"
      },
      "badaling": {
          "name": "八达岭",
          "code": "ILP",
          "pinyin": "badaling",
          "suoxie": "bdl",
          "other": "569@bdo"
      },
      "badong": {
          "name": "巴东",
          "code": "BNN",
          "pinyin": "badong",
          "suoxie": "bd",
          "other": "570@bgu"
      },
      "baiguo": {
          "name": "柏果",
          "code": "BGM",
          "pinyin": "baiguo",
          "suoxie": "bg",
          "other": "571@bha"
      },
      "buhai": {
          "name": "布海",
          "code": "BUT",
          "pinyin": "buhai",
          "suoxie": "bh",
          "other": "572@bhd"
      },
      "baihedong": {
          "name": "白河东",
          "code": "BIY",
          "pinyin": "baihedong",
          "suoxie": "bhd",
          "other": "573@bho"
      },
      "benhong": {
          "name": "贲红",
          "code": "BVC",
          "pinyin": "benhong",
          "suoxie": "bh",
          "other": "574@bhs"
      },
      "baohuashan": {
          "name": "宝华山",
          "code": "BWH",
          "pinyin": "baohuashan",
          "suoxie": "bhs",
          "other": "575@bhx"
      },
      "baihexian": {
          "name": "白河县",
          "code": "BEY",
          "pinyin": "baihexian",
          "suoxie": "bhx",
          "other": "576@bjg"
      },
      "baijigou": {
          "name": "白芨沟",
          "code": "BJJ",
          "pinyin": "baijigou",
          "suoxie": "bjg",
          "other": "577@bjg"
      },
      "bijiguan": {
          "name": "碧鸡关",
          "code": "BJM",
          "pinyin": "bijiguan",
          "suoxie": "bjg",
          "other": "578@bji"
      },
      "beijiao": {
          "name": "北滘",
          "code": "IBQ",
          "pinyin": "beijiao",
          "suoxie": "bj",
          "other": "579@bji"
      },
      "bijiang": {
          "name": "碧江",
          "code": "BLQ",
          "pinyin": "bijiang",
          "suoxie": "bj",
          "other": "580@bjp"
      },
      "baijipo": {
          "name": "白鸡坡",
          "code": "BBM",
          "pinyin": "baijipo",
          "suoxie": "bjp",
          "other": "581@bjs"
      },
      "bijiashan": {
          "name": "笔架山",
          "code": "BSB",
          "pinyin": "bijiashan",
          "suoxie": "bjs",
          "other": "582@bjt"
      },
      "bajiaotai": {
          "name": "八角台",
          "code": "BTD",
          "pinyin": "bajiaotai",
          "suoxie": "bjt",
          "other": "583@bka"
      },
      "baokang": {
          "name": "保康",
          "code": "BKD",
          "pinyin": "baokang",
          "suoxie": "bk",
          "other": "584@bkp"
      },
      "baikuipu": {
          "name": "白奎堡",
          "code": "BKB",
          "pinyin": "baikuipu",
          "suoxie": "bkp",
          "other": "585@bla"
      },
      "bailang": [
          {
              "name": "白狼",
              "code": "BAT",
              "pinyin": "bailang",
              "suoxie": "bl",
              "other": "586@bla"
          },
          {
              "name": "百浪",
              "code": "BRZ",
              "pinyin": "bailang",
              "suoxie": "bl",
              "other": "587@ble"
          }
      ],
      "bole": {
          "name": "博乐",
          "code": "BOR",
          "pinyin": "bole",
          "suoxie": "bl",
          "other": "588@blg"
      },
      "baolage": {
          "name": "宝拉格",
          "code": "BQC",
          "pinyin": "baolage",
          "suoxie": "blg",
          "other": "589@bli"
      },
      "balin": {
          "name": "巴林",
          "code": "BLX",
          "pinyin": "balin",
          "suoxie": "bl",
          "other": "590@bli"
      },
      "baolin": {
          "name": "宝林",
          "code": "BNB",
          "pinyin": "baolin",
          "suoxie": "bl",
          "other": "591@bli"
      },
      "beiliu": {
          "name": "北流",
          "code": "BOZ",
          "pinyin": "beiliu",
          "suoxie": "bl",
          "other": "592@bli"
      },
      "boli": {
          "name": "勃利",
          "code": "BLB",
          "pinyin": "boli",
          "suoxie": "bl",
          "other": "593@blk"
      },
      "buliekai": {
          "name": "布列开",
          "code": "BLR",
          "pinyin": "buliekai",
          "suoxie": "blk",
          "other": "594@bls"
      },
      "baolongshan": {
          "name": "宝龙山",
          "code": "BND",
          "pinyin": "baolongshan",
          "suoxie": "bls",
          "other": "595@blx"
      },
      "bailixia": {
          "name": "百里峡",
          "code": "AAP",
          "pinyin": "bailixia",
          "suoxie": "blx",
          "other": "596@bmc"
      },
      "bamiancheng": {
          "name": "八面城",
          "code": "BMD",
          "pinyin": "bamiancheng",
          "suoxie": "bmc",
          "other": "597@bmq"
      },
      "banmaoqing": {
          "name": "班猫箐",
          "code": "BNM",
          "pinyin": "banmaoqing",
          "suoxie": "bmq",
          "other": "598@bmt"
      },
      "bamiantong": {
          "name": "八面通",
          "code": "BMB",
          "pinyin": "bamiantong",
          "suoxie": "bmt",
          "other": "599@bmz"
      },
      "beimaquanzi": {
          "name": "北马圈子",
          "code": "BRP",
          "pinyin": "beimaquanzi",
          "suoxie": "bmqz",
          "other": "600@bpn"
      },
      "beipiaonan": {
          "name": "北票南",
          "code": "RPD",
          "pinyin": "beipiaonan",
          "suoxie": "bpn",
          "other": "601@bqi"
      },
      "baiqi": {
          "name": "白旗",
          "code": "BQP",
          "pinyin": "baiqi",
          "suoxie": "bq",
          "other": "602@bql"
      },
      "baoquanling": {
          "name": "宝泉岭",
          "code": "BQB",
          "pinyin": "baoquanling",
          "suoxie": "bql",
          "other": "603@bqu"
      },
      "baiquan": {
          "name": "白泉",
          "code": "BQL",
          "pinyin": "baiquan",
          "suoxie": "bq",
          "other": "604@bsh"
      },
      "bashan": {
          "name": "巴山",
          "code": "BAY",
          "pinyin": "bashan",
          "suoxie": "bs",
          "other": "605@bsj"
      },
      "baishuijiang": {
          "name": "白水江",
          "code": "BSY",
          "pinyin": "baishuijiang",
          "suoxie": "bsj",
          "other": "606@bsp"
      },
      "baishapo": {
          "name": "白沙坡",
          "code": "BPM",
          "pinyin": "baishapo",
          "suoxie": "bsp",
          "other": "607@bss"
      },
      "baishishan": {
          "name": "白石山",
          "code": "BAL",
          "pinyin": "baishishan",
          "suoxie": "bss",
          "other": "608@bsz"
      },
      "baishuizhen": {
          "name": "白水镇",
          "code": "BUM",
          "pinyin": "baishuizhen",
          "suoxie": "bsz",
          "other": "609@btd"
      },
      "bantian": {
          "name": "坂田",
          "code": "BTQ",
          "pinyin": "bantian",
          "suoxie": "bt",
          "other": "611@bto"
      },
      "botou": {
          "name": "泊头",
          "code": "BZP",
          "pinyin": "botou",
          "suoxie": "bt",
          "other": "612@btu"
      },
      "beitun": {
          "name": "北屯",
          "code": "BYP",
          "pinyin": "beitun",
          "suoxie": "bt",
          "other": "613@bxh"
      },
      "benxihu": {
          "name": "本溪湖",
          "code": "BHT",
          "pinyin": "benxihu",
          "suoxie": "bxh",
          "other": "614@bxi"
      },
      "boxing": {
          "name": "博兴",
          "code": "BXK",
          "pinyin": "boxing",
          "suoxie": "bx",
          "other": "615@bxt"
      },
      "baxiantong": {
          "name": "八仙筒",
          "code": "VXD",
          "pinyin": "baxiantong",
          "suoxie": "bxt",
          "other": "616@byg"
      },
      "baiyinchagan": {
          "name": "白音察干",
          "code": "BYC",
          "pinyin": "baiyinchagan",
          "suoxie": "bycg",
          "other": "617@byh"
      },
      "beiyinhe": {
          "name": "背荫河",
          "code": "BYB",
          "pinyin": "beiyinhe",
          "suoxie": "byh",
          "other": "618@byi"
      },
      "beiying": {
          "name": "北营",
          "code": "BIV",
          "pinyin": "beiying",
          "suoxie": "by",
          "other": "619@byl"
      },
      "bayangaole": {
          "name": "巴彦高勒",
          "code": "BAC",
          "pinyin": "bayangaole",
          "suoxie": "bygl",
          "other": "620@byl"
      },
      "baiyintala": {
          "name": "白音他拉",
          "code": "BID",
          "pinyin": "baiyintala",
          "suoxie": "bytl",
          "other": "621@byq"
      },
      "bayuquan": {
          "name": "鲅鱼圈",
          "code": "BYT",
          "pinyin": "bayuquan",
          "suoxie": "byq",
          "other": "622@bys"
      },
      "baiyinshi": {
          "name": "白银市",
          "code": "BNJ",
          "pinyin": "baiyinshi",
          "suoxie": "bys",
          "other": "623@bys"
      },
      "baiyinhushuo": {
          "name": "白音胡硕",
          "code": "BCD",
          "pinyin": "baiyinhushuo",
          "suoxie": "byhs",
          "other": "624@bzh"
      },
      "bazhong": {
          "name": "巴中",
          "code": "IEW",
          "pinyin": "bazhong",
          "suoxie": "bz",
          "other": "625@bzh"
      },
      "bazhou": {
          "name": "霸州",
          "code": "RMP",
          "pinyin": "bazhou",
          "suoxie": "bz",
          "other": "626@bzh"
      },
      "beizhai": {
          "name": "北宅",
          "code": "BVP",
          "pinyin": "beizhai",
          "suoxie": "bz",
          "other": "627@cbb"
      },
      "chibibei": {
          "name": "赤壁北",
          "code": "CIN",
          "pinyin": "chibibei",
          "suoxie": "cbb",
          "other": "628@cbg"
      },
      "chabuga": {
          "name": "查布嘎",
          "code": "CBC",
          "pinyin": "chabuga",
          "suoxie": "cbg",
          "other": "629@cch"
      },
      "changcheng": {
          "name": "长城",
          "code": "CEJ",
          "pinyin": "changcheng",
          "suoxie": "cc",
          "other": "630@cch"
      },
      "changchong": {
          "name": "长冲",
          "code": "CCM",
          "pinyin": "changchong",
          "suoxie": "cc",
          "other": "631@cdd"
      },
      "chengdedong": {
          "name": "承德东",
          "code": "CCP",
          "pinyin": "chengdedong",
          "suoxie": "cdd",
          "other": "632@cfx"
      },
      "chifengxi": {
          "name": "赤峰西",
          "code": "CID",
          "pinyin": "chifengxi",
          "suoxie": "cfx",
          "other": "633@cga"
      },
      "cuogang": {
          "name": "嵯岗",
          "code": "CAX",
          "pinyin": "cuogang",
          "suoxie": "cg",
          "other": "634@cga"
      },
      "chaigang": {
          "name": "柴岗",
          "code": "CGT",
          "pinyin": "chaigang",
          "suoxie": "cg",
          "other": "635@cge"
      },
      "changge": {
          "name": "长葛",
          "code": "CEF",
          "pinyin": "changge",
          "suoxie": "cg",
          "other": "636@cgp"
      },
      "chaigoupu": {
          "name": "柴沟堡",
          "code": "CGV",
          "pinyin": "chaigoupu",
          "suoxie": "cgp",
          "other": "637@cgu"
      },
      "chenggu": {
          "name": "城固",
          "code": "CGY",
          "pinyin": "chenggu",
          "suoxie": "cg",
          "other": "638@cgy"
      },
      "chenguanying": {
          "name": "陈官营",
          "code": "CAJ",
          "pinyin": "chenguanying",
          "suoxie": "cgy",
          "other": "639@cgz"
      },
      "chenggaozi": {
          "name": "成高子",
          "code": "CZB",
          "pinyin": "chenggaozi",
          "suoxie": "cgz",
          "other": "640@cha"
      },
      "caohai": {
          "name": "草海",
          "code": "WBW",
          "pinyin": "caohai",
          "suoxie": "ch",
          "other": "641@che"
      },
      "chaihe": {
          "name": "柴河",
          "code": "CHB",
          "pinyin": "chaihe",
          "suoxie": "ch",
          "other": "642@che"
      },
      "ceheng": {
          "name": "册亨",
          "code": "CHZ",
          "pinyin": "ceheng",
          "suoxie": "ch",
          "other": "643@chk"
      },
      "caohekou": {
          "name": "草河口",
          "code": "CKT",
          "pinyin": "caohekou",
          "suoxie": "chk",
          "other": "644@chk"
      },
      "cuihuangkou": {
          "name": "崔黄口",
          "code": "CHP",
          "pinyin": "cuihuangkou",
          "suoxie": "chk",
          "other": "645@chu"
      },
      "chaohu": {
          "name": "巢湖",
          "code": "CIH",
          "pinyin": "chaohu",
          "suoxie": "ch",
          "other": "646@cjg"
      },
      "caijiagou": {
          "name": "蔡家沟",
          "code": "CJT",
          "pinyin": "caijiagou",
          "suoxie": "cjg",
          "other": "647@cjh"
      },
      "chengjisihan": {
          "name": "成吉思汗",
          "code": "CJX",
          "pinyin": "chengjisihan",
          "suoxie": "cjsh",
          "other": "648@cji"
      },
      "chajiang": {
          "name": "岔江",
          "code": "CAM",
          "pinyin": "chajiang",
          "suoxie": "cj",
          "other": "649@cjp"
      },
      "caijiapo": {
          "name": "蔡家坡",
          "code": "CJY",
          "pinyin": "caijiapo",
          "suoxie": "cjp",
          "other": "650@cle"
      },
      "changle": {
          "name": "昌乐",
          "code": "CLK",
          "pinyin": "changle",
          "suoxie": "cl",
          "other": "651@clg"
      },
      "chaolianggou": {
          "name": "超梁沟",
          "code": "CYP",
          "pinyin": "chaolianggou",
          "suoxie": "clg",
          "other": "652@cli"
      },
      "cili": {
          "name": "慈利",
          "code": "CUQ",
          "pinyin": "cili",
          "suoxie": "cl",
          "other": "653@cli"
      },
      "changli": {
          "name": "昌黎",
          "code": "CLP",
          "pinyin": "changli",
          "suoxie": "cl",
          "other": "654@clz"
      },
      "changlingzi": {
          "name": "长岭子",
          "code": "CLT",
          "pinyin": "changlingzi",
          "suoxie": "clz",
          "other": "655@cmi"
      },
      "chenming": {
          "name": "晨明",
          "code": "CMB",
          "pinyin": "chenming",
          "suoxie": "cm",
          "other": "656@cno"
      },
      "changnong": {
          "name": "长农",
          "code": "CNJ",
          "pinyin": "changnong",
          "suoxie": "cn",
          "other": "657@cpb"
      },
      "changpingbei": {
          "name": "昌平北",
          "code": "VBP",
          "pinyin": "changpingbei",
          "suoxie": "cpb",
          "other": "658@cpi"
      },
      "changpoling": {
          "name": "长坡岭",
          "code": "CPM",
          "pinyin": "changpoling",
          "suoxie": "cpl",
          "other": "660@cqi"
      },
      "chenqing": {
          "name": "辰清",
          "code": "CQB",
          "pinyin": "chenqing",
          "suoxie": "cq",
          "other": "661@csh"
      },
      "caishan": {
          "name": "蔡山",
          "code": "CON",
          "pinyin": "caishan",
          "suoxie": "cs",
          "other": "662@csh"
      },
      "chushan": {
          "name": "楚山",
          "code": "CSB",
          "pinyin": "chushan",
          "suoxie": "cs",
          "other": "663@csh"
      },
      "changshou": {
          "name": "长寿",
          "code": "EFW",
          "pinyin": "changshou",
          "suoxie": "cs",
          "other": "664@csh"
      },
      "cishan": {
          "name": "磁山",
          "code": "CSP",
          "pinyin": "cishan",
          "suoxie": "cs",
          "other": "665@csh"
      },
      "cangshi": {
          "name": "苍石",
          "code": "CST",
          "pinyin": "cangshi",
          "suoxie": "cs",
          "other": "666@csh"
      },
      "caoshi": {
          "name": "草市",
          "code": "CSL",
          "pinyin": "caoshi",
          "suoxie": "cs",
          "other": "667@csq"
      },
      "chasuqi": {
          "name": "察素齐",
          "code": "CSC",
          "pinyin": "chasuqi",
          "suoxie": "csq",
          "other": "668@cst"
      },
      "changshantun": {
          "name": "长山屯",
          "code": "CVT",
          "pinyin": "changshantun",
          "suoxie": "cst",
          "other": "669@cti"
      },
      "changting": {
          "name": "长汀",
          "code": "CES",
          "pinyin": "changting",
          "suoxie": "ct",
          "other": "670@ctx"
      },
      "changtuxi": {
          "name": "昌图西",
          "code": "CPT",
          "pinyin": "changtuxi",
          "suoxie": "ctx",
          "other": "671@cwa"
      },
      "chunwan": {
          "name": "春湾",
          "code": "CQQ",
          "pinyin": "chunwan",
          "suoxie": "cw",
          "other": "672@cxi"
      },
      "cixian": {
          "name": "磁县",
          "code": "CIP",
          "pinyin": "cixian",
          "suoxie": "cx",
          "other": "673@cxi"
      },
      "cenxi": {
          "name": "岑溪",
          "code": "CNZ",
          "pinyin": "cenxi",
          "suoxie": "cx",
          "other": "674@cxi"
      },
      "chenxi": {
          "name": "辰溪",
          "code": "CXQ",
          "pinyin": "chenxi",
          "suoxie": "cx",
          "other": "675@cxi"
      },
      "cixi": {
          "name": "磁西",
          "code": "CRP",
          "pinyin": "cixi",
          "suoxie": "cx",
          "other": "676@cxn"
      },
      "changxingnan": {
          "name": "长兴南",
          "code": "CFH",
          "pinyin": "changxingnan",
          "suoxie": "cxn",
          "other": "677@cya"
      },
      "ciyao": {
          "name": "磁窑",
          "code": "CYK",
          "pinyin": "ciyao",
          "suoxie": "cy",
          "other": "678@cya"
      },
      "chunyang": {
          "name": "春阳",
          "code": "CAL",
          "pinyin": "chunyang",
          "suoxie": "cy",
          "other": "679@cya"
      },
      "chengyang": {
          "name": "城阳",
          "code": "CEK",
          "pinyin": "chengyang",
          "suoxie": "cy",
          "other": "680@cyc"
      },
      "chuangyecun": {
          "name": "创业村",
          "code": "CEX",
          "pinyin": "chuangyecun",
          "suoxie": "cyc",
          "other": "681@cyc"
      },
      "chaoyangchuan": {
          "name": "朝阳川",
          "code": "CYL",
          "pinyin": "chaoyangchuan",
          "suoxie": "cyc",
          "other": "682@cyd"
      },
      "chaoyangdi": {
          "name": "朝阳地",
          "code": "CDD",
          "pinyin": "chaoyangdi",
          "suoxie": "cyd",
          "other": "683@cyn"
      },
      "chaoyangnan": {
          "name": "朝阳南",
          "code": "CYD",
          "pinyin": "chaoyangnan",
          "suoxie": "cyn",
          "other": "684@cyu"
      },
      "changyuan": {
          "name": "长垣",
          "code": "CYF",
          "pinyin": "changyuan",
          "suoxie": "cy",
          "other": "685@cyz"
      },
      "chaoyangzhen": {
          "name": "朝阳镇",
          "code": "CZL",
          "pinyin": "chaoyangzhen",
          "suoxie": "cyz",
          "other": "686@czb"
      },
      "chuzhoubei": {
          "name": "滁州北",
          "code": "CUH",
          "pinyin": "chuzhoubei",
          "suoxie": "czb",
          "other": "687@czb"
      },
      "changzhoubei": {
          "name": "常州北",
          "code": "ESH",
          "pinyin": "changzhoubei",
          "suoxie": "czb",
          "other": "688@czh"
      },
      "chuzhou": {
          "name": "滁州",
          "code": "CXH",
          "pinyin": "chuzhou",
          "suoxie": "cz",
          "other": "689@czh"
      },
      "chaozhou": {
          "name": "潮州",
          "code": "CKQ",
          "pinyin": "chaozhou",
          "suoxie": "cz",
          "other": "690@czh"
      },
      "changzhuang": {
          "name": "常庄",
          "code": "CVK",
          "pinyin": "changzhuang",
          "suoxie": "cz",
          "other": "691@czl"
      },
      "caozili": {
          "name": "曹子里",
          "code": "CFP",
          "pinyin": "caozili",
          "suoxie": "czl",
          "other": "692@czw"
      },
      "chezhuanwan": {
          "name": "车转湾",
          "code": "CWM",
          "pinyin": "chezhuanwan",
          "suoxie": "czw",
          "other": "693@czx"
      },
      "chenzhouxi": {
          "name": "郴州西",
          "code": "ICQ",
          "pinyin": "chenzhouxi",
          "suoxie": "czx",
          "other": "694@czx"
      },
      "cangzhouxi": {
          "name": "沧州西",
          "code": "CBP",
          "pinyin": "cangzhouxi",
          "suoxie": "czx",
          "other": "695@dan"
      },
      "dean": {
          "name": "德安",
          "code": "DAG",
          "pinyin": "dean",
          "suoxie": "da",
          "other": "696@dan"
      },
      "daan": {
          "name": "大安",
          "code": "RAT",
          "pinyin": "daan",
          "suoxie": "da",
          "other": "697@dba"
      },
      "daba": [
          {
              "name": "大坝",
              "code": "DBJ",
              "pinyin": "daba",
              "suoxie": "db",
              "other": "698@dba"
          },
          {
              "name": "大巴",
              "code": "DBD",
              "pinyin": "daba",
              "suoxie": "db",
              "other": "700@dba"
          }
      ],
      "daban": {
          "name": "大板",
          "code": "DBC",
          "pinyin": "daban",
          "suoxie": "db",
          "other": "699@dba"
      },
      "daobao": {
          "name": "到保",
          "code": "RBT",
          "pinyin": "daobao",
          "suoxie": "db",
          "other": "701@dbi"
      },
      "dingbian": {
          "name": "定边",
          "code": "DYJ",
          "pinyin": "dingbian",
          "suoxie": "db",
          "other": "702@dbj"
      },
      "dongbianjing": {
          "name": "东边井",
          "code": "DBB",
          "pinyin": "dongbianjing",
          "suoxie": "dbj",
          "other": "703@dbs"
      },
      "debosi": {
          "name": "德伯斯",
          "code": "RDT",
          "pinyin": "debosi",
          "suoxie": "dbs",
          "other": "704@dcg"
      },
      "dachaigou": {
          "name": "打柴沟",
          "code": "DGJ",
          "pinyin": "dachaigou",
          "suoxie": "dcg",
          "other": "705@dch"
      },
      "dechang": {
          "name": "德昌",
          "code": "DVW",
          "pinyin": "dechang",
          "suoxie": "dc",
          "other": "706@dda"
      },
      "didao": {
          "name": "滴道",
          "code": "DDB",
          "pinyin": "didao",
          "suoxie": "dd",
          "other": "707@ddg"
      },
      "dadenggou": {
          "name": "大磴沟",
          "code": "DKJ",
          "pinyin": "dadenggou",
          "suoxie": "ddg",
          "other": "708@ded"
      },
      "daoerdeng": {
          "name": "刀尔登",
          "code": "DRD",
          "pinyin": "daoerdeng",
          "suoxie": "ded",
          "other": "709@dee"
      },
      "deerbuer": {
          "name": "得耳布尔",
          "code": "DRX",
          "pinyin": "deerbuer",
          "suoxie": "debe",
          "other": "710@dfa"
      },
      "dongfang": {
          "name": "东方",
          "code": "UFQ",
          "pinyin": "dongfang",
          "suoxie": "df",
          "other": "711@dfe"
      },
      "danfeng": {
          "name": "丹凤",
          "code": "DGY",
          "pinyin": "danfeng",
          "suoxie": "df",
          "other": "712@dfe"
      },
      "dongfeng": {
          "name": "东丰",
          "code": "DIL",
          "pinyin": "dongfeng",
          "suoxie": "df",
          "other": "713@dge"
      },
      "duge": {
          "name": "都格",
          "code": "DMM",
          "pinyin": "duge",
          "suoxie": "dg",
          "other": "714@dgt"
      },
      "daguantun": {
          "name": "大官屯",
          "code": "DTT",
          "pinyin": "daguantun",
          "suoxie": "dgt",
          "other": "715@dgu"
      },
      "daguan": {
          "name": "大关",
          "code": "RGW",
          "pinyin": "daguan",
          "suoxie": "dg",
          "other": "716@dgu"
      },
      "dongguang": {
          "name": "东光",
          "code": "DGP",
          "pinyin": "dongguang",
          "suoxie": "dg",
          "other": "717@dha"
      },
      "donghai": {
          "name": "东海",
          "code": "DHB",
          "pinyin": "donghai",
          "suoxie": "dh",
          "other": "718@dhc"
      },
      "dahuichang": {
          "name": "大灰厂",
          "code": "DHP",
          "pinyin": "dahuichang",
          "suoxie": "dhc",
          "other": "719@dhq"
      },
      "dahongqi": {
          "name": "大红旗",
          "code": "DQD",
          "pinyin": "dahongqi",
          "suoxie": "dhq",
          "other": "720@dht"
      },
      "shaodong": [
          {
              "name": "大禾塘",
              "code": "SOQ",
              "pinyin": "shaodong",
              "suoxie": "dh",
              "other": "721@dhx"
          },
          {
              "name": "邵东",
              "code": "FIQ",
              "pinyin": "shaodong",
              "suoxie": "sd",
              "other": "2512@sdx"
          }
      ],
      "donghaixian": {
          "name": "东海县",
          "code": "DQH",
          "pinyin": "donghaixian",
          "suoxie": "dhx",
          "other": "722@dhx"
      },
      "dehuixi": {
          "name": "德惠西",
          "code": "DXT",
          "pinyin": "dehuixi",
          "suoxie": "dhx",
          "other": "723@djg"
      },
      "dajiagou": {
          "name": "达家沟",
          "code": "DJT",
          "pinyin": "dajiagou",
          "suoxie": "djg",
          "other": "724@dji"
      },
      "dongjin": {
          "name": "东津",
          "code": "DKB",
          "pinyin": "dongjin",
          "suoxie": "dj",
          "other": "725@dji"
      },
      "dujia": {
          "name": "杜家",
          "code": "DJL",
          "pinyin": "dujia",
          "suoxie": "dj",
          "other": "726@dkt"
      },
      "dakoutun": {
          "name": "大口屯",
          "code": "DKP",
          "pinyin": "dakoutun",
          "suoxie": "dkt",
          "other": "727@dla"
      },
      "donglai": {
          "name": "东来",
          "code": "RVD",
          "pinyin": "donglai",
          "suoxie": "dl",
          "other": "728@dlh"
      },
      "delingha": {
          "name": "德令哈",
          "code": "DHO",
          "pinyin": "delingha",
          "suoxie": "dlh",
          "other": "729@dlh"
      },
      "daluhao": {
          "name": "大陆号",
          "code": "DLC",
          "pinyin": "daluhao",
          "suoxie": "dlh",
          "other": "730@dli"
      },
      "dailing": {
          "name": "带岭",
          "code": "DLB",
          "pinyin": "dailing",
          "suoxie": "dl",
          "other": "731@dli"
      },
      "dalin": {
          "name": "大林",
          "code": "DLD",
          "pinyin": "dalin",
          "suoxie": "dl",
          "other": "732@dlq"
      },
      "dalateqi": {
          "name": "达拉特旗",
          "code": "DIC",
          "pinyin": "dalateqi",
          "suoxie": "dltq",
          "other": "733@dlt"
      },
      "dulitun": {
          "name": "独立屯",
          "code": "DTX",
          "pinyin": "dulitun",
          "suoxie": "dlt",
          "other": "734@dlu"
      },
      "douluo": {
          "name": "豆罗",
          "code": "DLV",
          "pinyin": "douluo",
          "suoxie": "dl",
          "other": "735@dlx"
      },
      "dalatexi": {
          "name": "达拉特西",
          "code": "DNC",
          "pinyin": "dalatexi",
          "suoxie": "dltx",
          "other": "736@dlx"
      },
      "dalianxi": {
          "name": "大连西",
          "code": "GZT",
          "pinyin": "dalianxi",
          "suoxie": "dlx",
          "other": "737@dmc"
      },
      "dongmingcun": {
          "name": "东明村",
          "code": "DMD",
          "pinyin": "dongmingcun",
          "suoxie": "dmc",
          "other": "738@dmh"
      },
      "dongmiaohe": {
          "name": "洞庙河",
          "code": "DEP",
          "pinyin": "dongmiaohe",
          "suoxie": "dmh",
          "other": "739@dmx"
      },
      "dongmingxian": {
          "name": "东明县",
          "code": "DNF",
          "pinyin": "dongmingxian",
          "suoxie": "dmx",
          "other": "740@dni"
      },
      "dani": {
          "name": "大拟",
          "code": "DNZ",
          "pinyin": "dani",
          "suoxie": "dn",
          "other": "741@dpf"
      },
      "dapingfang": {
          "name": "大平房",
          "code": "DPD",
          "pinyin": "dapingfang",
          "suoxie": "dpf",
          "other": "742@dps"
      },
      "dapanshi": {
          "name": "大盘石",
          "code": "RPP",
          "pinyin": "dapanshi",
          "suoxie": "dps",
          "other": "743@dpu"
      },
      "dapu": [
          {
              "name": "大埔",
              "code": "DPI",
              "pinyin": "dapu",
              "suoxie": "dp",
              "other": "744@dpu"
          },
          {
              "name": "大堡",
              "code": "DVT",
              "pinyin": "dapu",
              "suoxie": "dp",
              "other": "745@dqd"
          }
      ],
      "daqilaha": {
          "name": "大其拉哈",
          "code": "DQX",
          "pinyin": "daqilaha",
          "suoxie": "dqlh",
          "other": "747@dqi"
      },
      "daoqing": {
          "name": "道清",
          "code": "DML",
          "pinyin": "daoqing",
          "suoxie": "dq",
          "other": "748@dqs"
      },
      "duiqingshan": {
          "name": "对青山",
          "code": "DQB",
          "pinyin": "duiqingshan",
          "suoxie": "dqs",
          "other": "749@dqx"
      },
      "deqingxi": {
          "name": "德清西",
          "code": "MOH",
          "pinyin": "deqingxi",
          "suoxie": "dqx",
          "other": "750@dqx"
      },
      "daqingxi": {
          "name": "大庆西",
          "code": "RHX",
          "pinyin": "daqingxi",
          "suoxie": "dqx",
          "other": "751@dsh"
      },
      "dangshan": {
          "name": "砀山",
          "code": "DKH",
          "pinyin": "dangshan",
          "suoxie": "ds",
          "other": "753@dsh"
      },
      "dushan": {
          "name": "独山",
          "code": "RWW",
          "pinyin": "dushan",
          "suoxie": "ds",
          "other": "754@dsh"
      },
      "dengshahe": {
          "name": "登沙河",
          "code": "DWT",
          "pinyin": "dengshahe",
          "suoxie": "dsh",
          "other": "755@dsp"
      },
      "dushupu": {
          "name": "读书铺",
          "code": "DPM",
          "pinyin": "dushupu",
          "suoxie": "dsp",
          "other": "756@dst"
      },
      "dashitou": {
          "name": "大石头",
          "code": "DSL",
          "pinyin": "dashitou",
          "suoxie": "dst",
          "other": "757@dsx"
      },
      "dongshengxi": {
          "name": "东胜西",
          "code": "DYC",
          "pinyin": "dongshengxi",
          "suoxie": "dsx",
          "other": "758@dsz"
      },
      "dashizhai": {
          "name": "大石寨",
          "code": "RZT",
          "pinyin": "dashizhai",
          "suoxie": "dsz",
          "other": "759@dta"
      },
      "dongtai": {
          "name": "东台",
          "code": "DBH",
          "pinyin": "dongtai",
          "suoxie": "dt",
          "other": "760@dta"
      },
      "dingtao": {
          "name": "定陶",
          "code": "DQK",
          "pinyin": "dingtao",
          "suoxie": "dt",
          "other": "761@dta"
      },
      "dengta": {
          "name": "灯塔",
          "code": "DGT",
          "pinyin": "dengta",
          "suoxie": "dt",
          "other": "762@dtb"
      },
      "datianbian": {
          "name": "大田边",
          "code": "DBM",
          "pinyin": "datianbian",
          "suoxie": "dtb",
          "other": "763@dth"
      },
      "dongtonghua": {
          "name": "东通化",
          "code": "DTL",
          "pinyin": "dongtonghua",
          "suoxie": "dth",
          "other": "764@dtu"
      },
      "dantu": {
          "name": "丹徒",
          "code": "RUH",
          "pinyin": "dantu",
          "suoxie": "dt",
          "other": "765@dtu"
      },
      "datun": {
          "name": "大屯",
          "code": "DNT",
          "pinyin": "datun",
          "suoxie": "dt",
          "other": "766@dwa"
      },
      "dongwan": {
          "name": "东湾",
          "code": "DRJ",
          "pinyin": "dongwan",
          "suoxie": "dw",
          "other": "767@dwk"
      },
      "dawukou": {
          "name": "大武口",
          "code": "DFJ",
          "pinyin": "dawukou",
          "suoxie": "dwk",
          "other": "768@dwp"
      },
      "diwopu": {
          "name": "低窝铺",
          "code": "DWJ",
          "pinyin": "diwopu",
          "suoxie": "dwp",
          "other": "769@dwt"
      },
      "dawangtan": {
          "name": "大王滩",
          "code": "DZZ",
          "pinyin": "dawangtan",
          "suoxie": "dwt",
          "other": "770@dwz"
      },
      "dawanzi": {
          "name": "大湾子",
          "code": "DFM",
          "pinyin": "dawanzi",
          "suoxie": "dwz",
          "other": "771@dxg"
      },
      "daxinggou": {
          "name": "大兴沟",
          "code": "DXL",
          "pinyin": "daxinggou",
          "suoxie": "dxg",
          "other": "772@dxi"
      },
      "daxing": {
          "name": "大兴",
          "code": "DXX",
          "pinyin": "daxing",
          "suoxie": "dx",
          "other": "773@dxi"
      },
      "dingxi": {
          "name": "定西",
          "code": "DSJ",
          "pinyin": "dingxi",
          "suoxie": "dx",
          "other": "774@dxi"
      },
      "dianxin": {
          "name": "甸心",
          "code": "DXM",
          "pinyin": "dianxin",
          "suoxie": "dx",
          "other": "775@dxi"
      },
      "dongxiang": {
          "name": "东乡",
          "code": "DXG",
          "pinyin": "dongxiang",
          "suoxie": "dx",
          "other": "776@dxi"
      },
      "daixian": {
          "name": "代县",
          "code": "DKV",
          "pinyin": "daixian",
          "suoxie": "dx",
          "other": "777@dxi"
      },
      "dingxiang": {
          "name": "定襄",
          "code": "DXV",
          "pinyin": "dingxiang",
          "suoxie": "dx",
          "other": "778@dxu"
      },
      "dongxu": {
          "name": "东戌",
          "code": "RXP",
          "pinyin": "dongxu",
          "suoxie": "dx",
          "other": "779@dxz"
      },
      "dongxinzhuang": {
          "name": "东辛庄",
          "code": "DXD",
          "pinyin": "dongxinzhuang",
          "suoxie": "dxz",
          "other": "780@dya"
      },
      "danyang": {
          "name": "丹阳",
          "code": "DYH",
          "pinyin": "danyang",
          "suoxie": "dy",
          "other": "781@dya"
      },
      "deyang": {
          "name": "德阳",
          "code": "DYW",
          "pinyin": "deyang",
          "suoxie": "dy",
          "other": "782@dya"
      },
      "dayan": {
          "name": "大雁",
          "code": "DYX",
          "pinyin": "dayan",
          "suoxie": "dy",
          "other": "783@dya"
      },
      "dangyang": {
          "name": "当阳",
          "code": "DYN",
          "pinyin": "dangyang",
          "suoxie": "dy",
          "other": "784@dyb"
      },
      "danyangbei": {
          "name": "丹阳北",
          "code": "EXH",
          "pinyin": "danyangbei",
          "suoxie": "dyb",
          "other": "785@dyd"
      },
      "dayingdong": {
          "name": "大英东",
          "code": "IAW",
          "pinyin": "dayingdong",
          "suoxie": "dyd",
          "other": "786@dyd"
      },
      "dongyudi": {
          "name": "东淤地",
          "code": "DBV",
          "pinyin": "dongyudi",
          "suoxie": "dyd",
          "other": "787@dyi"
      },
      "daying": {
          "name": "大营",
          "code": "DYV",
          "pinyin": "daying",
          "suoxie": "dy",
          "other": "788@dyu"
      },
      "dingyuan": {
          "name": "定远",
          "code": "EWH",
          "pinyin": "dingyuan",
          "suoxie": "dy",
          "other": "789@dyu"
      },
      "daiyue": {
          "name": "岱岳",
          "code": "RYV",
          "pinyin": "daiyue",
          "suoxie": "dy",
          "other": "790@dyu"
      },
      "dayuan": {
          "name": "大元",
          "code": "DYZ",
          "pinyin": "dayuan",
          "suoxie": "dy",
          "other": "791@dyz"
      },
      "dayingzhen": {
          "name": "大营镇",
          "code": "DJP",
          "pinyin": "dayingzhen",
          "suoxie": "dyz",
          "other": "792@dyz"
      },
      "dayingzi": {
          "name": "大营子",
          "code": "DZD",
          "pinyin": "dayingzi",
          "suoxie": "dyz",
          "other": "793@dzc"
      },
      "dazhanchang": {
          "name": "大战场",
          "code": "DTJ",
          "pinyin": "dazhanchang",
          "suoxie": "dzc",
          "other": "794@dzd"
      },
      "dezhoudong": {
          "name": "德州东",
          "code": "DIP",
          "pinyin": "dezhoudong",
          "suoxie": "dzd",
          "other": "795@dzh"
      },
      "dongzhi": {
          "name": "东至",
          "code": "DCH",
          "pinyin": "dongzhi",
          "suoxie": "dz",
          "other": "796@dzh"
      },
      "dizhuang": {
          "name": "低庄",
          "code": "DVQ",
          "pinyin": "dizhuang",
          "suoxie": "dz",
          "other": "797@dzh"
      },
      "dongzhen": {
          "name": "东镇",
          "code": "DNV",
          "pinyin": "dongzhen",
          "suoxie": "dz",
          "other": "798@dzh"
      },
      "daozhou": {
          "name": "道州",
          "code": "DFZ",
          "pinyin": "daozhou",
          "suoxie": "dz",
          "other": "799@dzh"
      },
      "dongzhuang": {
          "name": "东庄",
          "code": "DZV",
          "pinyin": "dongzhuang",
          "suoxie": "dz",
          "other": "800@dzh"
      },
      "duizhen": {
          "name": "兑镇",
          "code": "DWV",
          "pinyin": "duizhen",
          "suoxie": "dz",
          "other": "801@dzh"
      },
      "douzhuang": {
          "name": "豆庄",
          "code": "ROP",
          "pinyin": "douzhuang",
          "suoxie": "dz",
          "other": "802@dzh"
      },
      "dingzhou": {
          "name": "定州",
          "code": "DXP",
          "pinyin": "dingzhou",
          "suoxie": "dz",
          "other": "803@dzy"
      },
      "dazhuyuan": {
          "name": "大竹园",
          "code": "DZY",
          "pinyin": "dazhuyuan",
          "suoxie": "dzy",
          "other": "804@dzz"
      },
      "dazhangzi": {
          "name": "大杖子",
          "code": "DAP",
          "pinyin": "dazhangzi",
          "suoxie": "dzz",
          "other": "805@dzz"
      },
      "douzhangzhuang": {
          "name": "豆张庄",
          "code": "RZP",
          "pinyin": "douzhangzhuang",
          "suoxie": "dzz",
          "other": "806@ebi"
      },
      "ebian": {
          "name": "峨边",
          "code": "EBW",
          "pinyin": "ebian",
          "suoxie": "eb",
          "other": "807@edm"
      },
      "erdaogoumen": {
          "name": "二道沟门",
          "code": "RDP",
          "pinyin": "erdaogoumen",
          "suoxie": "edgm",
          "other": "808@edw"
      },
      "erdaowan": {
          "name": "二道湾",
          "code": "RDX",
          "pinyin": "erdaowan",
          "suoxie": "edw",
          "other": "809@ees"
      },
      "eerduosi": {
          "name": "鄂尔多斯",
          "code": "EEC",
          "pinyin": "eerduosi",
          "suoxie": "eeds",
          "other": "810@elo"
      },
      "erlong": {
          "name": "二龙",
          "code": "RLD",
          "pinyin": "erlong",
          "suoxie": "el",
          "other": "811@elt"
      },
      "erlongshantun": {
          "name": "二龙山屯",
          "code": "ELA",
          "pinyin": "erlongshantun",
          "suoxie": "elst",
          "other": "812@eme"
      },
      "emei": {
          "name": "峨眉",
          "code": "EMW",
          "pinyin": "emei",
          "suoxie": "em",
          "other": "813@emh"
      },
      "ermihe": {
          "name": "二密河",
          "code": "RML",
          "pinyin": "ermihe",
          "suoxie": "emh",
          "other": "814@eyi"
      },
      "erying": {
          "name": "二营",
          "code": "RYJ",
          "pinyin": "erying",
          "suoxie": "ey",
          "other": "815@ezh"
      },
      "ezhou": {
          "name": "鄂州",
          "code": "ECN",
          "pinyin": "ezhou",
          "suoxie": "ez",
          "other": "816@fan"
      },
      "fuan": {
          "name": "福安",
          "code": "FAS",
          "pinyin": "fuan",
          "suoxie": "fa",
          "other": "817@fch"
      },
      "fengcheng": {
          "name": "丰城",
          "code": "FCG",
          "pinyin": "fengcheng",
          "suoxie": "fc",
          "other": "818@fcn"
      },
      "fengchengnan": {
          "name": "丰城南",
          "code": "FNG",
          "pinyin": "fengchengnan",
          "suoxie": "fcn",
          "other": "819@fdo"
      },
      "feidong": {
          "name": "肥东",
          "code": "FIH",
          "pinyin": "feidong",
          "suoxie": "fd",
          "other": "820@fer"
      },
      "faer": {
          "name": "发耳",
          "code": "FEM",
          "pinyin": "faer",
          "suoxie": "fe",
          "other": "821@fha"
      },
      "fuhai": [
          {
              "name": "富海",
              "code": "FHX",
              "pinyin": "fuhai",
              "suoxie": "fh",
              "other": "822@fha"
          },
          {
              "name": "福海",
              "code": "FHR",
              "pinyin": "fuhai",
              "suoxie": "fh",
              "other": "823@fhc"
          }
      ],
      "fenghuangcheng": {
          "name": "凤凰城",
          "code": "FHT",
          "pinyin": "fenghuangcheng",
          "suoxie": "fhc",
          "other": "824@fhe"
      },
      "fenhe": {
          "name": "汾河",
          "code": "FEV",
          "pinyin": "fenhe",
          "suoxie": "fh",
          "other": "825@fhu"
      },
      "fenghua": {
          "name": "奉化",
          "code": "FHH",
          "pinyin": "fenghua",
          "suoxie": "fh",
          "other": "826@fji"
      },
      "fujin": {
          "name": "富锦",
          "code": "FIB",
          "pinyin": "fujin",
          "suoxie": "fj",
          "other": "827@fjt"
      },
      "fanjiatun": {
          "name": "范家屯",
          "code": "FTT",
          "pinyin": "fanjiatun",
          "suoxie": "fjt",
          "other": "828@flq"
      },
      "fuliqu": {
          "name": "福利区",
          "code": "FLJ",
          "pinyin": "fuliqu",
          "suoxie": "flq",
          "other": "829@flt"
      },
      "fulitun": {
          "name": "福利屯",
          "code": "FTB",
          "pinyin": "fulitun",
          "suoxie": "flt",
          "other": "830@flz"
      },
      "fenglezhen": {
          "name": "丰乐镇",
          "code": "FZB",
          "pinyin": "fenglezhen",
          "suoxie": "flz",
          "other": "831@fna"
      },
      "funan": {
          "name": "阜南",
          "code": "FNH",
          "pinyin": "funan",
          "suoxie": "fn",
          "other": "832@fni"
      },
      "funing": [
          {
              "name": "阜宁",
              "code": "AKH",
              "pinyin": "funing",
              "suoxie": "fn",
              "other": "833@fni"
          },
          {
              "name": "抚宁",
              "code": "FNP",
              "pinyin": "funing",
              "suoxie": "fn",
              "other": "834@fqi"
          },
          {
              "name": "富宁",
              "code": "FNM",
              "pinyin": "funing",
              "suoxie": "fn",
              "other": "2228@fpi"
          }
      ],
      "fuqing": {
          "name": "福清",
          "code": "FQS",
          "pinyin": "fuqing",
          "suoxie": "fq",
          "other": "835@fqu"
      },
      "fuquan": {
          "name": "福泉",
          "code": "VMW",
          "pinyin": "fuquan",
          "suoxie": "fq",
          "other": "836@fsc"
      },
      "fengshuicun": {
          "name": "丰水村",
          "code": "FSJ",
          "pinyin": "fengshuicun",
          "suoxie": "fsc",
          "other": "837@fsh"
      },
      "fengshun": {
          "name": "丰顺",
          "code": "FUQ",
          "pinyin": "fengshun",
          "suoxie": "fs",
          "other": "838@fsh"
      },
      "fanshi": {
          "name": "繁峙",
          "code": "FSV",
          "pinyin": "fanshi",
          "suoxie": "fs",
          "other": "839@fsh"
      },
      "fushun": {
          "name": "抚顺",
          "code": "FST",
          "pinyin": "fushun",
          "suoxie": "fs",
          "other": "840@fsk"
      },
      "fushankou": {
          "name": "福山口",
          "code": "FKP",
          "pinyin": "fushankou",
          "suoxie": "fsk",
          "other": "841@fsu"
      },
      "fusui": {
          "name": "扶绥",
          "code": "FSZ",
          "pinyin": "fusui",
          "suoxie": "fs",
          "other": "842@ftu"
      },
      "fengtun": {
          "name": "冯屯",
          "code": "FTX",
          "pinyin": "fengtun",
          "suoxie": "ft",
          "other": "843@fty"
      },
      "futuyu": {
          "name": "浮图峪",
          "code": "FYP",
          "pinyin": "futuyu",
          "suoxie": "fty",
          "other": "844@fxd"
      },
      "fuxiandong": {
          "name": "富县东",
          "code": "FDY",
          "pinyin": "fuxiandong",
          "suoxie": "fxd",
          "other": "845@fxi"
      },
      "fengxian": {
          "name": "凤县",
          "code": "FXY",
          "pinyin": "fengxian",
          "suoxie": "fx",
          "other": "846@fxi"
      },
      "fuxian": {
          "name": "富县",
          "code": "FEY",
          "pinyin": "fuxian",
          "suoxie": "fx",
          "other": "847@fxi"
      },
      "feixian": {
          "name": "费县",
          "code": "FXK",
          "pinyin": "feixian",
          "suoxie": "fx",
          "other": "848@fya"
      },
      "fengyang": {
          "name": "凤阳",
          "code": "FUH",
          "pinyin": "fengyang",
          "suoxie": "fy",
          "other": "849@fya"
      },
      "fenyang": {
          "name": "汾阳",
          "code": "FAV",
          "pinyin": "fenyang",
          "suoxie": "fy",
          "other": "850@fyb"
      },
      "fuyubei": {
          "name": "扶余北",
          "code": "FBT",
          "pinyin": "fuyubei",
          "suoxie": "fyb",
          "other": "851@fyi"
      },
      "fenyi": {
          "name": "分宜",
          "code": "FYG",
          "pinyin": "fenyi",
          "suoxie": "fy",
          "other": "852@fyu"
      },
      "fuyuan": [
          {
              "name": "富源",
              "code": "FYM",
              "pinyin": "fuyuan",
              "suoxie": "fy",
              "other": "853@fyu"
          },
          {
              "name": "抚远",
              "code": "FYB",
              "pinyin": "fuyuan",
              "suoxie": "fy",
              "other": "2238@fzd"
          }
      ],
      "fuyu": [
          {
              "name": "扶余",
              "code": "FYT",
              "pinyin": "fuyu",
              "suoxie": "fy",
              "other": "854@fyu"
          },
          {
              "name": "富裕",
              "code": "FYX",
              "pinyin": "fuyu",
              "suoxie": "fy",
              "other": "855@fzb"
          }
      ],
      "fuzhoubei": {
          "name": "抚州北",
          "code": "FBG",
          "pinyin": "fuzhoubei",
          "suoxie": "fzb",
          "other": "856@fzh"
      },
      "fengzhou": {
          "name": "凤州",
          "code": "FZY",
          "pinyin": "fengzhou",
          "suoxie": "fz",
          "other": "857@fzh"
      },
      "fengzhen": {
          "name": "丰镇",
          "code": "FZC",
          "pinyin": "fengzhen",
          "suoxie": "fz",
          "other": "858@fzh"
      },
      "fanzhen": {
          "name": "范镇",
          "code": "VZK",
          "pinyin": "fanzhen",
          "suoxie": "fz",
          "other": "859@gan"
      },
      "guan": {
          "name": "固安",
          "code": "GFP",
          "pinyin": "guan",
          "suoxie": "ga",
          "other": "860@gan"
      },
      "guangan": {
          "name": "广安",
          "code": "VJW",
          "pinyin": "guangan",
          "suoxie": "ga",
          "other": "861@gbd"
      },
      "gaobeidian": {
          "name": "高碑店",
          "code": "GBP",
          "pinyin": "gaobeidian",
          "suoxie": "gbd",
          "other": "862@gbz"
      },
      "goubangzi": {
          "name": "沟帮子",
          "code": "GBD",
          "pinyin": "goubangzi",
          "suoxie": "gbz",
          "other": "863@gcd"
      },
      "gancaodian": {
          "name": "甘草店",
          "code": "GDJ",
          "pinyin": "gancaodian",
          "suoxie": "gcd",
          "other": "864@gch"
      },
      "gucheng": {
          "name": "谷城",
          "code": "GCN",
          "pinyin": "gucheng",
          "suoxie": "gc",
          "other": "865@gch"
      },
      "gaocheng": {
          "name": "藁城",
          "code": "GEP",
          "pinyin": "gaocheng",
          "suoxie": "gc",
          "other": "866@gcu"
      },
      "gaocun": {
          "name": "高村",
          "code": "GCV",
          "pinyin": "gaocun",
          "suoxie": "gc",
          "other": "867@gcz"
      },
      "guchengzhen": {
          "name": "古城镇",
          "code": "GZB",
          "pinyin": "guchengzhen",
          "suoxie": "gcz",
          "other": "868@gde"
      },
      "guangde": {
          "name": "广德",
          "code": "GRH",
          "pinyin": "guangde",
          "suoxie": "gd",
          "other": "869@gdi"
      },
      "guiding": {
          "name": "贵定",
          "code": "GTW",
          "pinyin": "guiding",
          "suoxie": "gd",
          "other": "870@gdn"
      },
      "guidingnan": {
          "name": "贵定南",
          "code": "IDW",
          "pinyin": "guidingnan",
          "suoxie": "gdn",
          "other": "871@gdo"
      },
      "gudong": {
          "name": "古东",
          "code": "GDV",
          "pinyin": "gudong",
          "suoxie": "gd",
          "other": "872@gga"
      },
      "guigang": {
          "name": "贵港",
          "code": "GGZ",
          "pinyin": "guigang",
          "suoxie": "gg",
          "other": "873@gga"
      },
      "guangao": {
          "name": "官高",
          "code": "GVP",
          "pinyin": "guangao",
          "suoxie": "gg",
          "other": "874@ggm"
      },
      "gegenmiao": {
          "name": "葛根庙",
          "code": "GGT",
          "pinyin": "gegenmiao",
          "suoxie": "ggm",
          "other": "875@ggo"
      },
      "gangou": {
          "name": "干沟",
          "code": "GGL",
          "pinyin": "gangou",
          "suoxie": "gg",
          "other": "876@ggu"
      },
      "gangu": {
          "name": "甘谷",
          "code": "GGJ",
          "pinyin": "gangu",
          "suoxie": "gg",
          "other": "877@ggz"
      },
      "gaogezhuang": {
          "name": "高各庄",
          "code": "GGP",
          "pinyin": "gaogezhuang",
          "suoxie": "ggz",
          "other": "878@ghe"
      },
      "ganhe": {
          "name": "甘河",
          "code": "GAX",
          "pinyin": "ganhe",
          "suoxie": "gh",
          "other": "879@ghe"
      },
      "genhe": {
          "name": "根河",
          "code": "GEX",
          "pinyin": "genhe",
          "suoxie": "gh",
          "other": "880@gjd"
      },
      "guojiadian": {
          "name": "郭家店",
          "code": "GDT",
          "pinyin": "guojiadian",
          "suoxie": "gjd",
          "other": "881@gjz"
      },
      "gujiazi": {
          "name": "孤家子",
          "code": "GKT",
          "pinyin": "gujiazi",
          "suoxie": "gjz",
          "other": "882@gla"
      },
      "gulang": {
          "name": "古浪",
          "code": "GLJ",
          "pinyin": "gulang",
          "suoxie": "gl",
          "other": "883@gla"
      },
      "gaolan": {
          "name": "皋兰",
          "code": "GEJ",
          "pinyin": "gaolan",
          "suoxie": "gl",
          "other": "884@glf"
      },
      "gaoloufang": {
          "name": "高楼房",
          "code": "GFM",
          "pinyin": "gaoloufang",
          "suoxie": "glf",
          "other": "885@glh"
      },
      "guiliuhe": {
          "name": "归流河",
          "code": "GHT",
          "pinyin": "guiliuhe",
          "suoxie": "glh",
          "other": "886@gli"
      },
      "guanlin": {
          "name": "关林",
          "code": "GLF",
          "pinyin": "guanlin",
          "suoxie": "gl",
          "other": "887@glu"
      },
      "ganluo": {
          "name": "甘洛",
          "code": "VOW",
          "pinyin": "ganluo",
          "suoxie": "gl",
          "other": "888@glz"
      },
      "guoleizhuang": {
          "name": "郭磊庄",
          "code": "GLP",
          "pinyin": "guoleizhuang",
          "suoxie": "glz",
          "other": "889@gmi"
      },
      "gaomi": {
          "name": "高密",
          "code": "GMK",
          "pinyin": "gaomi",
          "suoxie": "gm",
          "other": "890@gmz"
      },
      "gongmiaozi": {
          "name": "公庙子",
          "code": "GMC",
          "pinyin": "gongmiaozi",
          "suoxie": "gmz",
          "other": "891@gnh"
      },
      "gongnonghu": {
          "name": "工农湖",
          "code": "GRT",
          "pinyin": "gongnonghu",
          "suoxie": "gnh",
          "other": "892@gnn"
      },
      "guangningsinan": {
          "name": "广宁寺南",
          "code": "GNT",
          "pinyin": "guangningsinan",
          "suoxie": "gnn",
          "other": "893@gnw"
      },
      "guangnanwei": {
          "name": "广南卫",
          "code": "GNM",
          "pinyin": "guangnanwei",
          "suoxie": "gnw",
          "other": "894@gpi"
      },
      "gaoping": {
          "name": "高平",
          "code": "GPF",
          "pinyin": "gaoping",
          "suoxie": "gp",
          "other": "895@gqb"
      },
      "ganquanbei": {
          "name": "甘泉北",
          "code": "GEY",
          "pinyin": "ganquanbei",
          "suoxie": "gqb",
          "other": "896@gqc"
      },
      "gongqingcheng": {
          "name": "共青城",
          "code": "GAG",
          "pinyin": "gongqingcheng",
          "suoxie": "gqc",
          "other": "897@gqk"
      },
      "ganqika": {
          "name": "甘旗卡",
          "code": "GQD",
          "pinyin": "ganqika",
          "suoxie": "gqk",
          "other": "898@gqu"
      },
      "ganquan": {
          "name": "甘泉",
          "code": "GQY",
          "pinyin": "ganquan",
          "suoxie": "gq",
          "other": "899@gqz"
      },
      "gaoqiaozhen": {
          "name": "高桥镇",
          "code": "GZD",
          "pinyin": "gaoqiaozhen",
          "suoxie": "gqz",
          "other": "900@gsh"
      },
      "guanshui": {
          "name": "灌水",
          "code": "GST",
          "pinyin": "guanshui",
          "suoxie": "gs",
          "other": "901@gsh"
      },
      "ganshui": {
          "name": "赶水",
          "code": "GSW",
          "pinyin": "ganshui",
          "suoxie": "gs",
          "other": "902@gsk"
      },
      "gushankou": {
          "name": "孤山口",
          "code": "GSP",
          "pinyin": "gushankou",
          "suoxie": "gsk",
          "other": "903@gso"
      },
      "guosong": {
          "name": "果松",
          "code": "GSL",
          "pinyin": "guosong",
          "suoxie": "gs",
          "other": "904@gsz"
      },
      "gaoshanzi": {
          "name": "高山子",
          "code": "GSD",
          "pinyin": "gaoshanzi",
          "suoxie": "gsz",
          "other": "905@gsz"
      },
      "gashidianzi": {
          "name": "嘎什甸子",
          "code": "GXD",
          "pinyin": "gashidianzi",
          "suoxie": "gsdz",
          "other": "906@gta"
      },
      "gaotai": {
          "name": "高台",
          "code": "GTJ",
          "pinyin": "gaotai",
          "suoxie": "gt",
          "other": "907@gta"
      },
      "gaotan": {
          "name": "高滩",
          "code": "GAY",
          "pinyin": "gaotan",
          "suoxie": "gt",
          "other": "908@gti"
      },
      "gutian": {
          "name": "古田",
          "code": "GTS",
          "pinyin": "gutian",
          "suoxie": "gt",
          "other": "909@gti"
      },
      "guanting": {
          "name": "官厅",
          "code": "GTP",
          "pinyin": "guanting",
          "suoxie": "gt",
          "other": "910@gtx"
      },
      "guantingxi": {
          "name": "官厅西",
          "code": "KEP",
          "pinyin": "guantingxi",
          "suoxie": "gtx",
          "other": "911@gxi"
      },
      "guixi": {
          "name": "贵溪",
          "code": "GXG",
          "pinyin": "guixi",
          "suoxie": "gx",
          "other": "912@gya"
      },
      "guoyang": {
          "name": "涡阳",
          "code": "GYH",
          "pinyin": "guoyang",
          "suoxie": "gy",
          "other": "913@gyi"
      },
      "gongyi": {
          "name": "巩义",
          "code": "GXF",
          "pinyin": "gongyi",
          "suoxie": "gy",
          "other": "914@gyi"
      },
      "gaoyi": {
          "name": "高邑",
          "code": "GIP",
          "pinyin": "gaoyi",
          "suoxie": "gy",
          "other": "915@gyn"
      },
      "gongyinan": {
          "name": "巩义南",
          "code": "GYF",
          "pinyin": "gongyinan",
          "suoxie": "gyn",
          "other": "916@gyn"
      },
      "guangyuannan": {
          "name": "广元南",
          "code": "GAW",
          "pinyin": "guangyuannan",
          "suoxie": "gyn",
          "other": "917@gyu"
      },
      "guyuan": [
          {
              "name": "固原",
              "code": "GUJ",
              "pinyin": "guyuan",
              "suoxie": "gy",
              "other": "918@gyu"
          },
          {
              "name": "菇园",
              "code": "GYL",
              "pinyin": "guyuan",
              "suoxie": "gy",
              "other": "919@gyz"
          }
      ],
      "gongyingzi": {
          "name": "公营子",
          "code": "GYD",
          "pinyin": "gongyingzi",
          "suoxie": "gyz",
          "other": "920@gze"
      },
      "guangze": {
          "name": "光泽",
          "code": "GZS",
          "pinyin": "guangze",
          "suoxie": "gz",
          "other": "921@gzh"
      },
      "guzhen": [
          {
              "name": "古镇",
              "code": "GNQ",
              "pinyin": "guzhen",
              "suoxie": "gz",
              "other": "922@gzh"
          },
          {
              "name": "固镇",
              "code": "GEH",
              "pinyin": "guzhen",
              "suoxie": "gz",
              "other": "923@gzh"
          }
      ],
      "guozhen": {
          "name": "虢镇",
          "code": "GZY",
          "pinyin": "guozhen",
          "suoxie": "gz",
          "other": "924@gzh"
      },
      "guazhou": {
          "name": "瓜州",
          "code": "GZJ",
          "pinyin": "guazhou",
          "suoxie": "gz",
          "other": "925@gzh"
      },
      "gaozhou": {
          "name": "高州",
          "code": "GSQ",
          "pinyin": "gaozhou",
          "suoxie": "gz",
          "other": "926@gzh"
      },
      "gaizhou": {
          "name": "盖州",
          "code": "GXT",
          "pinyin": "gaizhou",
          "suoxie": "gz",
          "other": "927@gzj"
      },
      "guanzijing": {
          "name": "官字井",
          "code": "GOT",
          "pinyin": "guanzijing",
          "suoxie": "gzj",
          "other": "928@gzs"
      },
      "guanzhaishan": {
          "name": "冠豸山",
          "code": "GSS",
          "pinyin": "guanzhaishan",
          "suoxie": "gzs",
          "other": "929@gzx"
      },
      "gaizhouxi": {
          "name": "盖州西",
          "code": "GAT",
          "pinyin": "gaizhouxi",
          "suoxie": "gzx",
          "other": "930@han"
      },
      "huaiannan": {
          "name": "淮安南",
          "code": "AMH",
          "pinyin": "huaiannan",
          "suoxie": "han",
          "other": "931@han"
      },
      "hongan": {
          "name": "红安",
          "code": "HWN",
          "pinyin": "hongan",
          "suoxie": "ha",
          "other": "932@hax"
      },
      "haianxian": {
          "name": "海安县",
          "code": "HIH",
          "pinyin": "haianxian",
          "suoxie": "hax",
          "other": "933@hax"
      },
      "honganxi": {
          "name": "红安西",
          "code": "VXN",
          "pinyin": "honganxi",
          "suoxie": "hax",
          "other": "934@hba"
      },
      "huangbai": {
          "name": "黄柏",
          "code": "HBL",
          "pinyin": "huangbai",
          "suoxie": "hb",
          "other": "935@hbe"
      },
      "haibei": {
          "name": "海北",
          "code": "HEB",
          "pinyin": "haibei",
          "suoxie": "hb",
          "other": "936@hbi"
      },
      "hebi": {
          "name": "鹤壁",
          "code": "HAF",
          "pinyin": "hebi",
          "suoxie": "hb",
          "other": "937@hcb"
      },
      "huichangbei": {
          "name": "会昌北",
          "code": "XEG",
          "pinyin": "huichangbei",
          "suoxie": "hcb",
          "other": "938@hch"
      },
      "huacheng": {
          "name": "华城",
          "code": "VCQ",
          "pinyin": "huacheng",
          "suoxie": "hc",
          "other": "939@hch"
      },
      "hechun": {
          "name": "河唇",
          "code": "HCZ",
          "pinyin": "hechun",
          "suoxie": "hc",
          "other": "940@hch"
      },
      "hanchuan": {
          "name": "汉川",
          "code": "HCN",
          "pinyin": "hanchuan",
          "suoxie": "hc",
          "other": "941@hch"
      },
      "haicheng": {
          "name": "海城",
          "code": "HCT",
          "pinyin": "haicheng",
          "suoxie": "hc",
          "other": "942@hch"
      },
      "hechuan": {
          "name": "合川",
          "code": "WKW",
          "pinyin": "hechuan",
          "suoxie": "hc",
          "other": "943@hct"
      },
      "heichongtan": {
          "name": "黑冲滩",
          "code": "HCJ",
          "pinyin": "heichongtan",
          "suoxie": "hct",
          "other": "944@hcu"
      },
      "huangcun": {
          "name": "黄村",
          "code": "HCP",
          "pinyin": "huangcun",
          "suoxie": "hc",
          "other": "945@hcx"
      },
      "haichengxi": {
          "name": "海城西",
          "code": "HXT",
          "pinyin": "haichengxi",
          "suoxie": "hcx",
          "other": "946@hde"
      },
      "huade": {
          "name": "化德",
          "code": "HGC",
          "pinyin": "huade",
          "suoxie": "hd",
          "other": "947@hdo"
      },
      "hongtong": {
          "name": "洪洞",
          "code": "HDV",
          "pinyin": "hongtong",
          "suoxie": "hd",
          "other": "948@hes"
      },
      "huoerguosi": {
          "name": "霍尔果斯",
          "code": "HFR",
          "pinyin": "huoerguosi",
          "suoxie": "hegs",
          "other": "949@hfe"
      },
      "hengfeng": {
          "name": "横峰",
          "code": "HFG",
          "pinyin": "hengfeng",
          "suoxie": "hf",
          "other": "950@hfw"
      },
      "hanfuwan": {
          "name": "韩府湾",
          "code": "HXJ",
          "pinyin": "hanfuwan",
          "suoxie": "hfw",
          "other": "951@hgu"
      },
      "hangu": {
          "name": "汉沽",
          "code": "HGP",
          "pinyin": "hangu",
          "suoxie": "hg",
          "other": "952@hgy"
      },
      "huangguayuan": {
          "name": "黄瓜园",
          "code": "HYM",
          "pinyin": "huangguayuan",
          "suoxie": "hgy",
          "other": "953@hgz"
      },
      "hongguangzhen": {
          "name": "红光镇",
          "code": "IGW",
          "pinyin": "hongguangzhen",
          "suoxie": "hgz",
          "other": "954@hhe"
      },
      "hunhe": {
          "name": "浑河",
          "code": "HHT",
          "pinyin": "hunhe",
          "suoxie": "hh",
          "other": "955@hhg"
      },
      "honghuagou": {
          "name": "红花沟",
          "code": "VHD",
          "pinyin": "honghuagou",
          "suoxie": "hhg",
          "other": "956@hht"
      },
      "huanghuatong": {
          "name": "黄花筒",
          "code": "HUD",
          "pinyin": "huanghuatong",
          "suoxie": "hht",
          "other": "957@hjd"
      },
      "hejiadian": {
          "name": "贺家店",
          "code": "HJJ",
          "pinyin": "hejiadian",
          "suoxie": "hjd",
          "other": "958@hji"
      },
      "hejing": {
          "name": "和静",
          "code": "HJR",
          "pinyin": "hejing",
          "suoxie": "hj",
          "other": "959@hji"
      },
      "hongjiang": {
          "name": "红江",
          "code": "HFM",
          "pinyin": "hongjiang",
          "suoxie": "hj",
          "other": "960@hji"
      },
      "heijing": {
          "name": "黑井",
          "code": "HIM",
          "pinyin": "heijing",
          "suoxie": "hj",
          "other": "961@hji"
      },
      "huojia": {
          "name": "获嘉",
          "code": "HJF",
          "pinyin": "huojia",
          "suoxie": "hj",
          "other": "962@hji"
      },
      "hejin": {
          "name": "河津",
          "code": "HJV",
          "pinyin": "hejin",
          "suoxie": "hj",
          "other": "963@hji"
      },
      "hanjiang": {
          "name": "涵江",
          "code": "HJS",
          "pinyin": "hanjiang",
          "suoxie": "hj",
          "other": "964@hji"
      },
      "huajia": {
          "name": "华家",
          "code": "HJT",
          "pinyin": "huajia",
          "suoxie": "hj",
          "other": "965@hjq"
      },
      "hangjinhouqi": {
          "name": "杭锦后旗",
          "code": "HDC",
          "pinyin": "hangjinhouqi",
          "suoxie": "hjhq",
          "other": "966@hjx"
      },
      "hejianxi": {
          "name": "河间西",
          "code": "HXP",
          "pinyin": "hejianxi",
          "suoxie": "hjx",
          "other": "967@hjz"
      },
      "huajiazhuang": {
          "name": "花家庄",
          "code": "HJM",
          "pinyin": "huajiazhuang",
          "suoxie": "hjz",
          "other": "968@hkn"
      },
      "hekounan": {
          "name": "河口南",
          "code": "HKJ",
          "pinyin": "hekounan",
          "suoxie": "hkn",
          "other": "969@hko"
      },
      "huangkou": {
          "name": "黄口",
          "code": "KOH",
          "pinyin": "huangkou",
          "suoxie": "hk",
          "other": "970@hko"
      },
      "hukou": {
          "name": "湖口",
          "code": "HKG",
          "pinyin": "hukou",
          "suoxie": "hk",
          "other": "971@hla"
      },
      "hulan": {
          "name": "呼兰",
          "code": "HUB",
          "pinyin": "hulan",
          "suoxie": "hl",
          "other": "972@hlb"
      },
      "huludaobei": {
          "name": "葫芦岛北",
          "code": "HPD",
          "pinyin": "huludaobei",
          "suoxie": "hldb",
          "other": "973@hlh"
      },
      "haolianghe": {
          "name": "浩良河",
          "code": "HHB",
          "pinyin": "haolianghe",
          "suoxie": "hlh",
          "other": "974@hlh"
      },
      "halahai": {
          "name": "哈拉海",
          "code": "HIT",
          "pinyin": "halahai",
          "suoxie": "hlh",
          "other": "975@hli"
      },
      "heli": {
          "name": "鹤立",
          "code": "HOB",
          "pinyin": "heli",
          "suoxie": "hl",
          "other": "976@hli"
      },
      "hualin": {
          "name": "桦林",
          "code": "HIB",
          "pinyin": "hualin",
          "suoxie": "hl",
          "other": "977@hli"
      },
      "huangling": {
          "name": "黄陵",
          "code": "ULY",
          "pinyin": "huangling",
          "suoxie": "hl",
          "other": "978@hli"
      },
      "hailin": {
          "name": "海林",
          "code": "HRB",
          "pinyin": "hailin",
          "suoxie": "hl",
          "other": "979@hli"
      },
      "hulin": {
          "name": "虎林",
          "code": "VLB",
          "pinyin": "hulin",
          "suoxie": "hl",
          "other": "980@hli"
      },
      "hanling": {
          "name": "寒岭",
          "code": "HAT",
          "pinyin": "hanling",
          "suoxie": "hl",
          "other": "981@hlo"
      },
      "helong": {
          "name": "和龙",
          "code": "HLL",
          "pinyin": "helong",
          "suoxie": "hl",
          "other": "982@hlo"
      },
      "hailong": {
          "name": "海龙",
          "code": "HIL",
          "pinyin": "hailong",
          "suoxie": "hl",
          "other": "983@hls"
      },
      "halasu": {
          "name": "哈拉苏",
          "code": "HAX",
          "pinyin": "halasu",
          "suoxie": "hls",
          "other": "984@hlt"
      },
      "hulusitai": {
          "name": "呼鲁斯太",
          "code": "VTJ",
          "pinyin": "hulusitai",
          "suoxie": "hlst",
          "other": "985@hlz"
      },
      "huolianzhai": {
          "name": "火连寨",
          "code": "HLT",
          "pinyin": "huolianzhai",
          "suoxie": "hlz",
          "other": "986@hme"
      },
      "huangmei": {
          "name": "黄梅",
          "code": "VEH",
          "pinyin": "huangmei",
          "suoxie": "hm",
          "other": "987@hmy"
      },
      "hanmaying": {
          "name": "韩麻营",
          "code": "HYP",
          "pinyin": "hanmaying",
          "suoxie": "hmy",
          "other": "988@hnh"
      },
      "huangnihe": {
          "name": "黄泥河",
          "code": "HHL",
          "pinyin": "huangnihe",
          "suoxie": "hnh",
          "other": "989@hni"
      },
      "haining": {
          "name": "海宁",
          "code": "HNH",
          "pinyin": "haining",
          "suoxie": "hn",
          "other": "990@hno"
      },
      "huinong": {
          "name": "惠农",
          "code": "HMJ",
          "pinyin": "huinong",
          "suoxie": "hn",
          "other": "991@hpi"
      },
      "heping": {
          "name": "和平",
          "code": "VAQ",
          "pinyin": "heping",
          "suoxie": "hp",
          "other": "992@hpz"
      },
      "huapengzi": {
          "name": "花棚子",
          "code": "HZM",
          "pinyin": "huapengzi",
          "suoxie": "hpz",
          "other": "993@hqi"
      },
      "huaqiao": {
          "name": "花桥",
          "code": "VQH",
          "pinyin": "huaqiao",
          "suoxie": "hq",
          "other": "994@hqi"
      },
      "hongqing": {
          "name": "宏庆",
          "code": "HEY",
          "pinyin": "hongqing",
          "suoxie": "hq",
          "other": "995@hre"
      },
      "huairen": {
          "name": "怀仁",
          "code": "HRV",
          "pinyin": "huairen",
          "suoxie": "hr",
          "other": "996@hro"
      },
      "huarong": {
          "name": "华容",
          "code": "HRN",
          "pinyin": "huarong",
          "suoxie": "hr",
          "other": "997@hsb"
      },
      "huangsongdian": {
          "name": "黄松甸",
          "code": "HDL",
          "pinyin": "huangsongdian",
          "suoxie": "hsd",
          "other": "999@hsg"
      },
      "heshituoluogai": {
          "name": "和什托洛盖",
          "code": "VSR",
          "pinyin": "heshituoluogai",
          "suoxie": "hstlg",
          "other": "1000@hsh"
      },
      "hongshan": {
          "name": "红山",
          "code": "VSB",
          "pinyin": "hongshan",
          "suoxie": "hs",
          "other": "1001@hsh"
      },
      "hanshou": {
          "name": "汉寿",
          "code": "VSQ",
          "pinyin": "hanshou",
          "suoxie": "hs",
          "other": "1002@hsh"
      },
      "hengshan": {
          "name": "衡山",
          "code": "HSQ",
          "pinyin": "hengshan",
          "suoxie": "hs",
          "other": "1003@hsh"
      },
      "heishui": {
          "name": "黑水",
          "code": "HOT",
          "pinyin": "heishui",
          "suoxie": "hs",
          "other": "1004@hsh"
      },
      "huishan": {
          "name": "惠山",
          "code": "VCH",
          "pinyin": "huishan",
          "suoxie": "hs",
          "other": "1005@hsh"
      },
      "hushiha": {
          "name": "虎什哈",
          "code": "HHP",
          "pinyin": "hushiha",
          "suoxie": "hsh",
          "other": "1006@hsp"
      },
      "hongsipu": {
          "name": "红寺堡",
          "code": "HSJ",
          "pinyin": "hongsipu",
          "suoxie": "hsp",
          "other": "1007@hst"
      },
      "hushitai": {
          "name": "虎石台",
          "code": "HUT",
          "pinyin": "hushitai",
          "suoxie": "hst",
          "other": "1008@hsw"
      },
      "haishiwan": {
          "name": "海石湾",
          "code": "HSO",
          "pinyin": "haishiwan",
          "suoxie": "hsw",
          "other": "1009@hsx"
      },
      "hengshanxi": {
          "name": "衡山西",
          "code": "HEQ",
          "pinyin": "hengshanxi",
          "suoxie": "hsx",
          "other": "1010@hsx"
      },
      "hongshaxian": {
          "name": "红砂岘",
          "code": "VSJ",
          "pinyin": "hongshaxian",
          "suoxie": "hsx",
          "other": "1011@hta"
      },
      "heitai": {
          "name": "黑台",
          "code": "HQB",
          "pinyin": "heitai",
          "suoxie": "ht",
          "other": "1012@hta"
      },
      "huantai": {
          "name": "桓台",
          "code": "VTK",
          "pinyin": "huantai",
          "suoxie": "ht",
          "other": "1013@hti"
      },
      "hetian": {
          "name": "和田",
          "code": "VTR",
          "pinyin": "hetian",
          "suoxie": "ht",
          "other": "1014@hto"
      },
      "huitong": {
          "name": "会同",
          "code": "VTQ",
          "pinyin": "huitong",
          "suoxie": "ht",
          "other": "1015@htz"
      },
      "haituozi": {
          "name": "海坨子",
          "code": "HZT",
          "pinyin": "haituozi",
          "suoxie": "htz",
          "other": "1016@hwa"
      },
      "heiwang": {
          "name": "黑旺",
          "code": "HWK",
          "pinyin": "heiwang",
          "suoxie": "hw",
          "other": "1017@hwa"
      },
      "haiwan": {
          "name": "海湾",
          "code": "RWH",
          "pinyin": "haiwan",
          "suoxie": "hw",
          "other": "1018@hxi"
      },
      "hongxing": {
          "name": "红星",
          "code": "VXB",
          "pinyin": "hongxing",
          "suoxie": "hx",
          "other": "1019@hxi"
      },
      "huixian": {
          "name": "徽县",
          "code": "HYY",
          "pinyin": "huixian",
          "suoxie": "hx",
          "other": "1020@hxl"
      },
      "hongxinglong": {
          "name": "红兴隆",
          "code": "VHB",
          "pinyin": "hongxinglong",
          "suoxie": "hxl",
          "other": "1021@hxt"
      },
      "huanxintian": {
          "name": "换新天",
          "code": "VTB",
          "pinyin": "huanxintian",
          "suoxie": "hxt",
          "other": "1022@hxt"
      },
      "hongxiantai": {
          "name": "红岘台",
          "code": "HTJ",
          "pinyin": "hongxiantai",
          "suoxie": "hxt",
          "other": "1023@hya"
      },
      "hongyan": {
          "name": "红彦",
          "code": "VIX",
          "pinyin": "hongyan",
          "suoxie": "hy",
          "other": "1024@hya"
      },
      "heyang": {
          "name": "合阳",
          "code": "HAY",
          "pinyin": "heyang",
          "suoxie": "hy",
          "other": "1025@hya"
      },
      "haiyang": {
          "name": "海阳",
          "code": "HYK",
          "pinyin": "haiyang",
          "suoxie": "hy",
          "other": "1026@hyd"
      },
      "hengyangdong": {
          "name": "衡阳东",
          "code": "HVQ",
          "pinyin": "hengyangdong",
          "suoxie": "hyd",
          "other": "1027@hyi"
      },
      "huaying": {
          "name": "华蓥",
          "code": "HUW",
          "pinyin": "huaying",
          "suoxie": "hy",
          "other": "1028@hyi"
      },
      "hanyin": {
          "name": "汉阴",
          "code": "HQY",
          "pinyin": "hanyin",
          "suoxie": "hy",
          "other": "1029@hyt"
      },
      "huangyangtan": {
          "name": "黄羊滩",
          "code": "HGJ",
          "pinyin": "huangyangtan",
          "suoxie": "hyt",
          "other": "1030@hyu"
      },
      "hanyuan": {
          "name": "汉源",
          "code": "WHW",
          "pinyin": "hanyuan",
          "suoxie": "hy",
          "other": "1031@hyu"
      },
      "heyuan": {
          "name": "河源",
          "code": "VIQ",
          "pinyin": "heyuan",
          "suoxie": "hy",
          "other": "1032@hyu"
      },
      "huayuan": {
          "name": "花园",
          "code": "HUN",
          "pinyin": "huayuan",
          "suoxie": "hy",
          "other": "1033@hyu"
      },
      "huangyuan": {
          "name": "湟源",
          "code": "HNO",
          "pinyin": "huangyuan",
          "suoxie": "hy",
          "other": "1034@hyz"
      },
      "huangyangzhen": {
          "name": "黄羊镇",
          "code": "HYJ",
          "pinyin": "huangyangzhen",
          "suoxie": "hyz",
          "other": "1035@hzh"
      },
      "huzhou": {
          "name": "湖州",
          "code": "VZH",
          "pinyin": "huzhou",
          "suoxie": "hz",
          "other": "1036@hzh"
      },
      "huazhou": {
          "name": "化州",
          "code": "HZZ",
          "pinyin": "huazhou",
          "suoxie": "hz",
          "other": "1037@hzh"
      },
      "huangzhou": {
          "name": "黄州",
          "code": "VON",
          "pinyin": "huangzhou",
          "suoxie": "hz",
          "other": "1038@hzh"
      },
      "huozhou": {
          "name": "霍州",
          "code": "HZV",
          "pinyin": "huozhou",
          "suoxie": "hz",
          "other": "1039@hzx"
      },
      "huizhouxi": {
          "name": "惠州西",
          "code": "VXQ",
          "pinyin": "huizhouxi",
          "suoxie": "hzx",
          "other": "1040@jba"
      },
      "jubao": {
          "name": "巨宝",
          "code": "JRT",
          "pinyin": "jubao",
          "suoxie": "jb",
          "other": "1041@jbi"
      },
      "jingbian": {
          "name": "靖边",
          "code": "JIY",
          "pinyin": "jingbian",
          "suoxie": "jb",
          "other": "1042@jbt"
      },
      "jinbaotun": {
          "name": "金宝屯",
          "code": "JBD",
          "pinyin": "jinbaotun",
          "suoxie": "jbt",
          "other": "1043@jcb"
      },
      "jinchengbei": {
          "name": "晋城北",
          "code": "JEF",
          "pinyin": "jinchengbei",
          "suoxie": "jcb",
          "other": "1044@jch"
      },
      "jinchang": {
          "name": "金昌",
          "code": "JCJ",
          "pinyin": "jinchang",
          "suoxie": "jc",
          "other": "1045@jch"
      },
      "juancheng": {
          "name": "鄄城",
          "code": "JCK",
          "pinyin": "juancheng",
          "suoxie": "jc",
          "other": "1046@jch"
      },
      "jiaocheng": {
          "name": "交城",
          "code": "JNV",
          "pinyin": "jiaocheng",
          "suoxie": "jc",
          "other": "1047@jch"
      },
      "jianchang": {
          "name": "建昌",
          "code": "JFD",
          "pinyin": "jianchang",
          "suoxie": "jc",
          "other": "1048@jde"
      },
      "junde": {
          "name": "峻德",
          "code": "JDB",
          "pinyin": "junde",
          "suoxie": "jd",
          "other": "1049@jdi"
      },
      "jingdian": {
          "name": "井店",
          "code": "JFP",
          "pinyin": "jingdian",
          "suoxie": "jd",
          "other": "1050@jdo"
      },
      "jidong": {
          "name": "鸡东",
          "code": "JOB",
          "pinyin": "jidong",
          "suoxie": "jd",
          "other": "1051@jdu"
      },
      "jiangdu": {
          "name": "江都",
          "code": "UDH",
          "pinyin": "jiangdu",
          "suoxie": "jd",
          "other": "1052@jgs"
      },
      "jiguanshan": {
          "name": "鸡冠山",
          "code": "JST",
          "pinyin": "jiguanshan",
          "suoxie": "jgs",
          "other": "1053@jgt"
      },
      "jingoutun": {
          "name": "金沟屯",
          "code": "VGP",
          "pinyin": "jingoutun",
          "suoxie": "jgt",
          "other": "1054@jha"
      },
      "jinghai": {
          "name": "静海",
          "code": "JHP",
          "pinyin": "jinghai",
          "suoxie": "jh",
          "other": "1055@jhe"
      },
      "jinhe": [
          {
              "name": "金河",
              "code": "JHX",
              "pinyin": "jinhe",
              "suoxie": "jh",
              "other": "1056@jhe"
          },
          {
              "name": "锦河",
              "code": "JHB",
              "pinyin": "jinhe",
              "suoxie": "jh",
              "other": "1057@jhe"
          }
      ],
      "jinghe": {
          "name": "精河",
          "code": "JHR",
          "pinyin": "jinghe",
          "suoxie": "jh",
          "other": "1058@jhn"
      },
      "jinghenan": {
          "name": "精河南",
          "code": "JIR",
          "pinyin": "jinghenan",
          "suoxie": "jhn",
          "other": "1059@jhu"
      },
      "jianghua": {
          "name": "江华",
          "code": "JHZ",
          "pinyin": "jianghua",
          "suoxie": "jh",
          "other": "1060@jhu"
      },
      "jianhu": {
          "name": "建湖",
          "code": "AJH",
          "pinyin": "jianhu",
          "suoxie": "jh",
          "other": "1061@jjg"
      },
      "jijiagou": {
          "name": "纪家沟",
          "code": "VJD",
          "pinyin": "jijiagou",
          "suoxie": "jjg",
          "other": "1062@jji"
      },
      "jinjiang": {
          "name": "晋江",
          "code": "JJS",
          "pinyin": "jinjiang",
          "suoxie": "jj",
          "other": "1063@jji"
      },
      "jinjie": {
          "name": "锦界",
          "code": "JEY",
          "pinyin": "jinjie",
          "suoxie": "jj",
          "other": "1064@jji"
      },
      "jiangjia": {
          "name": "姜家",
          "code": "JJB",
          "pinyin": "jiangjia",
          "suoxie": "jj",
          "other": "1065@jji"
      },
      "jiangjin": {
          "name": "江津",
          "code": "JJW",
          "pinyin": "jiangjin",
          "suoxie": "jj",
          "other": "1066@jke"
      },
      "jinkeng": {
          "name": "金坑",
          "code": "JKT",
          "pinyin": "jinkeng",
          "suoxie": "jk",
          "other": "1067@jli"
      },
      "jiling": {
          "name": "芨岭",
          "code": "JLJ",
          "pinyin": "jiling",
          "suoxie": "jl",
          "other": "1068@jmc"
      },
      "jinmacun": {
          "name": "金马村",
          "code": "JMM",
          "pinyin": "jinmacun",
          "suoxie": "jmc",
          "other": "1069@jmd"
      },
      "jiangmendong": {
          "name": "江门东",
          "code": "JWQ",
          "pinyin": "jiangmendong",
          "suoxie": "jmd",
          "other": "1070@jme"
      },
      "jiaomei": {
          "name": "角美",
          "code": "JES",
          "pinyin": "jiaomei",
          "suoxie": "jm",
          "other": "1071@jna"
      },
      "junan": {
          "name": "莒南",
          "code": "JOK",
          "pinyin": "junan",
          "suoxie": "jn",
          "other": "1072@jna"
      },
      "jingnan": {
          "name": "井南",
          "code": "JNP",
          "pinyin": "jingnan",
          "suoxie": "jn",
          "other": "1073@jou"
      },
      "jianou": {
          "name": "建瓯",
          "code": "JVS",
          "pinyin": "jianou",
          "suoxie": "jo",
          "other": "1074@jpe"
      },
      "jingpeng": {
          "name": "经棚",
          "code": "JPC",
          "pinyin": "jingpeng",
          "suoxie": "jp",
          "other": "1075@jqi"
      },
      "jiangqiao": {
          "name": "江桥",
          "code": "JQX",
          "pinyin": "jiangqiao",
          "suoxie": "jq",
          "other": "1076@jsa"
      },
      "jiusan": {
          "name": "九三",
          "code": "SSX",
          "pinyin": "jiusan",
          "suoxie": "js",
          "other": "1077@jsb"
      },
      "jinshanbei": {
          "name": "金山北",
          "code": "EGH",
          "pinyin": "jinshanbei",
          "suoxie": "jsb",
          "other": "1078@jsh"
      },
      "jiashan": [
          {
              "name": "嘉善",
              "code": "JSH",
              "pinyin": "jiashan",
              "suoxie": "js",
              "other": "1079@jsh"
          },
          {
              "name": "甲山",
              "code": "JOP",
              "pinyin": "jiashan",
              "suoxie": "js",
              "other": "1085@jsj"
          }
      ],
      "jingshan": {
          "name": "京山",
          "code": "JCN",
          "pinyin": "jingshan",
          "suoxie": "js",
          "other": "1080@jsh"
      },
      "jianshi": {
          "name": "建始",
          "code": "JRN",
          "pinyin": "jianshi",
          "suoxie": "js",
          "other": "1081@jsh"
      },
      "jishan": {
          "name": "稷山",
          "code": "JVV",
          "pinyin": "jishan",
          "suoxie": "js",
          "other": "1082@jsh"
      },
      "jishu": {
          "name": "吉舒",
          "code": "JSL",
          "pinyin": "jishu",
          "suoxie": "js",
          "other": "1083@jsh"
      },
      "jianshe": {
          "name": "建设",
          "code": "JET",
          "pinyin": "jianshe",
          "suoxie": "js",
          "other": "1084@jsh"
      },
      "jiashannan": {
          "name": "嘉善南",
          "code": "EAH",
          "pinyin": "jiashannan",
          "suoxie": "jsn",
          "other": "1087@jst"
      },
      "jinshantun": {
          "name": "金山屯",
          "code": "JTB",
          "pinyin": "jinshantun",
          "suoxie": "jst",
          "other": "1088@jst"
      },
      "jiangsuotian": {
          "name": "江所田",
          "code": "JOM",
          "pinyin": "jiangsuotian",
          "suoxie": "jst",
          "other": "1089@jta"
      },
      "jingtai": {
          "name": "景泰",
          "code": "JTJ",
          "pinyin": "jingtai",
          "suoxie": "jt",
          "other": "1090@jtn"
      },
      "jiutainan": {
          "name": "九台南",
          "code": "JNL",
          "pinyin": "jiutainan",
          "suoxie": "jtn",
          "other": "1091@jwe"
      },
      "jiwen": {
          "name": "吉文",
          "code": "JWX",
          "pinyin": "jiwen",
          "suoxie": "jw",
          "other": "1092@jxi"
      },
      "jinxian": {
          "name": "进贤",
          "code": "JUG",
          "pinyin": "jinxian",
          "suoxie": "jx",
          "other": "1093@jxi"
      },
      "juxian": {
          "name": "莒县",
          "code": "JKK",
          "pinyin": "juxian",
          "suoxie": "jx",
          "other": "1094@jxi"
      },
      "jiaxiang": {
          "name": "嘉祥",
          "code": "JUK",
          "pinyin": "jiaxiang",
          "suoxie": "jx",
          "other": "1095@jxi"
      },
      "jiexiu": {
          "name": "介休",
          "code": "JXV",
          "pinyin": "jiexiu",
          "suoxie": "jx",
          "other": "1096@jxi"
      },
      "jiaxing": {
          "name": "嘉兴",
          "code": "JXH",
          "pinyin": "jiaxing",
          "suoxie": "jx",
          "other": "1097@jxi"
      },
      "jingxing": {
          "name": "井陉",
          "code": "JJP",
          "pinyin": "jingxing",
          "suoxie": "jx",
          "other": "1098@jxn"
      },
      "jiaxingnan": {
          "name": "嘉兴南",
          "code": "EPH",
          "pinyin": "jiaxingnan",
          "suoxie": "jxn",
          "other": "1099@jxz"
      },
      "jiaxinzi": {
          "name": "夹心子",
          "code": "JXT",
          "pinyin": "jiaxinzi",
          "suoxie": "jxz",
          "other": "1100@jya"
      },
      "jiangyan": {
          "name": "姜堰",
          "code": "UEH",
          "pinyin": "jiangyan",
          "suoxie": "jy",
          "other": "1101@jya"
      },
      "jieyang": {
          "name": "揭阳",
          "code": "JRQ",
          "pinyin": "jieyang",
          "suoxie": "jy",
          "other": "1102@jya"
      },
      "jianyang": [
          {
              "name": "建阳",
              "code": "JYS",
              "pinyin": "jianyang",
              "suoxie": "jy",
              "other": "1103@jya"
          },
          {
              "name": "简阳",
              "code": "JYW",
              "pinyin": "jianyang",
              "suoxie": "jy",
              "other": "1104@jye"
          }
      ],
      "juye": {
          "name": "巨野",
          "code": "JYK",
          "pinyin": "juye",
          "suoxie": "jy",
          "other": "1105@jyo"
      },
      "jiangyong": {
          "name": "江永",
          "code": "JYZ",
          "pinyin": "jiangyong",
          "suoxie": "jy",
          "other": "1106@jyu"
      },
      "jinyun": {
          "name": "缙云",
          "code": "JYH",
          "pinyin": "jinyun",
          "suoxie": "jy",
          "other": "1107@jyu"
      },
      "jingyuan": {
          "name": "靖远",
          "code": "JYJ",
          "pinyin": "jingyuan",
          "suoxie": "jy",
          "other": "1108@jyu"
      },
      "jiangyuan": {
          "name": "江源",
          "code": "SZL",
          "pinyin": "jiangyuan",
          "suoxie": "jy",
          "other": "1109@jyu"
      },
      "jiyuan": {
          "name": "济源",
          "code": "JYF",
          "pinyin": "jiyuan",
          "suoxie": "jy",
          "other": "1110@jyx"
      },
      "jingyuanxi": {
          "name": "靖远西",
          "code": "JXJ",
          "pinyin": "jingyuanxi",
          "suoxie": "jyx",
          "other": "1111@jzb"
      },
      "jiaozhoubei": {
          "name": "胶州北",
          "code": "JZK",
          "pinyin": "jiaozhoubei",
          "suoxie": "jzb",
          "other": "1112@jzd"
      },
      "jiaozuodong": {
          "name": "焦作东",
          "code": "WEF",
          "pinyin": "jiaozuodong",
          "suoxie": "jzd",
          "other": "1113@jzh"
      },
      "jinzhai": {
          "name": "金寨",
          "code": "JZH",
          "pinyin": "jinzhai",
          "suoxie": "jz",
          "other": "1114@jzh"
      },
      "jingzhou": [
          {
              "name": "靖州",
              "code": "JEQ",
              "pinyin": "jingzhou",
              "suoxie": "jz",
              "other": "1115@jzh"
          },
          {
              "name": "荆州",
              "code": "JBN",
              "pinyin": "jingzhou",
              "suoxie": "jz",
              "other": "1116@jzh"
          },
          {
              "name": "景州",
              "code": "JEP",
              "pinyin": "jingzhou",
              "suoxie": "jz",
              "other": "2359@kfb"
          }
      ],
      "jiaozhou": {
          "name": "胶州",
          "code": "JXK",
          "pinyin": "jiaozhou",
          "suoxie": "jz",
          "other": "1117@jzh"
      },
      "jinzhounan": {
          "name": "锦州南",
          "code": "JOD",
          "pinyin": "jinzhounan",
          "suoxie": "jzn",
          "other": "1119@jzu"
      },
      "jiaozuo": {
          "name": "焦作",
          "code": "JOF",
          "pinyin": "jiaozuo",
          "suoxie": "jz",
          "other": "1120@jzw"
      },
      "jiuzhuangwo": {
          "name": "旧庄窝",
          "code": "JVP",
          "pinyin": "jiuzhuangwo",
          "suoxie": "jzw",
          "other": "1121@jzz"
      },
      "jinzhangzi": {
          "name": "金杖子",
          "code": "JYD",
          "pinyin": "jinzhangzi",
          "suoxie": "jzz",
          "other": "1122@kan"
      },
      "kaian": {
          "name": "开安",
          "code": "KAT",
          "pinyin": "kaian",
          "suoxie": "ka",
          "other": "1123@kch"
      },
      "kuche": {
          "name": "库车",
          "code": "KCR",
          "pinyin": "kuche",
          "suoxie": "kc",
          "other": "1124@kch"
      },
      "kangcheng": {
          "name": "康城",
          "code": "KCP",
          "pinyin": "kangcheng",
          "suoxie": "kc",
          "other": "1125@kde"
      },
      "kuduer": {
          "name": "库都尔",
          "code": "KDX",
          "pinyin": "kuduer",
          "suoxie": "kde",
          "other": "1126@kdi"
      },
      "kuandian": {
          "name": "宽甸",
          "code": "KDT",
          "pinyin": "kuandian",
          "suoxie": "kd",
          "other": "1127@kdo"
      },
      "kedong": {
          "name": "克东",
          "code": "KOB",
          "pinyin": "kedong",
          "suoxie": "kd",
          "other": "1128@kdz"
      },
      "kundulunzhao": {
          "name": "昆都仑召",
          "code": "KDC",
          "pinyin": "kundulunzhao",
          "suoxie": "kdlz",
          "other": "1129@kji"
      },
      "kaijiang": {
          "name": "开江",
          "code": "KAW",
          "pinyin": "kaijiang",
          "suoxie": "kj",
          "other": "1130@kjj"
      },
      "kangjinjing": {
          "name": "康金井",
          "code": "KJB",
          "pinyin": "kangjinjing",
          "suoxie": "kjj",
          "other": "1131@klq"
      },
      "kalaqi": {
          "name": "喀喇其",
          "code": "KQX",
          "pinyin": "kalaqi",
          "suoxie": "klq",
          "other": "1132@klu"
      },
      "kailu": {
          "name": "开鲁",
          "code": "KLC",
          "pinyin": "kailu",
          "suoxie": "kl",
          "other": "1133@kly"
      },
      "kelamayi": {
          "name": "克拉玛依",
          "code": "KHR",
          "pinyin": "kelamayi",
          "suoxie": "klmy",
          "other": "1134@kqi"
      },
      "kouqian": {
          "name": "口前",
          "code": "KQL",
          "pinyin": "kouqian",
          "suoxie": "kq",
          "other": "1135@ksh"
      },
      "kunshan": {
          "name": "昆山",
          "code": "KSH",
          "pinyin": "kunshan",
          "suoxie": "ks",
          "other": "1136@ksh"
      },
      "kuishan": {
          "name": "奎山",
          "code": "KAB",
          "pinyin": "kuishan",
          "suoxie": "ks",
          "other": "1137@ksh"
      },
      "keshan": {
          "name": "克山",
          "code": "KSB",
          "pinyin": "keshan",
          "suoxie": "ks",
          "other": "1138@kto"
      },
      "kaitong": {
          "name": "开通",
          "code": "KTT",
          "pinyin": "kaitong",
          "suoxie": "kt",
          "other": "1139@kxl"
      },
      "kangxiling": {
          "name": "康熙岭",
          "code": "KXZ",
          "pinyin": "kangxiling",
          "suoxie": "kxl",
          "other": "1140@kya"
      },
      "kunyang": {
          "name": "昆阳",
          "code": "KAM",
          "pinyin": "kunyang",
          "suoxie": "ky",
          "other": "1141@kyh"
      },
      "keyihe": {
          "name": "克一河",
          "code": "KHX",
          "pinyin": "keyihe",
          "suoxie": "kyh",
          "other": "1142@kyx"
      },
      "kaiyuanxi": {
          "name": "开原西",
          "code": "KXT",
          "pinyin": "kaiyuanxi",
          "suoxie": "kyx",
          "other": "1143@kzh"
      },
      "kangzhuang": {
          "name": "康庄",
          "code": "KZP",
          "pinyin": "kangzhuang",
          "suoxie": "kz",
          "other": "1144@lbi"
      },
      "laibin": {
          "name": "来宾",
          "code": "UBZ",
          "pinyin": "laibin",
          "suoxie": "lb",
          "other": "1145@lbi"
      },
      "laobian": {
          "name": "老边",
          "code": "LLT",
          "pinyin": "laobian",
          "suoxie": "lb",
          "other": "1146@lbx"
      },
      "lingbaoxi": {
          "name": "灵宝西",
          "code": "LPF",
          "pinyin": "lingbaoxi",
          "suoxie": "lbx",
          "other": "1147@lch"
      },
      "longchuan": {
          "name": "龙川",
          "code": "LUQ",
          "pinyin": "longchuan",
          "suoxie": "lc",
          "other": "1148@lch"
      },
      "lechang": {
          "name": "乐昌",
          "code": "LCQ",
          "pinyin": "lechang",
          "suoxie": "lc",
          "other": "1149@lch"
      },
      "licheng": {
          "name": "黎城",
          "code": "UCP",
          "pinyin": "licheng",
          "suoxie": "lc",
          "other": "1150@lch"
      },
      "liaocheng": {
          "name": "聊城",
          "code": "UCK",
          "pinyin": "liaocheng",
          "suoxie": "lc",
          "other": "1151@lcu"
      },
      "lancun": {
          "name": "蓝村",
          "code": "LCK",
          "pinyin": "lancun",
          "suoxie": "lc",
          "other": "1152@lda"
      },
      "liangdang": {
          "name": "两当",
          "code": "LDY",
          "pinyin": "liangdang",
          "suoxie": "ld",
          "other": "1153@ldo"
      },
      "lindong": {
          "name": "林东",
          "code": "LRC",
          "pinyin": "lindong",
          "suoxie": "ld",
          "other": "1154@ldu"
      },
      "ledu": {
          "name": "乐都",
          "code": "LDO",
          "pinyin": "ledu",
          "suoxie": "ld",
          "other": "1155@ldx"
      },
      "liangdixia": {
          "name": "梁底下",
          "code": "LDP",
          "pinyin": "liangdixia",
          "suoxie": "ldx",
          "other": "1156@ldz"
      },
      "liudaohezi": {
          "name": "六道河子",
          "code": "LVP",
          "pinyin": "liudaohezi",
          "suoxie": "ldhz",
          "other": "1157@lfa"
      },
      "lufan": {
          "name": "鲁番",
          "code": "LVM",
          "pinyin": "lufan",
          "suoxie": "lf",
          "other": "1158@lfa"
      },
      "langfang": {
          "name": "廊坊",
          "code": "LJP",
          "pinyin": "langfang",
          "suoxie": "lf",
          "other": "1159@lfa"
      },
      "luofa": {
          "name": "落垡",
          "code": "LOP",
          "pinyin": "luofa",
          "suoxie": "lf",
          "other": "1160@lfb"
      },
      "langfangbei": {
          "name": "廊坊北",
          "code": "LFP",
          "pinyin": "langfangbei",
          "suoxie": "lfb",
          "other": "1161@lfu"
      },
      "laofu": {
          "name": "老府",
          "code": "UFD",
          "pinyin": "laofu",
          "suoxie": "lf",
          "other": "1162@lga"
      },
      "langang": {
          "name": "兰岗",
          "code": "LNB",
          "pinyin": "langang",
          "suoxie": "lg",
          "other": "1163@lgd"
      },
      "longgudian": {
          "name": "龙骨甸",
          "code": "LGM",
          "pinyin": "longgudian",
          "suoxie": "lgd",
          "other": "1164@lgo"
      },
      "lugou": {
          "name": "芦沟",
          "code": "LOM",
          "pinyin": "lugou",
          "suoxie": "lg",
          "other": "1165@lgo"
      },
      "longgou": {
          "name": "龙沟",
          "code": "LGJ",
          "pinyin": "longgou",
          "suoxie": "lg",
          "other": "1166@lgu"
      },
      "lagu": {
          "name": "拉古",
          "code": "LGB",
          "pinyin": "lagu",
          "suoxie": "lg",
          "other": "1167@lha"
      },
      "linhai": [
          {
              "name": "临海",
              "code": "UFH",
              "pinyin": "linhai",
              "suoxie": "lh",
              "other": "1168@lha"
          },
          {
              "name": "林海",
              "code": "LXX",
              "pinyin": "linhai",
              "suoxie": "lh",
              "other": "1169@lha"
          }
      ],
      "laha": {
          "name": "拉哈",
          "code": "LHX",
          "pinyin": "laha",
          "suoxie": "lh",
          "other": "1170@lha"
      },
      "linghai": {
          "name": "凌海",
          "code": "JID",
          "pinyin": "linghai",
          "suoxie": "lh",
          "other": "1171@lhe"
      },
      "liuhe": [
          {
              "name": "柳河",
              "code": "LNL",
              "pinyin": "liuhe",
              "suoxie": "lh",
              "other": "1172@lhe"
          },
          {
              "name": "六合",
              "code": "KLH",
              "pinyin": "liuhe",
              "suoxie": "lh",
              "other": "1173@lhu"
          }
      ],
      "luanheyan": {
          "name": "滦河沿",
          "code": "UNP",
          "pinyin": "luanheyan",
          "suoxie": "lhy",
          "other": "1175@lhz"
      },
      "liuhezhen": {
          "name": "六合镇",
          "code": "LEX",
          "pinyin": "liuhezhen",
          "suoxie": "lhz",
          "other": "1176@ljd"
      },
      "liangjiadian": {
          "name": "亮甲店",
          "code": "LRT",
          "pinyin": "liangjiadian",
          "suoxie": "ljd",
          "other": "1177@ljd"
      },
      "liujiadian": {
          "name": "刘家店",
          "code": "UDT",
          "pinyin": "liujiadian",
          "suoxie": "ljd",
          "other": "1178@ljh"
      },
      "liujiahe": {
          "name": "刘家河",
          "code": "LVT",
          "pinyin": "liujiahe",
          "suoxie": "ljh",
          "other": "1179@lji"
      },
      "lianjiang": [
          {
              "name": "连江",
              "code": "LKS",
              "pinyin": "lianjiang",
              "suoxie": "lj",
              "other": "1180@lji"
          },
          {
              "name": "廉江",
              "code": "LJZ",
              "pinyin": "lianjiang",
              "suoxie": "lj",
              "other": "1184@lji"
          }
      ],
      "lujiang": {
          "name": "庐江",
          "code": "UJH",
          "pinyin": "lujiang",
          "suoxie": "lj",
          "other": "1181@lji"
      },
      "lijia": {
          "name": "李家",
          "code": "LJB",
          "pinyin": "lijia",
          "suoxie": "lj",
          "other": "1182@lji"
      },
      "luojiang": {
          "name": "罗江",
          "code": "LJW",
          "pinyin": "luojiang",
          "suoxie": "lj",
          "other": "1183@lji"
      },
      "liangjia": {
          "name": "两家",
          "code": "UJT",
          "pinyin": "liangjia",
          "suoxie": "lj",
          "other": "1185@lji"
      },
      "longjiang": {
          "name": "龙江",
          "code": "LJX",
          "pinyin": "longjiang",
          "suoxie": "lj",
          "other": "1186@lji"
      },
      "longjia": {
          "name": "龙嘉",
          "code": "UJL",
          "pinyin": "longjia",
          "suoxie": "lj",
          "other": "1187@ljk"
      },
      "lianjiangkou": {
          "name": "莲江口",
          "code": "LHB",
          "pinyin": "lianjiangkou",
          "suoxie": "ljk",
          "other": "1188@ljl"
      },
      "linjialou": {
          "name": "蔺家楼",
          "code": "ULK",
          "pinyin": "linjialou",
          "suoxie": "ljl",
          "other": "1189@ljp"
      },
      "lijiaping": {
          "name": "李家坪",
          "code": "LIJ",
          "pinyin": "lijiaping",
          "suoxie": "ljp",
          "other": "1190@lka"
      },
      "lankao": {
          "name": "兰考",
          "code": "LKF",
          "pinyin": "lankao",
          "suoxie": "lk",
          "other": "1191@lko"
      },
      "linkou": {
          "name": "林口",
          "code": "LKB",
          "pinyin": "linkou",
          "suoxie": "lk",
          "other": "1192@lkp"
      },
      "lukoupu": {
          "name": "路口铺",
          "code": "LKQ",
          "pinyin": "lukoupu",
          "suoxie": "lkp",
          "other": "1193@lla"
      },
      "laolai": {
          "name": "老莱",
          "code": "LAX",
          "pinyin": "laolai",
          "suoxie": "ll",
          "other": "1194@lli"
      },
      "lalin": {
          "name": "拉林",
          "code": "LAB",
          "pinyin": "lalin",
          "suoxie": "ll",
          "other": "1195@lli"
      },
      "luliang": {
          "name": "陆良",
          "code": "LRM",
          "pinyin": "luliang",
          "suoxie": "ll",
          "other": "1196@lli"
      },
      "longli": {
          "name": "龙里",
          "code": "LLW",
          "pinyin": "longli",
          "suoxie": "ll",
          "other": "1197@lli"
      },
      "linli": {
          "name": "临澧",
          "code": "LWQ",
          "pinyin": "linli",
          "suoxie": "ll",
          "other": "1198@lli"
      },
      "lanling": {
          "name": "兰棱",
          "code": "LLB",
          "pinyin": "lanling",
          "suoxie": "ll",
          "other": "1199@lli"
      },
      "lingling": {
          "name": "零陵",
          "code": "UWZ",
          "pinyin": "lingling",
          "suoxie": "ll",
          "other": "1200@llo"
      },
      "lulong": {
          "name": "卢龙",
          "code": "UAP",
          "pinyin": "lulong",
          "suoxie": "ll",
          "other": "1201@lmd"
      },
      "lamadian": {
          "name": "喇嘛甸",
          "code": "LMX",
          "pinyin": "lamadian",
          "suoxie": "lmd",
          "other": "1202@lmd"
      },
      "limudian": {
          "name": "里木店",
          "code": "LMB",
          "pinyin": "limudian",
          "suoxie": "lmd",
          "other": "1203@lme"
      },
      "luomen": {
          "name": "洛门",
          "code": "LMJ",
          "pinyin": "luomen",
          "suoxie": "lm",
          "other": "1204@lna"
      },
      "longnan": [
          {
              "name": "龙南",
              "code": "UNG",
              "pinyin": "longnan",
              "suoxie": "ln",
              "other": "1205@lpi"
          },
          {
              "name": "陇南",
              "code": "INJ",
              "pinyin": "longnan",
              "suoxie": "ln",
              "other": "2400@lpn"
          }
      ],
      "liangping": {
          "name": "梁平",
          "code": "UQW",
          "pinyin": "liangping",
          "suoxie": "lp",
          "other": "1206@lpi"
      },
      "luoping": {
          "name": "罗平",
          "code": "LPM",
          "pinyin": "luoping",
          "suoxie": "lp",
          "other": "1207@lpl"
      },
      "luopoling": {
          "name": "落坡岭",
          "code": "LPP",
          "pinyin": "luopoling",
          "suoxie": "lpl",
          "other": "1208@lps"
      },
      "liupanshan": {
          "name": "六盘山",
          "code": "UPJ",
          "pinyin": "liupanshan",
          "suoxie": "lps",
          "other": "1209@lps"
      },
      "linqing": {
          "name": "临清",
          "code": "UQK",
          "pinyin": "linqing",
          "suoxie": "lq",
          "other": "1211@lqs"
      },
      "longquansi": {
          "name": "龙泉寺",
          "code": "UQJ",
          "pinyin": "longquansi",
          "suoxie": "lqs",
          "other": "1212@lsb"
      },
      "leshanbei": {
          "name": "乐山北",
          "code": "UTW",
          "pinyin": "leshanbei",
          "suoxie": "ls",
          "other": "1213@lsc"
      },
      "leshancun": {
          "name": "乐善村",
          "code": "LUM",
          "pinyin": "leshancun",
          "suoxie": "lsc",
          "other": "1214@lsd"
      },
      "lengshuijiangdong": {
          "name": "冷水江东",
          "code": "UDQ",
          "pinyin": "lengshuijiangdong",
          "suoxie": "lsjd",
          "other": "1215@lsg"
      },
      "lianshanguan": {
          "name": "连山关",
          "code": "LGT",
          "pinyin": "lianshanguan",
          "suoxie": "lsg",
          "other": "1216@lsg"
      },
      "liushuigou": {
          "name": "流水沟",
          "code": "USP",
          "pinyin": "liushuigou",
          "suoxie": "lsg",
          "other": "1217@lsh"
      },
      "lingshui": {
          "name": "陵水",
          "code": "LIQ",
          "pinyin": "lingshui",
          "suoxie": "ls",
          "other": "1218@lsh"
      },
      "lishui": [
          {
              "name": "丽水",
              "code": "USH",
              "pinyin": "lishui",
              "suoxie": "ls",
              "other": "1219@lsh"
          },
          {
              "name": "溧水",
              "code": "LDH",
              "pinyin": "lishui",
              "suoxie": "ls",
              "other": "2406@lwj"
          }
      ],
      "luoshan": {
          "name": "罗山",
          "code": "LRN",
          "pinyin": "luoshan",
          "suoxie": "ls",
          "other": "1220@lsh"
      },
      "lushan": [
          {
              "name": "鲁山",
              "code": "LAF",
              "pinyin": "lushan",
              "suoxie": "ls",
              "other": "1221@lsh"
          },
          {
              "name": "庐山",
              "code": "LSG",
              "pinyin": "lushan",
              "suoxie": "ls",
              "other": "1225@lsp"
          }
      ],
      "liangshan": {
          "name": "梁山",
          "code": "LMK",
          "pinyin": "liangshan",
          "suoxie": "ls",
          "other": "1222@lsh"
      },
      "lingshi": {
          "name": "灵石",
          "code": "LSV",
          "pinyin": "lingshi",
          "suoxie": "ls",
          "other": "1223@lsh"
      },
      "lushuihe": {
          "name": "露水河",
          "code": "LUL",
          "pinyin": "lushuihe",
          "suoxie": "lsh",
          "other": "1224@lsh"
      },
      "linshengpu": {
          "name": "林盛堡",
          "code": "LBT",
          "pinyin": "linshengpu",
          "suoxie": "lsp",
          "other": "1226@lst"
      },
      "liushutun": {
          "name": "柳树屯",
          "code": "LSD",
          "pinyin": "liushutun",
          "suoxie": "lst",
          "other": "1227@lsz"
      },
      "longshanzhen": {
          "name": "龙山镇",
          "code": "LAS",
          "pinyin": "longshanzhen",
          "suoxie": "lsz",
          "other": "1228@lsz"
      },
      "lishuzhen": {
          "name": "梨树镇",
          "code": "LSB",
          "pinyin": "lishuzhen",
          "suoxie": "lsz",
          "other": "1229@lsz"
      },
      "lishizhai": {
          "name": "李石寨",
          "code": "LET",
          "pinyin": "lishizhai",
          "suoxie": "lsz",
          "other": "1230@lta"
      },
      "litang": {
          "name": "黎塘",
          "code": "LTZ",
          "pinyin": "litang",
          "suoxie": "lt",
          "other": "1231@lta"
      },
      "luntai": {
          "name": "轮台",
          "code": "LAR",
          "pinyin": "luntai",
          "suoxie": "lt",
          "other": "1232@lta"
      },
      "lutai": {
          "name": "芦台",
          "code": "LTP",
          "pinyin": "lutai",
          "suoxie": "lt",
          "other": "1233@ltb"
      },
      "longtangba": {
          "name": "龙塘坝",
          "code": "LBM",
          "pinyin": "longtangba",
          "suoxie": "ltb",
          "other": "1234@ltu"
      },
      "laituan": {
          "name": "濑湍",
          "code": "LVZ",
          "pinyin": "laituan",
          "suoxie": "lt",
          "other": "1235@ltx"
      },
      "luotuoxiang": {
          "name": "骆驼巷",
          "code": "LTJ",
          "pinyin": "luotuoxiang",
          "suoxie": "ltx",
          "other": "1236@lwa"
      },
      "liwang": {
          "name": "李旺",
          "code": "VLJ",
          "pinyin": "liwang",
          "suoxie": "lw",
          "other": "1237@lwd"
      },
      "laiwudong": {
          "name": "莱芜东",
          "code": "LWK",
          "pinyin": "laiwudong",
          "suoxie": "lwd",
          "other": "1238@lws"
      },
      "langweishan": {
          "name": "狼尾山",
          "code": "LRJ",
          "pinyin": "langweishan",
          "suoxie": "lws",
          "other": "1239@lwu"
      },
      "lingwu": {
          "name": "灵武",
          "code": "LNJ",
          "pinyin": "lingwu",
          "suoxie": "lw",
          "other": "1240@lwx"
      },
      "laiwuxi": {
          "name": "莱芜西",
          "code": "UXK",
          "pinyin": "laiwuxi",
          "suoxie": "lwx",
          "other": "1241@lxi"
      },
      "langxiang": {
          "name": "朗乡",
          "code": "LXB",
          "pinyin": "langxiang",
          "suoxie": "lx",
          "other": "1242@lxi"
      },
      "longxian": {
          "name": "陇县",
          "code": "LXY",
          "pinyin": "longxian",
          "suoxie": "lx",
          "other": "1243@lxi"
      },
      "linxiang": {
          "name": "临湘",
          "code": "LXQ",
          "pinyin": "linxiang",
          "suoxie": "lx",
          "other": "1244@lxi"
      },
      "luxi": {
          "name": "芦溪",
          "code": "LUG",
          "pinyin": "luxi",
          "suoxie": "lx",
          "other": "1245@lxi"
      },
      "laixi": {
          "name": "莱西",
          "code": "LXK",
          "pinyin": "laixi",
          "suoxie": "lx",
          "other": "1246@lxi"
      },
      "luanxian": {
          "name": "滦县",
          "code": "UXP",
          "pinyin": "luanxian",
          "suoxie": "lx",
          "other": "1248@lya"
      },
      "lueyang": {
          "name": "略阳",
          "code": "LYY",
          "pinyin": "lueyang",
          "suoxie": "ly",
          "other": "1249@lya"
      },
      "laiyang": {
          "name": "莱阳",
          "code": "LYK",
          "pinyin": "laiyang",
          "suoxie": "ly",
          "other": "1250@lya"
      },
      "liaoyang": {
          "name": "辽阳",
          "code": "LYT",
          "pinyin": "liaoyang",
          "suoxie": "ly",
          "other": "1251@lyb"
      },
      "linyibei": {
          "name": "临沂北",
          "code": "UYK",
          "pinyin": "linyibei",
          "suoxie": "lyb",
          "other": "1252@lyd"
      },
      "lingyuandong": {
          "name": "凌源东",
          "code": "LDD",
          "pinyin": "lingyuandong",
          "suoxie": "lyd",
          "other": "1253@lyg"
      },
      "lianyungang": {
          "name": "连云港",
          "code": "UIH",
          "pinyin": "lianyungang",
          "suoxie": "lyg",
          "other": "1254@lyi"
      },
      "linying": {
          "name": "临颍",
          "code": "LNF",
          "pinyin": "linying",
          "suoxie": "ly",
          "other": "1255@lyi"
      },
      "laoying": {
          "name": "老营",
          "code": "LXL",
          "pinyin": "laoying",
          "suoxie": "ly",
          "other": "1256@lyo"
      },
      "longyou": {
          "name": "龙游",
          "code": "LMH",
          "pinyin": "longyou",
          "suoxie": "ly",
          "other": "1257@lyu"
      },
      "luoyuan": {
          "name": "罗源",
          "code": "LVS",
          "pinyin": "luoyuan",
          "suoxie": "ly",
          "other": "1258@lyu"
      },
      "linyuan": {
          "name": "林源",
          "code": "LYX",
          "pinyin": "linyuan",
          "suoxie": "ly",
          "other": "1259@lyu"
      },
      "lianyuan": {
          "name": "涟源",
          "code": "LAQ",
          "pinyin": "lianyuan",
          "suoxie": "ly",
          "other": "1260@lyu"
      },
      "laiyuan": {
          "name": "涞源",
          "code": "LYP",
          "pinyin": "laiyuan",
          "suoxie": "ly",
          "other": "1261@lyx"
      },
      "leiyangxi": {
          "name": "耒阳西",
          "code": "LPQ",
          "pinyin": "leiyangxi",
          "suoxie": "lyx",
          "other": "1262@lze"
      },
      "linze": {
          "name": "临泽",
          "code": "LEJ",
          "pinyin": "linze",
          "suoxie": "lz",
          "other": "1263@lzg"
      },
      "longzhuagou": {
          "name": "龙爪沟",
          "code": "LZT",
          "pinyin": "longzhuagou",
          "suoxie": "lzg",
          "other": "1264@lzh"
      },
      "leizhou": {
          "name": "雷州",
          "code": "UAQ",
          "pinyin": "leizhou",
          "suoxie": "lz",
          "other": "1265@lzh"
      },
      "liuzhi": {
          "name": "六枝",
          "code": "LIW",
          "pinyin": "liuzhi",
          "suoxie": "lz",
          "other": "1266@lzh"
      },
      "luzhai": {
          "name": "鹿寨",
          "code": "LIZ",
          "pinyin": "luzhai",
          "suoxie": "lz",
          "other": "1267@lzh"
      },
      "laizhou": {
          "name": "来舟",
          "code": "LZS",
          "pinyin": "laizhou",
          "suoxie": "lz",
          "other": "1268@lzh"
      },
      "longzhen": {
          "name": "龙镇",
          "code": "LZA",
          "pinyin": "longzhen",
          "suoxie": "lz",
          "other": "1269@lzh"
      },
      "lazha": {
          "name": "拉鲊",
          "code": "LEM",
          "pinyin": "lazha",
          "suoxie": "lz",
          "other": "1270@lzq"
      },
      "lanzhouxinqu": {
          "name": "兰州新区",
          "code": "LQJ",
          "pinyin": "lanzhouxinqu",
          "suoxie": "lzxq",
          "other": "1271@mas"
      },
      "maanshan": {
          "name": "马鞍山",
          "code": "MAH",
          "pinyin": "maanshan",
          "suoxie": "mas",
          "other": "1272@mba"
      },
      "maoba": {
          "name": "毛坝",
          "code": "MBY",
          "pinyin": "maoba",
          "suoxie": "mb",
          "other": "1273@mbg"
      },
      "maobaguan": {
          "name": "毛坝关",
          "code": "MGY",
          "pinyin": "maobaguan",
          "suoxie": "mbg",
          "other": "1274@mcb"
      },
      "machengbei": {
          "name": "麻城北",
          "code": "MBN",
          "pinyin": "machengbei",
          "suoxie": "mcb",
          "other": "1275@mch"
      },
      "mianchi": {
          "name": "渑池",
          "code": "MCF",
          "pinyin": "mianchi",
          "suoxie": "mc",
          "other": "1276@mch"
      },
      "mingcheng": {
          "name": "明城",
          "code": "MCL",
          "pinyin": "mingcheng",
          "suoxie": "mc",
          "other": "1277@mch"
      },
      "miaocheng": {
          "name": "庙城",
          "code": "MAP",
          "pinyin": "miaocheng",
          "suoxie": "mc",
          "other": "1278@mcn"
      },
      "mianchinan": {
          "name": "渑池南",
          "code": "MNF",
          "pinyin": "mianchinan",
          "suoxie": "mcn",
          "other": "1279@mcp"
      },
      "maocaoping": {
          "name": "茅草坪",
          "code": "KPM",
          "pinyin": "maocaoping",
          "suoxie": "mcp",
          "other": "1280@mdh"
      },
      "mengdonghe": {
          "name": "猛洞河",
          "code": "MUQ",
          "pinyin": "mengdonghe",
          "suoxie": "mdh",
          "other": "1281@mds"
      },
      "modaoshi": {
          "name": "磨刀石",
          "code": "MOB",
          "pinyin": "modaoshi",
          "suoxie": "mds",
          "other": "1282@mdu"
      },
      "midu": {
          "name": "弥渡",
          "code": "MDF",
          "pinyin": "midu",
          "suoxie": "md",
          "other": "1283@mes"
      },
      "maoershan": {
          "name": "帽儿山",
          "code": "MRB",
          "pinyin": "maoershan",
          "suoxie": "mes",
          "other": "1284@mga"
      },
      "minggang": {
          "name": "明港",
          "code": "MGN",
          "pinyin": "minggang",
          "suoxie": "mg",
          "other": "1285@mhk"
      },
      "meihekou": {
          "name": "梅河口",
          "code": "MHL",
          "pinyin": "meihekou",
          "suoxie": "mhk",
          "other": "1286@mhu"
      },
      "mahuang": {
          "name": "马皇",
          "code": "MHZ",
          "pinyin": "mahuang",
          "suoxie": "mh",
          "other": "1287@mjg"
      },
      "mengjiagang": {
          "name": "孟家岗",
          "code": "MGB",
          "pinyin": "mengjiagang",
          "suoxie": "mjg",
          "other": "1288@mla"
      },
      "meilan": {
          "name": "美兰",
          "code": "MHQ",
          "pinyin": "meilan",
          "suoxie": "ml",
          "other": "1289@mld"
      },
      "miluodong": {
          "name": "汨罗东",
          "code": "MQQ",
          "pinyin": "miluodong",
          "suoxie": "mld",
          "other": "1290@mlh"
      },
      "malianhe": {
          "name": "马莲河",
          "code": "MHB",
          "pinyin": "malianhe",
          "suoxie": "mlh",
          "other": "1291@mli"
      },
      "maoling": {
          "name": "茅岭",
          "code": "MLZ",
          "pinyin": "maoling",
          "suoxie": "ml",
          "other": "1292@mli"
      },
      "miaoling": {
          "name": "庙岭",
          "code": "MLL",
          "pinyin": "miaoling",
          "suoxie": "ml",
          "other": "1293@mli"
      },
      "maolin": {
          "name": "茂林",
          "code": "MLD",
          "pinyin": "maolin",
          "suoxie": "ml",
          "other": "1294@mli"
      },
      "muling": {
          "name": "穆棱",
          "code": "MLB",
          "pinyin": "muling",
          "suoxie": "ml",
          "other": "1295@mli"
      },
      "malin": {
          "name": "马林",
          "code": "MID",
          "pinyin": "malin",
          "suoxie": "ml",
          "other": "1296@mlo"
      },
      "malong": {
          "name": "马龙",
          "code": "MGM",
          "pinyin": "malong",
          "suoxie": "ml",
          "other": "1297@mlt"
      },
      "mulitu": {
          "name": "木里图",
          "code": "MUD",
          "pinyin": "mulitu",
          "suoxie": "mlt",
          "other": "1298@mlu"
      },
      "miluo": {
          "name": "汨罗",
          "code": "MLQ",
          "pinyin": "miluo",
          "suoxie": "ml",
          "other": "1299@mnh"
      },
      "manasihu": {
          "name": "玛纳斯湖",
          "code": "MNR",
          "pinyin": "manasihu",
          "suoxie": "mnsh",
          "other": "1300@mni"
      },
      "mianning": {
          "name": "冕宁",
          "code": "UGW",
          "pinyin": "mianning",
          "suoxie": "mn",
          "other": "1301@mpa"
      },
      "mupang": {
          "name": "沐滂",
          "code": "MPQ",
          "pinyin": "mupang",
          "suoxie": "mp",
          "other": "1302@mqh"
      },
      "maqiaohe": {
          "name": "马桥河",
          "code": "MQB",
          "pinyin": "maqiaohe",
          "suoxie": "mqh",
          "other": "1303@mqi"
      },
      "minqing": {
          "name": "闽清",
          "code": "MQS",
          "pinyin": "minqing",
          "suoxie": "mq",
          "other": "1304@mqu"
      },
      "minquan": {
          "name": "民权",
          "code": "MQF",
          "pinyin": "minquan",
          "suoxie": "mq",
          "other": "1305@msh"
      },
      "mingshuihe": {
          "name": "明水河",
          "code": "MUT",
          "pinyin": "mingshuihe",
          "suoxie": "msh",
          "other": "1306@msh"
      },
      "mashan": {
          "name": "麻山",
          "code": "MAB",
          "pinyin": "mashan",
          "suoxie": "ms",
          "other": "1307@msh"
      },
      "meishan": {
          "name": "眉山",
          "code": "MSW",
          "pinyin": "meishan",
          "suoxie": "ms",
          "other": "1308@msw"
      },
      "manshuiwan": {
          "name": "漫水湾",
          "code": "MKW",
          "pinyin": "manshuiwan",
          "suoxie": "msw",
          "other": "1309@msz"
      },
      "maoshezu": {
          "name": "茂舍祖",
          "code": "MOM",
          "pinyin": "maoshezu",
          "suoxie": "msz",
          "other": "1310@msz"
      },
      "mishazi": {
          "name": "米沙子",
          "code": "MST",
          "pinyin": "mishazi",
          "suoxie": "msz",
          "other": "1311@mxi"
      },
      "meixi": {
          "name": "美溪",
          "code": "MEB",
          "pinyin": "meixi",
          "suoxie": "mx",
          "other": "1312@mxi"
      },
      "mianxian": {
          "name": "勉县",
          "code": "MVY",
          "pinyin": "mianxian",
          "suoxie": "mx",
          "other": "1313@mya"
      },
      "mayang": {
          "name": "麻阳",
          "code": "MVQ",
          "pinyin": "mayang",
          "suoxie": "my",
          "other": "1314@myb"
      },
      "miyunbei": {
          "name": "密云北",
          "code": "MUP",
          "pinyin": "miyunbei",
          "suoxie": "myb",
          "other": "1315@myi"
      },
      "miyi": {
          "name": "米易",
          "code": "MMW",
          "pinyin": "miyi",
          "suoxie": "my",
          "other": "1316@myu"
      },
      "maiyuan": {
          "name": "麦园",
          "code": "MYS",
          "pinyin": "maiyuan",
          "suoxie": "my",
          "other": "1317@myu"
      },
      "moyu": {
          "name": "墨玉",
          "code": "MUR",
          "pinyin": "moyu",
          "suoxie": "my",
          "other": "1318@mzh"
      },
      "miaozhuang": {
          "name": "庙庄",
          "code": "MZJ",
          "pinyin": "miaozhuang",
          "suoxie": "mz",
          "other": "1319@mzh"
      },
      "mizhi": {
          "name": "米脂",
          "code": "MEY",
          "pinyin": "mizhi",
          "suoxie": "mz",
          "other": "1320@mzh"
      },
      "mingzhu": {
          "name": "明珠",
          "code": "MFQ",
          "pinyin": "mingzhu",
          "suoxie": "mz",
          "other": "1321@nan"
      },
      "ningan": {
          "name": "宁安",
          "code": "NAB",
          "pinyin": "ningan",
          "suoxie": "na",
          "other": "1322@nan"
      },
      "nongan": {
          "name": "农安",
          "code": "NAT",
          "pinyin": "nongan",
          "suoxie": "na",
          "other": "1323@nbs"
      },
      "nanboshan": {
          "name": "南博山",
          "code": "NBK",
          "pinyin": "nanboshan",
          "suoxie": "nbs",
          "other": "1324@nch"
      },
      "nanqiu": {
          "name": "南仇",
          "code": "NCK",
          "pinyin": "nanqiu",
          "suoxie": "nc",
          "other": "1325@ncs"
      },
      "nanchengsi": {
          "name": "南城司",
          "code": "NSP",
          "pinyin": "nanchengsi",
          "suoxie": "ncs",
          "other": "1326@ncu"
      },
      "ningcun": {
          "name": "宁村",
          "code": "NCZ",
          "pinyin": "ningcun",
          "suoxie": "nc",
          "other": "1327@nde"
      },
      "ningde": {
          "name": "宁德",
          "code": "NES",
          "pinyin": "ningde",
          "suoxie": "nd",
          "other": "1328@ngc"
      },
      "nanguancun": {
          "name": "南观村",
          "code": "NGP",
          "pinyin": "nanguancun",
          "suoxie": "ngc",
          "other": "1329@ngd"
      },
      "nangongdong": {
          "name": "南宫东",
          "code": "NFP",
          "pinyin": "nangongdong",
          "suoxie": "ngd",
          "other": "1330@ngl"
      },
      "nanguanling": {
          "name": "南关岭",
          "code": "NLT",
          "pinyin": "nanguanling",
          "suoxie": "ngl",
          "other": "1331@ngu"
      },
      "ningguo": {
          "name": "宁国",
          "code": "NNH",
          "pinyin": "ningguo",
          "suoxie": "ng",
          "other": "1332@nha"
      },
      "ninghai": {
          "name": "宁海",
          "code": "NHH",
          "pinyin": "ninghai",
          "suoxie": "nh",
          "other": "1333@nhb"
      },
      "nanhuabei": {
          "name": "南华北",
          "code": "NHS",
          "pinyin": "nanhuabei",
          "suoxie": "nhb",
          "other": "1334@nhc"
      },
      "nanhechuan": {
          "name": "南河川",
          "code": "NHJ",
          "pinyin": "nanhechuan",
          "suoxie": "nhc",
          "other": "1335@nhz"
      },
      "nihezi": {
          "name": "泥河子",
          "code": "NHD",
          "pinyin": "nihezi",
          "suoxie": "nhz",
          "other": "1336@nji"
      },
      "ningjia": {
          "name": "宁家",
          "code": "NVT",
          "pinyin": "ningjia",
          "suoxie": "nj",
          "other": "1337@nji"
      },
      "niujia": {
          "name": "牛家",
          "code": "NJB",
          "pinyin": "niujia",
          "suoxie": "nj",
          "other": "1339@nji"
      },
      "nengjia": {
          "name": "能家",
          "code": "NJD",
          "pinyin": "nengjia",
          "suoxie": "nj",
          "other": "1340@nko"
      },
      "nankou": {
          "name": "南口",
          "code": "NKP",
          "pinyin": "nankou",
          "suoxie": "nk",
          "other": "1341@nkq"
      },
      "nankouqian": {
          "name": "南口前",
          "code": "NKT",
          "pinyin": "nankouqian",
          "suoxie": "nkq",
          "other": "1342@nla"
      },
      "nanlang": {
          "name": "南朗",
          "code": "NNQ",
          "pinyin": "nanlang",
          "suoxie": "nl",
          "other": "1343@nli"
      },
      "nailin": {
          "name": "乃林",
          "code": "NLD",
          "pinyin": "nailin",
          "suoxie": "nl",
          "other": "1344@nlk"
      },
      "nileke": {
          "name": "尼勒克",
          "code": "NIR",
          "pinyin": "nileke",
          "suoxie": "nlk",
          "other": "1345@nlu"
      },
      "naluo": {
          "name": "那罗",
          "code": "ULZ",
          "pinyin": "naluo",
          "suoxie": "nl",
          "other": "1346@nlx"
      },
      "ninglingxian": {
          "name": "宁陵县",
          "code": "NLF",
          "pinyin": "ninglingxian",
          "suoxie": "nlx",
          "other": "1347@nma"
      },
      "naiman": {
          "name": "奈曼",
          "code": "NMD",
          "pinyin": "naiman",
          "suoxie": "nm",
          "other": "1348@nmi"
      },
      "ningming": {
          "name": "宁明",
          "code": "NMZ",
          "pinyin": "ningming",
          "suoxie": "nm",
          "other": "1349@nmu"
      },
      "nanmu": {
          "name": "南木",
          "code": "NMX",
          "pinyin": "nanmu",
          "suoxie": "nm",
          "other": "1350@npn"
      },
      "nanpingnan": {
          "name": "南平南",
          "code": "NNS",
          "pinyin": "nanpingnan",
          "suoxie": "npn",
          "other": "1351@npu"
      },
      "napu": {
          "name": "那铺",
          "code": "NPZ",
          "pinyin": "napu",
          "suoxie": "np",
          "other": "1352@nqi"
      },
      "nanqiao": {
          "name": "南桥",
          "code": "NQD",
          "pinyin": "nanqiao",
          "suoxie": "nq",
          "other": "1353@nqu"
      },
      "naqu": {
          "name": "那曲",
          "code": "NQO",
          "pinyin": "naqu",
          "suoxie": "nq",
          "other": "1354@nqu"
      },
      "nuanquan": {
          "name": "暖泉",
          "code": "NQJ",
          "pinyin": "nuanquan",
          "suoxie": "nq",
          "other": "1355@nta"
      },
      "nantai": {
          "name": "南台",
          "code": "NTT",
          "pinyin": "nantai",
          "suoxie": "nt",
          "other": "1356@nto"
      },
      "nantou": {
          "name": "南头",
          "code": "NOQ",
          "pinyin": "nantou",
          "suoxie": "nt",
          "other": "1357@nwu"
      },
      "ningwu": {
          "name": "宁武",
          "code": "NWV",
          "pinyin": "ningwu",
          "suoxie": "nw",
          "other": "1358@nwz"
      },
      "nanwanzi": {
          "name": "南湾子",
          "code": "NWP",
          "pinyin": "nanwanzi",
          "suoxie": "nwz",
          "other": "1359@nxb"
      },
      "nanxiangbei": {
          "name": "南翔北",
          "code": "NEH",
          "pinyin": "nanxiangbei",
          "suoxie": "nxb",
          "other": "1360@nxi"
      },
      "ningxiang": {
          "name": "宁乡",
          "code": "NXQ",
          "pinyin": "ningxiang",
          "suoxie": "nx",
          "other": "1361@nxi"
      },
      "neixiang": {
          "name": "内乡",
          "code": "NXF",
          "pinyin": "neixiang",
          "suoxie": "nx",
          "other": "1362@nxt"
      },
      "niuxintai": {
          "name": "牛心台",
          "code": "NXT",
          "pinyin": "niuxintai",
          "suoxie": "nxt",
          "other": "1363@nyu"
      },
      "nanyu": {
          "name": "南峪",
          "code": "NUP",
          "pinyin": "nanyu",
          "suoxie": "ny",
          "other": "1364@nzg"
      },
      "niangziguan": {
          "name": "娘子关",
          "code": "NIP",
          "pinyin": "niangziguan",
          "suoxie": "nzg",
          "other": "1365@nzh"
      },
      "nanzhao": {
          "name": "南召",
          "code": "NAF",
          "pinyin": "nanzhao",
          "suoxie": "nz",
          "other": "1366@nzm"
      },
      "nanzamu": {
          "name": "南杂木",
          "code": "NZT",
          "pinyin": "nanzamu",
          "suoxie": "nzm",
          "other": "1367@pan"
      },
      "pengan": {
          "name": "蓬安",
          "code": "PAW",
          "pinyin": "pengan",
          "suoxie": "pa",
          "other": "1368@pan"
      },
      "pingan": {
          "name": "平安",
          "code": "PAL",
          "pinyin": "pingan",
          "suoxie": "pa",
          "other": "1369@pay"
      },
      "pinganyi": {
          "name": "平安驿",
          "code": "PNO",
          "pinyin": "pinganyi",
          "suoxie": "pay",
          "other": "1370@paz"
      },
      "pananzhen": {
          "name": "磐安镇",
          "code": "PAJ",
          "pinyin": "pananzhen",
          "suoxie": "paz",
          "other": "1371@paz"
      },
      "pinganzhen": {
          "name": "平安镇",
          "code": "PZT",
          "pinyin": "pinganzhen",
          "suoxie": "paz",
          "other": "1372@pcd"
      },
      "puchengdong": {
          "name": "蒲城东",
          "code": "PEY",
          "pinyin": "puchengdong",
          "suoxie": "pcd",
          "other": "1373@pch"
      },
      "pucheng": {
          "name": "蒲城",
          "code": "PCY",
          "pinyin": "pucheng",
          "suoxie": "pc",
          "other": "1374@pde"
      },
      "peide": {
          "name": "裴德",
          "code": "PDB",
          "pinyin": "peide",
          "suoxie": "pd",
          "other": "1375@pdi"
      },
      "piandian": {
          "name": "偏店",
          "code": "PRP",
          "pinyin": "piandian",
          "suoxie": "pd",
          "other": "1376@pdx"
      },
      "pingdingshanxi": {
          "name": "平顶山西",
          "code": "BFF",
          "pinyin": "pingdingshanxi",
          "suoxie": "pdsx",
          "other": "1377@pdx"
      },
      "podixia": {
          "name": "坡底下",
          "code": "PXJ",
          "pinyin": "podixia",
          "suoxie": "pdx",
          "other": "1378@pet"
      },
      "piaoertun": {
          "name": "瓢儿屯",
          "code": "PRT",
          "pinyin": "piaoertun",
          "suoxie": "pet",
          "other": "1379@pfa"
      },
      "pingfang": {
          "name": "平房",
          "code": "PFB",
          "pinyin": "pingfang",
          "suoxie": "pf",
          "other": "1380@pga"
      },
      "pinggang": {
          "name": "平岗",
          "code": "PGL",
          "pinyin": "pinggang",
          "suoxie": "pg",
          "other": "1381@pgu"
      },
      "pingguan": {
          "name": "平关",
          "code": "PGM",
          "pinyin": "pingguan",
          "suoxie": "pg",
          "other": "1382@pgu"
      },
      "panguan": {
          "name": "盘关",
          "code": "PAM",
          "pinyin": "panguan",
          "suoxie": "pg",
          "other": "1383@pgu"
      },
      "pingguo": {
          "name": "平果",
          "code": "PGZ",
          "pinyin": "pingguo",
          "suoxie": "pg",
          "other": "1384@phb"
      },
      "paihuaibei": {
          "name": "徘徊北",
          "code": "PHP",
          "pinyin": "paihuaibei",
          "suoxie": "phb",
          "other": "1385@phk"
      },
      "pinghekou": {
          "name": "平河口",
          "code": "PHM",
          "pinyin": "pinghekou",
          "suoxie": "phk",
          "other": "1386@phu"
      },
      "pinghu": {
          "name": "平湖",
          "code": "PHQ",
          "pinyin": "pinghu",
          "suoxie": "ph",
          "other": "1387@pjb"
      },
      "panjinbei": {
          "name": "盘锦北",
          "code": "PBD",
          "pinyin": "panjinbei",
          "suoxie": "pjb",
          "other": "1388@pjd"
      },
      "panjiadian": {
          "name": "潘家店",
          "code": "PDP",
          "pinyin": "panjiadian",
          "suoxie": "pjd",
          "other": "1389@pkn"
      },
      "pikounan": {
          "name": "皮口南",
          "code": "PKT",
          "pinyin": "pikounan",
          "suoxie": "pk",
          "other": "1390@pld"
      },
      "pulandian": {
          "name": "普兰店",
          "code": "PLT",
          "pinyin": "pulandian",
          "suoxie": "pld",
          "other": "1391@pli"
      },
      "pianling": {
          "name": "偏岭",
          "code": "PNT",
          "pinyin": "pianling",
          "suoxie": "pl",
          "other": "1392@psh"
      },
      "pingshan": {
          "name": "平山",
          "code": "PSB",
          "pinyin": "pingshan",
          "suoxie": "ps",
          "other": "1393@psh"
      },
      "pengshan": {
          "name": "彭山",
          "code": "PSW",
          "pinyin": "pengshan",
          "suoxie": "ps",
          "other": "1394@psh"
      },
      "pishan": {
          "name": "皮山",
          "code": "PSR",
          "pinyin": "pishan",
          "suoxie": "ps",
          "other": "1395@psh"
      },
      "panshi": {
          "name": "磐石",
          "code": "PSL",
          "pinyin": "panshi",
          "suoxie": "ps",
          "other": "1396@psh"
      },
      "pingshe": {
          "name": "平社",
          "code": "PSV",
          "pinyin": "pingshe",
          "suoxie": "ps",
          "other": "1397@psh"
      },
      "pengshui": {
          "name": "彭水",
          "code": "PHW",
          "pinyin": "pengshui",
          "suoxie": "ps",
          "other": "1398@pta"
      },
      "pingtai": {
          "name": "平台",
          "code": "PVT",
          "pinyin": "pingtai",
          "suoxie": "pt",
          "other": "1399@pti"
      },
      "pingtian": {
          "name": "平田",
          "code": "PTM",
          "pinyin": "pingtian",
          "suoxie": "pt",
          "other": "1400@pti"
      },
      "putian": {
          "name": "莆田",
          "code": "PTS",
          "pinyin": "putian",
          "suoxie": "pt",
          "other": "1401@ptq"
      },
      "putaojing": {
          "name": "葡萄菁",
          "code": "PTW",
          "pinyin": "putaojing",
          "suoxie": "ptq",
          "other": "1402@pwa"
      },
      "puwan": {
          "name": "普湾",
          "code": "PWT",
          "pinyin": "puwan",
          "suoxie": "pw",
          "other": "1403@pwa"
      },
      "pingwang": {
          "name": "平旺",
          "code": "PWV",
          "pinyin": "pingwang",
          "suoxie": "pw",
          "other": "1404@pxg"
      },
      "pingxingguan": {
          "name": "平型关",
          "code": "PGV",
          "pinyin": "pingxingguan",
          "suoxie": "pxg",
          "other": "1405@pxi"
      },
      "puxiong": {
          "name": "普雄",
          "code": "POW",
          "pinyin": "puxiong",
          "suoxie": "px",
          "other": "1406@pxi"
      },
      "pixian": {
          "name": "郫县",
          "code": "PWW",
          "pinyin": "pixian",
          "suoxie": "px",
          "other": "1407@pya"
      },
      "pingyang": {
          "name": "平洋",
          "code": "PYX",
          "pinyin": "pingyang",
          "suoxie": "py",
          "other": "1408@pya"
      },
      "pengyang": {
          "name": "彭阳",
          "code": "PYJ",
          "pinyin": "pengyang",
          "suoxie": "py",
          "other": "1409@pya"
      },
      "pingyao": {
          "name": "平遥",
          "code": "PYV",
          "pinyin": "pingyao",
          "suoxie": "py",
          "other": "1410@pyi"
      },
      "pingyi": {
          "name": "平邑",
          "code": "PIK",
          "pinyin": "pingyi",
          "suoxie": "py",
          "other": "1411@pyp"
      },
      "pingyuanpu": {
          "name": "平原堡",
          "code": "PPJ",
          "pinyin": "pingyuanpu",
          "suoxie": "pyp",
          "other": "1412@pyu"
      },
      "pingyuan": {
          "name": "平原",
          "code": "PYK",
          "pinyin": "pingyuan",
          "suoxie": "py",
          "other": "1413@pyu"
      },
      "pingyu": {
          "name": "平峪",
          "code": "PYP",
          "pinyin": "pingyu",
          "suoxie": "py",
          "other": "1414@pze"
      },
      "pengze": {
          "name": "彭泽",
          "code": "PZG",
          "pinyin": "pengze",
          "suoxie": "pz",
          "other": "1415@pzh"
      },
      "pizhou": {
          "name": "邳州",
          "code": "PJH",
          "pinyin": "pizhou",
          "suoxie": "pz",
          "other": "1416@pzh"
      },
      "pingzhuang": {
          "name": "平庄",
          "code": "PZD",
          "pinyin": "pingzhuang",
          "suoxie": "pz",
          "other": "1417@pzi"
      },
      "paozi": {
          "name": "泡子",
          "code": "POD",
          "pinyin": "paozi",
          "suoxie": "pz",
          "other": "1418@pzn"
      },
      "pingzhuangnan": {
          "name": "平庄南",
          "code": "PND",
          "pinyin": "pingzhuangnan",
          "suoxie": "pzn",
          "other": "1419@qan"
      },
      "qianan": [
          {
              "name": "乾安",
              "code": "QOT",
              "pinyin": "qianan",
              "suoxie": "qa",
              "other": "1420@qan"
          },
          {
              "name": "迁安",
              "code": "QQP",
              "pinyin": "qianan",
              "suoxie": "qa",
              "other": "1422@qdb"
          }
      ],
      "qingan": {
          "name": "庆安",
          "code": "QAB",
          "pinyin": "qingan",
          "suoxie": "qa",
          "other": "1421@qan"
      },
      "qidongbei": {
          "name": "祁东北",
          "code": "QRQ",
          "pinyin": "qidongbei",
          "suoxie": "qd",
          "other": "1423@qdi"
      },
      "qidian": {
          "name": "七甸",
          "code": "QDM",
          "pinyin": "qidian",
          "suoxie": "qd",
          "other": "1424@qfd"
      },
      "qufudong": {
          "name": "曲阜东",
          "code": "QAK",
          "pinyin": "qufudong",
          "suoxie": "qfd",
          "other": "1425@qfe"
      },
      "qingfeng": {
          "name": "庆丰",
          "code": "QFT",
          "pinyin": "qingfeng",
          "suoxie": "qf",
          "other": "1426@qft"
      },
      "qifengta": {
          "name": "奇峰塔",
          "code": "QVP",
          "pinyin": "qifengta",
          "suoxie": "qft",
          "other": "1427@qfu"
      },
      "qufu": {
          "name": "曲阜",
          "code": "QFK",
          "pinyin": "qufu",
          "suoxie": "qf",
          "other": "1428@qha"
      },
      "qionghai": {
          "name": "琼海",
          "code": "QYQ",
          "pinyin": "qionghai",
          "suoxie": "qh",
          "other": "1429@qhd"
      },
      "qinhuangdao": {
          "name": "秦皇岛",
          "code": "QTP",
          "pinyin": "qinhuangdao",
          "suoxie": "qhd",
          "other": "1430@qhe"
      },
      "qianhe": {
          "name": "千河",
          "code": "QUY",
          "pinyin": "qianhe",
          "suoxie": "qh",
          "other": "1431@qhe"
      },
      "qinghe": {
          "name": "清河",
          "code": "QIP",
          "pinyin": "qinghe",
          "suoxie": "qh",
          "other": "1432@qhm"
      },
      "qinghemen": {
          "name": "清河门",
          "code": "QHD",
          "pinyin": "qinghemen",
          "suoxie": "qhm",
          "other": "1433@qhy"
      },
      "qinghuayuan": {
          "name": "清华园",
          "code": "QHP",
          "pinyin": "qinghuayuan",
          "suoxie": "qhy",
          "other": "1434@qji"
      },
      "quanjiao": {
          "name": "全椒",
          "code": "INH",
          "pinyin": "quanjiao",
          "suoxie": "qj",
          "other": "1435@qji"
      },
      "qujiu": {
          "name": "渠旧",
          "code": "QJZ",
          "pinyin": "qujiu",
          "suoxie": "qj",
          "other": "1436@qji"
      },
      "qinjia": {
          "name": "秦家",
          "code": "QJB",
          "pinyin": "qinjia",
          "suoxie": "qj",
          "other": "1438@qji"
      },
      "qijiang": {
          "name": "綦江",
          "code": "QJW",
          "pinyin": "qijiang",
          "suoxie": "qj",
          "other": "1439@qjp"
      },
      "qijiapu": {
          "name": "祁家堡",
          "code": "QBT",
          "pinyin": "qijiapu",
          "suoxie": "qjp",
          "other": "1440@qjx"
      },
      "qingjianxian": {
          "name": "清涧县",
          "code": "QNY",
          "pinyin": "qingjianxian",
          "suoxie": "qjx",
          "other": "1441@qjz"
      },
      "qinjiazhuang": {
          "name": "秦家庄",
          "code": "QZV",
          "pinyin": "qinjiazhuang",
          "suoxie": "qjz",
          "other": "1442@qlh"
      },
      "qilihe": {
          "name": "七里河",
          "code": "QLD",
          "pinyin": "qilihe",
          "suoxie": "qlh",
          "other": "1443@qli"
      },
      "qinling": {
          "name": "秦岭",
          "code": "QLY",
          "pinyin": "qinling",
          "suoxie": "ql",
          "other": "1444@qli"
      },
      "quli": {
          "name": "渠黎",
          "code": "QLZ",
          "pinyin": "quli",
          "suoxie": "ql",
          "other": "1445@qlo"
      },
      "qinglong": {
          "name": "青龙",
          "code": "QIB",
          "pinyin": "qinglong",
          "suoxie": "ql",
          "other": "1446@qls"
      },
      "qinglongshan": {
          "name": "青龙山",
          "code": "QGH",
          "pinyin": "qinglongshan",
          "suoxie": "qls",
          "other": "1447@qme"
      },
      "qimen": {
          "name": "祁门",
          "code": "QIH",
          "pinyin": "qimen",
          "suoxie": "qm",
          "other": "1448@qmt"
      },
      "qianmotou": {
          "name": "前磨头",
          "code": "QMP",
          "pinyin": "qianmotou",
          "suoxie": "qmt",
          "other": "1449@qsh"
      },
      "qingshan": {
          "name": "青山",
          "code": "QSB",
          "pinyin": "qingshan",
          "suoxie": "qs",
          "other": "1450@qsh"
      },
      "queshan": {
          "name": "确山",
          "code": "QSN",
          "pinyin": "queshan",
          "suoxie": "qs",
          "other": "1451@qsh"
      },
      "qianshan": {
          "name": "前山",
          "code": "QXQ",
          "pinyin": "qianshan",
          "suoxie": "qs",
          "other": "1452@qsh"
      },
      "qingshui": {
          "name": "清水",
          "code": "QUJ",
          "pinyin": "qingshui",
          "suoxie": "qs",
          "other": "1453@qsy"
      },
      "qishuyan": {
          "name": "戚墅堰",
          "code": "QYH",
          "pinyin": "qishuyan",
          "suoxie": "qsy",
          "other": "1454@qti"
      },
      "qingtian": {
          "name": "青田",
          "code": "QVH",
          "pinyin": "qingtian",
          "suoxie": "qt",
          "other": "1455@qto"
      },
      "qiaotou": {
          "name": "桥头",
          "code": "QAT",
          "pinyin": "qiaotou",
          "suoxie": "qt",
          "other": "1456@qtx"
      },
      "qingtongxia": {
          "name": "青铜峡",
          "code": "QTJ",
          "pinyin": "qingtongxia",
          "suoxie": "qtx",
          "other": "1457@qwe"
      },
      "qianwei": {
          "name": "前卫",
          "code": "QWD",
          "pinyin": "qianwei",
          "suoxie": "qw",
          "other": "1458@qwt"
      },
      "qianweitang": {
          "name": "前苇塘",
          "code": "QWP",
          "pinyin": "qianweitang",
          "suoxie": "qwt",
          "other": "1459@qxi"
      },
      "quxian": {
          "name": "渠县",
          "code": "QRW",
          "pinyin": "quxian",
          "suoxie": "qx",
          "other": "1460@qxi"
      },
      "qixian": {
          "name": "祁县",
          "code": "QXV",
          "pinyin": "qixian",
          "suoxie": "qx",
          "other": "1461@qxi"
      },
      "qingxian": {
          "name": "青县",
          "code": "QXP",
          "pinyin": "qingxian",
          "suoxie": "qx",
          "other": "1462@qxi"
      },
      "qiaoxi": {
          "name": "桥西",
          "code": "QXJ",
          "pinyin": "qiaoxi",
          "suoxie": "qx",
          "other": "1463@qxu"
      },
      "qingxu": {
          "name": "清徐",
          "code": "QUV",
          "pinyin": "qingxu",
          "suoxie": "qx",
          "other": "1464@qxy"
      },
      "qixiaying": {
          "name": "旗下营",
          "code": "QXC",
          "pinyin": "qixiaying",
          "suoxie": "qxy",
          "other": "1465@qya"
      },
      "qianyang": {
          "name": "千阳",
          "code": "QOY",
          "pinyin": "qianyang",
          "suoxie": "qy",
          "other": "1466@qya"
      },
      "qinyang": {
          "name": "沁阳",
          "code": "QYF",
          "pinyin": "qinyang",
          "suoxie": "qy",
          "other": "1467@qya"
      },
      "quanyang": {
          "name": "泉阳",
          "code": "QYL",
          "pinyin": "quanyang",
          "suoxie": "qy",
          "other": "1468@qyb"
      },
      "qiyangbei": {
          "name": "祁阳北",
          "code": "QVQ",
          "pinyin": "qiyangbei",
          "suoxie": "qy",
          "other": "1469@qyi"
      },
      "qiying": {
          "name": "七营",
          "code": "QYJ",
          "pinyin": "qiying",
          "suoxie": "qy",
          "other": "1470@qys"
      },
      "qingyangshan": {
          "name": "庆阳山",
          "code": "QSJ",
          "pinyin": "qingyangshan",
          "suoxie": "qys",
          "other": "1471@qyu"
      },
      "qingyuan": [
          {
              "name": "清远",
              "code": "QBQ",
              "pinyin": "qingyuan",
              "suoxie": "qy",
              "other": "1472@qyu"
          },
          {
              "name": "清原",
              "code": "QYT",
              "pinyin": "qingyuan",
              "suoxie": "qy",
              "other": "1473@qzd"
          }
      ],
      "qinzhoudong": {
          "name": "钦州东",
          "code": "QDZ",
          "pinyin": "qinzhoudong",
          "suoxie": "qzd",
          "other": "1474@qzh"
      },
      "qinzhou": {
          "name": "钦州",
          "code": "QRZ",
          "pinyin": "qinzhou",
          "suoxie": "qz",
          "other": "1475@qzs"
      },
      "qingzhoushi": {
          "name": "青州市",
          "code": "QZK",
          "pinyin": "qingzhoushi",
          "suoxie": "qzs",
          "other": "1476@ran"
      },
      "ruian": {
          "name": "瑞安",
          "code": "RAH",
          "pinyin": "ruian",
          "suoxie": "ra",
          "other": "1477@rch"
      },
      "rongchang": {
          "name": "荣昌",
          "code": "RCW",
          "pinyin": "rongchang",
          "suoxie": "rc",
          "other": "1478@rch"
      },
      "ruichang": {
          "name": "瑞昌",
          "code": "RCG",
          "pinyin": "ruichang",
          "suoxie": "rc",
          "other": "1479@rga"
      },
      "rugao": {
          "name": "如皋",
          "code": "RBH",
          "pinyin": "rugao",
          "suoxie": "rg",
          "other": "1480@rgu"
      },
      "ronggui": {
          "name": "容桂",
          "code": "RUQ",
          "pinyin": "ronggui",
          "suoxie": "rg",
          "other": "1481@rqi"
      },
      "renqiu": {
          "name": "任丘",
          "code": "RQP",
          "pinyin": "renqiu",
          "suoxie": "rq",
          "other": "1482@rsh"
      },
      "rushan": {
          "name": "乳山",
          "code": "ROK",
          "pinyin": "rushan",
          "suoxie": "rs",
          "other": "1483@rsh"
      },
      "rongshui": {
          "name": "融水",
          "code": "RSZ",
          "pinyin": "rongshui",
          "suoxie": "rs",
          "other": "1484@rsh"
      },
      "reshui": {
          "name": "热水",
          "code": "RSD",
          "pinyin": "reshui",
          "suoxie": "rs",
          "other": "1485@rxi"
      },
      "rongxian": {
          "name": "容县",
          "code": "RXZ",
          "pinyin": "rongxian",
          "suoxie": "rx",
          "other": "1486@rya"
      },
      "raoyang": {
          "name": "饶阳",
          "code": "RVP",
          "pinyin": "raoyang",
          "suoxie": "ry",
          "other": "1487@rya"
      },
      "ruyang": {
          "name": "汝阳",
          "code": "RYF",
          "pinyin": "ruyang",
          "suoxie": "ry",
          "other": "1488@ryh"
      },
      "raoyanghe": {
          "name": "绕阳河",
          "code": "RHD",
          "pinyin": "raoyanghe",
          "suoxie": "ryh",
          "other": "1489@rzh"
      },
      "ruzhou": {
          "name": "汝州",
          "code": "ROF",
          "pinyin": "ruzhou",
          "suoxie": "rz",
          "other": "1490@sba"
      },
      "shiba": {
          "name": "石坝",
          "code": "OBJ",
          "pinyin": "shiba",
          "suoxie": "sb",
          "other": "1491@sbc"
      },
      "shangbancheng": {
          "name": "上板城",
          "code": "SBP",
          "pinyin": "shangbancheng",
          "suoxie": "sbc",
          "other": "1492@sbi"
      },
      "shibing": {
          "name": "施秉",
          "code": "AQW",
          "pinyin": "shibing",
          "suoxie": "sb",
          "other": "1493@sbn"
      },
      "shangbanchengnan": {
          "name": "上板城南",
          "code": "OBP",
          "pinyin": "shangbanchengnan",
          "suoxie": "sbcn",
          "other": "1494@sby"
      },
      "shiboyuan": {
          "name": "世博园",
          "code": "ZWT",
          "pinyin": "shiboyuan",
          "suoxie": "sby",
          "other": "1495@scb"
      },
      "shuangchengbei": {
          "name": "双城北",
          "code": "SBB",
          "pinyin": "shuangchengbei",
          "suoxie": "scb",
          "other": "1496@sch"
      },
      "shucheng": {
          "name": "舒城",
          "code": "OCH",
          "pinyin": "shucheng",
          "suoxie": "sc",
          "other": "1497@sch"
      },
      "shangcheng": {
          "name": "商城",
          "code": "SWN",
          "pinyin": "shangcheng",
          "suoxie": "sc",
          "other": "1498@sch"
      },
      "shache": {
          "name": "莎车",
          "code": "SCR",
          "pinyin": "shache",
          "suoxie": "sc",
          "other": "1499@sch"
      },
      "shunchang": {
          "name": "顺昌",
          "code": "SCS",
          "pinyin": "shunchang",
          "suoxie": "sc",
          "other": "1500@sch"
      },
      "shenchi": {
          "name": "神池",
          "code": "SMV",
          "pinyin": "shenchi",
          "suoxie": "sc",
          "other": "1501@sch"
      },
      "shacheng": {
          "name": "沙城",
          "code": "SCP",
          "pinyin": "shacheng",
          "suoxie": "sc",
          "other": "1502@sch"
      },
      "shicheng": {
          "name": "石城",
          "code": "SCT",
          "pinyin": "shicheng",
          "suoxie": "sc",
          "other": "1503@scz"
      },
      "shanchengzhen": {
          "name": "山城镇",
          "code": "SCL",
          "pinyin": "shanchengzhen",
          "suoxie": "scz",
          "other": "1504@sda"
      },
      "shandan": {
          "name": "山丹",
          "code": "SDJ",
          "pinyin": "shandan",
          "suoxie": "sd",
          "other": "1505@sde"
      },
      "shunde": {
          "name": "顺德",
          "code": "ORQ",
          "pinyin": "shunde",
          "suoxie": "sd",
          "other": "1506@sde"
      },
      "suide": {
          "name": "绥德",
          "code": "ODY",
          "pinyin": "suide",
          "suoxie": "sd",
          "other": "1507@sdo"
      },
      "shuidong": {
          "name": "水洞",
          "code": "SIL",
          "pinyin": "shuidong",
          "suoxie": "sd",
          "other": "1508@sdu"
      },
      "shangdu": {
          "name": "商都",
          "code": "SXC",
          "pinyin": "shangdu",
          "suoxie": "sd",
          "other": "1509@sdu"
      },
      "shidu": {
          "name": "十渡",
          "code": "SEP",
          "pinyin": "shidu",
          "suoxie": "sd",
          "other": "1510@sdw"
      },
      "sidaowan": {
          "name": "四道湾",
          "code": "OUD",
          "pinyin": "sidaowan",
          "suoxie": "sdw",
          "other": "1511@sdy"
      },
      "shundexueyuan": {
          "name": "顺德学院",
          "code": "OJQ",
          "pinyin": "shundexueyuan",
          "suoxie": "sdxy",
          "other": "1512@sfa"
      },
      "shenfang": {
          "name": "绅坊",
          "code": "OLH",
          "pinyin": "shenfang",
          "suoxie": "sf",
          "other": "1513@sfe"
      },
      "shuangfeng": {
          "name": "双丰",
          "code": "OFB",
          "pinyin": "shuangfeng",
          "suoxie": "sf",
          "other": "1514@sft"
      },
      "sifangtai": {
          "name": "四方台",
          "code": "STB",
          "pinyin": "sifangtai",
          "suoxie": "sft",
          "other": "1515@sfu"
      },
      "shuifu": {
          "name": "水富",
          "code": "OTW",
          "pinyin": "shuifu",
          "suoxie": "sf",
          "other": "1516@sgk"
      },
      "sanguankou": {
          "name": "三关口",
          "code": "OKJ",
          "pinyin": "sanguankou",
          "suoxie": "sgk",
          "other": "1517@sgl"
      },
      "sanggendalai": {
          "name": "桑根达来",
          "code": "OGC",
          "pinyin": "sanggendalai",
          "suoxie": "sgdl",
          "other": "1518@sgu"
      },
      "shaoguan": {
          "name": "韶关",
          "code": "SNQ",
          "pinyin": "shaoguan",
          "suoxie": "sg",
          "other": "1519@sgz"
      },
      "shanggaozhen": {
          "name": "上高镇",
          "code": "SVK",
          "pinyin": "shanggaozhen",
          "suoxie": "sgz",
          "other": "1520@sha"
      },
      "shanghang": {
          "name": "上杭",
          "code": "JBS",
          "pinyin": "shanghang",
          "suoxie": "sh",
          "other": "1521@sha"
      },
      "shahai": {
          "name": "沙海",
          "code": "SED",
          "pinyin": "shahai",
          "suoxie": "sh",
          "other": "1522@she"
      },
      "songhe": {
          "name": "松河",
          "code": "SBM",
          "pinyin": "songhe",
          "suoxie": "sh",
          "other": "1523@she"
      },
      "shahe": {
          "name": "沙河",
          "code": "SHP",
          "pinyin": "shahe",
          "suoxie": "sh",
          "other": "1524@shk"
      },
      "shahekou": {
          "name": "沙河口",
          "code": "SKT",
          "pinyin": "shahekou",
          "suoxie": "shk",
          "other": "1525@shl"
      },
      "saihantala": {
          "name": "赛汗塔拉",
          "code": "SHC",
          "pinyin": "saihantala",
          "suoxie": "shtl",
          "other": "1526@shs"
      },
      "shaheshi": {
          "name": "沙河市",
          "code": "VOP",
          "pinyin": "shaheshi",
          "suoxie": "shs",
          "other": "1527@shs"
      },
      "shahousuo": {
          "name": "沙后所",
          "code": "SSD",
          "pinyin": "shahousuo",
          "suoxie": "shs",
          "other": "1528@sht"
      },
      "shanhetun": {
          "name": "山河屯",
          "code": "SHL",
          "pinyin": "shanhetun",
          "suoxie": "sht",
          "other": "1529@shx"
      },
      "sanhexian": {
          "name": "三河县",
          "code": "OXP",
          "pinyin": "sanhexian",
          "suoxie": "shx",
          "other": "1530@shy"
      },
      "siheyong": {
          "name": "四合永",
          "code": "OHD",
          "pinyin": "siheyong",
          "suoxie": "shy",
          "other": "1531@shz"
      },
      "sanhuizhen": {
          "name": "三汇镇",
          "code": "OZW",
          "pinyin": "sanhuizhen",
          "suoxie": "shz",
          "other": "1532@shz"
      },
      "shuanghezhen": {
          "name": "双河镇",
          "code": "SEL",
          "pinyin": "shuanghezhen",
          "suoxie": "shz",
          "other": "1533@shz"
      },
      "shihezi": {
          "name": "石河子",
          "code": "SZR",
          "pinyin": "shihezi",
          "suoxie": "shz",
          "other": "1534@shz"
      },
      "sanhezhuang": {
          "name": "三合庄",
          "code": "SVP",
          "pinyin": "sanhezhuang",
          "suoxie": "shz",
          "other": "1535@sjd"
      },
      "sanjiadian": {
          "name": "三家店",
          "code": "ODP",
          "pinyin": "sanjiadian",
          "suoxie": "sjd",
          "other": "1536@sjh"
      },
      "shuijiahu": {
          "name": "水家湖",
          "code": "SQH",
          "pinyin": "shuijiahu",
          "suoxie": "sjh",
          "other": "1537@sjh"
      },
      "shenjiahe": {
          "name": "沈家河",
          "code": "OJJ",
          "pinyin": "shenjiahe",
          "suoxie": "sjh",
          "other": "1538@sjh"
      },
      "songjianghe": {
          "name": "松江河",
          "code": "SJL",
          "pinyin": "songjianghe",
          "suoxie": "sjh",
          "other": "1539@sji"
      },
      "shangjia": {
          "name": "尚家",
          "code": "SJB",
          "pinyin": "shangjia",
          "suoxie": "sj",
          "other": "1540@sji"
      },
      "sunjia": {
          "name": "孙家",
          "code": "SUB",
          "pinyin": "sunjia",
          "suoxie": "sj",
          "other": "1541@sji"
      },
      "shenjia": {
          "name": "沈家",
          "code": "OJB",
          "pinyin": "shenjia",
          "suoxie": "sj",
          "other": "1542@sji"
      },
      "shuangji": {
          "name": "双吉",
          "code": "SML",
          "pinyin": "shuangji",
          "suoxie": "sj",
          "other": "1543@sji"
      },
      "songjiang": {
          "name": "松江",
          "code": "SAH",
          "pinyin": "songjiang",
          "suoxie": "sj",
          "other": "1544@sjk"
      },
      "sanjiangkou": {
          "name": "三江口",
          "code": "SKD",
          "pinyin": "sanjiangkou",
          "suoxie": "sjk",
          "other": "1545@sjl"
      },
      "sijialing": {
          "name": "司家岭",
          "code": "OLK",
          "pinyin": "sijialing",
          "suoxie": "sjl",
          "other": "1546@sjn"
      },
      "songjiangnan": {
          "name": "松江南",
          "code": "IMH",
          "pinyin": "songjiangnan",
          "suoxie": "sjn",
          "other": "1547@sjn"
      },
      "shijingshannan": {
          "name": "石景山南",
          "code": "SRP",
          "pinyin": "shijingshannan",
          "suoxie": "sjsn",
          "other": "1548@sjt"
      },
      "shaojiatang": {
          "name": "邵家堂",
          "code": "SJJ",
          "pinyin": "shaojiatang",
          "suoxie": "sjt",
          "other": "1549@sjx"
      },
      "sanjiangxian": {
          "name": "三江县",
          "code": "SOZ",
          "pinyin": "sanjiangxian",
          "suoxie": "sjx",
          "other": "1550@sjz"
      },
      "sanjiazhai": {
          "name": "三家寨",
          "code": "SMM",
          "pinyin": "sanjiazhai",
          "suoxie": "sjz",
          "other": "1551@sjz"
      },
      "shijiazi": {
          "name": "十家子",
          "code": "SJD",
          "pinyin": "shijiazi",
          "suoxie": "sjz",
          "other": "1552@sjz"
      },
      "songjiangzhen": {
          "name": "松江镇",
          "code": "OZL",
          "pinyin": "songjiangzhen",
          "suoxie": "sjz",
          "other": "1553@sjz"
      },
      "shijiazui": {
          "name": "施家嘴",
          "code": "SHM",
          "pinyin": "shijiazui",
          "suoxie": "sjz",
          "other": "1554@sjz"
      },
      "shenjingzi": {
          "name": "深井子",
          "code": "SWT",
          "pinyin": "shenjingzi",
          "suoxie": "sjz",
          "other": "1555@sld"
      },
      "shilidian": {
          "name": "什里店",
          "code": "OMP",
          "pinyin": "shilidian",
          "suoxie": "sld",
          "other": "1556@sle"
      },
      "shule": {
          "name": "疏勒",
          "code": "SUR",
          "pinyin": "shule",
          "suoxie": "sl",
          "other": "1557@slh"
      },
      "shulehe": {
          "name": "疏勒河",
          "code": "SHJ",
          "pinyin": "shulehe",
          "suoxie": "slh",
          "other": "1558@slh"
      },
      "shelihu": {
          "name": "舍力虎",
          "code": "VLD",
          "pinyin": "shelihu",
          "suoxie": "slh",
          "other": "1559@sli"
      },
      "shilin": [
          {
              "name": "石磷",
              "code": "SPB",
              "pinyin": "shilin",
              "suoxie": "sl",
              "other": "1560@sli"
          },
          {
              "name": "石林",
              "code": "SLM",
              "pinyin": "shilin",
              "suoxie": "sl",
              "other": "1561@sli"
          }
      ],
      "shuangliao": {
          "name": "双辽",
          "code": "ZJD",
          "pinyin": "shuangliao",
          "suoxie": "sl",
          "other": "1562@sli"
      },
      "suiling": {
          "name": "绥棱",
          "code": "SIB",
          "pinyin": "suiling",
          "suoxie": "sl",
          "other": "1563@sli"
      },
      "shiling": {
          "name": "石岭",
          "code": "SOL",
          "pinyin": "shiling",
          "suoxie": "sl",
          "other": "1564@sln"
      },
      "shilinnan": {
          "name": "石林南",
          "code": "LNM",
          "pinyin": "shilinnan",
          "suoxie": "sln",
          "other": "1565@slo"
      },
      "shilong": {
          "name": "石龙",
          "code": "SLQ",
          "pinyin": "shilong",
          "suoxie": "sl",
          "other": "1566@slq"
      },
      "salaqi": {
          "name": "萨拉齐",
          "code": "SLC",
          "pinyin": "salaqi",
          "suoxie": "slq",
          "other": "1567@slu"
      },
      "suolun": {
          "name": "索伦",
          "code": "SNT",
          "pinyin": "suolun",
          "suoxie": "sl",
          "other": "1568@slu"
      },
      "shangluo": {
          "name": "商洛",
          "code": "OLY",
          "pinyin": "shangluo",
          "suoxie": "sl",
          "other": "1569@slz"
      },
      "shalingzi": {
          "name": "沙岭子",
          "code": "SLP",
          "pinyin": "shalingzi",
          "suoxie": "slz",
          "other": "1570@smb"
      },
      "shimenxianbei": {
          "name": "石门县北",
          "code": "VFQ",
          "pinyin": "shimenxianbei",
          "suoxie": "smxb",
          "other": "1571@smn"
      },
      "sanmenxianan": {
          "name": "三门峡南",
          "code": "SCF",
          "pinyin": "sanmenxianan",
          "suoxie": "smxn",
          "other": "1572@smx"
      },
      "sanmenxian": {
          "name": "三门县",
          "code": "OQH",
          "pinyin": "sanmenxian",
          "suoxie": "smx",
          "other": "1573@smx"
      },
      "shimenxian": {
          "name": "石门县",
          "code": "OMQ",
          "pinyin": "shimenxian",
          "suoxie": "smx",
          "other": "1574@smx"
      },
      "sanmenxiaxi": {
          "name": "三门峡西",
          "code": "SXF",
          "pinyin": "sanmenxiaxi",
          "suoxie": "smxx",
          "other": "1575@sni"
      },
      "suning": {
          "name": "肃宁",
          "code": "SYP",
          "pinyin": "suning",
          "suoxie": "sn",
          "other": "1576@son"
      },
      "song": {
          "name": "宋",
          "code": "SOB",
          "pinyin": "song",
          "suoxie": "son",
          "other": "1577@spa"
      },
      "shuangpai": {
          "name": "双牌",
          "code": "SBZ",
          "pinyin": "shuangpai",
          "suoxie": "sp",
          "other": "1578@spd"
      },
      "sipingdong": {
          "name": "四平东",
          "code": "PPT",
          "pinyin": "sipingdong",
          "suoxie": "spd",
          "other": "1579@spi"
      },
      "suiping": {
          "name": "遂平",
          "code": "SON",
          "pinyin": "suiping",
          "suoxie": "sp",
          "other": "1580@spt"
      },
      "shapotou": {
          "name": "沙坡头",
          "code": "SFJ",
          "pinyin": "shapotou",
          "suoxie": "spt",
          "other": "1581@sqi"
      },
      "shaqiao": {
          "name": "沙桥",
          "code": "SQM",
          "pinyin": "shaqiao",
          "suoxie": "sq",
          "other": "1582@sqn"
      },
      "shangqiunan": {
          "name": "商丘南",
          "code": "SPF",
          "pinyin": "shangqiunan",
          "suoxie": "sqn",
          "other": "1583@squ"
      },
      "shuiquan": {
          "name": "水泉",
          "code": "SID",
          "pinyin": "shuiquan",
          "suoxie": "sq",
          "other": "1584@sqx"
      },
      "shiquanxian": {
          "name": "石泉县",
          "code": "SXY",
          "pinyin": "shiquanxian",
          "suoxie": "sqx",
          "other": "1585@sqz"
      },
      "shiqiaozi": {
          "name": "石桥子",
          "code": "SQT",
          "pinyin": "shiqiaozi",
          "suoxie": "sqz",
          "other": "1586@src"
      },
      "shirencheng": {
          "name": "石人城",
          "code": "SRB",
          "pinyin": "shirencheng",
          "suoxie": "src",
          "other": "1587@sre"
      },
      "shiren": {
          "name": "石人",
          "code": "SRL",
          "pinyin": "shiren",
          "suoxie": "sr",
          "other": "1588@ssh"
      },
      "shanshi": {
          "name": "山市",
          "code": "SQB",
          "pinyin": "shanshi",
          "suoxie": "ss",
          "other": "1589@ssh"
      },
      "shenshu": {
          "name": "神树",
          "code": "SWB",
          "pinyin": "shenshu",
          "suoxie": "ss",
          "other": "1590@ssh"
      },
      "shanshan": {
          "name": "鄯善",
          "code": "SSR",
          "pinyin": "shanshan",
          "suoxie": "ss",
          "other": "1591@ssh"
      },
      "sanshui": {
          "name": "三水",
          "code": "SJQ",
          "pinyin": "sanshui",
          "suoxie": "ss",
          "other": "1592@ssh"
      },
      "sishui": {
          "name": "泗水",
          "code": "OSK",
          "pinyin": "sishui",
          "suoxie": "ss",
          "other": "1593@ssh"
      },
      "shishan": [
          {
              "name": "石山",
              "code": "SAD",
              "pinyin": "shishan",
              "suoxie": "ss",
              "other": "1594@ssh"
          },
          {
              "name": "狮山",
              "code": "KSQ",
              "pinyin": "shishan",
              "suoxie": "ss",
              "other": "2537@ssn"
          }
      ],
      "songshu": {
          "name": "松树",
          "code": "SFT",
          "pinyin": "songshu",
          "suoxie": "ss",
          "other": "1595@ssh"
      },
      "shoushan": {
          "name": "首山",
          "code": "SAT",
          "pinyin": "shoushan",
          "suoxie": "ss",
          "other": "1596@ssj"
      },
      "sanshijia": {
          "name": "三十家",
          "code": "SRD",
          "pinyin": "sanshijia",
          "suoxie": "ssj",
          "other": "1597@ssp"
      },
      "sanshilipu": {
          "name": "三十里堡",
          "code": "SST",
          "pinyin": "sanshilipu",
          "suoxie": "sslp",
          "other": "1598@ssz"
      },
      "songshuzhen": {
          "name": "松树镇",
          "code": "SSL",
          "pinyin": "songshuzhen",
          "suoxie": "ssz",
          "other": "1599@sta"
      },
      "songtao": {
          "name": "松桃",
          "code": "MZQ",
          "pinyin": "songtao",
          "suoxie": "st",
          "other": "1600@sth"
      },
      "suotuhan": {
          "name": "索图罕",
          "code": "SHX",
          "pinyin": "suotuhan",
          "suoxie": "sth",
          "other": "1601@stj"
      },
      "santangji": {
          "name": "三堂集",
          "code": "SDH",
          "pinyin": "santangji",
          "suoxie": "stj",
          "other": "1602@sto"
      },
      "shitou": {
          "name": "石头",
          "code": "OTB",
          "pinyin": "shitou",
          "suoxie": "st",
          "other": "1603@sto"
      },
      "shentou": {
          "name": "神头",
          "code": "SEV",
          "pinyin": "shentou",
          "suoxie": "st",
          "other": "1604@stu"
      },
      "shatuo": {
          "name": "沙沱",
          "code": "SFM",
          "pinyin": "shatuo",
          "suoxie": "st",
          "other": "1605@swa"
      },
      "shangwan": {
          "name": "上万",
          "code": "SWP",
          "pinyin": "shangwan",
          "suoxie": "sw",
          "other": "1606@swu"
      },
      "sunwu": {
          "name": "孙吴",
          "code": "SKB",
          "pinyin": "sunwu",
          "suoxie": "sw",
          "other": "1607@swx"
      },
      "shawanxian": {
          "name": "沙湾县",
          "code": "SXR",
          "pinyin": "shawanxian",
          "suoxie": "swx",
          "other": "1608@sxi"
      },
      "suixi": {
          "name": "遂溪",
          "code": "SXZ",
          "pinyin": "suixi",
          "suoxie": "sx",
          "other": "1610@sxi"
      },
      "shaxian": {
          "name": "沙县",
          "code": "SAS",
          "pinyin": "shaxian",
          "suoxie": "sx",
          "other": "1611@sxi"
      },
      "shaoxing": {
          "name": "绍兴",
          "code": "SOH",
          "pinyin": "shaoxing",
          "suoxie": "sx",
          "other": "1612@sxi"
      },
      "shixian": {
          "name": "石岘",
          "code": "SXL",
          "pinyin": "shixian",
          "suoxie": "sx",
          "other": "1613@sxp"
      },
      "shangxipu": {
          "name": "上西铺",
          "code": "SXM",
          "pinyin": "shangxipu",
          "suoxie": "sxp",
          "other": "1614@sxz"
      },
      "shixiazi": {
          "name": "石峡子",
          "code": "SXJ",
          "pinyin": "shixiazi",
          "suoxie": "sxz",
          "other": "1615@sya"
      },
      "shuyang": {
          "name": "沭阳",
          "code": "FMH",
          "pinyin": "shuyang",
          "suoxie": "sy",
          "other": "1616@sya"
      },
      "suiyang": {
          "name": "绥阳",
          "code": "SYB",
          "pinyin": "suiyang",
          "suoxie": "sy",
          "other": "1617@sya"
      },
      "shouyang": {
          "name": "寿阳",
          "code": "SYV",
          "pinyin": "shouyang",
          "suoxie": "sy",
          "other": "1618@sya"
      },
      "shuiyang": {
          "name": "水洋",
          "code": "OYP",
          "pinyin": "shuiyang",
          "suoxie": "sy",
          "other": "1619@syc"
      },
      "sanyangchuan": {
          "name": "三阳川",
          "code": "SYJ",
          "pinyin": "sanyangchuan",
          "suoxie": "syc",
          "other": "1620@syd"
      },
      "shangyaodun": {
          "name": "上腰墩",
          "code": "SPJ",
          "pinyin": "shangyaodun",
          "suoxie": "syd",
          "other": "1621@syi"
      },
      "sanying": {
          "name": "三营",
          "code": "OEJ",
          "pinyin": "sanying",
          "suoxie": "sy",
          "other": "1622@syi"
      },
      "shunyi": {
          "name": "顺义",
          "code": "SOP",
          "pinyin": "shunyi",
          "suoxie": "sy",
          "other": "1623@syj"
      },
      "sanyijing": {
          "name": "三义井",
          "code": "OYD",
          "pinyin": "sanyijing",
          "suoxie": "syj",
          "other": "1624@syp"
      },
      "sanyuanpu": {
          "name": "三源浦",
          "code": "SYL",
          "pinyin": "sanyuanpu",
          "suoxie": "syp",
          "other": "1625@syu"
      },
      "shangyu": {
          "name": "上虞",
          "code": "BDH",
          "pinyin": "shangyu",
          "suoxie": "sy",
          "other": "1626@syu"
      },
      "sanyuan": {
          "name": "三原",
          "code": "SAY",
          "pinyin": "sanyuan",
          "suoxie": "sy",
          "other": "1627@syu"
      },
      "shangyuan": {
          "name": "上园",
          "code": "SUD",
          "pinyin": "shangyuan",
          "suoxie": "sy",
          "other": "1628@syu"
      },
      "shuiyuan": {
          "name": "水源",
          "code": "OYJ",
          "pinyin": "shuiyuan",
          "suoxie": "sy",
          "other": "1629@syz"
      },
      "sangyuanzi": {
          "name": "桑园子",
          "code": "SAJ",
          "pinyin": "sangyuanzi",
          "suoxie": "syz",
          "other": "1630@szb"
      },
      "suizhongbei": {
          "name": "绥中北",
          "code": "SND",
          "pinyin": "suizhongbei",
          "suoxie": "szb",
          "other": "1631@szb"
      },
      "suzhoubei": {
          "name": "苏州北",
          "code": "OHH",
          "pinyin": "suzhoubei",
          "suoxie": "szb",
          "other": "1632@szd"
      },
      "suzhoudong": {
          "name": "宿州东",
          "code": "SRH",
          "pinyin": "suzhoudong",
          "suoxie": "szd",
          "other": "1633@szd"
      },
      "shenzhendong": {
          "name": "深圳东",
          "code": "BJQ",
          "pinyin": "shenzhendong",
          "suoxie": "szd",
          "other": "1634@szh"
      },
      "shenzhou": [
          {
              "name": "深州",
              "code": "OZP",
              "pinyin": "shenzhou",
              "suoxie": "sz",
              "other": "1635@szh"
          },
          {
              "name": "神州",
              "code": "SRQ",
              "pinyin": "shenzhou",
              "suoxie": "sz",
              "other": "2554@szs"
          }
      ],
      "sunzhen": {
          "name": "孙镇",
          "code": "OZY",
          "pinyin": "sunzhen",
          "suoxie": "sz",
          "other": "1636@szh"
      },
      "suizhong": {
          "name": "绥中",
          "code": "SZD",
          "pinyin": "suizhong",
          "suoxie": "sz",
          "other": "1637@szh"
      },
      "shangzhi": {
          "name": "尚志",
          "code": "SZB",
          "pinyin": "shangzhi",
          "suoxie": "sz",
          "other": "1638@szh"
      },
      "shizhuang": {
          "name": "师庄",
          "code": "SNM",
          "pinyin": "shizhuang",
          "suoxie": "sz",
          "other": "1639@szi"
      },
      "songzi": {
          "name": "松滋",
          "code": "SIN",
          "pinyin": "songzi",
          "suoxie": "sz",
          "other": "1640@szo"
      },
      "shizong": {
          "name": "师宗",
          "code": "SEM",
          "pinyin": "shizong",
          "suoxie": "sz",
          "other": "1641@szq"
      },
      "suzhouyuanqu": {
          "name": "苏州园区",
          "code": "KAH",
          "pinyin": "suzhouyuanqu",
          "suoxie": "szyq",
          "other": "1642@szq"
      },
      "suzhouxinqu": {
          "name": "苏州新区",
          "code": "ITH",
          "pinyin": "suzhouxinqu",
          "suoxie": "szxq",
          "other": "1643@tan"
      },
      "taian": [
          {
              "name": "泰安",
              "code": "TMK",
              "pinyin": "taian",
              "suoxie": "ta",
              "other": "1644@tan"
          },
          {
              "name": "台安",
              "code": "TID",
              "pinyin": "taian",
              "suoxie": "ta",
              "other": "1645@tay"
          }
      ],
      "tonganyi": {
          "name": "通安驿",
          "code": "TAJ",
          "pinyin": "tonganyi",
          "suoxie": "tay",
          "other": "1646@tba"
      },
      "tongbai": {
          "name": "桐柏",
          "code": "TBF",
          "pinyin": "tongbai",
          "suoxie": "tb",
          "other": "1647@tbe"
      },
      "tongbei": {
          "name": "通北",
          "code": "TBB",
          "pinyin": "tongbei",
          "suoxie": "tb",
          "other": "1648@tch"
      },
      "tongcheng": {
          "name": "桐城",
          "code": "TTH",
          "pinyin": "tongcheng",
          "suoxie": "tc",
          "other": "1649@tch"
      },
      "tangchi": {
          "name": "汤池",
          "code": "TCX",
          "pinyin": "tangchi",
          "suoxie": "tc",
          "other": "1650@tch"
      },
      "tancheng": {
          "name": "郯城",
          "code": "TZK",
          "pinyin": "tancheng",
          "suoxie": "tc",
          "other": "1651@tch"
      },
      "tiechang": {
          "name": "铁厂",
          "code": "TCL",
          "pinyin": "tiechang",
          "suoxie": "tc",
          "other": "1652@tcu"
      },
      "taocun": {
          "name": "桃村",
          "code": "TCK",
          "pinyin": "taocun",
          "suoxie": "tc",
          "other": "1653@tda"
      },
      "tongdao": {
          "name": "通道",
          "code": "TRQ",
          "pinyin": "tongdao",
          "suoxie": "td",
          "other": "1654@tdo"
      },
      "tiandong": {
          "name": "田东",
          "code": "TDZ",
          "pinyin": "tiandong",
          "suoxie": "td",
          "other": "1655@tga"
      },
      "tiangang": {
          "name": "天岗",
          "code": "TGL",
          "pinyin": "tiangang",
          "suoxie": "tg",
          "other": "1656@tgl"
      },
      "tuguiwula": {
          "name": "土贵乌拉",
          "code": "TGC",
          "pinyin": "tuguiwula",
          "suoxie": "tgwl",
          "other": "1657@tgo"
      },
      "tonggou": {
          "name": "通沟",
          "code": "TOL",
          "pinyin": "tonggou",
          "suoxie": "tg",
          "other": "1658@tgu"
      },
      "taigu": {
          "name": "太谷",
          "code": "TGV",
          "pinyin": "taigu",
          "suoxie": "tg",
          "other": "1659@tha"
      },
      "taha": {
          "name": "塔哈",
          "code": "THX",
          "pinyin": "taha",
          "suoxie": "th",
          "other": "1660@tha"
      },
      "tanghai": {
          "name": "棠海",
          "code": "THM",
          "pinyin": "tanghai",
          "suoxie": "th",
          "other": "1661@the"
      },
      "tanghe": {
          "name": "唐河",
          "code": "THF",
          "pinyin": "tanghe",
          "suoxie": "th",
          "other": "1662@the"
      },
      "taihe": {
          "name": "泰和",
          "code": "THG",
          "pinyin": "taihe",
          "suoxie": "th",
          "other": "1663@thu"
      },
      "taihu": {
          "name": "太湖",
          "code": "TKH",
          "pinyin": "taihu",
          "suoxie": "th",
          "other": "1664@tji"
      },
      "tuanjie": {
          "name": "团结",
          "code": "TIX",
          "pinyin": "tuanjie",
          "suoxie": "tj",
          "other": "1665@tjj"
      },
      "tanjiajing": {
          "name": "谭家井",
          "code": "TNJ",
          "pinyin": "tanjiajing",
          "suoxie": "tjj",
          "other": "1666@tjt"
      },
      "taojiatun": {
          "name": "陶家屯",
          "code": "TOT",
          "pinyin": "taojiatun",
          "suoxie": "tjt",
          "other": "1667@tjw"
      },
      "tangjiawan": {
          "name": "唐家湾",
          "code": "PDQ",
          "pinyin": "tangjiawan",
          "suoxie": "tjw",
          "other": "1668@tjz"
      },
      "tongjunzhuang": {
          "name": "统军庄",
          "code": "TZP",
          "pinyin": "tongjunzhuang",
          "suoxie": "tjz",
          "other": "1669@tka"
      },
      "taikang": {
          "name": "泰康",
          "code": "TKX",
          "pinyin": "taikang",
          "suoxie": "tk",
          "other": "1670@tld"
      },
      "tuliemaodu": {
          "name": "吐列毛杜",
          "code": "TMD",
          "pinyin": "tuliemaodu",
          "suoxie": "tlmd",
          "other": "1671@tlh"
      },
      "tulihe": {
          "name": "图里河",
          "code": "TEX",
          "pinyin": "tulihe",
          "suoxie": "tlh",
          "other": "1672@tli"
      },
      "tongling": {
          "name": "铜陵",
          "code": "TJH",
          "pinyin": "tongling",
          "suoxie": "tl",
          "other": "1673@tli"
      },
      "tianlin": {
          "name": "田林",
          "code": "TFZ",
          "pinyin": "tianlin",
          "suoxie": "tl",
          "other": "1674@tli"
      },
      "tingliang": {
          "name": "亭亮",
          "code": "TIZ",
          "pinyin": "tingliang",
          "suoxie": "tl",
          "other": "1675@tli"
      },
      "tieli": {
          "name": "铁力",
          "code": "TLB",
          "pinyin": "tieli",
          "suoxie": "tl",
          "other": "1676@tlx"
      },
      "tielingxi": {
          "name": "铁岭西",
          "code": "PXT",
          "pinyin": "tielingxi",
          "suoxie": "tlx",
          "other": "1677@tmb"
      },
      "tumenbei": {
          "name": "图们北",
          "code": "QSL",
          "pinyin": "tumenbei",
          "suoxie": "tmb",
          "other": "1678@tme"
      },
      "tianmen": {
          "name": "天门",
          "code": "TMN",
          "pinyin": "tianmen",
          "suoxie": "tm",
          "other": "1679@tmn"
      },
      "tianmennan": {
          "name": "天门南",
          "code": "TNN",
          "pinyin": "tianmennan",
          "suoxie": "tmn",
          "other": "1680@tms"
      },
      "taimushan": {
          "name": "太姥山",
          "code": "TLS",
          "pinyin": "taimushan",
          "suoxie": "tms",
          "other": "1681@tmt"
      },
      "tumuertai": {
          "name": "土牧尔台",
          "code": "TRC",
          "pinyin": "tumuertai",
          "suoxie": "tmet",
          "other": "1682@tmz"
      },
      "tumenzi": {
          "name": "土门子",
          "code": "TCJ",
          "pinyin": "tumenzi",
          "suoxie": "tmz",
          "other": "1683@tna"
      },
      "taonan": {
          "name": "洮南",
          "code": "TVT",
          "pinyin": "taonan",
          "suoxie": "tn",
          "other": "1684@tna"
      },
      "tongnan": {
          "name": "潼南",
          "code": "TVW",
          "pinyin": "tongnan",
          "suoxie": "tn",
          "other": "1685@tpc"
      },
      "taipingchuan": {
          "name": "太平川",
          "code": "TIT",
          "pinyin": "taipingchuan",
          "suoxie": "tpc",
          "other": "1686@tpz"
      },
      "taipingzhen": {
          "name": "太平镇",
          "code": "TEB",
          "pinyin": "taipingzhen",
          "suoxie": "tpz",
          "other": "1687@tqi"
      },
      "tuqiang": {
          "name": "图强",
          "code": "TQX",
          "pinyin": "tuqiang",
          "suoxie": "tq",
          "other": "1688@tqi"
      },
      "taiqian": {
          "name": "台前",
          "code": "TTK",
          "pinyin": "taiqian",
          "suoxie": "tq",
          "other": "1689@tql"
      },
      "tianqiaoling": {
          "name": "天桥岭",
          "code": "TQL",
          "pinyin": "tianqiaoling",
          "suoxie": "tql",
          "other": "1690@tqz"
      },
      "tuqiaozi": {
          "name": "土桥子",
          "code": "TQJ",
          "pinyin": "tuqiaozi",
          "suoxie": "tqz",
          "other": "1691@tsc"
      },
      "tangshancheng": {
          "name": "汤山城",
          "code": "TCT",
          "pinyin": "tangshancheng",
          "suoxie": "tsc",
          "other": "1692@tsh"
      },
      "taoshan": {
          "name": "桃山",
          "code": "TAB",
          "pinyin": "taoshan",
          "suoxie": "ts",
          "other": "1693@tsz"
      },
      "tashizui": {
          "name": "塔石嘴",
          "code": "TIM",
          "pinyin": "tashizui",
          "suoxie": "tsz",
          "other": "1694@ttu"
      },
      "tongtu": {
          "name": "通途",
          "code": "TUT",
          "pinyin": "tongtu",
          "suoxie": "tt",
          "other": "1695@twh"
      },
      "tongxin": {
          "name": "同心",
          "code": "TXJ",
          "pinyin": "tongxin",
          "suoxie": "tx",
          "other": "1697@txi"
      },
      "tuxi": {
          "name": "土溪",
          "code": "TSW",
          "pinyin": "tuxi",
          "suoxie": "tx",
          "other": "1698@txi"
      },
      "tongxiang": {
          "name": "桐乡",
          "code": "TCH",
          "pinyin": "tongxiang",
          "suoxie": "tx",
          "other": "1699@tya"
      },
      "tianyang": {
          "name": "田阳",
          "code": "TRZ",
          "pinyin": "tianyang",
          "suoxie": "ty",
          "other": "1700@tyi"
      },
      "tianyi": {
          "name": "天义",
          "code": "TND",
          "pinyin": "tianyi",
          "suoxie": "ty",
          "other": "1701@tyi"
      },
      "tangyin": {
          "name": "汤阴",
          "code": "TYF",
          "pinyin": "tangyin",
          "suoxie": "ty",
          "other": "1702@tyl"
      },
      "tuoyaoling": {
          "name": "驼腰岭",
          "code": "TIL",
          "pinyin": "tuoyaoling",
          "suoxie": "tyl",
          "other": "1703@tys"
      },
      "taiyangshan": {
          "name": "太阳山",
          "code": "TYJ",
          "pinyin": "taiyangshan",
          "suoxie": "tys",
          "other": "1704@tyu"
      },
      "tangyuan": {
          "name": "汤原",
          "code": "TYB",
          "pinyin": "tangyuan",
          "suoxie": "ty",
          "other": "1705@tyy"
      },
      "tayayi": {
          "name": "塔崖驿",
          "code": "TYP",
          "pinyin": "tayayi",
          "suoxie": "tyy",
          "other": "1706@tzd"
      },
      "tengzhoudong": {
          "name": "滕州东",
          "code": "TEK",
          "pinyin": "tengzhoudong",
          "suoxie": "tzd",
          "other": "1707@tzh"
      },
      "tianzhu": {
          "name": "天祝",
          "code": "TZJ",
          "pinyin": "tianzhu",
          "suoxie": "tz",
          "other": "1709@tzh"
      },
      "tengzhou": {
          "name": "滕州",
          "code": "TXK",
          "pinyin": "tengzhou",
          "suoxie": "tz",
          "other": "1710@tzh"
      },
      "tianzhen": {
          "name": "天镇",
          "code": "TZV",
          "pinyin": "tianzhen",
          "suoxie": "tz",
          "other": "1711@tzl"
      },
      "tongzilin": {
          "name": "桐子林",
          "code": "TEW",
          "pinyin": "tongzilin",
          "suoxie": "tzl",
          "other": "1712@tzs"
      },
      "tianzhushan": {
          "name": "天柱山",
          "code": "QWH",
          "pinyin": "tianzhushan",
          "suoxie": "tzs",
          "other": "1713@wan"
      },
      "wenan": {
          "name": "文安",
          "code": "WBP",
          "pinyin": "wenan",
          "suoxie": "wa",
          "other": "1714@wan"
      },
      "wuan": {
          "name": "武安",
          "code": "WAP",
          "pinyin": "wuan",
          "suoxie": "wa",
          "other": "1715@waz"
      },
      "wanganzhen": {
          "name": "王安镇",
          "code": "WVP",
          "pinyin": "wanganzhen",
          "suoxie": "waz",
          "other": "1716@wbu"
      },
      "wubu": {
          "name": "吴堡",
          "code": "WUY",
          "pinyin": "wubu",
          "suoxie": "wb",
          "other": "1717@wca"
      },
      "wangcang": {
          "name": "旺苍",
          "code": "WEW",
          "pinyin": "wangcang",
          "suoxie": "wc",
          "other": "1718@wcg"
      },
      "wuchagou": {
          "name": "五叉沟",
          "code": "WCT",
          "pinyin": "wuchagou",
          "suoxie": "wcg",
          "other": "1719@wch"
      },
      "wenchang": {
          "name": "文昌",
          "code": "WEQ",
          "pinyin": "wenchang",
          "suoxie": "wc",
          "other": "1720@wch"
      },
      "wenchun": {
          "name": "温春",
          "code": "WDB",
          "pinyin": "wenchun",
          "suoxie": "wc",
          "other": "1721@wdc"
      },
      "wudalianchi": {
          "name": "五大连池",
          "code": "WRB",
          "pinyin": "wudalianchi",
          "suoxie": "wdlc",
          "other": "1722@wde"
      },
      "wendeng": {
          "name": "文登",
          "code": "WBK",
          "pinyin": "wendeng",
          "suoxie": "wd",
          "other": "1723@wdg"
      },
      "wudaogou": {
          "name": "五道沟",
          "code": "WDL",
          "pinyin": "wudaogou",
          "suoxie": "wdg",
          "other": "1724@wdh"
      },
      "wudaohe": {
          "name": "五道河",
          "code": "WHP",
          "pinyin": "wudaohe",
          "suoxie": "wdh",
          "other": "1725@wdi"
      },
      "wendi": {
          "name": "文地",
          "code": "WNZ",
          "pinyin": "wendi",
          "suoxie": "wd",
          "other": "1726@wdo"
      },
      "weidong": {
          "name": "卫东",
          "code": "WVT",
          "pinyin": "weidong",
          "suoxie": "wd",
          "other": "1727@wds"
      },
      "wudangshan": {
          "name": "武当山",
          "code": "WRN",
          "pinyin": "wudangshan",
          "suoxie": "wds",
          "other": "1728@wdu"
      },
      "wangdu": {
          "name": "望都",
          "code": "WDP",
          "pinyin": "wangdu",
          "suoxie": "wd",
          "other": "1729@weh"
      },
      "wuerqihan": {
          "name": "乌尔旗汗",
          "code": "WHX",
          "pinyin": "wuerqihan",
          "suoxie": "weqh",
          "other": "1730@wfa"
      },
      "weifang": {
          "name": "潍坊",
          "code": "WFK",
          "pinyin": "weifang",
          "suoxie": "wf",
          "other": "1731@wft"
      },
      "wanfatun": {
          "name": "万发屯",
          "code": "WFB",
          "pinyin": "wanfatun",
          "suoxie": "wft",
          "other": "1732@wfu"
      },
      "wangfu": {
          "name": "王府",
          "code": "WUT",
          "pinyin": "wangfu",
          "suoxie": "wf",
          "other": "1733@wfx"
      },
      "wafangdianxi": {
          "name": "瓦房店西",
          "code": "WXT",
          "pinyin": "wafangdianxi",
          "suoxie": "wfdx",
          "other": "1734@wga"
      },
      "wanggang": {
          "name": "王岗",
          "code": "WGB",
          "pinyin": "wanggang",
          "suoxie": "wg",
          "other": "1735@wgo"
      },
      "wugong": {
          "name": "武功",
          "code": "WGY",
          "pinyin": "wugong",
          "suoxie": "wg",
          "other": "1736@wgo"
      },
      "wangou": {
          "name": "湾沟",
          "code": "WGL",
          "pinyin": "wangou",
          "suoxie": "wg",
          "other": "1737@wgt"
      },
      "wuguantian": {
          "name": "吴官田",
          "code": "WGM",
          "pinyin": "wuguantian",
          "suoxie": "wgt",
          "other": "1738@wha"
      },
      "wuhai": {
          "name": "乌海",
          "code": "WVC",
          "pinyin": "wuhai",
          "suoxie": "wh",
          "other": "1739@whe"
      },
      "weihe": {
          "name": "苇河",
          "code": "WHB",
          "pinyin": "weihe",
          "suoxie": "wh",
          "other": "1740@whu"
      },
      "weihui": {
          "name": "卫辉",
          "code": "WHF",
          "pinyin": "weihui",
          "suoxie": "wh",
          "other": "1741@wjc"
      },
      "wujiachuan": {
          "name": "吴家川",
          "code": "WCJ",
          "pinyin": "wujiachuan",
          "suoxie": "wjc",
          "other": "1742@wji"
      },
      "wujia": {
          "name": "五家",
          "code": "WUB",
          "pinyin": "wujia",
          "suoxie": "wj",
          "other": "1743@wji"
      },
      "weiqing": {
          "name": "威箐",
          "code": "WAM",
          "pinyin": "weiqing",
          "suoxie": "wj",
          "other": "1744@wji"
      },
      "wuji": {
          "name": "午汲",
          "code": "WJP",
          "pinyin": "wuji",
          "suoxie": "wj",
          "other": "1745@wji"
      },
      "weijin": {
          "name": "渭津",
          "code": "WJL",
          "pinyin": "weijin",
          "suoxie": "wj",
          "other": "1746@wjw"
      },
      "wangjiawan": {
          "name": "王家湾",
          "code": "WJJ",
          "pinyin": "wangjiawan",
          "suoxie": "wjw",
          "other": "1747@wke"
      },
      "woken": {
          "name": "倭肯",
          "code": "WQB",
          "pinyin": "woken",
          "suoxie": "wk",
          "other": "1748@wks"
      },
      "wukeshu": {
          "name": "五棵树",
          "code": "WKT",
          "pinyin": "wukeshu",
          "suoxie": "wks",
          "other": "1749@wlb"
      },
      "wulongbei": {
          "name": "五龙背",
          "code": "WBT",
          "pinyin": "wulongbei",
          "suoxie": "wlb",
          "other": "1750@wld"
      },
      "wulanhada": {
          "name": "乌兰哈达",
          "code": "WLC",
          "pinyin": "wulanhada",
          "suoxie": "wlhd",
          "other": "1751@wle"
      },
      "wanle": {
          "name": "万乐",
          "code": "WEB",
          "pinyin": "wanle",
          "suoxie": "wl",
          "other": "1752@wlg"
      },
      "walagan": {
          "name": "瓦拉干",
          "code": "WVX",
          "pinyin": "walagan",
          "suoxie": "wlg",
          "other": "1753@wli"
      },
      "wenling": {
          "name": "温岭",
          "code": "VHH",
          "pinyin": "wenling",
          "suoxie": "wl",
          "other": "1754@wli"
      },
      "wulian": {
          "name": "五莲",
          "code": "WLK",
          "pinyin": "wulian",
          "suoxie": "wl",
          "other": "1755@wlq"
      },
      "wulateqianqi": {
          "name": "乌拉特前旗",
          "code": "WQC",
          "pinyin": "wulateqianqi",
          "suoxie": "wltqq",
          "other": "1756@wls"
      },
      "wulashan": {
          "name": "乌拉山",
          "code": "WSC",
          "pinyin": "wulashan",
          "suoxie": "wls",
          "other": "1757@wlt"
      },
      "wolitun": {
          "name": "卧里屯",
          "code": "WLX",
          "pinyin": "wolitun",
          "suoxie": "wlt",
          "other": "1758@wnb"
      },
      "weinanbei": {
          "name": "渭南北",
          "code": "WBY",
          "pinyin": "weinanbei",
          "suoxie": "wnb",
          "other": "1759@wne"
      },
      "wunuer": {
          "name": "乌奴耳",
          "code": "WRX",
          "pinyin": "wunuer",
          "suoxie": "wne",
          "other": "1760@wni"
      },
      "wanning": {
          "name": "万宁",
          "code": "WNQ",
          "pinyin": "wanning",
          "suoxie": "wn",
          "other": "1761@wni"
      },
      "wannian": {
          "name": "万年",
          "code": "WWG",
          "pinyin": "wannian",
          "suoxie": "wn",
          "other": "1762@wnn"
      },
      "weinannan": {
          "name": "渭南南",
          "code": "WVY",
          "pinyin": "weinannan",
          "suoxie": "wnn",
          "other": "1763@wnz"
      },
      "weinanzhen": {
          "name": "渭南镇",
          "code": "WNJ",
          "pinyin": "weinanzhen",
          "suoxie": "wnz",
          "other": "1764@wpi"
      },
      "wopi": {
          "name": "沃皮",
          "code": "WPT",
          "pinyin": "wopi",
          "suoxie": "wp",
          "other": "1765@wqi"
      },
      "wuqiao": {
          "name": "吴桥",
          "code": "WUP",
          "pinyin": "wuqiao",
          "suoxie": "wq",
          "other": "1766@wqi"
      },
      "wangqing": {
          "name": "汪清",
          "code": "WQL",
          "pinyin": "wangqing",
          "suoxie": "wq",
          "other": "1767@wqi"
      },
      "wuqing": {
          "name": "武清",
          "code": "WWP",
          "pinyin": "wuqing",
          "suoxie": "wq",
          "other": "1768@wsh"
      },
      "wushan": {
          "name": "武山",
          "code": "WSJ",
          "pinyin": "wushan",
          "suoxie": "ws",
          "other": "1769@wsh"
      },
      "wenshui": {
          "name": "文水",
          "code": "WEV",
          "pinyin": "wenshui",
          "suoxie": "ws",
          "other": "1770@wsz"
      },
      "weishanzhuang": {
          "name": "魏善庄",
          "code": "WSP",
          "pinyin": "weishanzhuang",
          "suoxie": "wsz",
          "other": "1771@wto"
      },
      "wangtong": {
          "name": "王瞳",
          "code": "WTP",
          "pinyin": "wangtong",
          "suoxie": "wt",
          "other": "1772@wts"
      },
      "wutaishan": {
          "name": "五台山",
          "code": "WSV",
          "pinyin": "wutaishan",
          "suoxie": "wts",
          "other": "1773@wtz"
      },
      "wangtuanzhuang": {
          "name": "王团庄",
          "code": "WZJ",
          "pinyin": "wangtuanzhuang",
          "suoxie": "wtz",
          "other": "1774@wwu"
      },
      "wuwu": {
          "name": "五五",
          "code": "WVR",
          "pinyin": "wuwu",
          "suoxie": "ww",
          "other": "1775@wxd"
      },
      "wuxidong": {
          "name": "无锡东",
          "code": "WGH",
          "pinyin": "wuxidong",
          "suoxie": "wxd",
          "other": "1776@wxi"
      },
      "weixing": {
          "name": "卫星",
          "code": "WVB",
          "pinyin": "weixing",
          "suoxie": "wx",
          "other": "1777@wxi"
      },
      "wenxi": {
          "name": "闻喜",
          "code": "WXV",
          "pinyin": "wenxi",
          "suoxie": "wx",
          "other": "1778@wxi"
      },
      "wuxiang": {
          "name": "武乡",
          "code": "WVV",
          "pinyin": "wuxiang",
          "suoxie": "wx",
          "other": "1779@wxq"
      },
      "wuxixinqu": {
          "name": "无锡新区",
          "code": "IFH",
          "pinyin": "wuxixinqu",
          "suoxie": "wxxq",
          "other": "1780@wxu"
      },
      "wuxue": {
          "name": "武穴",
          "code": "WXN",
          "pinyin": "wuxue",
          "suoxie": "wx",
          "other": "1781@wxu"
      },
      "wuxu": {
          "name": "吴圩",
          "code": "WYZ",
          "pinyin": "wuxu",
          "suoxie": "wx",
          "other": "1782@wya"
      },
      "wangyang": {
          "name": "王杨",
          "code": "WYB",
          "pinyin": "wangyang",
          "suoxie": "wy",
          "other": "1783@wyi"
      },
      "wuyi": {
          "name": "武义",
          "code": "RYH",
          "pinyin": "wuyi",
          "suoxie": "wy",
          "other": "1784@wyi"
      },
      "wuying": {
          "name": "五营",
          "code": "WWB",
          "pinyin": "wuying",
          "suoxie": "wy",
          "other": "1785@wyt"
      },
      "wayaotian": {
          "name": "瓦窑田",
          "code": "WIM",
          "pinyin": "wayaotian",
          "suoxie": "wyt",
          "other": "1786@wyu"
      },
      "wuyuan": [
          {
              "name": "五原",
              "code": "WYC",
              "pinyin": "wuyuan",
              "suoxie": "wy",
              "other": "1787@wzg"
          },
          {
              "name": "婺源",
              "code": "WYG",
              "pinyin": "wuyuan",
              "suoxie": "wy",
              "other": "2598@wyu"
          }
      ],
      "weizigou": {
          "name": "苇子沟",
          "code": "WZL",
          "pinyin": "weizigou",
          "suoxie": "wzg",
          "other": "1788@wzh"
      },
      "weizhuang": {
          "name": "韦庄",
          "code": "WZY",
          "pinyin": "weizhuang",
          "suoxie": "wz",
          "other": "1789@wzh"
      },
      "wuzhai": {
          "name": "五寨",
          "code": "WZV",
          "pinyin": "wuzhai",
          "suoxie": "wz",
          "other": "1790@wzt"
      },
      "wangzhaotun": {
          "name": "王兆屯",
          "code": "WZB",
          "pinyin": "wangzhaotun",
          "suoxie": "wzt",
          "other": "1791@wzz"
      },
      "weizizhen": {
          "name": "微子镇",
          "code": "WQP",
          "pinyin": "weizizhen",
          "suoxie": "wzz",
          "other": "1792@wzz"
      },
      "weizhangzi": {
          "name": "魏杖子",
          "code": "WKD",
          "pinyin": "weizhangzi",
          "suoxie": "wzz",
          "other": "1793@xan"
      },
      "xinan": {
          "name": "新安",
          "code": "EAM",
          "pinyin": "xinan",
          "suoxie": "xa",
          "other": "1794@xan"
      },
      "xingan": [
          {
              "name": "兴安",
              "code": "XAZ",
              "pinyin": "xingan",
              "suoxie": "xa",
              "other": "1795@xax"
          },
          {
              "name": "新干",
              "code": "EGG",
              "pinyin": "xingan",
              "suoxie": "xg",
              "other": "1814@xga"
          }
      ],
      "xinanxian": {
          "name": "新安县",
          "code": "XAF",
          "pinyin": "xinanxian",
          "suoxie": "xax",
          "other": "1796@xba"
      },
      "xinbaoan": {
          "name": "新保安",
          "code": "XAP",
          "pinyin": "xinbaoan",
          "suoxie": "xba",
          "other": "1797@xbc"
      },
      "xiabancheng": {
          "name": "下板城",
          "code": "EBP",
          "pinyin": "xiabancheng",
          "suoxie": "xbc",
          "other": "1798@xbl"
      },
      "xibali": {
          "name": "西八里",
          "code": "XLP",
          "pinyin": "xibali",
          "suoxie": "xbl",
          "other": "1799@xch"
      },
      "xuancheng": {
          "name": "宣城",
          "code": "ECH",
          "pinyin": "xuancheng",
          "suoxie": "xc",
          "other": "1800@xch"
      },
      "xingcheng": {
          "name": "兴城",
          "code": "XCD",
          "pinyin": "xingcheng",
          "suoxie": "xc",
          "other": "1801@xcu"
      },
      "xiaocun": {
          "name": "小村",
          "code": "XEM",
          "pinyin": "xiaocun",
          "suoxie": "xc",
          "other": "1802@xcy"
      },
      "xinchuoyuan": {
          "name": "新绰源",
          "code": "XRX",
          "pinyin": "xinchuoyuan",
          "suoxie": "xcy",
          "other": "1803@xcz"
      },
      "xiachengzi": {
          "name": "下城子",
          "code": "XCB",
          "pinyin": "xiachengzi",
          "suoxie": "xcz",
          "other": "1804@xcz"
      },
      "xinchengzi": {
          "name": "新城子",
          "code": "XCT",
          "pinyin": "xinchengzi",
          "suoxie": "xcz",
          "other": "1805@xde"
      },
      "xide": {
          "name": "喜德",
          "code": "EDW",
          "pinyin": "xide",
          "suoxie": "xd",
          "other": "1806@xdj"
      },
      "xiaodejiang": {
          "name": "小得江",
          "code": "EJM",
          "pinyin": "xiaodejiang",
          "suoxie": "xdj",
          "other": "1807@xdm"
      },
      "xidamiao": {
          "name": "西大庙",
          "code": "XMP",
          "pinyin": "xidamiao",
          "suoxie": "xdm",
          "other": "1808@xdo"
      },
      "xiaodong": [
          {
              "name": "小董",
              "code": "XEZ",
              "pinyin": "xiaodong",
              "suoxie": "xd",
              "other": "1809@xdo"
          },
          {
              "name": "小东",
              "code": "XOD",
              "pinyin": "xiaodong",
              "suoxie": "xd",
              "other": "1810@xfe"
          }
      ],
      "xinfeng": {
          "name": "信丰",
          "code": "EFG",
          "pinyin": "xinfeng",
          "suoxie": "xf",
          "other": "1811@xfe"
      },
      "xiangfen": {
          "name": "襄汾",
          "code": "XFV",
          "pinyin": "xiangfen",
          "suoxie": "xf",
          "other": "1812@xfe"
      },
      "xifeng": [
          {
              "name": "息烽",
              "code": "XFW",
              "pinyin": "xifeng",
              "suoxie": "xf",
              "other": "1813@xga"
          },
          {
              "name": "西丰",
              "code": "XFT",
              "pinyin": "xifeng",
              "suoxie": "xf",
              "other": "2607@xfe"
          }
      ],
      "xiaogan": {
          "name": "孝感",
          "code": "XGN",
          "pinyin": "xiaogan",
          "suoxie": "xg",
          "other": "1815@xgc"
      },
      "xigucheng": {
          "name": "西固城",
          "code": "XUJ",
          "pinyin": "xigucheng",
          "suoxie": "xgc",
          "other": "1816@xgu"
      },
      "xigu": {
          "name": "西固",
          "code": "XIJ",
          "pinyin": "xigu",
          "suoxie": "xg",
          "other": "1817@xgy"
      },
      "xiaguanying": {
          "name": "夏官营",
          "code": "XGJ",
          "pinyin": "xiaguanying",
          "suoxie": "xgy",
          "other": "1818@xgz"
      },
      "xigangzi": {
          "name": "西岗子",
          "code": "NBB",
          "pinyin": "xigangzi",
          "suoxie": "xgz",
          "other": "1819@xhe"
      },
      "xianghe": {
          "name": "襄河",
          "code": "XXB",
          "pinyin": "xianghe",
          "suoxie": "xh",
          "other": "1820@xhe"
      },
      "xinhe": {
          "name": "新和",
          "code": "XIR",
          "pinyin": "xinhe",
          "suoxie": "xh",
          "other": "1821@xhe"
      },
      "xuanhe": {
          "name": "宣和",
          "code": "XWJ",
          "pinyin": "xuanhe",
          "suoxie": "xh",
          "other": "1822@xhj"
      },
      "xiehejian": {
          "name": "斜河涧",
          "code": "EEP",
          "pinyin": "xiehejian",
          "suoxie": "xhj",
          "other": "1823@xht"
      },
      "xinhuatun": {
          "name": "新华屯",
          "code": "XAX",
          "pinyin": "xinhuatun",
          "suoxie": "xht",
          "other": "1824@xhu"
      },
      "xinhua": [
          {
              "name": "新华",
              "code": "XHB",
              "pinyin": "xinhua",
              "suoxie": "xh",
              "other": "1825@xhu"
          },
          {
              "name": "新化",
              "code": "EHQ",
              "pinyin": "xinhua",
              "suoxie": "xh",
              "other": "1826@xhu"
          }
      ],
      "xuanhua": {
          "name": "宣化",
          "code": "XHP",
          "pinyin": "xuanhua",
          "suoxie": "xh",
          "other": "1827@xhx"
      },
      "xinghexi": {
          "name": "兴和西",
          "code": "XEC",
          "pinyin": "xinghexi",
          "suoxie": "xhx",
          "other": "1828@xhy"
      },
      "xiaoheyan": {
          "name": "小河沿",
          "code": "XYD",
          "pinyin": "xiaoheyan",
          "suoxie": "xhy",
          "other": "1829@xhy"
      },
      "xiahuayuan": {
          "name": "下花园",
          "code": "XYP",
          "pinyin": "xiahuayuan",
          "suoxie": "xhy",
          "other": "1830@xhz"
      },
      "xiaohezhen": {
          "name": "小河镇",
          "code": "EKY",
          "pinyin": "xiaohezhen",
          "suoxie": "xhz",
          "other": "1831@xji"
      },
      "xujia": {
          "name": "徐家",
          "code": "XJB",
          "pinyin": "xujia",
          "suoxie": "xj",
          "other": "1832@xji"
      },
      "xiajiang": {
          "name": "峡江",
          "code": "EJG",
          "pinyin": "xiajiang",
          "suoxie": "xj",
          "other": "1833@xji"
      },
      "xinjiang": [
          {
              "name": "新绛",
              "code": "XJV",
              "pinyin": "xinjiang",
              "suoxie": "xj",
              "other": "1834@xji"
          },
          {
              "name": "新江",
              "code": "XJM",
              "pinyin": "xinjiang",
              "suoxie": "xj",
              "other": "1836@xjk"
          }
      ],
      "xinji": {
          "name": "辛集",
          "code": "ENP",
          "pinyin": "xinji",
          "suoxie": "xj",
          "other": "1835@xji"
      },
      "xijiekou": {
          "name": "西街口",
          "code": "EKM",
          "pinyin": "xijiekou",
          "suoxie": "xjk",
          "other": "1837@xjt"
      },
      "xujiatun": {
          "name": "许家屯",
          "code": "XJT",
          "pinyin": "xujiatun",
          "suoxie": "xjt",
          "other": "1838@xjt"
      },
      "xujiatai": {
          "name": "许家台",
          "code": "XTJ",
          "pinyin": "xujiatai",
          "suoxie": "xjt",
          "other": "1839@xjz"
      },
      "xiejiazhen": {
          "name": "谢家镇",
          "code": "XMT",
          "pinyin": "xiejiazhen",
          "suoxie": "xjz",
          "other": "1840@xka"
      },
      "xingkai": {
          "name": "兴凯",
          "code": "EKB",
          "pinyin": "xingkai",
          "suoxie": "xk",
          "other": "1841@xla"
      },
      "xiaolan": {
          "name": "小榄",
          "code": "EAQ",
          "pinyin": "xiaolan",
          "suoxie": "xl",
          "other": "1842@xla"
      },
      "xianglan": {
          "name": "香兰",
          "code": "XNB",
          "pinyin": "xianglan",
          "suoxie": "xl",
          "other": "1843@xld"
      },
      "xinglongdian": {
          "name": "兴隆店",
          "code": "XDD",
          "pinyin": "xinglongdian",
          "suoxie": "xld",
          "other": "1844@xle"
      },
      "xinle": {
          "name": "新乐",
          "code": "ELP",
          "pinyin": "xinle",
          "suoxie": "xl",
          "other": "1845@xli"
      },
      "xinlin": {
          "name": "新林",
          "code": "XPX",
          "pinyin": "xinlin",
          "suoxie": "xl",
          "other": "1846@xli"
      },
      "xiaoling": {
          "name": "小岭",
          "code": "XLB",
          "pinyin": "xiaoling",
          "suoxie": "xl",
          "other": "1847@xli"
      },
      "xinli": {
          "name": "新李",
          "code": "XLJ",
          "pinyin": "xinli",
          "suoxie": "xl",
          "other": "1848@xli"
      },
      "xilin": {
          "name": "西林",
          "code": "XYB",
          "pinyin": "xilin",
          "suoxie": "xl",
          "other": "1849@xli"
      },
      "xiliu": {
          "name": "西柳",
          "code": "GCT",
          "pinyin": "xiliu",
          "suoxie": "xl",
          "other": "1850@xli"
      },
      "xianlin": {
          "name": "仙林",
          "code": "XPH",
          "pinyin": "xianlin",
          "suoxie": "xl",
          "other": "1851@xlt"
      },
      "xinlitun": {
          "name": "新立屯",
          "code": "XLD",
          "pinyin": "xinlitun",
          "suoxie": "xlt",
          "other": "1852@xlz"
      },
      "xinglongzhen": {
          "name": "兴隆镇",
          "code": "XZB",
          "pinyin": "xinglongzhen",
          "suoxie": "xlz",
          "other": "1853@xlz"
      },
      "xinlizhen": {
          "name": "新立镇",
          "code": "XGT",
          "pinyin": "xinlizhen",
          "suoxie": "xlz",
          "other": "1854@xmi"
      },
      "xinmin": {
          "name": "新民",
          "code": "XMD",
          "pinyin": "xinmin",
          "suoxie": "xm",
          "other": "1855@xms"
      },
      "ximashan": {
          "name": "西麻山",
          "code": "XMB",
          "pinyin": "ximashan",
          "suoxie": "xms",
          "other": "1856@xmt"
      },
      "xiamatang": {
          "name": "下马塘",
          "code": "XAT",
          "pinyin": "xiamatang",
          "suoxie": "xmt",
          "other": "1857@xna"
      },
      "xiaonan": {
          "name": "孝南",
          "code": "XNV",
          "pinyin": "xiaonan",
          "suoxie": "xn",
          "other": "1858@xnb"
      },
      "xianningbei": {
          "name": "咸宁北",
          "code": "XRN",
          "pinyin": "xianningbei",
          "suoxie": "xnb",
          "other": "1859@xni"
      },
      "xingning": {
          "name": "兴宁",
          "code": "ENQ",
          "pinyin": "xingning",
          "suoxie": "xn",
          "other": "1860@xni"
      },
      "xianning": {
          "name": "咸宁",
          "code": "XNN",
          "pinyin": "xianning",
          "suoxie": "xn",
          "other": "1861@xpd"
      },
      "xipudong": {
          "name": "犀浦东",
          "code": "XAW",
          "pinyin": "xipudong",
          "suoxie": "xpd",
          "other": "1862@xpi"
      },
      "xiping": {
          "name": "西平",
          "code": "XPN",
          "pinyin": "xiping",
          "suoxie": "xp",
          "other": "1863@xpi"
      },
      "xingping": {
          "name": "兴平",
          "code": "XPY",
          "pinyin": "xingping",
          "suoxie": "xp",
          "other": "1864@xpt"
      },
      "xinpingtian": {
          "name": "新坪田",
          "code": "XPM",
          "pinyin": "xinpingtian",
          "suoxie": "xpt",
          "other": "1865@xpu"
      },
      "xiapu": {
          "name": "霞浦",
          "code": "XOS",
          "pinyin": "xiapu",
          "suoxie": "xp",
          "other": "1866@xpu"
      },
      "xupu": {
          "name": "溆浦",
          "code": "EPQ",
          "pinyin": "xupu",
          "suoxie": "xp",
          "other": "1867@xpu"
      },
      "xipu": {
          "name": "犀浦",
          "code": "XIW",
          "pinyin": "xipu",
          "suoxie": "xp",
          "other": "1868@xqi"
      },
      "xinqing": {
          "name": "新青",
          "code": "XQB",
          "pinyin": "xinqing",
          "suoxie": "xq",
          "other": "1869@xqi"
      },
      "xinqiu": {
          "name": "新邱",
          "code": "XQD",
          "pinyin": "xinqiu",
          "suoxie": "xq",
          "other": "1870@xqp"
      },
      "xingquanbu": {
          "name": "兴泉堡",
          "code": "XQJ",
          "pinyin": "xingquanbu",
          "suoxie": "xqp",
          "other": "1871@xrq"
      },
      "xianrenqiao": {
          "name": "仙人桥",
          "code": "XRL",
          "pinyin": "xianrenqiao",
          "suoxie": "xrq",
          "other": "1872@xsg"
      },
      "xiaosigou": {
          "name": "小寺沟",
          "code": "ESP",
          "pinyin": "xiaosigou",
          "suoxie": "xsg",
          "other": "1873@xsh"
      },
      "xingshu": {
          "name": "杏树",
          "code": "XSB",
          "pinyin": "xingshu",
          "suoxie": "xs",
          "other": "1874@xsh"
      },
      "xishui": {
          "name": "浠水",
          "code": "XZN",
          "pinyin": "xishui",
          "suoxie": "xs",
          "other": "1875@xsh"
      },
      "xiashe": {
          "name": "下社",
          "code": "XSV",
          "pinyin": "xiashe",
          "suoxie": "xs",
          "other": "1876@xsh"
      },
      "xushui": {
          "name": "徐水",
          "code": "XSP",
          "pinyin": "xushui",
          "suoxie": "xs",
          "other": "1877@xsh"
      },
      "xiashi": {
          "name": "夏石",
          "code": "XIZ",
          "pinyin": "xiashi",
          "suoxie": "xs",
          "other": "1878@xsh"
      },
      "xiaoshao": {
          "name": "小哨",
          "code": "XAM",
          "pinyin": "xiaoshao",
          "suoxie": "xs",
          "other": "1879@xsp"
      },
      "xinsongpu": {
          "name": "新松浦",
          "code": "XOB",
          "pinyin": "xinsongpu",
          "suoxie": "xsp",
          "other": "1880@xst"
      },
      "xingshutun": {
          "name": "杏树屯",
          "code": "XDT",
          "pinyin": "xingshutun",
          "suoxie": "xst",
          "other": "1881@xsw"
      },
      "xusanwan": {
          "name": "许三湾",
          "code": "XSJ",
          "pinyin": "xusanwan",
          "suoxie": "xsw",
          "other": "1882@xta"
      },
      "xiangtan": {
          "name": "湘潭",
          "code": "XTQ",
          "pinyin": "xiangtan",
          "suoxie": "xt",
          "other": "1883@xta"
      },
      "xingtai": {
          "name": "邢台",
          "code": "XTP",
          "pinyin": "xingtai",
          "suoxie": "xt",
          "other": "1884@xtx"
      },
      "xiantaoxi": {
          "name": "仙桃西",
          "code": "XAN",
          "pinyin": "xiantaoxi",
          "suoxie": "xtx",
          "other": "1885@xtz"
      },
      "xiataizi": {
          "name": "下台子",
          "code": "EIP",
          "pinyin": "xiataizi",
          "suoxie": "xtz",
          "other": "1886@xwe"
      },
      "xuwen": {
          "name": "徐闻",
          "code": "XJQ",
          "pinyin": "xuwen",
          "suoxie": "xw",
          "other": "1887@xwp"
      },
      "xinwopu": {
          "name": "新窝铺",
          "code": "EPD",
          "pinyin": "xinwopu",
          "suoxie": "xwp",
          "other": "1888@xwu"
      },
      "xiuwu": {
          "name": "修武",
          "code": "XWF",
          "pinyin": "xiuwu",
          "suoxie": "xw",
          "other": "1889@xxi"
      },
      "xinxian": {
          "name": "新县",
          "code": "XSN",
          "pinyin": "xinxian",
          "suoxie": "xx",
          "other": "1890@xxi"
      },
      "xixian": {
          "name": "息县",
          "code": "ENN",
          "pinyin": "xixian",
          "suoxie": "xx",
          "other": "1891@xxi"
      },
      "xixiang": {
          "name": "西乡",
          "code": "XQY",
          "pinyin": "xixiang",
          "suoxie": "xx",
          "other": "1892@xxi"
      },
      "xiangxiang": {
          "name": "湘乡",
          "code": "XXQ",
          "pinyin": "xiangxiang",
          "suoxie": "xx",
          "other": "1893@xxi"
      },
      "xixia": {
          "name": "西峡",
          "code": "XIF",
          "pinyin": "xixia",
          "suoxie": "xx",
          "other": "1894@xxi"
      },
      "xiaoxi": {
          "name": "孝西",
          "code": "XOV",
          "pinyin": "xiaoxi",
          "suoxie": "xx",
          "other": "1895@xxj"
      },
      "xiaoxinjie": {
          "name": "小新街",
          "code": "XXM",
          "pinyin": "xiaoxinjie",
          "suoxie": "xxj",
          "other": "1896@xxx"
      },
      "xinxingxian": {
          "name": "新兴县",
          "code": "XGQ",
          "pinyin": "xinxingxian",
          "suoxie": "xxx",
          "other": "1897@xxz"
      },
      "xixiaozhao": {
          "name": "西小召",
          "code": "XZC",
          "pinyin": "xixiaozhao",
          "suoxie": "xxz",
          "other": "1898@xxz"
      },
      "xiaoxizhuang": {
          "name": "小西庄",
          "code": "XXP",
          "pinyin": "xiaoxizhuang",
          "suoxie": "xxz",
          "other": "1899@xya"
      },
      "xunyang": {
          "name": "旬阳",
          "code": "XUY",
          "pinyin": "xunyang",
          "suoxie": "xy",
          "other": "1901@xyb"
      },
      "xunyangbei": {
          "name": "旬阳北",
          "code": "XBY",
          "pinyin": "xunyangbei",
          "suoxie": "xyb",
          "other": "1902@xyd"
      },
      "xiangyangdong": {
          "name": "襄阳东",
          "code": "XWN",
          "pinyin": "xiangyangdong",
          "suoxie": "xyd",
          "other": "1903@xye"
      },
      "xingye": {
          "name": "兴业",
          "code": "SNZ",
          "pinyin": "xingye",
          "suoxie": "xy",
          "other": "1904@xyg"
      },
      "xiaoyugu": {
          "name": "小雨谷",
          "code": "XHM",
          "pinyin": "xiaoyugu",
          "suoxie": "xyg",
          "other": "1905@xyi"
      },
      "xiaoyuejiu": {
          "name": "小月旧",
          "code": "XFM",
          "pinyin": "xiaoyuejiu",
          "suoxie": "xyj",
          "other": "1907@xyq"
      },
      "xiaoyangqi": {
          "name": "小扬气",
          "code": "XYX",
          "pinyin": "xiaoyangqi",
          "suoxie": "xyq",
          "other": "1908@xyu"
      },
      "xiangyun": {
          "name": "祥云",
          "code": "EXM",
          "pinyin": "xiangyun",
          "suoxie": "xy",
          "other": "1909@xyu"
      },
      "xiangyuan": {
          "name": "襄垣",
          "code": "EIF",
          "pinyin": "xiangyuan",
          "suoxie": "xy",
          "other": "1910@xyx"
      },
      "xiayixian": {
          "name": "夏邑县",
          "code": "EJH",
          "pinyin": "xiayixian",
          "suoxie": "xyx",
          "other": "1911@xyy"
      },
      "xinyouyi": {
          "name": "新友谊",
          "code": "EYB",
          "pinyin": "xinyouyi",
          "suoxie": "xyy",
          "other": "1912@xyz"
      },
      "xinyangzhen": {
          "name": "新阳镇",
          "code": "XZJ",
          "pinyin": "xinyangzhen",
          "suoxie": "xyz",
          "other": "1913@xzd"
      },
      "xuzhoudong": {
          "name": "徐州东",
          "code": "UUH",
          "pinyin": "xuzhoudong",
          "suoxie": "xzd",
          "other": "1914@xzf"
      },
      "xinzhangfang": {
          "name": "新帐房",
          "code": "XZX",
          "pinyin": "xinzhangfang",
          "suoxie": "xzf",
          "other": "1915@xzh"
      },
      "xuanzhong": {
          "name": "悬钟",
          "code": "XRP",
          "pinyin": "xuanzhong",
          "suoxie": "xz",
          "other": "1916@xzh"
      },
      "xinzhao": {
          "name": "新肇",
          "code": "XZT",
          "pinyin": "xinzhao",
          "suoxie": "xz",
          "other": "1917@xzh"
      },
      "xinzhou": {
          "name": "忻州",
          "code": "XXV",
          "pinyin": "xinzhou",
          "suoxie": "xz",
          "other": "1918@xzi"
      },
      "xizi": {
          "name": "汐子",
          "code": "XZD",
          "pinyin": "xizi",
          "suoxie": "xz",
          "other": "1919@xzm"
      },
      "xizhelimu": {
          "name": "西哲里木",
          "code": "XRD",
          "pinyin": "xizhelimu",
          "suoxie": "xzlm",
          "other": "1920@xzz"
      },
      "xinzhangzi": {
          "name": "新杖子",
          "code": "ERP",
          "pinyin": "xinzhangzi",
          "suoxie": "xzz",
          "other": "1921@yan"
      },
      "yaoan": {
          "name": "姚安",
          "code": "YAC",
          "pinyin": "yaoan",
          "suoxie": "ya",
          "other": "1922@yan"
      },
      "yian": {
          "name": "依安",
          "code": "YAX",
          "pinyin": "yian",
          "suoxie": "ya",
          "other": "1923@yan"
      },
      "yongan": {
          "name": "永安",
          "code": "YAS",
          "pinyin": "yongan",
          "suoxie": "ya",
          "other": "1924@yax"
      },
      "yonganxiang": {
          "name": "永安乡",
          "code": "YNB",
          "pinyin": "yonganxiang",
          "suoxie": "yax",
          "other": "1925@ybl"
      },
      "yabuli": {
          "name": "亚布力",
          "code": "YBB",
          "pinyin": "yabuli",
          "suoxie": "ybl",
          "other": "1926@ybs"
      },
      "yuanbaoshan": {
          "name": "元宝山",
          "code": "YUD",
          "pinyin": "yuanbaoshan",
          "suoxie": "ybs",
          "other": "1927@yca"
      },
      "yangcao": {
          "name": "羊草",
          "code": "YAB",
          "pinyin": "yangcao",
          "suoxie": "yc",
          "other": "1928@ycd"
      },
      "yangcaodi": {
          "name": "秧草地",
          "code": "YKM",
          "pinyin": "yangcaodi",
          "suoxie": "ycd",
          "other": "1929@ych"
      },
      "yangchenghu": {
          "name": "阳澄湖",
          "code": "AIH",
          "pinyin": "yangchenghu",
          "suoxie": "ych",
          "other": "1930@ych"
      },
      "yingchun": {
          "name": "迎春",
          "code": "YYB",
          "pinyin": "yingchun",
          "suoxie": "yc",
          "other": "1931@ych"
      },
      "yecheng": {
          "name": "叶城",
          "code": "YER",
          "pinyin": "yecheng",
          "suoxie": "yc",
          "other": "1932@ych"
      },
      "yanchi": [
          {
              "name": "盐池",
              "code": "YKJ",
              "pinyin": "yanchi",
              "suoxie": "yc",
              "other": "1933@ych"
          },
          {
              "name": "雁翅",
              "code": "YAP",
              "pinyin": "yanchi",
              "suoxie": "yc",
              "other": "1943@ycl"
          }
      ],
      "yanchuan": {
          "name": "砚川",
          "code": "YYY",
          "pinyin": "yanchuan",
          "suoxie": "yc",
          "other": "1934@ych"
      },
      "yangchun": {
          "name": "阳春",
          "code": "YQQ",
          "pinyin": "yangchun",
          "suoxie": "yc",
          "other": "1935@ych"
      },
      "yicheng": {
          "name": "宜城",
          "code": "YIN",
          "pinyin": "yicheng",
          "suoxie": "yc",
          "other": "1936@ych"
      },
      "yingcheng": {
          "name": "应城",
          "code": "YHN",
          "pinyin": "yingcheng",
          "suoxie": "yc",
          "other": "1937@ych"
      },
      "yucheng": {
          "name": "禹城",
          "code": "YCK",
          "pinyin": "yucheng",
          "suoxie": "yc",
          "other": "1938@ych"
      },
      "yangcheng": {
          "name": "阳城",
          "code": "YNF",
          "pinyin": "yangcheng",
          "suoxie": "yc",
          "other": "1940@ych"
      },
      "yangcha": {
          "name": "阳岔",
          "code": "YAL",
          "pinyin": "yangcha",
          "suoxie": "yc",
          "other": "1941@ych"
      },
      "yuncailing": {
          "name": "云彩岭",
          "code": "ACP",
          "pinyin": "yuncailing",
          "suoxie": "ycl",
          "other": "1944@ycx"
      },
      "yuchengxian": {
          "name": "虞城县",
          "code": "IXH",
          "pinyin": "yuchengxian",
          "suoxie": "ycx",
          "other": "1945@ycz"
      },
      "yingchengzi": {
          "name": "营城子",
          "code": "YCT",
          "pinyin": "yingchengzi",
          "suoxie": "ycz",
          "other": "1946@yde"
      },
      "yingde": {
          "name": "英德",
          "code": "YDQ",
          "pinyin": "yingde",
          "suoxie": "yd",
          "other": "1947@yde"
      },
      "yongdeng": {
          "name": "永登",
          "code": "YDJ",
          "pinyin": "yongdeng",
          "suoxie": "yd",
          "other": "1948@ydi"
      },
      "yindi": {
          "name": "尹地",
          "code": "YDM",
          "pinyin": "yindi",
          "suoxie": "yd",
          "other": "1949@ydi"
      },
      "yongding": {
          "name": "永定",
          "code": "YGS",
          "pinyin": "yongding",
          "suoxie": "yd",
          "other": "1950@yds"
      },
      "yandangshan": {
          "name": "雁荡山",
          "code": "YGH",
          "pinyin": "yandangshan",
          "suoxie": "yds",
          "other": "1951@ydu"
      },
      "yudu": {
          "name": "于都",
          "code": "YDG",
          "pinyin": "yudu",
          "suoxie": "yd",
          "other": "1952@ydu"
      },
      "yuandun": {
          "name": "园墩",
          "code": "YAJ",
          "pinyin": "yuandun",
          "suoxie": "yd",
          "other": "1953@ydx"
      },
      "yingdexi": {
          "name": "英德西",
          "code": "IIQ",
          "pinyin": "yingdexi",
          "suoxie": "ydx",
          "other": "1954@yfy"
      },
      "yongfengying": {
          "name": "永丰营",
          "code": "YYM",
          "pinyin": "yongfengying",
          "suoxie": "yfy",
          "other": "1955@yga"
      },
      "yanggang": {
          "name": "杨岗",
          "code": "YRB",
          "pinyin": "yanggang",
          "suoxie": "yg",
          "other": "1956@yga"
      },
      "yanggao": {
          "name": "阳高",
          "code": "YOV",
          "pinyin": "yanggao",
          "suoxie": "yg",
          "other": "1957@ygu"
      },
      "yanggu": {
          "name": "阳谷",
          "code": "YIK",
          "pinyin": "yanggu",
          "suoxie": "yg",
          "other": "1958@yha"
      },
      "youhao": {
          "name": "友好",
          "code": "YOB",
          "pinyin": "youhao",
          "suoxie": "yh",
          "other": "1959@yha"
      },
      "yuhang": {
          "name": "余杭",
          "code": "EVH",
          "pinyin": "yuhang",
          "suoxie": "yh",
          "other": "1960@yhc"
      },
      "yanhecheng": {
          "name": "沿河城",
          "code": "YHP",
          "pinyin": "yanhecheng",
          "suoxie": "yhc",
          "other": "1961@yhu"
      },
      "yanhui": {
          "name": "岩会",
          "code": "AEP",
          "pinyin": "yanhui",
          "suoxie": "yh",
          "other": "1962@yjh"
      },
      "yangjiuhe": {
          "name": "羊臼河",
          "code": "YHM",
          "pinyin": "yangjiuhe",
          "suoxie": "yjh",
          "other": "1963@yji"
      },
      "yongjia": {
          "name": "永嘉",
          "code": "URH",
          "pinyin": "yongjia",
          "suoxie": "yj",
          "other": "1964@yji"
      },
      "yingjie": {
          "name": "营街",
          "code": "YAM",
          "pinyin": "yingjie",
          "suoxie": "yj",
          "other": "1965@yji"
      },
      "yanjin": {
          "name": "盐津",
          "code": "AEW",
          "pinyin": "yanjin",
          "suoxie": "yj",
          "other": "1966@yji"
      },
      "yujiang": {
          "name": "余江",
          "code": "YHG",
          "pinyin": "yujiang",
          "suoxie": "yj",
          "other": "1967@yji"
      },
      "yanjiao": {
          "name": "燕郊",
          "code": "AJP",
          "pinyin": "yanjiao",
          "suoxie": "yj",
          "other": "1968@yji"
      },
      "yaojia": {
          "name": "姚家",
          "code": "YAT",
          "pinyin": "yaojia",
          "suoxie": "yj",
          "other": "1969@yjj"
      },
      "yuejiajing": {
          "name": "岳家井",
          "code": "YGJ",
          "pinyin": "yuejiajing",
          "suoxie": "yjj",
          "other": "1970@yjp"
      },
      "yijianpu": {
          "name": "一间堡",
          "code": "YJT",
          "pinyin": "yijianpu",
          "suoxie": "yjp",
          "other": "1971@yjs"
      },
      "yingjisha": {
          "name": "英吉沙",
          "code": "YIR",
          "pinyin": "yingjisha",
          "suoxie": "yjs",
          "other": "1972@yjs"
      },
      "yunjusi": {
          "name": "云居寺",
          "code": "AFP",
          "pinyin": "yunjusi",
          "suoxie": "yjs",
          "other": "1973@yjz"
      },
      "yanjiazhuang": {
          "name": "燕家庄",
          "code": "AZK",
          "pinyin": "yanjiazhuang",
          "suoxie": "yjz",
          "other": "1974@yka"
      },
      "yongkang": {
          "name": "永康",
          "code": "RFH",
          "pinyin": "yongkang",
          "suoxie": "yk",
          "other": "1975@ykd"
      },
      "yinlang": {
          "name": "银浪",
          "code": "YJX",
          "pinyin": "yinlang",
          "suoxie": "yl",
          "other": "1977@yla"
      },
      "yonglang": {
          "name": "永郎",
          "code": "YLW",
          "pinyin": "yonglang",
          "suoxie": "yl",
          "other": "1978@ylb"
      },
      "yiliangbei": {
          "name": "宜良北",
          "code": "YSM",
          "pinyin": "yiliangbei",
          "suoxie": "ylb",
          "other": "1979@yld"
      },
      "yongledian": {
          "name": "永乐店",
          "code": "YDY",
          "pinyin": "yongledian",
          "suoxie": "yld",
          "other": "1980@ylh"
      },
      "yilaha": {
          "name": "伊拉哈",
          "code": "YLX",
          "pinyin": "yilaha",
          "suoxie": "ylh",
          "other": "1981@yli"
      },
      "yilin": {
          "name": "伊林",
          "code": "YLB",
          "pinyin": "yilin",
          "suoxie": "yl",
          "other": "1982@yli"
      },
      "yangling": {
          "name": "杨陵",
          "code": "YSY",
          "pinyin": "yangling",
          "suoxie": "yl",
          "other": "1983@yli"
      },
      "yiliang": {
          "name": "彝良",
          "code": "ALW",
          "pinyin": "yiliang",
          "suoxie": "yl",
          "other": "1984@yli"
      },
      "yanglin": {
          "name": "杨林",
          "code": "YLM",
          "pinyin": "yanglin",
          "suoxie": "yl",
          "other": "1985@ylp"
      },
      "yuliangpu": {
          "name": "余粮堡",
          "code": "YLD",
          "pinyin": "yuliangpu",
          "suoxie": "ylp",
          "other": "1986@ylq"
      },
      "yangliuqing": {
          "name": "杨柳青",
          "code": "YQP",
          "pinyin": "yangliuqing",
          "suoxie": "ylq",
          "other": "1987@ylt"
      },
      "yueliangtian": {
          "name": "月亮田",
          "code": "YUM",
          "pinyin": "yueliangtian",
          "suoxie": "ylt",
          "other": "1988@yma"
      },
      "yima": {
          "name": "义马",
          "code": "YMF",
          "pinyin": "yima",
          "suoxie": "ym",
          "other": "1989@ymb"
      },
      "yangmingbu": {
          "name": "阳明堡",
          "code": "YVV",
          "pinyin": "yangmingbu",
          "suoxie": "ymb",
          "other": "1990@yme"
      },
      "yumen": {
          "name": "玉门",
          "code": "YXJ",
          "pinyin": "yumen",
          "suoxie": "ym",
          "other": "1991@yme"
      },
      "yunmeng": {
          "name": "云梦",
          "code": "YMN",
          "pinyin": "yunmeng",
          "suoxie": "ym",
          "other": "1992@ymo"
      },
      "yuanmou": {
          "name": "元谋",
          "code": "YMM",
          "pinyin": "yuanmou",
          "suoxie": "ym",
          "other": "1993@yms"
      },
      "yimianshan": {
          "name": "一面山",
          "code": "YST",
          "pinyin": "yimianshan",
          "suoxie": "yms",
          "other": "1994@yna"
      },
      "yinan": {
          "name": "沂南",
          "code": "YNK",
          "pinyin": "yinan",
          "suoxie": "yn",
          "other": "1995@yna"
      },
      "yinai": {
          "name": "宜耐",
          "code": "YVM",
          "pinyin": "yinai",
          "suoxie": "yn",
          "other": "1996@ynd"
      },
      "yiningdong": {
          "name": "伊宁东",
          "code": "YNR",
          "pinyin": "yiningdong",
          "suoxie": "ynd",
          "other": "1997@yps"
      },
      "yingpanshui": {
          "name": "营盘水",
          "code": "YZJ",
          "pinyin": "yingpanshui",
          "suoxie": "yps",
          "other": "1998@ypu"
      },
      "yangpu": {
          "name": "羊堡",
          "code": "ABM",
          "pinyin": "yangpu",
          "suoxie": "yp",
          "other": "1999@yqb"
      },
      "yangquanbei": {
          "name": "阳泉北",
          "code": "YPP",
          "pinyin": "yangquanbei",
          "suoxie": "yqb",
          "other": "2000@yqi"
      },
      "yueqing": {
          "name": "乐清",
          "code": "UPH",
          "pinyin": "yueqing",
          "suoxie": "yq",
          "other": "2001@yqi"
      },
      "yanqi": {
          "name": "焉耆",
          "code": "YSR",
          "pinyin": "yanqi",
          "suoxie": "yq",
          "other": "2002@yqi"
      },
      "yuanqian": {
          "name": "源迁",
          "code": "AQK",
          "pinyin": "yuanqian",
          "suoxie": "yq",
          "other": "2003@yqt"
      },
      "yaoqianhutun": {
          "name": "姚千户屯",
          "code": "YQT",
          "pinyin": "yaoqianhutun",
          "suoxie": "yqht",
          "other": "2004@yqu"
      },
      "yangqu": {
          "name": "阳曲",
          "code": "YQV",
          "pinyin": "yangqu",
          "suoxie": "yq",
          "other": "2005@ysg"
      },
      "yushugou": {
          "name": "榆树沟",
          "code": "YGP",
          "pinyin": "yushugou",
          "suoxie": "ysg",
          "other": "2006@ysh"
      },
      "yueshan": {
          "name": "月山",
          "code": "YBF",
          "pinyin": "yueshan",
          "suoxie": "ys",
          "other": "2007@ysh"
      },
      "yushi": {
          "name": "玉石",
          "code": "YSJ",
          "pinyin": "yushi",
          "suoxie": "ys",
          "other": "2008@ysh"
      },
      "yushe": [
          {
              "name": "玉舍",
              "code": "AUM",
              "pinyin": "yushe",
              "suoxie": "ys",
              "other": "2009@ysh"
          },
          {
              "name": "榆社",
              "code": "YSV",
              "pinyin": "yushe",
              "suoxie": "ys",
              "other": "2012@ysh"
          }
      ],
      "yanshi": {
          "name": "偃师",
          "code": "YSF",
          "pinyin": "yanshi",
          "suoxie": "ys",
          "other": "2010@ysh"
      },
      "yishui": {
          "name": "沂水",
          "code": "YUK",
          "pinyin": "yishui",
          "suoxie": "ys",
          "other": "2011@ysh"
      },
      "yingshang": {
          "name": "颍上",
          "code": "YVH",
          "pinyin": "yingshang",
          "suoxie": "ys",
          "other": "2013@ysh"
      },
      "yaoshang": {
          "name": "窑上",
          "code": "ASP",
          "pinyin": "yaoshang",
          "suoxie": "ys",
          "other": "2014@ysh"
      },
      "yuanshi": {
          "name": "元氏",
          "code": "YSP",
          "pinyin": "yuanshi",
          "suoxie": "ys",
          "other": "2015@ysl"
      },
      "yangshuling": {
          "name": "杨树岭",
          "code": "YAD",
          "pinyin": "yangshuling",
          "suoxie": "ysl",
          "other": "2016@ysp"
      },
      "yesanpo": {
          "name": "野三坡",
          "code": "AIP",
          "pinyin": "yesanpo",
          "suoxie": "ysp",
          "other": "2017@yst"
      },
      "yushutun": {
          "name": "榆树屯",
          "code": "YSX",
          "pinyin": "yushutun",
          "suoxie": "yst",
          "other": "2018@yst"
      },
      "yushutai": {
          "name": "榆树台",
          "code": "YUT",
          "pinyin": "yushutai",
          "suoxie": "yst",
          "other": "2019@ysz"
      },
      "yingshouyingzi": {
          "name": "鹰手营子",
          "code": "YIP",
          "pinyin": "yingshouyingzi",
          "suoxie": "ysyz",
          "other": "2020@yta"
      },
      "yuantan": {
          "name": "源潭",
          "code": "YTQ",
          "pinyin": "yuantan",
          "suoxie": "yt",
          "other": "2021@ytp"
      },
      "yatunpu": {
          "name": "牙屯堡",
          "code": "YTZ",
          "pinyin": "yatunpu",
          "suoxie": "ytp",
          "other": "2022@yts"
      },
      "yantongshan": {
          "name": "烟筒山",
          "code": "YSL",
          "pinyin": "yantongshan",
          "suoxie": "yts",
          "other": "2023@ytt"
      },
      "yantongtun": {
          "name": "烟筒屯",
          "code": "YUX",
          "pinyin": "yantongtun",
          "suoxie": "ytt",
          "other": "2024@yws"
      },
      "yangweishao": {
          "name": "羊尾哨",
          "code": "YWM",
          "pinyin": "yangweishao",
          "suoxie": "yws",
          "other": "2025@yxi"
      },
      "yuexi": {
          "name": "越西",
          "code": "YHW",
          "pinyin": "yuexi",
          "suoxie": "yx",
          "other": "2026@yxi"
      },
      "youxian": {
          "name": "攸县",
          "code": "YOG",
          "pinyin": "youxian",
          "suoxie": "yx",
          "other": "2027@yxi"
      },
      "yongxiu": {
          "name": "永修",
          "code": "ACG",
          "pinyin": "yongxiu",
          "suoxie": "yx",
          "other": "2028@yxx"
      },
      "yuxixi": {
          "name": "玉溪西",
          "code": "YXM",
          "pinyin": "yuxixi",
          "suoxie": "yxx",
          "other": "2029@yya"
      },
      "yuyao": {
          "name": "余姚",
          "code": "YYH",
          "pinyin": "yuyao",
          "suoxie": "yy",
          "other": "2031@yya"
      },
      "youyang": {
          "name": "酉阳",
          "code": "AFW",
          "pinyin": "youyang",
          "suoxie": "yy",
          "other": "2032@yyd"
      },
      "yueyangdong": {
          "name": "岳阳东",
          "code": "YIQ",
          "pinyin": "yueyangdong",
          "suoxie": "yyd",
          "other": "2033@yyi"
      },
      "yangyi": {
          "name": "阳邑",
          "code": "ARP",
          "pinyin": "yangyi",
          "suoxie": "yy",
          "other": "2034@yyu"
      },
      "yayuan": {
          "name": "鸭园",
          "code": "YYL",
          "pinyin": "yayuan",
          "suoxie": "yy",
          "other": "2035@yyz"
      },
      "yuanyangzhen": {
          "name": "鸳鸯镇",
          "code": "YYJ",
          "pinyin": "yuanyangzhen",
          "suoxie": "yyz",
          "other": "2036@yzb"
      },
      "yanzibian": {
          "name": "燕子砭",
          "code": "YZY",
          "pinyin": "yanzibian",
          "suoxie": "yzb",
          "other": "2037@yzh"
      },
      "yizheng": {
          "name": "仪征",
          "code": "UZH",
          "pinyin": "yizheng",
          "suoxie": "yz",
          "other": "2038@yzh"
      },
      "yizhou": {
          "name": "宜州",
          "code": "YSZ",
          "pinyin": "yizhou",
          "suoxie": "yz",
          "other": "2039@yzh"
      },
      "yanzhou": {
          "name": "兖州",
          "code": "YZK",
          "pinyin": "yanzhou",
          "suoxie": "yz",
          "other": "2040@yzi"
      },
      "yizi": {
          "name": "迤资",
          "code": "YQM",
          "pinyin": "yizi",
          "suoxie": "yz",
          "other": "2041@yzw"
      },
      "yangzhewo": {
          "name": "羊者窝",
          "code": "AEM",
          "pinyin": "yangzhewo",
          "suoxie": "yzw",
          "other": "2042@yzz"
      },
      "yangzhangzi": {
          "name": "杨杖子",
          "code": "YZD",
          "pinyin": "yangzhangzi",
          "suoxie": "yzz",
          "other": "2043@zan"
      },
      "zhenan": {
          "name": "镇安",
          "code": "ZEY",
          "pinyin": "zhenan",
          "suoxie": "za",
          "other": "2044@zan"
      },
      "zhian": {
          "name": "治安",
          "code": "ZAD",
          "pinyin": "zhian",
          "suoxie": "za",
          "other": "2045@zba"
      },
      "zhaobai": {
          "name": "招柏",
          "code": "ZBP",
          "pinyin": "zhaobai",
          "suoxie": "zb",
          "other": "2046@zbw"
      },
      "zhangbaiwan": {
          "name": "张百湾",
          "code": "ZUP",
          "pinyin": "zhangbaiwan",
          "suoxie": "zbw",
          "other": "2047@zcc"
      },
      "zhongchuanjichang": {
          "name": "中川机场",
          "code": "ZJJ",
          "pinyin": "zhongchuanjichang",
          "suoxie": "zcjc",
          "other": "2048@zch"
      },
      "zhicheng": {
          "name": "枝城",
          "code": "ZCN",
          "pinyin": "zhicheng",
          "suoxie": "zc",
          "other": "2049@zch"
      },
      "zichang": {
          "name": "子长",
          "code": "ZHY",
          "pinyin": "zichang",
          "suoxie": "zc",
          "other": "2050@zch"
      },
      "zhucheng": {
          "name": "诸城",
          "code": "ZQK",
          "pinyin": "zhucheng",
          "suoxie": "zc",
          "other": "2051@zch"
      },
      "zoucheng": {
          "name": "邹城",
          "code": "ZIK",
          "pinyin": "zoucheng",
          "suoxie": "zc",
          "other": "2052@zch"
      },
      "zhaocheng": {
          "name": "赵城",
          "code": "ZCV",
          "pinyin": "zhaocheng",
          "suoxie": "zc",
          "other": "2053@zda"
      },
      "zhangdang": {
          "name": "章党",
          "code": "ZHT",
          "pinyin": "zhangdang",
          "suoxie": "zd",
          "other": "2054@zdi"
      },
      "zhengding": {
          "name": "正定",
          "code": "ZDP",
          "pinyin": "zhengding",
          "suoxie": "zd",
          "other": "2055@zdo"
      },
      "zhaodong": {
          "name": "肇东",
          "code": "ZDB",
          "pinyin": "zhaodong",
          "suoxie": "zd",
          "other": "2056@zfp"
      },
      "zhaofupu": {
          "name": "照福铺",
          "code": "ZFM",
          "pinyin": "zhaofupu",
          "suoxie": "zfp",
          "other": "2057@zgt"
      },
      "zhanggutai": {
          "name": "章古台",
          "code": "ZGD",
          "pinyin": "zhanggutai",
          "suoxie": "zgt",
          "other": "2058@zgu"
      },
      "zhaoguang": {
          "name": "赵光",
          "code": "ZGB",
          "pinyin": "zhaoguang",
          "suoxie": "zg",
          "other": "2059@zhe"
      },
      "zhonghe": {
          "name": "中和",
          "code": "ZHX",
          "pinyin": "zhonghe",
          "suoxie": "zh",
          "other": "2060@zhm"
      },
      "zhonghuamen": {
          "name": "中华门",
          "code": "VNH",
          "pinyin": "zhonghuamen",
          "suoxie": "zhm",
          "other": "2061@zjb"
      },
      "zhijiangbei": {
          "name": "枝江北",
          "code": "ZIN",
          "pinyin": "zhijiangbei",
          "suoxie": "zjb",
          "other": "2062@zjc"
      },
      "zhongjiacun": {
          "name": "钟家村",
          "code": "ZJY",
          "pinyin": "zhongjiacun",
          "suoxie": "zjc",
          "other": "2063@zjg"
      },
      "zhujiagou": {
          "name": "朱家沟",
          "code": "ZUB",
          "pinyin": "zhujiagou",
          "suoxie": "zjg",
          "other": "2064@zjg"
      },
      "zijingguan": {
          "name": "紫荆关",
          "code": "ZYP",
          "pinyin": "zijingguan",
          "suoxie": "zjg",
          "other": "2065@zji"
      },
      "zhoujia": {
          "name": "周家",
          "code": "ZOB",
          "pinyin": "zhoujia",
          "suoxie": "zj",
          "other": "2066@zji"
      },
      "zhuji": {
          "name": "诸暨",
          "code": "ZDH",
          "pinyin": "zhuji",
          "suoxie": "zj",
          "other": "2067@zjn"
      },
      "zhenjiangnan": {
          "name": "镇江南",
          "code": "ZEH",
          "pinyin": "zhenjiangnan",
          "suoxie": "zjn",
          "other": "2068@zjt"
      },
      "zhoujiatun": {
          "name": "周家屯",
          "code": "ZOD",
          "pinyin": "zhoujiatun",
          "suoxie": "zjt",
          "other": "2069@zjw"
      },
      "zhujiawan": {
          "name": "褚家湾",
          "code": "CWJ",
          "pinyin": "zhujiawan",
          "suoxie": "zjw",
          "other": "2070@zjx"
      },
      "zhanjiangxi": {
          "name": "湛江西",
          "code": "ZWQ",
          "pinyin": "zhanjiangxi",
          "suoxie": "zjx",
          "other": "2071@zjy"
      },
      "zhujiayao": {
          "name": "朱家窑",
          "code": "ZUJ",
          "pinyin": "zhujiayao",
          "suoxie": "zjy",
          "other": "2072@zjz"
      },
      "zengjiapingzi": {
          "name": "曾家坪子",
          "code": "ZBW",
          "pinyin": "zengjiapingzi",
          "suoxie": "zjpz",
          "other": "2073@zla"
      },
      "zhanglan": {
          "name": "张兰",
          "code": "ZLV",
          "pinyin": "zhanglan",
          "suoxie": "zl",
          "other": "2074@zla"
      },
      "zhenlai": {
          "name": "镇赉",
          "code": "ZLT",
          "pinyin": "zhenlai",
          "suoxie": "zl",
          "other": "2075@zli"
      },
      "zaolin": {
          "name": "枣林",
          "code": "ZIV",
          "pinyin": "zaolin",
          "suoxie": "zl",
          "other": "2076@zlt"
      },
      "zhalute": {
          "name": "扎鲁特",
          "code": "ZLD",
          "pinyin": "zhalute",
          "suoxie": "zlt",
          "other": "2077@zlx"
      },
      "zhalainuoerxi": {
          "name": "扎赉诺尔西",
          "code": "ZXX",
          "pinyin": "zhalainuoerxi",
          "suoxie": "zlrex",
          "other": "2078@zmt"
      },
      "zhangmutou": {
          "name": "樟木头",
          "code": "ZOQ",
          "pinyin": "zhangmutou",
          "suoxie": "zmt",
          "other": "2079@zmu"
      },
      "zhongmu": {
          "name": "中牟",
          "code": "ZGF",
          "pinyin": "zhongmu",
          "suoxie": "zm",
          "other": "2080@znd"
      },
      "zhongningdong": {
          "name": "中宁东",
          "code": "ZDJ",
          "pinyin": "zhongningdong",
          "suoxie": "znd",
          "other": "2081@zni"
      },
      "zhongning": {
          "name": "中宁",
          "code": "VNJ",
          "pinyin": "zhongning",
          "suoxie": "zn",
          "other": "2082@znn"
      },
      "zhongningnan": {
          "name": "中宁南",
          "code": "ZNJ",
          "pinyin": "zhongningnan",
          "suoxie": "znn",
          "other": "2083@zpi"
      },
      "zhenping": {
          "name": "镇平",
          "code": "ZPF",
          "pinyin": "zhenping",
          "suoxie": "zp",
          "other": "2084@zpi"
      },
      "zhangping": {
          "name": "漳平",
          "code": "ZPS",
          "pinyin": "zhangping",
          "suoxie": "zp",
          "other": "2085@zpu"
      },
      "zepu": {
          "name": "泽普",
          "code": "ZPR",
          "pinyin": "zepu",
          "suoxie": "zp",
          "other": "2086@zqi"
      },
      "zaoqiang": {
          "name": "枣强",
          "code": "ZVP",
          "pinyin": "zaoqiang",
          "suoxie": "zq",
          "other": "2087@zqi"
      },
      "zhangqiao": {
          "name": "张桥",
          "code": "ZQY",
          "pinyin": "zhangqiao",
          "suoxie": "zq",
          "other": "2088@zqi"
      },
      "zhangqiu": {
          "name": "章丘",
          "code": "ZTK",
          "pinyin": "zhangqiu",
          "suoxie": "zq",
          "other": "2089@zrh"
      },
      "zhurihe": {
          "name": "朱日和",
          "code": "ZRC",
          "pinyin": "zhurihe",
          "suoxie": "zrh",
          "other": "2090@zrl"
      },
      "zerunli": {
          "name": "泽润里",
          "code": "ZLM",
          "pinyin": "zerunli",
          "suoxie": "zrl",
          "other": "2091@zsb"
      },
      "zhongshanbei": {
          "name": "中山北",
          "code": "ZGQ",
          "pinyin": "zhongshanbei",
          "suoxie": "zsb",
          "other": "2092@zsd"
      },
      "zhangshudong": {
          "name": "樟树东",
          "code": "ZOG",
          "pinyin": "zhangshudong",
          "suoxie": "zsd",
          "other": "2093@zsh"
      },
      "zhusihua": {
          "name": "珠斯花",
          "code": "ZHD",
          "pinyin": "zhusihua",
          "suoxie": "zsh",
          "other": "2094@zsh"
      },
      "zhongshan": [
          {
              "name": "中山",
              "code": "ZSQ",
              "pinyin": "zhongshan",
              "suoxie": "zs",
              "other": "2095@zsh"
          },
          {
              "name": "钟山",
              "code": "ZSZ",
              "pinyin": "zhongshan",
              "suoxie": "zs",
              "other": "2097@zsh"
          }
      ],
      "zhashui": {
          "name": "柞水",
          "code": "ZSY",
          "pinyin": "zhashui",
          "suoxie": "zs",
          "other": "2096@zsh"
      },
      "zhangshu": {
          "name": "樟树",
          "code": "ZSG",
          "pinyin": "zhangshu",
          "suoxie": "zs",
          "other": "2098@zwo"
      },
      "zhuwo": {
          "name": "珠窝",
          "code": "ZOP",
          "pinyin": "zhuwo",
          "suoxie": "zw",
          "other": "2099@zwt"
      },
      "zhangweitun": {
          "name": "张维屯",
          "code": "ZWB",
          "pinyin": "zhangweitun",
          "suoxie": "zwt",
          "other": "2100@zwu"
      },
      "zhangwu": {
          "name": "彰武",
          "code": "ZWD",
          "pinyin": "zhangwu",
          "suoxie": "zw",
          "other": "2101@zxi"
      },
      "zongxi": {
          "name": "棕溪",
          "code": "ZOY",
          "pinyin": "zongxi",
          "suoxie": "zx",
          "other": "2102@zxi"
      },
      "zhongxiang": {
          "name": "钟祥",
          "code": "ZTN",
          "pinyin": "zhongxiang",
          "suoxie": "zx",
          "other": "2103@zxi"
      },
      "zixi": {
          "name": "资溪",
          "code": "ZXS",
          "pinyin": "zixi",
          "suoxie": "zx",
          "other": "2104@zxi"
      },
      "zhenxi": {
          "name": "镇西",
          "code": "ZVT",
          "pinyin": "zhenxi",
          "suoxie": "zx",
          "other": "2105@zxi"
      },
      "zhangxin": {
          "name": "张辛",
          "code": "ZIP",
          "pinyin": "zhangxin",
          "suoxie": "zx",
          "other": "2106@zxq"
      },
      "zhengxiangbaiqi": {
          "name": "正镶白旗",
          "code": "ZXC",
          "pinyin": "zhengxiangbaiqi",
          "suoxie": "zxbq",
          "other": "2107@zya"
      },
      "zaoyang": {
          "name": "枣阳",
          "code": "ZYN",
          "pinyin": "zaoyang",
          "suoxie": "zy",
          "other": "2109@zyb"
      },
      "zhuyuanba": {
          "name": "竹园坝",
          "code": "ZAW",
          "pinyin": "zhuyuanba",
          "suoxie": "zyb",
          "other": "2110@zye"
      },
      "zhangye": {
          "name": "张掖",
          "code": "ZYJ",
          "pinyin": "zhangye",
          "suoxie": "zy",
          "other": "2111@zyu"
      },
      "zhenyuan": {
          "name": "镇远",
          "code": "ZUW",
          "pinyin": "zhenyuan",
          "suoxie": "zy",
          "other": "2112@zzd"
      },
      "zhangzhoudong": {
          "name": "漳州东",
          "code": "GOS",
          "pinyin": "zhangzhoudong",
          "suoxie": "zzd",
          "other": "2113@zzh"
      },
      "zhangzhou": {
          "name": "漳州",
          "code": "ZUS",
          "pinyin": "zhangzhou",
          "suoxie": "zz",
          "other": "2114@zzh"
      },
      "zhuangzhi": {
          "name": "壮志",
          "code": "ZUX",
          "pinyin": "zhuangzhi",
          "suoxie": "zz",
          "other": "2115@zzh"
      },
      "zizhou": {
          "name": "子洲",
          "code": "ZZY",
          "pinyin": "zizhou",
          "suoxie": "zz",
          "other": "2116@zzh"
      },
      "zhongzhai": {
          "name": "中寨",
          "code": "ZZM",
          "pinyin": "zhongzhai",
          "suoxie": "zz",
          "other": "2117@zzh"
      },
      "zhuozhou": {
          "name": "涿州",
          "code": "ZXP",
          "pinyin": "zhuozhou",
          "suoxie": "zz",
          "other": "2118@zzi"
      },
      "zhazi": {
          "name": "咋子",
          "code": "ZAL",
          "pinyin": "zhazi",
          "suoxie": "zz",
          "other": "2119@zzs"
      },
      "zhuozishan": {
          "name": "卓资山",
          "code": "ZZC",
          "pinyin": "zhuozishan",
          "suoxie": "zzs",
          "other": "2120@zzx"
      },
      "zhuzhouxi": {
          "name": "株洲西",
          "code": "ZAQ",
          "pinyin": "zhuzhouxi",
          "suoxie": "zzx",
          "other": "2121@zzx"
      },
      "zhengzhouxi": {
          "name": "郑州西",
          "code": "XPF",
          "pinyin": "zhengzhouxi",
          "suoxie": "zzx",
          "other": "2122@abq"
      },
      "abagaqi": {
          "name": "阿巴嘎旗",
          "code": "AQC",
          "pinyin": "abagaqi",
          "suoxie": "abgq",
          "other": "2123@aeb"
      },
      "aershanbei": {
          "name": "阿尔山北",
          "code": "ARX",
          "pinyin": "aershanbei",
          "suoxie": "aesb",
          "other": "2124@alt"
      },
      "aletai": {
          "name": "阿勒泰",
          "code": "AUR",
          "pinyin": "aletai",
          "suoxie": "alt",
          "other": "2125@are"
      },
      "anren": {
          "name": "安仁",
          "code": "ARG",
          "pinyin": "anren",
          "suoxie": "ar",
          "other": "2126@asx"
      },
      "anshunxi": {
          "name": "安顺西",
          "code": "ASE",
          "pinyin": "anshunxi",
          "suoxie": "asx",
          "other": "2127@atx"
      },
      "antuxi": {
          "name": "安图西",
          "code": "AXL",
          "pinyin": "antuxi",
          "suoxie": "atx",
          "other": "2128@ayd"
      },
      "anyangdong": {
          "name": "安阳东",
          "code": "ADF",
          "pinyin": "anyangdong",
          "suoxie": "ayd",
          "other": "2129@bba"
      },
      "bobai": {
          "name": "博白",
          "code": "BBZ",
          "pinyin": "bobai",
          "suoxie": "bb",
          "other": "2130@bbu"
      },
      "babu": {
          "name": "八步",
          "code": "BBE",
          "pinyin": "babu",
          "suoxie": "bb",
          "other": "2131@bch"
      },
      "bencha": {
          "name": "栟茶",
          "code": "FWH",
          "pinyin": "bencha",
          "suoxie": "bc",
          "other": "2132@bdd"
      },
      "baodingdong": {
          "name": "保定东",
          "code": "BMP",
          "pinyin": "baodingdong",
          "suoxie": "bdd",
          "other": "2133@bfs"
      },
      "bafangshan": {
          "name": "八方山",
          "code": "FGQ",
          "pinyin": "bafangshan",
          "suoxie": "bfs",
          "other": "2134@bgo"
      },
      "baigou": {
          "name": "白沟",
          "code": "FEP",
          "pinyin": "baigou",
          "suoxie": "bg",
          "other": "2135@bha"
      },
      "binhai": {
          "name": "滨海",
          "code": "FHP",
          "pinyin": "binhai",
          "suoxie": "bh",
          "other": "2136@bhb"
      },
      "binhaibei": {
          "name": "滨海北",
          "code": "FCP",
          "pinyin": "binhaibei",
          "suoxie": "bhb",
          "other": "2137@bjn"
      },
      "baojinan": {
          "name": "宝鸡南",
          "code": "BBY",
          "pinyin": "baojinan",
          "suoxie": "bjn",
          "other": "2138@bjz"
      },
      "beijingzi": {
          "name": "北井子",
          "code": "BRT",
          "pinyin": "beijingzi",
          "suoxie": "bjz",
          "other": "2139@bmj"
      },
      "baimajing": {
          "name": "白马井",
          "code": "BFQ",
          "pinyin": "baimajing",
          "suoxie": "bmj",
          "other": "2140@bqi"
      },
      "baoqing": {
          "name": "宝清",
          "code": "BUB",
          "pinyin": "baoqing",
          "suoxie": "bq",
          "other": "2141@bsh"
      },
      "bishan": {
          "name": "璧山",
          "code": "FZW",
          "pinyin": "bishan",
          "suoxie": "bs",
          "other": "2142@bsp"
      },
      "baishapu": {
          "name": "白沙铺",
          "code": "BSN",
          "pinyin": "baishapu",
          "suoxie": "bsp",
          "other": "2143@bsx"
      },
      "baishuixian": {
          "name": "白水县",
          "code": "BGY",
          "pinyin": "baishuixian",
          "suoxie": "bsx",
          "other": "2144@bta"
      },
      "bantang": {
          "name": "板塘",
          "code": "NGQ",
          "pinyin": "bantang",
          "suoxie": "bt",
          "other": "2145@bxc"
      },
      "benxixincheng": {
          "name": "本溪新城",
          "code": "BVT",
          "pinyin": "benxixincheng",
          "suoxie": "bxxc",
          "other": "2146@bxi"
      },
      "binxian": {
          "name": "彬县",
          "code": "BXY",
          "pinyin": "binxian",
          "suoxie": "bx",
          "other": "2147@bya"
      },
      "binyang": {
          "name": "宾阳",
          "code": "UKZ",
          "pinyin": "binyang",
          "suoxie": "by",
          "other": "2148@byd"
      },
      "baiyangdian": {
          "name": "白洋淀",
          "code": "FWP",
          "pinyin": "baiyangdian",
          "suoxie": "byd",
          "other": "2149@byi"
      },
      "baiyi": {
          "name": "百宜",
          "code": "FHW",
          "pinyin": "baiyi",
          "suoxie": "by",
          "other": "2150@byn"
      },
      "baiyinhuanan": {
          "name": "白音华南",
          "code": "FNC",
          "pinyin": "baiyinhuanan",
          "suoxie": "byhn",
          "other": "2151@bzd"
      },
      "bazhongdong": {
          "name": "巴中东",
          "code": "BDE",
          "pinyin": "bazhongdong",
          "suoxie": "bzd",
          "other": "2152@bzh"
      },
      "binzhou": {
          "name": "滨州",
          "code": "BIK",
          "pinyin": "binzhou",
          "suoxie": "bz",
          "other": "2153@bzx"
      },
      "bazhouxi": {
          "name": "霸州西",
          "code": "FOP",
          "pinyin": "bazhouxi",
          "suoxie": "bzx",
          "other": "2154@cch"
      },
      "chengcheng": {
          "name": "澄城",
          "code": "CUY",
          "pinyin": "chengcheng",
          "suoxie": "cc",
          "other": "2155@cgb"
      },
      "chenggubei": {
          "name": "城固北",
          "code": "CBY",
          "pinyin": "chenggubei",
          "suoxie": "cgb",
          "other": "2156@cgh"
      },
      "chaganhu": {
          "name": "查干湖",
          "code": "VAT",
          "pinyin": "chaganhu",
          "suoxie": "cgh",
          "other": "2157@chd"
      },
      "chaohudong": {
          "name": "巢湖东",
          "code": "GUH",
          "pinyin": "chaohudong",
          "suoxie": "chd",
          "other": "2158@cji"
      },
      "congjiang": {
          "name": "从江",
          "code": "KNW",
          "pinyin": "congjiang",
          "suoxie": "cj",
          "other": "2159@cka"
      },
      "chaka": {
          "name": "茶卡",
          "code": "CVO",
          "pinyin": "chaka",
          "suoxie": "ck",
          "other": "2160@clh"
      },
      "changlinhe": {
          "name": "长临河",
          "code": "FVH",
          "pinyin": "changlinhe",
          "suoxie": "clh",
          "other": "2161@cln"
      },
      "chalingnan": {
          "name": "茶陵南",
          "code": "CNG",
          "pinyin": "chalingnan",
          "suoxie": "cln",
          "other": "2162@cpd"
      },
      "changpingdong": {
          "name": "常平东",
          "code": "FQQ",
          "pinyin": "changpingdong",
          "suoxie": "cpd",
          "other": "2163@cpn"
      },
      "changpingnan": {
          "name": "常平南",
          "code": "FPQ",
          "pinyin": "changpingnan",
          "suoxie": "cpn",
          "other": "2164@cqq"
      },
      "changqingqiao": {
          "name": "长庆桥",
          "code": "CQJ",
          "pinyin": "changqingqiao",
          "suoxie": "cqq",
          "other": "2165@csb"
      },
      "changshoubei": {
          "name": "长寿北",
          "code": "COW",
          "pinyin": "changshoubei",
          "suoxie": "csb",
          "other": "2166@csh"
      },
      "changshouhu": {
          "name": "长寿湖",
          "code": "CSE",
          "pinyin": "changshouhu",
          "suoxie": "csh",
          "other": "2167@csh"
      },
      "chaoshan": {
          "name": "潮汕",
          "code": "CBQ",
          "pinyin": "chaoshan",
          "suoxie": "cs",
          "other": "2168@csh"
      },
      "changshan": {
          "name": "常山",
          "code": "CSU",
          "pinyin": "changshan",
          "suoxie": "cs",
          "other": "2169@csx"
      },
      "changshaxi": {
          "name": "长沙西",
          "code": "RXQ",
          "pinyin": "changshaxi",
          "suoxie": "csx",
          "other": "2170@cti"
      },
      "chaotian": {
          "name": "朝天",
          "code": "CTE",
          "pinyin": "chaotian",
          "suoxie": "ct",
          "other": "2171@ctn"
      },
      "changtingnan": {
          "name": "长汀南",
          "code": "CNS",
          "pinyin": "changtingnan",
          "suoxie": "ctn",
          "other": "2172@cwu"
      },
      "changwu": {
          "name": "长武",
          "code": "CWY",
          "pinyin": "changwu",
          "suoxie": "cw",
          "other": "2173@cxi"
      },
      "changxing": {
          "name": "长兴",
          "code": "CBH",
          "pinyin": "changxing",
          "suoxie": "cx",
          "other": "2174@cxi"
      },
      "cangxi": {
          "name": "苍溪",
          "code": "CXE",
          "pinyin": "cangxi",
          "suoxie": "cx",
          "other": "2175@cya"
      },
      "changyang": {
          "name": "长阳",
          "code": "CYN",
          "pinyin": "changyang",
          "suoxie": "cy",
          "other": "2176@cya"
      },
      "chaoyang": {
          "name": "潮阳",
          "code": "CNQ",
          "pinyin": "chaoyang",
          "suoxie": "cy",
          "other": "2177@czt"
      },
      "chengzitan": {
          "name": "城子坦",
          "code": "CWT",
          "pinyin": "chengzitan",
          "suoxie": "czt",
          "other": "2178@dad"
      },
      "dongandong": {
          "name": "东安东",
          "code": "DCZ",
          "pinyin": "dongandong",
          "suoxie": "dad",
          "other": "2179@dba"
      },
      "debao": {
          "name": "德保",
          "code": "RBZ",
          "pinyin": "debao",
          "suoxie": "db",
          "other": "2180@dch"
      },
      "duchang": {
          "name": "都昌",
          "code": "DCG",
          "pinyin": "duchang",
          "suoxie": "dc",
          "other": "2181@dch"
      },
      "dongcha": {
          "name": "东岔",
          "code": "DCJ",
          "pinyin": "dongcha",
          "suoxie": "dc",
          "other": "2182@dcn"
      },
      "dongchengnan": {
          "name": "东城南",
          "code": "IYQ",
          "pinyin": "dongchengnan",
          "suoxie": "dcn",
          "other": "2183@ddh"
      },
      "dongdaihe": {
          "name": "东戴河",
          "code": "RDD",
          "pinyin": "dongdaihe",
          "suoxie": "ddh",
          "other": "2184@ddx"
      },
      "dandongxi": {
          "name": "丹东西",
          "code": "RWT",
          "pinyin": "dandongxi",
          "suoxie": "ddx",
          "other": "2185@deh"
      },
      "dongerdaohe": {
          "name": "东二道河",
          "code": "DRB",
          "pinyin": "dongerdaohe",
          "suoxie": "dedh",
          "other": "2186@dfe"
      },
      "dafeng": {
          "name": "大丰",
          "code": "KRQ",
          "pinyin": "dafeng",
          "suoxie": "df",
          "other": "2187@dfn"
      },
      "dafangnan": {
          "name": "大方南",
          "code": "DNE",
          "pinyin": "dafangnan",
          "suoxie": "dfn",
          "other": "2188@dgb"
      },
      "donggangbei": {
          "name": "东港北",
          "code": "RGT",
          "pinyin": "donggangbei",
          "suoxie": "dgb",
          "other": "2189@dgs"
      },
      "dagushan": {
          "name": "大孤山",
          "code": "RMT",
          "pinyin": "dagushan",
          "suoxie": "dgs",
          "other": "2190@dgu"
      },
      "dongguan": {
          "name": "东莞",
          "code": "RTQ",
          "pinyin": "dongguan",
          "suoxie": "dg",
          "other": "2191@dhd"
      },
      "dinghudong": {
          "name": "鼎湖东",
          "code": "UWQ",
          "pinyin": "dinghudong",
          "suoxie": "dhd",
          "other": "2192@dhs"
      },
      "dinghushan": {
          "name": "鼎湖山",
          "code": "NVQ",
          "pinyin": "dinghushan",
          "suoxie": "dhs",
          "other": "2193@dji"
      },
      "daojiao": {
          "name": "道滘",
          "code": "RRQ",
          "pinyin": "daojiao",
          "suoxie": "dj",
          "other": "2194@dji"
      },
      "dongjing": {
          "name": "洞井",
          "code": "FWQ",
          "pinyin": "dongjing",
          "suoxie": "dj",
          "other": "2195@dji"
      },
      "dianjiang": {
          "name": "垫江",
          "code": "DJE",
          "pinyin": "dianjiang",
          "suoxie": "dj",
          "other": "2196@dju"
      },
      "daju": {
          "name": "大苴",
          "code": "DIM",
          "pinyin": "daju",
          "suoxie": "dj",
          "other": "2197@dli"
      },
      "dalangzhen": {
          "name": "大朗镇",
          "code": "KOQ",
          "pinyin": "dalangzhen",
          "suoxie": "dlz",
          "other": "2199@dqg"
      },
      "daqinggou": {
          "name": "大青沟",
          "code": "DSD",
          "pinyin": "daqinggou",
          "suoxie": "dqg",
          "other": "2200@dqi"
      },
      "deqing": {
          "name": "德清",
          "code": "DRH",
          "pinyin": "deqing",
          "suoxie": "dq",
          "other": "2201@dsn"
      },
      "dangshannan": {
          "name": "砀山南",
          "code": "PRH",
          "pinyin": "dangshannan",
          "suoxie": "dsn",
          "other": "2202@dsn"
      },
      "dashitounan": {
          "name": "大石头南",
          "code": "DAL",
          "pinyin": "dashitounan",
          "suoxie": "dstn",
          "other": "2203@dtd"
      },
      "dangtudong": {
          "name": "当涂东",
          "code": "OWH",
          "pinyin": "dangtudong",
          "suoxie": "dtd",
          "other": "2204@dtx"
      },
      "datongxi": {
          "name": "大通西",
          "code": "DTO",
          "pinyin": "datongxi",
          "suoxie": "dtx",
          "other": "2205@dwa"
      },
      "dawang": {
          "name": "大旺",
          "code": "WWQ",
          "pinyin": "dawang",
          "suoxie": "dw",
          "other": "2206@dxb"
      },
      "dingxibei": {
          "name": "定西北",
          "code": "DNJ",
          "pinyin": "dingxibei",
          "suoxie": "dxb",
          "other": "2207@dxd"
      },
      "dexingdong": {
          "name": "德兴东",
          "code": "DDG",
          "pinyin": "dexingdong",
          "suoxie": "dxd",
          "other": "2208@dxi"
      },
      "dexing": {
          "name": "德兴",
          "code": "DWG",
          "pinyin": "dexing",
          "suoxie": "dx",
          "other": "2209@dxs"
      },
      "danxiashan": {
          "name": "丹霞山",
          "code": "IRQ",
          "pinyin": "danxiashan",
          "suoxie": "dxs",
          "other": "2210@dyb"
      },
      "dayebei": {
          "name": "大冶北",
          "code": "DBN",
          "pinyin": "dayebei",
          "suoxie": "dyb",
          "other": "2211@dyd"
      },
      "duyundong": {
          "name": "都匀东",
          "code": "KJW",
          "pinyin": "duyundong",
          "suoxie": "dyd",
          "other": "2212@dyn"
      },
      "dayu": {
          "name": "大余",
          "code": "DYG",
          "pinyin": "dayu",
          "suoxie": "dy",
          "other": "2214@dzd"
      },
      "dingzhoudong": {
          "name": "定州东",
          "code": "DOP",
          "pinyin": "dingzhoudong",
          "suoxie": "dzd",
          "other": "2215@dzh"
      },
      "duanzhou": {
          "name": "端州",
          "code": "WZQ",
          "pinyin": "duanzhou",
          "suoxie": "dz",
          "other": "2216@dzn"
      },
      "dazunan": {
          "name": "大足南",
          "code": "FQW",
          "pinyin": "dazunan",
          "suoxie": "dzn",
          "other": "2217@ems"
      },
      "emeishan": {
          "name": "峨眉山",
          "code": "IXW",
          "pinyin": "emeishan",
          "suoxie": "ems",
          "other": "2218@epg"
      },
      "epanggong": {
          "name": "阿房宫",
          "code": "EGY",
          "pinyin": "epanggong",
          "suoxie": "epg",
          "other": "2219@ezd"
      },
      "ezhoudong": {
          "name": "鄂州东",
          "code": "EFN",
          "pinyin": "ezhoudong",
          "suoxie": "ezd",
          "other": "2220@fcb"
      },
      "fangchenggangbei": {
          "name": "防城港北",
          "code": "FBZ",
          "pinyin": "fangchenggangbei",
          "suoxie": "fcgb",
          "other": "2221@fcd"
      },
      "fengchengdong": {
          "name": "凤城东",
          "code": "FDT",
          "pinyin": "fengchengdong",
          "suoxie": "fcd",
          "other": "2222@fch"
      },
      "fuchuan": {
          "name": "富川",
          "code": "FDZ",
          "pinyin": "fuchuan",
          "suoxie": "fc",
          "other": "2223@fcx"
      },
      "fanchangxi": {
          "name": "繁昌西",
          "code": "PUH",
          "pinyin": "fanchangxi",
          "suoxie": "fcx",
          "other": "2224@fdu"
      },
      "fengdu": {
          "name": "丰都",
          "code": "FUW",
          "pinyin": "fengdu",
          "suoxie": "fd",
          "other": "2225@flb"
      },
      "fulingbei": {
          "name": "涪陵北",
          "code": "FEW",
          "pinyin": "fulingbei",
          "suoxie": "flb",
          "other": "2226@fli"
      },
      "fenglin": {
          "name": "枫林",
          "code": "FLN",
          "pinyin": "fenglin",
          "suoxie": "fl",
          "other": "2227@fni"
      },
      "foping": {
          "name": "佛坪",
          "code": "FUY",
          "pinyin": "foping",
          "suoxie": "fp",
          "other": "2229@fqi"
      },
      "faqi": {
          "name": "法启",
          "code": "FQE",
          "pinyin": "faqi",
          "suoxie": "fq",
          "other": "2230@frn"
      },
      "furongnan": {
          "name": "芙蓉南",
          "code": "KCQ",
          "pinyin": "furongnan",
          "suoxie": "frn",
          "other": "2231@fsh"
      },
      "fusheng": {
          "name": "复盛",
          "code": "FAW",
          "pinyin": "fusheng",
          "suoxie": "fs",
          "other": "2232@fso"
      },
      "fusong": {
          "name": "抚松",
          "code": "FSL",
          "pinyin": "fusong",
          "suoxie": "fs",
          "other": "2233@fsx"
      },
      "foshanxi": {
          "name": "佛山西",
          "code": "FOQ",
          "pinyin": "foshanxi",
          "suoxie": "fsx",
          "other": "2234@fsz"
      },
      "fushanzhen": {
          "name": "福山镇",
          "code": "FZQ",
          "pinyin": "fushanzhen",
          "suoxie": "fsz",
          "other": "2235@fti"
      },
      "futian": {
          "name": "福田",
          "code": "NZQ",
          "pinyin": "futian",
          "suoxie": "ft",
          "other": "2236@fyb"
      },
      "fuyuanbei": {
          "name": "富源北",
          "code": "FBM",
          "pinyin": "fuyuanbei",
          "suoxie": "fyb",
          "other": "2237@fyu"
      },
      "fuzhoudong": {
          "name": "抚州东",
          "code": "FDG",
          "pinyin": "fuzhoudong",
          "suoxie": "fzd",
          "other": "2239@fzh"
      },
      "gaoan": {
          "name": "高安",
          "code": "GCG",
          "pinyin": "gaoan",
          "suoxie": "ga",
          "other": "2241@gan"
      },
      "guangannan": {
          "name": "广安南",
          "code": "VUW",
          "pinyin": "guangannan",
          "suoxie": "gan",
          "other": "2242@gan"
      },
      "guian": {
          "name": "贵安",
          "code": "GAE",
          "pinyin": "guian",
          "suoxie": "ga",
          "other": "2243@gbd"
      },
      "gaobeidiandong": {
          "name": "高碑店东",
          "code": "GMP",
          "pinyin": "gaobeidiandong",
          "suoxie": "gbdd",
          "other": "2244@gch"
      },
      "gongcheng": {
          "name": "恭城",
          "code": "GCZ",
          "pinyin": "gongcheng",
          "suoxie": "gc",
          "other": "2245@gcn"
      },
      "gaochengnan": {
          "name": "藁城南",
          "code": "GUP",
          "pinyin": "gaochengnan",
          "suoxie": "gcn",
          "other": "2246@gdb"
      },
      "guidingbei": {
          "name": "贵定北",
          "code": "FMW",
          "pinyin": "guidingbei",
          "suoxie": "gdb",
          "other": "2247@gdn"
      },
      "gediannan": {
          "name": "葛店南",
          "code": "GNN",
          "pinyin": "gediannan",
          "suoxie": "gdn",
          "other": "2248@gdx"
      },
      "guidingxian": {
          "name": "贵定县",
          "code": "KIW",
          "pinyin": "guidingxian",
          "suoxie": "gdx",
          "other": "2249@ghb"
      },
      "guanghanbei": {
          "name": "广汉北",
          "code": "GVW",
          "pinyin": "guanghanbei",
          "suoxie": "ghb",
          "other": "2250@ghu"
      },
      "gaohua": {
          "name": "高花",
          "code": "HGD",
          "pinyin": "gaohua",
          "suoxie": "gh",
          "other": "2251@gju"
      },
      "geju": {
          "name": "革居",
          "code": "GEM",
          "pinyin": "geju",
          "suoxie": "gj",
          "other": "2252@gli"
      },
      "guanling": {
          "name": "关岭",
          "code": "GLE",
          "pinyin": "guanling",
          "suoxie": "gl",
          "other": "2253@glx"
      },
      "guilinxi": {
          "name": "桂林西",
          "code": "GEZ",
          "pinyin": "guilinxi",
          "suoxie": "glx",
          "other": "2254@gmc"
      },
      "guangmingcheng": {
          "name": "光明城",
          "code": "IMQ",
          "pinyin": "guangmingcheng",
          "suoxie": "gmc",
          "other": "2255@gni"
      },
      "guangning": {
          "name": "广宁",
          "code": "FBQ",
          "pinyin": "guangning",
          "suoxie": "gn",
          "other": "2256@gns"
      },
      "guangningsi": {
          "name": "广宁寺",
          "code": "GQT",
          "pinyin": "guangningsi",
          "suoxie": "gns",
          "other": "2257@gnx"
      },
      "guangnanxian": {
          "name": "广南县",
          "code": "GXM",
          "pinyin": "guangnanxian",
          "suoxie": "gnx",
          "other": "2258@gpi"
      },
      "guiping": {
          "name": "桂平",
          "code": "GAZ",
          "pinyin": "guiping",
          "suoxie": "gp",
          "other": "2259@gpz"
      },
      "gongpengzi": {
          "name": "弓棚子",
          "code": "GPT",
          "pinyin": "gongpengzi",
          "suoxie": "gpz",
          "other": "2260@gsh"
      },
      "guangshan": {
          "name": "光山",
          "code": "GUN",
          "pinyin": "guangshan",
          "suoxie": "gs",
          "other": "2261@gsh"
      },
      "gushan": {
          "name": "谷山",
          "code": "FFQ",
          "pinyin": "gushan",
          "suoxie": "gs",
          "other": "2262@gsl"
      },
      "guanshaling": {
          "name": "观沙岭",
          "code": "FKQ",
          "pinyin": "guanshaling",
          "suoxie": "gsl",
          "other": "2263@gtb"
      },
      "gutianbei": {
          "name": "古田北",
          "code": "GBS",
          "pinyin": "gutianbei",
          "suoxie": "gtb",
          "other": "2264@gtb"
      },
      "guangtongbei": {
          "name": "广通北",
          "code": "GPM",
          "pinyin": "guangtongbei",
          "suoxie": "gtb",
          "other": "2265@gtn"
      },
      "gaotainan": {
          "name": "高台南",
          "code": "GAJ",
          "pinyin": "gaotainan",
          "suoxie": "gtn",
          "other": "2266@gtz"
      },
      "gutianhuizhi": {
          "name": "古田会址",
          "code": "STS",
          "pinyin": "gutianhuizhi",
          "suoxie": "gthz",
          "other": "2267@gyb"
      },
      "guiyangbei": {
          "name": "贵阳北",
          "code": "KQW",
          "pinyin": "guiyangbei",
          "suoxie": "gyb",
          "other": "2268@gyd"
      },
      "guiyangdong": {
          "name": "贵阳东",
          "code": "KEW",
          "pinyin": "guiyangdong",
          "suoxie": "gyd",
          "other": "2269@gyx"
      },
      "gaoyixi": {
          "name": "高邑西",
          "code": "GNP",
          "pinyin": "gaoyixi",
          "suoxie": "gyx",
          "other": "2270@han"
      },
      "huian": {
          "name": "惠安",
          "code": "HNS",
          "pinyin": "huian",
          "suoxie": "ha",
          "other": "2271@hbb"
      },
      "huaibeibei": {
          "name": "淮北北",
          "code": "PLH",
          "pinyin": "huaibeibei",
          "suoxie": "hbb",
          "other": "2272@hbd"
      },
      "hebidong": {
          "name": "鹤壁东",
          "code": "HFF",
          "pinyin": "hebidong",
          "suoxie": "hbd",
          "other": "2273@hcg"
      },
      "hanconggou": {
          "name": "寒葱沟",
          "code": "HKB",
          "pinyin": "hanconggou",
          "suoxie": "hcg",
          "other": "2274@hch"
      },
      "huocheng": {
          "name": "霍城",
          "code": "SER",
          "pinyin": "huocheng",
          "suoxie": "hc",
          "other": "2275@hch"
      },
      "hunchun": {
          "name": "珲春",
          "code": "HUL",
          "pinyin": "hunchun",
          "suoxie": "hc",
          "other": "2276@hdd"
      },
      "handandong": {
          "name": "邯郸东",
          "code": "HPP",
          "pinyin": "handandong",
          "suoxie": "hdd",
          "other": "2277@hdo"
      },
      "huidong": {
          "name": "惠东",
          "code": "KDQ",
          "pinyin": "huidong",
          "suoxie": "hd",
          "other": "2278@hdp"
      },
      "hadapu": {
          "name": "哈达铺",
          "code": "HDJ",
          "pinyin": "hadapu",
          "suoxie": "hdp",
          "other": "2279@hdx"
      },
      "haidongxi": {
          "name": "海东西",
          "code": "HDO",
          "pinyin": "haidongxi",
          "suoxie": "hdx",
          "other": "2280@hdx"
      },
      "hongtongxi": {
          "name": "洪洞西",
          "code": "HTV",
          "pinyin": "hongtongxi",
          "suoxie": "hdx",
          "other": "2281@heb"
      },
      "haerbinbei": {
          "name": "哈尔滨北",
          "code": "HTB",
          "pinyin": "haerbinbei",
          "suoxie": "hebb",
          "other": "2282@hfc"
      },
      "hefeibeicheng": {
          "name": "合肥北城",
          "code": "COH",
          "pinyin": "hefeibeicheng",
          "suoxie": "hfbc",
          "other": "2283@hfn"
      },
      "hefeinan": {
          "name": "合肥南",
          "code": "ENH",
          "pinyin": "hefeinan",
          "suoxie": "hfn",
          "other": "2284@hga"
      },
      "huanggang": {
          "name": "黄冈",
          "code": "KGN",
          "pinyin": "huanggang",
          "suoxie": "hg",
          "other": "2285@hgd"
      },
      "huanggangdong": {
          "name": "黄冈东",
          "code": "KAN",
          "pinyin": "huanggangdong",
          "suoxie": "hgd",
          "other": "2286@hgd"
      },
      "henggouqiaodong": {
          "name": "横沟桥东",
          "code": "HNN",
          "pinyin": "henggouqiaodong",
          "suoxie": "hgqd",
          "other": "2287@hgx"
      },
      "huanggangxi": {
          "name": "黄冈西",
          "code": "KXN",
          "pinyin": "huanggangxi",
          "suoxie": "hgx",
          "other": "2288@hhe"
      },
      "honghe": {
          "name": "洪河",
          "code": "HPB",
          "pinyin": "honghe",
          "suoxie": "hh",
          "other": "2289@hhn"
      },
      "huaihuanan": {
          "name": "怀化南",
          "code": "KAQ",
          "pinyin": "huaihuanan",
          "suoxie": "hhn",
          "other": "2290@hhq"
      },
      "huanghejingqu": {
          "name": "黄河景区",
          "code": "HCF",
          "pinyin": "huanghejingqu",
          "suoxie": "hhjq",
          "other": "2291@hhu"
      },
      "huahu": {
          "name": "花湖",
          "code": "KHN",
          "pinyin": "huahu",
          "suoxie": "hh",
          "other": "2292@hhu"
      },
      "huihuan": {
          "name": "惠环",
          "code": "KHQ",
          "pinyin": "huihuan",
          "suoxie": "hh",
          "other": "2293@hhu"
      },
      "houhu": {
          "name": "后湖",
          "code": "IHN",
          "pinyin": "houhu",
          "suoxie": "hh",
          "other": "2294@hji"
      },
      "huaiji": {
          "name": "怀集",
          "code": "FAQ",
          "pinyin": "huaiji",
          "suoxie": "hj",
          "other": "2295@hkb"
      },
      "hekoubei": {
          "name": "河口北",
          "code": "HBM",
          "pinyin": "hekoubei",
          "suoxie": "hkb",
          "other": "2296@hli"
      },
      "huangliu": {
          "name": "黄流",
          "code": "KLQ",
          "pinyin": "huangliu",
          "suoxie": "hl",
          "other": "2297@hln"
      },
      "huanglingnan": {
          "name": "黄陵南",
          "code": "VLY",
          "pinyin": "huanglingnan",
          "suoxie": "hln",
          "other": "2298@hme"
      },
      "houmen": {
          "name": "鲘门",
          "code": "KMQ",
          "pinyin": "houmen",
          "suoxie": "hm",
          "other": "2299@hme"
      },
      "humen": {
          "name": "虎门",
          "code": "IUQ",
          "pinyin": "humen",
          "suoxie": "hm",
          "other": "2300@hmx"
      },
      "houmaxi": {
          "name": "侯马西",
          "code": "HPV",
          "pinyin": "houmaxi",
          "suoxie": "hmx",
          "other": "2301@hna"
      },
      "hengnan": {
          "name": "衡南",
          "code": "HNG",
          "pinyin": "hengnan",
          "suoxie": "hn",
          "other": "2302@hnd"
      },
      "huainandong": {
          "name": "淮南东",
          "code": "HOH",
          "pinyin": "huainandong",
          "suoxie": "hnd",
          "other": "2303@hpu"
      },
      "hepu": {
          "name": "合浦",
          "code": "HVZ",
          "pinyin": "hepu",
          "suoxie": "hp",
          "other": "2304@hqi"
      },
      "huoqiu": {
          "name": "霍邱",
          "code": "FBH",
          "pinyin": "huoqiu",
          "suoxie": "hq",
          "other": "2305@hrd"
      },
      "huairendong": {
          "name": "怀仁东",
          "code": "HFV",
          "pinyin": "huairendong",
          "suoxie": "hrd",
          "other": "2306@hrd"
      },
      "huarongdong": {
          "name": "华容东",
          "code": "HPN",
          "pinyin": "huarongdong",
          "suoxie": "hrd",
          "other": "2307@hrn"
      },
      "huarongnan": {
          "name": "华容南",
          "code": "KRN",
          "pinyin": "huarongnan",
          "suoxie": "hrn",
          "other": "2308@hsb"
      },
      "huangshibei": {
          "name": "黄石北",
          "code": "KSN",
          "pinyin": "huangshibei",
          "suoxie": "hsb",
          "other": "2309@hsb"
      },
      "huangshanbei": {
          "name": "黄山北",
          "code": "NYH",
          "pinyin": "huangshanbei",
          "suoxie": "hsb",
          "other": "2310@hsb"
      },
      "hengshuibei": {
          "name": "衡水北",
          "code": "IHP",
          "pinyin": "hengshuibei",
          "suoxie": "hsb",
          "other": "2311@hsd"
      },
      "heshengqiaodong": {
          "name": "贺胜桥东",
          "code": "HLN",
          "pinyin": "heshengqiaodong",
          "suoxie": "hsqd",
          "other": "2312@hsh"
      },
      "heshuo": {
          "name": "和硕",
          "code": "VUR",
          "pinyin": "heshuo",
          "suoxie": "hs",
          "other": "2313@hsn"
      },
      "huashannan": {
          "name": "花山南",
          "code": "KNN",
          "pinyin": "huashannan",
          "suoxie": "hsn",
          "other": "2314@hta"
      },
      "hetang": {
          "name": "荷塘",
          "code": "KXQ",
          "pinyin": "hetang",
          "suoxie": "ht",
          "other": "2315@htd"
      },
      "huangtudian": {
          "name": "黄土店",
          "code": "HKP",
          "pinyin": "huangtudian",
          "suoxie": "htd",
          "other": "2316@hyb"
      },
      "heyangbei": {
          "name": "合阳北",
          "code": "HTY",
          "pinyin": "heyangbei",
          "suoxie": "hyb",
          "other": "2317@hyb"
      },
      "haiyangbei": {
          "name": "海阳北",
          "code": "HEK",
          "pinyin": "haiyangbei",
          "suoxie": "hyb",
          "other": "2318@hyi"
      },
      "huaiyin": {
          "name": "槐荫",
          "code": "IYN",
          "pinyin": "huaiyin",
          "suoxie": "hy",
          "other": "2319@hyi"
      },
      "huyi": {
          "name": "鄠邑",
          "code": "KXY",
          "pinyin": "huyi",
          "suoxie": "hyi",
          "other": "2320@hyk"
      },
      "huayuankou": {
          "name": "花园口",
          "code": "HYT",
          "pinyin": "huayuankou",
          "suoxie": "hyk",
          "other": "2321@hzd"
      },
      "huozhoudong": {
          "name": "霍州东",
          "code": "HWV",
          "pinyin": "huozhoudong",
          "suoxie": "hzd",
          "other": "2322@hzn"
      },
      "huizhounan": {
          "name": "惠州南",
          "code": "KNQ",
          "pinyin": "huizhounan",
          "suoxie": "hzn",
          "other": "2323@jan"
      },
      "jianan": {
          "name": "建安",
          "code": "JUL",
          "pinyin": "jianan",
          "suoxie": "ja",
          "other": "2324@jch"
      },
      "jingchuan": {
          "name": "泾川",
          "code": "JAJ",
          "pinyin": "jingchuan",
          "suoxie": "jc",
          "other": "2325@jdb"
      },
      "jingdezhenbei": {
          "name": "景德镇北",
          "code": "JDG",
          "pinyin": "jingdezhenbei",
          "suoxie": "jdzb",
          "other": "2326@jde"
      },
      "jingde": {
          "name": "旌德",
          "code": "NSH",
          "pinyin": "jingde",
          "suoxie": "jd",
          "other": "2327@jfe"
      },
      "jianfeng": {
          "name": "尖峰",
          "code": "PFQ",
          "pinyin": "jianfeng",
          "suoxie": "jf",
          "other": "2328@jha"
      },
      "jinhai": {
          "name": "近海",
          "code": "JHD",
          "pinyin": "jinhai",
          "suoxie": "jh",
          "other": "2329@jhx"
      },
      "jiaohexi": {
          "name": "蛟河西",
          "code": "JOL",
          "pinyin": "jiaohexi",
          "suoxie": "jhx",
          "other": "2330@jlb"
      },
      "junliangchengbei": {
          "name": "军粮城北",
          "code": "JMP",
          "pinyin": "junliangchengbei",
          "suoxie": "jlcb",
          "other": "2331@jle"
      },
      "jiangle": {
          "name": "将乐",
          "code": "JLS",
          "pinyin": "jiangle",
          "suoxie": "jl",
          "other": "2332@jlh"
      },
      "jialuhe": {
          "name": "贾鲁河",
          "code": "JLF",
          "pinyin": "jialuhe",
          "suoxie": "jlh",
          "other": "2333@jls"
      },
      "jiulangshan": {
          "name": "九郎山",
          "code": "KJQ",
          "pinyin": "jiulangshan",
          "suoxie": "jls",
          "other": "2334@jmb"
      },
      "jimobei": {
          "name": "即墨北",
          "code": "JVK",
          "pinyin": "jimobei",
          "suoxie": "jmb",
          "other": "2335@jmg"
      },
      "jianmenguan": {
          "name": "剑门关",
          "code": "JME",
          "pinyin": "jianmenguan",
          "suoxie": "jmg",
          "other": "2336@jnb"
      },
      "jianningxianbei": {
          "name": "建宁县北",
          "code": "JCS",
          "pinyin": "jianningxianbei",
          "suoxie": "jnxb",
          "other": "2337@jni"
      },
      "jiangning": {
          "name": "江宁",
          "code": "JJH",
          "pinyin": "jiangning",
          "suoxie": "jn",
          "other": "2338@jnx"
      },
      "jiangningxi": {
          "name": "江宁西",
          "code": "OKH",
          "pinyin": "jiangningxi",
          "suoxie": "jnx",
          "other": "2339@jox"
      },
      "jianouxi": {
          "name": "建瓯西",
          "code": "JUS",
          "pinyin": "jianouxi",
          "suoxie": "jox",
          "other": "2340@jqn"
      },
      "jiuquannan": {
          "name": "酒泉南",
          "code": "JNJ",
          "pinyin": "jiuquannan",
          "suoxie": "jqn",
          "other": "2341@jrx"
      },
      "jurongxi": {
          "name": "句容西",
          "code": "JWH",
          "pinyin": "jurongxi",
          "suoxie": "jrx",
          "other": "2342@jsh"
      },
      "jianshui": {
          "name": "建水",
          "code": "JSM",
          "pinyin": "jianshui",
          "suoxie": "js",
          "other": "2343@jsh"
      },
      "jianshan": {
          "name": "尖山",
          "code": "JPQ",
          "pinyin": "jianshan",
          "suoxie": "js",
          "other": "2344@jss"
      },
      "jieshoushi": {
          "name": "界首市",
          "code": "JUN",
          "pinyin": "jieshoushi",
          "suoxie": "jss",
          "other": "2345@jxb"
      },
      "jixibei": {
          "name": "绩溪北",
          "code": "NRH",
          "pinyin": "jixibei",
          "suoxie": "jxb",
          "other": "2346@jxd"
      },
      "jiexiudong": {
          "name": "介休东",
          "code": "JDV",
          "pinyin": "jiexiudong",
          "suoxie": "jxd",
          "other": "2347@jxi"
      },
      "jingxian": {
          "name": "泾县",
          "code": "LOH",
          "pinyin": "jingxian",
          "suoxie": "jx",
          "other": "2348@jxi"
      },
      "jingxi": {
          "name": "靖西",
          "code": "JMZ",
          "pinyin": "jingxi",
          "suoxie": "jx",
          "other": "2349@jxn"
      },
      "jinxiannan": {
          "name": "进贤南",
          "code": "JXG",
          "pinyin": "jinxiannan",
          "suoxie": "jxn",
          "other": "2350@jyb"
      },
      "jiangyoubei": {
          "name": "江油北",
          "code": "JBE",
          "pinyin": "jiangyoubei",
          "suoxie": "jyb",
          "other": "2351@jyn"
      },
      "jiayuguannan": {
          "name": "嘉峪关南",
          "code": "JBJ",
          "pinyin": "jiayuguannan",
          "suoxie": "jygn",
          "other": "2352@jyn"
      },
      "jianyangnan": {
          "name": "简阳南",
          "code": "JOW",
          "pinyin": "jianyangnan",
          "suoxie": "jyn",
          "other": "2353@jyt"
      },
      "jinyintan": {
          "name": "金银潭",
          "code": "JTN",
          "pinyin": "jinyintan",
          "suoxie": "jyt",
          "other": "2354@jyu"
      },
      "jingyu": {
          "name": "靖宇",
          "code": "JYL",
          "pinyin": "jingyu",
          "suoxie": "jy",
          "other": "2355@jyw"
      },
      "jinyuewan": {
          "name": "金月湾",
          "code": "PYQ",
          "pinyin": "jinyuewan",
          "suoxie": "jyw",
          "other": "2356@jyx"
      },
      "jinyunxi": {
          "name": "缙云西",
          "code": "PYH",
          "pinyin": "jinyunxi",
          "suoxie": "jyx",
          "other": "2357@jzh"
      },
      "jinzhong": {
          "name": "晋中",
          "code": "JZV",
          "pinyin": "jinzhong",
          "suoxie": "jz",
          "other": "2358@jzh"
      },
      "kaifengbei": {
          "name": "开封北",
          "code": "KBF",
          "pinyin": "kaifengbei",
          "suoxie": "kfb",
          "other": "2360@kfs"
      },
      "kaifusi": {
          "name": "开福寺",
          "code": "FLQ",
          "pinyin": "kaifusi",
          "suoxie": "kfs",
          "other": "2361@khu"
      },
      "kaihua": {
          "name": "开化",
          "code": "KHU",
          "pinyin": "kaihua",
          "suoxie": "kh",
          "other": "2362@kln"
      },
      "kailinan": {
          "name": "凯里南",
          "code": "QKW",
          "pinyin": "kailinan",
          "suoxie": "kln",
          "other": "2363@klu"
      },
      "kulun": {
          "name": "库伦",
          "code": "KLD",
          "pinyin": "kulun",
          "suoxie": "kl",
          "other": "2364@kmn"
      },
      "kunmingnan": {
          "name": "昆明南",
          "code": "KOM",
          "pinyin": "kunmingnan",
          "suoxie": "kmn",
          "other": "2365@kta"
      },
      "kuitan": {
          "name": "葵潭",
          "code": "KTQ",
          "pinyin": "kuitan",
          "suoxie": "kt",
          "other": "2366@kya"
      },
      "kaiyang": {
          "name": "开阳",
          "code": "KVW",
          "pinyin": "kaiyang",
          "suoxie": "ky",
          "other": "2367@lad"
      },
      "longandong": {
          "name": "隆安东",
          "code": "IDZ",
          "pinyin": "longandong",
          "suoxie": "lad",
          "other": "2368@lbb"
      },
      "laibinbei": {
          "name": "来宾北",
          "code": "UCZ",
          "pinyin": "laibinbei",
          "suoxie": "lbb",
          "other": "2369@lbi"
      },
      "lingbi": {
          "name": "灵璧",
          "code": "GMH",
          "pinyin": "lingbi",
          "suoxie": "lb",
          "other": "2370@lbu"
      },
      "liaobu": {
          "name": "寮步",
          "code": "LTQ",
          "pinyin": "liaobu",
          "suoxie": "lb",
          "other": "2371@lby"
      },
      "lvboyuan": {
          "name": "绿博园",
          "code": "LCF",
          "pinyin": "lvboyuan",
          "suoxie": "lby",
          "other": "2372@lcb"
      },
      "longchangbei": {
          "name": "隆昌北",
          "code": "NWW",
          "pinyin": "longchangbei",
          "suoxie": "lcb",
          "other": "2373@lcd"
      },
      "lechangdong": {
          "name": "乐昌东",
          "code": "ILQ",
          "pinyin": "lechangdong",
          "suoxie": "lcd",
          "other": "2374@lch"
      },
      "lincheng": {
          "name": "临城",
          "code": "UUP",
          "pinyin": "lincheng",
          "suoxie": "lc",
          "other": "2375@lch"
      },
      "luocheng": {
          "name": "罗城",
          "code": "VCZ",
          "pinyin": "luocheng",
          "suoxie": "lc",
          "other": "2376@lch"
      },
      "lingcheng": {
          "name": "陵城",
          "code": "LGK",
          "pinyin": "lingcheng",
          "suoxie": "lc",
          "other": "2377@lcz"
      },
      "laochengzhen": {
          "name": "老城镇",
          "code": "ACQ",
          "pinyin": "laochengzhen",
          "suoxie": "lcz",
          "other": "2378@ldb"
      },
      "longdongbao": {
          "name": "龙洞堡",
          "code": "FVW",
          "pinyin": "longdongbao",
          "suoxie": "ldb",
          "other": "2379@ldn"
      },
      "ledunan": {
          "name": "乐都南",
          "code": "LVO",
          "pinyin": "ledunan",
          "suoxie": "ldn",
          "other": "2380@ldn"
      },
      "loudinan": {
          "name": "娄底南",
          "code": "UOQ",
          "pinyin": "loudinan",
          "suoxie": "ldn",
          "other": "2381@ldo"
      },
      "ledong": {
          "name": "乐东",
          "code": "UQQ",
          "pinyin": "ledong",
          "suoxie": "ld",
          "other": "2382@ldy"
      },
      "liduigongyuan": {
          "name": "离堆公园",
          "code": "INW",
          "pinyin": "liduigongyuan",
          "suoxie": "ldgy",
          "other": "2383@lfe"
      },
      "lufeng": {
          "name": "陆丰",
          "code": "LLQ",
          "pinyin": "lufeng",
          "suoxie": "lf",
          "other": "2384@lfe"
      },
      "longfeng": {
          "name": "龙丰",
          "code": "KFQ",
          "pinyin": "longfeng",
          "suoxie": "lf",
          "other": "2385@lfn"
      },
      "lufengnan": {
          "name": "禄丰南",
          "code": "LQM",
          "pinyin": "lufengnan",
          "suoxie": "lfn",
          "other": "2386@lfx"
      },
      "linfenxi": {
          "name": "临汾西",
          "code": "LXV",
          "pinyin": "linfenxi",
          "suoxie": "lfx",
          "other": "2387@lgn"
      },
      "lingaonan": {
          "name": "临高南",
          "code": "KGQ",
          "pinyin": "lingaonan",
          "suoxie": "lgn",
          "other": "2388@lgu"
      },
      "lugu": {
          "name": "麓谷",
          "code": "BNQ",
          "pinyin": "lugu",
          "suoxie": "lg",
          "other": "2389@lhe"
      },
      "luanhe": {
          "name": "滦河",
          "code": "UDP",
          "pinyin": "luanhe",
          "suoxie": "lh",
          "other": "2390@lhx"
      },
      "luohexi": {
          "name": "漯河西",
          "code": "LBN",
          "pinyin": "luohexi",
          "suoxie": "lhx",
          "other": "2391@ljd"
      },
      "luojiangdong": {
          "name": "罗江东",
          "code": "IKW",
          "pinyin": "luojiangdong",
          "suoxie": "ljd",
          "other": "2392@lji"
      },
      "liujiang": {
          "name": "柳江",
          "code": "UQZ",
          "pinyin": "liujiang",
          "suoxie": "lj",
          "other": "2393@ljn"
      },
      "lijinnan": {
          "name": "利津南",
          "code": "LNK",
          "pinyin": "lijinnan",
          "suoxie": "ljn",
          "other": "2394@lkn"
      },
      "lankaonan": {
          "name": "兰考南",
          "code": "LUF",
          "pinyin": "lankaonan",
          "suoxie": "lkn",
          "other": "2395@llb"
      },
      "lanlingbei": {
          "name": "兰陵北",
          "code": "COK",
          "pinyin": "lanlingbei",
          "suoxie": "llb",
          "other": "2396@llb"
      },
      "longlibei": {
          "name": "龙里北",
          "code": "KFW",
          "pinyin": "longlibei",
          "suoxie": "llb",
          "other": "2397@llb"
      },
      "lilinbei": {
          "name": "沥林北",
          "code": "KBQ",
          "pinyin": "lilinbei",
          "suoxie": "llb",
          "other": "2398@lld"
      },
      "lilingdong": {
          "name": "醴陵东",
          "code": "UKQ",
          "pinyin": "lilingdong",
          "suoxie": "lld",
          "other": "2399@lna"
      },
      "liangpingnan": {
          "name": "梁平南",
          "code": "LPE",
          "pinyin": "liangpingnan",
          "suoxie": "lpn",
          "other": "2401@lqu"
      },
      "liquan": {
          "name": "礼泉",
          "code": "LGY",
          "pinyin": "liquan",
          "suoxie": "lq",
          "other": "2402@lsd"
      },
      "lingshidong": {
          "name": "灵石东",
          "code": "UDV",
          "pinyin": "lingshidong",
          "suoxie": "lsd",
          "other": "2403@lsh"
      },
      "leshan": {
          "name": "乐山",
          "code": "IVW",
          "pinyin": "leshan",
          "suoxie": "ls",
          "other": "2404@lsh"
      },
      "longshi": {
          "name": "龙市",
          "code": "LAG",
          "pinyin": "longshi",
          "suoxie": "ls",
          "other": "2405@lsh"
      },
      "luowansanjiang": {
          "name": "洛湾三江",
          "code": "KRW",
          "pinyin": "luowansanjiang",
          "suoxie": "lwsj",
          "other": "2407@lxb"
      },
      "laixibei": {
          "name": "莱西北",
          "code": "LBK",
          "pinyin": "laixibei",
          "suoxie": "lxb",
          "other": "2408@lya"
      },
      "liyang": {
          "name": "溧阳",
          "code": "LEH",
          "pinyin": "liyang",
          "suoxie": "ly",
          "other": "2409@lyi"
      },
      "liuyuannan": {
          "name": "柳园南",
          "code": "LNR",
          "pinyin": "liuyuannan",
          "suoxie": "lyn",
          "other": "2411@lzb"
      },
      "luzhaibei": {
          "name": "鹿寨北",
          "code": "LSZ",
          "pinyin": "luzhaibei",
          "suoxie": "lzb",
          "other": "2412@lzh"
      },
      "langzhong": {
          "name": "阆中",
          "code": "LZE",
          "pinyin": "langzhong",
          "suoxie": "lz",
          "other": "2413@lzn"
      },
      "linzenan": {
          "name": "临泽南",
          "code": "LDJ",
          "pinyin": "linzenan",
          "suoxie": "lzn",
          "other": "2414@mad"
      },
      "maanshandong": {
          "name": "马鞍山东",
          "code": "OMH",
          "pinyin": "maanshandong",
          "suoxie": "masd",
          "other": "2415@mch"
      },
      "maochen": {
          "name": "毛陈",
          "code": "MHN",
          "pinyin": "maochen",
          "suoxie": "mc",
          "other": "2416@mgd"
      },
      "minggangdong": {
          "name": "明港东",
          "code": "MDN",
          "pinyin": "minggangdong",
          "suoxie": "mgd",
          "other": "2417@mhn"
      },
      "minhenan": {
          "name": "民和南",
          "code": "MNO",
          "pinyin": "minhenan",
          "suoxie": "mhn",
          "other": "2418@mji"
      },
      "minji": {
          "name": "闵集",
          "code": "MJN",
          "pinyin": "minji",
          "suoxie": "mj",
          "other": "2419@mla"
      },
      "malan": {
          "name": "马兰",
          "code": "MLR",
          "pinyin": "malan",
          "suoxie": "ml",
          "other": "2420@mle"
      },
      "minle": {
          "name": "民乐",
          "code": "MBJ",
          "pinyin": "minle",
          "suoxie": "ml",
          "other": "2421@mle"
      },
      "mile": {
          "name": "弥勒",
          "code": "MLM",
          "pinyin": "mile",
          "suoxie": "ml",
          "other": "2422@mns"
      },
      "manasi": {
          "name": "玛纳斯",
          "code": "MSR",
          "pinyin": "manasi",
          "suoxie": "mns",
          "other": "2423@mpi"
      },
      "muping": {
          "name": "牟平",
          "code": "MBK",
          "pinyin": "muping",
          "suoxie": "mp",
          "other": "2424@mqb"
      },
      "minqingbei": {
          "name": "闽清北",
          "code": "MBS",
          "pinyin": "minqingbei",
          "suoxie": "mqb",
          "other": "2425@mqb"
      },
      "minquanbei": {
          "name": "民权北",
          "code": "MIF",
          "pinyin": "minquanbei",
          "suoxie": "mqb",
          "other": "2426@msd"
      },
      "meishandong": {
          "name": "眉山东",
          "code": "IUW",
          "pinyin": "meishandong",
          "suoxie": "msd",
          "other": "2427@msh"
      },
      "miaoshan": {
          "name": "庙山",
          "code": "MSN",
          "pinyin": "miaoshan",
          "suoxie": "ms",
          "other": "2428@mxi"
      },
      "minxian": {
          "name": "岷县",
          "code": "MXJ",
          "pinyin": "minxian",
          "suoxie": "mx",
          "other": "2429@myu"
      },
      "menyuan": {
          "name": "门源",
          "code": "MYO",
          "pinyin": "menyuan",
          "suoxie": "my",
          "other": "2430@myu"
      },
      "muyun": {
          "name": "暮云",
          "code": "KIQ",
          "pinyin": "muyun",
          "suoxie": "my",
          "other": "2431@mzb"
      },
      "mengzibei": {
          "name": "蒙自北",
          "code": "MBM",
          "pinyin": "mengzibei",
          "suoxie": "mzb",
          "other": "2432@mzh"
      },
      "mengzhuang": {
          "name": "孟庄",
          "code": "MZF",
          "pinyin": "mengzhuang",
          "suoxie": "mz",
          "other": "2433@mzi"
      },
      "mengzi": {
          "name": "蒙自",
          "code": "MZM",
          "pinyin": "mengzi",
          "suoxie": "mz",
          "other": "2434@nbu"
      },
      "nanbu": {
          "name": "南部",
          "code": "NBE",
          "pinyin": "nanbu",
          "suoxie": "nb",
          "other": "2435@nca"
      },
      "nancao": {
          "name": "南曹",
          "code": "NEF",
          "pinyin": "nancao",
          "suoxie": "nc",
          "other": "2436@ncb"
      },
      "nanchongbei": {
          "name": "南充北",
          "code": "NCE",
          "pinyin": "nanchongbei",
          "suoxie": "ncb",
          "other": "2437@nch"
      },
      "nancheng": {
          "name": "南城",
          "code": "NDG",
          "pinyin": "nancheng",
          "suoxie": "nc",
          "other": "2438@ncx"
      },
      "nanchangxi": {
          "name": "南昌西",
          "code": "NXG",
          "pinyin": "nanchangxi",
          "suoxie": "ncx",
          "other": "2439@ndn"
      },
      "ningdongnan": {
          "name": "宁东南",
          "code": "NDJ",
          "pinyin": "ningdongnan",
          "suoxie": "ndn",
          "other": "2440@ndo"
      },
      "ningdong": {
          "name": "宁东",
          "code": "NOJ",
          "pinyin": "ningdong",
          "suoxie": "nd",
          "other": "2441@nfb"
      },
      "nanfenbei": {
          "name": "南芬北",
          "code": "NUT",
          "pinyin": "nanfenbei",
          "suoxie": "nfb",
          "other": "2442@nfe"
      },
      "nanfeng": {
          "name": "南丰",
          "code": "NFG",
          "pinyin": "nanfeng",
          "suoxie": "nf",
          "other": "2443@nhd"
      },
      "nanhudong": {
          "name": "南湖东",
          "code": "NDN",
          "pinyin": "nanhudong",
          "suoxie": "nhd",
          "other": "2444@njb"
      },
      "neijiangbei": {
          "name": "内江北",
          "code": "NKW",
          "pinyin": "neijiangbei",
          "suoxie": "njb",
          "other": "2445@nji"
      },
      "nanjiang": {
          "name": "南江",
          "code": "FIW",
          "pinyin": "nanjiang",
          "suoxie": "nj",
          "other": "2446@njk"
      },
      "nanjiangkou": {
          "name": "南江口",
          "code": "NDQ",
          "pinyin": "nanjiangkou",
          "suoxie": "njk",
          "other": "2447@nli"
      },
      "nanling": {
          "name": "南陵",
          "code": "LLH",
          "pinyin": "nanling",
          "suoxie": "nl",
          "other": "2448@nmu"
      },
      "nimu": {
          "name": "尼木",
          "code": "NMO",
          "pinyin": "nimu",
          "suoxie": "nm",
          "other": "2449@nnd"
      },
      "nanningdong": {
          "name": "南宁东",
          "code": "NFZ",
          "pinyin": "nanningdong",
          "suoxie": "nnd",
          "other": "2450@nnx"
      },
      "nanningxi": {
          "name": "南宁西",
          "code": "NXZ",
          "pinyin": "nanningxi",
          "suoxie": "nnx",
          "other": "2451@npb"
      },
      "nanpingbei": {
          "name": "南平北",
          "code": "NBS",
          "pinyin": "nanpingbei",
          "suoxie": "npb",
          "other": "2452@nqn"
      },
      "ningqiangnan": {
          "name": "宁强南",
          "code": "NOY",
          "pinyin": "ningqiangnan",
          "suoxie": "nqn",
          "other": "2453@nxi"
      },
      "nanxiong": {
          "name": "南雄",
          "code": "NCQ",
          "pinyin": "nanxiong",
          "suoxie": "nx",
          "other": "2454@nyo"
      },
      "nayong": {
          "name": "纳雍",
          "code": "NYE",
          "pinyin": "nayong",
          "suoxie": "ny",
          "other": "2455@nyz"
      },
      "nanyangzhai": {
          "name": "南阳寨",
          "code": "NYF",
          "pinyin": "nanyangzhai",
          "suoxie": "nyz",
          "other": "2456@pan"
      },
      "puan": {
          "name": "普安",
          "code": "PAN",
          "pinyin": "puan",
          "suoxie": "pa",
          "other": "2457@pax"
      },
      "puanxian": {
          "name": "普安县",
          "code": "PUE",
          "pinyin": "puanxian",
          "suoxie": "pax",
          "other": "2458@pbi"
      },
      "pingbian": {
          "name": "屏边",
          "code": "PBM",
          "pinyin": "pingbian",
          "suoxie": "pb",
          "other": "2459@pbn"
      },
      "pingbanan": {
          "name": "平坝南",
          "code": "PBE",
          "pinyin": "pingbanan",
          "suoxie": "pbn",
          "other": "2460@pch"
      },
      "pingchang": {
          "name": "平昌",
          "code": "PCE",
          "pinyin": "pingchang",
          "suoxie": "pc",
          "other": "2461@pdi"
      },
      "puding": {
          "name": "普定",
          "code": "PGW",
          "pinyin": "puding",
          "suoxie": "pd",
          "other": "2462@pdu"
      },
      "pingdu": {
          "name": "平度",
          "code": "PAK",
          "pinyin": "pingdu",
          "suoxie": "pd",
          "other": "2463@pko"
      },
      "pikou": {
          "name": "皮口",
          "code": "PUT",
          "pinyin": "pikou",
          "suoxie": "pk",
          "other": "2464@plc"
      },
      "panlongcheng": {
          "name": "盘龙城",
          "code": "PNN",
          "pinyin": "panlongcheng",
          "suoxie": "plc",
          "other": "2465@pni"
      },
      "puning": {
          "name": "普宁",
          "code": "PEQ",
          "pinyin": "puning",
          "suoxie": "pn",
          "other": "2466@pnn"
      },
      "pingnannan": {
          "name": "平南南",
          "code": "PAZ",
          "pinyin": "pingnannan",
          "suoxie": "pnn",
          "other": "2467@psb"
      },
      "pengshanbei": {
          "name": "彭山北",
          "code": "PPW",
          "pinyin": "pengshanbei",
          "suoxie": "psb",
          "other": "2468@psh"
      },
      "panshan": {
          "name": "盘山",
          "code": "PUD",
          "pinyin": "panshan",
          "suoxie": "ps",
          "other": "2469@psh"
      },
      "pingshang": {
          "name": "坪上",
          "code": "PSK",
          "pinyin": "pingshang",
          "suoxie": "ps",
          "other": "2470@pxb"
      },
      "pingxiangbei": {
          "name": "萍乡北",
          "code": "PBG",
          "pinyin": "pingxiangbei",
          "suoxie": "pxb",
          "other": "2471@pya"
      },
      "puyang": {
          "name": "濮阳",
          "code": "PYF",
          "pinyin": "puyang",
          "suoxie": "py",
          "other": "2472@pya"
      },
      "poyang": {
          "name": "鄱阳",
          "code": "PYG",
          "pinyin": "poyang",
          "suoxie": "py",
          "other": "2473@pyc"
      },
      "pingyaogucheng": {
          "name": "平遥古城",
          "code": "PDV",
          "pinyin": "pingyaogucheng",
          "suoxie": "pygc",
          "other": "2474@pyd"
      },
      "pingyuandong": {
          "name": "平原东",
          "code": "PUK",
          "pinyin": "pingyuandong",
          "suoxie": "pyd",
          "other": "2475@pzh"
      },
      "puzhehei": {
          "name": "普者黑",
          "code": "PZM",
          "pinyin": "puzhehei",
          "suoxie": "pzh",
          "other": "2476@pzh"
      },
      "panzhou": {
          "name": "盘州",
          "code": "PAE",
          "pinyin": "panzhou",
          "suoxie": "pz",
          "other": "2477@pzh"
      },
      "pengzhou": {
          "name": "彭州",
          "code": "PMW",
          "pinyin": "pengzhou",
          "suoxie": "pz",
          "other": "2478@qan"
      },
      "qinan": {
          "name": "秦安",
          "code": "QGJ",
          "pinyin": "qinan",
          "suoxie": "qa",
          "other": "2479@qbd"
      },
      "qingbaijiangdong": {
          "name": "青白江东",
          "code": "QFW",
          "pinyin": "qingbaijiangdong",
          "suoxie": "qbjd",
          "other": "2480@qch"
      },
      "qingchuan": {
          "name": "青川",
          "code": "QCE",
          "pinyin": "qingchuan",
          "suoxie": "qc",
          "other": "2481@qdb"
      },
      "qingdaobei": {
          "name": "青岛北",
          "code": "QHK",
          "pinyin": "qingdaobei",
          "suoxie": "qdb",
          "other": "2482@qdo"
      },
      "qidong": {
          "name": "祁东",
          "code": "QMQ",
          "pinyin": "qidong",
          "suoxie": "qd",
          "other": "2483@qdu"
      },
      "qingdui": {
          "name": "青堆",
          "code": "QET",
          "pinyin": "qingdui",
          "suoxie": "qd",
          "other": "2484@qfe"
      },
      "qianfeng": {
          "name": "前锋",
          "code": "QFB",
          "pinyin": "qianfeng",
          "suoxie": "qf",
          "other": "2485@qjb"
      },
      "qujingbei": {
          "name": "曲靖北",
          "code": "QBM",
          "pinyin": "qujingbei",
          "suoxie": "qjb",
          "other": "2486@qji"
      },
      "qujiang": {
          "name": "曲江",
          "code": "QIM",
          "pinyin": "qujiang",
          "suoxie": "qj",
          "other": "2487@qli"
      },
      "qinglian": {
          "name": "青莲",
          "code": "QEW",
          "pinyin": "qinglian",
          "suoxie": "ql",
          "other": "2488@qqn"
      },
      "qiqihaernan": {
          "name": "齐齐哈尔南",
          "code": "QNB",
          "pinyin": "qiqihaernan",
          "suoxie": "qqhen",
          "other": "2489@qsb"
      },
      "qingshuibei": {
          "name": "清水北",
          "code": "QEJ",
          "pinyin": "qingshuibei",
          "suoxie": "qsb",
          "other": "2490@qsh"
      },
      "qingshen": {
          "name": "青神",
          "code": "QVW",
          "pinyin": "qingshen",
          "suoxie": "qs",
          "other": "2491@qsh"
      },
      "qishan": {
          "name": "岐山",
          "code": "QAY",
          "pinyin": "qishan",
          "suoxie": "qs",
          "other": "2492@qsh"
      },
      "qingsheng": {
          "name": "庆盛",
          "code": "QSQ",
          "pinyin": "qingsheng",
          "suoxie": "qs",
          "other": "2493@qsx"
      },
      "qingshuixian": {
          "name": "清水县",
          "code": "QIJ",
          "pinyin": "qingshuixian",
          "suoxie": "qsx",
          "other": "2494@qsx"
      },
      "qushuixian": {
          "name": "曲水县",
          "code": "QSO",
          "pinyin": "qushuixian",
          "suoxie": "qsx",
          "other": "2495@qxd"
      },
      "qixiandong": {
          "name": "祁县东",
          "code": "QGV",
          "pinyin": "qixiandong",
          "suoxie": "qxd",
          "other": "2496@qxi"
      },
      "qianxian": {
          "name": "乾县",
          "code": "QBY",
          "pinyin": "qianxian",
          "suoxie": "qx",
          "other": "2497@qxn"
      },
      "qixiayingnan": {
          "name": "旗下营南",
          "code": "QNC",
          "pinyin": "qixiayingnan",
          "suoxie": "qxyn",
          "other": "2498@qya"
      },
      "qiyang": {
          "name": "祁阳",
          "code": "QWQ",
          "pinyin": "qiyang",
          "suoxie": "qy",
          "other": "2499@qzn"
      },
      "quanzhounan": {
          "name": "全州南",
          "code": "QNZ",
          "pinyin": "quanzhounan",
          "suoxie": "qzn",
          "other": "2500@qzw"
      },
      "qiziwan": {
          "name": "棋子湾",
          "code": "QZQ",
          "pinyin": "qiziwan",
          "suoxie": "qzw",
          "other": "2501@rbu"
      },
      "renbu": {
          "name": "仁布",
          "code": "RUO",
          "pinyin": "renbu",
          "suoxie": "rb",
          "other": "2502@rcb"
      },
      "rongchangbei": {
          "name": "荣昌北",
          "code": "RQW",
          "pinyin": "rongchangbei",
          "suoxie": "rcb",
          "other": "2503@rch"
      },
      "rongcheng": {
          "name": "荣成",
          "code": "RCK",
          "pinyin": "rongcheng",
          "suoxie": "rc",
          "other": "2504@rcx"
      },
      "ruichangxi": {
          "name": "瑞昌西",
          "code": "RXG",
          "pinyin": "ruichangxi",
          "suoxie": "rcx",
          "other": "2505@rdo"
      },
      "rudong": {
          "name": "如东",
          "code": "RIH",
          "pinyin": "rudong",
          "suoxie": "rd",
          "other": "2506@rji"
      },
      "rongjiang": {
          "name": "榕江",
          "code": "RVW",
          "pinyin": "rongjiang",
          "suoxie": "rj",
          "other": "2507@rkz"
      },
      "rikaze": {
          "name": "日喀则",
          "code": "RKO",
          "pinyin": "rikaze",
          "suoxie": "rkz",
          "other": "2508@rpi"
      },
      "raoping": {
          "name": "饶平",
          "code": "RVQ",
          "pinyin": "raoping",
          "suoxie": "rp",
          "other": "2509@scl"
      },
      "songchenglu": {
          "name": "宋城路",
          "code": "SFF",
          "pinyin": "songchenglu",
          "suoxie": "scl",
          "other": "2510@sdh"
      },
      "sandaohu": {
          "name": "三道湖",
          "code": "SDL",
          "pinyin": "sandaohu",
          "suoxie": "sdh",
          "other": "2511@sdo"
      },
      "sanduxian": {
          "name": "三都县",
          "code": "KKW",
          "pinyin": "sanduxian",
          "suoxie": "sdx",
          "other": "2513@sfa"
      },
      "shengfang": {
          "name": "胜芳",
          "code": "SUP",
          "pinyin": "shengfang",
          "suoxie": "sf",
          "other": "2514@sfb"
      },
      "shuangfengbei": {
          "name": "双峰北",
          "code": "NFQ",
          "pinyin": "shuangfengbei",
          "suoxie": "sfb",
          "other": "2515@she"
      },
      "shanghe": {
          "name": "商河",
          "code": "SOK",
          "pinyin": "shanghe",
          "suoxie": "sh",
          "other": "2516@sho"
      },
      "sihong": {
          "name": "泗洪",
          "code": "GQH",
          "pinyin": "sihong",
          "suoxie": "sh",
          "other": "2517@shu"
      },
      "sihui": {
          "name": "四会",
          "code": "AHQ",
          "pinyin": "sihui",
          "suoxie": "sh",
          "other": "2518@sjd"
      },
      "shijiazhuangdong": {
          "name": "石家庄东",
          "code": "SXP",
          "pinyin": "shijiazhuangdong",
          "suoxie": "sjzd",
          "other": "2519@sjn"
      },
      "sanjiangnan": {
          "name": "三江南",
          "code": "SWZ",
          "pinyin": "sanjiangnan",
          "suoxie": "sjn",
          "other": "2520@sjz"
      },
      "sanjingzi": {
          "name": "三井子",
          "code": "OJT",
          "pinyin": "sanjingzi",
          "suoxie": "sjz",
          "other": "2521@slc"
      },
      "shuangliujichang": {
          "name": "双流机场",
          "code": "IPW",
          "pinyin": "shuangliujichang",
          "suoxie": "sljc",
          "other": "2522@slx"
      },
      "shilinxi": {
          "name": "石林西",
          "code": "SYM",
          "pinyin": "shilinxi",
          "suoxie": "slx",
          "other": "2523@slx"
      },
      "shalingzixi": {
          "name": "沙岭子西",
          "code": "IXP",
          "pinyin": "shalingzixi",
          "suoxie": "slzx",
          "other": "2524@slx"
      },
      "shuangliuxi": {
          "name": "双流西",
          "code": "IQW",
          "pinyin": "shuangliuxi",
          "suoxie": "slx",
          "other": "2525@smb"
      },
      "sanmingbei": {
          "name": "三明北",
          "code": "SHS",
          "pinyin": "sanmingbei",
          "suoxie": "smb",
          "other": "2526@smi"
      },
      "songming": {
          "name": "嵩明",
          "code": "SVM",
          "pinyin": "songming",
          "suoxie": "sm",
          "other": "2527@sml"
      },
      "shumuling": {
          "name": "树木岭",
          "code": "FMQ",
          "pinyin": "shumuling",
          "suoxie": "sml",
          "other": "2528@snq"
      },
      "sunitezuoqi": {
          "name": "苏尼特左旗",
          "code": "ONC",
          "pinyin": "sunitezuoqi",
          "suoxie": "sntzq",
          "other": "2529@spd"
      },
      "shanpodong": {
          "name": "山坡东",
          "code": "SBN",
          "pinyin": "shanpodong",
          "suoxie": "spd",
          "other": "2530@sqi"
      },
      "shiqiao": {
          "name": "石桥",
          "code": "SQE",
          "pinyin": "shiqiao",
          "suoxie": "sq",
          "other": "2531@sqi"
      },
      "shenqiu": {
          "name": "沈丘",
          "code": "SQN",
          "pinyin": "shenqiu",
          "suoxie": "sq",
          "other": "2532@ssb"
      },
      "shanshanbei": {
          "name": "鄯善北",
          "code": "SMR",
          "pinyin": "shanshanbei",
          "suoxie": "ssb",
          "other": "2533@ssb"
      },
      "shishanbei": {
          "name": "狮山北",
          "code": "NSQ",
          "pinyin": "shishanbei",
          "suoxie": "ssb",
          "other": "2534@ssb"
      },
      "sanshuibei": {
          "name": "三水北",
          "code": "ARQ",
          "pinyin": "sanshuibei",
          "suoxie": "ssb",
          "other": "2535@ssb"
      },
      "songshanhubei": {
          "name": "松山湖北",
          "code": "KUQ",
          "pinyin": "songshanhubei",
          "suoxie": "sshb",
          "other": "2536@ssh"
      },
      "sanshuinan": {
          "name": "三水南",
          "code": "RNQ",
          "pinyin": "sanshuinan",
          "suoxie": "ssn",
          "other": "2538@ssn"
      },
      "shaoshannan": {
          "name": "韶山南",
          "code": "INQ",
          "pinyin": "shaoshannan",
          "suoxie": "ssn",
          "other": "2539@ssu"
      },
      "sansui": {
          "name": "三穗",
          "code": "QHW",
          "pinyin": "sansui",
          "suoxie": "ss",
          "other": "2540@sti"
      },
      "shiti": {
          "name": "石梯",
          "code": "STE",
          "pinyin": "shiti",
          "suoxie": "st",
          "other": "2541@swe"
      },
      "shanwei": {
          "name": "汕尾",
          "code": "OGQ",
          "pinyin": "shanwei",
          "suoxie": "sw",
          "other": "2542@sxb"
      },
      "shexianbei": {
          "name": "歙县北",
          "code": "NPH",
          "pinyin": "shexianbei",
          "suoxie": "sxb",
          "other": "2543@sxb"
      },
      "shaoxingbei": {
          "name": "绍兴北",
          "code": "SLH",
          "pinyin": "shaoxingbei",
          "suoxie": "sxb",
          "other": "2544@sxd"
      },
      "shaoxingdong": {
          "name": "绍兴东",
          "code": "SSH",
          "pinyin": "shaoxingdong",
          "suoxie": "sxd",
          "other": "2545@sxi"
      },
      "sixian": {
          "name": "泗县",
          "code": "GPH",
          "pinyin": "sixian",
          "suoxie": "sx",
          "other": "2546@sxi"
      },
      "shixing": {
          "name": "始兴",
          "code": "IPQ",
          "pinyin": "shixing",
          "suoxie": "sx",
          "other": "2547@sya"
      },
      "siyang": {
          "name": "泗阳",
          "code": "MPH",
          "pinyin": "siyang",
          "suoxie": "sy",
          "other": "2548@sya"
      },
      "shuangyang": {
          "name": "双阳",
          "code": "OYT",
          "pinyin": "shuangyang",
          "suoxie": "sy",
          "other": "2549@syb"
      },
      "shaoyangbei": {
          "name": "邵阳北",
          "code": "OVQ",
          "pinyin": "shaoyangbei",
          "suoxie": "syb",
          "other": "2550@syb"
      },
      "songyuanbei": {
          "name": "松原北",
          "code": "OCT",
          "pinyin": "songyuanbei",
          "suoxie": "syb",
          "other": "2551@syi"
      },
      "shanyin": {
          "name": "山阴",
          "code": "SNV",
          "pinyin": "shanyin",
          "suoxie": "sy",
          "other": "2552@szb"
      },
      "shenzhenbei": {
          "name": "深圳北",
          "code": "IOQ",
          "pinyin": "shenzhenbei",
          "suoxie": "szb",
          "other": "2553@szh"
      },
      "shenzhenpingshan": {
          "name": "深圳坪山",
          "code": "IFQ",
          "pinyin": "shenzhenpingshan",
          "suoxie": "szps",
          "other": "2555@szs"
      },
      "shizuishan": {
          "name": "石嘴山",
          "code": "QQJ",
          "pinyin": "shizuishan",
          "suoxie": "szs",
          "other": "2556@szx"
      },
      "shizhuxian": {
          "name": "石柱县",
          "code": "OSW",
          "pinyin": "shizhuxian",
          "suoxie": "szx",
          "other": "2557@tan"
      },
      "taiannan": {
          "name": "台安南",
          "code": "TAD",
          "pinyin": "taiannan",
          "suoxie": "tan",
          "other": "2558@tcb"
      },
      "taocunbei": {
          "name": "桃村北",
          "code": "TOK",
          "pinyin": "taocunbei",
          "suoxie": "tcb",
          "other": "2559@tdb"
      },
      "tiandongbei": {
          "name": "田东北",
          "code": "TBZ",
          "pinyin": "tiandongbei",
          "suoxie": "tdb",
          "other": "2560@tdd"
      },
      "tuditangdong": {
          "name": "土地堂东",
          "code": "TTN",
          "pinyin": "tuditangdong",
          "suoxie": "tdtd",
          "other": "2561@tgx"
      },
      "taiguxi": {
          "name": "太谷西",
          "code": "TIV",
          "pinyin": "taiguxi",
          "suoxie": "tgx",
          "other": "2562@tha"
      },
      "tuha": {
          "name": "吐哈",
          "code": "THR",
          "pinyin": "tuha",
          "suoxie": "th",
          "other": "2563@tha"
      },
      "tonghai": {
          "name": "通海",
          "code": "TAM",
          "pinyin": "tonghai",
          "suoxie": "th",
          "other": "2564@thb"
      },
      "taihebei": {
          "name": "太和北",
          "code": "JYN",
          "pinyin": "taihebei",
          "suoxie": "thb",
          "other": "2565@thc"
      },
      "tianhejichang": {
          "name": "天河机场",
          "code": "TJN",
          "pinyin": "tianhejichang",
          "suoxie": "thjc",
          "other": "2566@thj"
      },
      "tianhejie": {
          "name": "天河街",
          "code": "TEN",
          "pinyin": "tianhejie",
          "suoxie": "thj",
          "other": "2567@thx"
      },
      "tonghuaxian": {
          "name": "通化县",
          "code": "TXL",
          "pinyin": "tonghuaxian",
          "suoxie": "thx",
          "other": "2568@tji"
      },
      "tongjiang": {
          "name": "同江",
          "code": "TJB",
          "pinyin": "tongjiang",
          "suoxie": "tj",
          "other": "2569@tlb"
      },
      "tonglingbei": {
          "name": "铜陵北",
          "code": "KXH",
          "pinyin": "tonglingbei",
          "suoxie": "tlb",
          "other": "2570@tlb"
      },
      "tulufanbei": {
          "name": "吐鲁番北",
          "code": "TAR",
          "pinyin": "tulufanbei",
          "suoxie": "tlfb",
          "other": "2571@tni"
      },
      "taining": {
          "name": "泰宁",
          "code": "TNS",
          "pinyin": "taining",
          "suoxie": "tn",
          "other": "2572@trn"
      },
      "tongrennan": {
          "name": "铜仁南",
          "code": "TNW",
          "pinyin": "tongrennan",
          "suoxie": "trn",
          "other": "2573@tsn"
      },
      "tianshuinan": {
          "name": "天水南",
          "code": "TIJ",
          "pinyin": "tianshuinan",
          "suoxie": "tsn",
          "other": "2574@twe"
      },
      "tongwei": {
          "name": "通渭",
          "code": "TWJ",
          "pinyin": "tongwei",
          "suoxie": "tw",
          "other": "2575@txd"
      },
      "tianxindong": {
          "name": "田心东",
          "code": "KQQ",
          "pinyin": "tianxindong",
          "suoxie": "txd",
          "other": "2576@txh"
      },
      "tangxunhu": {
          "name": "汤逊湖",
          "code": "THN",
          "pinyin": "tangxunhu",
          "suoxie": "txh",
          "other": "2577@txi"
      },
      "tengxian": {
          "name": "藤县",
          "code": "TAZ",
          "pinyin": "tengxian",
          "suoxie": "tx",
          "other": "2578@tyn"
      },
      "taiyuannan": {
          "name": "太原南",
          "code": "TNV",
          "pinyin": "taiyuannan",
          "suoxie": "tyn",
          "other": "2579@tyx"
      },
      "tongyuanpuxi": {
          "name": "通远堡西",
          "code": "TST",
          "pinyin": "tongyuanpuxi",
          "suoxie": "typx",
          "other": "2580@tzh"
      },
      "tongzhou": {
          "name": "通州",
          "code": "TOP",
          "pinyin": "tongzhou",
          "suoxie": "tz",
          "other": "2581@wdd"
      },
      "wendengdong": {
          "name": "文登东",
          "code": "WGK",
          "pinyin": "wendengdong",
          "suoxie": "wdd",
          "other": "2582@wfs"
      },
      "wufushan": {
          "name": "五府山",
          "code": "WFG",
          "pinyin": "wufushan",
          "suoxie": "wfs",
          "other": "2583@whb"
      },
      "weihulingbei": {
          "name": "威虎岭北",
          "code": "WBL",
          "pinyin": "weihulingbei",
          "suoxie": "whlb",
          "other": "2584@whb"
      },
      "weihaibei": {
          "name": "威海北",
          "code": "WHK",
          "pinyin": "weihaibei",
          "suoxie": "whb",
          "other": "2585@wlb"
      },
      "wulanchabu": {
          "name": "乌兰察布",
          "code": "WPC",
          "pinyin": "wulanchabu",
          "suoxie": "wlcb",
          "other": "2586@wld"
      },
      "wulongbeidong": {
          "name": "五龙背东",
          "code": "WMT",
          "pinyin": "wulongbeidong",
          "suoxie": "wlbd",
          "other": "2587@wln"
      },
      "wulongquannan": {
          "name": "乌龙泉南",
          "code": "WFN",
          "pinyin": "wulongquannan",
          "suoxie": "wlqn",
          "other": "2588@wlq"
      },
      "wulumuqi": {
          "name": "乌鲁木齐",
          "code": "WAR",
          "pinyin": "wulumuqi",
          "suoxie": "wlmq",
          "other": "2589@wns"
      },
      "wunvshan": {
          "name": "五女山",
          "code": "WET",
          "pinyin": "wunvshan",
          "suoxie": "wns",
          "other": "2590@wsh"
      },
      "wusheng": {
          "name": "武胜",
          "code": "WSE",
          "pinyin": "wusheng",
          "suoxie": "ws",
          "other": "2591@wwe"
      },
      "wawushan": {
          "name": "瓦屋山",
          "code": "WAH",
          "pinyin": "wawushan",
          "suoxie": "wws",
          "other": "2593@wxx"
      },
      "wenxixi": {
          "name": "闻喜西",
          "code": "WOV",
          "pinyin": "wenxixi",
          "suoxie": "wxx",
          "other": "2594@wyb"
      },
      "wuyibei": {
          "name": "武义北",
          "code": "WDH",
          "pinyin": "wuyibei",
          "suoxie": "wyb",
          "other": "2595@wyb"
      },
      "wuyishanbei": {
          "name": "武夷山北",
          "code": "WBS",
          "pinyin": "wuyishanbei",
          "suoxie": "wysb",
          "other": "2596@wyd"
      },
      "wuyishandong": {
          "name": "武夷山东",
          "code": "WCS",
          "pinyin": "wuyishandong",
          "suoxie": "wysd",
          "other": "2597@wyu"
      },
      "weiyuan": {
          "name": "渭源",
          "code": "WEJ",
          "pinyin": "weiyuan",
          "suoxie": "wy",
          "other": "2599@wzb"
      },
      "wanzhoubei": {
          "name": "万州北",
          "code": "WZE",
          "pinyin": "wanzhoubei",
          "suoxie": "wzb",
          "other": "2600@wzh"
      },
      "wuzhi": {
          "name": "武陟",
          "code": "WIF",
          "pinyin": "wuzhi",
          "suoxie": "wz",
          "other": "2601@wzn"
      },
      "wuzhounan": {
          "name": "梧州南",
          "code": "WBZ",
          "pinyin": "wuzhounan",
          "suoxie": "wzn",
          "other": "2602@xab"
      },
      "xinganbei": {
          "name": "兴安北",
          "code": "XDZ",
          "pinyin": "xinganbei",
          "suoxie": "xab",
          "other": "2603@xcd"
      },
      "xuchangdong": {
          "name": "许昌东",
          "code": "XVF",
          "pinyin": "xuchangdong",
          "suoxie": "xcd",
          "other": "2604@xch"
      },
      "xiangcheng": {
          "name": "项城",
          "code": "ERN",
          "pinyin": "xiangcheng",
          "suoxie": "xc",
          "other": "2605@xdd"
      },
      "xindudong": {
          "name": "新都东",
          "code": "EWW",
          "pinyin": "xindudong",
          "suoxie": "xdd",
          "other": "2606@xfe"
      },
      "xianfeng": {
          "name": "先锋",
          "code": "NQQ",
          "pinyin": "xianfeng",
          "suoxie": "xf",
          "other": "2608@xfl"
      },
      "xiangfulu": {
          "name": "湘府路",
          "code": "FVQ",
          "pinyin": "xiangfulu",
          "suoxie": "xfl",
          "other": "2609@xfx"
      },
      "xiangfenxi": {
          "name": "襄汾西",
          "code": "XTV",
          "pinyin": "xiangfenxi",
          "suoxie": "xfx",
          "other": "2610@xgb"
      },
      "xiaoganbei": {
          "name": "孝感北",
          "code": "XJN",
          "pinyin": "xiaoganbei",
          "suoxie": "xgb",
          "other": "2611@xgd"
      },
      "xiaogandong": {
          "name": "孝感东",
          "code": "GDN",
          "pinyin": "xiaogandong",
          "suoxie": "xgd",
          "other": "2612@xhd"
      },
      "xihudong": {
          "name": "西湖东",
          "code": "WDQ",
          "pinyin": "xihudong",
          "suoxie": "xhd",
          "other": "2613@xhn"
      },
      "xinhuanan": {
          "name": "新化南",
          "code": "EJQ",
          "pinyin": "xinhuanan",
          "suoxie": "xhn",
          "other": "2614@xhx"
      },
      "xinhuangxi": {
          "name": "新晃西",
          "code": "EWQ",
          "pinyin": "xinhuangxi",
          "suoxie": "xhx",
          "other": "2615@xji"
      },
      "xinjin": {
          "name": "新津",
          "code": "IRW",
          "pinyin": "xinjin",
          "suoxie": "xj",
          "other": "2616@xjk"
      },
      "xiaojinkou": {
          "name": "小金口",
          "code": "NKQ",
          "pinyin": "xiaojinkou",
          "suoxie": "xjk",
          "other": "2617@xjn"
      },
      "xinjinan": {
          "name": "辛集南",
          "code": "IJP",
          "pinyin": "xinjinan",
          "suoxie": "xjn",
          "other": "2618@xjn"
      },
      "xinjinnan": {
          "name": "新津南",
          "code": "ITW",
          "pinyin": "xinjinnan",
          "suoxie": "xjn",
          "other": "2619@xnd"
      },
      "xianningdong": {
          "name": "咸宁东",
          "code": "XKN",
          "pinyin": "xianningdong",
          "suoxie": "xnd",
          "other": "2620@xnn"
      },
      "xianningnan": {
          "name": "咸宁南",
          "code": "UNN",
          "pinyin": "xianningnan",
          "suoxie": "xnn",
          "other": "2621@xpn"
      },
      "xupunan": {
          "name": "溆浦南",
          "code": "EMQ",
          "pinyin": "xupunan",
          "suoxie": "xpn",
          "other": "2622@xpx"
      },
      "xipingxi": {
          "name": "西平西",
          "code": "EGQ",
          "pinyin": "xipingxi",
          "suoxie": "xpx",
          "other": "2623@xtb"
      },
      "xiangtanbei": {
          "name": "湘潭北",
          "code": "EDQ",
          "pinyin": "xiangtanbei",
          "suoxie": "xtb",
          "other": "2624@xtd"
      },
      "xingtaidong": {
          "name": "邢台东",
          "code": "EDP",
          "pinyin": "xingtaidong",
          "suoxie": "xtd",
          "other": "2625@xwq"
      },
      "xiwuqi": {
          "name": "西乌旗",
          "code": "XWC",
          "pinyin": "xiwuqi",
          "suoxie": "xwq",
          "other": "2626@xwx"
      },
      "xiuwuxi": {
          "name": "修武西",
          "code": "EXF",
          "pinyin": "xiuwuxi",
          "suoxie": "xwx",
          "other": "2627@xxb"
      },
      "xiaoxianbei": {
          "name": "萧县北",
          "code": "QSH",
          "pinyin": "xiaoxianbei",
          "suoxie": "xxb",
          "other": "2628@xxd"
      },
      "xinxiangdong": {
          "name": "新乡东",
          "code": "EGF",
          "pinyin": "xinxiangdong",
          "suoxie": "xxd",
          "other": "2629@xyb"
      },
      "xinyubei": {
          "name": "新余北",
          "code": "XBG",
          "pinyin": "xinyubei",
          "suoxie": "xyb",
          "other": "2630@xyc"
      },
      "xiyangcun": {
          "name": "西阳村",
          "code": "XQF",
          "pinyin": "xiyangcun",
          "suoxie": "xyc",
          "other": "2631@xyd"
      },
      "xinyangdong": {
          "name": "信阳东",
          "code": "OYN",
          "pinyin": "xinyangdong",
          "suoxie": "xyd",
          "other": "2632@xyd"
      },
      "xianyangqindu": {
          "name": "咸阳秦都",
          "code": "XOY",
          "pinyin": "xianyangqindu",
          "suoxie": "xyqd",
          "other": "2633@xyo"
      },
      "xianyou": {
          "name": "仙游",
          "code": "XWS",
          "pinyin": "xianyou",
          "suoxie": "xy",
          "other": "2634@xzc"
      },
      "xinzhengjichang": {
          "name": "新郑机场",
          "code": "EZF",
          "pinyin": "xinzhengjichang",
          "suoxie": "xzjc",
          "other": "2635@xzl"
      },
      "xiangzhanglu": {
          "name": "香樟路",
          "code": "FNQ",
          "pinyin": "xiangzhanglu",
          "suoxie": "xzl",
          "other": "2636@ybl"
      },
      "yingbinlu": {
          "name": "迎宾路",
          "code": "YFW",
          "pinyin": "yingbinlu",
          "suoxie": "ybl",
          "other": "2637@ycb"
      },
      "yongchengbei": {
          "name": "永城北",
          "code": "RGH",
          "pinyin": "yongchengbei",
          "suoxie": "ycb",
          "other": "2638@ycb"
      },
      "yunchengbei": {
          "name": "运城北",
          "code": "ABV",
          "pinyin": "yunchengbei",
          "suoxie": "ycb",
          "other": "2639@ycd"
      },
      "yongchuandong": {
          "name": "永川东",
          "code": "WMW",
          "pinyin": "yongchuandong",
          "suoxie": "ycd",
          "other": "2640@ycd"
      },
      "yuchengdong": {
          "name": "禹城东",
          "code": "YSK",
          "pinyin": "yuchengdong",
          "suoxie": "ycd",
          "other": "2641@ych"
      },
      "yuechi": {
          "name": "岳池",
          "code": "AWW",
          "pinyin": "yuechi",
          "suoxie": "yc",
          "other": "2643@ydh"
      },
      "yundonghai": {
          "name": "云东海",
          "code": "NAQ",
          "pinyin": "yundonghai",
          "suoxie": "ydh",
          "other": "2644@ydu"
      },
      "yaodu": {
          "name": "姚渡",
          "code": "AOJ",
          "pinyin": "yaodu",
          "suoxie": "yd",
          "other": "2645@yfd"
      },
      "yunfudong": {
          "name": "云浮东",
          "code": "IXQ",
          "pinyin": "yunfudong",
          "suoxie": "yfd",
          "other": "2646@yfn"
      },
      "yongfunan": {
          "name": "永福南",
          "code": "YBZ",
          "pinyin": "yongfunan",
          "suoxie": "yfn",
          "other": "2647@yge"
      },
      "yuge": {
          "name": "雨格",
          "code": "VTM",
          "pinyin": "yuge",
          "suoxie": "yg",
          "other": "2648@yhe"
      },
      "yanghe": {
          "name": "洋河",
          "code": "GTH",
          "pinyin": "yanghe",
          "suoxie": "yh",
          "other": "2649@yjb"
      },
      "yongjibei": {
          "name": "永济北",
          "code": "AJV",
          "pinyin": "yongjibei",
          "suoxie": "yjb",
          "other": "2650@yji"
      },
      "yijiang": {
          "name": "弋江",
          "code": "RVH",
          "pinyin": "yijiang",
          "suoxie": "yj",
          "other": "2651@yjp"
      },
      "yujiapu": {
          "name": "于家堡",
          "code": "YKP",
          "pinyin": "yujiapu",
          "suoxie": "yjp",
          "other": "2652@yjx"
      },
      "yanjixi": {
          "name": "延吉西",
          "code": "YXL",
          "pinyin": "yanjixi",
          "suoxie": "yjx",
          "other": "2653@ykn"
      },
      "yongkangnan": {
          "name": "永康南",
          "code": "QUH",
          "pinyin": "yongkangnan",
          "suoxie": "ykn",
          "other": "2654@ylh"
      },
      "yunlianghe": {
          "name": "运粮河",
          "code": "YEF",
          "pinyin": "yunlianghe",
          "suoxie": "ylh",
          "other": "2655@yli"
      },
      "yanling": {
          "name": "炎陵",
          "code": "YAG",
          "pinyin": "yanling",
          "suoxie": "yl",
          "other": "2656@yln"
      },
      "yanglingnan": {
          "name": "杨陵南",
          "code": "YEY",
          "pinyin": "yanglingnan",
          "suoxie": "yln",
          "other": "2657@ymi"
      },
      "yimin": {
          "name": "伊敏",
          "code": "YMX",
          "pinyin": "yimin",
          "suoxie": "ym",
          "other": "2658@yna"
      },
      "yunan": {
          "name": "郁南",
          "code": "YKQ",
          "pinyin": "yunan",
          "suoxie": "yn",
          "other": "2659@ypi"
      },
      "yinping": {
          "name": "银瓶",
          "code": "KPQ",
          "pinyin": "yinping",
          "suoxie": "yp",
          "other": "2660@ysh"
      },
      "yongshou": {
          "name": "永寿",
          "code": "ASY",
          "pinyin": "yongshou",
          "suoxie": "ys",
          "other": "2661@ysh"
      },
      "yangshuo": {
          "name": "阳朔",
          "code": "YCZ",
          "pinyin": "yangshuo",
          "suoxie": "ys",
          "other": "2662@ysh"
      },
      "yunshan": {
          "name": "云山",
          "code": "KZQ",
          "pinyin": "yunshan",
          "suoxie": "ys",
          "other": "2663@ysn"
      },
      "yushannan": {
          "name": "玉山南",
          "code": "YGG",
          "pinyin": "yushannan",
          "suoxie": "ysn",
          "other": "2664@yta"
      },
      "yintan": {
          "name": "银滩",
          "code": "CTQ",
          "pinyin": "yintan",
          "suoxie": "yt",
          "other": "2665@yta"
      },
      "yongtai": {
          "name": "永泰",
          "code": "YTS",
          "pinyin": "yongtai",
          "suoxie": "yt",
          "other": "2666@ytb"
      },
      "yingtanbei": {
          "name": "鹰潭北",
          "code": "YKG",
          "pinyin": "yingtanbei",
          "suoxie": "ytb",
          "other": "2667@ytn"
      },
      "yantainan": {
          "name": "烟台南",
          "code": "YLK",
          "pinyin": "yantainan",
          "suoxie": "ytn",
          "other": "2668@yto"
      },
      "yitong": {
          "name": "伊通",
          "code": "YTL",
          "pinyin": "yitong",
          "suoxie": "yt",
          "other": "2669@yxi"
      },
      "youxi": {
          "name": "尤溪",
          "code": "YXS",
          "pinyin": "youxi",
          "suoxie": "yx",
          "other": "2670@yxi"
      },
      "yunxiao": {
          "name": "云霄",
          "code": "YBS",
          "pinyin": "yunxiao",
          "suoxie": "yx",
          "other": "2671@yxi"
      },
      "yixing": {
          "name": "宜兴",
          "code": "YUH",
          "pinyin": "yixing",
          "suoxie": "yx",
          "other": "2672@yxi"
      },
      "yuxi": {
          "name": "玉溪",
          "code": "AXM",
          "pinyin": "yuxi",
          "suoxie": "yx",
          "other": "2673@yxi"
      },
      "yingxian": {
          "name": "应县",
          "code": "YZV",
          "pinyin": "yingxian",
          "suoxie": "yx",
          "other": "2675@yxn"
      },
      "youxiannan": {
          "name": "攸县南",
          "code": "YXG",
          "pinyin": "youxiannan",
          "suoxie": "yxn",
          "other": "2676@yxx"
      },
      "yangxianxi": {
          "name": "洋县西",
          "code": "YXY",
          "pinyin": "yangxianxi",
          "suoxie": "yxx",
          "other": "2677@yyb"
      },
      "yuyaobei": {
          "name": "余姚北",
          "code": "CTH",
          "pinyin": "yuyaobei",
          "suoxie": "yyb",
          "other": "2678@yzh"
      },
      "yuzhong": {
          "name": "榆中",
          "code": "IZJ",
          "pinyin": "yuzhong",
          "suoxie": "yz",
          "other": "2679@zan"
      },
      "zhaoan": {
          "name": "诏安",
          "code": "ZDS",
          "pinyin": "zhaoan",
          "suoxie": "za",
          "other": "2680@zdc"
      },
      "zhengdingjichang": {
          "name": "正定机场",
          "code": "ZHP",
          "pinyin": "zhengdingjichang",
          "suoxie": "zdjc",
          "other": "2681@zfd"
      },
      "zhifangdong": {
          "name": "纸坊东",
          "code": "ZMN",
          "pinyin": "zhifangdong",
          "suoxie": "zfd",
          "other": "2682@zge"
      },
      "zhungeer": {
          "name": "准格尔",
          "code": "ZEC",
          "pinyin": "zhungeer",
          "suoxie": "zge",
          "other": "2683@zhb"
      },
      "zhuanghebei": {
          "name": "庄河北",
          "code": "ZUT",
          "pinyin": "zhuanghebei",
          "suoxie": "zhb",
          "other": "2684@zhu"
      },
      "zhaohua": {
          "name": "昭化",
          "code": "ZHW",
          "pinyin": "zhaohua",
          "suoxie": "zh",
          "other": "2685@zjb"
      },
      "zhijinbei": {
          "name": "织金北",
          "code": "ZJE",
          "pinyin": "zhijinbei",
          "suoxie": "zjb",
          "other": "2686@zjc"
      },
      "zhangjiachuan": {
          "name": "张家川",
          "code": "ZIJ",
          "pinyin": "zhangjiachuan",
          "suoxie": "zjc",
          "other": "2687@zji"
      },
      "zhijiang": {
          "name": "芷江",
          "code": "ZPQ",
          "pinyin": "zhijiang",
          "suoxie": "zj",
          "other": "2688@zji"
      },
      "zhijin": {
          "name": "织金",
          "code": "IZW",
          "pinyin": "zhijin",
          "suoxie": "zj",
          "other": "2689@zka"
      },
      "zhongkai": {
          "name": "仲恺",
          "code": "KKQ",
          "pinyin": "zhongkai",
          "suoxie": "zk",
          "other": "2690@zko"
      },
      "zengkou": {
          "name": "曾口",
          "code": "ZKE",
          "pinyin": "zengkou",
          "suoxie": "zk",
          "other": "2691@zli"
      },
      "zuoling": {
          "name": "左岭",
          "code": "ZSN",
          "pinyin": "zuoling",
          "suoxie": "zl",
          "other": "2692@zmd"
      },
      "zhangmutoudong": {
          "name": "樟木头东",
          "code": "ZRQ",
          "pinyin": "zhangmutoudong",
          "suoxie": "zmtd",
          "other": "2693@zmx"
      },
      "zhumadianxi": {
          "name": "驻马店西",
          "code": "ZLN",
          "pinyin": "zhumadianxi",
          "suoxie": "zmdx",
          "other": "2694@zpu"
      },
      "zhangpu": {
          "name": "漳浦",
          "code": "ZCS",
          "pinyin": "zhangpu",
          "suoxie": "zp",
          "other": "2695@zqd"
      },
      "zhaoqingdong": {
          "name": "肇庆东",
          "code": "FCQ",
          "pinyin": "zhaoqingdong",
          "suoxie": "zqd",
          "other": "2696@zqi"
      },
      "zhuangqiao": {
          "name": "庄桥",
          "code": "ZQH",
          "pinyin": "zhuangqiao",
          "suoxie": "zq",
          "other": "2697@zsh"
      },
      "zhaoshan": {
          "name": "昭山",
          "code": "KWQ",
          "pinyin": "zhaoshan",
          "suoxie": "zs",
          "other": "2698@zsx"
      },
      "zhongshanxi": {
          "name": "钟山西",
          "code": "ZAZ",
          "pinyin": "zhongshanxi",
          "suoxie": "zsx",
          "other": "2699@zxi"
      },
      "zhangxian": {
          "name": "漳县",
          "code": "ZXJ",
          "pinyin": "zhangxian",
          "suoxie": "zx",
          "other": "2700@zyb"
      },
      "ziyangbei": {
          "name": "资阳北",
          "code": "FYW",
          "pinyin": "ziyangbei",
          "suoxie": "zyb",
          "other": "2701@zyx"
      },
      "zhangyexi": {
          "name": "张掖西",
          "code": "ZEJ",
          "pinyin": "zhangyexi",
          "suoxie": "zyx",
          "other": "2702@zzb"
      },
      "zizhongbei": {
          "name": "资中北",
          "code": "WZW",
          "pinyin": "zizhongbei",
          "suoxie": "zzb",
          "other": "2703@zzd"
      },
      "zhuozhoudong": {
          "name": "涿州东",
          "code": "ZAP",
          "pinyin": "zhuozhoudong",
          "suoxie": "zzd",
          "other": "2704@zzd"
      },
      "zaozhuangdong": {
          "name": "枣庄东",
          "code": "ZNK",
          "pinyin": "zaozhuangdong",
          "suoxie": "zzd",
          "other": "2705@zzd"
      },
      "zhuozidong": {
          "name": "卓资东",
          "code": "ZDC",
          "pinyin": "zhuozidong",
          "suoxie": "zzd",
          "other": "2706@zzd"
      },
      "zhengzhoudong": {
          "name": "郑州东",
          "code": "ZAF",
          "pinyin": "zhengzhoudong",
          "suoxie": "zzd",
          "other": "2707@zzn"
      }
  }
}

module.exports = station;