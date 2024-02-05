"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      popupData: {
        overlay: true,
        mode: "bottom",
        borderRadius: "",
        closeable: true,
        closeOnClickOverlay: true
      },
      list: [
        {
          popupData: {
            overlay: true,
            mode: "top",
            closeOnClickOverlay: true
          },
          title: "顶部弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeTop.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "right",
            closeOnClickOverlay: true
          },
          title: "右侧弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeRight.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "bottom",
            closeOnClickOverlay: true
          },
          title: "底部弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeBottom.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "left",
            closeOnClickOverlay: true
          },
          title: "左侧弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeLeft.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "center",
            round: 10,
            closeOnClickOverlay: true
          },
          title: "居中弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeCenter.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "bottom",
            round: 10,
            closeOnClickOverlay: true
          },
          title: "显示圆角",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/showRadis.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "bottom",
            closeable: false,
            closeOnClickOverlay: false
          },
          title: "禁止点击遮罩关闭",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/noClose.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "bottom",
            closeable: true,
            closeOnClickOverlay: true
          },
          title: "显示关闭按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/showCloseBtn.png"
        }
      ]
    };
  },
  methods: {
    openPopup(popupData) {
      this.popupData = popupData;
      common_vendor.index.$u.sleep().then(() => {
        this.show = !this.show;
      });
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    open() {
    },
    close() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_navbar2 + _easycom_u_gap2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_button2 + _easycom_u_popup2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_popup = () => "../../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_gap + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_button + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "弹窗",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.p({
      height: "20",
      bgColor: "#fff"
    }),
    d: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.openPopup(item.popupData), index),
        c: index,
        d: "f097143a-3-" + i0 + ",f097143a-2",
        e: common_vendor.p({
          titleStyle: {
            fontWeight: 500
          },
          title: item.title,
          isLink: true
        })
      };
    }),
    e: common_vendor.o(($event) => $data.show = !$data.show),
    f: common_vendor.p({
      type: "success",
      text: "点我关闭",
      customStyle: "width: 200rpx"
    }),
    g: ["bottom", "top"].includes($data.popupData.mode) ? "750rpx" : "200px",
    h: ["left", "right"].includes($data.popupData.mode) ? "480rpx" : "0",
    i: common_vendor.o($options.close),
    j: common_vendor.o($options.open),
    k: common_vendor.p({
      safeAreaInsetBottom: true,
      safeAreaInsetTop: true,
      mode: $data.popupData.mode,
      show: $data.show,
      round: $data.popupData.round,
      overlay: $data.popupData.overlay,
      borderRadius: $data.popupData.borderRadius,
      closeable: $data.popupData.closeable,
      closeOnClickOverlay: $data.popupData.closeOnClickOverlay
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/popup/popup.nvue"]]);
wx.createPage(MiniProgramPage);
