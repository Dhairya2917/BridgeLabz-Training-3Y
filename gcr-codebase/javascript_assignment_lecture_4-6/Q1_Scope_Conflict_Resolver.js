// Q1. Scope Conflict Resolver
// Demonstrate global and local scope while calculating salary.

let bonus = 5000; // Global variable

function calculateSalary() {
    const salary = 40000; // Local variable
    const isPermanent = true; // Change to false to test the other outcome

    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${totalSalary}`);
}

calculateSalary();
console.log(`Global bonus remains: ₹${bonus}`);
