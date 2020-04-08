// Write a function, stepper(nums), that takes in an array of non negative
// numbers. Each element of the array represents the maximum number of steps you
// can take from that position in the array. The function should return a
// boolean indicating if it is possible to travel from the first position of the
// array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//   - We begin at first position, 3.
//   - Since the element is 3 we can take up to 3 steps from this position.
//   - This means we can step to the 1, 0, or 5
//   - Say we step to 1
//   - Since the element is 1, now the only option is to take 1 step to land
//   on 0
//   - etc...
//
// Solve this problem with tabulation.
// Once you're done, come back and try to solve it with memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through
//                                      //          elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through
//                                      //          elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to
//                                      //           the end
function stepper(nums) {
    let table = new Array(nums.length).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        if (table[i] === true) {
            for (let step = 1; step <= nums[i]; step++) {
                table[i + step] = true;
            }
        }
    }
    return table[table.length - 1];

}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of
// nonnegative numbers. The function should return the maximum sum of elements
// in the array we can get if we cannot take adjacent elements into the sum.
//
// Solve this problem with tabulation.
// Once you're done, come back and try to solve it with memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4]) [2,7,11,11,15]   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])  [4, 2, 5, 8]        // => 10, because 4 + 6
function maxNonAdjacentSum(nums) {
    let table = new Array(nums.length).fill(0);
    table[0] = nums[0];
    if (nums.length === 0) return 0;
    for (let i = 1; i < table.length; i++) {
        let includeThisNum;
        let notIncludeThisNum;
        if (table[i - 2] === undefined) {
            includeThisNum = nums[i];
            notIncludeThisNum = table[i - 1];
        } else {
            includeThisNum = nums[i] + table[i - 2];
            notIncludeThisNum = table[i - 1];
        }
        table[i] = Math.max(includeThisNum, notIncludeThisNum);
    }
    return table[table.length - 1];
}

// Write a function, minChange(coins, amount), that accepts an array of coin
// values and a target amount as arguments. The method should the minimum number
// of coins needed to make the target amount. A coin value can be used multiple
// times.
//
// Solve this problem with tabulation.
// You've already solved this with memoization.
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {

}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};
