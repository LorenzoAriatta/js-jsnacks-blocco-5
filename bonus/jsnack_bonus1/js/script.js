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

    console.log(fusionArray);

}