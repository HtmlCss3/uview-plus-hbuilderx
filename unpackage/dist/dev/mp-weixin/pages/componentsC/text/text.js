"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  onLoad() {
  },
  methods: {
    test() {
      console.log("test");
    },
    clickHandler() {
    }
  }
};
if (!Array) {
  const _easycom_u__text2 = common_vendor.resolveComponent("u--text");
  _easycom_u__text2();
}
const _easycom_u__text = () => "../../../uni_modules/uview-plus/components/u--text/u--text.js";
if (!Math) {
  _easycom_u__text();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.test),
    b: common_vendor.p({
      text: "我用十年青春,赴你最后之约"
    }),
    c: common_vendor.p({
      text: "主色",
      type: "primary"
    }),
    d: common_vendor.p({
      type: "error",
      text: "错误"
    }),
    e: common_vendor.p({
      type: "success",
      text: "成功"
    }),
    f: common_vendor.p({
      type: "warning",
      text: "警告"
    }),
    g: common_vendor.p({
      type: "info",
      text: "信息"
    }),
    h: common_vendor.p({
      mode: "phone",
      text: "15019479320"
    }),
    i: common_vendor.p({
      mode: "date",
      text: "1612959739"
    }),
    j: common_vendor.p({
      mode: "name",
      text: "张三三",
      format: "encrypt"
    }),
    k: common_vendor.p({
      mode: "link",
      text: "Go to uview-plus docs",
      href: "https://ijry.github.io/uview-plus/"
    }),
    l: common_vendor.p({
      mode: "price",
      text: "728732.32"
    }),
    m: common_vendor.p({
      prefixIcon: "baidu",
      iconStyle: "font-size: 19px",
      text: "百度一下"
    }),
    n: common_vendor.p({
      suffixIcon: "arrow-rightward",
      iconStyle: "font-size: 18px",
      text: "查看更多"
    }),
    o: common_vendor.p({
      lines: 2,
      text: "关于uView的取名来由，首字母u来自于uni-app首字母，uni-app是基于Vue.js，Vue和View(延伸为UI、视图之意)同音，同时view组件uni-app中 最基础，最重要的组件，故取名uView，表达源于uni-app和Vue之意，同时在此也对它们表示感谢。"
    }),
    p: common_vendor.o($options.clickHandler),
    q: common_vendor.p({
      text: "分享到微信",
      openType: "share",
      type: "success"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/text/text.nvue"]]);
wx.createPage(MiniProgramPage);
