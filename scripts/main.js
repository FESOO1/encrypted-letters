const addLetterButton = document.getElementById('addLetterButton');
const slForm = document.getElementById('slForm');

// FORM

function addLetterFormDisplay() {
    slForm.classList.toggle('sl-form-js');
    addLetterButton.classList.toggle('add-letter-button-js');
};

// INITIALIZING BUTTONS

addLetterButton.addEventListener('click', addLetterFormDisplay);