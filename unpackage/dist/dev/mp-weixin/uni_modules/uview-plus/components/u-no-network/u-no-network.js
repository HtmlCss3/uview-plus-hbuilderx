"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uNoNetwork_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
require("../../libs/config/props.js");
require("../../libs/config/config.js");
require("../../libs/config/props/actionSheet.js");
require("../../libs/config/props/album.js");
require("../../libs/config/props/alert.js");
require("../../libs/config/props/avatar.js");
require("../../libs/config/props/avatarGroup.js");
require("../../libs/config/props/backtop.js");
require("../../libs/config/props/badge.js");
require("../../libs/config/props/button.js");
require("../../libs/config/props/calendar.js");
require("../../libs/config/props/carKeyboard.js");
require("../../libs/config/props/cell.js");
require("../../libs/config/props/cellGroup.js");
require("../../libs/config/props/checkbox.js");
require("../../libs/config/props/checkboxGroup.js");
require("../../libs/config/props/circleProgress.js");
require("../../libs/config/props/code.js");
require("../../libs/config/props/codeInput.js");
require("../../libs/config/props/col.js");
require("../../libs/config/props/collapse.js");
require("../../libs/config/props/collapseItem.js");
require("../../libs/config/props/columnNotice.js");
require("../../libs/config/props/countDown.js");
require("../../libs/config/props/countTo.js");
require("../../libs/config/props/datetimePicker.js");
require("../../libs/config/props/divider.js");
require("../../libs/config/props/empty.js");
require("../../libs/config/props/form.js");
require("../../libs/config/props/formItem.js");
require("../../libs/config/props/gap.js");
require("../../libs/config/props/grid.js");
require("../../libs/config/props/gridItem.js");
require("../../libs/config/props/icon.js");
require("../../libs/config/props/image.js");
require("../../libs/config/props/indexAnchor.js");
require("../../libs/config/props/indexList.js");
require("../../libs/config/props/input.js");
require("../../libs/config/props/keyboard.js");
require("../../libs/config/props/line.js");
require("../../libs/config/props/lineProgress.js");
require("../../libs/config/props/link.js");
require("../../libs/config/props/list.js");
require("../../libs/config/props/listItem.js");
require("../../libs/config/props/loadingIcon.js");
require("../../libs/config/props/loadingPage.js");
require("../../libs/config/props/loadmore.js");
require("../../libs/config/props/modal.js");
require("../../libs/config/props/navbar.js");
require("../../libs/config/color.js");
require("../../libs/config/props/noNetwork.js");
require("../../libs/config/props/noticeBar.js");
require("../../libs/config/props/notify.js");
require("../../libs/config/props/numberBox.js");
require("../../libs/config/props/numberKeyboard.js");
require("../../libs/config/props/overlay.js");
require("../../libs/config/props/parse.js");
require("../../libs/config/props/picker.js");
require("../../libs/config/props/popup.js");
require("../../libs/config/props/radio.js");
require("../../libs/config/props/radioGroup.js");
require("../../libs/config/props/rate.js");
require("../../libs/config/props/readMore.js");
require("../../libs/config/props/row.js");
require("../../libs/config/props/rowNotice.js");
require("../../libs/config/props/scrollList.js");
require("../../libs/config/props/search.js");
require("../../libs/config/props/section.js");
require("../../libs/config/props/skeleton.js");
require("../../libs/config/props/slider.js");
require("../../libs/config/props/statusBar.js");
require("../../libs/config/props/steps.js");
require("../../libs/config/props/stepsItem.js");
require("../../libs/config/props/sticky.js");
require("../../libs/config/props/subsection.js");
require("../../libs/config/props/swipeAction.js");
require("../../libs/config/props/swipeActionItem.js");
require("../../libs/config/props/swiper.js");
require("../../libs/config/props/swipterIndicator.js");
require("../../libs/config/props/switch.js");
require("../../libs/config/props/tabbar.js");
require("../../libs/config/props/tabbarItem.js");
require("../../libs/config/props/tabs.js");
require("../../libs/config/props/tag.js");
require("../../libs/config/props/text.js");
require("../../libs/config/props/textarea.js");
require("../../libs/config/props/toast.js");
require("../../libs/config/props/toolbar.js");
require("../../libs/config/props/tooltip.js");
require("../../libs/config/props/transition.js");
require("../../libs/config/props/upload.js");
const _sfc_main = {
  name: "u-no-network",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uNoNetwork_props.props],
  data() {
    return {
      isConnected: true,
      // 是否有网络连接
      networkType: "none"
      // 网络类型
    };
  },
  mounted() {
    this.isIOS = common_vendor.index.getSystemInfoSync().platform === "ios";
    common_vendor.index.onNetworkStatusChange((res) => {
      this.isConnected = res.isConnected;
      this.networkType = res.networkType;
      this.emitEvent(this.networkType);
    });
    common_vendor.index.getNetworkType({
      success: (res) => {
        this.networkType = res.networkType;
        this.emitEvent(this.networkType);
        if (res.networkType == "none") {
          this.isConnected = false;
        } else {
          this.isConnected = true;
        }
      }
    });
  },
  methods: {
    retry() {
      common_vendor.index.getNetworkType({
        success: (res) => {
          this.networkType = res.networkType;
          this.emitEvent(this.networkType);
          if (res.networkType == "none") {
            common_vendor.index.$u.toast("无网络连接");
            this.isConnected = false;
          } else {
            common_vendor.index.$u.toast("网络已连接");
            this.isConnected = true;
          }
        }
      });
      this.$emit("retry");
    },
    // 发出事件给父组件
    emitEvent(networkType) {
      this.$emit(networkType === "none" ? "disconnected" : "connected");
    },
    async openSettings() {
      if (this.networkType == "none") {
        this.openSystemSettings();
        return;
      }
    },
    openAppSettings() {
      this.gotoAppSetting();
    },
    openSystemSettings() {
      if (this.isIOS) {
        this.gotoiOSSetting();
      } else {
        this.gotoAndroidSetting();
      }
    },
    network() {
      var result = null;
      var cellularData = plus.ios.newObject("CTCellularData");
      var state = cellularData.plusGetAttribute("restrictedState");
      if (state == 0) {
        result = null;
      } else if (state == 2) {
        result = 1;
      } else if (state == 1) {
        result = 2;
      }
      plus.ios.deleteObject(cellularData);
      return result;
    },
    gotoAppSetting() {
      if (this.isIOS) {
        var UIApplication = plus.ios.import("UIApplication");
        var application2 = UIApplication.sharedApplication();
        var NSURL2 = plus.ios.import("NSURL");
        var setting2 = NSURL2.URLWithString("app-settings:");
        application2.openURL(setting2);
        plus.ios.deleteObject(setting2);
        plus.ios.deleteObject(NSURL2);
        plus.ios.deleteObject(application2);
      } else {
        var Intent = plus.android.importClass("android.content.Intent");
        var Settings = plus.android.importClass("android.provider.Settings");
        var Uri = plus.android.importClass("android.net.Uri");
        var mainActivity = plus.android.runtimeMainActivity();
        var intent = new Intent();
        intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
        intent.setData(uri);
        mainActivity.startActivity(intent);
      }
    },
    gotoiOSSetting() {
      var UIApplication = plus.ios.import("UIApplication");
      var application2 = UIApplication.sharedApplication();
      var NSURL2 = plus.ios.import("NSURL");
      var setting2 = NSURL2.URLWithString("App-prefs:root=General");
      application2.openURL(setting2);
      plus.ios.deleteObject(setting2);
      plus.ios.deleteObject(NSURL2);
      plus.ios.deleteObject(application2);
    },
    gotoAndroidSetting() {
      var Intent = plus.android.importClass("android.content.Intent");
      var Settings = plus.android.importClass("android.provider.Settings");
      var mainActivity = plus.android.runtimeMainActivity();
      var intent = new Intent(Settings.ACTION_SETTINGS);
      mainActivity.startActivity(intent);
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_overlay2 = common_vendor.resolveComponent("u-overlay");
  (_easycom_u_icon2 + _easycom_u_button2 + _easycom_u_overlay2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_button = () => "../u-button/u-button.js";
const _easycom_u_overlay = () => "../u-overlay/u-overlay.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_button + _easycom_u_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: _ctx.image,
      size: "150",
      imgMode: "widthFit"
    }),
    b: common_vendor.t(_ctx.tips),
    c: common_vendor.o($options.retry),
    d: common_vendor.p({
      size: "mini",
      text: "重试",
      type: "primary",
      plain: true
    }),
    e: common_vendor.o(_ctx.noop),
    f: common_vendor.p({
      show: !$data.isConnected,
      zIndex: _ctx.zIndex,
      customStyle: {
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center"
      }
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-12a0c5bd"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-no-network/u-no-network.vue"]]);
wx.createComponent(Component);
