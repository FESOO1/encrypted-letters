const displayLetterTitle = document.querySelector('.display-letter-title');
const displayLetterItself = document.querySelector('.display-letter-paragraph');

// GETTING DATA FROM LOCAL STORAGE

function gettingDataFromLocalStorage() {
    const secretLetterItself = localStorage.getItem('secretLetterItself');
    const secretLetterTitle = localStorage.getItem('secretLetterTitle');
    
    if (secretLetterItself) {
        displayLetterItself.innerHTML = secretLetterItself;
        displayLetterTitle.textContent = secretLetterTitle;
    };
};

gettingDataFromLocalStorage();