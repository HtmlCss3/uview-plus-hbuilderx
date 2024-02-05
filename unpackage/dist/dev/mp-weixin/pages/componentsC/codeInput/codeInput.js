"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "123",
      value10: "34"
    };
  },
  methods: {
    change(e) {
      console.log("change", e);
    },
    finish(e) {
      console.log("finish", e);
    }
  }
};
if (!Array) {
  const _easycom_u_code_input2 = common_vendor.resolveComponent("u-code-input");
  _easycom_u_code_input2();
}
const _easycom_u_code_input = () => "../../../uni_modules/uview-plus/components/u-code-input/u-code-input.js";
if (!Math) {
  _easycom_u_code_input();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o($options.finish),
    c: common_vendor.o(($event) => $data.value1 = $event),
    d: common_vendor.p({
      maxlength: 4,
      modelValue: $data.value1
    }),
    e: common_vendor.o(($event) => $data.value2 = $event),
    f: common_vendor.p({
      mode: "line",
      maxlength: 4,
      bold: true,
      modelValue: $data.value2
    }),
    g: common_vendor.o(($event) => $data.value3 = $event),
    h: common_vendor.p({
      maxlength: 6,
      modelValue: $data.value3
    }),
    i: common_vendor.o(($event) => $data.value4 = $event),
    j: common_vendor.p({
      mode: "box",
      space: 0,
      maxlength: 4,
      modelValue: $data.value4
    }),
    k: common_vendor.o(($event) => $data.value5 = $event),
    l: common_vendor.p({
      mode: "box",
      space: 0,
      maxlength: 4,
      hairline: true,
      modelValue: $data.value5
    }),
    m: common_vendor.o(($event) => $data.value6 = $event),
    n: common_vendor.p({
      mode: "line",
      space: 10,
      maxlength: 4,
      hairline: true,
      modelValue: $data.value6
    }),
    o: common_vendor.o(($event) => $data.value7 = $event),
    p: common_vendor.p({
      mode: "box",
      space: 0,
      maxlength: 4,
      hairline: true,
      color: "#f56c6c",
      borderColor: "#f56c6c",
      modelValue: $data.value7
    }),
    q: common_vendor.o(($event) => $data.value10 = $event),
    r: common_vendor.p({
      mode: "line",
      size: "30",
      maxlength: 4,
      hairline: true,
      color: "#3c9cff",
      borderColor: "#3c9cff",
      modelValue: $data.value10
    }),
    s: common_vendor.o(($event) => $data.value8 = $event),
    t: common_vendor.p({
      mode: "box",
      dot: true,
      space: 0,
      maxlength: 4,
      hairline: true,
      modelValue: $data.value8
    }),
    v: common_vendor.o(($event) => $data.value9 = $event),
    w: common_vendor.p({
      mode: "box",
      space: 0,
      maxlength: 4,
      hairline: true,
      fontSize: "17",
      modelValue: $data.value9
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/codeInput/codeInput.nvue"]]);
wx.createPage(MiniProgramPage);
