import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 2em;\n  user-select: none;\n  opacity: 0.8;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
var Pre = styled.pre(_templateObject());
var LineNo = styled.span(_templateObject2());

var SynHi = function SynHi(_ref) {
  var children = _ref.children,
      language = _ref.language;
  return /*#__PURE__*/React.createElement(Highlight, _extends({}, defaultProps, {
    theme: theme,
    code: children,
    language: language
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return /*#__PURE__*/React.createElement(Pre, {
      className: className,
      style: style
    }, tokens.map(function (line, i) {
      return /*#__PURE__*/React.createElement("div", getLineProps({
        line: line,
        key: i
      }), /*#__PURE__*/React.createElement(LineNo, null, i + 1), line.map(function (token, key) {
        return /*#__PURE__*/React.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }));
    }));
  });
};

export default SynHi; 
//# sourceMappingURL=SynHi.js.map