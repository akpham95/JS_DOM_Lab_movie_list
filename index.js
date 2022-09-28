let message = document.querySelector('#message')
document.querySelector("form").addEventListener("submit", addMovie);

function addMovie(event) {

    event.preventDefault();

    let inputField = document.querySelector("input")

    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)

    inputField.value = ""
}

function deleteMovie(event){
    message.textContent = 'Movie Deleted!'
    event.target.parentNode.remove() 
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    }else{
        message.textContent = 'Movie added back!'
    }
}