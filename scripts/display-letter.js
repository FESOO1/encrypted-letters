const displayLetterTitle = document.querySelector('.display-letter-title');
const displayLetterItself = document.querySelector('.display-letter-paragraph');

// GETTING DATA FROM LOCAL STORAGE

function gettingDataFromLocalStorage() {
    const secretLetterName = localStorage.getItem('secretLetterName');
    const secretLetterTitle = localStorage.getItem('secretLetterTitle');
    
    if (secretLetterName) {
        displayLetterItself.innerHTML = secretLetterName;
        displayLetterTitle.textContent = secretLetterTitle;
    };
};

gettingDataFromLocalStorage();