"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_u_badge2 = common_vendor.resolveComponent("u-badge");
  _easycom_u_badge2();
}
const _easycom_u_badge = () => "../../../uni_modules/uview-plus/components/u-badge/u-badge.js";
if (!Math) {
  _easycom_u_badge();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: 1500,
      shape: "horn"
    }),
    b: common_vendor.p({
      value: 5132,
      numberType: "ellipsis"
    }),
    c: common_vendor.p({
      value: 1011,
      numberType: "overflow"
    }),
    d: common_vendor.p({
      value: 1500,
      numberType: "limit"
    }),
    e: common_vendor.p({
      value: 45187,
      numberType: "limit"
    }),
    f: common_vendor.p({
      value: 1011,
      numberType: "overflow",
      isDot: true
    }),
    g: common_vendor.p({
      value: 9,
      type: "error"
    }),
    h: common_vendor.p({
      value: 9,
      type: "warning"
    }),
    i: common_vendor.p({
      value: 9,
      type: "success"
    }),
    j: common_vendor.p({
      value: 9,
      type: "primary"
    }),
    k: common_vendor.p({
      value: 9,
      type: "error",
      inverted: true
    }),
    l: common_vendor.p({
      value: 1532,
      inverted: true,
      type: "warning"
    }),
    m: common_vendor.p({
      value: 12,
      inverted: true,
      type: "success"
    }),
    n: common_vendor.p({
      value: 999,
      inverted: true,
      type: "primary"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/badge/badge.nvue"]]);
wx.createPage(MiniProgramPage);
