import React from 'react';
import NumberFormat from 'react-number-format';

// M = P × ({[1 + i]n – 1} / i) × (1 + i). == SIP
// M = P × ((1 + i / 100) ^ Y) == OneTime
let maturity; // M
let amount; // P
let totalMonths;
let totalYears; // Y
let monthlyRate; // n
let interest; // i
let totalInvested;
let typeofInvestment;

export default class Calsy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maturity: '',
      totalInvested: '',
    };
  }
  handleRecurring() {
    maturity = Math.ceil(
      amount *
        (((1 + monthlyRate) ** totalMonths - 1) / monthlyRate) *
        (1 + monthlyRate)
    );
    totalInvested = Math.ceil(amount * totalMonths);
    this.setState(() => ({
      maturity: maturity,
      totalInvested: totalInvested,
    }));
  }

  handleOneTime() {
    maturity = Math.ceil(amount * (1 + interest / 100) ** totalYears);
    this.setState(() => ({
      maturity: maturity,
      totalInvested: amount,
    }));
  }

  initVariables() {
    typeofInvestment = this.props.selectedOption;
    amount = this.props.amount;
    interest = this.props.interest;
    totalMonths = this.props.years * 12 + this.props.months;
    totalYears = this.props.years + this.props.months / 12;
    monthlyRate = interest / 12 / 100;
  }

  calculate() {
    this.initVariables();

    if (typeofInvestment == 'recurring') {
      this.handleRecurring();
    } else if (typeofInvestment == 'oneTime') {
      this.handleOneTime();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.reRender !== prevProps.reRender) {
      this.calculate();
    }
  }

  componentDidMount() {
    this.calculate();
  }

  render() {
    return (
      <div>
        <h4>
          Invested Amount:{' '}
          <NumberFormat
            thousandsGroupStyle="lakh"
            value={this.state.totalInvested}
            prefix="₹"
            decimalSeparator="."
            type="text"
            displayType="text"
            thousandSeparator={true}
            allowNegative={true}
            decimalScale={2}
          />
        </h4>
        <h4>
          Estimated Returns:{' '}
          <NumberFormat
            thousandsGroupStyle="lakh"
            value={this.state.maturity - this.state.totalInvested}
            prefix="₹"
            decimalSeparator="."
            type="text"
            displayType="text"
            thousandSeparator={true}
            allowNegative={true}
            decimalScale={2}
          />
        </h4>
        <h4>
          Total Value:{' '}
          <NumberFormat
            thousandsGroupStyle="lakh"
            value={this.state.maturity}
            prefix="₹"
            decimalSeparator="."
            type="text"
            displayType="text"
            thousandSeparator={true}
            allowNegative={true}
            decimalScale={2}
          />
        </h4>
      </div>
    );
  }
}
