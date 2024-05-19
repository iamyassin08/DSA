// // Write a program that will return true if the array has any odd numbers

// package main

// import "fmt"

// func main() {
// 	// Create an array of integers
// 	numbers := []int{1, 2, 3, 4, 5}

// 	// Iterate over the array
// 	for i := 0; i < len(numbers); i++ {
// 		// Check if the current number is odd. if in the array of numbers access the element at index i , divide it by 2 and check if the remainder is not equal to 0.
// 		if numbers[i]%2 != 0 {
// 			// Return true if the current number is odd
// 			fmt.Println(true)
// 			return
// 		}
// 	}

// 	// Return false if no odd numbers are found
// 	fmt.Println(false)
// }

//Other Method

package main

import "fmt"

func main() {
	// Create an array of integers
	numbers := []int{1432, 2213, 313, 4123, 532}

	// Initialize a variable to track if any odd number is found
	Odd := false

	// Iterate over the array
	for i := 0; i < len(numbers); i++ {
		// Check if the last bit of the current number is 1, indicating it's odd
		if numbers[i]&1 == 1 {
			// Set Odd to true if an odd number is found
			Odd = true
			// Break out of the loop since we've found an odd number
			break
		}
	}

	// Print the result
	fmt.Println(Odd)
}
