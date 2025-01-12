const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "ayesha", grade: 94 },
    { name: "Dave", grade: 85 },
  ];
     const arr = students.filter( n => n.grade > 90);
   console.log(arr);

 const arr1 = students.find( n => n.grade >93)
 console.log(arr1)