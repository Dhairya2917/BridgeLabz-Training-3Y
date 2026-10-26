// Q8: Add a custom myMap method to Array.prototype.
// This follows map() behavior for ordinary arrays, including skipping empty slots.
Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("myMap called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  const array = Object(this);
  const result = new Array(array.length);

  for (let index = 0; index < array.length; index++) {
    if (index in array) {
      result[index] = callback.call(thisArg, array[index], index, array);
    }
  }

  return result;
};

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
