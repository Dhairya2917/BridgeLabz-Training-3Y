// Q2. String Manipulation Report
// Clean and format a product title using the required string methods.

const productName = " wireless headphones PRO ";

const trimmedName = productName.trim().toLowerCase();
const titleCaseName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const cleanedTitle = titleCaseName.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
