"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uTooltip_props = require("./props.js");
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
  name: "u-tooltip",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uTooltip_props.props],
  data() {
    return {
      // 是否展示气泡
      showTooltip: true,
      // 生成唯一id，防止一个页面多个组件，造成干扰
      textId: common_vendor.index.$u.guid(),
      tooltipId: common_vendor.index.$u.guid(),
      // 初始时甚至为很大的值，让其移到屏幕外面，为了计算元素的尺寸
      tooltipTop: -1e4,
      // 气泡的位置信息
      tooltipInfo: {
        width: 0,
        left: 0
      },
      // 文本的位置信息
      textInfo: {
        width: 0,
        left: 0
      },
      // 三角形指示器的样式
      indicatorStyle: {},
      // 气泡在可能超出屏幕边沿范围时，重新定位后，距离屏幕边沿的距离
      screenGap: 12,
      // 三角形指示器的宽高，由于对元素进行了角度旋转，精确计算指示器位置时，需要用到其尺寸信息
      indicatorWidth: 14
    };
  },
  watch: {
    propsChange() {
      this.getElRect();
    }
  },
  computed: {
    // 特别处理H5的复制，因为H5浏览器是自带系统复制功能的，在H5环境
    // 当一些依赖参数变化时，需要重新计算气泡和指示器的位置信息
    propsChange() {
      return [this.text, this.buttons];
    },
    // 计算气泡和指示器的位置信息
    tooltipStyle() {
      const style = {
        transform: `translateY(${this.direction === "top" ? "-100%" : "100%"})`
      }, sys = common_vendor.index.$u.sys(), getPx = common_vendor.index.$u.getPx, addUnit = common_vendor.index.$u.addUnit;
      if (this.tooltipInfo.width / 2 > this.textInfo.left + this.textInfo.width / 2 - this.screenGap) {
        this.indicatorStyle = {};
        style.left = `-${addUnit(this.textInfo.left - this.screenGap)}`;
        this.indicatorStyle.left = addUnit(this.textInfo.width / 2 - getPx(style.left) - this.indicatorWidth / 2);
      } else if (this.tooltipInfo.width / 2 > sys.windowWidth - this.textInfo.right + this.textInfo.width / 2 - this.screenGap) {
        this.indicatorStyle = {};
        style.right = `-${addUnit(sys.windowWidth - this.textInfo.right - this.screenGap)}`;
        this.indicatorStyle.right = addUnit(this.textInfo.width / 2 - getPx(style.right) - this.indicatorWidth / 2);
      } else {
        const left = Math.abs(this.textInfo.width / 2 - this.tooltipInfo.width / 2);
        style.left = this.textInfo.width > this.tooltipInfo.width ? addUnit(left) : -addUnit(left);
        this.indicatorStyle = {};
      }
      if (this.direction === "top") {
        style.marginTop = "-10px";
        this.indicatorStyle.bottom = "-4px";
      } else {
        style.marginBottom = "-10px";
        this.indicatorStyle.top = "-4px";
      }
      return style;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getElRect();
    },
    // 长按触发事件
    async longpressHandler() {
      this.tooltipTop = 0;
      this.showTooltip = true;
    },
    // 点击透明遮罩
    overlayClickHandler() {
      this.showTooltip = false;
    },
    // 点击弹出按钮
    btnClickHandler(index) {
      this.showTooltip = false;
      this.$emit("click", this.showCopy ? index + 1 : index);
    },
    // 查询内容高度
    queryRect(ref) {
      return new Promise((resolve) => {
        this.$uGetRect(`#${ref}`).then((size) => {
          resolve(size);
        });
      });
    },
    // 元素尺寸
    getElRect() {
      this.showTooltip = true;
      this.tooltipTop = -1e4;
      common_vendor.index.$u.sleep(500).then(() => {
        this.queryRect(this.tooltipId).then((size) => {
          this.tooltipInfo = size;
          this.showTooltip = false;
        });
        this.queryRect(this.textId).then((size) => {
          this.textInfo = size;
        });
      });
    },
    // 复制文本到粘贴板
    setClipboardData() {
      this.showTooltip = false;
      this.$emit("click", 0);
      common_vendor.index.setClipboardData({
        // 优先使用copyText字段，如果没有，则默认使用text字段当做复制的内容
        data: this.copyText || this.text,
        success: () => {
          this.showToast && common_vendor.index.$u.toast("复制成功");
        },
        fail: () => {
          this.showToast && common_vendor.index.$u.toast("复制失败");
        },
        complete: () => {
          this.showTooltip = false;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_overlay2 = common_vendor.resolveComponent("u-overlay");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  (_easycom_u_overlay2 + _easycom_u_line2 + _easycom_u_transition2)();
}
const _easycom_u_overlay = () => "../u-overlay/u-overlay.js";
const _easycom_u_line = () => "../u-line/u-line.js";
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  (_easycom_u_overlay + _easycom_u_line + _easycom_u_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.overlayClickHandler),
    b: common_vendor.p({
      show: $data.showTooltip && $data.tooltipTop !== -1e4 && _ctx.overlay,
      customStyle: "backgroundColor: rgba(0, 0, 0, 0)"
    }),
    c: common_vendor.t(_ctx.text),
    d: $data.textId,
    e: $data.textId,
    f: common_vendor.o((...args) => $options.longpressHandler && $options.longpressHandler(...args)),
    g: _ctx.color,
    h: _ctx.bgColor && $data.showTooltip && $data.tooltipTop !== -1e4 ? _ctx.bgColor : "transparent",
    i: _ctx.showCopy || _ctx.buttons.length
  }, _ctx.showCopy || _ctx.buttons.length ? {
    j: common_vendor.s($data.indicatorStyle),
    k: common_vendor.s({
      width: _ctx.$u.addUnit($data.indicatorWidth),
      height: _ctx.$u.addUnit($data.indicatorWidth)
    })
  } : {}, {
    l: _ctx.showCopy
  }, _ctx.showCopy ? {
    m: common_vendor.o((...args) => $options.setClipboardData && $options.setClipboardData(...args))
  } : {}, {
    n: _ctx.showCopy && _ctx.buttons.length > 0
  }, _ctx.showCopy && _ctx.buttons.length > 0 ? {
    o: common_vendor.p({
      direction: "column",
      color: "#8d8e90",
      length: "18"
    })
  } : {}, {
    p: common_vendor.f(_ctx.buttons, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item),
        b: common_vendor.o(($event) => $options.btnClickHandler(index), index),
        c: index < _ctx.buttons.length - 1
      }, index < _ctx.buttons.length - 1 ? {
        d: "92dedddb-3-" + i0 + ",92dedddb-1",
        e: common_vendor.p({
          direction: "column",
          color: "#8d8e90",
          length: "18"
        })
      } : {}, {
        f: index
      });
    }),
    q: $data.tooltipId,
    r: $data.tooltipId,
    s: common_vendor.p({
      mode: "fade",
      show: $data.showTooltip,
      duration: "300",
      customStyle: {
        position: "absolute",
        top: _ctx.$u.addUnit($data.tooltipTop),
        zIndex: _ctx.zIndex,
        ...$options.tooltipStyle
      }
    }),
    t: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-92dedddb"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-tooltip/u-tooltip.vue"]]);
wx.createComponent(Component);
