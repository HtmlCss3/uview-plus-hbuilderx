"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tel: ""
    };
  },
  computed: {
    inputStyle() {
      let style = {};
      if (this.tel) {
        style.color = "#fff";
        style.backgroundColor = this.$u.color["warning"];
      }
      return style;
    }
  },
  methods: {
    submit() {
      if (this.$u.test.mobile(this.tel)) {
        this.$u.route({
          url: "pages/template/login/code"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.tel,
    b: common_vendor.o(($event) => $data.tel = $event.detail.value),
    c: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    d: common_vendor.s($options.inputStyle),
    e: common_vendor.p({
      size: "40",
      name: "weixin-fill",
      color: "rgb(83,194,64)"
    }),
    f: common_vendor.p({
      size: "40",
      name: "qq-fill",
      color: "rgb(17,183,233)"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-df771cba"], ["__file", "D:/project/mini-app/uview-plus/pages/template/login/index.vue"]]);
wx.createPage(MiniProgramPage);
