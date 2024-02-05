"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_example_components_config = require("./components.config.js");
const _sfc_main = {
  data() {
    return {
      list: pages_example_components_config.list,
      desc: "uview-plus 是uView2.0的vue3版本，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水。"
    };
  },
  computed: {
    getIcon() {
      return (path) => {
        return "./static/uview/demo/" + path + ".png";
      };
    }
  },
  methods: {
    openPage(detail) {
      const path = detail.name;
      common_vendor.index.$u.route({
        url: path
      });
    }
  }
};
if (!Array) {
  const _easycom_page_nav2 = common_vendor.resolveComponent("page-nav");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  (_easycom_page_nav2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_gap2)();
}
const _easycom_page_nav = () => "../../components/page-nav/page-nav.js";
const _easycom_u_cell = () => "../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_gap = () => "../../uni_modules/uview-plus/components/u-gap/u-gap.js";
if (!Math) {
  (_easycom_page_nav + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_gap)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      desc: $data.desc
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.f(item.list, (item1, index1, i1) => {
          return {
            a: $options.getIcon(item1.icon),
            b: index1,
            c: common_vendor.o($options.openPage, index1),
            d: "a8a554ae-2-" + i0 + "-" + i1 + "," + ("a8a554ae-1-" + i0),
            e: common_vendor.p({
              titleStyle: {
                fontWeight: 500
              },
              title: item1.title,
              isLink: true,
              name: item1.path
            })
          };
        }),
        b: index,
        c: "a8a554ae-1-" + i0,
        d: common_vendor.p({
          ["title-bg-color"]: "rgb(243, 244, 246)",
          title: item.groupName
        })
      };
    }),
    c: common_vendor.p({
      height: "30",
      bgColor: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/example/components.nvue"]]);
wx.createPage(MiniProgramPage);
