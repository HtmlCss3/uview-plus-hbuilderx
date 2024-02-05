"use strict";
const uni_modules_uviewPlus_components_uDropdown_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/config/config.js");
require("../../libs/config/props/datetimePicker.js");
require("../../libs/config/props/icon.js");
require("../../libs/config/props/link.js");
require("../../libs/config/props/loadingIcon.js");
require("../../libs/config/props/navbar.js");
require("../../libs/config/color.js");
const _sfc_main = {
  name: "u-dropdown",
  mixins: [uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uDropdown_props.props],
  data() {
    return {
      // �˵�����
      menuList: [],
      current: 0
    };
  },
  computed: {},
  created() {
    this.children = [];
  },
  methods: {
    clickHandler(item, index) {
      this.children.map((child) => {
        if (child.title === item.title) {
          child.$emit("click");
          child.setContentAnimate(child.show ? 0 : 300);
          child.show = !child.show;
        } else {
          child.show = false;
          child.setContentAnimate(0);
        }
      });
    },
    // ��ȡ��ǩ�ĳߴ�λ��
    queryRect(el) {
      return new Promise((resolve) => {
        this.$uGetRect(`.${el}`).then((size) => {
          resolve(size);
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.menuList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.s(index === $data.current ? _ctx.activeStyle : _ctx.inactiveStyle),
        c: "5fe709e2-0-" + i0,
        d: common_vendor.n(index === $data.current && "u-dropdown__menu__item__content__arrow--rotate"),
        e: index,
        f: common_vendor.o(($event) => $options.clickHandler(item, index), index)
      };
    }),
    b: common_vendor.p({
      name: _ctx.menuIcon,
      size: _ctx.$u.addUnit(_ctx.menuIconSize)
    }),
    c: _ctx.$u.addUnit(_ctx.height)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-dropdown/u-dropdown.vue"]]);
wx.createComponent(Component);
