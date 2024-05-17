// Write a Program that willl find the greatest number in an array

package main

import "fmt"

func main() {
	// Create an array of integers
	numbers := [5]int{1, 2, 3, 4, 5}

	// Initialize a variable to store the greatest number
	greatest := numbers[0]

	// Iterate over the array
	for i := 1; i < len(numbers); i++ {
		// Check if the current number is greater than the greatest number
		if numbers[i] > greatest {
			// Update the greatest number
			greatest = numbers[i]
		}
	}

	// Print the greatest number
	fmt.Println(greatest)
}
