export default class Building {
  constructor(sqft) {
    // Store the sqft in a private property _sqft
    this._sqft = sqft;
  }

  get sqft() {
    // Getter for the _sqft property
    return this._sqft;
  }

  evacuationWarningMessage() {
    // This method is meant to be overridden by concrete subclasses
    // If a subclass does not override this method, it will throw the following error
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
