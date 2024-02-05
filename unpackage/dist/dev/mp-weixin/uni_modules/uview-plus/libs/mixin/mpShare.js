"use strict";
const common_vendor = require("../../../../common/vendor.js");
const mpShare = {
  onLoad() {
    common_vendor.index.$u.mpShare = {
      title: "",
      // 默认为小程序名称
      path: "",
      // 默认为当前页面路径
      imageUrl: ""
      // 默认为当前页面的截图
    };
  },
  onShareAppMessage() {
    return common_vendor.index.$u.mpShare;
  }
};
exports.mpShare = mpShare;
