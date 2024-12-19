const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("sucess"); 
    } else {
      reject("fail"); 
    }
  });
  promise.then( result => {
    console.log(result);
  })
  
 