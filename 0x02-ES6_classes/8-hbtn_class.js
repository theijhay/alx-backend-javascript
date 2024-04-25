// 8-hbtn_class.js
class HolbertonClass {
  constructor(size, location) {
    this._size = size; // Store size in _size attribute
    this._location = location; // Store location in _location attribute
  }

  // Getter for size attribute
  get size() {
    return this._size;
  }

  // Getter for location attribute
  get location() {
    return this._location;
  }

  // Override the valueOf method to return size when cast into a Number
  valueOf() {
    return this._size;
  }

  // Override the toString method to return location when cast into a String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
