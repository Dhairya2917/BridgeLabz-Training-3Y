// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    if (!name.trim() || price < 0 || !Number.isInteger(quantity) || quantity < 1) {
      throw new Error("Provide a name, non-negative price, and positive whole-number quantity.");
    }
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    // Accepts SAVE followed by a number or DISC followed by a number.
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code.trim().toUpperCase());
    if (!match) {
      return { valid: false, message: "Invalid coupon. Use a format such as SAVE20 or DISC10." };
    }

    const discountPercent = Number(match[2]);
    if (discountPercent < 1 || discountPercent > 100) {
      return { valid: false, message: "Coupon discount must be between 1 and 100." };
    }

    const total = this.getTotal();
    const finalTotal = total - total * (discountPercent / 100);
    return { valid: true, discountPercent, total, finalTotal };
  }
}

const cart = new Cart();
cart.addItem("T-shirt", 500, 2);
cart.addItem("Cap", 250, 1);

console.log("Items:", cart.items);
console.log(`Cart total: ₹${cart.getTotal().toFixed(2)}`);

const result = cart.applyCoupon("SAVE20");
if (result.valid) {
  console.log(`Coupon discount: ${result.discountPercent}%`);
  console.log(`Final total: ₹${result.finalTotal.toFixed(2)}`);
} else {
  console.log(result.message);
}
