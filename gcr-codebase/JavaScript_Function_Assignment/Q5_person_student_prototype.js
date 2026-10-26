// Q5: Student inherits from Person using prototypes.
function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // Initialize inherited property.
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Dhairya", "Computer Science");
student.showName();
student.showBranch();

console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true
