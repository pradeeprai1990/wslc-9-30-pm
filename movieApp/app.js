let movieOuterElement = document.querySelector('.movieOuter')
let getMovies = async (title = '') => {
    let apiUrl;
    if (title == '') {
        apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1`
    }
    else {
        apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
    }

    let response = await fetch(apiUrl) //raw response
    let data = await response.json() //json response // Object
    let { results } = data

    let movieItems = ''
    results.forEach((object) => {
        let { original_title, overview, poster_path, release_date } = object
        movieItems += `<div class="movieItems">
                            <div style="position: relative;">
                                <img src="https://image.tmdb.org/t/p/w1280${poster_path}" alt="">
                                <div class="hoverContent">
                                    <p>
                                       ${overview}
                                    </p>
                                </div>
                            </div>
                        
                            <div class="movieInfo">
                                <h3> ${original_title}</h3>
                                <p> ${release_date}</p>
                            </div>
                        </div>`

    });

    movieOuterElement.innerHTML = movieItems

    // let finalData=data.results





}


getMovies() // should

//Search Functionality
let inputElement = document.querySelector('input')
inputElement.addEventListener("keyup",()=>{
    getMovies(inputElement.value)
})