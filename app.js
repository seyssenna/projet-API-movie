const moviesList = document.querySelector('#movies');
const searchedMovie = document.querySelector('#searchedMovie');
const searchMovie = document.querySelector('#searchMovie');


const getMovie = (movieTitle) => {
    const url = `http://www.omdbapi.com/?s=${movieTitle}&apikey=c31493b7`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        if (data.Response){
            data.Search.forEach(movie => {
                moviesList.insertAdjacentHTML('beforeend', `
                <li>
                    <img src="${movie.Poster}"/> 
                    <h4>${movie.Title}</h4>
                </li>
                `);
            });
        }
    })
    .catch((err) => {
        console.log('mon erreur est:' + err);
    });
}



searchMovie.addEventListener("click", (event)=>{

    moviesList.innerHTML="";
  getMovie(searchedMovie.value);

});


getMovie("batman");