const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 },
  ];
  
  const newStudent = { name: "Grace", grade: 87 };
  students.push(newStudent);
  console.log(students);

  students.pop();
  console.log(students);

  students.reverse();
  console.log(students);

  students.shift();
  console.log(students);