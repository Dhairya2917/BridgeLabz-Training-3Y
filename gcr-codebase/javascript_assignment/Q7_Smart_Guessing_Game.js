// Q7. Smart Guessing Game
// Compare a test guess with a random secret number from 1 to 50.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Change this test value to try other guesses.

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number (for testing): ${secretNumber}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
