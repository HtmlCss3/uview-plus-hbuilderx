"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      close1: true,
      close2: true,
      close3: true,
      radios: [
        {
          checked: true
        },
        {
          checked: false
        },
        {
          checked: false
        }
      ],
      checkboxs: [
        {
          checked: true
        },
        {
          checked: false
        },
        {
          checked: false
        }
      ]
    };
  },
  methods: {
    radioClick(name) {
      this.radios.map((item, index) => {
        item.checked = index === name ? true : false;
      });
    },
    checkboxClick(name) {
      this.checkboxs[name].checked = !this.checkboxs[name].checked;
    }
  }
};
if (!Array) {
  const _easycom_u_tag2 = common_vendor.resolveComponent("u-tag");
  _easycom_u_tag2();
}
const _easycom_u_tag = () => "../../../uni_modules/uview-plus/components/u-tag/u-tag.js";
if (!Math) {
  _easycom_u_tag();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "标签",
      plain: true,
      size: "mini",
      type: "warning"
    }),
    b: common_vendor.p({
      text: "标签"
    }),
    c: common_vendor.p({
      text: "标签",
      type: "warning"
    }),
    d: common_vendor.p({
      text: "标签",
      type: "success"
    }),
    e: common_vendor.p({
      text: "标签",
      type: "error"
    }),
    f: common_vendor.p({
      text: "标签",
      plain: true,
      shape: "circle"
    }),
    g: common_vendor.p({
      text: "标签",
      type: "warning",
      shape: "circle"
    }),
    h: common_vendor.p({
      text: "标签",
      plain: true
    }),
    i: common_vendor.p({
      text: "标签",
      type: "warning",
      plain: true
    }),
    j: common_vendor.p({
      text: "标签",
      type: "success",
      plain: true
    }),
    k: common_vendor.p({
      text: "标签",
      type: "error",
      plain: true
    }),
    l: common_vendor.p({
      text: "标签",
      plain: true,
      plainFill: true
    }),
    m: common_vendor.p({
      text: "标签",
      type: "warning",
      plain: true,
      plainFill: true
    }),
    n: common_vendor.p({
      text: "标签",
      type: "success",
      plain: true,
      plainFill: true
    }),
    o: common_vendor.p({
      text: "标签",
      type: "error",
      plain: true,
      plainFill: true
    }),
    p: common_vendor.p({
      text: "标签",
      plain: true,
      size: "mini"
    }),
    q: common_vendor.p({
      text: "标签",
      type: "warning"
    }),
    r: common_vendor.p({
      text: "标签",
      type: "success",
      plain: true,
      size: "large"
    }),
    s: common_vendor.o(($event) => $data.close1 = false),
    t: common_vendor.p({
      text: "标签",
      size: "mini",
      closable: true,
      show: $data.close1
    }),
    v: common_vendor.o(($event) => $data.close2 = false),
    w: common_vendor.p({
      text: "标签",
      type: "warning",
      closable: true,
      show: $data.close2
    }),
    x: common_vendor.o(($event) => $data.close3 = false),
    y: common_vendor.p({
      text: "标签",
      type: "success",
      plain: true,
      size: "large",
      closable: true,
      show: $data.close3
    }),
    z: common_vendor.p({
      text: "标签",
      size: "mini",
      icon: "map",
      plain: true
    }),
    A: common_vendor.p({
      text: "标签",
      type: "warning",
      icon: "tags-fill"
    }),
    B: common_vendor.p({
      text: "标签",
      type: "success",
      plain: true,
      size: "large",
      icon: "https://cdn.uviewui.com/uview/example/tag.png"
    }),
    C: common_vendor.f($data.radios, (item, index, i0) => {
      return {
        a: common_vendor.o($options.radioClick, index),
        b: "7af58c34-24-" + i0,
        c: common_vendor.p({
          text: `选项${index + 1}`,
          plain: !item.checked,
          type: "warning",
          name: index
        }),
        d: index
      };
    }),
    D: common_vendor.f($data.checkboxs, (item, index, i0) => {
      return {
        a: common_vendor.o($options.checkboxClick, index),
        b: "7af58c34-25-" + i0,
        c: common_vendor.p({
          text: `选项${index + 1}`,
          plain: !item.checked,
          type: "warning",
          name: index
        }),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/tag/tag.nvue"]]);
wx.createPage(MiniProgramPage);
