"use strict";
const common_vendor = require("../../../common/vendor.js");
const lineBg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
const _sfc_main = {
  mixins: [common_vendor.index.$u.mixin],
  data() {
    return {
      lineBg,
      list1: [{
        name: "关注"
      }, {
        name: "推荐"
      }, {
        name: "电影"
      }, {
        name: "科技"
      }, {
        name: "音乐"
      }, {
        name: "美食"
      }, {
        name: "文化"
      }, {
        name: "财经"
      }, {
        name: "手工"
      }],
      list2: [{
        name: "关注"
      }, {
        name: "推荐",
        badge: {
          isDot: true
        }
      }, {
        name: "电影",
        badge: {
          value: 5
        }
      }, {
        name: "科技"
      }, {
        name: "音乐"
      }, {
        name: "美食"
      }, {
        name: "文化"
      }, {
        name: "财经"
      }, {
        name: "手工"
      }],
      list3: [{
        name: "关注"
      }, {
        name: "推荐"
      }, {
        name: "电影",
        disabled: true
      }, {
        name: "科技"
      }, {
        name: "音乐"
      }, {
        name: "美食"
      }, {
        name: "文化"
      }, {
        name: "财经"
      }, {
        name: "手工"
      }],
      list4: [{
        name: "关注"
      }, {
        name: "推荐",
        badge: {
          isDot: true
        }
      }, {
        name: "电影"
      }, {
        name: "科技"
      }, {
        name: "音乐"
      }, {
        name: "美食"
      }, {
        name: "文化"
      }, {
        name: "财经"
      }, {
        name: "手工"
      }],
      list6: [
        {
          name: "关注"
        },
        {
          name: "推荐"
        },
        {
          name: "电影"
        },
        {
          name: "科技"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    click(item) {
      console.log("item", item);
    }
  }
};
if (!Array) {
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_sticky2 = common_vendor.resolveComponent("u-sticky");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_u_tabs2 + _easycom_u_sticky2 + _easycom_u_gap2 + _easycom_u_icon2)();
}
const _easycom_u_tabs = () => "../../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_sticky = () => "../../../uni_modules/uview-plus/components/u-sticky/u-sticky.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_u_tabs + _easycom_u_sticky + _easycom_u_gap + _easycom_u_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.click),
    b: common_vendor.p({
      list: $data.list1,
      current: 3
    }),
    c: common_vendor.p({
      list: $data.list1
    }),
    d: common_vendor.p({
      bgColor: "#fff"
    }),
    e: common_vendor.p({
      height: "23",
      bgColor: "#fff"
    }),
    f: common_vendor.p({
      list: $data.list2
    }),
    g: common_vendor.p({
      list: $data.list6,
      scrollable: false
    }),
    h: common_vendor.p({
      list: $data.list3
    }),
    i: common_vendor.p({
      list: $data.list4,
      lineWidth: "30",
      lineColor: "#f56c6c",
      activeStyle: {
        color: "#303133",
        fontWeight: "bold",
        transform: "scale(1.05)"
      },
      inactiveStyle: {
        color: "#606266",
        transform: "scale(1)"
      },
      itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
    }),
    j: common_vendor.p({
      list: $data.list4,
      lineWidth: "20",
      lineHeight: "7",
      lineColor: `url(${$data.lineBg}) 100% 100%`,
      activeStyle: {
        color: "#303133",
        fontWeight: "bold",
        transform: "scale(1.05)"
      },
      inactiveStyle: {
        color: "#606266",
        transform: "scale(1)"
      },
      itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
    }),
    k: common_vendor.p({
      name: "list",
      size: "21",
      bold: true
    }),
    l: common_vendor.o(($event) => _ctx.$u.toast("插槽被点击")),
    m: common_vendor.p({
      list: $data.list1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/tabs/tabs.nvue"]]);
wx.createPage(MiniProgramPage);
