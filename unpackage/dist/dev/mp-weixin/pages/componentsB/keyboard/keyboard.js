"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      input: "",
      keyData: {
        mode: "",
        dotDisabled: false,
        random: false
      },
      list: [
        {
          title: "车牌号键盘",
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/car.png"
        },
        {
          title: "数字键盘",
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/number.png"
        },
        {
          title: "身份证键盘",
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/IdCard.png"
        },
        {
          title: '隐藏键盘"."符号',
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/dot.png"
        },
        {
          title: "打乱键盘按键的顺序",
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/order.png"
        }
      ],
      show: false
    };
  },
  methods: {
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    // 点击展示不同的键盘
    openKeyboard(indexNum) {
      this.keyData = {
        mode: "",
        dotDisabled: false,
        random: false
      };
      if (indexNum == 0) {
        this.keyData.mode = "";
      } else if (indexNum == 1) {
        this.keyData.mode = "number";
      } else if (indexNum == 2) {
        this.keyData.mode = "card";
      } else if (indexNum == 3) {
        this.keyData.mode = "number";
        this.keyData.dotDisabled = true;
      } else if (indexNum == 4) {
        this.keyData.mode = "number";
        this.keyData.random = true;
      }
      this.input = "";
      this.show = true;
    },
    change(e) {
      this.input += e;
    },
    close() {
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    confirm() {
      this.show = false;
    },
    backspace() {
      this.input = this.input.slice(0, -1);
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_keyboard2 = common_vendor.resolveComponent("u-keyboard");
  (_easycom_u_navbar2 + _easycom_u_gap2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_keyboard2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_keyboard = () => "../../../uni_modules/uview-plus/components/u-keyboard/u-keyboard.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_gap + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_keyboard)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "键盘",
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
        b: common_vendor.o(($event) => $options.openKeyboard(index), index),
        c: index,
        d: "11d11c7c-3-" + i0 + ",11d11c7c-2",
        e: common_vendor.p({
          titleStyle: {
            fontWeight: 500
          },
          title: item.title,
          isLink: true
        })
      };
    }),
    e: common_vendor.o($options.close),
    f: common_vendor.o($options.cancel),
    g: common_vendor.o($options.confirm),
    h: common_vendor.o($options.change),
    i: common_vendor.o($options.backspace),
    j: common_vendor.p({
      mode: $data.keyData.mode,
      dotDisabled: $data.keyData.dotDisabled,
      random: $data.keyData.random,
      show: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/keyboard/keyboard.nvue"]]);
wx.createPage(MiniProgramPage);
