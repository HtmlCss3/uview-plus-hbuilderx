"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_example_template_config = require("./template.config.js");
const _sfc_main = {
  data() {
    return {
      list: pages_example_template_config.list
      // desc: '收集众多的常用页面和布局，减少开发者的重复工作，让你专注逻辑，事半功倍'
    };
  },
  computed: {
    getIcon() {
      return (path) => {
        return "./static/uview/demo/" + path + ".png";
      };
    },
    desc() {
      return this.$t("template.desc");
    }
  },
  onShow() {
    common_vendor.index.setNavigationBarTitle({
      title: this.$t("nav.template")
    });
  },
  methods: {
    openPage(path) {
      this.$u.route({
        url: path.indexOf("/page") == 0 ? path : "/pages/template/" + path + "/index"
      });
    },
    getGroupTitle(item) {
      return this.$i18n.locale == "zh-Hans" ? item.groupName : item.groupName_en;
    },
    getFieldTitle(item) {
      return this.$i18n.locale == "zh-Hans" ? item.title : item.title_en;
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
      desc: $options.desc,
      title: "nav.template"
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.f(item.list, (item1, index1, i1) => {
          return {
            a: $options.getIcon(item1.icon),
            b: common_vendor.o(($event) => $options.openPage(item1.path), index1),
            c: index1,
            d: "5913ff49-2-" + i0 + "-" + i1 + "," + ("5913ff49-1-" + i0),
            e: common_vendor.p({
              titleStyle: {
                fontWeight: 500
              },
              title: $options.getFieldTitle(item1)
            })
          };
        }),
        b: index,
        c: "5913ff49-1-" + i0,
        d: common_vendor.p({
          ["title-bg-color"]: "rgb(243, 244, 246)",
          title: $options.getGroupTitle(item)
        })
      };
    }),
    c: common_vendor.p({
      height: "70"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5913ff49"], ["__file", "D:/project/mini-app/uview-plus/pages/example/template.vue"]]);
wx.createPage(MiniProgramPage);
