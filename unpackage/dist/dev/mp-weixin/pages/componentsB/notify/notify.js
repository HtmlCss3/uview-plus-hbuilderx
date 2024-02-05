"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      notifyData: {
        message: "notify顶部提示",
        type: "primary",
        color: "#ffffff",
        bgColor: "",
        fontSize: 15,
        duration: 3e3
      },
      list: [
        {
          notifyData: {
            message: "notify顶部提示",
            type: "primary",
            color: "#ffffff",
            bgColor: "",
            fontSize: 15,
            duration: 3e3
          },
          title: "主要通知",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/main.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            type: "success",
            color: "#ffffff",
            bgColor: "",
            fontSize: 15,
            duration: 3e3,
            safeAreaInsetTop: false
          },
          title: "成功通知",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/success.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            type: "error",
            color: "#ffffff",
            bgColor: "",
            fontSize: 14,
            duration: 3e3,
            safeAreaInsetTop: false
          },
          title: "危险通知",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/error.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            type: "warning",
            color: "#ffffff",
            bgColor: "",
            fontSize: 15,
            duration: 3e3,
            safeAreaInsetTop: false
          },
          title: "警告通知",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/warning.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            color: "#fff",
            bgColor: "#000",
            fontSize: 15,
            duration: 3e3,
            safeAreaInsetTop: false
          },
          title: "自定义样式",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/customStyle.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            type: "primary",
            color: "#ffffff",
            bgColor: "",
            fontSize: 15,
            duration: 6e3,
            safeAreaInsetTop: false
          },
          title: "自定义时间",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/customTime.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            color: "#fff",
            bgColor: "",
            fontSize: 15,
            duration: 3e3,
            safeAreaInsetTop: true
          },
          title: "插入状态栏高度",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/height.png"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    openNotify(params) {
      this.$refs.uNotify.show({
        ...params
      });
    }
  }
};
if (!Array) {
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_notify2 = common_vendor.resolveComponent("u-notify");
  (_easycom_u_gap2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_notify2)();
}
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_notify = () => "../../../uni_modules/uview-plus/components/u-notify/u-notify.js";
if (!Math) {
  (_easycom_u_gap + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_notify)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "30",
      bgColor: "#fff"
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.openNotify(item.notifyData), index),
        c: index,
        d: "1ad7d188-2-" + i0 + ",1ad7d188-1",
        e: common_vendor.p({
          titleStyle: {
            fontWeight: 500
          },
          title: item.title,
          isLink: true
        })
      };
    }),
    c: common_vendor.sr("uNotify", "1ad7d188-3")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/notify/notify.nvue"]]);
wx.createPage(MiniProgramPage);
