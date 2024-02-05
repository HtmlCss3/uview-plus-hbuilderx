"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uNumberKeyboard_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
require("../../libs/config/props.js");
require("../../libs/config/config.js");
require("../../libs/config/props/actionSheet.js");
require("../../libs/config/props/album.js");
require("../../libs/config/props/alert.js");
require("../../libs/config/props/avatar.js");
require("../../libs/config/props/avatarGroup.js");
require("../../libs/config/props/backtop.js");
require("../../libs/config/props/badge.js");
require("../../libs/config/props/button.js");
require("../../libs/config/props/calendar.js");
require("../../libs/config/props/carKeyboard.js");
require("../../libs/config/props/cell.js");
require("../../libs/config/props/cellGroup.js");
require("../../libs/config/props/checkbox.js");
require("../../libs/config/props/checkboxGroup.js");
require("../../libs/config/props/circleProgress.js");
require("../../libs/config/props/code.js");
require("../../libs/config/props/codeInput.js");
require("../../libs/config/props/col.js");
require("../../libs/config/props/collapse.js");
require("../../libs/config/props/collapseItem.js");
require("../../libs/config/props/columnNotice.js");
require("../../libs/config/props/countDown.js");
require("../../libs/config/props/countTo.js");
require("../../libs/config/props/datetimePicker.js");
require("../../libs/config/props/divider.js");
require("../../libs/config/props/empty.js");
require("../../libs/config/props/form.js");
require("../../libs/config/props/formItem.js");
require("../../libs/config/props/gap.js");
require("../../libs/config/props/grid.js");
require("../../libs/config/props/gridItem.js");
require("../../libs/config/props/icon.js");
require("../../libs/config/props/image.js");
require("../../libs/config/props/indexAnchor.js");
require("../../libs/config/props/indexList.js");
require("../../libs/config/props/input.js");
require("../../libs/config/props/keyboard.js");
require("../../libs/config/props/line.js");
require("../../libs/config/props/lineProgress.js");
require("../../libs/config/props/link.js");
require("../../libs/config/props/list.js");
require("../../libs/config/props/listItem.js");
require("../../libs/config/props/loadingIcon.js");
require("../../libs/config/props/loadingPage.js");
require("../../libs/config/props/loadmore.js");
require("../../libs/config/props/modal.js");
require("../../libs/config/props/navbar.js");
require("../../libs/config/color.js");
require("../../libs/config/props/noNetwork.js");
require("../../libs/config/props/noticeBar.js");
require("../../libs/config/props/notify.js");
require("../../libs/config/props/numberBox.js");
require("../../libs/config/props/numberKeyboard.js");
require("../../libs/config/props/overlay.js");
require("../../libs/config/props/parse.js");
require("../../libs/config/props/picker.js");
require("../../libs/config/props/popup.js");
require("../../libs/config/props/radio.js");
require("../../libs/config/props/radioGroup.js");
require("../../libs/config/props/rate.js");
require("../../libs/config/props/readMore.js");
require("../../libs/config/props/row.js");
require("../../libs/config/props/rowNotice.js");
require("../../libs/config/props/scrollList.js");
require("../../libs/config/props/search.js");
require("../../libs/config/props/section.js");
require("../../libs/config/props/skeleton.js");
require("../../libs/config/props/slider.js");
require("../../libs/config/props/statusBar.js");
require("../../libs/config/props/steps.js");
require("../../libs/config/props/stepsItem.js");
require("../../libs/config/props/sticky.js");
require("../../libs/config/props/subsection.js");
require("../../libs/config/props/swipeAction.js");
require("../../libs/config/props/swipeActionItem.js");
require("../../libs/config/props/swiper.js");
require("../../libs/config/props/swipterIndicator.js");
require("../../libs/config/props/switch.js");
require("../../libs/config/props/tabbar.js");
require("../../libs/config/props/tabbarItem.js");
require("../../libs/config/props/tabs.js");
require("../../libs/config/props/tag.js");
require("../../libs/config/props/text.js");
require("../../libs/config/props/textarea.js");
require("../../libs/config/props/toast.js");
require("../../libs/config/props/toolbar.js");
require("../../libs/config/props/tooltip.js");
require("../../libs/config/props/transition.js");
require("../../libs/config/props/upload.js");
const _sfc_main = {
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uNumberKeyboard_props.props],
  data() {
    return {
      backspace: "backspace",
      // 退格键内容
      dot: ".",
      // 点
      timer: null,
      // 长按多次删除的事件监听
      cardX: "X"
      // 身份证的X符号
    };
  },
  computed: {
    // 键盘需要显示的内容
    numList() {
      if (this.dotDisabled && this.mode == "number") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        } else {
          return common_vendor.index.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }
      } else if (!this.dotDisabled && this.mode == "number") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0];
        } else {
          return common_vendor.index.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0]);
        }
      } else if (this.mode == "card") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0];
        } else {
          return common_vendor.index.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0]);
        }
      }
    },
    // 按键的样式，在非乱序&&数字键盘&&不显示点按钮时，index为9时，按键占位两个空间
    itemStyle() {
      return (index) => {
        let style = {};
        if (this.mode == "number" && this.dotDisabled && index == 9)
          style.width = "464rpx";
        return style;
      };
    },
    // 是否让按键显示灰色，只在非乱序&&数字键盘&&且允许点按键的时候
    btnBgGray() {
      return (index) => {
        if (!this.random && index == 9 && (this.mode != "number" || this.mode == "number" && !this.dotDisabled))
          return true;
        else
          return false;
      };
    }
  },
  created() {
  },
  methods: {
    // 点击退格键
    backspaceClick() {
      this.$emit("backspace");
      clearInterval(this.timer);
      this.timer = null;
      this.timer = setInterval(() => {
        this.$emit("backspace");
      }, 250);
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    // 获取键盘显示的内容
    keyboardClick(val) {
      if (!this.dotDisabled && val != this.dot && val != this.cardX)
        val = Number(val);
      this.$emit("change", val);
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.numList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.s($options.itemStyle(index)),
        c: common_vendor.o(($event) => $options.keyboardClick(item), index),
        d: index
      };
    }),
    b: common_vendor.p({
      name: "backspace",
      color: "#303133",
      size: "28"
    }),
    c: common_vendor.o((...args) => $options.backspaceClick && $options.backspaceClick(...args)),
    d: common_vendor.o((...args) => $options.clearTimer && $options.clearTimer(...args)),
    e: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d73731be"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-number-keyboard/u-number-keyboard.vue"]]);
wx.createComponent(Component);
