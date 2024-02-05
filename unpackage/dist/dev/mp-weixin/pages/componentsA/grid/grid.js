"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      baseList: [
        {
          name: "photo",
          title: "图片"
        },
        {
          name: "lock",
          title: "锁头"
        }
        // {
        // 	name: 'star',
        // 	title: '星星'
        // },
      ],
      list: [
        {
          name: "photo",
          title: "图片"
        },
        {
          name: "lock",
          title: "锁头"
        },
        {
          name: "star",
          title: "星星"
        },
        {
          name: "hourglass",
          title: "沙漏"
        },
        {
          name: "home",
          title: "首页"
        },
        {
          name: "volume",
          title: "音量"
        }
      ],
      swiperList: ["integral", "kefu-ermai", "coupon", "gift", "scan", "pause-circle", "wifi", "email", "list"]
    };
  },
  methods: {
    click(name) {
      console.log(name);
      this.$refs.uToast.success(`点击了第${name}个`);
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_toast2 = common_vendor.resolveComponent("u-toast");
  (_easycom_u_icon2 + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_toast2)();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_grid_item = () => "../../../uni_modules/uview-plus/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../../uni_modules/uview-plus/components/u-grid/u-grid.js";
const _easycom_u_toast = () => "../../../uni_modules/uview-plus/components/u-toast/u-toast.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_toast)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.baseList, (baseListItem, baseListIndex, i0) => {
      return {
        a: "6b8a8f86-2-" + i0 + "," + ("6b8a8f86-1-" + i0),
        b: common_vendor.p({
          customStyle: {
            paddingTop: "20rpx"
          },
          name: baseListItem.name,
          size: 22
        }),
        c: common_vendor.t(baseListItem.title),
        d: common_vendor.o(($event) => $options.click("test"), baseListIndex),
        e: baseListIndex,
        f: "6b8a8f86-1-" + i0 + ",6b8a8f86-0"
      };
    }),
    b: common_vendor.o($options.click),
    c: common_vendor.p({
      border: false,
      align: "center"
    }),
    d: common_vendor.f($data.list, (listItem, listIndex, i0) => {
      return {
        a: "6b8a8f86-5-" + i0 + "," + ("6b8a8f86-4-" + i0),
        b: common_vendor.p({
          customStyle: {
            paddingTop: "20rpx"
          },
          name: listItem.name,
          size: 22
        }),
        c: common_vendor.t(listItem.title),
        d: listIndex,
        e: "6b8a8f86-4-" + i0 + ",6b8a8f86-3"
      };
    }),
    e: common_vendor.p({
      customStyle: "padding-top: 10px; padding-bottom: 10px"
    }),
    f: common_vendor.p({
      border: true
    }),
    g: common_vendor.f($data.list, (listItem, listIndex, i0) => {
      return {
        a: "6b8a8f86-8-" + i0 + "," + ("6b8a8f86-7-" + i0),
        b: common_vendor.p({
          customStyle: {
            paddingTop: "20rpx"
          },
          name: listItem.name,
          size: 22
        }),
        c: common_vendor.t(listItem.title),
        d: listIndex,
        e: "6b8a8f86-7-" + i0 + ",6b8a8f86-6"
      };
    }),
    h: common_vendor.p({
      customStyle: "padding-top: 10px; padding-bottom: 10px"
    }),
    i: common_vendor.p({
      border: false,
      col: "4"
    }),
    j: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: "6b8a8f86-11-" + i0 + "," + ("6b8a8f86-10-" + i0),
        b: common_vendor.p({
          customStyle: {
            paddingTop: "20rpx"
          },
          name: item,
          size: 22
        }),
        c: common_vendor.t("宫格" + (index + 1)),
        d: index,
        e: "6b8a8f86-10-" + i0 + ",6b8a8f86-9",
        f: common_vendor.p({
          index
        })
      };
    }),
    k: common_vendor.p({
      border: true
    }),
    l: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: "6b8a8f86-14-" + i0 + "," + ("6b8a8f86-13-" + i0),
        b: common_vendor.p({
          customStyle: {
            paddingTop: "20rpx"
          },
          name: item,
          size: 22
        }),
        c: common_vendor.t("宫格" + (index + 1)),
        d: index,
        e: "6b8a8f86-13-" + i0 + ",6b8a8f86-12",
        f: common_vendor.p({
          index: index + 9
        })
      };
    }),
    m: common_vendor.p({
      border: true
    }),
    n: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: "6b8a8f86-17-" + i0 + "," + ("6b8a8f86-16-" + i0),
        b: common_vendor.p({
          customStyle: {
            paddingTop: "20rpx"
          },
          name: item,
          size: 22
        }),
        c: common_vendor.t("宫格" + (index + 1)),
        d: index,
        e: "6b8a8f86-16-" + i0 + ",6b8a8f86-15",
        f: common_vendor.p({
          index: index + 18
        })
      };
    }),
    o: common_vendor.p({
      border: true
    }),
    p: common_vendor.sr("uToast", "6b8a8f86-18")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/grid/grid.nvue"]]);
wx.createPage(MiniProgramPage);
