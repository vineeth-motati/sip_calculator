import React from 'react';
import NumberFormat from 'react-number-format';
import Dropdown from 'react-dropdown';

const years = [...Array(30 + 1).keys()].slice(1);
const months = [...Array(12).keys()];

export default class Form extends React.Component {
  state = {
    selectedOption: 'recurring',
    amount: '',
    interest: '',
    years: '2',
    months: '0',
    error: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState(() => ({
      selectedOption: changeEvent.target.value,
    }));
  };

  handleAmountChange = ({ floatValue }) => {
    this.setState(() => ({
      amount: (floatValue * 100 || 0).toString(),
    }));
  };
  handleInterestChange = ({ floatValue }) => {
    this.setState(() => ({
      interest: (floatValue * 100 || 0).toString(),
    }));
  };
  handleYearChange = ({ value }) => {
    this.setState(() => ({
      years: value.toString(),
    }));
  };
  handleMonthChange = ({ value }) => {
    this.setState(() => ({
      months: value.toString(),
    }));
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    if (!this.state.amount || !this.state.interest) {
      this.setState(() => ({
        error: 'Please provide amount and interest',
      }));
    } else {
      this.setState(() => ({
        error: '',
      }));

      this.props.onSubmit({
        selectedOption: this.state.selectedOption,
        amount: parseFloat(this.state.amount, 10) / 100,
        interest: parseFloat(this.state.interest, 10) / 100,
        years: parseFloat(this.state.years),
        months: parseFloat(this.state.months),
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="recurring"
                name="investmentType"
                defaultChecked
                onChange={this.handleOptionChange}
              />
              Recurring
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="oneTime"
                name="investmentType"
                onChange={this.handleOptionChange}
              />
              One-time
            </label>
          </div>
          <div>
            <h4>Amount</h4>
            <NumberFormat
              thousandsGroupStyle="lakh"
              value={this.state.amount ? this.state.amount / 100 : ''}
              prefix="₹"
              decimalSeparator="."
              type="text"
              thousandSeparator={true}
              allowNegative={true}
              decimalScale={2}
              onValueChange={this.handleAmountChange}
              isNumericString={true}
              placeholder="Enter amount"
            />
          </div>
          <div>
            <h4>Interest</h4>
            <NumberFormat
              suffix={'%'}
              decimalScale={2}
              value={this.state.interest ? this.state.interest / 100 : ''}
              onValueChange={this.handleInterestChange}
              placeholder="Enter annual rate"
            />
          </div>
          <div>
            <label>
              <h4>Duration</h4>years
              <Dropdown
                options={years}
                onChange={this.handleYearChange}
                value={this.state.years}
                placeholder="Years"
              />
              months
              <Dropdown
                options={months}
                onChange={this.handleMonthChange}
                value={this.state.months}
                placeholder="Months"
              />
            </label>
          </div>
          <div className="form-group">
            {this.state.error && <p>Error: {this.state.error}</p>}
            <button className="btn btn-primary mt-2" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
