/**
 * LeetCode 217: Contains Duplicate
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 */
/**
//1 <= nums.length <= 10^5
// This means the input array nums will have at least 1 element, and at most 100,000 elements.
// Your code must be able to handle up to 100,000 numbers efficiently.
// So using something fast like a Set (which is close to O(1) lookup) is good!
*/
//Translate: The problem asks you to check if any number appears more than once in a given array of integers. 
// The solution uses a Set to track numbers we've seen. If a number appears again, we return true (duplicate found). 
// If we go through the whole array with no repeats, we return false.


function containsDuplicate(nums: number[]): boolean {
    // TODO: Implement the Contains Duplicate solution
    // A Set is a special type of object in JavaScript/TypeScript
    // that only stores unique values.
    let arr: number[] = [];

    // Loop through each number in the input array
    for (let i = 0; i < nums.length; i++) {
        let hasNumber = nums[i];

        // If the number already exists in the Set, it's a duplicate
        if (arr.includes(hasNumber)) {
            return true; // Duplicate found
        }

        // Otherwise, add the number to the Set
        arr.push(hasNumber);
    }

    // If we finish the loop without finding a duplicate, return false
    return false;
}

// Test cases
// function testContainsDuplicate(): void {
    // TODO: Implement test cases for the Contains Duplicate solution
}

// export { containsDuplicate, testContainsDuplicate }; 

// function containsDuplicate(nums: number[]): boolean {
//     for (let i = 0; i < nums.length - 1; i++) { // Stops earlier
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) return true;
//         }
//     }
//     return false;
// }

/**
 * LeetCode 217: Contains Duplicate
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 * Constraints:
 *  1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */
//Translate: Check if any number shows up more than once in a given array. 
//if the number shows again RETURN true. 
//if we go through entire array with no repeats , RETURN false. 

/**
 * 
    for current number (lets say we're at index 0 / "i" = 0) 
        for other number (let's say we're at the next index after i, we'll call it "j" = i+1)
              i -> 0 1 2 3 4 5 6 7 8
                                     9  <- j
               i  j
        [1, 2, 5, 5, 8, 7, 9]
     for ( i = 0; i < the last number; i++)   
        arr[i] // 5
        for (j = length - 1; j > i; j--)
        arr[j] // 9
        if arr[i] == arr[j]
            return true
     return false


 */


///     nums = [1,1,1,3,3,4,3,2,4,2] --> true
// function containsDuplicate(nums: number[]): boolean {
    //Step 1:Loop through each number in the array "nums" and stops early
                   
    //            [1,18,5,9,6,17,3,2,19,4] 
    // for (let i = 0; i < nums.length - 1 ; i++) {
        //Step 2: compare all the numbers to see dups  
        // for (let j = nums.length - 1 ; i < j; j--) {
            //Step 3: Condition: IF the numbers exist than it is dup.
    //         if (nums[i] === nums[j]) {
    //             return true
    //         }

    //     }

    // }
    //Step 4: if there no duplicates found after compare return false
    // TODO: Implement the Contains Duplicate solution
    // return false;
// }


// function containsDuplicate(nums: number[]): boolean {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//             return true

//             }
//         }
//     }
//     return false
// };
// Key Fixes:

// Inner Loop Starts at i + 1:

// Avoids comparing an element to itself (j now starts after i).

// Only checks elements that come after the current element.

// Added Curly Braces (optional but recommended for clarity):

// Makes the code more readable, especially for beginners.
