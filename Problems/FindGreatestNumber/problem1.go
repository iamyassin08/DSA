// Write a Program that willl find the greatest number in an array

package main

import "fmt"

func main() {
	// Create an array of integers.. [?] specifies the size of the array
	numbers := []int{1000, 2, 300, 4, 100}

	// Initialize a variable to store the greatest number.. /accesses the first element of the array (or slice) numbers
	greatest := numbers[0]

	// Iterate over the array ../. If you start the loop from index 1,2,3 it still works, but it doesn't include the comparison of the first element with itself because the assumption is that the first element is already the greatest
	for i := 0; i < len(numbers); i++ {
		// Check if the current number is greater than the greatest number
		if numbers[i] > greatest {
			// Update the greatest number
			greatest = numbers[i]
		}
	}

	// Print the greatest number
	fmt.Println(greatest)
}
