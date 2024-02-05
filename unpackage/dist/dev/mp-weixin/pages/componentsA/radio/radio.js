"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 基本案列数据
      radiolist1: [
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
        },
        {
          name: "榴莲",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue1: "苹果",
      // 自定义形状数据
      radiolist2: [
        {
          name: "李白",
          disabled: false
        },
        {
          name: "韩信",
          disabled: false
        },
        {
          name: "马可波罗",
          disabled: false
        },
        {
          name: "百里守约",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue2: "李白",
      // 是否禁用数据
      radiolist3: [
        {
          name: "苹果",
          disabled: false
        },
        {
          name: "香蕉",
          disabled: false
        },
        {
          name: "菠萝",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue3: "苹果",
      // 是否禁止点击提示语选中单选框数据
      radiolist4: [
        {
          name: "3倍镜",
          disabled: false
        },
        {
          name: "4倍镜",
          disabled: false
        },
        {
          name: "6倍镜",
          disabled: false
        },
        {
          name: "8倍镜",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue4: "6倍镜",
      //自定义颜色数据
      radiolist5: [
        {
          name: "红色",
          disabled: false
        },
        {
          name: "绿色",
          disabled: false
        },
        {
          name: "蓝色",
          disabled: false
        },
        {
          name: "黄色",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue5: "绿色",
      //横向排列形式数据
      radiolist6: [
        {
          name: "妲己",
          disabled: false
        },
        {
          name: "虞姬",
          disabled: false
        },
        {
          name: "不知火舞",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue6: "妲己",
      //横向两端排列形式数据
      radiolist7: [
        {
          name: "可爱",
          disabled: false
        },
        {
          name: "一般",
          disabled: false
        },
        {
          name: "不可爱",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue7: "可爱"
    };
  },
  watch: {
    radiovalue1(newValue, oldValue) {
      console.log("v-model", newValue);
    }
  },
  methods: {
    groupChange(n) {
      console.log("groupChange", n);
    },
    radioChange(n) {
      console.log("radioChange", n);
    }
  }
};
if (!Array) {
  const _easycom_u_radio2 = common_vendor.resolveComponent("u-radio");
  const _easycom_u_radio_group2 = common_vendor.resolveComponent("u-radio-group");
  (_easycom_u_radio2 + _easycom_u_radio_group2)();
}
const _easycom_u_radio = () => "../../../uni_modules/uview-plus/components/u-radio/u-radio.js";
const _easycom_u_radio_group = () => "../../../uni_modules/uview-plus/components/u-radio-group/u-radio-group.js";
if (!Math) {
  (_easycom_u_radio + _easycom_u_radio_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.radiolist1, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o($options.radioChange, index),
        c: "06641145-1-" + i0 + ",06641145-0",
        d: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    b: common_vendor.o($options.groupChange),
    c: common_vendor.o(($event) => $data.radiovalue1 = $event),
    d: common_vendor.p({
      placement: "column",
      modelValue: $data.radiovalue1
    }),
    e: common_vendor.t($data.radiovalue1),
    f: common_vendor.f($data.radiolist2, (item, index, i0) => {
      return {
        a: index,
        b: "06641145-3-" + i0 + ",06641145-2",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    g: common_vendor.o(($event) => $data.radiovalue2 = $event),
    h: common_vendor.p({
      placement: "column",
      shape: "square",
      modelValue: $data.radiovalue2
    }),
    i: common_vendor.t($data.radiovalue2),
    j: common_vendor.f($data.radiolist3, (item, index, i0) => {
      return {
        a: index,
        b: "06641145-5-" + i0 + ",06641145-4",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name,
          disabled: !index
        })
      };
    }),
    k: common_vendor.o(($event) => $data.radiovalue3 = $event),
    l: common_vendor.p({
      placement: "column",
      modelValue: $data.radiovalue3
    }),
    m: common_vendor.f($data.radiolist4, (item, index, i0) => {
      return {
        a: index,
        b: "06641145-7-" + i0 + ",06641145-6",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    n: common_vendor.o(($event) => $data.radiovalue4 = $event),
    o: common_vendor.p({
      placement: "column",
      labelDisabled: true,
      modelValue: $data.radiovalue4
    }),
    p: common_vendor.f($data.radiolist5, (item, index, i0) => {
      return {
        a: index,
        b: "06641145-9-" + i0 + ",06641145-8",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    q: common_vendor.o(($event) => $data.radiovalue5 = $event),
    r: common_vendor.p({
      placement: "column",
      activeColor: "#19be6b",
      modelValue: $data.radiovalue5
    }),
    s: common_vendor.f($data.radiolist6, (item, index, i0) => {
      return {
        a: index,
        b: "06641145-11-" + i0 + ",06641145-10",
        c: common_vendor.p({
          customStyle: {
            marginRight: "16px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    t: common_vendor.o(($event) => $data.radiovalue6 = $event),
    v: common_vendor.p({
      placement: "row",
      modelValue: $data.radiovalue6
    }),
    w: common_vendor.f($data.radiolist7, (item, index, i0) => {
      return {
        a: index,
        b: "06641145-13-" + i0 + ",06641145-12",
        c: common_vendor.p({
          customStyle: {
            marginBottom: "16px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    x: common_vendor.o(($event) => $data.radiovalue7 = $event),
    y: common_vendor.p({
      borderBottom: true,
      placement: "column",
      iconPlacement: "right",
      modelValue: $data.radiovalue7
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsA/radio/radio.nvue"]]);
wx.createPage(MiniProgramPage);
