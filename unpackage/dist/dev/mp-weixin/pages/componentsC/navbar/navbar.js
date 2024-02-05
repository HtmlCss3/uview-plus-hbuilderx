"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    navigateBack() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    rightClick() {
      console.log("rightClick");
    },
    leftClick() {
      console.log("leftClick");
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  (_easycom_u_navbar2 + _easycom_u_icon2 + _easycom_u_line2 + _easycom_u_gap2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_line = () => "../../../uni_modules/uview-plus/components/u-line/u-line.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_icon + _easycom_u_line + _easycom_u_gap)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "导航栏",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true,
      autoBack: true
    }),
    b: common_vendor.o($options.rightClick),
    c: common_vendor.o($options.leftClick),
    d: common_vendor.p({
      title: "个人中心",
      safeAreaInsetTop: false,
      fixed: false
    }),
    e: common_vendor.p({
      safeAreaInsetTop: false,
      title: "个人中心",
      fixed: false,
      ["left-text"]: "返回",
      rightIcon: "map"
    }),
    f: common_vendor.p({
      name: "arrow-left",
      size: "19"
    }),
    g: common_vendor.p({
      direction: "column",
      hairline: false,
      length: "16",
      margin: "0 8px"
    }),
    h: common_vendor.p({
      name: "home",
      size: "20"
    }),
    i: common_vendor.p({
      leftText: "返回",
      fixed: false,
      title: "个人中心",
      safeAreaInsetTop: false
    }),
    j: common_vendor.p({
      height: "50"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/navbar/navbar.nvue"]]);
wx.createPage(MiniProgramPage);
