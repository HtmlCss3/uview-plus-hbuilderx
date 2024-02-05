"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src1: "https://cdn.uviewui.com/uview/album/1.jpg",
      src2: "https://cdn.uviewui.com/uview/album/2.jpg",
      src3: "https://cdn.uviewui.com/uview/album/3.jpg",
      src4: "https://cdn.uviewui.com/uview/album/4.jpg",
      src5: "https://cdn.uviewui.com/uview/album/5.jpg",
      src6: "https://cdn.uviewui.com/uview/album/6.jpg",
      src7: "https://cdn.uviewui.com/uview/album/noExist.jpg",
      urls: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg"
      ]
    };
  },
  onLoad() {
  },
  methods: {
    click(name) {
      console.log("click", name);
    }
  }
};
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_avatar_group2 = common_vendor.resolveComponent("u-avatar-group");
  (_easycom_u_avatar2 + _easycom_u_avatar_group2)();
}
const _easycom_u_avatar = () => "../../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_avatar_group = () => "../../../uni_modules/uview-plus/components/u-avatar-group/u-avatar-group.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_u_avatar_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: $data.src1
    }),
    b: common_vendor.o($options.click),
    c: common_vendor.p({
      src: $data.src2,
      shape: "circle"
    }),
    d: common_vendor.p({
      src: $data.src3,
      shape: "square"
    }),
    e: common_vendor.p({
      src: $data.src4,
      size: "30"
    }),
    f: common_vendor.p({
      src: $data.src5,
      size: "40"
    }),
    g: common_vendor.p({
      src: $data.src6,
      size: "50"
    }),
    h: common_vendor.p({
      icon: "red-packet-fill",
      fontSize: "22"
    }),
    i: common_vendor.p({
      icon: "star-fill",
      fontSize: "22"
    }),
    j: common_vendor.p({
      text: "U",
      fontSize: "20",
      randomBgColor: true,
      colorIndex: 0
    }),
    k: common_vendor.p({
      text: "邓",
      fontSize: "18",
      randomBgColor: true
    }),
    l: common_vendor.p({
      text: "张",
      fontSize: "18",
      randomBgColor: true
    }),
    m: common_vendor.p({
      text: "王",
      fontSize: "18",
      randomBgColor: true
    }),
    n: common_vendor.p({
      src: $data.src7
    }),
    o: common_vendor.p({
      mpAvatar: true,
      size: "60"
    }),
    p: common_vendor.p({
      urls: $data.urls,
      size: "35",
      gap: "0.4"
    }),
    q: common_vendor.p({
      urls: $data.urls,
      size: "35",
      gap: "0.6"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/avatar/avatar.nvue"]]);
wx.createPage(MiniProgramPage);
