// Define a custom type for the additional properties
type AdditionalProperties = { [key: string]: any };

// Define the Teacher interface
interface Teacher extends AdditionalProperties {
  firstName: string;
  lastName: string;
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
  