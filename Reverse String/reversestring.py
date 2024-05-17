# class Solution:
#     def reverseString(self, s: List[str]) -> None:
#         """
#         Do not return anything, modify s in-place instead.
#         """
#         # Time: O(n), Space: O(1)
#         l, r = 0, len(s) - 1
#         while l < r:  
#             s[l], s[r] = s[r], s[l]  
#Method 2

# Class Solution:
#     def reverseString(self, s: List[str]) -> None:
#         """
#         Do not return anything, modify s in-place instead.
#         """
#         # Time: O(n), Space: O(1)
#         stack = []
#         for c in s:
#             stack.append(c)
#             i = 0
#             while stack:
#                 s[i] = stack.pop()
#                 i += 1
                
#Method 3 0 recursion

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        # Time: O(n), Space: O(1)
       def reverse(1, r)
       if 1 < r:
            s[1], s[r] = s[r], s[1]
            reverse(1 + 1, r - 1)
           
           reverse(0, len(s) - 1)
           

