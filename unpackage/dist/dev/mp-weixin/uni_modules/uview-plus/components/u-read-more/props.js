"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 默认的显示占位高度
    showHeight: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.readMore.showHeight
    },
    // 展开后是否显示"收起"按钮
    toggle: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.readMore.toggle
    },
    // 关闭时的提示文字
    closeText: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.readMore.closeText
    },
    // 展开时的提示文字
    openText: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.readMore.openText
    },
    // 提示的文字颜色
    color: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.readMore.color
    },
    // 提示文字的大小
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.readMore.fontSize
    },
    // 是否显示阴影
    // 此参数不能写在props/readMore.js中进行默认配置，因为使用了条件编译，在外部js中
    // uni无法准确识别当前是否处于nvue还是非nvue下
    shadowStyle: {
      type: Object,
      default: () => ({
        backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
        paddingTop: "100px",
        marginTop: "-100px"
      })
    },
    // 段落首行缩进的字符个数
    textIndent: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.readMore.textIndent
    },
    // open和close事件时，将此参数返回在回调参数中
    name: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.readMore.name
    }
  }
};
exports.props = props;
