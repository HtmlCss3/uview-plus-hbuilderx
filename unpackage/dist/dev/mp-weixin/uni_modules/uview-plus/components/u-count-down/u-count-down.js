"use strict";
const uni_modules_uviewPlus_components_uCountDown_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_components_uCountDown_utils = require("./utils.js");
const common_vendor = require("../../../../common/vendor.js");
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
  name: "u-count-down",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uCountDown_props.props],
  data() {
    return {
      timer: null,
      // 各单位(天，时，分等)剩余时间
      timeData: uni_modules_uviewPlus_components_uCountDown_utils.parseTimeData(0),
      // 格式化后的时间，如"03:23:21"
      formattedTime: "0",
      // 倒计时是否正在进行中
      runing: false,
      endTime: 0,
      // 结束的毫秒时间戳
      remainTime: 0
      // 剩余的毫秒时间
    };
  },
  watch: {
    time(n) {
      this.reset();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.reset();
    },
    // 开始倒计时
    start() {
      if (this.runing)
        return;
      this.runing = true;
      this.endTime = Date.now() + this.remainTime;
      this.toTick();
    },
    // 根据是否展示毫秒，执行不同操作函数
    toTick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    macroTick() {
      this.clearTimeout();
      this.timer = setTimeout(() => {
        const remain = this.getRemainTime();
        if (!uni_modules_uviewPlus_components_uCountDown_utils.isSameSecond(remain, this.remainTime) || remain === 0) {
          this.setRemainTime(remain);
        }
        if (this.remainTime !== 0) {
          this.macroTick();
        }
      }, 30);
    },
    microTick() {
      this.clearTimeout();
      this.timer = setTimeout(() => {
        this.setRemainTime(this.getRemainTime());
        if (this.remainTime !== 0) {
          this.microTick();
        }
      }, 50);
    },
    // 获取剩余的时间
    getRemainTime() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    // 设置剩余的时间
    setRemainTime(remain) {
      this.remainTime = remain;
      const timeData = uni_modules_uviewPlus_components_uCountDown_utils.parseTimeData(remain);
      this.$emit("change", timeData);
      this.formattedTime = uni_modules_uviewPlus_components_uCountDown_utils.parseFormat(this.format, timeData);
      if (remain <= 0) {
        this.pause();
        this.$emit("finish");
      }
    },
    // 重置倒计时
    reset() {
      this.pause();
      this.remainTime = this.time;
      this.setRemainTime(this.remainTime);
      if (this.autoStart) {
        this.start();
      }
    },
    // 暂停倒计时
    pause() {
      this.runing = false;
      this.clearTimeout();
    },
    // 清空定时器
    clearTimeout() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
  beforeDestroy() {
    this.clearTimeout();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.formattedTime)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f829c0f"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-count-down/u-count-down.vue"]]);
wx.createComponent(Component);
