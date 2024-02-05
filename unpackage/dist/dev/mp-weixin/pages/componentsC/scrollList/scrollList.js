"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goodsBaseUrl: "https://cdn.uviewui.com/uview/goods/",
      menuBaseUrl: "https://cdn.uviewui.com/uview/menu/",
      goodsArr: [
        {
          price: "230.5",
          thumbnail: "1.jpg"
        },
        {
          price: "74.1",
          thumbnail: "2.jpg"
        },
        {
          price: "8457",
          thumbnail: "6.jpg"
        },
        {
          price: "1442",
          thumbnail: "5.jpg"
        },
        {
          price: "541",
          thumbnail: "2.jpg"
        },
        {
          price: "234",
          thumbnail: "3.jpg"
        },
        {
          price: "562",
          thumbnail: "4.jpg"
        },
        {
          price: "251.5",
          thumbnail: "1.jpg"
        }
      ],
      menuArr: [
        [
          {
            name: "天猫新品",
            icon: "11.png"
          },
          {
            name: "今日爆款",
            icon: "9.png"
          },
          {
            name: "天猫国际",
            icon: "17.png"
          },
          {
            name: "饿了么",
            icon: "6.png"
          },
          {
            name: "天猫超市",
            icon: "11.png"
          },
          {
            name: "分类",
            icon: "2.png"
          },
          {
            name: "天猫美食",
            icon: "3.png"
          },
          {
            name: "阿里健康",
            icon: "12.png"
          },
          {
            name: "口碑生活",
            icon: "7.png"
          }
        ],
        [
          {
            name: "充值中心",
            icon: "8.png"
          },
          {
            name: "机票酒店",
            icon: "10.png"
          },
          {
            name: "金币庄园",
            icon: "18.png"
          },
          {
            name: "阿里拍卖",
            icon: "15.png"
          },
          {
            name: "淘宝吃货",
            icon: "16.png"
          },
          {
            name: "闲鱼",
            icon: "4.png"
          },
          {
            name: "会员中心",
            icon: "6.png"
          },
          {
            name: "造点新货",
            icon: "13.png"
          },
          {
            name: "土货鲜食",
            icon: "14.png"
          }
        ]
      ]
    };
  },
  methods: {
    showMore() {
      common_vendor.index.$u.toast("查看更多");
    },
    left() {
      console.log("left");
    },
    right() {
      console.log("right");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_scroll_list2 = common_vendor.resolveComponent("u-scroll-list");
  (_easycom_u_icon2 + _easycom_u_scroll_list2)();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_scroll_list = () => "../../../uni_modules/uview-plus/components/u-scroll-list/u-scroll-list.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_scroll_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodsArr, (item, index, i0) => {
      return {
        a: $data.goodsBaseUrl + item.thumbnail,
        b: common_vendor.t(item.price),
        c: index,
        d: common_vendor.n(index === 9 && "scroll-list__goods-item--no-margin-right")
      };
    }),
    b: common_vendor.p({
      name: "arrow-leftward",
      color: "#f56c6c",
      size: "12"
    }),
    c: common_vendor.o((...args) => $options.showMore && $options.showMore(...args)),
    d: common_vendor.o($options.right),
    e: common_vendor.o($options.left),
    f: common_vendor.p({
      indicatorColor: "#fff0f0",
      indicatorActiveColor: "#f56c6c"
    }),
    g: common_vendor.f($data.menuArr, (item, index, i0) => {
      return {
        a: common_vendor.f(item, (item1, index1, i1) => {
          return {
            a: $data.menuBaseUrl + item1.icon,
            b: common_vendor.t(item1.name),
            c: index1,
            d: common_vendor.n(index1 === item.length - 1 && "scroll-list__line__item--no-margin-right")
          };
        }),
        b: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/scrollList/scrollList.nvue"]]);
wx.createPage(MiniProgramPage);
