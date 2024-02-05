"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      description: "",
      title: ""
    };
  }
};
if (!Array) {
  const _easycom_u_alert2 = common_vendor.resolveComponent("u-alert");
  _easycom_u_alert2();
}
const _easycom_u_alert = () => "../../../uni_modules/uview-plus/components/u-alert/u-alert.js";
if (!Math) {
  _easycom_u_alert();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      description: "山不在于高，有了神仙就出名",
      type: "warning"
    }),
    b: common_vendor.p({
      description: "水不在深，有龙则灵",
      type: "primary"
    }),
    c: common_vendor.p({
      description: "斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青",
      type: "error"
    }),
    d: common_vendor.p({
      description: "谈笑有鸿儒，往来无白丁",
      type: "info"
    }),
    e: common_vendor.p({
      description: "可以调素琴，阅金经",
      type: "success"
    }),
    f: common_vendor.p({
      description: "无丝竹之乱耳，无案牍之劳形",
      type: "warning"
    }),
    g: common_vendor.p({
      description: "南阳诸葛庐，西蜀子云亭。孔子云：何陋之有",
      type: "warning",
      effect: "dark"
    }),
    h: common_vendor.p({
      description: "六王毕，四海一；蜀山兀，阿房出",
      type: "error",
      showIcon: true
    }),
    i: common_vendor.p({
      description: "覆压三百余里，隔离天日。骊山北构而西折，直走咸阳，二川溶溶，流入宫墙",
      type: "error",
      effect: "dark",
      showIcon: true
    }),
    j: common_vendor.p({
      description: "五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角",
      type: "success",
      showIcon: true,
      closable: true
    }),
    k: common_vendor.p({
      description: "盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落",
      type: "success",
      effect: "dark",
      closable: true,
      showIcon: true
    }),
    l: common_vendor.p({
      title: "妃嫔媵嫱，王子皇孙，辞楼下殿",
      description: "长桥卧波，未云何龙？复道行空，不霁何虹",
      type: "info",
      showIcon: true,
      closable: true
    }),
    m: common_vendor.p({
      title: "辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也",
      description: "高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐",
      type: "info",
      effect: "dark",
      closable: true,
      showIcon: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/alert/alert.nvue"]]);
wx.createPage(MiniProgramPage);
