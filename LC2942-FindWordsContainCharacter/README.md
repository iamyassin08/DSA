# Character Containment Index Finder

## Problem Statement

You are given a 0-indexed array of strings `words` and a character `x`.

Return an array of indices representing the words that contain the character `x`.

Note that the returned array may be in any order.

## Examples

### Example 1

**Input:**
```plaintext
words = ["leet","code"]
x = "e"

[0, 1]

words = ["abc","bcd","aaaa","cbc"]
x = "a"

words = ["abc","bcd","aaaa","cbc"]
x = "a"

[0, 2]

words = ["abc","bcd","aaaa","cbc"]
x = "z"

[]

Explanation:
"z" does not occur in any of the words. Hence, we return an empty array.

Constraints
1
≤
words.length
≤
50
1≤words.length≤50
1
≤
words[i].length
≤
50
1≤words[i].length≤50
x is a lowercase English letter.
words[i] consists only of lowercase English letters.
