'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("./index.less");
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('prop-types');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number_picker_prefix = 'number-picker';

var NumberPicker = function (_React$Component) {
    _inherits(NumberPicker, _React$Component);

    function NumberPicker(props) {
        _classCallCheck(this, NumberPicker);

        var min = props.min;
        var max = props.max;
        var value = props.value;

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberPicker).call(this, props));

        value = value < min ? min : value > max ? max : value;

        _this.state = {
            value: value,
            fakeValue: value,
            focused: props.autoFocus
        };

        _this.onAdd = _this.onAdd.bind(_this);
        _this.onReduce = _this.onReduce.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(NumberPicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setValue(nextProps.value);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state;
            var value = _state.value;
            var fakeValue = _state.fakeValue;
            var focused = _state.focused;
            var _props = this.props;
            var min = _props.min;
            var max = _props.max;
            var step = _props.step;
            var autoFocus = _props.autoFocus;
            var disabled = _props.disabled;
            var readOnly = _props.readOnly;


            var displayValue = focused ? fakeValue : value;

            return _react2.default.createElement(
                'div',
                { className: number_picker_prefix },
                _react2.default.createElement(
                    'button',
                    { className: number_picker_prefix + '-reduce',
                        disabled: disabled || value <= min, onClick: this.onReduce },
                    _react2.default.createElement('i', null, '—')
                ),
                _react2.default.createElement('input', { type: 'number', ref: 'input',
                    min: min,
                    max: max,
                    step: step,
                    value: displayValue,
                    disabled: disabled,
                    readOnly: readOnly,
                    autoFocus: autoFocus,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    onChange: this.onChange }),
                _react2.default.createElement(
                    'button',
                    { className: number_picker_prefix + '-add',
                        disabled: disabled || value >= max, onClick: this.onAdd },
                    _react2.default.createElement('i', null, '+')
                )
            );
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            var _props2 = this.props;
            var min = _props2.min;
            var max = _props2.max;
            var disabled = _props2.disabled;
            var onChange = _props2.onChange;


            if (disabled) {
                return;
            }

            value = value < min ? min : value > max ? max : value;

            if (value !== this.state.value) {
                this.setState({
                    value: value,
                    fakeValue: value
                });
                onChange(value);
            }
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'onAdd',
        value: function onAdd() {
            var value = this.state.value;
            var _props3 = this.props;
            var min = _props3.min;
            var max = _props3.max;
            var step = _props3.step;
            var disabled = _props3.disabled;


            value += step;
            this.setValue(value);
        }
    }, {
        key: 'onReduce',
        value: function onReduce() {
            var value = this.state.value;
            var _props4 = this.props;
            var min = _props4.min;
            var max = _props4.max;
            var step = _props4.step;
            var disabled = _props4.disabled;


            value -= step;
            this.setValue(value);
            // this.refs.input.focus();
        }
    }, {
        key: 'onBlur',
        value: function onBlur(e) {
            var _props5 = this.props;
            var min = _props5.min;
            var max = _props5.max;
            var onChange = _props5.onChange;

            var value = e.target.value.trim() || this.state.value;

            if (isNaN(value)) {
                value = this.state.value;
            } else {
                value = Number(value);
                value = value < min ? min : value > max ? max : value;
            }

            if (value !== this.state.value) {
                onChange(value);
            }

            this.setState({
                value: value,
                fakeValue: value,
                focused: false
            });
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            this.setState({
                focused: true
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            this.setState({
                fakeValue: e.target.value.trim()
            });
        }
    }]);

    return NumberPicker;
}(_react2.default.Component);

exports.default = NumberPicker;


NumberPicker.propTypes = {
    min:       _PropTypes2.default.number,
    max:       _PropTypes2.default.number,
    step:      _PropTypes2.default.number,
    value:     _PropTypes2.default.number,
    disabled:  _PropTypes2.default.bool,
    readOnly:  _PropTypes2.default.bool,
    autoFocus: _PropTypes2.default.bool
};

NumberPicker.defaultProps = {
    step: 1,
    value: 1,
    max: Infinity,
    min: -Infinity,
    disabled: false,
    readOnly: false,
    autoFocus: false,
    onChange: function onChange() {}
};
module.exports = exports['default'];
