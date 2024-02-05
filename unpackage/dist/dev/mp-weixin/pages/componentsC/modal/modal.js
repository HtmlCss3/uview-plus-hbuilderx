"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      content: "模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作",
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      list: [
        {
          title: "基础使用",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/4.png"
        },
        {
          title: "无标题",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/5.png"
        },
        {
          title: "带取消按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/2.png"
        },
        {
          title: "异步关闭",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/6.png"
        },
        {
          title: "对调取消和确认按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/3.png"
        },
        {
          title: "允许点击遮罩关闭",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/7.png"
        },
        {
          title: "传入slot",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/1.png"
        },
        {
          title: "自定义按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/8.png"
        },
        {
          title: "淡入淡出动画",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/9.png"
        }
      ]
    };
  },
  methods: {
    showModal(index) {
      this[`show${index + 1}`] = true;
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    confirm4() {
      setTimeout(() => {
        this.show4 = false;
      }, 2e3);
    },
    confirm() {
      this.show3 = false;
      console.log("confirm");
    },
    cancel() {
      this.show3 = false;
      console.log("cancel");
    },
    close() {
      this.show3 = false;
      console.log("close");
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_modal2 = common_vendor.resolveComponent("u-modal");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_navbar2 + _easycom_u_gap2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_modal2 + _easycom_u_button2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_modal = () => "../../../uni_modules/uview-plus/components/u-modal/u-modal.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_gap + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_modal + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "模态框",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.p({
      height: "20",
      bgColor: "#fff"
    }),
    d: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.showModal(index), index),
        c: index,
        d: "307fa41f-3-" + i0 + ",307fa41f-2",
        e: common_vendor.p({
          title: item.title,
          isLink: true
        })
      };
    }),
    e: common_vendor.o(() => $data.show1 = false),
    f: common_vendor.p({
      content: $data.content,
      title: "标题",
      show: $data.show1
    }),
    g: common_vendor.o(() => $data.show2 = false),
    h: common_vendor.p({
      content: $data.content,
      show: $data.show2
    }),
    i: common_vendor.o($options.confirm),
    j: common_vendor.o($options.cancel),
    k: common_vendor.o($options.close),
    l: common_vendor.p({
      content: $data.content,
      show: $data.show3,
      showCancelButton: true,
      closeOnClickOverlay: true
    }),
    m: common_vendor.o($options.confirm4),
    n: common_vendor.o(() => $data.show4 = false),
    o: common_vendor.p({
      content: $data.content,
      show: $data.show4,
      showCancelButton: true,
      asyncClose: true
    }),
    p: common_vendor.o(() => $data.show5 = false),
    q: common_vendor.o(() => $data.show5 = false),
    r: common_vendor.p({
      content: $data.content,
      show: $data.show5,
      showCancelButton: true,
      buttonReverse: true
    }),
    s: common_vendor.o(() => $data.show6 = false),
    t: common_vendor.o(() => $data.show6 = false),
    v: common_vendor.p({
      content: $data.content,
      title: "标题",
      show: $data.show6,
      closeOnClickOverlay: true
    }),
    w: common_vendor.o(() => $data.show7 = false),
    x: common_vendor.p({
      title: "利剑出鞘,一统江湖",
      show: $data.show7,
      closeOnClickOverlay: true
    }),
    y: common_vendor.o(($event) => $data.show8 = false),
    z: common_vendor.p({
      text: "确定",
      type: "success",
      shape: "circle"
    }),
    A: common_vendor.p({
      title: "标题",
      show: $data.show8,
      content: $data.content,
      closeOnClickOverlay: true,
      showCancelButton: true
    }),
    B: common_vendor.o(() => $data.show9 = false),
    C: common_vendor.p({
      content: $data.content,
      title: "标题",
      show: $data.show9,
      zoom: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/modal/modal.nvue"]]);
wx.createPage(MiniProgramPage);
