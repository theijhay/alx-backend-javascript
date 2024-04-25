export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (
      this.constructor !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    ) {
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
    throw new Error('evacuationWarningMessage must be implemented by subclasses');
  }
}
