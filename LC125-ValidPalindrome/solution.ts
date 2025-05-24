# Simple Palindrome Number Solution

Here's a straightforward solution to check if a number is a palindrome, with line-by-line explanation:

```typescript
function isPalindrome(x: number): boolean {
    // Step 1: Negative numbers can't be palindromes
    if (x < 0) return false;
    
    // Step 2: Convert number to string
    const str = x.toString();
    
    // Step 3: Use two pointers to compare characters
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        // Step 4: If characters don't match, it's not a palindrome
        if (str[left] !== str[right]) {
            return false;
        }
        // Move pointers towards center
        left++;
        right--;
    }
    
    // Step 5: All characters matched, it's a palindrome
    return true;
};
```

## Line-by-Line Explanation:

1. **Negative Check**  
   `if (x < 0) return false;`  
   - Negative numbers can't be palindromes because of the '-' sign (e.g., -121 reversed is 121-).

2. **Convert to String**  
   `const str = x.toString();`  
   - Convert the number to a string to easily compare digits.

3. **Initialize Two Pointers**  
   ```typescript
   let left = 0;
   let right = str.length - 1;
   ```
   - `left` starts at the first digit (index 0)
   - `right` starts at the last digit (index length-1)

4. **Compare Digits**  
   ```typescript
   while (left < right) {
       if (str[left] !== str[right]) {
           return false;
       }
       left++;
       right--;
   }
   ```
   - Compare digits moving inward from both ends
   - If any pair doesn't match → immediately return false
   - Move pointers closer to center after each comparison

5. **Return True if All Match**  
   `return true;`  
   - If loop completes without mismatches → it's a palindrome

## Example Walkthrough:

For `x = 121`:
1. Not negative → continue
2. Converts to "121"
3. Compares:
   - First loop: '1' (left) vs '1' (right) → match
   - Second loop: '2' vs '2' → match
   - Loop ends (left = 1, right = 1) → return true

For `x = -121`:
1. Negative → immediately return false

For `x = 10`:
1. Converts to "10"
2. First comparison: '1' vs '0' → mismatch → return false

This solution is efficient with O(n) time complexity (n = number of digits) and O(n) space (for the string conversion).
