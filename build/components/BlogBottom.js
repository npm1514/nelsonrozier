"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _blogBottom = require("../styled-components/components/blogBottom");

var _global = require("../styled-components/global");

var _categories = _interopRequireDefault(require("../data/categories"));

var _blogs = _interopRequireDefault(require("../data/blogs"));

var _archives = _interopRequireDefault(require("../data/archives"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var BlogBottomComponent = /*#__PURE__*/function (_Component) {
  _inherits(BlogBottomComponent, _Component);

  var _super = _createSuper(BlogBottomComponent);

  function BlogBottomComponent(props) {
    var _this;

    _classCallCheck(this, BlogBottomComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "changeSearch", function (e) {
      _this.setState({
        searchInput: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "searchBlogs", function (e) {
      e.preventDefault();
      window.location.href = "/blog/search/" + _this.state.searchInput;
    });

    _defineProperty(_assertThisInitialized(_this), "changeBlogDate", function (e) {
      e.preventDefault();
      window.location.href = e.target.value;
    });

    _this.state = {
      searchInput: ""
    };
    return _this;
  }

  _createClass(BlogBottomComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          home = _this$props.home,
          blog = _this$props.blog;
      return /*#__PURE__*/_react["default"].createElement(_blogBottom.BlogBottom, {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.searchBlogs
      }, /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Search...",
        type: "text",
        required: true,
        onChange: this.changeSearch
      }), /*#__PURE__*/_react["default"].createElement(_global.GoldButton, {
        type: "submit"
      }, "Search")), /*#__PURE__*/_react["default"].createElement("h2", null, "Categories"), /*#__PURE__*/_react["default"].createElement("ul", null, _categories["default"].map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: a.link
        }, a.name), " (", a.qty, ")");
      })), /*#__PURE__*/_react["default"].createElement("h2", null, "Archives"), /*#__PURE__*/_react["default"].createElement("select", {
        onChange: this.changeBlogDate
      }, _archives["default"].map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: i,
          value: a.link
        }, a.date, "(", a.qty, ")");
      })), /*#__PURE__*/_react["default"].createElement("h2", null, "Recent Posts"), /*#__PURE__*/_react["default"].createElement("ul", null, _blogs["default"].map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: a.link
        }, a.title));
      })), /*#__PURE__*/_react["default"].createElement(_global.RedButton, {
        target: "_blank",
        href: "https://reviewplatform.findlaw.com/nelsonrozier"
      }, "REVIEW US"), /*#__PURE__*/_react["default"].createElement(_global.FBButton, {
        target: "_blank",
        href: "https://www.facebook.com/nelsonrozier/"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fab fa-facebook-f"
      })));
    }
  }]);

  return BlogBottomComponent;
}(_react.Component);

var _default = BlogBottomComponent;
exports["default"] = _default;