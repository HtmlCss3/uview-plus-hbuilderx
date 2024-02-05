"use strict";
require("../../libs/config/config.js");
require("../../libs/config/props/datetimePicker.js");
require("../../libs/config/props/icon.js");
require("../../libs/config/props/link.js");
require("../../libs/config/props/loadingIcon.js");
require("../../libs/config/props/navbar.js");
const props = {
  props: {
    // 是否打乱键盘按键的顺序
    random: {
      type: Boolean,
      default: false
    },
    // 输入一个中文后，是否自动切换到英文
    autoChange: {
      type: Boolean,
      default: false
    }
  }
};
exports.props = props;
