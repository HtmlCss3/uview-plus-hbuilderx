"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      index: 0,
      loading: false,
      columnData: [
        ["深圳", "厦门", "上海", "拉萨"],
        ["得州", "华盛顿", "纽约", "阿拉斯加"]
      ],
      columns1: [
        ["中国", "美国", "日本"]
      ],
      columns2: [
        ["中国", "美国", "日本"]
      ],
      columns3: [
        ["中国", "美国"],
        ["深圳", "厦门", "上海", "拉萨"]
      ],
      columns4: [
        ["中国", "美国"],
        ["深圳", "厦门", "上海", "拉萨"]
      ],
      columns5: [
        ["中国", "美国", "日本"]
      ],
      columns6: [
        ["中国", "美国", "日本"]
      ],
      columns7: [
        [
          {
            label: "苹果",
            value: 1
          },
          {
            label: "橘子",
            value: 2
          },
          {
            label: "香蕉",
            value: 3
          }
        ]
      ],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      list: [
        {
          title: "基础使用",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/2.png"
        },
        {
          title: "设置默认项",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/5.png"
        },
        {
          title: "多列联动",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/1.png"
        },
        {
          title: "加载中状态(切换第一列)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/3.png"
        },
        {
          title: "设置标题",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/4.png"
        },
        {
          title: "允许点击遮罩关闭",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/6.png"
        }
      ]
    };
  },
  methods: {
    changeHandler1(e) {
      this.change(e);
      const {
        columnIndex,
        value,
        values,
        index,
        // 微信小程序无法将picker实例传出来，只能通过ref操作
        picker = this.$refs.uPicker3
      } = e;
      if (columnIndex === 0) {
        picker.setColumnValues(1, this.columnData[index]);
      }
    },
    changeHandler2(e) {
      this.change(e);
      const {
        columnIndex,
        value,
        values,
        index,
        // 微信小程序无法将picker实例传出来，只能通过ref操作
        picker = this.$refs.uPicker4
      } = e;
      if (columnIndex === 0) {
        this.loading = true;
        common_vendor.index.$u.sleep(1500).then(() => {
          picker.setColumnValues(1, this.columnData[index]);
          this.loading = false;
        });
      }
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    change(e) {
    },
    showPicker(index) {
      this.index = index + 1;
      this[`show${index + 1}`] = true;
    },
    close() {
      this[`show${this.index}`] = false;
    },
    confirm(e) {
      this[`show${this.index}`] = false;
    },
    cancel() {
      this[`show${this.index}`] = false;
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  (_easycom_u_navbar2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_picker2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_picker = () => "../../../uni_modules/uview-plus/components/u-picker/u-picker.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "选择器",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.showPicker(index), index),
        c: index,
        d: "113b9d8a-2-" + i0 + ",113b9d8a-1",
        e: common_vendor.p({
          title: item.title,
          isLink: true
        })
      };
    }),
    d: common_vendor.o($options.change),
    e: common_vendor.o($options.cancel),
    f: common_vendor.o($options.confirm),
    g: common_vendor.p({
      show: $data.show1,
      columns: $data.columns1
    }),
    h: common_vendor.o($options.cancel),
    i: common_vendor.o($options.confirm),
    j: common_vendor.o($options.change),
    k: common_vendor.p({
      show: $data.show2,
      columns: $data.columns2,
      defaultIndex: [1]
    }),
    l: common_vendor.sr("uPicker3", "113b9d8a-5"),
    m: common_vendor.o($options.cancel),
    n: common_vendor.o($options.confirm),
    o: common_vendor.o($options.changeHandler1),
    p: common_vendor.p({
      show: $data.show3,
      columns: $data.columns3
    }),
    q: common_vendor.sr("uPicker4", "113b9d8a-6"),
    r: common_vendor.o($options.cancel),
    s: common_vendor.o($options.confirm),
    t: common_vendor.o($options.changeHandler2),
    v: common_vendor.p({
      show: $data.show4,
      columns: $data.columns4,
      loading: $data.loading
    }),
    w: common_vendor.o($options.cancel),
    x: common_vendor.o($options.confirm),
    y: common_vendor.o($options.change),
    z: common_vendor.p({
      show: $data.show5,
      columns: $data.columns5,
      title: "标题太长就会显示省略号"
    }),
    A: common_vendor.o($options.cancel),
    B: common_vendor.o($options.confirm),
    C: common_vendor.o($options.close),
    D: common_vendor.o($options.change),
    E: common_vendor.p({
      show: $data.show6,
      columns: $data.columns6,
      closeOnClickOverlay: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/picker/picker.nvue"]]);
wx.createPage(MiniProgramPage);
