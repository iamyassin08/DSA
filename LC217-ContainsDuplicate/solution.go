package main

import "fmt"

// //declares a function named containsDuplicate. It takes one parameter: nums, which is a slice of integers ([]int). The function returns a boolean (bool) value.
// func containsDuplicate(nums []int) bool {

// 	// starts a for loop. It initializes a variable i to 0, and the loop continues as long as i is less than the length of the nums slice. It increments i by 1 in each iteration.
// 	for i := 0; i < len(nums); i++ {

// 		// starts another nested for loop. It initializes a variable y to i + 1. This loop iterates over elements of the nums slice starting from the element next to the current ith element.
// 		for y := i + 1; y < len(nums); y++ {

// 			//checks if the element at index i of the nums slice is equal to the element at index y. It's comparing the current element with the rest of the elements in the slice to find duplicates.
// 			if nums[i] == nums[y] {

// 				// If a duplicate is found, return true
// 				return true
// 			}
// 		}
// 	}
// 	// If no duplicates are found, return false
// 	return false
// }
func main() {
	// Example usage of the containsDuplicate function
	nums := []int{1, 2, 3, 4, 5}
	fmt.Println("Does nums contain duplicates?", containsDuplicate(nums)) // Output: false

	nums = []int{1, 2, 3, 4, 5, 1}
	fmt.Println("Does nums contain duplicates?", containsDuplicate(nums)) // Output: true
}

// /O(n) linear time
// /O(n) space

// -------------------

func containsDuplicate(nums []int) bool {

	//creates a map named dup. The map's keys are integers (int), and the values are boolean (bool).
	// The map is used to keep track of which numbers have been seen so far in the nums slice. The make function initializes the map.
	dup := make(map[int]bool)

	//starts a for loop that iterates over each element in the nums slice. The _ is used to ignore the index of the element, and num represents the current element in the iteration.
	for _, num := range nums {

		// Inside the loop, this line checks if the current number (num) is already present in the dup map. If dup[num] is true, it means the number num has been encountered before, indicating
		// a duplicate. In this case, the function returns true, signifying that a duplicate has been found.
		if dup[num] {
			return true
		}

		//f the current number (num) is not found in the dup map, this line sets dup[num] to true. This marks the number as seen by adding it to the map.
		dup[num] = true
	}
	//If the loop completes without finding any duplicates, this line returns false, indicating that no duplicates were found in the nums slice.
	return false
}
