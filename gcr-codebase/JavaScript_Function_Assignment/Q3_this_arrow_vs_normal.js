// Q3: Arrow functions do not get their own `this`.
const userWithArrow = {
  name: "Dhairya",
  showName: () => {
    console.log(this.name);
  }
};

userWithArrow.showName(); // Usually undefined in a normal script/module context,
// because an arrow function takes `this` from its surrounding scope.

// Fix: use a normal method function, whose `this` is the object before the dot.
const userWithNormalFunction = {
  name: "Dhairya",
  showName: function () {
    console.log(this.name);
  }
};

userWithNormalFunction.showName(); // Dhairya
