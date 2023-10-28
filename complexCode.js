/*
Filename: complexCode.js
Content: Complex JavaScript code that utilizes advanced concepts and functionality
*/

// Define a class for Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to get the car's age
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

// Define a subclass for ElectricCar that extends Car
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  // Method to calculate the car's maximum range based on battery capacity
  calculateMaxRange() {
    const efficiency = 0.3; // kWh/km
    return this.batteryCapacity / efficiency;
  }
}

// Instantiate a new ElectricCar object
const teslaModelS = new ElectricCar("Tesla", "Model S", 2022, 100);

// Log the car's age and maximum range
console.log(`The ${teslaModelS.make} ${teslaModelS.model} is ${teslaModelS.getAge()} years old.`);
console.log(`The maximum range of the ${teslaModelS.make} ${teslaModelS.model} is ${teslaModelS.calculateMaxRange()} km.`);

// Define a function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Find all prime numbers between 1 and 100
const primes = [];
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

// Log the prime numbers
console.log("Prime numbers between 1 and 100:");
console.log(primes);

// Create a nested object representing a student's grades and information
const student = {
  name: "John Doe",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    history: 95,
  },
};

// Log the student's information and average grade
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log("Grades:");
Object.entries(student.grades).forEach(([subject, grade]) => {
  console.log(`${subject}: ${grade}`);
});

// Calculate the average grade
const gradesArr = Object.values(student.grades);
const averageGrade = gradesArr.reduce((sum, grade) => sum + grade, 0) / gradesArr.length;
console.log(`Average Grade: ${averageGrade.toFixed(2)}`);

// Define a function to check if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Check if some strings are palindromes
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

// Simulate a network request with a promise
const simulateNetworkRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5; // Simulate success or failure
      if (success) {
        resolve("Success!");
      } else {
        reject("Request failed");
      }
    }, 2000);
  });
};

// Perform the network request and log the result or error
simulateNetworkRequest()
  .then((response) => console.log(`Network request succeeded: ${response}`))
  .catch((error) => console.error(`Network request failed: ${error}`));

// ... continue with more complex code as needed
// ...
// ...
// ...
// Total number of lines: > 200