"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 标题
    title: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.stepsItem.title
    },
    // 描述文本
    desc: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.stepsItem.desc
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.stepsItem.iconSize
    },
    // 当前步骤是否处于失败状态
    error: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.stepsItem.error
    }
  }
};
exports.props = props;
