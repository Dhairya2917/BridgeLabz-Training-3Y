// Q7 – The Lazy Loader: Promise Combinator Practice
// Use Promise.allSettled() so one rejected module does not stop the others.

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Profile failed"))
                : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Posts failed"))
                : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Messages failed"))
                : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboardModules() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`${moduleNames[index]} succeeded: ${result.value}`);
        } else {
            console.error(`${moduleNames[index]} failed: ${result.reason.message}`);
        }
    });

    console.log(`Total time taken: ${Date.now() - startTime} ms`);
}

loadDashboardModules();
