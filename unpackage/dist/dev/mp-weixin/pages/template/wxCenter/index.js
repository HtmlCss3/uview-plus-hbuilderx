"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pic: "https://uviewui.com/common/logo.png",
      show: true
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  (_easycom_u_icon2 + _easycom_u_navbar2 + _easycom_u_avatar2 + _easycom_u_cell2 + _easycom_u_cell_group2)();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_avatar = () => "../../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_navbar + _easycom_u_avatar + _easycom_u_cell + _easycom_u_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "camera-fill",
      color: "#000000",
      size: "48"
    }),
    b: common_vendor.p({
      fixed: false,
      ["is-back"]: true,
      title: "　",
      ["border-bottom"]: false
    }),
    c: common_vendor.p({
      src: $data.pic,
      size: "140"
    }),
    d: common_vendor.p({
      name: "scan",
      color: "#969799",
      size: "28"
    }),
    e: common_vendor.p({
      name: "arrow-right",
      color: "#969799",
      size: "28"
    }),
    f: common_vendor.p({
      icon: "rmb-circle",
      title: "支付"
    }),
    g: common_vendor.p({
      icon: "star",
      title: "收藏"
    }),
    h: common_vendor.p({
      icon: "photo",
      title: "相册"
    }),
    i: common_vendor.p({
      icon: "coupon",
      title: "卡券"
    }),
    j: common_vendor.p({
      icon: "heart",
      title: "关注"
    }),
    k: common_vendor.p({
      icon: "setting",
      title: "设置"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/template/wxCenter/index.vue"]]);
wx.createPage(MiniProgramPage);
