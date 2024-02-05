"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text1: "uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用",
      text2: "uView UI众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨",
      text3: "uView UI收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍",
      text4: [
        "寒雨连江夜入吴",
        "平明送客楚山孤",
        "洛阳亲友如相问",
        "一片冰心在玉壶"
      ],
      text5: "涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川"
    };
  },
  onLoad() {
  },
  methods: {
    click(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_u_notice_bar2 = common_vendor.resolveComponent("u-notice-bar");
  _easycom_u_notice_bar2();
}
const _easycom_u_notice_bar = () => "../../../uni_modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
if (!Math) {
  _easycom_u_notice_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: $data.text1
    }),
    b: common_vendor.p({
      text: $data.text5,
      mode: "closable"
    }),
    c: common_vendor.p({
      text: $data.text2,
      speed: "250",
      mode: "closable"
    }),
    d: common_vendor.p({
      text: $data.text3,
      mode: "link",
      url: "/pages/componentsB/tag/tag"
    }),
    e: common_vendor.o($options.click),
    f: common_vendor.p({
      text: $data.text4,
      step: true
    }),
    g: common_vendor.o($options.click),
    h: common_vendor.p({
      text: $data.text4,
      direction: "column"
    }),
    i: common_vendor.p({
      text: $data.text1,
      color: "#ffffff",
      bgColor: "#f56c6c"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/noticeBar/noticeBar.nvue"]]);
wx.createPage(MiniProgramPage);
