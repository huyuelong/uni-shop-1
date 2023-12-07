"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 当前设备可用的高度
      wh: 0,
      cateList: [],
      active: 0,
      // 二级分类列表
      cateLevel2: [],
      scrollTop: 0
    };
  },
  onLoad() {
    const sysInfo = common_vendor.index.getSystemInfoSync();
    this.wh = sysInfo.windowHeight;
    this.getCateList();
  },
  methods: {
    // 获取分类列表
    async getCateList() {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/categories");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      this.cateList = res.message;
      this.cateLevel2 = res.message[0].children;
    },
    activeChange(i) {
      this.active = i;
      this.cateLevel2 = this.cateList[i].children;
      this.scrollTop = this.scrollTop === 0 ? 1 : 0;
    },
    // 跳转到商品列表页面
    gotoGoodsList(item) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_list/goods_list?cid=" + item.cat_id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.cateList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.n(i === $data.active ? "active" : ""),
        c: common_vendor.o(($event) => $options.activeChange(i), i),
        d: i
      };
    }),
    b: $data.wh + "px",
    c: common_vendor.f($data.cateLevel2, (item2, i2, i0) => {
      return {
        a: common_vendor.t(item2.cat_name),
        b: common_vendor.f(item2.children, (item3, i3, i1) => {
          return {
            a: item3.cat_icon,
            b: common_vendor.t(item3.cat_name),
            c: i3,
            d: common_vendor.o(($event) => $options.gotoGoodsList(item3), i3)
          };
        }),
        c: i2
      };
    }),
    d: $data.wh + "px",
    e: $data.scrollTop
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/94991/Documents/HBuilderProjects/uni-shop-1/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
