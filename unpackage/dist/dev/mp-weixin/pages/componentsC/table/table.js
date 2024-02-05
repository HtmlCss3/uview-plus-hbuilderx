"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  (_easycom_u_form_item2 + _easycom_u__form2)();
}
const _easycom_u_form_item = () => "../../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u__form = () => "../../../uni_modules/uview-plus/components/u--form/u--form.js";
if (!Math) {
  (_easycom_u_form_item + _easycom_u__form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      lable: "电话"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/table/table.nvue"]]);
wx.createPage(MiniProgramPage);
