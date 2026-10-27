// Q9 – Debugging the Event Loop
// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation: synchronous statements execute first, so both script logs
// appear before asynchronous callbacks. Promise.then() queues a microtask.
// setTimeout() queues a timer callback (macrotask/task). After the current
// call stack finishes, the event loop drains microtasks before timer tasks.
