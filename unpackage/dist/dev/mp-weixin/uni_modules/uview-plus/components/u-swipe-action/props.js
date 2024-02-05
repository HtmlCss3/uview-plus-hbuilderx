"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 是否自动关闭其他swipe按钮组
    autoClose: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.swipeAction.autoClose
    }
  }
};
exports.props = props;
