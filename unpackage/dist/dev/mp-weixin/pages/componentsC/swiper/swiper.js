"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 0,
      currentNum: 0,
      list: [
        {
          // image: 'https://cdn.uviewui.com/uview/resources/video.mp4',
          image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        }
      ],
      list1: [
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png"
      ],
      list2: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          type: "image"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        }
      ],
      list3: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png"
      ],
      list4: [
        {
          url: "https://cdn.uviewui.com/uview/resources/video.mp4",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png"
        },
        {
          url: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          url: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        }
      ],
      list5: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png"
      ],
      list6: [
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png"
      ]
    };
  },
  methods: {
    change(e) {
    },
    click(e) {
      console.log("click", e);
    }
  }
};
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  (_easycom_u_swiper2 + _easycom_u_gap2)();
}
const _easycom_u_swiper = () => "../../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_gap)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o($options.click),
    c: common_vendor.p({
      list: $data.list1
    }),
    d: common_vendor.p({
      list: $data.list2,
      keyName: "image",
      showTitle: true,
      autoplay: false,
      circular: true
    }),
    e: common_vendor.p({
      list: $data.list3,
      indicator: true,
      indicatorMode: "line",
      circular: true
    }),
    f: common_vendor.p({
      list: $data.list3,
      loading: true
    }),
    g: common_vendor.p({
      list: $data.list4,
      keyName: "url",
      autoplay: false
    }),
    h: common_vendor.f($data.list5, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.n(index === $data.current && "indicator__dot--active")
      };
    }),
    i: common_vendor.o((e) => $data.current = e.current),
    j: common_vendor.p({
      list: $data.list5,
      autoplay: false
    }),
    k: common_vendor.p({
      bgColor: "transparent",
      height: "15"
    }),
    l: common_vendor.t($data.currentNum + 1),
    m: common_vendor.t($data.list6.length),
    n: common_vendor.o((e) => $data.currentNum = e.current),
    o: common_vendor.p({
      list: $data.list6,
      autoplay: false,
      indicatorStyle: "right: 20px"
    }),
    p: common_vendor.p({
      list: $data.list3,
      previousMargin: "30",
      nextMargin: "30",
      circular: true,
      autoplay: false,
      radius: "5",
      bgColor: "#ffffff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsC/swiper/swiper.nvue"]]);
wx.createPage(MiniProgramPage);
