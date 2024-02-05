"use strict";
const pages_componentsB_parse_content = require("./content.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      content: "",
      tagStyle: {
        table: "box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;",
        th: "border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;",
        td: "border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;",
        li: "margin: 5px 0;"
      }
    };
  },
  onLoad() {
    setTimeout(() => {
      this.content = pages_componentsB_parse_content.parseContent;
    }, 200);
  },
  methods: {
    load() {
    },
    ready() {
    },
    imgTap() {
    },
    linkTap() {
    }
  }
};
if (!Array) {
  const _easycom_u_parse2 = common_vendor.resolveComponent("u-parse");
  _easycom_u_parse2();
}
const _easycom_u_parse = () => "../../../uni_modules/uview-plus/components/u-parse/u-parse.js";
if (!Math) {
  _easycom_u_parse();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.load),
    b: common_vendor.o($options.ready),
    c: common_vendor.o($options.imgTap),
    d: common_vendor.o($options.linkTap),
    e: common_vendor.p({
      ["container-style"]: "padding: 20px",
      content: $data.content,
      domain: "https://6874-html-foe72-1259071903.tcb.qcloud.la/demo",
      ["lazy-load"]: true,
      ["scroll-table"]: true,
      selectable: true,
      ["use-anchor"]: true,
      ["tag-style"]: $data.tagStyle
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/parse/parse.nvue"]]);
wx.createPage(MiniProgramPage);
