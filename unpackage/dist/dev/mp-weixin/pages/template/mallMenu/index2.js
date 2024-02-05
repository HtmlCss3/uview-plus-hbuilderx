"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_classify_data = require("../../../common/classify.data.js");
const _sfc_main = {
  data() {
    return {
      scrollTop: 0,
      //tab标题的滚动条位置
      oldScrollTop: 0,
      current: 0,
      // 预设当前项的值
      menuHeight: 0,
      // 左边菜单的高度
      menuItemHeight: 0,
      // 左边菜单item的高度
      itemId: "",
      // 栏目右边scroll-view用于滚动的id
      tabbar: common_classify_data.classifyData,
      menuItemPos: [],
      arr: [],
      scrollRightTop: 0,
      // 右边栏目scroll-view的滚动条高度
      timer: null
      // 定时器
    };
  },
  onLoad() {
  },
  onReady() {
    this.getMenuItemTop();
  },
  methods: {
    // 点击左边的栏目切换
    async swichMenu(index) {
      if (this.arr.length == 0) {
        await this.getMenuItemTop();
      }
      if (index == this.current)
        return;
      this.scrollRightTop = this.oldScrollTop;
      this.$nextTick(function() {
        this.scrollRightTop = this.arr[index];
        this.current = index;
        this.leftMenuStatus(index);
      });
    },
    // 获取一个目标元素的高度
    getElRect(elClass, dataVal) {
      new Promise((resolve, reject) => {
        const query = common_vendor.index.createSelectorQuery().in(this);
        query.select("." + elClass).fields({
          size: true
        }, (res) => {
          if (!res) {
            setTimeout(() => {
              this.getElRect(elClass);
            }, 10);
            return;
          }
          this[dataVal] = res.height;
          resolve();
        }).exec();
      });
    },
    // 观测元素相交状态
    async observer() {
      this.tabbar.map((val, index) => {
        let observer = common_vendor.index.createIntersectionObserver(this);
        observer.relativeTo(".right-box", {
          top: 0
        }).observe("#item" + index, (res) => {
          if (res.intersectionRatio > 0) {
            let id = res.id.substring(4);
            this.leftMenuStatus(id);
          }
        });
      });
    },
    // 设置左边菜单的滚动状态
    async leftMenuStatus(index) {
      this.current = index;
      if (this.menuHeight == 0 || this.menuItemHeight == 0) {
        await this.getElRect("menu-scroll-view", "menuHeight");
        await this.getElRect("u-tab-item", "menuItemHeight");
      }
      this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
    },
    // 获取右边菜单每个item到顶部的距离
    getMenuItemTop() {
      new Promise((resolve) => {
        let selectorQuery = common_vendor.index.createSelectorQuery();
        selectorQuery.selectAll(".class-item").boundingClientRect((rects) => {
          if (!rects.length) {
            setTimeout(() => {
              this.getMenuItemTop();
            }, 10);
            return;
          }
          rects.forEach((rect) => {
            this.arr.push(rect.top - rects[0].top);
            resolve();
          });
        }).exec();
      });
    },
    // 右边菜单滚动
    async rightScroll(e) {
      this.oldScrollTop = e.detail.scrollTop;
      if (this.arr.length == 0) {
        await this.getMenuItemTop();
      }
      if (this.timer)
        return;
      if (!this.menuHeight) {
        await this.getElRect("menu-scroll-view", "menuHeight");
      }
      setTimeout(() => {
        this.timer = null;
        let scrollHeight = e.detail.scrollTop + this.menuHeight / 2;
        for (let i = 0; i < this.arr.length; i++) {
          let height1 = this.arr[i];
          let height2 = this.arr[i + 1];
          if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
            this.leftMenuStatus(i);
            return;
          }
        }
      }, 10);
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
        d: common_vendor.o(($event) => $options.swichMenu(index), index)
      };
    }),
    c: $data.scrollTop,
    d: $data.itemId,
    e: common_vendor.f($data.tabbar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.f(item.foods, (item1, index1, i1) => {
          return {
            a: item1.icon,
            b: common_vendor.t(item1.name),
            c: index1
          };
        }),
        c: "item" + index,
        d: index
      };
    }),
    f: $data.scrollRightTop,
    g: common_vendor.o((...args) => $options.rightScroll && $options.rightScroll(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7600f3e1"], ["__file", "D:/project/mini-app/uview-plus/pages/template/mallMenu/index2.vue"]]);
wx.createPage(MiniProgramPage);
