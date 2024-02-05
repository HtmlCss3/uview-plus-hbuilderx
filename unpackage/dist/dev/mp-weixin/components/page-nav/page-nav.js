"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    desc: String,
    title: String
  },
  data() {
    return {
      version: common_vendor.index.$u.config.v
    };
  },
  methods: {
    jumpToWx() {
    }
  }
};
if (!Array) {
  const _easycom_u__image2 = common_vendor.resolveComponent("u--image");
  _easycom_u__image2();
}
const _easycom_u__image = () => "../../uni_modules/uview-plus/components/u--image/u--image.js";
if (!Math) {
  _easycom_u__image();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      showLoading: true,
      src: "./static/uview/common/logo.png",
      width: "70px",
      height: "70px"
    }),
    b: common_vendor.o((...args) => $options.jumpToWx && $options.jumpToWx(...args)),
    c: common_vendor.t($props.desc)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-db742eeb"], ["__file", "D:/project/mini-app/uview-plus/components/page-nav/page-nav.vue"]]);
wx.createComponent(Component);
