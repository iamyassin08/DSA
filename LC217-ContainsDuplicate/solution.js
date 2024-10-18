function containsDuplicate(nums) {
    // Create an empty object to store seen numbers
    let seen = {};

    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Check if the number is already in the seen object
        if (seen[nums[i]]) {
            // If it is, we found a duplicate, return true
            return true;
        }
        // If it's not in seen, add it to the seen object
        seen[nums[i]] = true;
    }

    // If we finish the loop without finding duplicates, return false
    return false;
}

// Example usage
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
