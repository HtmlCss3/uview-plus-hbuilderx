"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      loading: false,
      loadingPageData: {
        // 自定义提示内容
        loadingText: "",
        // 自定义图片
        image: "",
        // 自定义加载动画模式
        loadingMode: "",
        // 自定义背景色
        bgColor: "#ffffff"
      },
      list: [
        {
          title: "自定义提示内容",
          iconUrl: "https://cdn.uviewui.com/uview/demo/loading-page/promptContent.png"
        },
        {
          title: "自定义图片",
          iconUrl: "https://cdn.uviewui.com/uview/demo/loading-page/customPicture.png"
        },
        {
          title: "自定义加载动画模式",
          iconUrl: "https://cdn.uviewui.com/uview/demo/loading-page/customMode.png"
        },
        {
          title: "自定义背景色",
          iconUrl: "https://cdn.uviewui.com/uview/demo/loading-page/customBgColor.png"
        }
      ]
    };
  },
  methods: {
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    openLoadingPage(indexNum) {
      this.loadingPageData = {
        loadingText: "",
        image: "",
        loadingMode: "",
        bgColor: "#ffffff",
        iconSize: 28
      };
      if (indexNum == 0) {
        this.loadingPageData.loadingMode = "semicircle";
        this.loadingPageData.loadingText = "Hello uView";
        this.loadingPageData.color = "#C8C8C8";
        this.loadingPageData.loadingColor = "#C8C8C8";
      } else if (indexNum == 1) {
        this.loadingPageData.image = "/static/uview/common/logo.png";
        this.loadingPageData.loadingText = "uView UI";
        this.loadingPageData.iconSize = 40;
        this.loadingPageData.color = "#C8C8C8";
        this.loadingPageData.loadingColor = "#C8C8C8";
      } else if (indexNum == 2) {
        this.loadingPageData.loadingMode = "circle";
        this.loadingPageData.loadingText = "uView UI";
        this.loadingPageData.color = "#C8C8C8";
        this.loadingPageData.loadingColor = "#C8C8C8";
      } else if (indexNum == 3) {
        this.loadingPageData.loadingMode = "spinner";
        this.loadingPageData.bgColor = "rgba(0, 0, 0, 0.3)";
        this.loadingPageData.loadingText = "uView UI";
        this.loadingPageData.color = "#eee";
        this.loadingPageData.loadingColor = "#ddd";
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2e3);
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_loading_page2 = common_vendor.resolveComponent("u-loading-page");
  (_easycom_u_navbar2 + _easycom_u_gap2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_loading_page2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_loading_page = () => "../../../uni_modules/uview-plus/components/u-loading-page/u-loading-page.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_gap + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_loading_page)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "加载页",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.p({
      bgColor: "#fff",
      height: "20"
    }),
    d: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.openLoadingPage(index), index),
        c: index,
        d: "7c6bc206-3-" + i0 + ",7c6bc206-2",
        e: common_vendor.p({
          titleStyle: {
            fontWeight: 500
          },
          title: item.title,
          isLink: true
        })
      };
    }),
    e: common_vendor.p({
      loadingText: $data.loadingPageData.loadingText,
      image: $data.loadingPageData.image,
      iconSize: $data.loadingPageData.iconSize,
      loadingMode: $data.loadingPageData.loadingMode,
      bgColor: $data.loadingPageData.bgColor,
      loading: $data.loading,
      color: $data.loadingPageData.color,
      loadingColor: $data.loadingPageData.loadingColor
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/loading-page/loading-page.nvue"]]);
wx.createPage(MiniProgramPage);
