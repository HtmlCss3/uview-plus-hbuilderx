"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_u_loading_icon2 = common_vendor.resolveComponent("u-loading-icon");
  _easycom_u_loading_icon2();
}
const _easycom_u_loading_icon = () => "../../../uni_modules/uview-plus/components/u-loading-icon/u-loading-icon.js";
if (!Math) {
  _easycom_u_loading_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      mode: "semicircle"
    }),
    b: common_vendor.p({
      mode: "circle"
    }),
    c: common_vendor.p({
      mode: "circle",
      timingFunction: "linear"
    }),
    d: common_vendor.p({
      color: "#19be6b"
    }),
    e: common_vendor.p({
      vertical: true,
      text: "加载中"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/loading-icon/loading-icon.nvue"]]);
wx.createPage(MiniProgramPage);
