"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      // 默认的空图片
      defaultPic: "https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.goods.goods_small_logo || $data.defaultPic,
    b: common_vendor.t($props.goods.goods_name),
    c: common_vendor.t($props.goods.goods_price.toFixed(2))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/94991/Documents/HBuilderProjects/uni-shop-1/components/my-goods/my-goods.vue"]]);
wx.createComponent(Component);
