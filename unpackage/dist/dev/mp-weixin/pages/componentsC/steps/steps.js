"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current1: 1
    };
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_u_steps_item2 = common_vendor.resolveComponent("u-steps-item");
  const _easycom_u_steps2 = common_vendor.resolveComponent("u-steps");
  (_easycom_u_steps_item2 + _easycom_u_steps2)();
}
const _easycom_u_steps_item = () => "../../../uni_modules/uview-plus/components/u-steps-item/u-steps-item.js";
const _easycom_u_steps = () => "../../../uni_modules/uview-plus/components/u-steps/u-steps.js";
if (!Math) {
  (_easycom_u_steps_item + _easycom_u_steps)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "已下单",
      desc: "10:30"
    }),
    b: common_vendor.p({
      title: "已出库",
      desc: "10:35"
    }),
    c: common_vendor.p({
      title: "运输中",
      desc: "11:40"
    }),
    d: common_vendor.p({
      current: $data.current1
    }),
    e: common_vendor.p({
      title: "已下单",
      desc: "10:30"
    }),
    f: common_vendor.p({
      title: "已出库",
      desc: "10:35"
    }),
    g: common_vendor.p({
      title: "运输中",
      desc: "11:40"
    }),
    h: common_vendor.p({
      current: 1,
      dot: true
    }),
    i: common_vendor.p({
      title: "已下单",
      desc: "10:30"
    }),
    j: common_vendor.p({
      title: "已出库",
      desc: "10:35"
    }),
    k: common_vendor.p({
      title: "运输中",
      desc: "11:40"
    }),
    l: common_vendor.p({
      current: 1,
      dot: true,
      direction: "column"
    }),
    m: common_vendor.p({
      title: "已下单",
      desc: "10:30"
    }),
    n: common_vendor.p({
      error: true,
      title: "仓库着火",
      desc: "10:35"
    }),
    o: common_vendor.p({
      title: "破产清算",
      desc: "11:40"
    }),
    p: common_vendor.p({
      current: 1
    }),
    q: common_vendor.p({
      title: "已下单",
      desc: "10:30"
    }),
    r: common_vendor.p({
      title: "已出库",
      desc: "10:35"
    }),
    s: common_vendor.p({
      title: "运输中",
      desc: "11:40"
    }),
    t: common_vendor.p({
      current: 1,
      activeIcon: "checkmark",
      inactiveIcon: "arrow-right"
    }),
    v: common_vendor.p({
      title: "已下单",
      desc: "10:30"
    }),
    w: common_vendor.p({
      title: "已出库",
      desc: "10:35"
    }),
    x: common_vendor.p({
      title: "运输中",
      desc: "11:40"
    }),
    y: common_vendor.p({
      current: 1
    }),
    z: common_vendor.p({
      title: "已下单",
      desc: "10:30"
    }),
    A: common_vendor.p({
      title: "已出库",
      desc: "10:35"
    }),
    B: common_vendor.p({
      title: "运输中",
      desc: "11:40"
    }),
    C: common_vendor.p({
      current: 1,
      activeColor: "#3c9cff"
    }),
    D: common_vendor.p({
      title: "已下单",
      desc: "10:30"
    }),
    E: common_vendor.p({
      title: "已出库",
      desc: "10:35"
    }),
    F: common_vendor.p({
      title: "运输中",
      desc: "11:40"
    }),
    G: common_vendor.p({
      current: 1,
      direction: "column"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/steps/steps.vue"]]);
wx.createPage(MiniProgramPage);
