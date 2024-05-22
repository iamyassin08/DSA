//defines a function named isPalindrome that takes a single argument s of type string and returns a boolean value.
func isPalindrome(s string) bool {

	// converts the input string s to lowercase using the ToLower function from the strings package. This ensures case insensitivity when checking for palindromes.
	s = strings.ToLower(s)

	//initializes two variables i and j. i is set to 0, and j is set to the index of the last character in the string s.
	i, j := 0, len(s)-1

	// line starts a loop that continues as long as the value of i is less than j. This loop iterates through the string from both ends towards the middle.
	for i < j {

		// loop increments the value of i until it finds a valid character using the isChar function. It checks if the character at index i is not a valid character
		// (a letter or a digit) and increments i until a valid character is found or until i surpasses j.
		for i < j && !isChar(s[i]) {
			i++
		}

		//Similarly, this loop decrements the value of j until it finds a valid character using the isChar function. It checks if the character at index j is not a valid
		//  character (a letter or a digit) and decrements j until a valid character is found or until i surpasses j.
		for i < j && !isChar(s[j]) {
			j--
		}

		//After finding valid characters from both ends, this line checks if the characters at positions i and j are not equal.
		// If they are not equal, it means the string is not a palindrome, and the function returns false.
		if s[i] != s[j] {
			return false
		}

		//This block increments i and decrements j, moving towards the middle of the string to continue checking for palindromic property.
		i++
		j--
	}

	return true
}

//This line defines a function named isChar that takes a single argument c of type byte (a single character) and returns a boolean value.
func isChar(c byte) bool {

	//This function checks if the input character c is either a lowercase letter or a digit. If it is, it returns true, indicating that it is a valid character. Otherwise, it returns false.
	if ('a' <= c && c <= 'z') || ('0' <= c && c <= '9') {
		return true
	}
	return false
}
