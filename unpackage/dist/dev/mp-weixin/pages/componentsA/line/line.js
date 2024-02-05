"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  _easycom_u_line2();
}
const _easycom_u_line = () => "../../../uni_modules/uview-plus/components/u-line/u-line.js";
if (!Math) {
  _easycom_u_line();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      color: "#2979ff"
    }),
    b: common_vendor.p({
      length: "200"
    }),
    c: common_vendor.p({
      length: "30",
      color: "#2979ff",
      direction: "col"
    }),
    d: common_vendor.p({
      hairline: false
    }),
    e: common_vendor.p({
      margin: "20"
    }),
    f: common_vendor.p({
      color: "#2979ff",
      dashed: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/line/line.nvue"]]);
wx.createPage(MiniProgramPage);
