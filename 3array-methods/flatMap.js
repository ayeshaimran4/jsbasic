const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 },
  ];
  const arr = students.flatMap(num => {
    return {
        name : num.name,
        grade : num.grade,
        passing : num.grade >=70
    };
  })
  console.log(arr);
  