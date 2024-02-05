"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 1,
      list: ["未付款", "待评价", "已付款"],
      // 或者如下，也可以配置keyName参数修改对象键值
      // list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
      current: 1
    };
  },
  methods: {
    change1(index) {
      this.current1 = index;
    },
    change2(index) {
      this.current2 = index;
    },
    change3(index) {
      this.current3 = index;
    },
    change4(index) {
      this.current4 = index;
    }
  }
};
if (!Array) {
  const _easycom_u_subsection2 = common_vendor.resolveComponent("u-subsection");
  _easycom_u_subsection2();
}
const _easycom_u_subsection = () => "../../../uni_modules/uview-plus/components/u-subsection/u-subsection.js";
if (!Math) {
  _easycom_u_subsection();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change1),
    b: common_vendor.p({
      list: $data.list,
      mode: "subsection",
      current: $data.current1
    }),
    c: common_vendor.o($options.change2),
    d: common_vendor.p({
      list: $data.list,
      mode: "button",
      current: $data.current2
    }),
    e: common_vendor.o($options.change3),
    f: common_vendor.p({
      list: $data.list,
      mode: "subsection",
      current: $data.current3,
      activeColor: "#f56c6c"
    }),
    g: common_vendor.o($options.change4),
    h: common_vendor.p({
      list: $data.list,
      mode: "button",
      current: $data.current4,
      activeColor: "#f9ae3d"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/subsection/subsection.nvue"]]);
wx.createPage(MiniProgramPage);
