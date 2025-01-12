const axios = require('axios')

const fetchComments= async() =>
    {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            const comments = response.data;
            const filteredComments = comments.filter (comment => comment.name) 
             filteredComments.forEach(comment => {
                console.log(`name: ${comment.name},email: ${comment.email}`)

            });
            return filteredComments;
        }
        catch(error){
            console.log(error)
            throw error;
        }
    };
    fetchComments()
    .then(result => {
        console.log(`\nFetched ${result.length} comments with valid names.`);
    })
    .catch(err => { console.error(err)
    });