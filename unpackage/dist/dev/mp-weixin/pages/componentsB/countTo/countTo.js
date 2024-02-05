"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: 3e3,
      startVal1: 300,
      startVal2: 100,
      endVal: 10.55,
      decimals: 2,
      startVal3: 2e3,
      endVal2: 1542,
      endVal3: 3e3,
      autoplay: false,
      color: "#FF0000",
      fontSize: 40
    };
  },
  onLoad() {
  },
  methods: {
    start() {
      this.$refs.uCountTo.start();
    },
    paused() {
      this.$refs.uCountTo.stop();
    },
    resume() {
      this.$refs.uCountTo.resume();
    },
    end() {
      console.log("end");
    }
  }
};
if (!Array) {
  const _easycom_u_count_to2 = common_vendor.resolveComponent("u-count-to");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_count_to2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_count_to = () => "../../../uni_modules/uview-plus/components/u-count-to/u-count-to.js";
const _easycom_u_grid_item = () => "../../../uni_modules/uview-plus/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../../uni_modules/uview-plus/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_u_count_to + _easycom_u_grid_item + _easycom_u_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.end),
    b: common_vendor.p({
      endVal: $data.value
    }),
    c: common_vendor.p({
      startVal: $data.startVal1
    }),
    d: common_vendor.p({
      startVal: $data.startVal2,
      endVal: $data.endVal,
      decimals: $data.decimals
    }),
    e: common_vendor.p({
      startVal: $data.startVal3,
      endVal: $data.endVal2,
      separator: ",",
      decimals: $data.decimals
    }),
    f: common_vendor.sr("uCountTo", "7cc4c474-4"),
    g: common_vendor.p({
      endVal: $data.endVal3,
      autoplay: $data.autoplay
    }),
    h: common_vendor.o($options.start),
    i: common_vendor.o($options.paused),
    j: common_vendor.o($options.resume),
    k: common_vendor.p({
      border: true,
      align: "center",
      customStyle: "margin-top: 20px;margin-bottom: 20"
    }),
    l: common_vendor.p({
      endVal: $data.value,
      color: "#909399",
      fontSize: $data.fontSize,
      bold: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/countTo/countTo.nvue"]]);
wx.createPage(MiniProgramPage);
