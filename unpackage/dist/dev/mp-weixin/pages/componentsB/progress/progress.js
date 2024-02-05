"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      androidNvue: false,
      percentage1: 30,
      percentage2: 40,
      percentage3: 50,
      percentage4: 60,
      percentage5: 70,
      percentage6: 50
    };
  },
  onLoad() {
    common_vendor.index.$u.sleep(2500).then(() => {
      this.percentage1 = 120;
    });
  },
  methods: {
    computedWidth(type) {
      if (type === "plus") {
        this.percentage6 = common_vendor.index.$u.range(0, 100, this.percentage6 + 10);
      } else {
        this.percentage6 = common_vendor.index.$u.range(0, 100, this.percentage6 - 10);
      }
    }
  }
};
if (!Array) {
  const _easycom_u_line_progress2 = common_vendor.resolveComponent("u-line-progress");
  _easycom_u_line_progress2();
}
const _easycom_u_line_progress = () => "../../../uni_modules/uview-plus/components/u-line-progress/u-line-progress.js";
if (!Math) {
  _easycom_u_line_progress();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      percentage: $data.percentage1
    }),
    b: common_vendor.p({
      showText: false,
      percentage: $data.percentage2
    }),
    c: common_vendor.p({
      height: "8",
      showText: false,
      percentage: $data.percentage3
    }),
    d: common_vendor.p({
      height: "8",
      showText: false,
      percentage: $data.percentage4,
      activeColor: "#3c9cff",
      inactiveColor: "#f3f4f6"
    }),
    e: !$data.androidNvue
  }, !$data.androidNvue ? {
    f: common_vendor.t($data.percentage4),
    g: common_vendor.p({
      height: "8",
      showText: false,
      percentage: $data.percentage5,
      activeColor: "#3c9cff",
      inactiveColor: "#f3f4f6"
    })
  } : {}, {
    h: common_vendor.p({
      height: "8",
      showText: false,
      percentage: $data.percentage6,
      activeColor: "#3c9cff",
      inactiveColor: "#f3f4f6"
    }),
    i: common_vendor.o(($event) => $options.computedWidth("minus")),
    j: common_vendor.o(($event) => $options.computedWidth("plus"))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/progress/progress.nvue"]]);
wx.createPage(MiniProgramPage);
