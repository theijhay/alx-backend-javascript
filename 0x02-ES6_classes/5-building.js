// Define a class named Building and export it as the default export
export default class Building {
  // Constructor that takes a parameter sqft
  constructor(sqft) {
    // Initialize the _sqft attribute with the value of sqft passed to the constructor
    this._sqft = sqft;

    // Check if the class is not the Building class itself and if the evacuationWarningMessage method is not overridden
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      // Throw an error if the subclass does not override the evacuationWarningMessage method
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft attribute
  set sqft(value) {
    this._sqft = value;
  }
}
