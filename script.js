const zodiacSuggestions = {
    aries: { book: "The Alchemist", movie: "The Hunger Games" },
    taurus: { book: "Pride and Prejudice", movie: "The Notebook" },
    gemini: { book: "The Catcher in the Rye", movie: "Inception" },
    cancer: { book: "Little Women", movie: "Finding Nemo" },
    leo: { book: "Harry Potter", movie: "The Lion King" },
    virgo: { book: "The Great Gatsby", movie: "A Beautiful Mind" },
    libra: { book: "The Fault in Our Stars", movie: "La La Land" },
    scorpio: { book: "Gone Girl", movie: "The Dark Knight" },
    sagittarius: { book: "Wild", movie: "Into the Wild" },
    capricorn: { book: "Educated", movie: "The Pursuit of Happyness" },
    aquarius: { book: "The Art of War", movie: "The Matrix" },
    pisces: { book: "The Ocean at the End of the Lane", movie: "Eternal Sunshine of the Spotless Mind" },
};

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const sign = document.getElementById('sign').value;
    const choice = document.querySelector('input[name="choice"]:checked').value;

    const suggestion = zodiacSuggestions[sign][choice];
    
    localStorage.setItem('suggestion', `${name}, we suggest you ${choice === 'book' ? 'read' : 'watch'}: ${suggestion}`);
    window.location.href = 'suggestions.html';
});

function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function() {
    const suggestionText = localStorage.getItem('suggestion');
    if (suggestionText) {
        document.getElementById('suggestionText').innerText = suggestionText;
    }
});
