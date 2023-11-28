const greetings = {
    English: 'Hello',
    French: 'Bonjour',
    Spanish: 'Hola',
    Hindi: 'Namaste, नमस्ते',
    Chinese: 'Nǐn hǎo',
    German: 'Guten tag',
    Italian: 'Ciao',
    Russian: 'Zdravstvuyte',
    Hawaiaan: 'Aloha',
    Korean: 'Anyeong haseyo, 안녕하세요'
};

const languages = Object.keys(greetings);
let currentLanguageIndex = 0;

$('#character').on('click', function () {
    changeLanguage();
});

// Function to change language
function changeLanguage() {
    const currentLanguage = languages[currentLanguageIndex];
    $('#character').text(`${greetings[currentLanguage]} (${currentLanguage})`);
}

// Event listener for keyboard input
$(document).keydown(function (e) {
    if (e.which === 37) {
        // Left arrow key
        currentLanguageIndex = (currentLanguageIndex - 1 + languages.length) % languages.length;
        changeLanguage();
    } else if (e.which === 39) {
        // Right arrow key
        currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
        changeLanguage();
    }
});
