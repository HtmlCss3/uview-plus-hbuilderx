"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false
    };
  },
  methods: {
    setDefault() {
    },
    showRegionPicker() {
      this.show = true;
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  (_easycom_u_icon2 + _easycom_u_picker2)();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_picker = () => "../../../uni_modules/uview-plus/components/u-picker/u-picker.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.showRegionPicker && $options.showRegionPicker(...args)),
    b: common_vendor.p({
      size: "22",
      name: "plus"
    }),
    c: common_vendor.o((...args) => $options.setDefault && $options.setDefault(...args)),
    d: common_vendor.sr("uPicker", "47dde2a0-1"),
    e: common_vendor.o(($event) => $data.show = $event),
    f: common_vendor.p({
      mode: "region",
      modelValue: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47dde2a0"], ["__file", "D:/project/mini-app/uview-plus/pages/template/address/addSite.vue"]]);
wx.createPage(MiniProgramPage);
