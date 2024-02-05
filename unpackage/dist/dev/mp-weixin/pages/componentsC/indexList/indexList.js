"use strict";
const common_vendor = require("../../../common/vendor.js");
const indexList = () => {
  const indexList2 = [];
  const charCodeOfA = "A".charCodeAt(0);
  indexList2.push("↑");
  indexList2.push("☆");
  for (let i = 0; i < 26; i++) {
    indexList2.push(String.fromCharCode(charCodeOfA + i));
  }
  indexList2.push("#");
  return indexList2;
};
const _sfc_main = {
  data() {
    return {
      indexList: indexList(),
      urls: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg"
      ],
      names: [
        "勇往无敌",
        "疯狂的迪飙",
        "磊爱可",
        "梦幻梦幻梦",
        "枫中飘瓢",
        "飞翔天使",
        "曾经第一",
        "追风幻影族长",
        "麦小姐",
        "胡格罗雅",
        "Red磊磊",
        "乐乐立立",
        "青龙爆风",
        "跑跑卡叮车",
        "山里狼",
        "supersonic超"
      ]
    };
  },
  computed: {
    itemArr() {
      return this.indexList.map((item) => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push({
            name: this.names[common_vendor.index.$u.random(0, this.names.length - 1)],
            url: this.urls[common_vendor.index.$u.random(0, this.urls.length - 1)]
          });
        }
        return arr;
      });
    }
  }
};
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  const _easycom_u_index_anchor2 = common_vendor.resolveComponent("u-index-anchor");
  const _easycom_u_index_item2 = common_vendor.resolveComponent("u-index-item");
  const _easycom_u_index_list2 = common_vendor.resolveComponent("u-index-list");
  (_easycom_u_avatar2 + _easycom_u_line2 + _easycom_u_index_anchor2 + _easycom_u_index_item2 + _easycom_u_index_list2)();
}
const _easycom_u_avatar = () => "../../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_line = () => "../../../uni_modules/uview-plus/components/u-line/u-line.js";
const _easycom_u_index_anchor = () => "../../../uni_modules/uview-plus/components/u-index-anchor/u-index-anchor.js";
const _easycom_u_index_item = () => "../../../uni_modules/uview-plus/components/u-index-item/u-index-item.js";
const _easycom_u_index_list = () => "../../../uni_modules/uview-plus/components/u-index-list/u-index-list.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_u_line + _easycom_u_index_anchor + _easycom_u_index_item + _easycom_u_index_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      shape: "square",
      size: "35",
      icon: "man-add-fill",
      fontSize: "26",
      randomBgColor: true
    }),
    b: common_vendor.p({
      shape: "square",
      size: "35",
      icon: "tags-fill",
      fontSize: "26",
      randomBgColor: true
    }),
    c: common_vendor.p({
      shape: "square",
      size: "35",
      icon: "chrome-circle-fill",
      fontSize: "26",
      randomBgColor: true
    }),
    d: common_vendor.p({
      shape: "square",
      size: "35",
      icon: "qq-fill",
      fontSize: "26",
      randomBgColor: true
    }),
    e: common_vendor.f($options.itemArr, (item, index, i0) => {
      return {
        a: "3e42ded9-10-" + i0 + "," + ("3e42ded9-9-" + i0),
        b: common_vendor.p({
          text: $data.indexList[index]
        }),
        c: common_vendor.f(item, (item1, index1, i1) => {
          return {
            a: item1.url,
            b: common_vendor.t(item1.name),
            c: "3e42ded9-11-" + i0 + "-" + i1 + "," + ("3e42ded9-9-" + i0),
            d: index1
          };
        }),
        d: "3e42ded9-9-" + i0 + ",3e42ded9-0",
        e: index
      };
    }),
    f: common_vendor.p({
      indexList: $data.indexList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/indexList/indexList.nvue"]]);
wx.createPage(MiniProgramPage);
