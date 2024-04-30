// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 23,
    location: 'Los Angeles',
  };
  
  // Create an array containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Render the table with the studentsList array
  function renderTable(students: Student[]) {
    const table = document.createElement('table');
  
    students.forEach((student) => {
      const row = table.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
  
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    document.body.appendChild(table);
  }
  
  // Call the renderTable function with the studentsList array
  renderTable(studentsList);
