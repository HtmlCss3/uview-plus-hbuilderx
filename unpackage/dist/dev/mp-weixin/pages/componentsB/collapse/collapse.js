"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    open(e) {
    },
    close(e) {
    },
    change(e) {
    }
  }
};
if (!Array) {
  const _easycom_u_collapse_item2 = common_vendor.resolveComponent("u-collapse-item");
  const _easycom_u_collapse2 = common_vendor.resolveComponent("u-collapse");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  (_easycom_u_collapse_item2 + _easycom_u_collapse2 + _easycom_u_gap2)();
}
const _easycom_u_collapse_item = () => "../../../uni_modules/uview-plus/components/u-collapse-item/u-collapse-item.js";
const _easycom_u_collapse = () => "../../../uni_modules/uview-plus/components/u-collapse/u-collapse.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
if (!Math) {
  (_easycom_u_collapse_item + _easycom_u_collapse + _easycom_u_gap)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "文档指南",
      name: "Docs guide"
    }),
    b: common_vendor.p({
      title: "组件全面",
      name: "Variety components"
    }),
    c: common_vendor.p({
      title: "众多利器",
      name: "Numerous tools"
    }),
    d: common_vendor.o($options.change),
    e: common_vendor.o($options.close),
    f: common_vendor.o($options.open),
    g: common_vendor.p({
      title: "文档指南"
    }),
    h: common_vendor.p({
      disabled: true,
      title: "组件全面"
    }),
    i: common_vendor.p({
      name: "2",
      title: "众多利器"
    }),
    j: common_vendor.p({
      value: ["2"]
    }),
    k: common_vendor.p({
      title: "文档指南"
    }),
    l: common_vendor.p({
      title: "组件全面"
    }),
    m: common_vendor.p({
      title: "众多利器"
    }),
    n: common_vendor.p({
      accordion: true
    }),
    o: common_vendor.p({
      title: "文档指南"
    }),
    p: common_vendor.p({
      title: "组件全面"
    }),
    q: common_vendor.p({
      title: "众多利器"
    }),
    r: common_vendor.p({
      accordion: true,
      border: false
    }),
    s: common_vendor.p({
      height: "50"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/collapse/collapse.nvue"]]);
wx.createPage(MiniProgramPage);
