// Q4. Academic Performance Evaluator
// Evaluate marks and apply the rule that any subject below 35 means Detained.

const marks = [88, 91, 79, 86, 90];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailedSubject = marks.some(mark => mark < 35);

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (hasFailedSubject) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
