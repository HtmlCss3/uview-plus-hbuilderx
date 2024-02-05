"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      switch1: true,
      switch2: false
    };
  }
};
if (!Array) {
  const _easycom_u_skeleton2 = common_vendor.resolveComponent("u-skeleton");
  const _easycom_u_switch2 = common_vendor.resolveComponent("u-switch");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u__text2 = common_vendor.resolveComponent("u--text");
  (_easycom_u_skeleton2 + _easycom_u_switch2 + _easycom_u_gap2 + _easycom_u__text2)();
}
const _easycom_u_skeleton = () => "../../../uni_modules/uview-plus/components/u-skeleton/u-skeleton.js";
const _easycom_u_switch = () => "../../../uni_modules/uview-plus/components/u-switch/u-switch.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u__text = () => "../../../uni_modules/uview-plus/components/u--text/u--text.js";
if (!Math) {
  (_easycom_u_skeleton + _easycom_u_switch + _easycom_u_gap + _easycom_u__text)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      rows: "3",
      title: true,
      loading: true
    }),
    b: common_vendor.p({
      rows: "2",
      title: true,
      loading: true
    }),
    c: common_vendor.p({
      rows: "2",
      title: true,
      rowsWidth: ["100%", "35%"],
      loading: true
    }),
    d: common_vendor.p({
      rows: "3",
      title: true,
      rowsWidth: ["100%", "100%", "100%"],
      rowsHeight: ["18px", "18px", "80px"],
      loading: true
    }),
    e: common_vendor.o(($event) => $data.switch1 = $event),
    f: common_vendor.p({
      space: "2",
      inactiveColor: "#e6e6e6",
      modelValue: $data.switch1
    }),
    g: common_vendor.p({
      height: "15",
      bgColor: "#fff"
    }),
    h: common_vendor.p({
      animate: $data.switch1,
      rows: "3",
      title: true,
      loading: true
    }),
    i: common_vendor.p({
      height: "15",
      bgColor: "#fff"
    }),
    j: common_vendor.p({
      animate: $data.switch1,
      rows: "3",
      title: true,
      loading: true,
      avatar: true
    }),
    k: common_vendor.o(($event) => $data.switch2 = $event),
    l: common_vendor.p({
      space: "2",
      inactiveColor: "#e6e6e6",
      modelValue: $data.switch2
    }),
    m: common_vendor.p({
      height: "15",
      bgColor: "#fff"
    }),
    n: common_vendor.p({
      text: "利剑出鞘,一统江湖",
      type: "main",
      size: "16"
    }),
    o: common_vendor.p({
      type: "tips",
      size: "14",
      customStyle: "margin-top: 5px",
      text: "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用"
    }),
    p: common_vendor.p({
      rows: "2",
      title: true,
      loading: $data.switch2,
      avatar: true,
      rowsHeight: "14"
    }),
    q: common_vendor.p({
      height: "50",
      bgColor: "transparent"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/skeleton/skeleton.nvue"]]);
wx.createPage(MiniProgramPage);
