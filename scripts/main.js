const addLetterButton = document.getElementById('addLetterButton');
const slForm = document.getElementById('slForm');
let isFormOpen = false;

// FORM VARIABLES

const titleLetterInput = document.getElementById('titleLetterInput');
const letterInput = document.getElementById('letterInput');
const letterPasswordInput = document.getElementById('letterPasswordInput');
const letterSaveButton = document.getElementById('letterSaveButton');


// HANDLING THE FORM

// DISPLAYING THE FORM

function addLetterFormDisplay() {
    if (isFormOpen === false) {
        slForm.classList.add('sl-form-js');
        addLetterButton.classList.add('add-letter-button-js');
        
        isFormOpen = true;
    } else {
        slForm.classList.remove('sl-form-js');
        addLetterButton.classList.remove('add-letter-button-js');
        // RESETTING THE FORM
        titleLetterInput.value = '';
        letterInput.value = '';
        letterPasswordInput.value = '';

        isFormOpen = false;
    };
};

// INITIALIZING BUTTONS

addLetterButton.addEventListener('click', addLetterFormDisplay);