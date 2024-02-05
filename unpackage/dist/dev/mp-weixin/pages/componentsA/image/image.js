"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: "https://cdn.uviewui.com/uview/album/1.jpg",
      src1: ""
    };
  },
  onLoad() {
    setTimeout(() => {
      this.src1 = this.src;
    }, 3e3);
  },
  methods: {
    click() {
      console.log("click");
    }
  }
};
if (!Array) {
  const _easycom_u__image2 = common_vendor.resolveComponent("u--image");
  const _easycom_u_loading_icon2 = common_vendor.resolveComponent("u-loading-icon");
  (_easycom_u__image2 + _easycom_u_loading_icon2)();
}
const _easycom_u__image = () => "../../../uni_modules/uview-plus/components/u--image/u--image.js";
const _easycom_u_loading_icon = () => "../../../uni_modules/uview-plus/components/u-loading-icon/u-loading-icon.js";
if (!Math) {
  (_easycom_u__image + _easycom_u_loading_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.click),
    b: common_vendor.p({
      showLoading: true,
      src: $data.src,
      width: "80px",
      height: "80px"
    }),
    c: common_vendor.p({
      shape: "circle",
      src: $data.src,
      width: "80px",
      height: "80px"
    }),
    d: common_vendor.p({
      radius: "4",
      src: $data.src,
      width: "80px",
      height: "80px"
    }),
    e: common_vendor.p({
      src: $data.src,
      width: "80px",
      height: "80px",
      mode: "widthFit"
    }),
    f: common_vendor.p({
      color: "red"
    }),
    g: common_vendor.p({
      src: $data.src1,
      width: "80px",
      height: "80px",
      mode: "widthFit"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/image/image.nvue"]]);
wx.createPage(MiniProgramPage);
