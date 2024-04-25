// 2-hbtn_course.js
class HolbertonCourse {
  constructor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];

    this.name = name; // Using the setter to validate and set the name
    this.length = length; // Using the setter to validate and set the length
    this.students = students; // Using the setter to validate and set the students
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;
