// File: main.ts

// Interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Classes
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  // Functions
  function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
  }
  
  function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  // String literal types
  type Subjects = 'Math' | 'History';
  
  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    } else {
      return 'Teaching History';
    }
  }
  
  // Example usage
  const employee1 = createEmployee(200);
  console.log(employee1 instanceof Teacher ? 'Teacher' : 'Director');
  
  const employee2 = createEmployee(1000);
  console.log(employee2 instanceof Teacher ? 'Teacher' : 'Director');
  
  const employee3 = createEmployee('$500');
  console.log(employee3 instanceof Teacher ? 'Teacher' : 'Director');
  
  console.log(executeWork(createEmployee(200)));
  console.log(executeWork(createEmployee(1000)));
  
  console.log(teachClass('Math'));
  console.log(teachClass('History'));
  