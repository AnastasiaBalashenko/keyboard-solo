const wordHolder = document.querySelector('.word');
let index = 0;

function setRandomWord() {
    const words = ['apple', 'lemon', 'grape', 'kiwi', 'banana', 'berry', 'blueberry'];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    wordHolder.innerHTML = randomWord
        .split("")
        .map(char => `<span>${char}</span>`)
        .join("");

    index = 0;
}

function handleInput(e) {
    const wordLetters = document.querySelectorAll('.word span');

    if (e.key === wordLetters[index].textContent) {
        wordLetters[index].classList.remove('w');
        wordLetters[index].classList.add('c');
        index++;

        if (index === wordLetters.length) {
            setRandomWord();
        }
    } else {
        wordLetters[index].classList.add('w');
    }
}

setRandomWord();
document.addEventListener('keydown', handleInput);