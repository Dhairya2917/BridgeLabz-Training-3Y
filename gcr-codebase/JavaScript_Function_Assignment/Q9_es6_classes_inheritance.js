// Q9: Compare prototype-based inheritance with ES6 class inheritance.

// Prototype-based version.
function PersonPrototype(name) {
  this.name = name;
}
PersonPrototype.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

function StudentPrototype(name, branch) {
  PersonPrototype.call(this, name);
  this.branch = branch;
}
StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;
StudentPrototype.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

// ES6 class version.
class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

console.log("Prototype version:");
const prototypeStudent = new StudentPrototype("Dhairya", "Computer Science");
prototypeStudent.showName();
prototypeStudent.showBranch();

console.log("ES6 class version:");
const classStudent = new Student("Dhairya", "Computer Science");
classStudent.showName();
classStudent.showBranch();

// Both versions print the same name and branch values.
