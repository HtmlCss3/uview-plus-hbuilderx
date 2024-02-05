"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uStepsItem_props = require("./props.js");
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
  name: "u-steps-item",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uStepsItem_props.props],
  data() {
    return {
      index: 0,
      childLength: 0,
      showLine: false,
      size: {
        height: 0,
        width: 0
      },
      parentData: {
        direction: "row",
        current: 0,
        activeColor: "",
        inactiveColor: "",
        activeIcon: "",
        inactiveIcon: "",
        dot: false
      }
    };
  },
  watch: {
    "parentData"(newValue, oldValue) {
    }
  },
  created() {
    this.init();
  },
  computed: {
    lineStyle() {
      var _a, _b;
      const style = {};
      if (this.parentData.direction === "row") {
        style.width = this.size.width + "px";
        style.left = this.size.width / 2 + "px";
      } else {
        style.height = this.size.height + "px";
      }
      style.backgroundColor = ((_b = (_a = this.parent.children) == null ? void 0 : _a[this.index + 1]) == null ? void 0 : _b.error) ? common_vendor.index.$u.color.error : this.index < this.parentData.current ? this.parentData.activeColor : this.parentData.inactiveColor;
      return style;
    },
    statusClass() {
      const {
        index,
        error
      } = this;
      const {
        current
      } = this.parentData;
      if (current == index) {
        return error === true ? "error" : "process";
      } else if (error) {
        return "error";
      } else if (current > index) {
        return "finish";
      } else {
        return "wait";
      }
    },
    statusColor() {
      let color = "";
      switch (this.statusClass) {
        case "finish":
          color = this.parentData.activeColor;
          break;
        case "error":
          color = common_vendor.index.$u.color.error;
          break;
        case "process":
          color = this.parentData.dot ? this.parentData.activeColor : "transparent";
          break;
        default:
          color = this.parentData.inactiveColor;
          break;
      }
      return color;
    },
    contentStyle() {
      const style = {};
      if (this.parentData.direction === "column") {
        style.marginLeft = this.parentData.dot ? "2px" : "6px";
        style.marginTop = this.parentData.dot ? "0px" : "6px";
      } else {
        style.marginTop = this.parentData.dot ? "2px" : "6px";
        style.marginLeft = this.parentData.dot ? "2px" : "6px";
      }
      return style;
    }
  },
  mounted() {
    this.parent && this.parent.updateFromChild();
    common_vendor.index.$u.sleep().then(() => {
      this.getStepsItemRect();
    });
  },
  methods: {
    init() {
      this.updateParentData();
      if (!this.parent) {
        return common_vendor.index.$u.error("u-steps-item必须要搭配u-steps组件使用");
      }
      this.index = this.parent.children.indexOf(this);
      this.childLength = this.parent.children.length;
    },
    updateParentData() {
      this.getParentData("u-steps");
    },
    // 父组件数据发生变化
    updateFromParent() {
      this.init();
    },
    // 获取组件的尺寸，用于设置横线的位置
    getStepsItemRect() {
      this.$uGetRect(".u-steps-item").then((size) => {
        this.size = size;
      });
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u__text2 = common_vendor.resolveComponent("u--text");
  (_easycom_u_icon2 + _easycom_u__text2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u__text = () => "../u--text/u--text.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u__text)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.index + 1 < $data.childLength
  }, $data.index + 1 < $data.childLength ? {
    b: common_vendor.n(`u-steps-item__line--${$data.parentData.direction}`),
    c: common_vendor.s($options.lineStyle)
  } : {}, {
    d: $data.parentData.dot
  }, $data.parentData.dot ? {
    e: $options.statusColor
  } : $data.parentData.activeIcon || $data.parentData.inactiveIcon ? {
    g: common_vendor.p({
      name: $data.index <= $data.parentData.current ? $data.parentData.activeIcon : $data.parentData.inactiveIcon,
      size: _ctx.iconSize,
      color: $data.index <= $data.parentData.current ? $data.parentData.activeColor : $data.parentData.inactiveColor
    })
  } : common_vendor.e({
    h: $options.statusClass === "process" || $options.statusClass === "wait"
  }, $options.statusClass === "process" || $options.statusClass === "wait" ? {
    i: common_vendor.t($data.index + 1),
    j: $data.index == $data.parentData.current ? "#ffffff" : $data.parentData.inactiveColor
  } : {
    k: common_vendor.p({
      color: $options.statusClass === "error" ? "error" : $data.parentData.activeColor,
      size: "12",
      name: $options.statusClass === "error" ? "close" : "checkmark"
    })
  }, {
    l: $options.statusClass === "process" ? $data.parentData.activeColor : "transparent",
    m: $options.statusColor
  }), {
    f: $data.parentData.activeIcon || $data.parentData.inactiveIcon,
    n: common_vendor.n(`u-steps-item__wrapper--${$data.parentData.direction}`),
    o: common_vendor.n($data.parentData.dot && `u-steps-item__wrapper--${$data.parentData.direction}--dot`),
    p: common_vendor.p({
      text: _ctx.title,
      type: $data.parentData.current == $data.index ? "main" : "content",
      lineHeight: "20px",
      size: $data.parentData.current == $data.index ? 14 : 13
    }),
    q: common_vendor.p({
      text: _ctx.desc,
      type: "tips",
      size: "12"
    }),
    r: common_vendor.n(`u-steps-item__content--${$data.parentData.direction}`),
    s: common_vendor.s($options.contentStyle),
    t: common_vendor.n(`u-steps-item--${$data.parentData.direction}`)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3c8d19a1"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-steps-item/u-steps-item.vue"]]);
wx.createComponent(Component);
