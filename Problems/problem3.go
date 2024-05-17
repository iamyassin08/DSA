// Write a program that will return true if the array has any odd numbers

package main

import "fmt"

func main() {
	// Create an array of integers
	numbers := [5]int{1, 2, 3, 4, 5}

	// Iterate over the array
	for i := 0; i < len(numbers); i++ {
		// Check if the current number is odd
		if numbers[i]%2 != 0 {
			// Return true if the current number is odd
			fmt.Println(true)
			return
		}
	}

	// Return false if no odd numbers are found
	fmt.Println(false)
}
