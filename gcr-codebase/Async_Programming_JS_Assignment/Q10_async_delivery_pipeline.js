// Q10 – The Final Delivery: Async Pipeline Debugger
// Each step has a random 1–2 second delay and can randomly fail.
// await runs each pipeline stage in order; try/catch handles a rejected step.

function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1001);

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed`));
            } else {
                resolve(successMessage);
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        console.log("Step 1: Order taken");
        await deliveryStep("takeOrder", "Order accepted");

        console.log("Step 2: Food prepared");
        await deliveryStep("prepare", "Food prepared");

        console.log("Step 3: Package ready");
        await deliveryStep("pack", "Package ready");

        console.log("Step 4: Out for delivery");
        await deliveryStep("dispatch", "Out for delivery");

        await deliveryStep("deliver", "Delivered");
        console.log("Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();

// Async behavior notes:
// - Calling an async function returns a Promise.
// - await suspends only runPipeline() until the current Promise settles;
//   JavaScript can process other work while the timer is pending.
// - Successful steps continue sequentially. A rejection skips the remaining
//   steps and transfers control to catch.
// - Promise/timer callbacks are scheduled through the event loop; the exact
//   completion time varies because each delay is random.
