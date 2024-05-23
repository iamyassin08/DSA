//defines a function named removeElement that takes a slice of integers (nums) and an integer (val) as input parameters and returns an integer.
func removeElement(nums []int, val int) int {

	//We initialize a pointer left at the start of the array. This pointer will keep track of the position where the next non-val element should be placed.
	left := 0 // Pointer for non-val elements

	//We use a for loop to iterate through the array using another pointer right.
	for right := 0; right < len(nums); right++ {

		//Inside the loop, we check if the current element (nums[right]) is not equal to the value val that we want to remove.
		if nums[right] != val {

			//If the current element is not val, we copy it to the position indicated by the left pointer.
			// We then move the left pointer one step to the right.
			nums[left] = nums[right] // Place non-val element at left pointer position
			left++                   // Move left pointer ahead
		}
		//The loop continues until we have checked every element in the array.
	}

	//After the loop finishes, the left pointer will be at the position one past the last non-val element.
	// The value of left is the new length of the array with the val elements removed.
	return left // Number of non-val elements
}

// Space complexity: O(1) did not use additional data structures, manipulated array in place and just used left and right pointers/
// Time complexity: O(n) still irritated over the array when over array once it is a linear time operation.