'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var InjectChildComponent = require('./Inject.js');

var _require = require('react-router-dom'),
    Link = _require.Link;

var SectionDate = function (_React$Component) {
  (0, _inherits3.default)(SectionDate, _React$Component);

  function SectionDate() {
    (0, _classCallCheck3.default)(this, SectionDate);
    return (0, _possibleConstructorReturn3.default)(this, (SectionDate.__proto__ || (0, _getPrototypeOf2.default)(SectionDate)).call(this));
  }

  (0, _createClass3.default)(SectionDate, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'background-section' },
        React.createElement(
          'div',
          { className: 'background-section__date ' },
          React.createElement(
            'span',
            { className: 'do-title appear ' },
            'JUNIO 16, 17 Y 18'
          )
        )
      );
    }
  }]);
  return SectionDate;
}(React.Component);

module.exports = InjectChildComponent(SectionDate, []);