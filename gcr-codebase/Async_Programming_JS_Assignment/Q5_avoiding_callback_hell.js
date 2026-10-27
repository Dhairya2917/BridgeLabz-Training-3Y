// Q5 – Frontend Rush: Avoiding Callback Hell

// Version 1: Nested callbacks (callback hell).
function runWithNestedCallbacks() {
    console.log("Nested callback pipeline started");

    setTimeout(() => {
        console.log("design");
        setTimeout(() => {
            console.log("build");
            setTimeout(() => {
                console.log("test");
                setTimeout(() => {
                    console.log("deploy");
                    setTimeout(() => {
                        console.log("celebrate");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Version 2: Async/await.
function stage(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Async/await pipeline started");
    await stage("design");
    await stage("build");
    await stage("test");
    await stage("deploy");
    await stage("celebrate");
}

// Run one version at a time to compare the output clearly.
// Uncomment ONE of the following calls:
runWithNestedCallbacks();
// runWithAsyncAwait();

// async/await improves readability because sequential asynchronous steps
// appear in normal top-to-bottom order, reducing deeply nested callbacks.
// It does not make the operations synchronous; await pauses this async
// function until each Promise settles while the event loop continues working.
