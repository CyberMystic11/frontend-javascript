// ===== Task 6: Employees =====

// Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director Class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher Class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    return salary < 500 ? new Teacher() : new Director();
  } else {
    // Remove non-digit characters and convert to number
    const numSalary = parseInt(salary.replace(/\D/g, ""), 10);
    return numSalary < 500 ? new Teacher() : new Director();
  }
}

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work function
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Test task 6
console.log(createEmployee(200).constructor.name);   // Teacher
console.log(createEmployee(1000).constructor.name);  // Director
console.log(createEmployee("$500").constructor.name); // Director

executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks

// ===== Task 7: Subjects =====

// String literal type
type Subjects = 'Math' | 'History';

// teachClass function
function teachClass(todayClass: Subjects): string {
  switch (todayClass) {
    case 'Math':
      return 'Teaching Math';
    case 'History':
      return 'Teaching History';
  }
}

// Test task 7
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History
