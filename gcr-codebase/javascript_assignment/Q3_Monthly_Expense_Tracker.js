// Q3. Monthly Expense Tracker
// Calculate total, average, and total after adding 10% tax.

const expenses = [
    { category: "Food", amount: 3500 },
    { category: "Travel", amount: 1200 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

let total = 0;
for (const expense of expenses) {
    total += expense.amount;
}

const average = total / expenses.length;
total += total * 0.10; // Add 10% tax using an assignment operator.

console.log(`Total including 10% tax: ₹${total.toFixed(2)}`);
console.log(`Average expense before tax: ₹${average.toFixed(2)}`);
console.log(`Final amount after tax: ₹${total.toFixed(2)}`);
