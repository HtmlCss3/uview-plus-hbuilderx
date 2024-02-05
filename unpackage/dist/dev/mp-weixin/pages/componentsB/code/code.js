"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tips: "",
      // 此为错误定义，见下方说明
      // refCode: null,
      tips1: "",
      tips2: "",
      disabled1: false,
      disabled2: false,
      disabled3: false
    };
  },
  onReady() {
  },
  methods: {
    codeChange(text) {
      this.tips = text;
    },
    codeChange1(text) {
      this.tips1 = text;
    },
    codeChange2(text) {
      this.tips2 = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        common_vendor.index.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.$u.toast("验证码已发送");
          this.$refs.uCode.start();
        }, 2e3);
      } else {
        common_vendor.index.$u.toast("倒计时结束后再发送");
      }
    },
    getCode1() {
      if (this.$refs.uCode1.canGetCode) {
        common_vendor.index.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.$u.toast("验证码已发送");
          this.$refs.uCode1.start();
        }, 2e3);
      } else {
        common_vendor.index.$u.toast("倒计时结束后再发送");
      }
    },
    getCode2() {
      if (this.$refs.uCode2.canGetCode) {
        common_vendor.index.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.$u.toast("验证码已发送");
          this.$refs.uCode2.start();
        }, 2e3);
      } else {
        common_vendor.index.$u.toast("倒计时结束后再发送");
      }
    }
  }
};
if (!Array) {
  const _easycom_u_code2 = common_vendor.resolveComponent("u-code");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_code2 + _easycom_u_button2)();
}
const _easycom_u_code = () => "../../../uni_modules/uview-plus/components/u-code/u-code.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_code + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("uCode", "37b941bc-0"),
    b: common_vendor.o($options.codeChange),
    c: common_vendor.o(($event) => $data.disabled1 = true),
    d: common_vendor.o(($event) => $data.disabled1 = false),
    e: common_vendor.p({
      seconds: "20",
      ["change-text"]: "XS获取"
    }),
    f: common_vendor.o($options.getCode),
    g: common_vendor.p({
      text: $data.tips,
      type: "success",
      size: "small",
      disabled: $data.disabled1
    }),
    h: common_vendor.sr("uCode1", "37b941bc-2"),
    i: common_vendor.o($options.codeChange1),
    j: common_vendor.o(($event) => $data.disabled2 = true),
    k: common_vendor.o(($event) => $data.disabled2 = false),
    l: common_vendor.p({
      ["keep-running"]: true,
      ["change-text"]: "倒计时XS"
    }),
    m: common_vendor.o($options.getCode1),
    n: common_vendor.p({
      type: "primary",
      text: $data.tips1,
      size: "small",
      disabled: $data.disabled2
    }),
    o: common_vendor.sr("uCode2", "37b941bc-4"),
    p: common_vendor.o($options.codeChange2),
    q: common_vendor.p({
      ["keep-running"]: true,
      ["start-text"]: "点我获取验证码"
    }),
    r: common_vendor.t($data.tips2),
    s: common_vendor.o((...args) => $options.getCode2 && $options.getCode2(...args)),
    t: $data.tips2
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/code/code.nvue"]]);
wx.createPage(MiniProgramPage);
