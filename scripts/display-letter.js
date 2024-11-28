const displayLetterTitle = document.querySelector('.display-letter-title');
const displayLetterItself = document.querySelector('.display-letter-itself');

// GETTING DATA FROM LOCAL STORAGE

function gettingDataFromLocalStorage() {
    const letterItselfData = localStorage.getItem('letterItselfData');
    const letterTitleData = localStorage.getItem('letterTitleData');

    if (letterItselfData) {
        displayLetterItself.textContent = letterItselfData;
        displayLetterTitle.textContent = letterTitleData;
    };
};

gettingDataFromLocalStorage();