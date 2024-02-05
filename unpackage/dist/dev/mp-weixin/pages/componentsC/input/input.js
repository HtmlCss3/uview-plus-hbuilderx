"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tips: "",
      value: ""
    };
  },
  watch: {
    value(newValue, oldValue) {
    }
  },
  methods: {
    codeChange(text) {
      this.tips = text;
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
    change(e) {
      console.log("change", e);
    }
  }
};
if (!Array) {
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u__text2 = common_vendor.resolveComponent("u--text");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_code2 = common_vendor.resolveComponent("u-code");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  (_easycom_up_input2 + _easycom_u__input2 + _easycom_u__text2 + _easycom_u_input2 + _easycom_u_code2 + _easycom_u_button2 + _easycom_u_gap2)();
}
const _easycom_up_input = () => "../../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u__input = () => "../../../uni_modules/uview-plus/components/u--input/u--input.js";
const _easycom_u__text = () => "../../../uni_modules/uview-plus/components/u--text/u--text.js";
const _easycom_u_input = () => "../../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_code = () => "../../../uni_modules/uview-plus/components/u-code/u-code.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
if (!Math) {
  (_easycom_up_input + _easycom_u__input + _easycom_u__text + _easycom_u_input + _easycom_u_code + _easycom_u_button + _easycom_u_gap)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      placeholder: "请输入内容",
      border: "surround",
      modelValue: $data.value
    }),
    d: common_vendor.t($data.value),
    e: common_vendor.p({
      placeholder: "请输入内容",
      border: "surround",
      clearable: true
    }),
    f: common_vendor.p({
      placeholder: "请输入内容",
      border: "surround",
      type: "number",
      clearable: true
    }),
    g: common_vendor.p({
      placeholder: "请输入内容",
      border: "surround",
      password: true,
      clearable: true
    }),
    h: common_vendor.p({
      placeholder: "请输入内容",
      border: "bottom",
      clearable: true
    }),
    i: common_vendor.p({
      placeholder: "禁用状态",
      border: "surround",
      disabled: true
    }),
    j: common_vendor.p({
      placeholder: "请输入内容",
      border: "surround",
      shape: "circle"
    }),
    k: common_vendor.p({
      placeholder: "前置图标",
      prefixIcon: "search",
      prefixIconStyle: "font-size: 22px;color: #909399"
    }),
    l: common_vendor.p({
      placeholder: "后置图标",
      suffixIcon: "map-fill",
      suffixIconStyle: "color: #909399"
    }),
    m: common_vendor.p({
      text: "http://",
      margin: "0 3px 0 0",
      type: "tips"
    }),
    n: common_vendor.p({
      placeholder: "前置插槽"
    }),
    o: common_vendor.sr("uCode", "6f532fe5-12,6f532fe5-11"),
    p: common_vendor.o($options.codeChange),
    q: common_vendor.p({
      seconds: "20",
      changeText: "X秒重新获取哈哈哈"
    }),
    r: common_vendor.o($options.getCode),
    s: common_vendor.p({
      text: $data.tips,
      type: "success",
      size: "mini"
    }),
    t: common_vendor.p({
      placeholder: "后置插槽"
    }),
    v: common_vendor.p({
      bgColor: "#fff",
      height: "50"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/input/input.nvue"]]);
wx.createPage(MiniProgramPage);
