"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 3,
      value5: 3,
      value6: 3,
      value7: 3,
      value8: 3.1,
      value9: 3,
      value10: 3,
      value11: 3,
      step1: 2,
      min1: 5,
      max1: 8,
      asyncChange: true,
      color: "#FFFFFF",
      buttonSize: 36,
      bgColor: "#2979ff"
    };
  },
  methods: {
    change(e) {
      console.log("change", e);
    },
    myAsyncChange(e) {
      this.asyncChange = false;
      common_vendor.index.showLoading({
        title: "正在加载"
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        this.value9 = e;
        this.asyncChange = true;
      }, 3e3);
    }
  }
};
if (!Array) {
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  (_easycom_u_number_box2 + _easycom_u_cell2 + _easycom_u_icon2 + _easycom_u_cell_group2)();
}
const _easycom_u_number_box = () => "../../../uni_modules/uview-plus/components/u-number-box/u-number-box.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_u_number_box + _easycom_u_cell + _easycom_u_icon + _easycom_u_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o(($event) => $data.value1 = $event),
    c: common_vendor.p({
      step: "1",
      modelValue: $data.value1
    }),
    d: common_vendor.p({
      border: true,
      title: "基础用法"
    }),
    e: common_vendor.o($options.change),
    f: common_vendor.o(($event) => $data.value2 = $event),
    g: common_vendor.p({
      step: $data.step1,
      modelValue: $data.value2
    }),
    h: common_vendor.p({
      border: true,
      title: "步长设置"
    }),
    i: common_vendor.o($options.change),
    j: common_vendor.o(($event) => $data.value3 = $event),
    k: common_vendor.p({
      step: "1",
      min: $data.min1,
      max: $data.max1,
      modelValue: $data.value3
    }),
    l: common_vendor.p({
      border: true,
      title: "限制输入范围"
    }),
    m: common_vendor.o($options.change),
    n: common_vendor.o(($event) => $data.value4 = $event),
    o: common_vendor.p({
      step: "1",
      integer: true,
      modelValue: $data.value4
    }),
    p: common_vendor.p({
      border: true,
      title: "限制输入整数"
    }),
    q: common_vendor.o($options.change),
    r: common_vendor.o(($event) => $data.value5 = $event),
    s: common_vendor.p({
      step: "1",
      disabled: true,
      modelValue: $data.value5
    }),
    t: common_vendor.p({
      border: true,
      title: "禁用状态"
    }),
    v: common_vendor.o($options.change),
    w: common_vendor.o(($event) => $data.value6 = $event),
    x: common_vendor.p({
      step: "1",
      disabledInput: true,
      modelValue: $data.value6
    }),
    y: common_vendor.p({
      border: true,
      title: "禁用输入框"
    }),
    z: common_vendor.o($options.change),
    A: common_vendor.o(($event) => $data.value7 = $event),
    B: common_vendor.p({
      step: "1",
      longPress: false,
      modelValue: $data.value7
    }),
    C: common_vendor.p({
      border: true,
      title: "禁用长按"
    }),
    D: common_vendor.o($options.change),
    E: common_vendor.o(($event) => $data.value8 = $event),
    F: common_vendor.p({
      step: "0.2",
      decimalLength: "1",
      modelValue: $data.value8
    }),
    G: common_vendor.p({
      border: true,
      title: "固定小数位数"
    }),
    H: common_vendor.o($options.myAsyncChange),
    I: common_vendor.o(($event) => $data.value9 = $event),
    J: common_vendor.p({
      step: "1",
      asyncChange: $data.asyncChange,
      modelValue: $data.value9
    }),
    K: common_vendor.p({
      border: true,
      title: "异步变更"
    }),
    L: common_vendor.o($options.change),
    M: common_vendor.o(($event) => $data.value10 = $event),
    N: common_vendor.p({
      step: "1",
      color: $data.color,
      buttonSize: $data.buttonSize,
      bgColor: $data.bgColor,
      iconStyle: "color: #fff",
      modelValue: $data.value10
    }),
    O: common_vendor.p({
      border: true,
      title: "自定义大小颜色样式"
    }),
    P: common_vendor.p({
      name: "minus",
      size: "12"
    }),
    Q: common_vendor.t($data.value11),
    R: common_vendor.p({
      name: "plus",
      color: "#FFFFFF",
      size: "12"
    }),
    S: common_vendor.o(($event) => $data.value11 = $event),
    T: common_vendor.p({
      step: "1",
      min: 0,
      showMinus: $data.value11 > 0,
      modelValue: $data.value11
    }),
    U: common_vendor.p({
      border: true,
      title: "自定义(为0时减少按钮会消失)"
    }),
    V: common_vendor.p({
      border: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/numberBox/numberBox.nvue"]]);
wx.createPage(MiniProgramPage);
