"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      list: [
        {
          type: "default",
          title: "默认主题",
          message: "锦瑟无端五十弦",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/default.png"
        },
        {
          type: "error",
          icon: false,
          title: "失败主题",
          message: "一弦一柱思华年",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/error.png"
        },
        {
          type: "success",
          title: "成功主题(带图标)",
          message: "庄生晓梦迷蝴蝶",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/success.png"
        },
        {
          type: "warning",
          position: "top",
          title: "位置偏移上方",
          message: "望帝春心托杜鹃",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/top.png"
        },
        {
          type: "loading",
          title: "正在加载",
          message: "正在加载",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/loading.png"
        },
        {
          type: "default",
          title: "结束后跳转标签页",
          message: "此情可待成追忆",
          url: "/pages/componentsB/tag/tag",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/jump.png"
        }
      ]
    };
  },
  computed: {
    getIcon() {
      return (path) => {
        return "https://cdn.uviewui.com/uview/example/" + path + ".png";
      };
    }
  },
  methods: {
    showToast(params) {
      this.$refs.uToast.show({
        ...params,
        complete() {
          params.url && common_vendor.index.navigateTo({
            url: params.url
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_toast2 = common_vendor.resolveComponent("u-toast");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  (_easycom_u_gap2 + _easycom_u_toast2 + _easycom_u_cell2 + _easycom_u_cell_group2)();
}
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_toast = () => "../../../uni_modules/uview-plus/components/u-toast/u-toast.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_u_gap + _easycom_u_toast + _easycom_u_cell + _easycom_u_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "30",
      bgColor: "#fff"
    }),
    b: common_vendor.sr("uToast", "304a970c-1"),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.showToast(item), index),
        c: "304a970c-3-" + i0 + ",304a970c-2",
        d: common_vendor.p({
          titleStyle: {
            fontWeight: 500
          },
          title: item.title,
          isLink: true,
          icon: item.iconUrl
        })
      };
    }),
    d: common_vendor.p({
      ["title-bg-color"]: "rgb(243, 244, 246)"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/toast/toast.nvue"]]);
wx.createPage(MiniProgramPage);
