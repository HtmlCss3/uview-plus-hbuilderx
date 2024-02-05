"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      timeData: {}
    };
  },
  onLoad() {
  },
  methods: {
    //开始
    start() {
      this.$refs.countDown.start();
    },
    // 暂停
    pause() {
      this.$refs.countDown.pause();
    },
    // 重置
    reset() {
      this.$refs.countDown.reset();
    },
    onChange(e) {
      this.timeData = e;
    },
    finish() {
      console.log("finish");
    }
  }
};
if (!Array) {
  const _easycom_u_count_down2 = common_vendor.resolveComponent("u-count-down");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_count_down2 + _easycom_u_icon2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_count_down = () => "../../../uni_modules/uview-plus/components/u-count-down/u-count-down.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_grid_item = () => "../../../uni_modules/uview-plus/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../../uni_modules/uview-plus/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_u_count_down + _easycom_u_icon + _easycom_u_grid_item + _easycom_u_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.finish),
    b: common_vendor.p({
      time: 30 * 60 * 60 * 1e3,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: true
    }),
    c: common_vendor.t($data.timeData.days),
    d: common_vendor.t($data.timeData.hours > 10 ? $data.timeData.hours : "0" + $data.timeData.hours),
    e: common_vendor.t($data.timeData.minutes),
    f: common_vendor.t($data.timeData.seconds),
    g: common_vendor.o($options.onChange),
    h: common_vendor.p({
      time: 30 * 60 * 60 * 1e3,
      format: "DD:HH:mm:ss",
      autoStart: true,
      millisecond: true
    }),
    i: common_vendor.p({
      time: 30 * 60 * 60 * 1e3,
      format: "HH:mm:ss:SSS",
      autoStart: true,
      millisecond: true
    }),
    j: common_vendor.t($data.timeData.hours > 10 ? $data.timeData.hours : "0" + $data.timeData.hours),
    k: common_vendor.t($data.timeData.minutes),
    l: common_vendor.t($data.timeData.seconds),
    m: common_vendor.o($options.onChange),
    n: common_vendor.p({
      time: 30 * 60 * 60 * 1e3,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: true
    }),
    o: common_vendor.sr("countDown", "a1bd9290-4"),
    p: common_vendor.p({
      time: 3 * 1e3,
      format: "ss:SSS",
      autoStart: false,
      millisecond: true
    }),
    q: common_vendor.p({
      name: "reload",
      size: 22
    }),
    r: common_vendor.o($options.reset),
    s: common_vendor.p({
      color: "#fff",
      name: "play-right-fill",
      size: 22
    }),
    t: common_vendor.o($options.start),
    v: common_vendor.p({
      name: "pause-circle",
      size: 22
    }),
    w: common_vendor.o($options.pause),
    x: common_vendor.p({
      border: true,
      customStyle: {
        marginTop: "10px"
      }
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/countDown/countDown.nvue"]]);
wx.createPage(MiniProgramPage);
