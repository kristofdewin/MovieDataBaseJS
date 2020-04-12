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
}

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
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
};

 

startAddMovieButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancelAddMovieButtonClickHandler);
confirmAddMovieButton.addEventListener('click',addMovieClickHandler);
