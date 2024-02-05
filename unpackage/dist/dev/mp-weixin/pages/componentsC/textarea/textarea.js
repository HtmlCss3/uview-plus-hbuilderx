"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value1: "",
      value2: "统计字数",
      value3: "",
      value4: "",
      value5: ""
    };
  },
  methods: {
    formatter(value) {
      return value.replace(/[^0-9]/ig, "");
    }
  }
};
if (!Array) {
  const _easycom_u__textarea2 = common_vendor.resolveComponent("u--textarea");
  _easycom_u__textarea2();
}
const _easycom_u__textarea = () => "../../../uni_modules/uview-plus/components/u--textarea/u--textarea.js";
if (!Math) {
  _easycom_u__textarea();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.value1 = $event),
    b: common_vendor.p({
      placeholder: "请输入内容",
      modelValue: $data.value1
    }),
    c: common_vendor.t($data.value1),
    d: common_vendor.o(($event) => $data.value2 = $event),
    e: common_vendor.p({
      placeholder: "请输入内容",
      count: true,
      modelValue: $data.value2
    }),
    f: common_vendor.t($data.value2),
    g: common_vendor.o(($event) => $data.value3 = $event),
    h: common_vendor.p({
      placeholder: "请输入内容",
      autoHeight: true,
      modelValue: $data.value3
    }),
    i: common_vendor.o(($event) => $data.value4 = $event),
    j: common_vendor.p({
      placeholder: "文本域已被禁用",
      disabled: true,
      count: true,
      modelValue: $data.value4
    }),
    k: common_vendor.o(($event) => $data.value5 = $event),
    l: common_vendor.p({
      placeholder: "请输入内容",
      border: "bottom",
      modelValue: $data.value5
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/textarea/textarea.nvue"]]);
wx.createPage(MiniProgramPage);
