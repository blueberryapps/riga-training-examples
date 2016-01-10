"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = (function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator() {
    _classCallCheck(this, Calculator);

    _get(Object.getPrototypeOf(Calculator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Calculator, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(AmountSelect, {
          onChange: this.changeAmount.bind(this),
          value: this.props.amount }),
        React.createElement(TermSelect, {
          onChange: this.changeTerm.bind(this),
          value: this.props.term }),
        React.createElement(Offer, {
          amount: this.props.amount,
          term: this.props.term })
      );
    }
  }, {
    key: "changeAmount",
    value: function changeAmount(event) {
      this.props.onChange({
        term: this.props.term, amount: parseInt(event.target.value)
      });
    }
  }, {
    key: "changeTerm",
    value: function changeTerm(event) {
      this.props.onChange({
        amount: this.props.amount, term: parseInt(event.target.value)
      });
    }
  }], [{
    key: "defaultProps",
    value: {
      amount: 300,
      term: 30
    },
    enumerable: true
  }]);

  return Calculator;
})(React.Component);

var AmountSelect = (function (_React$Component2) {
  _inherits(AmountSelect, _React$Component2);

  function AmountSelect() {
    _classCallCheck(this, AmountSelect);

    _get(Object.getPrototypeOf(AmountSelect.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(AmountSelect, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "Amount:"
        ),
        React.createElement("input", { type: "range", min: "50", max: "500",
          onChange: this.props.onChange,
          value: this.props.value })
      );
    }
  }]);

  return AmountSelect;
})(React.Component);

var TermSelect = (function (_React$Component3) {
  _inherits(TermSelect, _React$Component3);

  function TermSelect() {
    _classCallCheck(this, TermSelect);

    _get(Object.getPrototypeOf(TermSelect.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(TermSelect, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "Term:"
        ),
        React.createElement("input", { type: "range", min: "7", max: "30",
          onChange: this.props.onChange,
          value: this.props.value })
      );
    }
  }]);

  return TermSelect;
})(React.Component);

var Offer = (function (_React$Component4) {
  _inherits(Offer, _React$Component4);

  function Offer() {
    _classCallCheck(this, Offer);

    _get(Object.getPrototypeOf(Offer.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Offer, [{
    key: "render",
    value: function render() {
      var amount = parseInt(this.props.amount);
      var term = parseInt(this.props.term);
      var interestRate = 0.5;
      var commission = 0.1;
      var interest = amount * interestRate * (term / 365.0);
      var totalAmount = amount + interest + commission * amount;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "strong",
            null,
            "Amount:"
          ),
          amount
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "strong",
            null,
            "Term:"
          ),
          term
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "strong",
            null,
            "Interest rate:"
          ),
          interestRate * 100,
          "%"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "strong",
            null,
            "Commission:"
          ),
          commission * 100,
          "%"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "strong",
            null,
            "Interest:"
          ),
          interest
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "strong",
            null,
            "Total Amount:"
          ),
          totalAmount
        )
      );
    }
  }]);

  return Offer;
})(React.Component);
