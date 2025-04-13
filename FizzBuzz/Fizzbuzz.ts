/**
 * LeetCode 412: Fizz Buzz
 * 
 * Given an integer n, return a string array answer (1-indexed) where:
 * 
 * - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * - answer[i] == "Fizz" if i is divisible by 3.
 * - answer[i] == "Buzz" if i is divisible by 5.
 * - answer[i] == i (as a string) if none of the above conditions are true.
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 * 
 * Example 2:
 * Input: n = 5
 * Output: ["1","2","Fizz","4","Buzz"]
 * 
 * Example 3:
 * Input: n = 15
 * Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 * 
 * Constraints:
 * - 1 <= n <= 10^4
 * Translate: 
 * 
 * "Create a function that takes a number and returns all numbers between 1 and your number"
 *          NERD MODE: "given a parameter n return values within n (1..n) ( with a minimum value of 1 and max value of 10^4)"
 * if any of those numbers are divisible by 3 return "fizz" instead of the number
 * if any of those numbers are divisible by 5 return "buzz" instead of the number
 * if any of those numbers are divisible by 3 AND 5 return "fizzbuzz" instead of the number
 * if none of these things are true or happen return the number but as a string (so put quotes around it)
 * 
 *
 * 
 */







// Parameter

function fizzBuzz(n: number): string[] {

    // if n = 15
    // EXAMPLE OUTPUT: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
    //create an empty array 
    let arr: string[] = []
    //make a loop
    for (let i = 1; i <= n; i++) {

        //Conditions 4 -= disvble states for modula
        //Checks if current number is disible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz") //append to the array
        }

        else if (i % 3 === 0) {
            arr.push("Fizz")//append to the array
        }

        else if (i % 5 === 0) {
            arr.push("Buzz") //append to the array
        }
        else {
            arr.push(i.toString())
        }
    };
    // TODO: Implement the FizzBuzz solution
    return arr;
}

// Test cases
function testFizzBuzz(): void {
    // TODO: Implement test cases for the FizzBuzz solution
}

export { fizzBuzz, testFizzBuzz }; 