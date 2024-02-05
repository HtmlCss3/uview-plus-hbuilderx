"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show1: true,
      moveX: 0,
      showText: "当前状态：关",
      showStatus: false,
      options1: [{
        text: "删除",
        style: {
          backgroundColor: "#f56c6c"
        }
      }],
      options2: [{
        text: "收藏",
        style: {
          backgroundColor: "#3c9cff"
        }
      }, {
        text: "删除",
        style: {
          backgroundColor: "#f56c6c"
        }
      }],
      options3: [{
        text: "收藏",
        icon: "star-fill",
        iconSize: "20",
        style: {
          backgroundColor: "#f9ae3d"
        }
      }],
      options4: [{
        text: "禁用状态",
        disabled: true,
        options: [
          {
            text: "置顶",
            style: {
              backgroundColor: "#3c9cff"
            }
          },
          {
            text: "取消",
            style: {
              backgroundColor: "#f9ae3d"
            }
          }
        ]
      }, {
        text: "正常状态",
        disabled: false,
        options: [
          {
            text: "置顶",
            style: {
              backgroundColor: "#3c9cff"
            }
          },
          {
            text: "取消",
            style: {
              backgroundColor: "#f9ae3d"
            }
          }
        ]
      }, {
        text: "自动关闭",
        disabled: false,
        options: [
          {
            text: "置顶",
            style: {
              backgroundColor: "#3c9cff"
            }
          },
          {
            text: "取消",
            style: {
              backgroundColor: "#f9ae3d"
            }
          }
        ]
      }],
      options5: [{
        icon: "trash-fill",
        style: {
          backgroundColor: "#f56c6c",
          width: "40px",
          height: "40px",
          borderRadius: "100px",
          margin: "0 6px"
        }
      }, {
        icon: "heart-fill",
        style: {
          backgroundColor: "#5ac725",
          width: "40px",
          height: "40px",
          borderRadius: "100px",
          margin: "0 6px"
        }
      }]
    };
  },
  methods: {
    click(index) {
      console.log("click", index);
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "确定要删除吗？",
        success: (res) => {
          if (res.confirm) {
            this.show1 = false;
          }
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_swipe_action_item2 = common_vendor.resolveComponent("u-swipe-action-item");
  const _easycom_u_swipe_action2 = common_vendor.resolveComponent("u-swipe-action");
  (_easycom_u_swipe_action_item2 + _easycom_u_swipe_action2)();
}
const _easycom_u_swipe_action_item = () => "../../../uni_modules/uview-plus/components/u-swipe-action-item/u-swipe-action-item.js";
const _easycom_u_swipe_action = () => "../../../uni_modules/uview-plus/components/u-swipe-action/u-swipe-action.js";
if (!Math) {
  (_easycom_u_swipe_action_item + _easycom_u_swipe_action)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.show1
  }, $data.show1 ? {
    b: common_vendor.o($options.click),
    c: common_vendor.p({
      options: $data.options1
    })
  } : {}, {
    d: common_vendor.p({
      options: $data.options2
    }),
    e: common_vendor.p({
      options: $data.options3
    }),
    f: common_vendor.f($data.options4, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: common_vendor.n(index === $data.options4.length - 1 && "u-border-bottom"),
        c: index,
        d: "d462324a-7-" + i0 + ",d462324a-6",
        e: common_vendor.p({
          options: item.options,
          disabled: item.disabled
        })
      };
    }),
    g: common_vendor.p({
      options: $data.options5
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/swipeAction/swipeAction.nvue"]]);
wx.createPage(MiniProgramPage);
