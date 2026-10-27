// Q3 – Bug Tracker: Callback to Promise Migration
// Promise-based replacement for the original callback-style fetchBugs().

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3; // random simulated API failure

            if (apiFailed) {
                reject(new Error("Bug tracker API request failed."));
                return;
            }

            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bugs retrieved successfully:");
        console.table(bugs.map((bug, index) => ({ Number: index + 1, Bug: bug })));
    })
    .catch(error => {
        console.error("Unable to fetch bugs:", error.message);
    });
