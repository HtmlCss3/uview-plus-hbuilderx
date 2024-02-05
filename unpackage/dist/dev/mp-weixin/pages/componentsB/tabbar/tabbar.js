"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value1: 0,
      value2: 1,
      value3: "play-right",
      value4: 0,
      value5: 0,
      value6: 0,
      value7: 3
    };
  },
  onLoad() {
  },
  methods: {
    change5(name) {
      if (name === 1)
        return common_vendor.index.$u.toast("请您先登录");
      else
        this.value5 = name;
    },
    change1(e) {
      this.value1 = e;
      console.log("change1", e);
    },
    click1(e) {
      console.log("click1", e);
    }
  }
};
if (!Array) {
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  (_easycom_u_tabbar_item2 + _easycom_u_tabbar2 + _easycom_u_gap2)();
}
const _easycom_u_tabbar_item = () => "../../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
if (!Math) {
  (_easycom_u_tabbar_item + _easycom_u_tabbar + _easycom_u_gap)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.click1),
    b: common_vendor.p({
      text: "首页",
      icon: "home"
    }),
    c: common_vendor.o($options.click1),
    d: common_vendor.p({
      text: "放映厅",
      icon: "photo"
    }),
    e: common_vendor.o($options.click1),
    f: common_vendor.p({
      text: "直播",
      icon: "play-right"
    }),
    g: common_vendor.o($options.click1),
    h: common_vendor.p({
      text: "我的",
      icon: "account"
    }),
    i: common_vendor.o($options.change1),
    j: common_vendor.p({
      value: $data.value1,
      fixed: false,
      placeholder: false,
      safeAreaInsetBottom: false
    }),
    k: common_vendor.p({
      text: "首页",
      icon: "home",
      dot: true
    }),
    l: common_vendor.p({
      text: "放映厅",
      icon: "photo",
      badge: "3"
    }),
    m: common_vendor.p({
      text: "直播",
      icon: "play-right"
    }),
    n: common_vendor.p({
      text: "我的",
      icon: "account"
    }),
    o: common_vendor.o((name) => $data.value2 = name),
    p: common_vendor.p({
      value: $data.value2,
      placeholder: false,
      fixed: false,
      safeAreaInsetBottom: false
    }),
    q: common_vendor.p({
      text: "首页",
      icon: "home",
      name: "home"
    }),
    r: common_vendor.p({
      text: "放映厅",
      icon: "photo",
      name: "photo"
    }),
    s: common_vendor.p({
      text: "直播",
      icon: "play-right",
      name: "play-right"
    }),
    t: common_vendor.p({
      text: "我的",
      name: "account",
      icon: "account"
    }),
    v: common_vendor.o((name) => $data.value3 = name),
    w: common_vendor.p({
      placeholder: false,
      value: $data.value3,
      fixed: false,
      safeAreaInsetBottom: false
    }),
    x: common_vendor.p({
      text: "首页"
    }),
    y: common_vendor.p({
      text: "放映厅",
      icon: "photo"
    }),
    z: common_vendor.p({
      text: "直播",
      icon: "play-right"
    }),
    A: common_vendor.p({
      text: "我的",
      icon: "account"
    }),
    B: common_vendor.o((name) => $data.value4 = name),
    C: common_vendor.p({
      value: $data.value4,
      fixed: false,
      placeholder: false,
      activeColor: "#d81e06",
      safeAreaInsetBottom: false
    }),
    D: common_vendor.p({
      text: "首页",
      icon: "home"
    }),
    E: common_vendor.p({
      text: "放映厅",
      icon: "photo"
    }),
    F: common_vendor.p({
      text: "直播",
      icon: "play-right"
    }),
    G: common_vendor.p({
      text: "我的",
      icon: "account"
    }),
    H: common_vendor.o($options.change5),
    I: common_vendor.p({
      value: $data.value5,
      fixed: false,
      safeAreaInsetBottom: false,
      placeholder: false
    }),
    J: common_vendor.p({
      text: "首页",
      icon: "home"
    }),
    K: common_vendor.p({
      text: "放映厅",
      icon: "photo"
    }),
    L: common_vendor.p({
      text: "直播",
      icon: "play-right"
    }),
    M: common_vendor.p({
      text: "我的",
      icon: "account"
    }),
    N: common_vendor.o((name) => $data.value7 = name),
    O: common_vendor.p({
      value: $data.value7,
      placeholder: false,
      border: false,
      fixed: false,
      safeAreaInsetBottom: false
    }),
    P: common_vendor.p({
      height: "150"
    }),
    Q: common_vendor.p({
      text: "首页",
      icon: "home"
    }),
    R: common_vendor.p({
      text: "放映厅",
      icon: "photo"
    }),
    S: common_vendor.p({
      text: "直播",
      icon: "play-right"
    }),
    T: common_vendor.p({
      text: "我的",
      icon: "account"
    }),
    U: common_vendor.o((name) => $data.value6 = name),
    V: common_vendor.p({
      value: $data.value6,
      fixed: true,
      placeholder: true,
      safeAreaInsetBottom: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/tabbar/tabbar.nvue"]]);
wx.createPage(MiniProgramPage);
