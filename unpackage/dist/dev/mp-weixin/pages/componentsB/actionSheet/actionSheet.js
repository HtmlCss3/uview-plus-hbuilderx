"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      actions0: [
        {
          name: "选项1"
        },
        {
          name: "选项2"
        },
        {
          name: "选项3",
          subname: "描述文本"
        }
      ],
      actions1: [
        {
          name: "选项1"
        },
        {
          loading: true
        },
        {
          name: "选项被禁用",
          disabled: true
        }
      ],
      actions2: [
        {
          name: "选项1"
        },
        {
          name: "选项2"
        },
        {
          name: "选项3"
        }
      ],
      actions3: [
        {
          name: "选项1"
        },
        {
          name: "选项2"
        },
        {
          name: "选项3"
        }
      ],
      actions5: [{
        name: "获取用户信息",
        openType: "getUserInfo",
        color: common_vendor.index.$u.color["success"]
      }],
      list: [
        {
          title: "普通使用",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/custom.png"
        },
        {
          title: "设置状态",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/status.png"
        },
        {
          title: "显示取消按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/cancel.png"
        },
        {
          title: "描述内容",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/desc.png"
        },
        {
          title: "显示标题(显示圆角)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/title.png"
        },
        {
          title: "微信开放能力",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/open.png"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    // 点击cell，判断显示哪个功能
    openSheet(index) {
      this[`show${index}`] = true;
    },
    getuserinfo(res) {
      common_vendor.index.$u.toast(`用户名：${res.userInfo.nickName}`);
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    close() {
      console.log("close");
      this["show0"] = false;
    },
    select(e) {
      console.log("select", e);
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_action_sheet2 = common_vendor.resolveComponent("u-action-sheet");
  (_easycom_u_navbar2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_action_sheet2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_action_sheet = () => "../../../uni_modules/uview-plus/components/u-action-sheet/u-action-sheet.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_action_sheet)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "上拉菜单",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.openSheet(index), index),
        c: index,
        d: "6492f1c8-2-" + i0 + ",6492f1c8-1",
        e: common_vendor.p({
          title: item.title,
          isLink: true
        })
      };
    }),
    d: common_vendor.o($options.close),
    e: common_vendor.o($options.select),
    f: common_vendor.p({
      show: $data.show0,
      actions: $data.actions0,
      closeOnClickOverlay: false
    }),
    g: common_vendor.o(($event) => $data.show1 = false),
    h: common_vendor.p({
      show: $data.show1,
      actions: $data.actions1
    }),
    i: common_vendor.o(($event) => $data.show2 = false),
    j: common_vendor.p({
      show: $data.show2,
      actions: $data.actions2,
      cancelText: "取消"
    }),
    k: common_vendor.o(($event) => $data.show3 = false),
    l: common_vendor.p({
      show: $data.show3,
      actions: $data.actions3,
      description: "这是一段描述文本,字号偏小,颜色偏淡"
    }),
    m: common_vendor.o(($event) => $data.show4 = false),
    n: common_vendor.p({
      show: $data.show4,
      title: "标题位置",
      round: 10
    }),
    o: common_vendor.o(($event) => $data.show5 = false),
    p: common_vendor.o($options.getuserinfo),
    q: common_vendor.p({
      show: $data.show5,
      title: "微信开放能力",
      actions: $data.actions5
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/actionSheet/actionSheet.nvue"]]);
wx.createPage(MiniProgramPage);
