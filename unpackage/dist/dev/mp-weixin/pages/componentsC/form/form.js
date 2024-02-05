"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      fileList1: [],
      disabled1: false,
      tips: "",
      value: "",
      showCalendar: false,
      showBirthday: false,
      model1: {
        userInfo: {
          name: "楼兰",
          sex: "",
          birthday: ""
        },
        radiovalue1: "苹果",
        checkboxValue1: [],
        intro: "",
        code: ""
      },
      showSex: false,
      birthday: Number(/* @__PURE__ */ new Date()),
      actions: [
        {
          name: "男"
        },
        {
          name: "女"
        },
        {
          name: "保密"
        }
      ],
      rules: {
        "userInfo.name": [{
          type: "string",
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"]
        }, {
          // 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
          validator: (rule, value, callback) => {
            return common_vendor.index.$u.test.chinese(value);
          },
          message: "姓名必须为中文",
          // 触发器可以同时用blur和change，二者之间用英文逗号隔开
          trigger: ["change", "blur"]
        }],
        code: {
          type: "string",
          required: true,
          len: 4,
          message: "请填写4位验证码",
          trigger: ["blur"]
        },
        "userInfo.sex": {
          type: "string",
          max: 1,
          required: true,
          message: "请选择男或女",
          trigger: ["blur", "change"]
        },
        radiovalue1: {
          type: "string",
          min: 1,
          max: 2,
          message: "橙子有毒",
          trigger: ["change"]
        },
        checkboxValue1: {
          type: "array",
          min: 2,
          required: true,
          message: "不能太宅，至少选两项",
          trigger: ["change"]
        },
        intro: {
          type: "string",
          min: 3,
          required: true,
          message: "不低于3个字",
          trigger: ["change"]
        },
        hotel: {
          type: "string",
          min: 2,
          required: true,
          message: "请选择住店时间",
          trigger: ["change"]
        },
        "userInfo.birthday": {
          type: "string",
          required: true,
          message: "请选择生日",
          trigger: ["change"]
        }
      },
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
          name: "毒橙子",
          disabled: false
        }
      ],
      checkboxList1: [
        {
          name: "羽毛球",
          disabled: false
        },
        {
          name: "跑步",
          disabled: false
        },
        {
          name: "爬山",
          disabled: false
        }
      ]
    };
  },
  onReady() {
    this.$refs.form1.setRules(this.rules);
  },
  methods: {
    afterRead(event) {
      this.fileList1.push({
        url: event.file,
        status: "uploading",
        message: "上传中"
      });
    },
    groupChange(n) {
    },
    radioChange(n) {
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    sexSelect(e) {
      this.model1.userInfo.sex = e.name;
      this.$refs.form1.validateField("userInfo.sex");
    },
    change(e) {
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
    },
    calendarConfirm(e) {
      this.showCalendar = false;
      this.model1.hotel = `${e[0]} / ${e[e.length - 1]}`;
      this.$refs.form1.validateField("hotel");
    },
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        common_vendor.index.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.$u.toast("验证码已发送");
          this.$refs.uCode.start();
        }, 2e3);
      } else {
        common_vendor.index.$u.toast("倒计时结束后再发送");
      }
    },
    calendarClose() {
      this.showCalendar = false;
      this.$refs.form1.validateField("hotel");
    },
    birthdayClose() {
      this.showBirthday = false;
      this.$refs.form1.validateField("userInfo.birthday");
    },
    birthdayConfirm(e) {
      this.showBirthday = false;
      this.model1.userInfo.birthday = common_vendor.index.$u.timeFormat(e.value, "yyyy-mm-dd");
      this.$refs.form1.validateField("userInfo.birthday");
    },
    submit() {
      this.$refs.form1.validate().then((res) => {
        common_vendor.index.$u.toast("校验通过");
      }).catch((errors) => {
        common_vendor.index.$u.toast("校验失败");
      });
    },
    reset() {
      const validateList = [
        "userInfo.name",
        "userInfo.sex",
        "radiovalue1",
        "checkboxValue1",
        "intro",
        "hotel",
        "code",
        "userInfo.birthday"
      ];
      this.$refs.form1.resetFields();
      this.$refs.form1.clearValidate();
      setTimeout(() => {
        this.$refs.form1.clearValidate(validateList);
      }, 10);
    },
    hideKeyboard() {
      common_vendor.index.hideKeyboard();
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_radio2 = common_vendor.resolveComponent("u-radio");
  const _easycom_u_radio_group2 = common_vendor.resolveComponent("u-radio-group");
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_u__textarea2 = common_vendor.resolveComponent("u--textarea");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  const _easycom_u_action_sheet2 = common_vendor.resolveComponent("u-action-sheet");
  const _easycom_u_calendar2 = common_vendor.resolveComponent("u-calendar");
  const _easycom_u_code2 = common_vendor.resolveComponent("u-code");
  const _easycom_u_datetime_picker2 = common_vendor.resolveComponent("u-datetime-picker");
  (_easycom_u_navbar2 + _easycom_u__input2 + _easycom_u_form_item2 + _easycom_u_icon2 + _easycom_u_radio2 + _easycom_u_radio_group2 + _easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_u__textarea2 + _easycom_u_button2 + _easycom_u__form2 + _easycom_u_action_sheet2 + _easycom_u_calendar2 + _easycom_u_code2 + _easycom_u_datetime_picker2)();
}
const _easycom_u_navbar = () => "../../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u__input = () => "../../../uni_modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_radio = () => "../../../uni_modules/uview-plus/components/u-radio/u-radio.js";
const _easycom_u_radio_group = () => "../../../uni_modules/uview-plus/components/u-radio-group/u-radio-group.js";
const _easycom_u_checkbox = () => "../../../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u__textarea = () => "../../../uni_modules/uview-plus/components/u--textarea/u--textarea.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u__form = () => "../../../uni_modules/uview-plus/components/u--form/u--form.js";
const _easycom_u_action_sheet = () => "../../../uni_modules/uview-plus/components/u-action-sheet/u-action-sheet.js";
const _easycom_u_calendar = () => "../../../uni_modules/uview-plus/components/u-calendar/u-calendar.js";
const _easycom_u_code = () => "../../../uni_modules/uview-plus/components/u-code/u-code.js";
const _easycom_u_datetime_picker = () => "../../../uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u__input + _easycom_u_form_item + _easycom_u_icon + _easycom_u_radio + _easycom_u_radio_group + _easycom_u_checkbox + _easycom_u_checkbox_group + _easycom_u__textarea + _easycom_u_button + _easycom_u__form + _easycom_u_action_sheet + _easycom_u_calendar + _easycom_u_code + _easycom_u_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.navigateBack),
    b: common_vendor.p({
      title: "表单",
      safeAreaInsetTop: true,
      fixed: true,
      placeholder: true
    }),
    c: common_vendor.o(($event) => $data.model1.userInfo.name = $event),
    d: common_vendor.p({
      border: "none",
      placeholder: "姓名,只能为中文",
      modelValue: $data.model1.userInfo.name
    }),
    e: common_vendor.sr("item1", "fe67258a-2,fe67258a-1"),
    f: common_vendor.p({
      label: "姓名",
      prop: "userInfo.name",
      borderBottom: true
    }),
    g: common_vendor.o(($event) => $data.model1.userInfo.sex = $event),
    h: common_vendor.p({
      disabled: true,
      disabledColor: "#ffffff",
      placeholder: "请选择性别",
      border: "none",
      modelValue: $data.model1.userInfo.sex
    }),
    i: common_vendor.p({
      name: "arrow-right"
    }),
    j: common_vendor.sr("item1", "fe67258a-4,fe67258a-1"),
    k: common_vendor.o(($event) => {
      $data.showSex = true;
      $options.hideKeyboard();
    }),
    l: common_vendor.p({
      label: "性别",
      prop: "userInfo.sex",
      borderBottom: true
    }),
    m: common_vendor.f($data.radiolist1, (item, index, i0) => {
      return {
        a: index,
        b: "fe67258a-9-" + i0 + ",fe67258a-8",
        c: common_vendor.p({
          customStyle: {
            marginRight: "16px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    n: common_vendor.o(($event) => $data.model1.radiovalue1 = $event),
    o: common_vendor.p({
      modelValue: $data.model1.radiovalue1
    }),
    p: common_vendor.sr("item2", "fe67258a-7,fe67258a-1"),
    q: common_vendor.p({
      label: "水果",
      prop: "radiovalue1",
      borderBottom: true
    }),
    r: common_vendor.f($data.checkboxList1, (item, index, i0) => {
      return {
        a: index,
        b: "fe67258a-12-" + i0 + ",fe67258a-11",
        c: common_vendor.p({
          customStyle: {
            marginRight: "16px"
          },
          label: item.name,
          name: item.name
        })
      };
    }),
    s: common_vendor.o($options.change),
    t: common_vendor.o(($event) => $data.model1.checkboxValue1 = $event),
    v: common_vendor.p({
      shape: "square",
      modelValue: $data.model1.checkboxValue1
    }),
    w: common_vendor.sr("item3", "fe67258a-10,fe67258a-1"),
    x: common_vendor.p({
      label: "兴趣爱好",
      prop: "checkboxValue1",
      borderBottom: true,
      labelWidth: "80"
    }),
    y: common_vendor.o(($event) => $data.model1.intro = $event),
    z: common_vendor.p({
      placeholder: "不低于3个字",
      count: true,
      modelValue: $data.model1.intro
    }),
    A: common_vendor.sr("item3", "fe67258a-13,fe67258a-1"),
    B: common_vendor.p({
      label: "简介",
      prop: "intro",
      borderBottom: true
    }),
    C: common_vendor.o(($event) => $data.model1.hotel = $event),
    D: common_vendor.p({
      disabled: true,
      disabledColor: "#ffffff",
      placeholder: "请选择住店和离店时间",
      border: "none",
      modelValue: $data.model1.hotel
    }),
    E: common_vendor.p({
      name: "arrow-right"
    }),
    F: common_vendor.o(($event) => {
      $data.showCalendar = true;
      $options.hideKeyboard();
    }),
    G: common_vendor.p({
      label: "住店时间",
      prop: "hotel",
      labelWidth: "80",
      borderBottom: true
    }),
    H: common_vendor.o(($event) => $data.model1.code = $event),
    I: common_vendor.p({
      border: "none",
      placeholder: "请填写验证码",
      modelValue: $data.model1.code
    }),
    J: common_vendor.o($options.getCode),
    K: common_vendor.p({
      text: $data.tips,
      type: "success",
      size: "mini",
      disabled: $data.disabled1
    }),
    L: common_vendor.p({
      label: "验证码",
      prop: "code",
      labelWidth: "80",
      borderBottom: true
    }),
    M: common_vendor.o(($event) => $data.model1.userInfo.birthday = $event),
    N: common_vendor.p({
      disabled: true,
      disabledColor: "#ffffff",
      placeholder: "请选择生日",
      border: "none",
      modelValue: $data.model1.userInfo.birthday
    }),
    O: common_vendor.p({
      name: "arrow-right"
    }),
    P: common_vendor.sr("item1", "fe67258a-21,fe67258a-1"),
    Q: common_vendor.o(($event) => {
      $data.showBirthday = true;
      $options.hideKeyboard();
    }),
    R: common_vendor.p({
      label: "生日",
      prop: "userInfo.birthday",
      borderBottom: true
    }),
    S: common_vendor.sr("form1", "fe67258a-1"),
    T: common_vendor.p({
      labelPosition: "left",
      model: $data.model1
    }),
    U: common_vendor.o($options.submit),
    V: common_vendor.p({
      type: "primary",
      text: "提交",
      customStyle: "margin-top: 50px"
    }),
    W: common_vendor.o($options.reset),
    X: common_vendor.p({
      type: "error",
      text: "重置",
      customStyle: "margin-top: 10px"
    }),
    Y: common_vendor.o(($event) => $data.showSex = false),
    Z: common_vendor.o($options.sexSelect),
    aa: common_vendor.p({
      show: $data.showSex,
      actions: $data.actions,
      title: "请选择性别",
      description: "如果选择保密会报错"
    }),
    ab: common_vendor.o($options.calendarConfirm),
    ac: common_vendor.o($options.calendarClose),
    ad: common_vendor.p({
      show: $data.showCalendar,
      mode: "range",
      startText: "住店",
      endText: "离店",
      confirmDisabledText: "请选择离店日期",
      formatter: $options.formatter
    }),
    ae: common_vendor.sr("uCode", "fe67258a-28"),
    af: common_vendor.o($options.codeChange),
    ag: common_vendor.o(($event) => $data.disabled1 = true),
    ah: common_vendor.o(($event) => $data.disabled1 = false),
    ai: common_vendor.p({
      seconds: "20"
    }),
    aj: common_vendor.o($options.birthdayConfirm),
    ak: common_vendor.o($options.birthdayClose),
    al: common_vendor.o($options.birthdayClose),
    am: common_vendor.p({
      show: $data.showBirthday,
      value: $data.birthday,
      mode: "date",
      closeOnClickOverlay: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/form/form.nvue"]]);
wx.createPage(MiniProgramPage);
