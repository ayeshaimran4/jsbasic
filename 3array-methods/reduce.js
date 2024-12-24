const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 },
  ];
  const total = students.reduce(( sum, student) => sum + student.grade, 0)
  const average = total / students.length;
  console.log(average);