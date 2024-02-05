"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 基本案列数据
      checkboxList1: [
        {
          name: "苹果",
          disabled: false
        },
        {
          name: "香蕉",
          disabled: false
        },
        {
          name: "橙子",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue1: ["苹果", "橙子"],
      // 自定义形状数据
      checkboxList2: [
        {
          name: "西游记",
          disabled: false
        },
        {
          name: "红楼梦",
          disabled: false
        },
        {
          name: "三国演义",
          disabled: false
        },
        {
          name: "水浒传",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue2: ["西游记", "红楼梦", "三国演义", "水浒传"],
      // 是否禁用数据
      checkboxList3: [
        {
          name: "冬瓜",
          disabled: false
        },
        {
          name: "西瓜",
          disabled: false
        },
        {
          name: "黄瓜",
          disabled: false
        },
        {
          name: "傻瓜",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue3: ["傻瓜"],
      // 是否禁止点击提示语选中复选框数据
      checkboxList4: [
        {
          name: "黄庭坚",
          disabled: false
        },
        {
          name: "欧阳修",
          disabled: false
        },
        {
          name: "苏小宝",
          disabled: false
        },
        {
          name: "王安石",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue4: ["黄庭坚", "欧阳修", "王安石"],
      //自定义颜色数据
      checkboxList5: [
        {
          name: "红色",
          disabled: false
        },
        {
          name: "黄色",
          disabled: false
        },
        {
          name: "绿色",
          disabled: false
        },
        {
          name: "蓝色",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue5: ["绿色"],
      //横向排列形式数据
      checkboxList6: [
        {
          name: "小鸟",
          disabled: false
        },
        {
          name: "游艇",
          disabled: false
        },
        {
          name: "轮船",
          disabled: false
        },
        {
          name: "飞机",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue6: ["游艇", "轮船"],
      //横向两端排列形式
      checkboxList7: [
        {
          name: "汽车",
          disabled: false
        },
        {
          name: "蒸汽机",
          disabled: false
        },
        {
          name: "猪肉",
          disabled: false
        },
        {
          name: "抄手",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue7: ["汽车", "蒸汽机"]
    };
  },
  watch: {
    checkboxValue1(newValue, oldValue) {
    }
  },
  methods: {
    checkboxChange(n) {
    }
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  (_easycom_u_checkbox2 + _easycom_u_checkbox_group2)();
}
const _easycom_u_checkbox = () => "../../../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_checkbox_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.checkboxList1, (item, index, i0) => {
      return {
        a: index,
        b: "2a2db3c6-1-" + i0 + ",2a2db3c6-0",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    b: common_vendor.o($options.checkboxChange),
    c: common_vendor.o(($event) => $data.checkboxValue1 = $event),
    d: common_vendor.p({
      placement: "column",
      modelValue: $data.checkboxValue1
    }),
    e: common_vendor.f($data.checkboxList2, (item, index, i0) => {
      return {
        a: index,
        b: "2a2db3c6-3-" + i0 + ",2a2db3c6-2",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    f: common_vendor.o($options.checkboxChange),
    g: common_vendor.o(($event) => $data.checkboxValue2 = $event),
    h: common_vendor.p({
      placement: "column",
      shape: "square",
      modelValue: $data.checkboxValue2
    }),
    i: common_vendor.f($data.checkboxList3, (item, index, i0) => {
      return {
        a: index,
        b: "2a2db3c6-5-" + i0 + ",2a2db3c6-4",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name,
          disabled: index === 0
        })
      };
    }),
    j: common_vendor.o($options.checkboxChange),
    k: common_vendor.o(($event) => $data.checkboxValue3 = $event),
    l: common_vendor.p({
      placement: "column",
      modelValue: $data.checkboxValue3
    }),
    m: common_vendor.f($data.checkboxList4, (item, index, i0) => {
      return {
        a: index,
        b: "2a2db3c6-7-" + i0 + ",2a2db3c6-6",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    n: common_vendor.o($options.checkboxChange),
    o: common_vendor.o(($event) => $data.checkboxValue4 = $event),
    p: common_vendor.p({
      placement: "column",
      labelDisabled: true,
      modelValue: $data.checkboxValue4
    }),
    q: common_vendor.f($data.checkboxList5, (item, index, i0) => {
      return {
        a: index,
        b: "2a2db3c6-9-" + i0 + ",2a2db3c6-8",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    r: common_vendor.o($options.checkboxChange),
    s: common_vendor.o(($event) => $data.checkboxValue5 = $event),
    t: common_vendor.p({
      placement: "column",
      activeColor: "#19be6b",
      modelValue: $data.checkboxValue5
    }),
    v: common_vendor.f($data.checkboxList6, (item, index, i0) => {
      return {
        a: index,
        b: "2a2db3c6-11-" + i0 + ",2a2db3c6-10",
        c: common_vendor.p({
          customStyle: {
            marginRight: "16px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    w: common_vendor.o($options.checkboxChange),
    x: common_vendor.o(($event) => $data.checkboxValue6 = $event),
    y: common_vendor.p({
      modelValue: $data.checkboxValue6
    }),
    z: common_vendor.f($data.checkboxList7, (item, index, i0) => {
      return {
        a: index,
        b: "2a2db3c6-13-" + i0 + ",2a2db3c6-12",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "16px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    A: common_vendor.o($options.checkboxChange),
    B: common_vendor.o(($event) => $data.checkboxValue7 = $event),
    C: common_vendor.p({
      borderBottom: true,
      placement: "column",
      iconPlacement: "right",
      modelValue: $data.checkboxValue7
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/checkbox/checkbox.nvue"]]);
wx.createPage(MiniProgramPage);
