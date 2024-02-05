"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      commentList: []
    };
  },
  onLoad() {
    this.getComment();
  },
  methods: {
    // 跳转到全部回复
    toAllReply() {
      common_vendor.index.navigateTo({
        url: "/pages/template/comment/reply"
      });
    },
    // 点赞
    getLike(index) {
      this.commentList[index].isLike = !this.commentList[index].isLike;
      if (this.commentList[index].isLike == true) {
        this.commentList[index].likeNum++;
      } else {
        this.commentList[index].likeNum--;
      }
    },
    // 评论列表
    getComment() {
      this.commentList = [
        {
          id: 1,
          name: "叶轻眉",
          date: "12-25 18:58",
          contentText: "我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",
          url: "https://cdn.uviewui.com/uview/template/SmilingDog.jpg",
          allReply: 12,
          likeNum: 33,
          isLike: false,
          replyList: [
            {
              name: "uview",
              contentStr: "uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！"
            },
            {
              name: "粘粘",
              contentStr: "今天吃什么，明天吃什么，晚上吃什么，我只是一只小猫咪为什么要烦恼这么多"
            }
          ]
        },
        {
          id: 2,
          name: "叶轻眉1",
          date: "01-25 13:58",
          contentText: "我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",
          allReply: 0,
          likeNum: 11,
          isLike: false,
          url: "https://cdn.uviewui.com/uview/template/niannian.jpg"
        },
        {
          id: 3,
          name: "叶轻眉2",
          date: "03-25 13:58",
          contentText: "我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",
          allReply: 0,
          likeNum: 21,
          isLike: false,
          allReply: 2,
          url: "../../../static/logo.png",
          replyList: [
            {
              name: "uview",
              contentStr: "uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！"
            },
            {
              name: "豆包",
              contentStr: "想吃冰糖葫芦粘豆包，但没钱5555........."
            }
          ]
        },
        {
          id: 4,
          name: "叶轻眉3",
          date: "06-20 13:58",
          contentText: "我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",
          url: "https://cdn.uviewui.com/uview/template/SmilingDog.jpg",
          allReply: 0,
          likeNum: 150,
          isLike: false
        }
      ];
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.commentList, (res, index, i0) => {
      return common_vendor.e({
        a: res.url,
        b: common_vendor.t(res.name),
        c: common_vendor.t(res.likeNum),
        d: !res.isLike
      }, !res.isLike ? {
        e: common_vendor.o(($event) => $options.getLike(index), res.id),
        f: "caf34450-0-" + i0,
        g: common_vendor.p({
          name: "thumb-up",
          size: 30,
          color: "#9a9a9a"
        })
      } : {}, {
        h: res.isLike
      }, res.isLike ? {
        i: common_vendor.o(($event) => $options.getLike(index), res.id),
        j: "caf34450-1-" + i0,
        k: common_vendor.p({
          name: "thumb-up-fill",
          size: 30
        })
      } : {}, {
        l: res.isLike ? 1 : "",
        m: common_vendor.t(res.contentText),
        n: common_vendor.f(res.replyList, (item, index2, i1) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.contentStr),
            c: item.index
          };
        }),
        o: res.replyList != void 0
      }, res.replyList != void 0 ? {
        p: common_vendor.t(res.allReply),
        q: "caf34450-2-" + i0,
        r: common_vendor.p({
          name: "arrow-right",
          size: 26
        }),
        s: common_vendor.o((...args) => $options.toAllReply && $options.toAllReply(...args), res.id)
      } : {}, {
        t: common_vendor.t(res.date),
        v: res.id
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-caf34450"], ["__file", "D:/project/mini-app/uview-plus/pages/template/comment/index.vue"]]);
wx.createPage(MiniProgramPage);
