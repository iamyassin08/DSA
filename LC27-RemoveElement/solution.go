func removeElement(nums []int, val int) int {
	left := 0 // Pointer for non-val elements
	for right := 0; right < len(nums); right++ {
		if nums[right] != val {
			nums[left] = nums[right] // Place non-val element at left pointer position
			left++                   // Move left pointer ahead
		}
	}
	return left // Number of non-val elements
}

// Space complexity: O(1) did not use additional data structures, manipulated array in place and just used left and right pointers/
// Time complexity: O(n) still irritated over the array when over array once it is a linear time operation.