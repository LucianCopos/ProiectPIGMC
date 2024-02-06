function calculateScore() {
    const questions = document.querySelectorAll('.question');
    let score = 0;

    questions.forEach(question => {
        const selectedOption = question.querySelector('input:checked');
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            // Compară răspunsul utilizatorului cu răspunsul corect
            if (userAnswer === correctAnswers[question.id]) {
                score++;
            }
        }
    });

    // Afișează scorul
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<p>Scorul tău: ${score}/5</p>`;
}

function resetQuiz() {
    const options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.checked = false;
    });

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
}

// Răspunsurile corecte pentru fiecare întrebare
const correctAnswers = {
    'question1': 'c',
    'question2': 'a',
    'question3': 'a',
    'question4': 'b',
    'question5': 'c',
    // Adaugă răspunsurile corecte pentru întrebările 3, 4 și 5 aici
};