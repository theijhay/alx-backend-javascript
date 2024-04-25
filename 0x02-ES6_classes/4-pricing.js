// 4-pricing.js
import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this._currency = null;

    this.amount = amount; // Using the setter to validate and set the amount
    this.currency = currency; // Using the setter to validate and set the currency
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be an instance of Currency class');
    }
  }

  // Method to display full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and conversion rate must be numbers');
  }
}

export default Pricing;
