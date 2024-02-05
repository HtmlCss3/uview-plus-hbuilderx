"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value1: false,
      value2: true,
      value3: false,
      value4: true,
      value5: false,
      value6: true,
      value7: false,
      value8: true,
      value9: true,
      value10: true,
      value11: false,
      value12: true,
      value13: true
    };
  },
  watch: {
    value1(newValue, oldValue) {
      console.log("v-model", newValue);
    }
  },
  methods: {
    change(e) {
      console.log("change", e);
    },
    asyncChange(e) {
      common_vendor.index.showModal({
        content: e ? "确定要打开吗" : "确定要关闭吗",
        success: (res) => {
          if (res.confirm) {
            this.value13 = e;
          }
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_switch2 = common_vendor.resolveComponent("u-switch");
  _easycom_u_switch2();
}
const _easycom_u_switch = () => "../../../uni_modules/uview-plus/components/u-switch/u-switch.js";
if (!Math) {
  _easycom_u_switch();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o(($event) => $data.value1 = $event),
    c: common_vendor.p({
      modelValue: $data.value1
    }),
    d: common_vendor.t($data.value1),
    e: common_vendor.o(($event) => $data.value2 = $event),
    f: common_vendor.p({
      modelValue: $data.value2
    }),
    g: common_vendor.t($data.value2),
    h: common_vendor.o(($event) => $data.value3 = $event),
    i: common_vendor.p({
      loading: true,
      modelValue: $data.value3
    }),
    j: common_vendor.o(($event) => $data.value4 = $event),
    k: common_vendor.p({
      loading: true,
      modelValue: $data.value4
    }),
    l: common_vendor.o(($event) => $data.value5 = $event),
    m: common_vendor.p({
      disabled: true,
      modelValue: $data.value5
    }),
    n: common_vendor.o(($event) => $data.value6 = $event),
    o: common_vendor.p({
      disabled: true,
      modelValue: $data.value6
    }),
    p: common_vendor.o(($event) => $data.value7 = $event),
    q: common_vendor.p({
      size: "28",
      modelValue: $data.value7
    }),
    r: common_vendor.o(($event) => $data.value8 = $event),
    s: common_vendor.p({
      size: "20",
      modelValue: $data.value8
    }),
    t: common_vendor.o(($event) => $data.value9 = $event),
    v: common_vendor.p({
      activeColor: "#f56c6c",
      loading: true,
      modelValue: $data.value9
    }),
    w: common_vendor.o(($event) => $data.value10 = $event),
    x: common_vendor.p({
      activeColor: "#5ac725",
      loading: true,
      modelValue: $data.value10
    }),
    y: common_vendor.o(($event) => $data.value11 = $event),
    z: common_vendor.p({
      space: 2,
      activeColor: "#f56c6c",
      inactiveColor: "rgb(230, 230, 230)",
      modelValue: $data.value11
    }),
    A: common_vendor.o(($event) => $data.value12 = $event),
    B: common_vendor.p({
      space: "2",
      activeColor: "#f9ae3d",
      inactiveColor: "rgb(230, 230, 230)",
      modelValue: $data.value12
    }),
    C: common_vendor.o($options.asyncChange),
    D: common_vendor.o(($event) => $data.value13 = $event),
    E: common_vendor.p({
      asyncChange: true,
      modelValue: $data.value13
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/switch/switch.nvue"]]);
wx.createPage(MiniProgramPage);
