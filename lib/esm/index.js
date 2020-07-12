import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e) { function e(_x) { return _e.apply(this, arguments); } e.toString = function () { return _e.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e2) { function e(_x2) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Component } from 'react';
import classnames from 'classnames';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import allowNode from './allowNode';
import { loadLang } from './langs';
import SynHi from './SynHi';
import "./styles/markdown.css";
import "./styles/markdowncolor.css";
import styled from 'styled-components';

var JsxParser = require('react-jsx-parser');

export function TestComp(props) {
  return /*#__PURE__*/React.createElement("div", null, "Test Comp ", /*#__PURE__*/React.createElement("button", null, "Submit"));
}
var PieChart = styled(TestComp)(_templateObject());

var MarkdownPreview = /*#__PURE__*/function (_Component) {
  _inherits(MarkdownPreview, _Component);

  var _super = _createSuper(MarkdownPreview);

  function MarkdownPreview(props) {
    var _this;

    _classCallCheck(this, MarkdownPreview);

    _this = _super.call(this, props);
    _this.mdp = /*#__PURE__*/React.createRef();
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
            return /*#__PURE__*/React.createElement("div", {
              className: "encDecWrapper"
            }, " ", /*#__PURE__*/React.createElement("span", null, value), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("button", null, "Save")));
          }
        }

        return language && value ? /*#__PURE__*/React.createElement(SynHi, {
          language: language
        }, value) : /*#__PURE__*/React.createElement("span", null);
      }
    };
    _this.state = {
      value: '' || props.source
    };
    return _this;
  }

  _createClass(MarkdownPreview, [{
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
      var _highlight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var codes, _iterator, _step, value, tag, lang;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
                return loadLang(lang);

              case 16:
                _context.next = 18;
                return Prism.highlightElement(value);

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
          other = _objectWithoutProperties(_this$props, ["className", "style", "onScroll", "onMouseOver"]);

      var cls = classnames(className, 'wmde-markdown', 'wmde-markdown-color');
      return /*#__PURE__*/React.createElement("div", {
        ref: this.mdp,
        onScroll: onScroll,
        style: style,
        onMouseOver: onMouseOver,
        className: cls
      }, /*#__PURE__*/React.createElement(ReactMarkdown, _extends({
        escapeHtml: false,
        allowNode: allowNode
      }, other, {
        source: this.state.value,
        renderers: this.renderers
      })));
    }
  }]);

  return MarkdownPreview;
}(Component);

MarkdownPreview.defaultProps = {
  renderers: {}
};
export { MarkdownPreview as default }; 
//# sourceMappingURL=index.js.map