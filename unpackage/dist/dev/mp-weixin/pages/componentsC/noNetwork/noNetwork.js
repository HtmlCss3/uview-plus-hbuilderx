"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  methods: {
    disconnected() {
      console.log("disconnected");
    },
    connected() {
      console.log("connected");
    },
    retry() {
      console.log("retry");
    }
  }
};
if (!Array) {
  const _easycom_u_no_network2 = common_vendor.resolveComponent("u-no-network");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_u_no_network2 + _easycom_u_icon2)();
}
const _easycom_u_no_network = () => "../../../uni_modules/uview-plus/components/u-no-network/u-no-network.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_u_no_network + _easycom_u_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.disconnected),
    b: common_vendor.o($options.connected),
    c: common_vendor.o($options.retry),
    d: common_vendor.p({
      name: "checkbox-mark",
      color: "#fff",
      size: "30"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/noNetwork/noNetwork.nvue"]]);
wx.createPage(MiniProgramPage);
