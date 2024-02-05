"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  _easycom_u_divider2();
}
const _easycom_u_divider = () => "../../../uni_modules/uview-plus/components/u-divider/u-divider.js";
if (!Math) {
  _easycom_u_divider();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "分割线"
    }),
    b: common_vendor.p({
      text: "分割线",
      dashed: true
    }),
    c: common_vendor.p({
      text: "分割线",
      hairline: true
    }),
    d: common_vendor.p({
      text: "分割线",
      dot: true
    }),
    e: common_vendor.p({
      text: "分割线",
      textPosition: "left"
    }),
    f: common_vendor.p({
      text: "分割线",
      textPosition: "right"
    }),
    g: common_vendor.p({
      text: "分割线",
      textColor: "#2979ff",
      lineColor: "#2979ff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/divider/divider.nvue"]]);
wx.createPage(MiniProgramPage);
