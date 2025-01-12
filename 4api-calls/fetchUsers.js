const axios = require('axios');

 const fetchUsers = async () => {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = response.data ;
    const userEmail = users.filter(user => user.email)
    const userPhone = userEmail.reduce((count, user) =>{
      return user.phone ? count + 1: count ;
    } ,0);
    return {
      filteredUser: userEmail,
      userWithPhone: userPhone,
    };
  }
  catch(err){
  console.error(err);
  throw err;
  }
}
fetchUsers()
 .then(result => {
  console.log('filter user', result.filteredUser);
  console.log('user with phone numbers', result.userWithPhone);
 })
.catch(error => console.error(error ))
