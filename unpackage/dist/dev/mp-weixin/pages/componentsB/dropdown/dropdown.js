"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_dropdown_item2 = common_vendor.resolveComponent("u-dropdown-item");
  const _easycom_u_dropdown2 = common_vendor.resolveComponent("u-dropdown");
  (_easycom_u_dropdown_item2 + _easycom_u_dropdown2)();
}
const _easycom_u_dropdown_item = () => "../../../uni_modules/uview-plus/components/u-dropdown-item/u-dropdown-item.js";
const _easycom_u_dropdown = () => "../../../uni_modules/uview-plus/components/u-dropdown/u-dropdown.js";
if (!Math) {
  (_easycom_u_dropdown_item + _easycom_u_dropdown)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "标题1"
    }),
    b: common_vendor.p({
      title: "标题2"
    }),
    c: common_vendor.p({
      title: "标题3"
    }),
    d: common_vendor.p({
      title: "标题4"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/dropdown/dropdown.nvue"]]);
wx.createPage(MiniProgramPage);
