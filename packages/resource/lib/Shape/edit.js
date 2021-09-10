"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Shape = _interopRequireDefault(require("./Shape"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PictureEdit = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PictureEdit, _React$Component);

  var _super = _createSuper(PictureEdit);

  function PictureEdit() {
    var _this;

    (0, _classCallCheck2["default"])(this, PictureEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onLoad", function () {
      var resetHeight = _this.props.resetHeight;
      resetHeight();
    });
    return _this;
  }

  (0, _createClass2["default"])(PictureEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultAttrs = _this$props.defaultAttrs,
          registerAttrs = _this$props.registerAttrs,
          resetHeight = _this$props.resetHeight,
          setAttribute = _this$props.setAttribute,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["defaultAttrs", "registerAttrs", "resetHeight", "setAttribute"]);
      console.log('pciture', others);
      return /*#__PURE__*/_react["default"].createElement(_Shape["default"], others);
    }
  }]);
  return PictureEdit;
}(_react["default"].Component);

(0, _defineProperty2["default"])(PictureEdit, "propTypes", {
  resetHeight: _propTypes["default"].func.isRequired,
  imgSrc: _propTypes["default"].string
});
(0, _defineProperty2["default"])(PictureEdit, "defaultProps", {
  imgSrc: ''
});
var _default = PictureEdit;
exports["default"] = _default;