"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
Object.defineProperty(exports, "DemoButton", {
  enumerable: true,
  get: function () {
    return _demoButton.default;
  }
});
Object.defineProperty(exports, "DemoButton2", {
  enumerable: true,
  get: function () {
    return _demoButton2.default;
  }
});
exports.default = exports.version = void 0;

var _demoButton = _interopRequireDefault(require("./demo-button"));

var _demoButton2 = _interopRequireDefault(require("./demo-button2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '1.0.0';
exports.version = version;

function install(app) {
  var components = [_demoButton.default, _demoButton2.default];
  components.forEach(item => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

var _default = {
  install,
  version
};
exports.default = _default;