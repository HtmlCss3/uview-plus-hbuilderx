"use strict";
const common_province = require("../../../common/province.js");
const common_city = require("../../../common/city.js");
const common_area = require("../../../common/area.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "u-city-select",
  props: {
    // 通过双向绑定控制组件的弹出与收起
    modelValue: {
      type: Boolean,
      default: false
    },
    // 默认显示的地区，可传类似["河北省", "秦皇岛市", "北戴河区"]
    defaultRegion: {
      type: Array,
      default() {
        return [];
      }
    },
    // 默认显示地区的编码，defaultRegion和areaCode同时存在，areaCode优先，可传类似["13", "1303", "130304"]
    areaCode: {
      type: Array,
      default() {
        return [];
      }
    },
    // 是否允许通过点击遮罩关闭Picker
    maskCloseAble: {
      type: Boolean,
      default: true
    },
    // 弹出的z-index值
    zIndex: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      cityValue: "",
      isChooseP: false,
      //是否已经选择了省
      province: 0,
      //省级下标
      provinces: common_province.provinceData,
      isChooseC: false,
      //是否已经选择了市
      city: 0,
      //市级下标
      citys: common_city.cityData[0],
      isChooseA: false,
      //是否已经选择了区
      area: 0,
      //区级下标
      areas: common_area.areaData[0][0],
      tabsIndex: 0
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    isChange() {
      return this.tabsIndex > 1;
    },
    genTabsList() {
      let tabsList = [{
        name: "请选择"
      }];
      if (this.isChooseP) {
        console.log(this.province);
        tabsList[0]["name"] = this.provinces[this.province]["label"];
        tabsList[1] = {
          name: "请选择"
        };
      }
      if (this.isChooseC) {
        tabsList[1]["name"] = this.citys[this.city]["label"];
        tabsList[2] = {
          name: "请选择"
        };
      }
      if (this.isChooseA) {
        tabsList[2]["name"] = this.areas[this.area]["label"];
      }
      return tabsList;
    },
    uZIndex() {
      return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
    }
  },
  emits: ["city-change"],
  methods: {
    init() {
      if (this.areaCode.length == 3) {
        this.setProvince("", this.areaCode[0]);
        this.setCity("", this.areaCode[1]);
        this.setArea("", this.areaCode[2]);
      } else if (this.defaultRegion.length == 3) {
        this.setProvince(this.defaultRegion[0], "");
        this.setCity(this.defaultRegion[1], "");
        this.setArea(this.defaultRegion[2], "");
      }
    },
    setProvince(label = "", value = "") {
      this.provinces.map((v, k) => {
        if (value ? v.value == value : v.label == label) {
          this.provinceChange(k);
        }
      });
    },
    setCity(label = "", value = "") {
      this.citys.map((v, k) => {
        if (value ? v.value == value : v.label == label) {
          this.cityChange(k);
        }
      });
    },
    setArea(label = "", value = "") {
      this.areas.map((v, k) => {
        if (value ? v.value == value : v.label == label) {
          this.isChooseA = true;
          this.area = k;
        }
      });
    },
    close() {
      this.$emit("update:modelValue", false);
    },
    tabsChange(index) {
      this.tabsIndex = index;
    },
    provinceChange(index) {
      this.isChooseP = true;
      this.isChooseC = false;
      this.isChooseA = false;
      this.province = index;
      this.citys = common_city.cityData[index];
      this.tabsIndex = 1;
    },
    cityChange(index) {
      this.isChooseC = true;
      this.isChooseA = false;
      this.city = index;
      this.areas = common_area.areaData[this.province][index];
      this.tabsIndex = 2;
    },
    areaChange(index) {
      this.isChooseA = true;
      this.area = index;
      let result = {};
      result.province = this.provinces[this.province];
      result.city = this.citys[this.city];
      result.area = this.areas[this.area];
      this.$emit("city-change", result);
      this.close();
    }
  }
};
if (!Array) {
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_tabs2 + _easycom_u_icon2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_popup2)();
}
const _easycom_u_tabs = () => "../../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_popup = () => "../../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_tabs + _easycom_u_icon + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.modelValue
  }, $props.modelValue ? {
    b: common_vendor.sr("tabs", "5211b329-1,5211b329-0"),
    c: common_vendor.o($options.tabsChange),
    d: common_vendor.p({
      list: $options.genTabsList,
      scrollable: true,
      current: $data.tabsIndex
    })
  } : {}, {
    e: common_vendor.f($data.provinces, (item, index, i0) => {
      return common_vendor.e({
        a: $data.isChooseP && $data.province === index
      }, $data.isChooseP && $data.province === index ? {
        b: "5211b329-4-" + i0 + "," + ("5211b329-3-" + i0),
        c: common_vendor.p({
          size: "17",
          name: "checkbox-mark"
        })
      } : {}, {
        d: index,
        e: common_vendor.o(($event) => $options.provinceChange(index), index),
        f: "5211b329-3-" + i0 + ",5211b329-2",
        g: common_vendor.p({
          title: item.label,
          arrow: false,
          index
        })
      });
    }),
    f: $data.isChooseP
  }, $data.isChooseP ? {
    g: common_vendor.f($data.citys, (item, index, i0) => {
      return common_vendor.e({
        a: $data.isChooseC && $data.city === index
      }, $data.isChooseC && $data.city === index ? {
        b: "5211b329-7-" + i0 + "," + ("5211b329-6-" + i0),
        c: common_vendor.p({
          size: "17",
          name: "checkbox-mark"
        })
      } : {}, {
        d: index,
        e: common_vendor.o(($event) => $options.cityChange(index), index),
        f: "5211b329-6-" + i0 + ",5211b329-5",
        g: common_vendor.p({
          title: item.label,
          arrow: false,
          index
        })
      });
    })
  } : {}, {
    h: $data.isChooseC
  }, $data.isChooseC ? {
    i: common_vendor.f($data.areas, (item, index, i0) => {
      return common_vendor.e({
        a: $data.isChooseA && $data.area === index
      }, $data.isChooseA && $data.area === index ? {
        b: "5211b329-10-" + i0 + "," + ("5211b329-9-" + i0),
        c: common_vendor.p({
          size: "17",
          name: "checkbox-mark"
        })
      } : {}, {
        d: index,
        e: common_vendor.o(($event) => $options.areaChange(index), index),
        f: "5211b329-9-" + i0 + ",5211b329-8",
        g: common_vendor.p({
          title: item.label,
          arrow: false,
          index
        })
      });
    })
  } : {}, {
    j: $options.isChange ? 1 : "",
    k: common_vendor.o($options.close),
    l: common_vendor.p({
      show: $props.modelValue,
      mode: "bottom",
      popup: false,
      mask: true,
      closeable: true,
      ["safe-area-inset-bottom"]: true,
      ["close-icon-color"]: "#ffffff",
      ["z-index"]: $options.uZIndex,
      maskCloseAble: $props.maskCloseAble
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/template/citySelect/u-city-select.vue"]]);
wx.createComponent(Component);
