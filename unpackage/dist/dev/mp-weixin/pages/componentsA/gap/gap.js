"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  _easycom_u_gap2();
}
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
if (!Math) {
  _easycom_u_gap();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      bgColor: "#f3f4f6"
    }),
    b: common_vendor.p({
      bgColor: "#2979ff"
    }),
    c: common_vendor.p({
      bgColor: "#f3f4f6",
      height: "40"
    }),
    d: common_vendor.p({
      bgColor: "#f3f4f6",
      marginTop: "20",
      marginBottom: "20"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/gap/gap.nvue"]]);
wx.createPage(MiniProgramPage);
