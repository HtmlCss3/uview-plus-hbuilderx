"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_classify_data = require("../../../common/classify.data.js");
const _sfc_main = {
  data() {
    return {
      tabbar: common_classify_data.classifyData,
      scrollTop: 0,
      //tab标题的滚动条位置
      current: 0,
      // 预设当前项的值
      menuHeight: 0,
      // 左边菜单的高度
      menuItemHeight: 0
      // 左边菜单item的高度
    };
  },
  computed: {},
  methods: {
    getImg() {
      return Math.floor(Math.random() * 35);
    },
    // 点击左边的栏目切换
    async swichMenu(index) {
      if (index == this.current)
        return;
      this.current = index;
      if (this.menuHeight == 0 || this.menuItemHeight == 0) {
        await this.getElRect("menu-scroll-view", "menuHeight");
        await this.getElRect("u-tab-item", "menuItemHeight");
      }
      this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
    },
    // 获取一个目标元素的高度
    getElRect(elClass, dataVal) {
      new Promise((resolve, reject) => {
        const query = common_vendor.index.createSelectorQuery().in(this);
        query.select("." + elClass).fields({ size: true }, (res) => {
          if (!res) {
            setTimeout(() => {
              this.getElRect(elClass);
            }, 10);
            return;
          }
          this[dataVal] = res.height;
        }).exec();
      });
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "search",
      color: "#909399",
      size: 28
    }),
    b: common_vendor.f($data.tabbar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.n($data.current == index ? "u-tab-item-active" : ""),
        d: index,
        e: common_vendor.o(($event) => $options.swichMenu(index), index)
      };
    }),
    c: $data.scrollTop,
    d: common_vendor.f($data.tabbar, (item, index, i0) => {
      return common_vendor.e({
        a: $data.current == index
      }, $data.current == index ? {
        b: common_vendor.t(item.name),
        c: common_vendor.f(item.foods, (item1, index1, i1) => {
          return {
            a: item1.icon,
            b: common_vendor.t(item1.name),
            c: index1
          };
        })
      } : {}, {
        d: index
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c04c40e2"], ["__file", "D:/project/mini-app/uview-plus/pages/template/mallMenu/index1.vue"]]);
wx.createPage(MiniProgramPage);
