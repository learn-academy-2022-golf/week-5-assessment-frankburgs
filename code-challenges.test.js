// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// Good fail: ReferenceError: codeMessage is not defined
// Other fail: TypeError: codeMessage(...).toEqual is not a function
test ('A function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {

	const secretCodeWord1 = "Lackadaisical"
	// Expected output: 
	const output1 = "L4ck4d41s1c4l"
	const secretCodeWord2 = "Gobbledygook"
	// Expected output: 
	const output2 = "G0bbl3dyg00k"
	const secretCodeWord3 = "Eccentric"
	// Expected output: 
	const output3 = "3cc3ntr1c"

	expect(codeMessage(secretCodeWord1)).toEqual(output1)
	expect(codeMessage(secretCodeWord2)).toEqual(output2)
	expect(codeMessage(secretCodeWord3)).toEqual(output3)
})

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// b) Create the function that makes the test pass.
// Errors encountered: 
// A function that takes in a string
const codeMessage = (str1) => {
	// Uses string.replace() method
	// Using "global match" flag g
	// Add case match flag i
	// 'a' -> 4, 'e' -> 3, 'i' -> 1, 'o' -> 0
	return str1.replace(/a/gi,"4").replace(/e/gi,"3").replace(/i/gi,"1").replace(/o/gi,"0")
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// Good fail: ReferenceError: letterFinder is not defined

// Other fails: 
// ReferenceError: index is not defined
// TypeError: value.includes is not a function
// SyntaxError: Unexpected token, expected ","
// TypeError: str1.toString.toUpperCase is not a function

test ('a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.', () => {
	const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

	const letterA = "a"
	// Expected output: 
	const output1 = ["Mango", "Apricot", "Peach"]
	const letterE = "e"
	// Expected output: 
	const output2 = ["Cherry", "Blueberry", "Peach"]

	expect (letterFinder(fruitArray, letterA)).toEqual(output1)
	expect (letterFinder(fruitArray, letterE)).toEqual(output2)

})


// b) Create the function that makes the test pass.
// A function that takes in an array of strings and a single letter
const letterFinder = (array1, str1) => {
	
	// A function that takes in a string and a single letter
	filterOut = (testee, character) => {

		// Store upper and lower cases of letter
		const charLowerCase = character.toLowerCase()
		const charUpperCase = character.toUpperCase()

		// If the string contains either upper or lower case of the letter, return it
		if (testee.includes(charLowerCase) || testee.includes(charUpperCase)){
			return testee
		}
		else return false
	}
	// Add a function as the filtering decider for upper/lower casing issue
	return array1.filter((element) => filterOut(element, str1))
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// Good error: ReferenceError: fullHouse is not defined

// Other errors:
// TypeError: fullHouse(...).toEqual is not a function

test('A function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.', () => {
	
	const hand1 = [5, 5, 5, 3, 3]
	// Expected output: true
	const hand2 = [5, 5, 3, 3, 4]
	// Expected output: false
	const hand3 = [5, 5, 5, 5, 4]
	// Expected output: false
	const hand4 = [7, 2, 7, 2, 7]
	// Expected output: true

	expect (fullHouse(hand1)).toEqual(true)
	expect (fullHouse(hand2)).toEqual(false)
	expect (fullHouse(hand3)).toEqual(false)
	expect (fullHouse(hand4)).toEqual(true)
})
// b) Create the function that makes the test pass.
// A function, that takes in an array of 5 numbers
const fullHouse = (array1) => {

	// Another array is created, populated with the number of instances each value at that index repeats in that array
	const array2 = array1.map( (value, index, array) => {

		// Start count at 0
		let sum = 0

		// Loop through the supplied array
		for (let i = 0 ; i < array.length ; i++){

			// If current element value of the map method is equal to a value in the array
			if (value == array[i]){

				// Increment our sum counter
				sum++
			}
		}
		// Return our sum of how many unique instances of each element exist in the supplied array
		return sum
	})

	// Determine if array2 contains a duplicate count of 3 and of 2
	if (array2.includes(3) && array2.includes(2)){
		return true
	} 
	// If the array does not contain data indicating a "full house" (3 duplicates) and a pair (2 duplicates), return false
	else return false

}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
