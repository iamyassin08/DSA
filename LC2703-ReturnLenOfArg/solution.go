package main

import "fmt"

func argumentsLength(args ...int) int {
	return len(args)
}

func main() {
	// Call the argumentsLength function with arguments
	length := argumentsLength(112, 212, 100, 45)
	fmt.Println(length) // Output: 3
}
