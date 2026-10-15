// Q6. Event-Based Counter Simulation
// Simulate clicks by calling increment() and decrement().

let count = 0;

function showCount() {
    // Nested function can read the outer function's count parameter.
    function logCount(currentCount) {
        console.log(`Current count: ${currentCount}`);
    }
    logCount(count);
}

function increment() {
    count++;
    showCount();
}

function decrement() {
    count--;
    showCount();
}

// Simulated click events:
increment();
increment();
decrement();
