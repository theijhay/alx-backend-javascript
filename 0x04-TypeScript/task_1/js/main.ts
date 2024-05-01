// Task 1: Creating an interface for a Teacher

// Define a custom type for the additional properties
type AdditionalProperties = { [key: string]: any };

// Define the Teacher interface
interface Teacher extends AdditionalProperties {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

// Create a teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2: Extending the Teacher class

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3: Printing teachers

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
};

// Example usage
const teacherName = printTeacher("John", "Doe"); // Output: "J. Doe"
console.log(teacherName);

// Task 4: Writing a class

// Define the StudentConstructor interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define the StudentClass interface
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass class
class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create an instance of StudentClass
const student = new StudentClass("John", "Doe");

// Call the workOnHomework method
console.log(student.workOnHomework()); // Output: "Currently working"

// Call the displayName method
console.log(student.displayName()); // Output: "John"