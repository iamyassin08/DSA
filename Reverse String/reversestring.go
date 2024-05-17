package main

import "fmt"

func reverseString(s string) string {
	// Convert the string to a byte slice
	str := []byte(s)

	// Get the length of the string
	n := len(str)

	// Iterate over the byte slice and swap characters from both ends
	for i := 0; i < n/2; i++ {
		str[i], str[n-i-1] = str[n-i-1], str[i]
	}

	// Convert the byte slice back to a string and return it
	return string(str)
}

func main() {
	// Test the function with some example strings
	fmt.Println(reverseString("hello")) // Output: "olleh"
	fmt.Println(reverseString("world")) // Output: "dlrow"
}
