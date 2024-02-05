"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      indexList: [],
      urls: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg"
      ]
    };
  },
  onLoad() {
    this.loadmore();
  },
  methods: {
    scrolltolower() {
      this.loadmore();
    },
    loadmore() {
      for (let i = 0; i < 30; i++) {
        this.indexList.push({
          url: this.urls[common_vendor.index.$u.random(0, this.urls.length - 1)]
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_list_item2 = common_vendor.resolveComponent("u-list-item");
  const _easycom_u_list2 = common_vendor.resolveComponent("u-list");
  (_easycom_u_avatar2 + _easycom_u_cell2 + _easycom_u_list_item2 + _easycom_u_list2)();
}
const _easycom_u_avatar = () => "../../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_list_item = () => "../../../uni_modules/uview-plus/components/u-list-item/u-list-item.js";
const _easycom_u_list = () => "../../../uni_modules/uview-plus/components/u-list/u-list.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_u_cell + _easycom_u_list_item + _easycom_u_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.indexList, (item, index, i0) => {
      return {
        a: "cbe9860a-3-" + i0 + "," + ("cbe9860a-2-" + i0),
        b: common_vendor.p({
          shape: "square",
          size: "35",
          src: item.url,
          customStyle: "margin: -3px 5px -3px 0"
        }),
        c: "cbe9860a-2-" + i0 + "," + ("cbe9860a-1-" + i0),
        d: common_vendor.p({
          title: `列表长度-${index + 1}`
        }),
        e: index,
        f: "cbe9860a-1-" + i0 + ",cbe9860a-0"
      };
    }),
    b: common_vendor.o($options.scrolltolower)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/list/list.nvue"]]);
wx.createPage(MiniProgramPage);
