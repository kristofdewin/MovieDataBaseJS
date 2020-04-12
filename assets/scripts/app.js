const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const addMovieButton = document.querySelector('header').lastElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');
const movies = [];
const entryTextSection = document.getElementById('entry-text');


const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
}

const deleteMovieHandler = (movieId) => {
    let identifiedIndex = 0;
    for(movie of movies) {
        if(movie.id === movieId){
            break;
        }
        identifiedIndex++;
    }
    movies.splice(identifiedIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[identifiedIndex].remove();
};

const renderNewMovieElement = (id,title, image, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class = "movie-element__image">
        <img src = "${image}" alt = "${title}">
    </div>
    <div class = "movie-element__info">
        <h2>${title}</h2>
        <p>${rating}</p>
    </div>
    `;
    newMovieElement.addEventListener('click',deleteMovieHandler.bind(null,id));
    const listRoot = document.getElementById('movie-list')
    listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

function toggleMovieModal () {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearMovieInputs = () => {
    for(const usrInput of userInputs) {
        usrInput.value = '';
    }
};

const cancelAddMovieButtonClickHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
};

const backdropClickHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
};

const addMovieClickHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    //removes whitespace and does basic check on input
    if(titleValue.trim()==='' || imageUrlValue.trim()==='' || ratingValue.trim()===''|| +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter valid values (rating between 1 and 5).')
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

 

startAddMovieButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancelAddMovieButtonClickHandler);
confirmAddMovieButton.addEventListener('click',addMovieClickHandler);