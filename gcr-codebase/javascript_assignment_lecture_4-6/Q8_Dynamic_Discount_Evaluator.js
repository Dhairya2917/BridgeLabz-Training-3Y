// Q8. Dynamic Discount Evaluator
// Apply category discounts and an extra cart discount when eligible.

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const cartTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountedPrice = product.price * (1 - discountRate);
    discountedTotal += discountedPrice;

    console.log(
        `${product.item}: ₹${product.price.toFixed(2)}; ` +
        `discount ${discountRate * 100}%; after discount ₹${discountedPrice.toFixed(2)}`
    );
}

if (cartTotal > 50000) {
    discountedTotal *= 0.95; // Additional 5% overall discount
    console.log("Extra 5% cart discount applied.");
}

console.log(`Original cart total: ₹${cartTotal.toFixed(2)}`);
console.log(`Final total: ₹${discountedTotal.toFixed(2)}`);
