"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    loadmore() {
      console.log("loadmore");
      common_vendor.index.$u.toast("加载更多");
    }
  }
};
if (!Array) {
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  _easycom_u_loadmore2();
}
const _easycom_u_loadmore = () => "../../../uni_modules/uview-plus/components/u-loadmore/u-loadmore.js";
if (!Math) {
  _easycom_u_loadmore();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      status: "loading",
      isDot: true,
      iconSize: 17
    }),
    b: common_vendor.p({
      line: true,
      status: "nomore"
    }),
    c: common_vendor.o($options.loadmore),
    d: common_vendor.p({
      line: true,
      status: "loadmore"
    }),
    e: common_vendor.p({
      status: "loading",
      loadingIcon: "circle"
    }),
    f: common_vendor.p({
      status: "nomore",
      isDot: true,
      line: true,
      color: "#909399"
    }),
    g: common_vendor.p({
      status: "loading",
      loadingText: "努力加载中,先喝杯茶",
      color: "#909399"
    }),
    h: common_vendor.p({
      loadmoreText: "看,我和别人不一样",
      color: "#1CD29B",
      lineColor: "#1CD29B",
      dashed: true,
      line: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/loadmore/loadmore.nvue"]]);
wx.createPage(MiniProgramPage);
