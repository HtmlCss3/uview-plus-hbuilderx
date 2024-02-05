"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    click() {
      console.log("Cell is clicked.");
    }
  }
};
if (!Array) {
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_tag2 = common_vendor.resolveComponent("u-tag");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  (_easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_tag2 + _easycom_u_gap2)();
}
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_tag = () => "../../../uni_modules/uview-plus/components/u-tag/u-tag.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
if (!Math) {
  (_easycom_u_cell + _easycom_u_cell_group + _easycom_u_tag + _easycom_u_gap)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "uview-plus",
      value: "内容",
      isLink: true
    }),
    b: common_vendor.p({
      title: "利剑出鞘,一统江湖",
      value: "内容",
      label: "挣脱束缚,向往自由"
    }),
    c: common_vendor.p({
      title: "单元格",
      icon: "lock-fill"
    }),
    d: common_vendor.p({
      title: "单元格",
      icon: "https://cdn.uviewui.com/uview/example/tag.png"
    }),
    e: common_vendor.p({
      size: "large",
      title: "单元格",
      value: "内容",
      isLink: true
    }),
    f: common_vendor.p({
      size: "large",
      title: "单元格",
      value: "内容",
      label: "描述信息"
    }),
    g: common_vendor.p({
      title: "单元格",
      value: "组件",
      isLink: true
    }),
    h: common_vendor.p({
      title: "单元格",
      value: "工具",
      ["arrow-direction"]: "up",
      isLink: true
    }),
    i: common_vendor.p({
      title: "单元格",
      value: "模板",
      ["arrow-direction"]: "down",
      isLink: true
    }),
    j: common_vendor.p({
      title: "打开标签页",
      isLink: true,
      url: "/pages/componentsB/tag/tag"
    }),
    k: common_vendor.p({
      title: "打开徽标页",
      isLink: true,
      url: "/pages/componentsB/badge/badge"
    }),
    l: common_vendor.p({
      title: "单元格",
      value: "内容",
      label: "描述信息",
      center: true
    }),
    m: common_vendor.p({
      text: "标签",
      plain: true,
      size: "mini",
      type: "warning"
    }),
    n: common_vendor.p({
      value: "内容"
    }),
    o: common_vendor.p({
      title: "单元格",
      isLink: true
    }),
    p: common_vendor.p({
      height: "30"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/cell/cell.nvue"]]);
wx.createPage(MiniProgramPage);
