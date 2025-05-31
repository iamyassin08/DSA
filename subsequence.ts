function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;
    
    while (i<s.length && j<t.length){
        if (s[i] === t[j]) i+=1;
        j+=1;
    }

    return i===s.length;
};
/*

# Explanation of LeetCode 392 - Is Subsequence

This solution checks if string `s` is a subsequence of string `t`. Let me explain each part in simple terms:

## What is a subsequence?
A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements without changing the order of the remaining elements.

Example: 
- "abc" is a subsequence of "ahbgdc"
- "axc" is NOT a subsequence of "ahbgdc"

## The Solution Code:
```typescript
function isSubsequence(s: string, t: string): boolean {
    let i = 0;  // Pointer for string s
    let j = 0;  // Pointer for string t
    
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) i += 1;
        j += 1;
    }

    return i === s.length;
}
```

## Line-by-Line Explanation:

1. **Initialization**:
   ```typescript
   let i = 0;  // Pointer for string s
   let j = 0;  // Pointer for string t
   ```
   - We create two pointers, `i` and `j`, both starting at 0.
   - `i` will track our position in string `s` (the subsequence we're checking for)
   - `j` will track our position in string `t` (the main string)

2. **While Loop**:
   ```typescript
   while (i < s.length && j < t.length) {
   ```
   - We loop as long as:
     - We haven't checked all characters in `s` (`i < s.length`)
     - AND we haven't checked all characters in `t` (`j < t.length`)

3. **Character Comparison**:
   ```typescript
   if (s[i] === t[j]) i += 1;
   ```
   - If the current character in `s` (at position `i`) matches the current character in `t` (at position `j`):
     - We move the `s` pointer forward (`i += 1`) because we found a match
   - Whether or not there's a match, we always move the `t` pointer forward

4. **Moving Through t**:
   ```typescript
   j += 1;
   ```
   - This moves the pointer in `t` forward to check the next character
   - This happens in every iteration of the loop

5. **Final Check**:
   ```typescript
   return i === s.length;
   ```
   - After the loop ends, if `i` equals the length of `s`, it means we found all characters of `s` in order within `t`
   - If not, it means we reached the end of `t` before finding all characters of `s`

## How It Works - Step by Step Example:

Here's a visual representation of how the code works with `s = "abc"` and `t = "ahbgdc"`:

### Initial State:
```
s: a b c
   ↑ (i=0)
t: a h b g d c
   ↑ (j=0)
```

### Step 1: Compare s[0] ('a') and t[0] ('a')
- **Match found!**  
- Move both pointers forward  
```
s: a b c
     ↑ (i=1)
t: a h b g d c
     ↑ (j=1)
```

### Step 2: Compare s[1] ('b') and t[1] ('h')
- **No match**  
- Only move `j` forward  
```
s: a b c
     ↑ (i=1)
t: a h b g d c
       ↑ (j=2)
```

### Step 3: Compare s[1] ('b') and t[2] ('b')
- **Match found!**  
- Move both pointers forward  
```
s: a b c
       ↑ (i=2)
t: a h b g d c
         ↑ (j=3)
```

### Step 4: Compare s[2] ('c') and t[3] ('g')
- **No match**  
- Only move `j` forward  
```
s: a b c
       ↑ (i=2)
t: a h b g d c
           ↑ (j=4)
```

### Step 5: Compare s[2] ('c') and t[4] ('d')
- **No match**  
- Only move `j` forward  
```
s: a b c
       ↑ (i=2)
t: a h b g d c
             ↑ (j=5)
```

### Step 6: Compare s[2] ('c') and t[5] ('c')
- **Match found!**  
- Move both pointers forward  
```
s: a b c
         ↑ (i=3) → Reached end of s!
t: a h b g d c
               ↑ (j=6) → Reached end of t!
```

### Final Check:
- `i` (3) equals `s.length` (3) → **"abc" is a subsequence of "ahbgdc"!**  
- Return `true`

---

### Another Example (Failure Case): `s = "axc"`, `t = "ahbgdc"`

#### Step-by-Step:
1. `s[0]='a'` vs `t[0]='a'` → **match** (i=1, j=1)
2. `s[1]='x'` vs `t[1]='h'` → no match (j=2)
3. `s[1]='x'` vs `t[2]='b'` → no match (j=3)
4. `s[1]='x'` vs `t[3]='g'` → no match (j=4)
5. `s[1]='x'` vs `t[4]='d'` → no match (j=5)
6. `s[1]='x'` vs `t[5]='c'` → no match (j=6 → loop ends)

#### Final Check:
- `i` (1) ≠ `s.length` (3) → **"axc" is NOT a subsequence!**  
- Return `false`

---

### Key Observations from the Visualization:
1. The `i` pointer **only moves when a match is found** in `t`.
2. The `j` pointer **always moves forward** to scan through `t`.
3. Success is determined by whether `i` reaches the end of `s`.

This "two-pointer walk" is efficient because it only requires **one pass** through `t` (O(n) time) and **no extra memory** (O(1) space).

## Why This Works:
- The algorithm efficiently checks if all characters of `s` appear in `t` in order
- It doesn't need extra memory (space complexity O(1))
- It only needs to scan `t` once (time complexity O(n), where n is length of t)

This is a classic "two-pointer" technique that's very useful for many string comparison problems!
*/
