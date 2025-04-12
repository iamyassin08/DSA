
# Fizz Buzz

* Difficulty - Beginner
* Prequisites
  * Iteration / Loops
  * Conditionals
  * Modulo (%)
  * String manipulation

Return an array containing the numbers from 1 to N.

Replace certain values if any of the following conditions are met:

* If the value is a multiple of 3: use the value "Fizz"
* If the value is a multiple of 5: use the value "Buzz"
* If the value is a multiple of 3 & 5: use the value "FizzBuzz"

* N will never be less than 1.

Example:

```js
fizzbuzz(3) // [1, 2, "Fizz"]
fizzbuzz(16) // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16]
```
-------------------
/**
 * The FizzBuzz function takes a number n and returns an array of strings.
 * For numbers 1 to n:
 * - "FizzBuzz" if divisible by both 3 and 5
 * - "Fizz" if divisible by 3
 * - "Buzz" if divisible by 5
 * - The number itself (as a string) otherwise
 */
function fizzBuzz(n: number): string[] {
  // Initialize an empty array to store our results
  let arr: string[] = [];
  
  // Loop from 1 to n (inclusive)
  for (let currentnumber = 1; currentnumber <= n; currentnumber++) {
    
    // Check for FizzBuzz case first (divisible by both 3 AND 5)
    if (currentnumber % 3 === 0 && currentnumber % 5 === 0) {
      arr.push("FizzBuzz");
    }
    // Check for Fizz case (divisible by 3 only)
    else if (currentnumber % 3 === 0) {
      arr.push("Fizz");
    }
    // Check for Buzz case (divisible by 5 only)
    else if (currentnumber % 5 === 0) {
      arr.push("Buzz");
    }
    // Default case: not divisible by 3 or 5, just use the number
    else {
      arr.push(currentnumber.toString());
    }
  }
  
  // Return the completed array
  return arr;
}

/**
 * Test function that verifies our FizzBuzz implementation
 * with various input values
 */
function testFizzBuzz(): void {
  // Test with n=3
  console.log(fizzBuzz(3)); // Expected: ["1", "2", "Fizz"]
  
  // Test with n=5
  console.log(fizzBuzz(5)); // Expected: ["1", "2", "Fizz", "4", "Buzz"]
  
  // Test with n=15 to check all possible cases including FizzBuzz
  console.log(fizzBuzz(15)); // Expected: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
}

// Run the tests
testFizzBuzz();

// Export the functions for use in other modules
export { fizzBuzz, testFizzBuzz };