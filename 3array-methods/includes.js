const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];
// for array
const num = [1, 2, 3, 4, 5];
const str = ["hello", "world", "me", "ayeshaimran"];
console.log(num.includes(2));
console.log(str.includes("ayesha"));

// doesn't support for object arrays
console.log(students.includes("Bob"));

//using some
const arr = students.some((student) => student.name === "Bob");
console.log(arr);

// using every
const array = students.every((student) => student.name === "Dave");
console.log(array);
