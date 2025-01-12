const axios = require('axios')

const fetchTodos = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // if (!response.ok) {throw new error ('somthing went wrong')};
        const todos =response.data;
        const completedTodes = todos.filter( todo => todo.completed);
        const simpleTodo = completedTodes.map(todo => ({
            title : todo.title,
            userId : todo.userId
            
        }));
        return simpleTodo; 
    }
    catch(error){
        console.error('errer at fettching', error)
        throw error
    }
}
fetchTodos()
.then(result => console.log('remaining todos ', result ))
.catch(err => console.log('error in fetching data',err))
