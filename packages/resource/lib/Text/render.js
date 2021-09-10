"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { Input } from 'antd';
function Text(props) {
  var color = props.color,
      fontSize = props.fontSize,
      text = props.text,
      bgColor = props.bgColor,
      lineHeight = props.lineHeight,
      opacity = props.opacity,
      textShadowX = props.textShadowX,
      textShadowY = props.textShadowY,
      textShadowSpread = props.textShadowSpread,
      textShadowColor = props.textShadowColor,
      textSolidSize = props.textSolidSize,
      textSolidColor = props.textSolidColor,
      textSolidAngle = props.textSolidAngle,
      textBorderSize = props.textBorderSize,
      textBorderColor = props.textBorderColor,
      others = (0, _objectWithoutProperties2["default"])(props, ["color", "fontSize", "text", "bgColor", "lineHeight", "opacity", "textShadowX", "textShadowY", "textShadowSpread", "textShadowColor", "textSolidSize", "textSolidColor", "textSolidAngle", "textBorderSize", "textBorderColor"]);
  var textShadow = (0, _utils.generatorTexttextShadow)({
    textShadowX: textShadowX,
    textShadowY: textShadowY,
    textShadowSpread: textShadowSpread,
    textShadowColor: textShadowColor,
    textSolidSize: textSolidSize,
    textSolidColor: textSolidColor,
    textSolidAngle: textSolidAngle,
    textBorderSize: textBorderSize,
    textBorderColor: textBorderColor
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      width: '100%',
      padding: 10,
      color: color,
      fontSize: fontSize,
      background: bgColor,
      lineHeight: lineHeight,
      opacity: opacity,
      textShadow: textShadow
    }, others),
    dangerouslySetInnerHTML: {
      __html: text
    }
  });
}

var _default = Text;
exports["default"] = _default;