"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      orderList: [[], [], [], []],
      dataList: [
        {
          id: 1,
          store: "夏日流星限定贩卖",
          deal: "交易成功",
          goodsList: [
            {
              goodsUrl: "//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg",
              title: "【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风",
              type: "灰色;M",
              deliveryTime: "付款后30天内发货",
              price: "348.58",
              number: 2
            },
            {
              goodsUrl: "//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg",
              title: "【葡萄藤】现货 小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款",
              type: "45cm;S",
              deliveryTime: "付款后30天内发货",
              price: "135.00",
              number: 1
            }
          ]
        },
        {
          id: 2,
          store: "江南皮革厂",
          deal: "交易失败",
          goodsList: [
            {
              goodsUrl: "//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg",
              title: "【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风",
              type: "粉色;M",
              deliveryTime: "付款后7天内发货",
              price: "128.05",
              number: 1
            }
          ]
        },
        {
          id: 3,
          store: "三星旗舰店",
          deal: "交易失败",
          goodsList: [
            {
              goodsUrl: "//img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",
              title: "三星（SAMSUNG）京品家电 UA65RUF70AJXXZ 65英寸4K超高清 HDR 京东微联 智能语音 教育资源液晶电视机",
              type: "4K，广色域",
              deliveryTime: "保质5年",
              price: "1998",
              number: 3
            },
            {
              goodsUrl: "//img14.360buyimg.com/n7/jfs/t6007/205/4099529191/294869/ae4e6d4f/595dcf19Ndce3227d.jpg!q90.jpg",
              title: "美的(Midea)639升 对开门冰箱 19分钟急速净味 一级能效冷藏双开门杀菌智能家用双变频节能 BCD-639WKPZM(E)",
              type: "容量大，速冻",
              deliveryTime: "保质5年",
              price: "2354",
              number: 1
            }
          ]
        },
        {
          id: 4,
          store: "三星旗舰店",
          deal: "交易失败",
          goodsList: [
            {
              goodsUrl: "//img10.360buyimg.com/n7/jfs/t22300/31/1505958241/171936/9e201a89/5b2b12ffNe6dbb594.jpg!q90.jpg",
              title: "法国进口红酒 拉菲（LAFITE）传奇波尔多干红葡萄酒750ml*6整箱装",
              type: "4K，广色域",
              deliveryTime: "珍藏10年好酒",
              price: "1543",
              number: 3
            },
            {
              goodsUrl: "//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg",
              title: "蓝妹（BLUE GIRL）酷爽啤酒 清啤 原装进口啤酒 罐装 500ml*9听 整箱装",
              type: "一打",
              deliveryTime: "口感好",
              price: "120",
              number: 1
            }
          ]
        },
        {
          id: 5,
          store: "三星旗舰店",
          deal: "交易成功",
          goodsList: [
            {
              goodsUrl: "//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg",
              title: "企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108",
              type: "识别效率高",
              deliveryTime: "使用方便",
              price: "451",
              number: 9
            }
          ]
        }
      ],
      list: [
        {
          name: "待付款"
        },
        {
          name: "待发货"
        },
        {
          name: "待收货"
        },
        {
          name: "待评价",
          count: 12
        }
      ],
      current: 0,
      swiperCurrent: 0,
      tabsHeight: 0,
      dx: 0,
      loadStatus: ["loadmore", "loadmore", "loadmore", "loadmore"]
    };
  },
  onLoad() {
    this.getOrderList(0);
    this.getOrderList(1);
    this.getOrderList(3);
  },
  computed: {
    // 价格小数
    priceDecimal() {
      return (val) => {
        if (val !== parseInt(val))
          return val.slice(-2);
        else
          return "00";
      };
    },
    // 价格整数
    priceInt() {
      return (val) => {
        if (val !== parseInt(val))
          return val.split(".")[0];
        else
          return val;
      };
    }
  },
  methods: {
    reachBottom() {
      if (this.current != 2) {
        this.loadStatus.splice(this.current, 1, "loading");
        setTimeout(() => {
          this.getOrderList(this.current);
        }, 1200);
      }
    },
    // 页面数据
    getOrderList(idx) {
      for (let i = 0; i < 5; i++) {
        let index = this.$u.random(0, this.dataList.length - 1);
        let data = JSON.parse(JSON.stringify(this.dataList[index]));
        data.id = this.$u.guid();
        this.orderList[idx].push(data);
      }
      this.loadStatus.splice(this.current, 1, "loadmore");
    },
    // 总价
    totalPrice(item) {
      let price = 0;
      item.map((val) => {
        price += parseFloat(val.price);
      });
      return price.toFixed(2);
    },
    // 总件数
    totalNum(item) {
      let num = 0;
      item.map((val) => {
        num += val.number;
      });
      return num;
    },
    // tab栏切换
    change(index) {
      this.swiperCurrent = index;
      this.getOrderList(index);
    },
    transition({ detail: { dx } }) {
      this.$refs.tabs.setDx(dx);
    },
    animationfinish({ detail: { current } }) {
      this.$refs.tabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
    }
  }
};
if (!Array) {
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  (_easycom_u_tabs2 + _easycom_u_icon2 + _easycom_u_loadmore2)();
}
const _easycom_u_tabs = () => "../../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_loadmore = () => "../../../uni_modules/uview-plus/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_u_tabs + _easycom_u_icon + _easycom_u_loadmore)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("tabs", "f6c25353-0"),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      activeColor: "#f29100",
      list: $data.list,
      current: $data.current,
      ["is-scroll"]: false,
      swiperWidth: "750"
    }),
    d: common_vendor.f($data.orderList[0], (res, index, i0) => {
      return {
        a: "f6c25353-1-" + i0,
        b: common_vendor.t(res.store),
        c: "f6c25353-2-" + i0,
        d: common_vendor.t(res.deal),
        e: common_vendor.f(res.goodsList, (item, index2, i1) => {
          return {
            a: item.goodsUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.type),
            d: common_vendor.t(item.deliveryTime),
            e: common_vendor.t($options.priceInt(item.price)),
            f: common_vendor.t($options.priceDecimal(item.price)),
            g: common_vendor.t(item.number),
            h: index2
          };
        }),
        f: common_vendor.t($options.totalNum(res.goodsList)),
        g: common_vendor.t($options.priceInt($options.totalPrice(res.goodsList))),
        h: common_vendor.t($options.priceDecimal($options.totalPrice(res.goodsList))),
        i: "f6c25353-3-" + i0,
        j: res.id
      };
    }),
    e: common_vendor.p({
      name: "home",
      size: 30,
      color: "rgb(94,94,94)"
    }),
    f: common_vendor.p({
      name: "arrow-right",
      color: "rgb(203,203,203)",
      size: 26
    }),
    g: common_vendor.p({
      name: "more-dot-fill",
      color: "rgb(203,203,203)"
    }),
    h: common_vendor.p({
      status: $data.loadStatus[0],
      bgColor: "#f2f2f2"
    }),
    i: common_vendor.o((...args) => $options.reachBottom && $options.reachBottom(...args)),
    j: common_vendor.f($data.orderList[1], (res, index, i0) => {
      return {
        a: "f6c25353-5-" + i0,
        b: common_vendor.t(res.store),
        c: "f6c25353-6-" + i0,
        d: common_vendor.t(res.deal),
        e: common_vendor.f(res.goodsList, (item, index2, i1) => {
          return {
            a: item.goodsUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.type),
            d: common_vendor.t(item.deliveryTime),
            e: common_vendor.t($options.priceInt(item.price)),
            f: common_vendor.t($options.priceDecimal(item.price)),
            g: common_vendor.t(item.number),
            h: index2
          };
        }),
        f: common_vendor.t($options.totalNum(res.goodsList)),
        g: common_vendor.t($options.priceInt($options.totalPrice(res.goodsList))),
        h: common_vendor.t($options.priceDecimal($options.totalPrice(res.goodsList))),
        i: "f6c25353-7-" + i0,
        j: res.id
      };
    }),
    k: common_vendor.p({
      name: "home",
      size: 30,
      color: "rgb(94,94,94)"
    }),
    l: common_vendor.p({
      name: "arrow-right",
      color: "rgb(203,203,203)",
      size: 26
    }),
    m: common_vendor.p({
      name: "more-dot-fill",
      color: "rgb(203,203,203)"
    }),
    n: common_vendor.p({
      status: $data.loadStatus[1],
      bgColor: "#f2f2f2"
    }),
    o: common_vendor.o((...args) => $options.reachBottom && $options.reachBottom(...args)),
    p: common_vendor.f($data.orderList[3], (res, index, i0) => {
      return {
        a: "f6c25353-9-" + i0,
        b: common_vendor.t(res.store),
        c: "f6c25353-10-" + i0,
        d: common_vendor.t(res.deal),
        e: common_vendor.f(res.goodsList, (item, index2, i1) => {
          return {
            a: item.goodsUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.type),
            d: common_vendor.t(item.deliveryTime),
            e: common_vendor.t($options.priceInt(item.price)),
            f: common_vendor.t($options.priceDecimal(item.price)),
            g: common_vendor.t(item.number),
            h: index2
          };
        }),
        f: common_vendor.t($options.totalNum(res.goodsList)),
        g: common_vendor.t($options.priceInt($options.totalPrice(res.goodsList))),
        h: common_vendor.t($options.priceDecimal($options.totalPrice(res.goodsList))),
        i: "f6c25353-11-" + i0,
        j: res.id
      };
    }),
    q: common_vendor.p({
      name: "home",
      size: 30,
      color: "rgb(94,94,94)"
    }),
    r: common_vendor.p({
      name: "arrow-right",
      color: "rgb(203,203,203)",
      size: 26
    }),
    s: common_vendor.p({
      name: "more-dot-fill",
      color: "rgb(203,203,203)"
    }),
    t: common_vendor.p({
      status: $data.loadStatus[3],
      bgColor: "#f2f2f2"
    }),
    v: common_vendor.o((...args) => $options.reachBottom && $options.reachBottom(...args)),
    w: $data.swiperCurrent,
    x: common_vendor.o((...args) => $options.transition && $options.transition(...args)),
    y: common_vendor.o((...args) => $options.animationfinish && $options.animationfinish(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f6c25353"], ["__file", "D:/project/mini-app/uview-plus/pages/template/order/index.vue"]]);
wx.createPage(MiniProgramPage);
