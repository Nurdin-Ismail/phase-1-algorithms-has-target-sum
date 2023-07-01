function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let h = i + 1; h < array.length; h++) {
      if (array[i] + array[h] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasTargetSum([30,21,72,65,1,4,3,7,40], 70))

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  for every item in the list
  if 
*/

/*
  Add written explanation of your solution here
  an array and a target number is given
  the algorithm is supoosed to return true if there exists a pair of numbers that add up to the target

*/

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
