"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value1: "",
      value2: "天山雪莲",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: ""
    };
  },
  watch: {
    value1(newValue, oldValue) {
    }
  },
  methods: {
    change(e) {
      console.log(e);
    },
    clickIcon() {
      common_vendor.index.$u.toast("点击了左侧图标");
    }
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../../../uni_modules/uview-plus/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o(($event) => $data.value1 = $event),
    c: common_vendor.p({
      ["show-action"]: false,
      modelValue: $data.value1
    }),
    d: common_vendor.o(($event) => $data.value2 = $event),
    e: common_vendor.p({
      ["show-action"]: false,
      modelValue: $data.value2
    }),
    f: common_vendor.t($data.value2),
    g: common_vendor.o(($event) => $data.value3 = $event),
    h: common_vendor.p({
      ["show-action"]: false,
      shape: "round",
      modelValue: $data.value3
    }),
    i: common_vendor.o(($event) => $data.value4 = $event),
    j: common_vendor.p({
      ["show-action"]: false,
      shape: "square",
      modelValue: $data.value4
    }),
    k: common_vendor.o(($event) => $data.value5 = $event),
    l: common_vendor.p({
      modelValue: $data.value5
    }),
    m: common_vendor.p({
      placeholder: "输入框被禁用,可以监听点击事件进行跳转",
      disabled: true,
      ["show-action"]: false
    }),
    n: common_vendor.o($options.clickIcon),
    o: common_vendor.o(($event) => $data.value6 = $event),
    p: common_vendor.p({
      ["show-action"]: false,
      modelValue: $data.value6
    }),
    q: common_vendor.o(($event) => $data.value7 = $event),
    r: common_vendor.p({
      ["show-action"]: false,
      ["input-align"]: "left",
      modelValue: $data.value7
    }),
    s: common_vendor.o(($event) => $data.value8 = $event),
    t: common_vendor.p({
      ["show-action"]: false,
      ["input-align"]: "center",
      modelValue: $data.value8
    }),
    v: common_vendor.o(($event) => $data.value9 = $event),
    w: common_vendor.p({
      ["show-action"]: false,
      ["input-align"]: "right",
      modelValue: $data.value9
    }),
    x: common_vendor.o(($event) => $data.value10 = $event),
    y: common_vendor.p({
      ["show-action"]: false,
      borderColor: "rgb(230, 230, 230)",
      bgColor: "#fff",
      modelValue: $data.value10
    }),
    z: common_vendor.o(($event) => $data.value11 = $event),
    A: common_vendor.p({
      ["show-action"]: false,
      ["search-icon-color"]: "#FF0000",
      modelValue: $data.value11
    }),
    B: common_vendor.o(($event) => $data.value12 = $event),
    C: common_vendor.p({
      ["show-action"]: false,
      ["placeholder-color"]: "#FF0000",
      modelValue: $data.value12
    }),
    D: common_vendor.o(($event) => $data.value13 = $event),
    E: common_vendor.p({
      ["show-action"]: false,
      color: "#FF0000",
      modelValue: $data.value13
    }),
    F: common_vendor.o(($event) => $data.value14 = $event),
    G: common_vendor.p({
      label: "手机",
      ["show-action"]: false,
      modelValue: $data.value14
    }),
    H: common_vendor.o(($event) => $data.value15 = $event),
    I: common_vendor.p({
      ["search-icon"]: "scan",
      ["show-action"]: false,
      modelValue: $data.value15
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/search/search.nvue"]]);
wx.createPage(MiniProgramPage);
