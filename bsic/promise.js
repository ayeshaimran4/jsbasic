async function getjobs() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jobs =await response.json(); 
    console.log('fetched jobs,', jobs);
    
    }catch(error){
    console.log('error fetching jobs:',error);
    }}
    getjobs();