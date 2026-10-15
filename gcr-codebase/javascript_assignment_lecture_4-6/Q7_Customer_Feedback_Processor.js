// Q7. Customer Feedback Processor
// Count words and check feedback for negative terms.

const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.trim().split(/\s+/).length;
const normalizedFeedback = feedback.toLowerCase();

const containsNegativeWords =
    normalizedFeedback.includes("bad") ||
    normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (containsNegativeWords) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
