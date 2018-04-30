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

var SectionVenue = function (_React$Component) {
  (0, _inherits3.default)(SectionVenue, _React$Component);

  function SectionVenue() {
    (0, _classCallCheck3.default)(this, SectionVenue);
    return (0, _possibleConstructorReturn3.default)(this, (SectionVenue.__proto__ || (0, _getPrototypeOf2.default)(SectionVenue)).call(this));
  }

  (0, _createClass3.default)(SectionVenue, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var mapElement = document.getElementById('venue-map');
      mapElement.innerHTML = '\n      <iframe\n      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.178073462174!2d-76.66347725008087!3d5.687387995857421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e488f6da62de11d%3A0xb545d85aecc1e7a0!2sComfachoco!5e0!3m2!1ses-419!2sco!4v1525045034031"\n      frameborder="0" style="border:0" allowfullscreen></iframe>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'wrap-venue' },
        React.createElement(
          'section',
          { className: 'section-venue' },
          React.createElement('article', { className: 'section-venue__article wrap-venue-map', id: 'venue-map' }),
          React.createElement(
            'article',
            { className: 'section-venue__article' },
            React.createElement(
              'h1',
              { className: 'section-venue__article__title' },
              'Lugar de encuentro',
              React.createElement('div', { className: 'lower-bar' })
            ),
            React.createElement(
              'p',
              { className: 'section-venue__article__copy' },
              'Hotel ',
              React.createElement(
                'b',
                null,
                'Comfachoc\xF3'
              ),
              ' ubicado en la ciudad de Quibd\xF3 a solo 5 minutos del aeropuerto el Cara\xF1o de la ciudad de Quibd\xF3.',
              React.createElement(
                'b',
                null,
                ' Calle. 23 #5-1, Quibd\xF3, Choc\xF3'
              )
            )
          )
        )
      );
    }
  }]);
  return SectionVenue;
}(React.Component);

module.exports = InjectChildComponent(SectionVenue, []);