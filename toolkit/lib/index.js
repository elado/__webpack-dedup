'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

window.React2 = _react2['default'];

var TestToolkit = (function (_React$Component) {
  _inherits(TestToolkit, _React$Component);

  function TestToolkit() {
    _classCallCheck(this, TestToolkit);

    _get(Object.getPrototypeOf(TestToolkit.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TestToolkit, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'h1',
        null,
        'TestToolkit'
      );
    }
  }]);

  return TestToolkit;
})(_react2['default'].Component);

exports.TestToolkit = TestToolkit;