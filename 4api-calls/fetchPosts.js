const axios = require('axios');

const fetchPosts = async() => {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    const filterPosts = posts.filter (post => post.title);
    const sortPosts = filterPosts.sort((a,b) => a.id-b.id);
    return sortPosts; 
  }
  catch(error){
    console.error(error);
     throw error ;
   }
 };
 fetchPosts()
 .then(posts =>console.log('sorted posts', posts))
 .catch(err => console.error(err));



