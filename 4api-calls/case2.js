 const axios = require('axios')
  const userData =() =>{
     const response = axios('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
    console.log(data.data)
     })
    .catch((err) => {
    console.error(err)
    })
  }
 userData();

  const userData1 = async() => {
     try{
         const response = await axios ('https://jsonplaceholder.typicode.com/albums')
         const data1 = response.data;
         return data1 ;

     }
     catch(error){
         console.error(error)
     }

  }
  const fetch = async() => {
     const data = await userData1();
     console.log(data)
  }
 fetch();
