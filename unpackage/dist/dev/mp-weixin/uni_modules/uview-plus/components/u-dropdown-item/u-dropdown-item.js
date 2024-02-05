"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uDropdownItem_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
require("../../libs/config/config.js");
require("../../libs/config/props/datetimePicker.js");
require("../../libs/config/props/icon.js");
require("../../libs/config/props/link.js");
require("../../libs/config/props/loadingIcon.js");
require("../../libs/config/props/navbar.js");
require("../../libs/config/color.js");
const _sfc_main = {
  name: "u-drawdown-item",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uDropdownItem_props.props],
  data() {
    return {
      show: false,
      top: "126px",
      // uni.createAnimation的导出数据
      animationData: {}
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    // 发生变化时，需要去更新父组件对应的值
    dataChange(newValue, oldValue) {
      this.updateParentData();
    }
  },
  computed: {
    // 监听对应变量的变化
    dataChange() {
      return [this.title, this.disabled];
    },
    style() {
      const style = {
        zIndex: 10071,
        position: "fixed",
        display: "flex",
        left: 0,
        right: 0
      };
      style.top = common_vendor.index.$u.addUnit(this.top);
      return style;
    }
  },
  methods: {
    init() {
      this.updateParentData();
    },
    // 更新父组件所需的数据
    updateParentData() {
      this.getParentData("u-dropdown");
      if (!this.parent)
        common_vendor.index.$u.error("u-dropdown-item必须配合u-dropdown使用");
      const menuIndex = this.parent.menuList.findIndex((item) => item.title === this.title);
      const menuContent = {
        title: this.title,
        disabled: this.disabled
      };
      if (menuIndex >= 0) {
        this.parent.menuList[menuIndex] = menuContent;
      } else {
        this.parent.menuList.push(menuContent);
      }
    },
    async setContentAnimate(height) {
      this.animating = true;
      const animation = common_vendor.index.createAnimation({
        timingFunction: "ease-in-out"
      });
      animation.height(height).step({
        duration: this.duration
      }).step();
      this.animationData = animation.export();
      common_vendor.index.$u.sleep(this.duration).then(() => {
        this.animating = false;
      });
    },
    overlayClick() {
      this.show = false;
      this.setContentAnimate(0);
    }
  }
};
if (!Array) {
  const _easycom_u_overlay2 = common_vendor.resolveComponent("u-overlay");
  _easycom_u_overlay2();
}
const _easycom_u_overlay = () => "../u-overlay/u-overlay.js";
if (!Math) {
  _easycom_u_overlay();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.overlayClick),
    b: common_vendor.p({
      customStyle: "top: 126px",
      show: $data.show,
      closeOnClickOverlay: _ctx.closeOnClickOverlay
    }),
    c: common_vendor.s($options.style),
    d: $data.animationData
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2ab01489"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-dropdown-item/u-dropdown-item.vue"]]);
wx.createComponent(Component);
