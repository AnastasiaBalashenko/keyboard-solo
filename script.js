const wordLetters = document.querySelectorAll('.word span');
let index = 0;

function setRandomWord() {
    const words = ['apple', 'lemon', 'grape', 'kiwi', 'banan', 'berry'];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    wordLetters.forEach((letter, i) => {
        letter.textContent = randomWord[i];
    });

    index = 0;
}

function handleInput(e) {
    if (e.key === "Enter") {
        setRandomWord();
        wordLetters.forEach(letter => {
            letter.classList.remove('w');
            letter.classList.remove('c');
        });
        return;
    }

    if (e.key === wordLetters[index].textContent) {
        if (!wordLetters[index].classList.contains('c')) {
            wordLetters[index].classList.remove('w');
            wordLetters[index].classList.add('c');
            index++;

            if (index === wordLetters.length) {
                wordLetters.forEach(letter => {
                    letter.classList.add('c');
                });
            }
        }
    } else {
        wordLetters[index].classList.add('w');
    }
}

setRandomWord();
document.addEventListener('keydown', handleInput);