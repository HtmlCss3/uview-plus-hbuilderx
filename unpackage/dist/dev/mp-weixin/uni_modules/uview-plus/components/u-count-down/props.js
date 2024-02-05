"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 倒计时时长，单位ms
    time: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.countDown.time
    },
    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.countDown.format
    },
    // 是否自动开始倒计时
    autoStart: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.countDown.autoStart
    },
    // 是否展示毫秒倒计时
    millisecond: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.countDown.millisecond
    }
  }
};
exports.props = props;
