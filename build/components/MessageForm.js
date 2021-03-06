"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _messageForm = require("../styled-components/components/messageForm");

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

var MessageFormComponent = /*#__PURE__*/function (_Component) {
  _inherits(MessageFormComponent, _Component);

  var _super = _createSuper(MessageFormComponent);

  function MessageFormComponent(props) {
    var _this;

    _classCallCheck(this, MessageFormComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "submitForm", function (e) {
      e.preventDefault();
      console.log(_this.state);
      fetch('/emailer', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_this.state)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        alert("An email has been submitted to the associates at Nelson Rozier. Someone will be in contact with you shortly.");

        _this.resetState();
      })["catch"](function (err) {
        alert("Something went wrong. Please contact Nelson Rozier directly via email or telephone. We are sorry for the inconvenience.");

        _this.resetState();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetState", function () {
      _this.setState({
        name: "",
        email: "",
        phone: "",
        description: "",
        disclaimer: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (e, prop) {
      var obj = {};
      obj[prop] = e.currentTarget.value;

      _this.setState(obj);
    });

    _defineProperty(_assertThisInitialized(_this), "updateCheckbox", function () {
      _this.setState({
        disclaimer: !_this.state.disclaimer
      });
    });

    _this.state = {
      name: "",
      email: "",
      phone: "",
      description: "",
      disclaimer: false
    };
    return _this;
  }

  _createClass(MessageFormComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          name = _this$state.name,
          email = _this$state.email,
          phone = _this$state.phone,
          description = _this$state.description,
          disclaimer = _this$state.disclaimer;
      var buttonDisabled = disclaimer == true && email ? false : true;
      return /*#__PURE__*/_react["default"].createElement(_messageForm.MessageFormWrap, {
        id: "consultation"
      }, /*#__PURE__*/_react["default"].createElement(_messageForm.MessageForm, null, /*#__PURE__*/_react["default"].createElement("h2", null, "How Can We Help You?"), /*#__PURE__*/_react["default"].createElement("p", null, "Fields marked with an * are required."), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.submitForm
      }, /*#__PURE__*/_react["default"].createElement(_global.FlexDiv, null, /*#__PURE__*/_react["default"].createElement(_global.HalfSize, null, /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Name",
        type: "text",
        value: name,
        onChange: function onChange(e) {
          _this2.updateState(e, "name");
        }
      }), /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Email Address*",
        type: "email",
        value: email,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "email");
        }
      }), /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Phone",
        type: "phone",
        value: phone,
        onChange: function onChange(e) {
          _this2.updateState(e, "phone");
        }
      })), /*#__PURE__*/_react["default"].createElement(_global.HalfSize, null, /*#__PURE__*/_react["default"].createElement(_global.TextArea, {
        placeholder: "Brief description of your legal issue.",
        value: description,
        onChange: function onChange(e) {
          _this2.updateState(e, "description");
        }
      }))), /*#__PURE__*/_react["default"].createElement(_global.FlexDiv, null, /*#__PURE__*/_react["default"].createElement(_global.HalfSize, null, /*#__PURE__*/_react["default"].createElement(_messageForm.MessageLinks, null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "/disclaimer"
      }, "Disclaimer"), " | ", /*#__PURE__*/_react["default"].createElement("a", {
        href: "/privacy"
      }, "Privacy Policy")), /*#__PURE__*/_react["default"].createElement(_messageForm.MessageDisclaimer, null, /*#__PURE__*/_react["default"].createElement("input", {
        required: true,
        type: "checkbox",
        id: "disclaimer",
        name: "disclaimer",
        checked: disclaimer,
        onChange: this.updateCheckbox
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "disclaimer"
      }, "I Have Read The Disclaimer *"))), /*#__PURE__*/_react["default"].createElement(_global.HalfSize, null, /*#__PURE__*/_react["default"].createElement(_global.BigGoldButton, {
        className: buttonDisabled ? "buttonDisabled" : "",
        type: "submit"
      }, "Send Your Information Today"))))));
    }
  }]);

  return MessageFormComponent;
}(_react.Component);

var _default = MessageFormComponent;
exports["default"] = _default;