"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  mixins: [common_vendor.index.$u.mixin],
  methods: {
    navigateBack() {
      common_vendor.index.navigateBack();
    }
  }
};
if (!Array) {
  const _easycom_u__text2 = common_vendor.resolveComponent("u--text");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_sticky2 = common_vendor.resolveComponent("u-sticky");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  (_easycom_u__text2 + _easycom_u_button2 + _easycom_u_sticky2 + _easycom_u_gap2 + _easycom_u_divider2)();
}
const _easycom_u__text = () => "../../../uni_modules/uview-plus/components/u--text/u--text.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_sticky = () => "../../../uni_modules/uview-plus/components/u-sticky/u-sticky.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_divider = () => "../../../uni_modules/uview-plus/components/u-divider/u-divider.js";
if (!Math) {
  (_easycom_u__text + _easycom_u_button + _easycom_u_sticky + _easycom_u_gap + _easycom_u_divider)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "content",
      text: "滚动页面,即可看到下方的按钮会吸顶。"
    }),
    b: common_vendor.p({
      text: "吸顶按钮",
      type: "success"
    }),
    c: common_vendor.p({
      bgColor: "#fff",
      height: "1500px"
    }),
    d: common_vendor.p({
      text: "已到底部"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/sticky/sticky.nvue"]]);
wx.createPage(MiniProgramPage);
