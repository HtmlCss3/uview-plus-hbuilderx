"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text1: "长按文本，上方提示",
      text2: "长按文本，下方提示",
      text3: "显示多个扩展按钮",
      text4: "自动调整气泡位置",
      text5: "长按文本，显示背景色",
      buttons1: ["扩展"],
      buttons2: ["扩展", "搜索", "翻译"],
      buttons3: ["扩展", "搜索", "翻译"]
    };
  },
  onLoad() {
  },
  methods: {
    click(index) {
      console.log("index", index);
    }
  }
};
if (!Array) {
  const _easycom_u_tooltip2 = common_vendor.resolveComponent("u-tooltip");
  _easycom_u_tooltip2();
}
const _easycom_u_tooltip = () => "../../../uni_modules/uview-plus/components/u-tooltip/u-tooltip.js";
if (!Math) {
  _easycom_u_tooltip();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: $data.text1,
      overlay: true
    }),
    b: common_vendor.p({
      text: $data.text2,
      direction: "bottom"
    }),
    c: common_vendor.o($options.click),
    d: common_vendor.p({
      text: $data.text3,
      buttons: $data.buttons1
    }),
    e: common_vendor.p({
      text: $data.text4,
      buttons: $data.buttons2
    }),
    f: common_vendor.p({
      text: $data.text5,
      buttons: $data.buttons3,
      bgColor: "#e3e4e6"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/tooltip/tooltip.vue"]]);
wx.createPage(MiniProgramPage);
