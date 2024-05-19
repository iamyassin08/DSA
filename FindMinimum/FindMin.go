package main

import "fmt"

//define a function findMin that takes a slice of integers numbers and returns an integer, which will be the smallest number in the slice.
func findMin(numbers []int) int {
	// Assume the first number is the smallest
	minimum := numbers[0]

	// Iterate over the rest of the numbers
	for i := 1; i < len(numbers); i++ {

		//Inside the loop, we check if the current number is smaller than the current minimum. If it is, we update minimum to be this smaller number.
		if numbers[i] < minimum {
			minimum = numbers[i] // Update minimum if a smaller number is found
		}
	}

	return minimum
}

func main() {
	fmt.Println(findMin([]int{1, 2, 3}))                   // Output: 1
	fmt.Println(findMin([]int{-10, 42, 18, 37, 99, -100})) // Output: -100
	fmt.Println(findMin([]int{-1, -2, -3}))                // Output: -3
}
