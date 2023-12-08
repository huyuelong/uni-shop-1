"use strict";
const uni_modules_uniIcons_components_uniIcons_uniicons = require("./uniicons.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "UniIcons",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: [Number, String],
      default: 24
    },
    customPrefix: {
      type: String,
      default: ""
    },
    fontFamily: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      icons: uni_modules_uniIcons_components_uniIcons_uniicons.fontData
    };
  },
  computed: {
    unicode() {
      let code = this.icons.find((v) => v.font_class === this.type);
      if (code) {
        return code.unicode;
      }
      return "";
    },
    iconSize() {
      if (typeof this.size == "string") {
        return this.size;
      }
      const size = this.size;
      return size + "px";
    },
    styleObj() {
      if (this.fontFamily !== "") {
        return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
      }
      return `color: ${this.color}; font-size: ${this.iconSize};`;
    }
  },
  methods: {
    _onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.styleObj),
    b: common_vendor.n("uniui-" + $props.type),
    c: common_vendor.n($props.customPrefix),
    d: common_vendor.n($props.customPrefix ? $props.type : ""),
    e: common_vendor.o((...args) => $options._onClick && $options._onClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/94991/Documents/HBuilderProjects/uni-shop-1/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
wx.createComponent(Component);
