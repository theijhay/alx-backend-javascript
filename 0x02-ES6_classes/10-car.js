export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    // Use Symbol to create a unique property for the prototype
    const clone = Object.create(this.constructor.prototype);

    // Copy the properties to the new object
    clone._brand = this._brand;
    clone._motor = this._motor;
    clone._color = this._color;

    return clone;
  }
}
