// Base class
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    greet() {
        return `Hello my name is ${this.name}`
    }
}
let basicStudent = new Student("adam", 10);

// College Student
// roomNumber : 155
class CollegeStudent extends Student {
    constructor(name, grade, roomNumber) {
        super(name, grade);
        this.roomNumber = roomNumber;
    }
    greet() {
        return `Hello my name is ${this.name} come find me at room ${this.roomNumber}`
    }
}
let collegeStudent = new CollegeStudent("ryan", 14, 123);
console.log(basicStudent);
console.log(collegeStudent);
console.log(collegeStudent.greet());

class EFAStudent extends Student {
    constructor(name, grade, course, badge) {
        super(name, grade);
        this.course = course;
        this.badge = badge;
    }
    greet() {
        return `Hello my name is ${this.name}. I'm currently in ${this.course}, ${this.badge} badge!`
    }
}
let matthew = new EFAStudent("Matthew", undefined, "web dev", "gold");
console.log(matthew.greet());