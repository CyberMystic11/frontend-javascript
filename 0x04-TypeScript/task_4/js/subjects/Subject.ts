namespace Subjects {
  export class Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "";
    }

    getAvailableTeacher(): string {
      return "";
    }
  }
}
