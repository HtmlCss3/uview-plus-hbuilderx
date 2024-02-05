"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      maxlength: 4,
      value: "",
      second: 3,
      show: false,
      error: false
    };
  },
  computed: {},
  onLoad() {
    let interval = setInterval(() => {
      this.second--;
      if (this.second <= 0) {
        this.show = true;
        if (this.value.lenth != 4) {
          this.error = true;
        }
        clearInterval(interval);
      }
    }, 1e3);
  },
  methods: {
    // 收不到验证码选择时的选择
    noCaptcha() {
      common_vendor.index.showActionSheet({
        itemList: ["重新获取验证码", "接听语音验证码"],
        success: function(res) {
        },
        fail: function(res) {
        }
      });
    },
    // change事件侦听
    change(value) {
    },
    // 输入完验证码最后一位执行
    finish(value) {
    }
  }
};
if (!Array) {
  const _easycom_u_message_input2 = common_vendor.resolveComponent("u-message-input");
  _easycom_u_message_input2();
}
const _easycom_u_message_input = () => "../../../uni_modules/uview-plus/components/u-message-input/u-message-input.js";
if (!Math) {
  _easycom_u_message_input();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o($options.finish),
    c: common_vendor.p({
      focus: true,
      value: $data.value,
      mode: "bottomLine",
      maxlength: $data.maxlength
    }),
    d: $data.error ? 1 : "",
    e: $data.show ? 1 : "",
    f: common_vendor.o((...args) => $options.noCaptcha && $options.noCaptcha(...args)),
    g: common_vendor.t($data.second),
    h: !$data.show ? 1 : ""
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-42365165"], ["__file", "D:/project/mini-app/uview-plus/pages/template/login/code.vue"]]);
wx.createPage(MiniProgramPage);
