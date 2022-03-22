console.log('JS OK!');

// ----- JSNACK 3 ----- //
//Scrivi funzione che accetti una stringa come argomento e la inverta

function invert(word) {

    let split = word.split('');

    let reverse = split.reverse();

    let join = reverse.join('');

    return join;
}

const result = document.getElementById('result');
const invertButton = document.getElementById('invertButton');

invertButton.addEventListener('click', function () {

    let userInput = document.getElementById('userInput').value;

    let invertWord = invert(userInput);
    console.log(invertWord);

    result.innerText = `Reverse: ${invertWord}`;

})