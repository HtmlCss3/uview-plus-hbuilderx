"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(() => {
    }),
    b: common_vendor.p({
      name: "arrow-right",
      color: "",
      size: 20
    }),
    c: common_vendor.o((...args) => _ctx.xxx122 && _ctx.xxx122(...args)),
    d: common_vendor.p({
      name: "zhuanfa",
      size: 24
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-03a7128b"], ["__file", "D:/project/mini-app/uview-plus/pages/template/coupon/index.vue"]]);
wx.createPage(MiniProgramPage);
