const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const addMovieButton = document.querySelector('header').lastElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const backdrop = document.getElementById('backdrop');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

function toggleMovieModal () {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovieButtonClickHandler = () => {
    toggleMovieModal();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

 

startAddMovieButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancelAddMovieButtonClickHandler);