"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      showSlot: false,
      showOpcatiy: false,
      list: [
        {
          title: "基本案列",
          iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/baseCases.png"
        },
        {
          title: "嵌入内容",
          iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/embeddedContent.png"
        },
        {
          title: "设置透明度",
          iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/setTransparency.png"
        }
      ]
    };
  },
  methods: {
    openMask(indexNum) {
      if (indexNum == 0) {
        this.show = !this.show;
      } else if (indexNum == 1) {
        this.showSlot = !this.showSlot;
      } else if (indexNum == 2) {
        this.showOpcatiy = !this.showOpcatiy;
      }
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_overlay2 = common_vendor.resolveComponent("u-overlay");
  (_easycom_u_navbar2 + _easycom_u_cell2 + _easycom_u_overlay2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_overlay = () => "../../../uni_modules/uview-plus/components/u-overlay/u-overlay.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_cell + _easycom_u_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "遮罩层",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.openMask(index), index),
        c: index,
        d: "02e6a7db-1-" + i0,
        e: common_vendor.p({
          titleStyle: {
            fontWeight: 500
          },
          title: item.title,
          isLink: true
        })
      };
    }),
    d: common_vendor.o(($event) => $data.show = !$data.show),
    e: common_vendor.p({
      show: $data.show
    }),
    f: common_vendor.o(($event) => $data.showSlot = !$data.showSlot),
    g: common_vendor.p({
      show: $data.showSlot
    }),
    h: common_vendor.o(($event) => $data.showOpcatiy = !$data.showOpcatiy),
    i: common_vendor.p({
      opacity: ".85",
      show: $data.showOpcatiy
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/overlay/overlay.nvue"]]);
wx.createPage(MiniProgramPage);
