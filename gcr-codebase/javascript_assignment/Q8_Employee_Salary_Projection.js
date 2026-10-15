// Q8. Employee Salary Projection
// Calculate salary for five years with an annual increment.

const currentSalary = 30000;
const annualIncrementRate = 8;
let projectedSalary = currentSalary;
const projection = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary *= 1 + annualIncrementRate / 100;
    projectedSalary = Math.round(projectedSalary);
    projection.push({
        Year: year,
        Salary: `₹${projectedSalary.toLocaleString("en-IN")}`
    });
}

console.table(projection);
