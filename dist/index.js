'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesModule = require('./styles.module.scss');

var _stylesModule2 = _interopRequireDefault(_stylesModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KamePlayer = function (_React$Component) {
    _inherits(KamePlayer, _React$Component);

    function KamePlayer(props) {
        _classCallCheck(this, KamePlayer);

        return _possibleConstructorReturn(this, (KamePlayer.__proto__ || Object.getPrototypeOf(KamePlayer)).call(this, props));
    }

    _createClass(KamePlayer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _stylesModule2.default.videoContainer },
                _react2.default.createElement(
                    'video',
                    { className: _stylesModule2.default.video, preload: 'auto', poster: this.props.poster ? this.props.poster : "" },
                    this.props.sources ? this.props.sources.map(function (source) {
                        return _react2.default.createElement('source', { src: source.src, type: source.type, key: source.src });
                    }) : null,
                    this.props.download ? _react2.default.createElement(
                        'a',
                        { href: this.props.download },
                        'Download'
                    ) : null
                )
            );
        }
    }]);

    return KamePlayer;
}(_react2.default.Component);

exports.default = KamePlayer;