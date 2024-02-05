"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    const d = /* @__PURE__ */ new Date();
    d.getFullYear();
    common_vendor.index.$u.padZero(d.getMonth() + 1);
    d.getDate();
    return {
      current: 0,
      value1: Number(/* @__PURE__ */ new Date()),
      value2: Number(/* @__PURE__ */ new Date()),
      value3: Number(/* @__PURE__ */ new Date()),
      value4: "05:28",
      value5: Number(/* @__PURE__ */ new Date()),
      value6: Number(/* @__PURE__ */ new Date()),
      value7: Number(/* @__PURE__ */ new Date()),
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      list: [
        {
          title: "完整日期时间",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/6.png"
        },
        {
          title: "年月日",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/4.png"
        },
        {
          title: "年月",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/3.png"
        },
        {
          title: "时间",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/5.png"
        },
        {
          title: "过滤器(保留偶数年)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/2.png"
        },
        {
          title: "格式化",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/1.png"
        },
        {
          title: "限制最大最小值",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/7.png"
        }
      ]
    };
  },
  methods: {
    close() {
      this[`show${this.current}`] = false;
    },
    cancel() {
      this[`show${this.current}`] = false;
    },
    confirm(e) {
      this[`show${this.current}`] = false;
      this.result(e.value, e.mode);
    },
    change(e) {
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    filter(mode, options) {
      if (mode === "year") {
        return options.filter((option) => option % 2 === 0);
      }
      return options;
    },
    showDatetimePicker(index) {
      this.current = index + 1;
      this[`show${index + 1}`] = true;
    },
    result(time, mode) {
      const timeFormat = common_vendor.index.$u.timeFormat, toast = common_vendor.index.$u.toast;
      switch (mode) {
        case "datetime":
          return toast(timeFormat(time, "yyyy-mm-dd hh:MM"));
        case "date":
          return toast(timeFormat(time, "yyyy-mm-dd"));
        case "year-month":
          return toast(timeFormat(time, "yyyy-mm"));
        case "time":
          return toast(time);
        default:
          return "";
      }
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      if (type === "month") {
        return `${value}月`;
      }
      if (type === "day") {
        return `${value}日`;
      }
      return value;
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_datetime_picker2 = common_vendor.resolveComponent("u-datetime-picker");
  (_easycom_u_navbar2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_datetime_picker2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_datetime_picker = () => "../../../uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "datetimePicker 时间日期选择器",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.showDatetimePicker(index), index),
        c: index,
        d: "f49f40ca-2-" + i0 + ",f49f40ca-1",
        e: common_vendor.p({
          title: item.title,
          isLink: true
        })
      };
    }),
    d: common_vendor.o($options.confirm),
    e: common_vendor.o($options.cancel),
    f: common_vendor.o($options.change),
    g: common_vendor.o($options.close),
    h: common_vendor.o(($event) => $data.value1 = $event),
    i: common_vendor.p({
      show: $data.show1,
      mode: "datetime",
      closeOnClickOverlay: true,
      modelValue: $data.value1
    }),
    j: common_vendor.o($options.confirm),
    k: common_vendor.o($options.cancel),
    l: common_vendor.o($options.change),
    m: common_vendor.o($options.close),
    n: common_vendor.o(($event) => $data.value2 = $event),
    o: common_vendor.p({
      show: $data.show2,
      mode: "date",
      closeOnClickOverlay: true,
      modelValue: $data.value2
    }),
    p: common_vendor.o($options.confirm),
    q: common_vendor.o($options.cancel),
    r: common_vendor.o($options.change),
    s: common_vendor.o($options.close),
    t: common_vendor.o(($event) => $data.value3 = $event),
    v: common_vendor.p({
      show: $data.show3,
      mode: "year-month",
      closeOnClickOverlay: true,
      modelValue: $data.value3
    }),
    w: common_vendor.o($options.confirm),
    x: common_vendor.o($options.cancel),
    y: common_vendor.o($options.change),
    z: common_vendor.o($options.close),
    A: common_vendor.o(($event) => $data.value4 = $event),
    B: common_vendor.p({
      show: $data.show4,
      mode: "time",
      closeOnClickOverlay: true,
      modelValue: $data.value4
    }),
    C: common_vendor.o($options.confirm),
    D: common_vendor.o($options.cancel),
    E: common_vendor.o($options.change),
    F: common_vendor.o($options.close),
    G: common_vendor.o(($event) => $data.value5 = $event),
    H: common_vendor.p({
      show: $data.show5,
      filter: $options.filter,
      mode: "date",
      closeOnClickOverlay: true,
      modelValue: $data.value5
    }),
    I: common_vendor.o($options.confirm),
    J: common_vendor.o($options.cancel),
    K: common_vendor.o($options.change),
    L: common_vendor.o($options.close),
    M: common_vendor.o(($event) => $data.value6 = $event),
    N: common_vendor.p({
      show: $data.show6,
      mode: "date",
      formatter: $options.formatter,
      closeOnClickOverlay: true,
      modelValue: $data.value6
    }),
    O: common_vendor.o($options.confirm),
    P: common_vendor.o($options.cancel),
    Q: common_vendor.o($options.change),
    R: common_vendor.o($options.close),
    S: common_vendor.o(($event) => $data.value7 = $event),
    T: common_vendor.p({
      show: $data.show7,
      mode: "datetime",
      minDate: 15875248e5,
      maxDate: 1786778555e3,
      closeOnClickOverlay: true,
      modelValue: $data.value7
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/datetimePicker/datetimePicker.nvue"]]);
wx.createPage(MiniProgramPage);
