"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_libs_mixin_touch = require("../../libs/mixin/touch.js");
const uni_modules_uviewPlus_components_uSwipeActionItem_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_components_uSwipeActionItem_wxs = require("./wxs.js");
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
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("closeOther", "setState");
};
const _sfc_main = {
  name: "u-swipe-action-item",
  emits: ["click"],
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uSwipeActionItem_props.props, uni_modules_uviewPlus_libs_mixin_touch.touch],
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uSwipeActionItem_props.props, uni_modules_uviewPlus_libs_mixin_touch.touch, uni_modules_uviewPlus_components_uSwipeActionItem_wxs.wxs],
  data() {
    return {
      // 按钮的尺寸信息
      size: {},
      // 父组件u-swipe-action的参数
      parentData: {
        autoClose: true
      },
      // 当前状态，open-打开，close-关闭
      status: "close"
    };
  },
  watch: {
    // 由于wxs无法直接读取外部的值，需要在外部值变化时，重新执行赋值逻辑
    wxsInit(newValue, oldValue) {
      this.queryRect();
    }
  },
  computed: {
    wxsInit() {
      return [this.disabled, this.autoClose, this.threshold, this.options, this.duration];
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.updateParentData();
      common_vendor.index.$u.sleep().then(() => {
        this.queryRect();
      });
    },
    updateParentData() {
      this.getParentData("u-swipe-action");
    },
    // 查询节点
    queryRect() {
      this.$uGetRect(".u-swipe-action-item__right__button", true).then((buttons) => {
        this.size = {
          buttons,
          show: this.show,
          disabled: this.disabled,
          threshold: this.threshold,
          duration: this.duration
        };
      });
    },
    // 按钮被点击
    buttonClickHandler(item, index) {
      this.$emit("click", {
        index,
        name: this.name
      });
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
    a: common_vendor.f(_ctx.options, (item, index, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: "ed3ce04a-0-" + i0,
        c: common_vendor.p({
          name: item.icon,
          color: item.style && item.style.color ? item.style.color : "#ffffff",
          size: item.iconSize ? _ctx.$u.addUnit(item.iconSize) : item.style && item.style.fontSize ? _ctx.$u.getPx(item.style.fontSize) * 1.2 : 17,
          customStyle: {
            marginRight: item.text ? "2px" : 0
          }
        })
      } : {}, {
        d: item.text
      }, item.text ? {
        e: common_vendor.t(item.text),
        f: common_vendor.s({
          color: item.style && item.style.color ? item.style.color : "#ffffff",
          fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px",
          lineHeight: item.style && item.style.fontSize ? item.style.fontSize : "16px"
        })
      } : {}, {
        g: common_vendor.s({
          backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD",
          borderRadius: item.style && item.style.borderRadius ? item.style.borderRadius : "0",
          padding: item.style && item.style.borderRadius ? "0" : "0 15px"
        }),
        h: common_vendor.s(item.style),
        i: index,
        j: `u-swipe-action-item__right__button-${index}`,
        k: common_vendor.s({
          alignItems: item.style && item.style.borderRadius ? "center" : "stretch"
        }),
        l: common_vendor.o(($event) => $options.buttonClickHandler(item, index), index)
      });
    }),
    b: $data.status,
    c: $data.size
  };
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ed3ce04a"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-swipe-action-item/u-swipe-action-item.vue"]]);
wx.createComponent(Component);
