"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-message-input",
  props: {
    // 最大输入长度
    maxlength: {
      type: [Number, String],
      default: 4
    },
    // 是否用圆点填充
    dotFill: {
      type: Boolean,
      default: false
    },
    // 显示模式，box-盒子模式，bottomLine-横线在底部模式，middleLine-横线在中部模式
    mode: {
      type: String,
      default: "box"
    },
    // 预置值
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 当前激活输入item，是否带有呼吸效果
    breathe: {
      type: Boolean,
      default: true
    },
    // 是否自动获取焦点
    focus: {
      type: Boolean,
      default: false
    },
    // 字体是否加粗
    bold: {
      type: Boolean,
      default: false
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 60
    },
    // 激活样式
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 未激活的样式
    inactiveColor: {
      type: String,
      default: "#606266"
    },
    // 输入框的大小，单位rpx，宽等于高
    width: {
      type: [Number, String],
      default: "80"
    },
    // 是否隐藏原生键盘，如果想用自定义键盘的话，需设置此参数为true
    disabledKeyboard: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    // maxlength: {
    // 	// 此值设置为true，会在组件加载后无需maxlength变化就会执行一次本监听函数，无需再created生命周期中处理
    // 	immediate: true,
    // 	handler(val) {
    // 		this.maxlength = Number(val);
    // 	}
    // }, 
    modelValue: {
      immediate: true,
      handler(val) {
        val = String(val);
        this.valueModel = val.substring(0, this.maxlength);
      }
    }
  },
  data() {
    return {
      valueModel: ""
    };
  },
  emits: ["change", "finish"],
  computed: {
    // 是否显示呼吸灯效果
    animationClass() {
      return (index) => {
        if (this.breathe && this.charArr.length == index)
          return "u-breathe";
        else
          return "";
      };
    },
    // 用于显示字符
    charArr() {
      return this.valueModel.split("");
    },
    charArrLength() {
      return this.charArr.length;
    },
    // 根据长度，循环输入框的个数，因为头条小程序数值不能用于v-for
    loopCharArr() {
      return new Array(this.maxlength);
    }
  },
  methods: {
    getVal(e) {
      let {
        value
      } = e.detail;
      this.valueModel = value;
      if (String(value).length > this.maxlength)
        return;
      this.$emit("change", value);
      if (String(value).length == this.maxlength) {
        this.$emit("finish", value);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.disabledKeyboard,
    b: $data.valueModel,
    c: $props.focus,
    d: $props.maxlength,
    e: common_vendor.o((...args) => $options.getVal && $options.getVal(...args)),
    f: common_vendor.f($options.loopCharArr, (item, index, i0) => {
      return common_vendor.e($props.mode !== "middleLine" ? {
        a: $options.charArrLength === index ? "block" : "none",
        b: $props.width * 0.5 + "rpx"
      } : {}, {
        c: $props.mode === "middleLine" && $options.charArrLength <= index
      }, $props.mode === "middleLine" && $options.charArrLength <= index ? {
        d: common_vendor.n($props.breathe && $options.charArrLength == index ? "u-breathe" : ""),
        e: common_vendor.n($options.charArrLength === index ? "u-middle-line-active" : ""),
        f: $props.bold ? "4px" : "2px",
        g: $options.charArrLength === index ? $props.activeColor : $props.inactiveColor
      } : {}, $props.mode === "bottomLine" ? {
        h: common_vendor.n($props.breathe && $options.charArrLength == index ? "u-breathe" : ""),
        i: common_vendor.n($options.charArrLength === index ? "u-bottom-line-active" : ""),
        j: $props.bold ? "4px" : "2px",
        k: $options.charArrLength === index ? $props.activeColor : $props.inactiveColor
      } : {}, !$props.dotFill ? {
        l: common_vendor.t($options.charArr[index] ? $options.charArr[index] : "")
      } : {
        m: common_vendor.t($options.charArr[index] ? "●" : "")
      }, {
        n: common_vendor.n($props.breathe && $options.charArrLength == index ? "u-breathe" : ""),
        o: common_vendor.n($options.charArrLength === index && $props.mode == "box" ? "u-box-active" : ""),
        p: $options.charArrLength === index && $props.mode == "box" ? $props.activeColor : $props.inactiveColor,
        q: index
      });
    }),
    g: $props.mode !== "middleLine",
    h: $props.mode === "bottomLine",
    i: !$props.dotFill,
    j: common_vendor.n($props.mode === "box" ? "u-box" : ""),
    k: $props.bold ? "bold" : "normal",
    l: $props.fontSize + "rpx",
    m: $props.width + "rpx",
    n: $props.width + "rpx",
    o: $props.inactiveColor
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bf0cf2ff"], ["__file", "D:/project/mini-app/uview-plus/uni_modules/uview-plus/components/u-message-input/u-message-input.vue"]]);
wx.createComponent(Component);
