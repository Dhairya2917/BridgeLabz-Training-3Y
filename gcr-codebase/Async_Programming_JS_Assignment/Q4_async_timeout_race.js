// Q4 – DevOps Delay: Async Timeout Race
// Server A responds after 2 seconds; Server B responds after 3 seconds.
// Random failures demonstrate Promise rejection handling.

function serverResponse(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed`));
            } else {
                resolve(`${serverName} responded successfully`);
            }
        }, delay);
    });
}

const serverA = serverResponse("Server A", 2000);
const serverB = serverResponse("Server B", 3000);

// Promise.all succeeds only if both server Promises succeed.
Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("Deployment error:", error.message));

// Promise.race settles as soon as the first Promise settles.
// This means a first rejection also wins the race.
Promise.race([serverResponse("Server A", 2000), serverResponse("Server B", 3000)])
    .then(response => console.log("Fastest response:", response))
    .catch(error => console.error("Fastest response failed:", error.message));
