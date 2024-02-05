"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    click() {
      console.log("click");
    }
  }
};
if (!Array) {
  const _easycom_u_link2 = common_vendor.resolveComponent("u-link");
  _easycom_u_link2();
}
const _easycom_u_link = () => "../../../uni_modules/uview-plus/components/u-link/u-link.js";
if (!Math) {
  _easycom_u_link();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.click),
    b: common_vendor.p({
      href: "https://uviewui.com/",
      text: "打开uView UI文档"
    }),
    c: common_vendor.p({
      href: "https://uviewui.com/",
      underLine: true,
      text: "Go to uView doc"
    }),
    d: common_vendor.p({
      href: "https://uviewui.com/",
      lineColor: "#19be6b",
      color: "#19be6b",
      text: "打开uView UI文档"
    }),
    e: common_vendor.p({
      href: "https://uniapp.dcloud.io/",
      text: "打开uni-app文档"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/link/link.nvue"]]);
wx.createPage(MiniProgramPage);
