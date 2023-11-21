"use strict";

//Find Second Largest Numbers
const findSecondLargest = function (numbers) {
    let nonDuplicateNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let duplicateNumbers = false;
        for (let d = 0; d < nonDuplicateNumbers.length; d++) {
            if (numbers[i] === nonDuplicateNumbers[d]) {
                duplicateNumbers = true;
            }
        }
        if (duplicateNumbers === false) {
            nonDuplicateNumbers.push(numbers[i]);
        }
    }
    // Check if there are at least two unique numbers in the array
    if (nonDuplicateNumbers.length < 2) {
        return nonDuplicateNumbers[0];
    }
    // Find the second largest number using a loop
    let largest = Math.max(nonDuplicateNumbers[0], nonDuplicateNumbers[1]);
    let secondLargest = Math.min(nonDuplicateNumbers[0], nonDuplicateNumbers[1]);
    for (let i = 2; i < nonDuplicateNumbers.length; i++) {
        if (nonDuplicateNumbers[i] > largest) {
            secondLargest = largest;
            largest = nonDuplicateNumbers[i];
        } else if (nonDuplicateNumbers[i] > secondLargest) {
            secondLargest = nonDuplicateNumbers[i];
        }
    }
    return secondLargest;
}
const numbers1 = [10, 5, 8, 20, 9];
console.log(findSecondLargest(numbers1));
const numbers2 = [7, 7, 7, 7];
console.log(findSecondLargest(numbers2));
const numbers3 = [3, 1, 7, 5, 2];
console.log(findSecondLargest(numbers3));


//FIZZBUZZ
const fizzBuzz = function (n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz`);
        } else if (i % 5 === 0) {
            console.log(`Buzz`);
        } else if (i % 3 === 0) {
            console.log(`Fizz`);
        } else { console.log(i); }
    }
}
fizzBuzz(15);

//PRIME NUMBERS
const isPrime = function (n) {
    if(n%2===0 || n%3===0){
        return false;}
        else 
            return true;
       
    }

isPrime(30);
console.log(isPrime(5));   // Output: true (5 is prime)
console.log(isPrime(10));    // Output: false (10 is not prime)
console.log(isPrime(17));   // Output: true (17 is prime)


//Sum of even numbers 
const sumOfEvenNumbers = function (numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            // Check for Even numbers
            sum = sum + numbers[i];
        }
    }

    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenNumbers(numbers));

const numbers4 = [10, 15, 20];
console.log(sumOfEvenNumbers(numbers4));


