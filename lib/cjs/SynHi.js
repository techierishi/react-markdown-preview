"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _prismReactRenderer = _interopRequireWildcard(require("prism-react-renderer"));

var _nightOwl = _interopRequireDefault(require("prism-react-renderer/themes/nightOwl"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  width: 2em;\n  user-select: none;\n  opacity: 0.8;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Pre = _styledComponents.default.pre(_templateObject());

var LineNo = _styledComponents.default.span(_templateObject2());

var SynHi = function SynHi(_ref) {
  var children = _ref.children,
      language = _ref.language;
  return /*#__PURE__*/_react.default.createElement(_prismReactRenderer.default, (0, _extends2.default)({}, _prismReactRenderer.defaultProps, {
    theme: _nightOwl.default,
    code: children,
    language: language
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return /*#__PURE__*/_react.default.createElement(Pre, {
      className: className,
      style: style
    }, tokens.map(function (line, i) {
      return /*#__PURE__*/_react.default.createElement("div", getLineProps({
        line: line,
        key: i
      }), /*#__PURE__*/_react.default.createElement(LineNo, null, i + 1), line.map(function (token, key) {
        return /*#__PURE__*/_react.default.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }));
    }));
  });
};

var _default = SynHi;
exports.default = _default;
module.exports = exports.default; 
//# sourceMappingURL=SynHi.js.map