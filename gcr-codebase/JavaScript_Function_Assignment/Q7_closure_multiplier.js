// Q7: A closure remembers the multiplier from its outer function.
function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// Closure explanation:
// The returned function can still access `multiplier` after makeMultiplier
// has finished running. Its lexical environment keeps that value available.
