console.log('JS OK!');

// ----- JSNACK BONUS 1 ----- //
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
//prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3

const firstArray = ['a', 'b', 'c', 'd', 'e', 'f'];

const secondArray = [1, 2, 3, 4, 5, 6];

const fusionArray = [];

function fuseArrays(firstArray, secondArray) {

    for (let i = 0; i < firstArray.length; i++) {
        fusionArray.push(firstArray[i], secondArray[i]);
    }

}

fuseArrays(firstArray, secondArray);
console.log(fusionArray);



// ----- JSNACK BONUS 2 ----- //
//Scrivi una funzione che accetti tre argomenti: un array e due numeri
//(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array)
//La funzione ritornerà un nuovo array con i valori che hanno
//la posizione compresa tra “a” e “b”

function threeArgs(array, num1, num2) {

    for (let i = 0; i < array.lengh; i++) {
        if (array[i] >= num1 && array[i] <= num2) {
            newArray.push(array[i]);
        }
    }

}

let newArray = [];

const techThings = ['mouse', 'keyboard', 'laptop', 'CPU', 'trakpad'];

threeArgs(techThings, 1, 4);
console.log(newArray);