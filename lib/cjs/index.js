"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestComp = TestComp;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _prismjs = _interopRequireDefault(require("prismjs"));

require("prismjs/components/prism-markup");

var _reactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _allowNode = _interopRequireDefault(require("./allowNode"));

var _langs = require("./langs");

var _SynHi = _interopRequireDefault(require("./SynHi"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e) { function e(_x) { return _e.apply(this, arguments); } e.toString = function () { return _e.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e2) { function e(_x2) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  width: 100px;\n  height: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var JsxParser = require('react-jsx-parser');

function TestComp(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, "Test Comp ", /*#__PURE__*/_react.default.createElement("button", null, "Submit"));
}

var PieChart = (0, _styledComponents.default)(TestComp)(_templateObject());

var MarkdownPreview = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MarkdownPreview, _Component);

  var _super = _createSuper(MarkdownPreview);

  function MarkdownPreview(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MarkdownPreview);
    _this = _super.call(this, props);
    _this.mdp = /*#__PURE__*/_react.default.createRef();
    _this.loadedLang = ['markup'];
    _this.components = {
      PieChart: PieChart
    };
    _this.renderers = {
      code: function code(_ref) {
        var language = _ref.language,
            value = _ref.value;
        console.log("encdec", language, value);

        if (language && value) {
          if (language === 'encdec') {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "encDecWrapper"
            }, " ", /*#__PURE__*/_react.default.createElement("span", null, value), " ", /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("button", null, "Save")));
          }
        }

        return language && value ? /*#__PURE__*/_react.default.createElement(_SynHi.default, {
          language: language
        }, value) : /*#__PURE__*/_react.default.createElement("span", null);
      }
    };
    _this.state = {
      value: '' || props.source
    };
    return _this;
  }

  (0, _createClass2.default)(MarkdownPreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.source !== this.props.source) {
        this.setState({
          value: nextProps.source
        }, function () {
          _this2.highlight();
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.source !== this.props.source || nextState.value !== this.state.value;
    }
  }, {
    key: "renderHTML",
    value: function renderHTML(mdStr) {
      var _this3 = this;

      this.setState({
        value: mdStr
      }, function () {
        _this3.highlight();
      });
    }
  }, {
    key: "highlight",
    value: function () {
      var _highlight = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var codes, _iterator, _step, value, tag, lang;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.mdp.current) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                codes = this.mdp.current.getElementsByTagName('code');
                _iterator = _createForOfIteratorHelper(codes);
                _context.prev = 4;

                _iterator.s();

              case 6:
                if ((_step = _iterator.n()).done) {
                  _context.next = 24;
                  break;
                }

                value = _step.value;
                tag = value.parentNode;

                if (!(tag && tag.tagName === 'PRE' && /^language-/.test(value.className.trim()))) {
                  _context.next = 22;
                  break;
                }

                lang = value.className.trim().replace(/^language-/, '');
                _context.prev = 11;

                if (this.loadedLang.includes(lang)) {
                  _context.next = 16;
                  break;
                }

                this.loadedLang.push(lang);
                _context.next = 16;
                return (0, _langs.loadLang)(lang);

              case 16:
                _context.next = 18;
                return _prismjs.default.highlightElement(value);

              case 18:
                _context.next = 22;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](11);

              case 22:
                _context.next = 6;
                break;

              case 24:
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t1 = _context["catch"](4);

                _iterator.e(_context.t1);

              case 29:
                _context.prev = 29;

                _iterator.f();

                return _context.finish(29);

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 26, 29, 32], [11, 20]]);
      }));

      function highlight() {
        return _highlight.apply(this, arguments);
      }

      return highlight;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          onScroll = _this$props.onScroll,
          onMouseOver = _this$props.onMouseOver,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["className", "style", "onScroll", "onMouseOver"]);
      var cls = (0, _classnames.default)(className, 'wmde-markdown', 'wmde-markdown-color');
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.mdp,
        onScroll: onScroll,
        style: style,
        onMouseOver: onMouseOver,
        className: cls
      }, /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, (0, _extends2.default)({
        escapeHtml: false,
        allowNode: _allowNode.default
      }, other, {
        source: this.state.value,
        renderers: this.renderers
      })));
    }
  }]);
  return MarkdownPreview;
}(_react.Component);

exports.default = MarkdownPreview;
MarkdownPreview.defaultProps = {
  renderers: {}
}; 
//# sourceMappingURL=index.js.map