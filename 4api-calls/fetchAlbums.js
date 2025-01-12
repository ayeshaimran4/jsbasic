const fetchAlbums = fetch ('https://jsonplaceholder.typicode.com/albums' , {'method':'GET'})

.then((data) => data.json())
.then((data => {
    return data 
    .filter( albums => albums.title)
    .map( albums =>({
        "id":albums.id,
        "title":albums.title
    }));
}))
.catch((err) => console.log(err))
 fetchAlbums.then(albums => console.log(albums))

