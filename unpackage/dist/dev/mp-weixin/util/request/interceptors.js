"use strict";
const common_vendor = require("../../common/vendor.js");
const requestInterceptors = (vm) => {
  common_vendor.index.$u.http.interceptors.request.use((config) => {
    debugger;
    config.data = config.data || {};
    return config;
  }, (config) => (
    // 可使用async await 做异步操作
    Promise.reject(config)
  ));
};
const responseInterceptors = (vm) => {
  common_vendor.index.$u.http.interceptors.response.use((response) => {
    var _a;
    const data = response.data;
    const custom = (_a = response.config) == null ? void 0 : _a.custom;
    if (data.code !== 200) {
      if (custom.toast !== false) {
        common_vendor.index.$u.toast(data.message);
      }
      if (custom == null ? void 0 : custom.catch) {
        return Promise.reject(data);
      } else {
        return new Promise(() => {
        });
      }
    }
    return data.data || {};
  }, (response) => {
    return Promise.reject(response);
  });
};
exports.requestInterceptors = requestInterceptors;
exports.responseInterceptors = responseInterceptors;
