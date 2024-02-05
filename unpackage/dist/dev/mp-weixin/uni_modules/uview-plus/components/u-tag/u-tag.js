"use strict";
const uni_modules_uviewPlus_components_uTag_props = require("./props.js");
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
  name: "u-tag",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uTag_props.props],
  data() {
    return {};
  },
  computed: {
    style() {
      const style = {};
      if (this.bgColor) {
        style.backgroundColor = this.bgColor;
      }
      if (this.color) {
        style.color = this.color;
      }
      if (this.borderColor) {
        style.borderColor = this.borderColor;
      }
      return style;
    },
    // nvue下，文本颜色无法继承父元素
    textColor() {
      const style = {};
      if (this.color) {
        style.color = this.color;
      }
      return style;
    },
    imgStyle() {
      const width = this.size === "large" ? "17px" : this.size === "medium" ? "15px" : "13px";
      return {
        width,
        height: width
      };
    },
    // 文本的样式
    closeSize() {
      const size = this.size === "large" ? 15 : this.size === "medium" ? 13 : 12;
      return size;
    },
    // 图标大小
    iconSize() {
      const size = this.size === "large" ? 21 : this.size === "medium" ? 19 : 16;
      return size;
    },
    // 图标颜色
    elIconColor() {
      return this.iconColor ? this.iconColor : this.plain ? this.type : "#ffffff";
    }
  },
  methods: {
    // 点击关闭按钮
    closeHandler() {
      this.$emit("close", this.name);
    },
    // 点击标签
    clickHandler() {
      this.$emit("click", this.name);
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  (_easycom_u_icon2 + _easycom_u_transition2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? common_vendor.e({
    b: _ctx.$u.test.image(_ctx.icon)
  }, _ctx.$u.test.image(_ctx.icon) ? {
    c: _ctx.icon,
    d: common_vendor.s($options.imgStyle)
  } : {
    e: common_vendor.p({
      color: $options.elIconColor,
      name: _ctx.icon,
      size: $options.iconSize
    })
  }) : {}, {
    f: common_vendor.t(_ctx.text),
    g: common_vendor.s($options.textColor),
    h: common_vendor.n(`u-tag__text--${_ctx.type}`),
    i: common_vendor.n(_ctx.plain && `u-tag__text--${_ctx.type}--plain`),
    j: common_vendor.n(`u-tag__text--${_ctx.size}`),
    k: common_vendor.n(`u-tag--${_ctx.shape}`),
    l: common_vendor.n(!_ctx.plain && `u-tag--${_ctx.type}`),
    m: common_vendor.n(_ctx.plain && `u-tag--${_ctx.type}--plain`),
    n: common_vendor.n(`u-tag--${_ctx.size}`),
    o: common_vendor.n(_ctx.plain && _ctx.plainFill && `u-tag--${_ctx.type}--plain--fill`),
    p: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    q: common_vendor.s({
      marginRight: _ctx.closable ? "10px" : 0,
      marginTop: _ctx.closable ? "10px" : 0
    }),
    r: common_vendor.s($options.style),
    s: _ctx.closable
  }, _ctx.closable ? {
    t: common_vendor.p({
      name: "close",
      size: $options.closeSize,
      color: "#ffffff"
    }),
    v: common_vendor.n(`u-tag__close--${_ctx.size}`),
    w: common_vendor.o((...args) => $options.closeHandler && $options.closeHandler(...args)),
    x: _ctx.closeColor
  } : {}, {
    y: common_vendor.p({
      mode: "fade",
      show: _ctx.show
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2fd891bb"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-tag/u-tag.vue"]]);
wx.createComponent(Component);
