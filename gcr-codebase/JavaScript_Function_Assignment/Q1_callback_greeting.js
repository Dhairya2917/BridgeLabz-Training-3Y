// Q1: Demonstrate callback flow clearly.
function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greetUser("Dhairya", showEndMessage);

// Output:
// Hello Dhairya
// Welcome to the course!
