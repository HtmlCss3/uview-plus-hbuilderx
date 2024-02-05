"use strict";
const common_vendor = require("../../../common/vendor.js");
const citySelect = () => "./u-city-select.js";
const _sfc_main = {
  components: {
    citySelect
  },
  data() {
    return {
      height: 30,
      bgColor: this.$u.color.bgColor,
      marginTop: 30,
      marginBottom: 30,
      value: false,
      input: ""
    };
  },
  methods: {
    cityChange(e) {
      this.input = e.province.label + "-" + e.city.label + "-" + e.area.label;
    }
  }
};
if (!Array) {
  const _component_city_select = common_vendor.resolveComponent("city-select");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_component_city_select + _easycom_u_button2)();
}
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.cityChange),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      modelValue: $data.value
    }),
    d: common_vendor.t($data.input ? $data.input : "Picker值"),
    e: common_vendor.o(($event) => $data.value = true)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-98f180c5"], ["__file", "D:/project/mini-app/uview-plus/pages/template/citySelect/index.vue"]]);
wx.createPage(MiniProgramPage);
