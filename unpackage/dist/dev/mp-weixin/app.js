"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/cate/cate.js";
  "./pages/cart/cart.js";
  "./pages/my/my.js";
  "./subpkg/goods_detail/goods_detail.js";
  "./subpkg/goods_list/goods_list.js";
}
const _sfc_main = {};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/94991/Documents/HBuilderProjects/uni-shop-1/App.vue"]]);
common_vendor.index.$http = common_vendor.$http;
common_vendor.$http.baseUrl = "https://api-hmugo-web.itheima.net";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
