"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      fileList1: [],
      fileList2: [],
      fileList3: [{
        url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
      }],
      fileList4: [
        {
          url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
        },
        {
          url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
        }
      ],
      fileList5: [],
      fileList6: [],
      fileList7: []
    };
  },
  onLoad() {
  },
  methods: {
    // 删除图片
    deletePic(event) {
      this[`fileList${event.name}`].splice(event.index, 1);
    },
    // 新增图片
    async afterRead(event) {
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url);
        let item = this[`fileList${event.name}`][fileListLen];
        this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
          status: "success",
          message: "",
          url: result
        }));
        fileListLen++;
      }
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        common_vendor.index.uploadFile({
          url: "http://www.example.com/upload",
          // 仅为示例，非真实的接口地址
          filePath: url,
          name: "file",
          formData: {
            user: "test"
          },
          success: (res) => {
            setTimeout(() => {
              resolve(res.data.data);
            }, 1e3);
          }
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_u_upload2 = common_vendor.resolveComponent("u-upload");
  _easycom_u_upload2();
}
const _easycom_u_upload = () => "../../../uni_modules/uview-plus/components/u-upload/u-upload.js";
if (!Math) {
  _easycom_u_upload();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.afterRead),
    b: common_vendor.o($options.deletePic),
    c: common_vendor.p({
      fileList: $data.fileList1,
      name: "1",
      multiple: true,
      maxCount: 10
    }),
    d: common_vendor.o($options.afterRead),
    e: common_vendor.o($options.deletePic),
    f: common_vendor.p({
      fileList: $data.fileList2,
      name: "2",
      multiple: true,
      maxCount: 10,
      accept: "video"
    }),
    g: common_vendor.o($options.afterRead),
    h: common_vendor.o($options.deletePic),
    i: common_vendor.p({
      fileList: $data.fileList3,
      name: "3",
      multiple: true,
      maxCount: 10,
      previewFullImage: true
    }),
    j: common_vendor.o($options.afterRead),
    k: common_vendor.o($options.deletePic),
    l: common_vendor.p({
      fileList: $data.fileList4,
      name: "4",
      multiple: true,
      maxCount: 2
    }),
    m: common_vendor.o($options.afterRead),
    n: common_vendor.o($options.deletePic),
    o: common_vendor.p({
      fileList: $data.fileList5,
      name: "5",
      multiple: true,
      maxCount: 3
    }),
    p: common_vendor.o($options.afterRead),
    q: common_vendor.o($options.deletePic),
    r: common_vendor.p({
      fileList: $data.fileList6,
      name: "6",
      multiple: true,
      maxCount: 1,
      width: "250",
      height: "150"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/mini-app/uview-plus/pages/componentsB/upload/upload.nvue"]]);
wx.createPage(MiniProgramPage);
