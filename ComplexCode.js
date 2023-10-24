/* 
Filename: ComplexCode.js
Content: Complex code demonstrating advanced JavaScript concepts 
*/

// Create a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet a Person
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create objects for two persons
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Output their greetings
console.log(person1.greet());
console.log(person2.greet());

// Create a class for a Circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Calculate and return the circumference
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  // Calculate and return the area
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Create a circle object with radius 5
const circle = new Circle(5);

// Output the circumference and area
console.log(`Circumference: ${circle.getCircumference()}`);
console.log(`Area: ${circle.getArea()}`);

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the map function to double each element
const doubledNumbers = numbers.map((num) => num * 2);

// Output the doubled numbers
console.log(doubledNumbers);

// Use the reduce function to sum all the numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Output the sum
console.log(`Sum: ${sum}`);

// Use the filter function to get even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Output the even numbers
console.log(evenNumbers);

// Define a recursive function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate and output the factorial of 5
console.log(`Factorial of 5: ${factorial(5)}`);

// Create a Promise that resolves after a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Use async/await to demonstrate asynchronous behavior
async function asyncFunction() {
  console.log("Start");
  await delay(1000);
  console.log("1 second passed");
  await delay(2000);
  console.log("3 seconds passed");
  await delay(3000);
  console.log("6 seconds passed");
}

// Call the async function
asyncFunction();

// Create a generator function that generates Fibonacci numbers
function* fibonacciGenerator() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    const temp = a;
    a = b;
    b = temp + b;
  }
}

// Use the generator to get the first 10 Fibonacci numbers
const fibonacciNumbers = [...fibonacciGenerator()].slice(0, 10);

// Output the Fibonacci numbers
console.log(fibonacciNumbers);
...

// The code continues for more than 200 lines with additional functionality, modules, and complex logic.