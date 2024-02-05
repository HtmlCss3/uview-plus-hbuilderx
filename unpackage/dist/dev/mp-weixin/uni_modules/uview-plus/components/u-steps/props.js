"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 排列方向
    direction: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.steps.direction
    },
    // 设置第几个步骤
    current: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.steps.current
    },
    // 激活状态颜色
    activeColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.steps.activeColor
    },
    // 未激活状态颜色
    inactiveColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.steps.inactiveColor
    },
    // 激活状态的图标
    activeIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.steps.activeIcon
    },
    // 未激活状态图标
    inactiveIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.steps.inactiveIcon
    },
    // 是否显示点类型
    dot: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.steps.dot
    }
  }
};
exports.props = props;
