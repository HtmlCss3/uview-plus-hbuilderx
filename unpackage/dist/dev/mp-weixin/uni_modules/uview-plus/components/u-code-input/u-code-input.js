"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uCodeInput_props = require("./props.js");
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
  name: "u-code-input",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uCodeInput_props.props],
  data() {
    return {
      inputValue: "",
      isFocus: this.focus
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.inputValue = String(val).substring(0, this.maxlength);
      }
    }
  },
  computed: {
    // 根据长度，循环输入框的个数，因为头条小程序数值不能用于v-for
    codeLength() {
      return new Array(Number(this.maxlength));
    },
    // 循环item的样式
    itemStyle() {
      return (index) => {
        const addUnit = common_vendor.index.$u.addUnit;
        const style = {
          width: addUnit(this.size),
          height: addUnit(this.size)
        };
        if (this.mode === "box") {
          style.border = `${this.hairline ? 0.5 : 1}px solid ${this.borderColor}`;
          if (common_vendor.index.$u.getPx(this.space) === 0) {
            if (index === 0) {
              style.borderTopLeftRadius = "3px";
              style.borderBottomLeftRadius = "3px";
            }
            if (index === this.codeLength.length - 1) {
              style.borderTopRightRadius = "3px";
              style.borderBottomRightRadius = "3px";
            }
            if (index !== this.codeLength.length - 1) {
              style.borderRight = "none";
            }
          }
        }
        if (index !== this.codeLength.length - 1) {
          style.marginRight = addUnit(this.space);
        } else {
          style.marginRight = 0;
        }
        return style;
      };
    },
    // 将输入的值，转为数组，给item历遍时，根据当前的索引显示数组的元素
    codeArray() {
      return String(this.inputValue).split("");
    },
    // 下划线模式下，横线的样式
    lineStyle() {
      const style = {};
      style.height = this.hairline ? "2px" : "4px";
      style.width = common_vendor.index.$u.addUnit(this.size);
      style.backgroundColor = this.borderColor;
      return style;
    }
  },
  methods: {
    // 监听输入框的值发生变化
    inputHandler(e) {
      const value = e.detail.value;
      this.inputValue = value;
      if (this.disabledDot) {
        this.$nextTick(() => {
          this.inputValue = value.replace(".", "");
        });
      }
      this.$emit("change", value);
      this.$emit("input", value);
      if (String(value).length >= Number(this.maxlength)) {
        this.$emit("finish", value);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.codeLength, (item, index, i0) => {
      return common_vendor.e({
        a: _ctx.dot && $options.codeArray.length > index
      }, _ctx.dot && $options.codeArray.length > index ? {} : {
        b: common_vendor.t($options.codeArray[index]),
        c: _ctx.$u.addUnit(_ctx.fontSize),
        d: _ctx.bold ? "bold" : "normal",
        e: _ctx.color
      }, _ctx.mode === "line" ? {
        f: common_vendor.s($options.lineStyle)
      } : {}, {
        g: $data.isFocus && $options.codeArray.length === index
      }, $data.isFocus && $options.codeArray.length === index ? {
        h: _ctx.color
      } : {}, {
        i: common_vendor.s($options.itemStyle(index)),
        j: index
      });
    }),
    b: _ctx.mode === "line",
    c: _ctx.disabledKeyboard,
    d: _ctx.focus,
    e: $data.inputValue,
    f: _ctx.maxlength,
    g: _ctx.adjustPosition,
    h: common_vendor.o((...args) => $options.inputHandler && $options.inputHandler(...args)),
    i: _ctx.$u.addUnit(_ctx.size),
    j: common_vendor.o(($event) => $data.isFocus = true),
    k: common_vendor.o(($event) => $data.isFocus = false)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-10e44dac"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-code-input/u-code-input.vue"]]);
wx.createComponent(Component);
