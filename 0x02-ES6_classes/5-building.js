// 5-building.js
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // Check if the class is not the Building class itself and if the evacuationWarningMessage method is the default one from the Building prototype
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      // Throw an error if the subclass does not override the evacuationWarningMessage method
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    this._sqft = value;
  }

  // Default implementation of evacuationWarningMessage
  evacuationWarningMessage() {
    // Throw an error indicating that this method must be implemented by subclasses
    throw new Error('evacuationWarningMessage must be implemented by subclasses');
  }
}
