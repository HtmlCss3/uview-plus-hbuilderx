"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    const baseUrl = "http://cdn.uviewui.com/uview/empty/";
    return {
      mode: "car",
      imgList: {
        car: baseUrl + "car.png",
        address: baseUrl + "address.png",
        comment: baseUrl + "comment.png",
        coupon: baseUrl + "coupon.png",
        data: baseUrl + "data.png",
        history: baseUrl + "history.png",
        list: baseUrl + "list.png",
        message: baseUrl + "message.png",
        news: baseUrl + "news.png",
        order: baseUrl + "order.png",
        page: baseUrl + "page.png",
        permission: baseUrl + "permission.png",
        search: baseUrl + "search.png",
        wifi: baseUrl + "wifi.png"
      },
      list: [
        {
          imgName: "car",
          title: "购物车为空(同时传入slot)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/car.png"
        },
        {
          imgName: "data",
          title: "数据为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/data.png"
        },
        {
          imgName: "comment",
          title: "评论为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/comment.png"
        },
        {
          imgName: "coupon",
          title: "没有优惠券",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/coupon.png"
        },
        {
          imgName: "history",
          title: "无历史记录",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/history.png"
        },
        {
          imgName: "list",
          title: "列表为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/list.png"
        },
        {
          imgName: "message",
          title: "消息列表为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/message.png"
        },
        {
          imgName: "news",
          title: "无新闻列表",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/news.png"
        },
        {
          imgName: "order",
          title: "订单为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/order.png"
        },
        {
          imgName: "page",
          title: "页面不存在",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/page.png"
        },
        {
          imgName: "permission",
          title: "无权限",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/permission.png"
        },
        {
          imgName: "search",
          title: "没有搜索结果",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/search.png"
        },
        {
          imgName: "wifi",
          title: "没有WiFi",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/wifi.png"
        }
      ]
    };
  },
  methods: {
    //点击改变图片
    openImg(imgName) {
      this.mode = imgName;
    }
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_empty2 = common_vendor.resolveComponent("u-empty");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  (_easycom_u_button2 + _easycom_u_empty2 + _easycom_u_cell2)();
}
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_empty = () => "../../../uni_modules/uview-plus/components/u-empty/u-empty.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
if (!Math) {
  (_easycom_u_button + _easycom_u_empty + _easycom_u_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.mode == "car"
  }, $data.mode == "car" ? {
    b: "10px",
    c: common_vendor.p({
      size: "small",
      type: "primary",
      text: "查看更多商品"
    })
  } : {}, {
    d: common_vendor.p({
      mode: $data.mode,
      icon: $data.imgList[$data.mode]
    }),
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.openImg(item.imgName), index),
        c: index,
        d: "a78ceabe-2-" + i0,
        e: common_vendor.p({
          titleStyle: {
            fontWeight: 500
          },
          title: item.title,
          isLink: true
        })
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/empty/empty.nvue"]]);
wx.createPage(MiniProgramPage);
