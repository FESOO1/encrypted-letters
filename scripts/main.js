const addLetterButton = document.getElementById('addLetterButton');
const slForm = document.getElementById('slForm');
let isFormOpen = false;

// FORM VARIABLES
const titleLetterInput = document.getElementById('titleLetterInput');
const letterInput = document.getElementById('letterInput');
const letterPasswordInput = document.getElementById('letterPasswordInput');
const passwordLabel = document.getElementById('passwordLabel');
const letterSaveButton = document.getElementById('letterSaveButton');

// PASSWORD FORM VARIABLES
const spPasswordForm = document.querySelector('.sl-password-form');
const spPasswordFormInner = document.querySelector('.sl-password-form-inner');
const enterPasswordInput = document.getElementById('enterPasswordInput');
const enterPasswordButton = document.getElementById('enterPasswordButton');

// SECRET LETTERS THEMSELVES VARIABLES
const secretLettersThemselves = document.querySelector('.secret-letters-themselves');
const secretLetterTitleData = [];
const secretLetterItselfData = [];
let savedPassword;
let isSecure = false;

// UNLOCK THE LETTERS BUTTON
const unlockTheLettersButton = document.getElementById('unlockTheLettersButton');
let isUnlocked = false;

// HANDLING THE FORM

function createSecretLetter(e) {
    e.preventDefault();

    secretLettersThemselves.innerHTML += `
        <a class="secret-letter-itself">
            <div class="secret-letter-itself-inner">
                <h3 class="secret-letter-itself-inner-title">${titleLetterInput.value}</h3>
            </div>
            <div class="secret-letter-itself-buttons">
                <button disabled class="secret-letter-itself-button-delete">
                    <svg class="secret-letter-itself-button-delete-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </button>
                <div class="secret-letter-itself-button-lock">
                    <svg class="secret-letter-itself-button-lock-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M12 16.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97626 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97626 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg class="secret-letter-itself-button-lock-svg-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M12 16.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C13.9593 2 15.5 3.5 16 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </a>
    `;

    // SAVING THE INPUTS IN ARRAYS
    secretLetterItselfData.push(letterInput.value);
    secretLetterTitleData.push(titleLetterInput.value);

    localStorage.setItem('secretLetterItselfData', JSON.stringify(secretLetterItselfData));
    localStorage.setItem('secretLetterTitleData', JSON.stringify(secretLetterTitleData));

    // PASSWORD
    savedPassword = letterPasswordInput.value;
    if (savedPassword.length > 0) {
        isSecure = true;
        passwordLabel.classList.add('sl-form-itself-letter-password-input-inactive');
        localStorage.setItem('isPasswordSecure', isSecure);
        localStorage.setItem('savedPassword', savedPassword)
    };

    // RESETTING EVERYTHING
    titleLetterInput.value = '';
    letterInput.value = '';
    letterPasswordInput.value = '';
    slForm.classList.remove('sl-form-js');
    addLetterButton.classList.remove('add-letter-button-js');
    isFormOpen = false;

    // SECRET LETTER ITSELF EVENT LISTENER
    const secretLetterItself = document.querySelectorAll('.secret-letter-itself');
    for (let i = 0; i < secretLetterItself.length; i++) {
        secretLetterItself[i].addEventListener('click', () => {
            localStorage.setItem('secretLetterItself', secretLetterItselfData[i]);
            localStorage.setItem('secretLetterTitle', secretLetterTitleData[i]);
        });
    };
};

// ENTER PASSWORD

enterPasswordButton.addEventListener('click', e => {
    e.preventDefault();

    const savedPasswordLocalStorage = localStorage.getItem('savedPassword');

    if (enterPasswordInput.value === savedPasswordLocalStorage) {
        spPasswordForm.classList.remove('sl-password-form-active');
        unlockTheLettersButton.classList.add('sl-lock-the-letters-button-unlocked');
        isUnlocked = true;

        for (const secretLetters of secretLettersThemselves.children) {
            secretLetters.classList.add('secret-letter-itself-unlocked');
            secretLetters.href = '../pages/display-letter.html';
        };
    } else {
        spPasswordFormInner.classList.add('sl-password-form-inner-js');
        setTimeout(() => {
            spPasswordFormInner.classList.remove('sl-password-form-inner-js');
        }, 301);
    };

    // RESETTING
    enterPasswordInput.value = '';
});

// UNLOCK AND LOCK THE LETTERS

unlockTheLettersButton.addEventListener('click', () => {
    if (isUnlocked === true) {
        isUnlocked = false;
        unlockTheLettersButton.classList.remove('sl-lock-the-letters-button-unlocked');
        for (const secretLetters of secretLettersThemselves.children) {
            secretLetters.classList.remove('secret-letter-itself-unlocked');
            secretLetters.removeAttribute('href');
        };
    } else {
        spPasswordForm.classList.add('sl-password-form-active');
    };
});

// UNLOCK THE LETTERS PASSWORD FORM

spPasswordForm.addEventListener('click', () => {
    spPasswordForm.classList.remove('sl-password-form-active');
});

spPasswordFormInner.addEventListener('click', e => {
    e.stopImmediatePropagation();
});

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
letterSaveButton.addEventListener('click', createSecretLetter);


// LOCAL STORAGE

// PASSWORD

function passwordCheck() {
    const passwordCheckLocalStorage = localStorage.getItem('isPasswordSecure');

    if (passwordCheckLocalStorage === 'true') {
        passwordLabel.classList.add('sl-form-itself-letter-password-input-inactive');
    };
};

passwordCheck();


// SECRET LETTER ITSELF

function secretLetterItselfLocalStorage() {
    const secretLetterTitleData = JSON.parse(localStorage.getItem('secretLetterTitleData'));
    const secretLetterItselfData = JSON.parse(localStorage.getItem('secretLetterItselfData'));

    if (secretLetterTitleData) {
        // LOOP TO CREATE AS MANY ELEMENTS AS WE NEED
        for (let i = 0; i < secretLetterTitleData.length; i++) {
            secretLettersThemselves.innerHTML += `
                <a class="secret-letter-itself">
                    <div class="secret-letter-itself-inner">
                        <h3 class="secret-letter-itself-inner-title">${secretLetterTitleData[i]}</h3>
                    </div>
                    <div class="secret-letter-itself-buttons">
                        <button disabled class="secret-letter-itself-button-delete">
                            <svg class="secret-letter-itself-button-delete-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </button>
                        <div class="secret-letter-itself-button-lock">
                            <svg class="secret-letter-itself-button-lock-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M12 16.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97626 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97626 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg class="secret-letter-itself-button-lock-svg-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M12 16.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C13.9593 2 15.5 3.5 16 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </a>
            `;

            /* // PUSHING THE DATA
            secretLetterItselfData.push(secretLetterItselfData[i]);
            secretLetterTitleData.push(secretLetterTitleData[i]);

            localStorage.setItem('secretLetterItselfData', JSON.stringify(secretLetterItselfData));
            localStorage.setItem('secretLetterTitleData', JSON.stringify(secretLetterTitleData)); */
        };
    };
};

secretLetterItselfLocalStorage();