"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //自定义星星的个数
      value: 3,
      value1: 2,
      // 自定义选择星星颜色个数
      activeColorValue: 3,
      // 是否允许半星的个数
      HalfValue: 3.5,
      // 自定义图标星星个数
      activeIconValue: 3
    };
  },
  watch: {
    value(newValue, oldValue) {
    }
  },
  methods: {
    change(e) {
    }
  }
};
if (!Array) {
  const _easycom_u_rate2 = common_vendor.resolveComponent("u-rate");
  _easycom_u_rate2();
}
const _easycom_u_rate = () => "../../../uni_modules/uview-plus/components/u-rate/u-rate.js";
if (!Math) {
  _easycom_u_rate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: "20"
    }),
    b: common_vendor.o($options.change),
    c: common_vendor.o(($event) => $data.value = $event),
    d: common_vendor.p({
      size: "20",
      modelValue: $data.value
    }),
    e: common_vendor.p({
      size: "30",
      count: "4"
    }),
    f: common_vendor.p({
      size: "20",
      disabled: true
    }),
    g: common_vendor.p({
      size: "20",
      readonly: true
    }),
    h: common_vendor.o(($event) => $data.activeColorValue = $event),
    i: common_vendor.p({
      size: "20",
      activeColor: "#2979ff",
      modelValue: $data.activeColorValue
    }),
    j: common_vendor.o(($event) => $data.value1 = $event),
    k: common_vendor.p({
      size: "20",
      inactiveColor: "#2979ff",
      modelValue: $data.value1
    }),
    l: common_vendor.p({
      size: "20",
      touchable: false
    }),
    m: common_vendor.p({
      size: "20",
      touchable: true
    }),
    n: common_vendor.o($options.change),
    o: common_vendor.o(($event) => $data.HalfValue = $event),
    p: common_vendor.p({
      size: "20",
      allowHalf: true,
      modelValue: $data.HalfValue
    }),
    q: common_vendor.o(($event) => $data.activeIconValue = $event),
    r: common_vendor.p({
      size: "20",
      inactiveIcon: "heart",
      activeIcon: "heart-fill",
      modelValue: $data.activeIconValue
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/rate/rate.nvue"]]);
wx.createPage(MiniProgramPage);
