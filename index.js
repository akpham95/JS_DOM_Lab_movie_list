document.querySelector("form").addEventListener("submit", addMovie);

function addMovie(event) {

    event.preventDefault();

    let inputField = document.querySelector("input")

    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)

    inputField.value = ""
}

function deleteMovie(event){
    event.target.parentNode.remove() 
}
