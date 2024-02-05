"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 键盘的类型，number-数字键盘，card-身份证键盘
    mode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.numberKeyboard.value
    },
    // 是否显示键盘的"."符号
    dotDisabled: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.numberKeyboard.dotDisabled
    },
    // 是否打乱键盘按键的顺序
    random: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.numberKeyboard.random
    }
  }
};
exports.props = props;
