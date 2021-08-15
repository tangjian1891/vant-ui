"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./index-sfc.css");

var _vue = require("vue");

var __vue_sfc__ = {
  name: 'demo-button2',
  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    }
  }
};
var _hoisted_1 = {
  class: "demo-button"
};

function __vue_render__(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("button", _hoisted_1, [(0, _vue.renderSlot)(_ctx.$slots, "default")]);
}

__vue_sfc__.render = __vue_render__;
var _default = __vue_sfc__;
exports.default = _default;