// Write a program that willfind the smallest nuber in an array

package main

import "fmt"

func main() {
	// Create an array of integers
	numbers := [5]int{1, 2, 3, 4, 5}

	// Initialize a variable to store the smallest number
	smallest := numbers[0]

	// Iterate over the array
	for i := 1; i < len(numbers); i++ {
		// Check if the current number is less than the smallest number
		if numbers[i] < smallest {
			// Update the smallest number
			smallest = numbers[i]
		}
	}

	// Print the smallest number
	fmt.Println(smallest)
}
