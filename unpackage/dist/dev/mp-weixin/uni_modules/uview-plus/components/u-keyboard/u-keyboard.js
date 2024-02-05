"use strict";
const uni_modules_uviewPlus_components_uKeyboard_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const common_vendor = require("../../../../common/vendor.js");
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
  name: "u-keyboard",
  data() {
    return {};
  },
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uKeyboard_props.props],
  methods: {
    change(e) {
      this.$emit("change", e);
    },
    // 键盘关闭
    popupClose() {
      this.$emit("close");
    },
    // 输入完成
    onConfirm() {
      this.$emit("confirm");
    },
    // 取消输入
    onCancel() {
      this.$emit("cancel");
    },
    // 退格键
    backspace() {
      this.$emit("backspace");
    }
  }
};
if (!Array) {
  const _easycom_u_number_keyboard2 = common_vendor.resolveComponent("u-number-keyboard");
  const _easycom_u_car_keyboard2 = common_vendor.resolveComponent("u-car-keyboard");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_number_keyboard2 + _easycom_u_car_keyboard2 + _easycom_u_popup2)();
}
const _easycom_u_number_keyboard = () => "../u-number-keyboard/u-number-keyboard.js";
const _easycom_u_car_keyboard = () => "../u-car-keyboard/u-car-keyboard.js";
const _easycom_u_popup = () => "../u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_number_keyboard + _easycom_u_car_keyboard + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.tooltip
  }, _ctx.tooltip ? common_vendor.e({
    b: _ctx.showCancel
  }, _ctx.showCancel ? {
    c: common_vendor.t(_ctx.showCancel && _ctx.cancelText),
    d: common_vendor.o((...args) => $options.onCancel && $options.onCancel(...args))
  } : {}, {
    e: _ctx.showTips
  }, _ctx.showTips ? {
    f: common_vendor.t(_ctx.tips ? _ctx.tips : _ctx.mode == "number" ? "数字键盘" : _ctx.mode == "card" ? "身份证键盘" : "车牌号键盘")
  } : {}, {
    g: _ctx.showConfirm
  }, _ctx.showConfirm ? {
    h: common_vendor.t(_ctx.showConfirm && _ctx.confirmText),
    i: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args))
  } : {}) : {}, {
    j: _ctx.mode == "number" || _ctx.mode == "card"
  }, _ctx.mode == "number" || _ctx.mode == "card" ? {
    k: common_vendor.o($options.backspace),
    l: common_vendor.o($options.change),
    m: common_vendor.p({
      random: _ctx.random,
      mode: _ctx.mode,
      dotDisabled: _ctx.dotDisabled
    })
  } : {
    n: common_vendor.o($options.backspace),
    o: common_vendor.o($options.change),
    p: common_vendor.p({
      random: _ctx.random,
      autoChange: _ctx.autoChange
    })
  }, {
    q: common_vendor.o($options.popupClose),
    r: common_vendor.p({
      overlay: _ctx.overlay,
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      mode: "bottom",
      popup: false,
      show: _ctx.show,
      safeAreaInsetBottom: _ctx.safeAreaInsetBottom,
      zIndex: _ctx.zIndex,
      customStyle: {
        backgroundColor: "rgb(214, 218, 220)"
      }
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5c3a4793"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-keyboard/u-keyboard.vue"]]);
wx.createComponent(Component);
