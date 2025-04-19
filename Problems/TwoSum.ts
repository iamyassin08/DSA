function twoSum(nums: number[], target: number): number[] {
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // For each element, loop through the rest of the array
        for (let j = i + 1; j < nums.length; j++) {
            // Check if current pair sums to target
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Return indices if found
            }
        }
    }
    return []; // Fallback (problem says there's always a solution)
}

// for beginners but has worse performance (O(n²) time:
