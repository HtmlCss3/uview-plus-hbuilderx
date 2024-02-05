"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      mode: "",
      show: false,
      style: {
        position: "fixed",
        top: `${common_vendor.index.$u.sys().windowHeight / 2 - 50}px`,
        left: `${common_vendor.index.$u.sys().windowWidth / 2 - 50}px`,
        width: "120px",
        height: "120px",
        backgroundColor: "#1989fa"
      },
      list: [
        {
          mode: "fade",
          title: "淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fade.png"
        },
        {
          mode: "fade-up",
          title: "上滑淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeUp.png"
        },
        {
          mode: "zoom",
          title: "缩放",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/zoom.png"
        },
        {
          mode: "fade-zoom",
          title: "缩放淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeZoom.png"
        },
        {
          mode: "fade-down",
          title: "下滑淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeDown.png"
        },
        {
          mode: "fade-left",
          title: "左滑淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeLeft.png"
        },
        {
          mode: "fade-right",
          title: "右滑淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeRight.png"
        },
        {
          mode: "slide-up",
          title: "上滑进入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/slideUp.png"
        },
        {
          mode: "slide-down",
          title: "下滑进入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/slideDown.png"
        },
        {
          mode: "slide-left",
          title: "左滑进入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/slideLeft.png"
        },
        {
          mode: "slide-right",
          title: "右滑进入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/slideRight.png"
        }
      ]
    };
  },
  mixins: [common_vendor.index.$u.mixin],
  methods: {
    openTransition(mode) {
      this.mode = mode;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 1500);
    },
    click() {
    },
    beforeEnter() {
    },
    enter() {
    },
    afterEnter() {
    },
    beforeLeave() {
    },
    leave() {
    },
    afterLeave() {
    }
  }
};
if (!Array) {
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  (_easycom_u_gap2 + _easycom_u_cell2 + _easycom_u_transition2 + _easycom_u_cell_group2)();
}
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_transition = () => "../../../uni_modules/uview-plus/components/u-transition/u-transition.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_u_gap + _easycom_u_cell + _easycom_u_transition + _easycom_u_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "20",
      bgColor: "#fff"
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.openTransition(item.mode), index),
        c: index,
        d: "2d568546-2-" + i0 + ",2d568546-1",
        e: common_vendor.p({
          titleStyle: {
            fontWeight: 500
          },
          title: item.title,
          clickable: true
        })
      };
    }),
    c: common_vendor.o($options.click),
    d: common_vendor.o($options.beforeEnter),
    e: common_vendor.o($options.enter),
    f: common_vendor.o($options.afterEnter),
    g: common_vendor.o($options.beforeLeave),
    h: common_vendor.o($options.leave),
    i: common_vendor.o($options.afterLeave),
    j: common_vendor.p({
      mode: $data.mode,
      show: $data.show,
      ["custom-style"]: $data.style
    }),
    k: common_vendor.p({
      border: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/transition/transition.nvue"]]);
wx.createPage(MiniProgramPage);
