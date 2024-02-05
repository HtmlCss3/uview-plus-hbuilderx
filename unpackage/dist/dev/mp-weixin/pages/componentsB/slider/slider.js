"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value1: 30,
      value2: 30,
      value3: 30,
      value4: 30,
      value5: 30
    };
  },
  watch: {
    value1(n) {
    }
  },
  methods: {
    moving(value) {
    },
    click(value) {
    },
    end(value) {
    },
    start(value) {
    }
  }
};
if (!Array) {
  const _easycom_u_slider2 = common_vendor.resolveComponent("u-slider");
  _easycom_u_slider2();
}
const _easycom_u_slider = () => "../../../uni_modules/uview-plus/components/u-slider/u-slider.js";
if (!Math) {
  _easycom_u_slider();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.value1 = $event),
    b: common_vendor.p({
      modelValue: $data.value1
    }),
    c: common_vendor.o(($event) => $data.value2 = $event),
    d: common_vendor.p({
      showValue: true,
      min: "0",
      max: "50",
      modelValue: $data.value2
    }),
    e: common_vendor.o(($event) => $data.value4 = $event),
    f: common_vendor.p({
      step: 5,
      modelValue: $data.value4
    }),
    g: common_vendor.o(($event) => $data.value5 = $event),
    h: common_vendor.p({
      activeColor: "#deab8a",
      blockColor: "#f47920",
      modelValue: $data.value5
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/slider/slider.nvue"]]);
wx.createPage(MiniProgramPage);
