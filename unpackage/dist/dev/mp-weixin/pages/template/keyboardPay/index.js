"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      password: ""
    };
  },
  onLoad() {
  },
  methods: {
    onChange(val) {
      if (this.password.length < 6) {
        this.password += val;
      }
      if (this.password.length >= 6) {
        this.pay();
      }
    },
    onBackspace(e) {
      if (this.password.length > 0) {
        this.password = this.password.substring(0, this.password.length - 1);
      }
    },
    pay() {
      common_vendor.index.showLoading({
        title: "支付中"
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        this.show = false;
        common_vendor.index.showToast({
          icon: "success",
          title: "支付成功"
        });
      }, 2e3);
    },
    showPop(flag = true) {
      this.password = "";
      this.show = flag;
    },
    finish() {
      console.log(11111);
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_message_input2 = common_vendor.resolveComponent("u-message-input");
  const _easycom_u_keyboard2 = common_vendor.resolveComponent("u-keyboard");
  (_easycom_u_icon2 + _easycom_u_button2 + _easycom_u_message_input2 + _easycom_u_keyboard2)();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_message_input = () => "../../../uni_modules/uview-plus/components/u-message-input/u-message-input.js";
const _easycom_u_keyboard = () => "../../../uni_modules/uview-plus/components/u-keyboard/u-keyboard.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_button + _easycom_u_message_input + _easycom_u_keyboard)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "red-packet"
    }),
    b: common_vendor.o(($event) => $options.showPop(true)),
    c: common_vendor.p({
      type: "success"
    }),
    d: common_vendor.p({
      name: "close",
      color: "#333333",
      size: "28"
    }),
    e: common_vendor.o(($event) => $options.showPop(false)),
    f: common_vendor.o($options.finish),
    g: common_vendor.o(($event) => $data.password = $event),
    h: common_vendor.p({
      mode: "box",
      maxlength: 6,
      ["dot-fill"]: true,
      ["disabled-keyboard"]: true,
      modelValue: $data.password
    }),
    i: common_vendor.sr("uKeyboard", "76cf6d69-2"),
    j: common_vendor.o($options.onChange),
    k: common_vendor.o($options.onBackspace),
    l: common_vendor.p({
      default: "",
      mode: "number",
      mask: true,
      ["mask-close-able"]: false,
      ["dot-enabled"]: false,
      show: $data.show,
      ["safe-area-inset-bottom"]: true,
      tooltip: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/template/keyboardPay/index.vue"]]);
wx.createPage(MiniProgramPage);
