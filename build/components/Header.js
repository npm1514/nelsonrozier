"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _header = require("../styled-components/components/header");

var _global = require("../styled-components/global");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderComponent = /*#__PURE__*/function (_Component) {
  _inherits(HeaderComponent, _Component);

  var _super = _createSuper(HeaderComponent);

  function HeaderComponent() {
    var _this;

    _classCallCheck(this, HeaderComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "scroll", function (e) {
      e.preventDefault();
      document.getElementById("consultation").scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        passive: true
      });
    });

    return _this;
  }

  _createClass(HeaderComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_header.Header, {
        id: "header"
      }, /*#__PURE__*/_react["default"].createElement(_header.HeaderWrap, null, /*#__PURE__*/_react["default"].createElement(_global.FlexDiv, {
        alignItems: "flex-end",
        style: {
          background: '#ffffff80',
          padding: '12px',
          width: 'calc(100% - 24px)'
        }
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "/"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "/images/brand-logo.png"
      })), /*#__PURE__*/_react["default"].createElement(_header.HeaderDiv, null, /*#__PURE__*/_react["default"].createElement(_header.Header1, null, "FREE Consultation."), /*#__PURE__*/_react["default"].createElement(_header.Header2, null, "No fee unless we win"), /*#__PURE__*/_react["default"].createElement("a", {
        href: "tel:+1-559-713-0159"
      }, /*#__PURE__*/_react["default"].createElement(_header.Header3, null, "559-713-0159")))), /*#__PURE__*/_react["default"].createElement(_.Nav, {
        page: this.props.page
      }), /*#__PURE__*/_react["default"].createElement(_header.HeaderImage, null, /*#__PURE__*/_react["default"].createElement(_header.Header4, null, "Personalized Legal Representation by Compassionate,", /*#__PURE__*/_react["default"].createElement("br", null), "Dedicated and Experienced Attorneys")), /*#__PURE__*/_react["default"].createElement(_header.DesktopView, null, /*#__PURE__*/_react["default"].createElement(_header.Header4, null, "Personalized Legal Representation by Compassionate,", /*#__PURE__*/_react["default"].createElement("br", null), "Dedicated and Experienced Attorneys")), /*#__PURE__*/_react["default"].createElement("a", {
        href: "",
        onClick: this.scroll,
        className: "consultationAnchor"
      }, /*#__PURE__*/_react["default"].createElement(_global.GoldButton, {
        className: "consultationButton"
      }, "Get a Free Consultation ", /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-chevron-circle-right"
      })))));
    }
  }]);

  return HeaderComponent;
}(_react.Component);

var _default = HeaderComponent;
exports["default"] = _default;