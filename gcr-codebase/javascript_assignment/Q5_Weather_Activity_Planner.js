// Q5. Weather Activity Planner
// Suggest an activity based on weather conditions.

const temperature = 24;
const isRaining = false;
const windSpeed = 10;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (!isRaining && temperature >= 15 || windSpeed <= 20) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Check the weather before going out.");
}
