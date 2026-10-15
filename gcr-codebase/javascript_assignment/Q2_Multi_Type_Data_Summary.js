// Q2. Multi-Type Data Summary
// Store different JavaScript data types and display a formatted report.

const userName = "Dhairya";
const age = 21;
const isStudent = true;
const subjects = ["HTML", "CSS", "JavaScript"];
const user = { name: "Dhairya", city: "Mathura" };
const middleName = null;
let address;

const entries = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "user", value: JSON.stringify(user), type: typeof user },
    { label: "middleName", value: middleName, type: "null" },
    { label: "address", value: String(address), type: typeof address }
];

console.table(entries);
