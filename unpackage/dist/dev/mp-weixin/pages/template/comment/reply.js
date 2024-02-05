"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      commentList: [],
      comment: ""
    };
  },
  onLoad() {
    this.getReply();
  },
  methods: {
    // 点赞
    getLike(index) {
      if (index === 0 || index > 0) {
        this.commentList[index].isLike = !this.commentList[index].isLike;
        if (this.commentList[index].isLike == true) {
          this.commentList[index].likeNum++;
        } else {
          this.commentList[index].likeNum--;
        }
      } else {
        if (this.comment.isLike == true) {
          this.comment.isLike = !this.comment.isLike;
          this.comment.likeNum--;
        } else {
          this.comment.isLike = !this.comment.isLike;
          this.comment.likeNum++;
        }
      }
    },
    // 回复列表
    getReply() {
      this.comment = {
        id: 1,
        name: "叶轻眉",
        date: "12-25 18:58",
        contentText: "我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",
        url: "https://cdn.uviewui.com/uview/template/SmilingDog.jpg",
        allReply: 12,
        likeNum: 33,
        isLikes: false
      };
      this.commentList = [
        {
          name: "新八几",
          date: "12-25 18:58",
          contentText: "不要乱打广告啊喂！虽然是真的超好用",
          url: "https://cdn.uviewui.com/uview/template/SmilingDog.jpg",
          likeNum: 33,
          isLike: false,
          reply: {
            name: "uview",
            contentStr: "uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！"
          }
        },
        {
          name: "叶轻眉1",
          date: "01-25 13:58",
          url: "https://cdn.uviewui.com/uview/template/SmilingDog.jpg",
          contentText: "我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",
          allReply: 0,
          likeNum: 11,
          isLike: false,
          reply: {
            name: "粘粘",
            contentStr: "今天吃什么，明天吃什么，晚上吃什么，我只是一只小猫咪为什么要烦恼这么多"
          }
        },
        {
          name: "叶轻眉2",
          date: "03-25 13:58",
          contentText: "我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",
          allReply: 0,
          likeNum: 21,
          url: "https://cdn.uviewui.com/uview/template/SmilingDog.jpg",
          isLike: false,
          allReply: 2,
          reply: {
            name: "豆包",
            contentStr: "想吃冰糖葫芦粘豆包，但没钱5555........."
          }
        },
        {
          name: "叶轻眉3",
          date: "06-20 13:58",
          contentText: "我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",
          allReply: 0,
          likeNum: 150,
          url: "https://cdn.uviewui.com/uview/template/SmilingDog.jpg",
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
  return common_vendor.e({
    a: $data.comment.url,
    b: common_vendor.t($data.comment.name),
    c: common_vendor.t($data.comment.likeNum),
    d: !$data.comment.isLike
  }, !$data.comment.isLike ? {
    e: common_vendor.o($options.getLike),
    f: common_vendor.p({
      name: "thumb-up",
      color: "#9a9a9a",
      size: 30
    })
  } : {}, {
    g: $data.comment.isLike
  }, $data.comment.isLike ? {
    h: common_vendor.o($options.getLike),
    i: common_vendor.p({
      name: "thumb-up-fill",
      size: 30
    })
  } : {}, {
    j: $data.comment.isLike ? 1 : "",
    k: common_vendor.t($data.comment.contentText),
    l: common_vendor.t($data.comment.allReply),
    m: common_vendor.f($data.commentList, (item, index, i0) => {
      return common_vendor.e({
        a: item.url,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.date),
        d: common_vendor.t(item.likeNum),
        e: !item.isLike
      }, !item.isLike ? {
        f: common_vendor.o(($event) => $options.getLike(index), index),
        g: "cf66075b-2-" + i0,
        h: common_vendor.p({
          name: "thumb-up",
          size: 30,
          color: "#9a9a9a"
        })
      } : {}, {
        i: item.isLike
      }, item.isLike ? {
        j: common_vendor.o(($event) => $options.getLike(index), index),
        k: "cf66075b-3-" + i0,
        l: common_vendor.p({
          name: "thumb-up-fill",
          size: 30
        })
      } : {}, {
        m: item.isLike ? 1 : "",
        n: item.reply
      }, item.reply ? {
        o: common_vendor.t(item.reply.name),
        p: common_vendor.t(item.reply.contentStr)
      } : {}, {
        q: common_vendor.t(item.contentText),
        r: index
      });
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cf66075b"], ["__file", "D:/project/mini-app/uview-plus/pages/template/comment/reply.vue"]]);
wx.createPage(MiniProgramPage);
