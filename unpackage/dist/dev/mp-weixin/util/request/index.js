"use strict";
const common_vendor = require("../../common/vendor.js");
const common_config = require("../../common/config.js");
const util_request_interceptors = require("./interceptors.js");
const initRequest = (vm) => {
  common_vendor.index.$u.http.setConfig((defaultConfig) => {
    defaultConfig.baseURL = common_config.config.baseUrl;
    return defaultConfig;
  });
  util_request_interceptors.requestInterceptors();
  util_request_interceptors.responseInterceptors();
};
exports.initRequest = initRequest;
