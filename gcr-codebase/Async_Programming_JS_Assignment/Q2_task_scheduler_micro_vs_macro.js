// Q2 – Task Scheduler: Micro vs Macro Challenge
console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise.then callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise.then callback (microtask)
// setTimeout callback (macrotask)
//
// Synchronous code runs first. After the current call stack is empty,
// JavaScript drains the microtask queue (including Promise callbacks)
// before processing queued macrotasks such as setTimeout callbacks.
