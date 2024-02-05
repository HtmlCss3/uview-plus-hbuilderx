"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // type: 'default',
      // disabled: false
    };
  },
  onLoad() {
    setTimeout(() => {
      this.type = "primary";
      this.disabled = true;
    }, 2e3);
  },
  methods: {
    click() {
      console.log("click");
    }
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.click),
    b: common_vendor.p({
      text: "默认按钮",
      size: "normal",
      type: "info"
    }),
    c: common_vendor.p({
      text: "成功按钮",
      size: "normal",
      type: "success"
    }),
    d: common_vendor.p({
      text: "危险按钮",
      size: "normal",
      type: "error"
    }),
    e: common_vendor.p({
      text: "主要按钮",
      size: "normal",
      type: "primary"
    }),
    f: common_vendor.p({
      text: "警告按钮",
      size: "normal",
      type: "warning"
    }),
    g: common_vendor.p({
      text: "镂空按钮",
      size: "normal",
      type: "info",
      plain: true
    }),
    h: common_vendor.p({
      text: "镂空按钮",
      size: "normal",
      type: "success",
      plain: true
    }),
    i: common_vendor.p({
      text: "镂空按钮",
      size: "normal",
      type: "error",
      plain: true
    }),
    j: common_vendor.p({
      text: "镂空按钮",
      size: "normal",
      type: "primary",
      plain: true
    }),
    k: common_vendor.p({
      text: "镂空按钮",
      size: "normal",
      type: "warning",
      plain: true
    }),
    l: common_vendor.p({
      text: "细边按钮",
      size: "normal",
      type: "info",
      plain: true,
      hairline: true
    }),
    m: common_vendor.p({
      text: "细边按钮",
      size: "normal",
      type: "success",
      plain: true,
      hairline: true
    }),
    n: common_vendor.p({
      text: "细边按钮",
      size: "normal",
      type: "error",
      plain: true,
      hairline: true
    }),
    o: common_vendor.p({
      text: "细边按钮",
      size: "normal",
      type: "primary",
      plain: true,
      hairline: true
    }),
    p: common_vendor.p({
      text: "细边按钮",
      size: "normal",
      type: "warning",
      plain: true,
      hairline: true
    }),
    q: common_vendor.p({
      disabled: true,
      text: "禁用按钮",
      size: "normal",
      type: "info"
    }),
    r: common_vendor.p({
      disabled: true,
      text: "禁用按钮",
      size: "normal",
      type: "success"
    }),
    s: common_vendor.p({
      disabled: true,
      text: "禁用按钮",
      size: "normal",
      type: "error"
    }),
    t: common_vendor.p({
      disabled: true,
      text: "禁用按钮",
      size: "normal",
      type: "primary"
    }),
    v: common_vendor.p({
      disabled: true,
      text: "禁用按钮",
      size: "normal",
      type: "warning"
    }),
    w: common_vendor.p({
      loadingText: "加载中",
      size: "normal",
      loading: true,
      loadingMode: "circle",
      type: "success"
    }),
    x: common_vendor.p({
      loadingText: "加载中",
      size: "normal",
      loading: true,
      type: "error"
    }),
    y: common_vendor.p({
      text: "按钮图标",
      size: "normal",
      icon: "map",
      plain: true,
      type: "warning"
    }),
    z: common_vendor.p({
      text: "按钮图标",
      size: "normal",
      plain: true,
      shape: "circle",
      type: "success"
    }),
    A: common_vendor.p({
      text: "渐变色按钮",
      size: "normal",
      color: "linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
    }),
    B: common_vendor.p({
      text: "渐变色按钮",
      size: "normal",
      color: "linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))"
    }),
    C: common_vendor.p({
      text: "青绿色按钮",
      size: "normal",
      color: "rgb(10, 185, 156)"
    }),
    D: common_vendor.p({
      text: "超大尺寸",
      size: "large",
      type: "success"
    }),
    E: common_vendor.p({
      text: "普通尺寸",
      size: "normal",
      type: "error"
    }),
    F: common_vendor.p({
      text: "小型尺寸",
      size: "small",
      type: "primary"
    }),
    G: common_vendor.p({
      text: "超小尺寸",
      size: "mini",
      type: "warning"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/button/button.nvue"]]);
wx.createPage(MiniProgramPage);
