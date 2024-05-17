package main

import "fmt"

func main() {
	// Loop from 1 to 100
	for i := 1; i <= 100; i++ {
		// Check if the number is a multiple of both 3 and 5 first,
		// since it's a special case
		if i%3 == 0 && i%5 == 0 {
			fmt.Println("FizzBuzz")
		} else if i%3 == 0 { // Check if the number is a multiple of 3
			fmt.Println("Fizz")
		} else if i%5 == 0 { // Check if the number is a multiple of 5
			fmt.Println("Buzz")
		} else {
			// If none of the above conditions are met, print the number itself
			fmt.Println(i)
		}
	}
}
