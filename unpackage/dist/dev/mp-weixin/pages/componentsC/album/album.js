"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      albumWidth: 0,
      urls1: [{
        src2: "https://cdn.uviewui.com/uview/album/1.jpg"
      }],
      urls2: [
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
      ],
      urls3: [
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg"
      ],
      urls4: [
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg"
      ]
    };
  }
};
if (!Array) {
  const _easycom_u__text2 = common_vendor.resolveComponent("u--text");
  const _easycom_u_album2 = common_vendor.resolveComponent("u-album");
  (_easycom_u__text2 + _easycom_u_album2)();
}
const _easycom_u__text = () => "../../../uni_modules/uview-plus/components/u--text/u--text.js";
const _easycom_u_album = () => "../../../uni_modules/uview-plus/components/u-album/u-album.js";
if (!Math) {
  (_easycom_u__text + _easycom_u_album)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "uView UI",
      type: "primary",
      bold: true,
      size: "17"
    }),
    b: common_vendor.p({
      margin: "0 0 8px 0",
      text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水"
    }),
    c: common_vendor.p({
      urls: $data.urls1,
      keyName: "src2"
    }),
    d: common_vendor.p({
      text: "uView UI",
      type: "primary",
      bold: true,
      size: "17"
    }),
    e: common_vendor.p({
      margin: "0 0 8px 0",
      text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水"
    }),
    f: common_vendor.p({
      urls: $data.urls2
    }),
    g: common_vendor.p({
      text: "uView UI",
      type: "primary",
      bold: true,
      size: "17"
    }),
    h: common_vendor.p({
      text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水",
      customStyle: {
        width: $data.albumWidth + "px"
      }
    }),
    i: $data.albumWidth + "px",
    j: common_vendor.o((width) => $data.albumWidth = width),
    k: common_vendor.p({
      urls: $data.urls2,
      multipleSize: "68"
    }),
    l: common_vendor.p({
      text: "uView UI",
      type: "primary",
      bold: true,
      size: "17"
    }),
    m: common_vendor.p({
      margin: "0 0 8px 0",
      text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水"
    }),
    n: common_vendor.p({
      urls: $data.urls3,
      rowCount: "2",
      maxCount: "4",
      multipleMode: "scaleToFill"
    }),
    o: common_vendor.p({
      text: "uView UI",
      type: "primary",
      bold: true,
      size: "17"
    }),
    p: common_vendor.p({
      margin: "0 0 8px 0",
      text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水"
    }),
    q: common_vendor.p({
      urls: $data.urls4,
      rowCount: "2",
      maxCount: "4",
      multipleSize: "50"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/album/album.nvue"]]);
wx.createPage(MiniProgramPage);
