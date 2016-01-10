class Calculator extends React.Component {
  static defaultProps = {
    amount: 300,
    term: 30
  }

  render() {
    return (
      <div>
        <AmountSelect
          onChange={this.changeAmount.bind(this)}
          value={this.props.amount} />
        <TermSelect
          onChange={this.changeTerm.bind(this)}
          value={this.props.term} />
        <Offer
          amount={this.props.amount}
          term={this.props.term} />
      </div>
    );
  }

  changeAmount(event) {
    this.props.onChange({
      term: this.props.term, amount: parseInt(event.target.value)
    });
  }

  changeTerm(event) {
    this.props.onChange({
      amount: this.props.amount, term: parseInt(event.target.value)
    });
  }
}

class AmountSelect extends React.Component {
  render() {
    return (
      <div>
        <div>Amount:</div>
        <input type="range" min="50" max="500"
          onChange={this.props.onChange}
          value={this.props.value} />
      </div>
    );
  }
}

class TermSelect extends React.Component {
  render() {
    return (
      <div>
        <div>Term:</div>
        <input type="range" min="7" max="30"
          onChange={this.props.onChange}
          value={this.props.value} />
      </div>
    );
  }
}

class Offer extends React.Component {
  render() {
    var amount = parseInt(this.props.amount);
    var term = parseInt(this.props.term);
    var interestRate = 0.5;
    var commission = 0.1;
    var interest = amount * interestRate * (term / 365.0);
    var totalAmount = amount + interest + (commission * amount);

    return (
      <div>
        <div>
          <strong>Amount:</strong>
          {amount}
        </div>
        <div>
          <strong>Term:</strong>
          {term}
        </div>
        <div>
          <strong>Interest rate:</strong>
          {interestRate * 100}%
        </div>
        <div>
          <strong>Commission:</strong>
          {commission * 100}%
        </div>
        <div>
          <strong>Interest:</strong>
          {interest}
        </div>
        <div>
          <strong>Total Amount:</strong>
          {totalAmount}
        </div>
      </div>
    );
  }
}
