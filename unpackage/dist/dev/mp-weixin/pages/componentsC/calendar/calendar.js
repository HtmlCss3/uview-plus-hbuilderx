"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    const d = /* @__PURE__ */ new Date();
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    const date = d.getDate();
    return {
      index: 0,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      values: ["", "", "", "", "", "", "", ""],
      customThemeDefaultDate: [`${year}-${month}-${date}`, `${year}-${month}-${date + 5}`],
      customTextDefaultDate: [`${year}-${month}-${date}`],
      maxDate: `${year}-${month}-${date + 10}`,
      defaultDateMultiple: [`${year}-${month}-${date}`, `${year}-${month}-${date + 1}`, `${year}-${month}-${date + 2}`],
      list: [
        {
          title: "单个日期",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/7.png"
        },
        {
          title: "多个日期",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/8.png"
        },
        {
          title: "日期范围",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/9.png"
        },
        {
          title: "自定义主题颜色",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/15.png"
        },
        {
          title: "自定义文案",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/14.png"
        },
        {
          title: "日期最大范围",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/13.png"
        },
        {
          title: "显示农历",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/5.png"
        },
        {
          title: "默认日期",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/10.png"
        }
      ]
    };
  },
  methods: {
    showCalendar(index) {
      this.index = index + 1;
      this[`show${index + 1}`] = true;
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    confirm(e) {
      this[`show${this.index}`] = false;
      console.log(e);
      switch (this.index - 1) {
        case 0:
          this.values[this.index - 1] = e[0];
          break;
        case 1:
          e.forEach((value, index) => {
            index === 0 ? this.values[this.index - 1] = value : this.values[this.index - 1] += ";" + value;
          });
          break;
        case 2:
          this.values[this.index - 1] = e[0] + "~" + e[e.length - 1];
          break;
        case 3:
          this.values[this.index - 1] = e[0] + "~" + e[e.length - 1];
          break;
        case 4:
          this.values[this.index - 1] = e[0] + "~" + e[e.length - 1];
          break;
        case 5:
          this.values[this.index - 1] = e[0];
          break;
        case 6:
          this.values[this.index - 1] = e[0];
          break;
        case 7:
          e.forEach((value, index) => {
            index === 0 ? this.values[this.index - 1] = value : this.values[this.index - 1] += ";" + value;
          });
          break;
      }
    },
    close() {
      this[`show${this.index}`] = false;
    },
    formatter(day) {
      const d = /* @__PURE__ */ new Date();
      let month = d.getMonth() + 1;
      const date = d.getDate();
      if (day.month == month && day.day == date + 3) {
        day.bottomInfo = "有优惠";
        day.dot = true;
      }
      return day;
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  const _easycom_u_calendar2 = common_vendor.resolveComponent("u-calendar");
  (_easycom_u_navbar2 + _easycom_u_cell2 + _easycom_u_cell_group2 + _easycom_u_calendar2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_cell = () => "../../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_u_calendar = () => "../../../uni_modules/uview-plus/components/u-calendar/u-calendar.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_cell + _easycom_u_cell_group + _easycom_u_calendar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "日历",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.o(($event) => $options.showCalendar(index), index),
        c: index,
        d: "5c1d857b-2-" + i0 + ",5c1d857b-1",
        e: common_vendor.p({
          title: item.title,
          label: $data.values[index],
          isLink: true
        })
      };
    }),
    d: common_vendor.o($options.confirm),
    e: common_vendor.o($options.close),
    f: common_vendor.p({
      show: $data.show1,
      defaultDate: "2022-02-15"
    }),
    g: common_vendor.o($options.confirm),
    h: common_vendor.o($options.close),
    i: common_vendor.p({
      show: $data.show2,
      mode: "multiple",
      defaultDate: ["2022-03-01"]
    }),
    j: common_vendor.o($options.confirm),
    k: common_vendor.o($options.close),
    l: common_vendor.p({
      show: $data.show3,
      mode: "range"
    }),
    m: common_vendor.o($options.confirm),
    n: common_vendor.o($options.close),
    o: common_vendor.p({
      show: $data.show4,
      mode: "range",
      color: "#f56c6c",
      defaultDate: $data.customThemeDefaultDate
    }),
    p: common_vendor.o($options.confirm),
    q: common_vendor.o($options.close),
    r: common_vendor.p({
      show: $data.show5,
      mode: "range",
      defaultDate: $data.customTextDefaultDate,
      startText: "住店",
      endText: "离店",
      confirmDisabledText: "请选择离店日期",
      formatter: $options.formatter
    }),
    s: common_vendor.o($options.confirm),
    t: common_vendor.o($options.close),
    v: common_vendor.p({
      show: $data.show6,
      maxDate: $data.maxDate
    }),
    w: common_vendor.o($options.confirm),
    x: common_vendor.o($options.close),
    y: common_vendor.p({
      show: $data.show7,
      showLunar: true
    }),
    z: common_vendor.o($options.confirm),
    A: common_vendor.o($options.close),
    B: common_vendor.p({
      show: $data.show8,
      mode: "multiple",
      defaultDate: $data.defaultDateMultiple
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/calendar/calendar.nvue"]]);
wx.createPage(MiniProgramPage);
