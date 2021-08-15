import './index-sfc.css';
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
import { renderSlot as _renderSlot, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var _hoisted_1 = {
  class: "demo-button"
};

function __vue_render__(_ctx, _cache) {
  return _openBlock(), _createElementBlock("button", _hoisted_1, [_renderSlot(_ctx.$slots, "default")]);
}

__vue_sfc__.render = __vue_render__;
export default __vue_sfc__;