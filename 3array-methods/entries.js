const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 },
  ];
  const array = students.entries();
  for (const [x,y] of array ) {
    console.log(x,y);
  } 
