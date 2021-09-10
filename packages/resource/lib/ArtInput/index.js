"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _edit = _interopRequireDefault(require("./edit"));

var _render = _interopRequireDefault(require("./render"));

var _config = _interopRequireDefault(require("./config"));

var _default = {
  edit: _edit["default"],
  render: _render["default"],
  style: _config["default"],
  size: {
    height: 40
  },
  name: '艺术字'
};
exports["default"] = _default;