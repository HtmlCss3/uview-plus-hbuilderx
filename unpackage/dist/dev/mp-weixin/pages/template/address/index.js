"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      siteList: []
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      this.siteList = [
        {
          id: 1,
          name: "游X",
          phone: "183****5523",
          tag: [
            {
              tagText: "默认"
            },
            {
              tagText: "家"
            }
          ],
          site: "广东省深圳市宝安区 自由路66号"
        },
        {
          id: 2,
          name: "李XX",
          phone: "183****5555",
          tag: [
            {
              tagText: "公司"
            }
          ],
          site: "广东省深圳市宝安区 翻身路xx号"
        },
        {
          id: 3,
          name: "王YY",
          phone: "153****5555",
          tag: [],
          site: "广东省深圳市宝安区 平安路13号"
        }
      ];
    },
    toAddSite() {
      common_vendor.index.navigateTo({
        url: "/pages/template/address/addSite"
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
    a: common_vendor.f($data.siteList, (res, index, i0) => {
      return {
        a: common_vendor.t(res.name),
        b: common_vendor.t(res.phone),
        c: common_vendor.f(res.tag, (item, index2, i1) => {
          return {
            a: common_vendor.t(item.tagText),
            b: index2,
            c: item.tagText == "默认" ? 1 : ""
          };
        }),
        d: "d174db2d-0-" + i0,
        e: res.id
      };
    }),
    b: common_vendor.p({
      name: "edit-pen",
      size: 40,
      color: "#999999"
    }),
    c: common_vendor.p({
      name: "plus",
      color: "#ffffff",
      size: 30
    }),
    d: common_vendor.o((...args) => $options.toAddSite && $options.toAddSite(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d174db2d"], ["__file", "D:/project/mini-app/uview-plus/pages/template/address/index.vue"]]);
wx.createPage(MiniProgramPage);
