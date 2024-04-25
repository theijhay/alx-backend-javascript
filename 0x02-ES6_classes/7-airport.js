// 7-airport.js
class Airport {
  constructor(name, code) {
    this._name = name; // Store name in _name attribute
    this._code = code; // Store code in _code attribute
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Getter for code attribute
  get code() {
    return this._code;
  }

  // Override the default toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
