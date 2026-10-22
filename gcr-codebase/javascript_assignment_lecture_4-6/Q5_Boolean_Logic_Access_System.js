// Q5. Boolean Logic Access System
// Access is secure only when all required conditions are true.

const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if (isSecure && !(isDoorLocked === false || isWindowClosed === false)) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Change the Boolean values above to test different outcomes.
