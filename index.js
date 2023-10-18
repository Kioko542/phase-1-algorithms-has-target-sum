// Function to check if there is a pair of numbers in an array that adds up to a target number
function hasTargetSum(array, target) {
  // Nested loop to check each pair of numbers
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // If the pair adds up to the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no pair is found, return false
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Should return true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // Should return true
console.log(hasTargetSum([1, 2, 5], 4)); // Should return false


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
