// Problem Solving:

// 1.Task: Array Filtering and Mapping
// -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const persons = [
  { name: "John", age: 20, gender: "male" },
  { name: "Jane", age: 21, gender: "female" },
  { name: "Jim", age: 22, gender: "male" },
  { name: "Jill", age: 23, gender: "female" },
  { name: "Jack", age: 24, gender: "male" },
  { name: "Jill", age: 25, gender: "female" },
  { name: "Jack", age: 26, gender: "male" },
  { name: "Jill", age: 27, gender: "female" },
  { name: "Jack", age: 28, gender: "male" },
  { name: "Jill", age: 29, gender: "female" },
  { name: "Jack", age: 30, gender: "male" },
];

const result = persons
  .filter((person) => person.gender !== "male")
  .map((person) => person.name);
// console.log(result);

// 2.Task: Object Manipulation
// -Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

function bookTitle(booksArray) {
  return booksArray.map((book) => book.title);
}
const result2 = bookTitle(books);
// console.log(result2);

// 3.Task: Function Composition
// -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const square = (number) => number * number;
const double = (double) => double * 2;
const add = (add) => add + 5;
const result3 = (input) => {
  const squared = square(input);
  const doubled = double(squared);
  const finalResult = add(doubled);
  return finalResult;
};
// console.log(result3(5));

// 4.Task: Sorting Objects
// -Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
  { make: "Mercedes-Benz", model: "C-Class", year: 2025 },
  { make: "Volkswagen", model: "Golf", year: 2026 },
  { make: "Hyundai", model: "Elantra", year: 2027 },
  { make: "Kia", model: "Sorento", year: 2028 },
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Audi", model: "A4", year: 2024 },
  { make: "Nissan", model: "Altima", year: 2029 },
  { make: "Subaru", model: "Outback", year: 2030 },
  { make: "Jeep", model: "Wrangler", year: 2031 },
  { make: "Land Rover", model: "Range Rover", year: 2032 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Camaro", year: 2022 },
  { make: "BMW", model: "X5", year: 2023 },
  { make: "Lexus", model: "RX", year: 2033 },
  { make: "Mazda", model: "CX-5", year: 2034 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2035 },
];

const sortingTheCars = (sortedArray) => {
  return sortedArray.sort((a, b) => b.year - a.year);
};
const result4 = sortingTheCars(cars);
// console.log(result4);

// 5.Task: Find and Modify
// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const users = [
  { name: "John", age: 20, gender: "male" },
  { name: "Jane", age: 21, gender: "female" },
  { name: "Jim", age: 22, gender: "male" },
  { name: "Jill", age: 23, gender: "female" },
  { name: "Jack", age: 24, gender: "male" },
];

const updatedUser = (userArray, targetedName, newAge) => {
  const user = userArray.find((user) => user.name === targetedName);

  if (user) {
    user.age = newAge;
  } else {
    console.log("no user found");
  }
  return userArray;
};
const result5 = updatedUser(users, "Jack", 40);
// console.log(result5);

// 6.Task: Array Reduction

// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array

const numbers = [20, 30, 96, 55, 77, 84, 59, 67, 82, 38, 49];
const finalResult = numbers.reduce((total, current) => {
  if (current % 2 === 0) {
    return total + current;
  }
  return total;
}, 0);
// console.log(finalResult);

const checkLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
};
console.log(checkLeapYear(2026));
