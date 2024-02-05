"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 控制打开或者关闭
    show: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.swipeActionItem.show
    },
    // 标识符，如果是v-for，可用index索引值
    name: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.swipeActionItem.name
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.swipeActionItem.disabled
    },
    // 是否自动关闭其他swipe按钮组
    autoClose: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.swipeActionItem.autoClose
    },
    // 滑动距离阈值，只有大于此值，才被认为是要打开菜单
    threshold: {
      type: Number,
      default: uni_modules_uviewPlus_libs_config_props.defprops.swipeActionItem.threshold
    },
    // 右侧按钮内容
    options: {
      type: Array,
      default() {
        return common_vendor.index.$u.props.swipeActionItem.rightOptions;
      }
    },
    // 动画过渡时间，单位ms
    duration: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.swipeActionItem.duration
    }
  }
};
exports.props = props;
