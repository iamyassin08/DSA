package main

//function named findWordsContaining. It takes two parameters: words, which is a array of strings, and x, which is a single byte (a character). The function returns a array of integers ([]int).
func findWordsContaining(words []string, x byte) []int {

	// declare a variable named indices, which is an empty array of integers. This array will store the indices of words that contain the character x
	var indices []int

	// a loop that iterates over each word in the words slice. The loop initializes i to 0 and increments it by 1 until it reaches the length of the words slice.
	for i := 0; i < len(words); i++ {

		// Inside the loop, we assign the current word from the words slice to the variable word. We use the index i to access each word.
		word := words[i]

		//  we start another loop to iterate over each character in the current word (word). The loop initializes y to 0 and increments it by 1 until it reaches the length of the current word.
		for y := 0; y < len(word); y++ {

			// check if the current character in the word matches the character x that we're searching for.
			if word[y] == x {

				//If the character matches, we append the index of the current word (i) to the indices slice. This means we found the character x in the word at index i.
				indices = append(indices, i)

				// After finding the character x in the word, we exit the inner loop using the break statement. This is because we only need to find one occurrence of the character x in each word.
				break
			}
		}
	}
	// return the indices slice, which contains the indices of words that contain the character x.
	return indices
}

//Linear Time and Linear Space - O(n)
