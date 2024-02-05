"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: ["自定义图标"],
      backTopData: {
        mode: "circle",
        icon: "arrow-upward",
        bottom: 100,
        customStyle: {},
        iconStyle: {},
        right: 20,
        duration: 300
      },
      scrollTop: 0,
      // 被自定义的样式
      checkboxList: [
        {
          name: "显示方形"
        },
        {
          name: "自定义图标"
        },
        {
          name: "自定义距离"
        },
        {
          name: "自定义样式"
        },
        {
          name: "自定义返回顶部滚动时间"
        }
      ]
    };
  },
  onLoad() {
    this.backTopData.icon = "arrow-up";
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  methods: {
    checkboxChange(n) {
      if (n.includes("显示方形")) {
        this.backTopData.mode = "square";
      } else {
        this.backTopData.mode = "circle";
      }
      if (n.includes("自定义图标")) {
        this.backTopData.icon = "arrow-up";
      } else {
        this.backTopData.icon = "arrow-upward";
      }
      if (n.includes("自定义距离")) {
        this.backTopData.bottom = 300;
        this.backTopData.right = 20;
      } else {
        this.backTopData.bottom = 100;
      }
      if (n.includes("自定义样式")) {
        this.backTopData.customStyle = {
          backgroundColor: "#2979ff"
        };
        this.backTopData.iconStyle = {
          color: "#ffffff"
        };
      } else {
        this.backTopData.customStyle = {};
        this.backTopData.iconStyle = {};
      }
      if (n.includes("自定义返回顶部滚动时间")) {
        this.backTopData.duration = 1500;
      } else {
        this.backTopData.duration = 300;
      }
    },
    click() {
      console.log("click");
    }
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_u_back_top2 = common_vendor.resolveComponent("u-back-top");
  (_easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_u_back_top2)();
}
const _easycom_u_checkbox = () => "../../../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u_back_top = () => "../../../uni_modules/uview-plus/components/u-back-top/u-back-top.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_checkbox_group + _easycom_u_back_top)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.checkboxList, (item, index, i0) => {
      return {
        a: index,
        b: "2bb99ddf-1-" + i0 + ",2bb99ddf-0",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    b: common_vendor.o($options.checkboxChange),
    c: common_vendor.o(($event) => $data.value = $event),
    d: common_vendor.p({
      placement: "column",
      shape: "square",
      modelValue: $data.value
    }),
    e: common_vendor.o($options.click),
    f: common_vendor.p({
      right: $data.backTopData.right,
      customStyle: $data.backTopData.customStyle,
      bottom: $data.backTopData.bottom,
      icon: $data.backTopData.icon,
      mode: $data.backTopData.mode,
      iconStyle: $data.backTopData.iconStyle,
      duration: $data.backTopData.duration,
      scrollTop: $data.scrollTop
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/backtop/backtop.nvue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
