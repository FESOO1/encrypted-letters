const displayLetterTitle = document.querySelector('.display-letter-title');
const displayLetterItself = document.querySelector('.display-letter-itself');

// GETTING DATA FROM LOCAL STORAGE

function gettingDataFromLocalStorage() {
    const letterTitleData = localStorage.getItem('letterTitleData');
    const letterItselfData = localStorage.getItem('letterItselfData');
    
    if (letterTitleData) {
        displayLetterTitle.textContent = letterTitleData;
        displayLetterItself.textContent = letterItselfData;
    };
};

gettingDataFromLocalStorage();