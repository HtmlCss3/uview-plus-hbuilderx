"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_badge2 = common_vendor.resolveComponent("u-badge");
  (_easycom_u_icon2 + _easycom_u_badge2)();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_badge = () => "../../../uni_modules/uview-plus/components/u-badge/u-badge.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_badge)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "server-fill",
      size: 20,
      color: _ctx.$u.color["contentColor"]
    }),
    b: common_vendor.p({
      name: "home",
      size: 20,
      color: _ctx.$u.color["contentColor"]
    }),
    c: common_vendor.p({
      count: 9,
      type: "error",
      offset: [-3, -6]
    }),
    d: common_vendor.p({
      name: "shopping-cart",
      size: 20,
      color: _ctx.$u.color["contentColor"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a7f831df"], ["__file", "D:/project/mini-app/uview-plus/pages/template/submitBar/index.vue"]]);
wx.createPage(MiniProgramPage);
