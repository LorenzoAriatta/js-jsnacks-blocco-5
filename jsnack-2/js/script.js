console.log('JS OK!');

// ----- JSNACK 2 ----- //
//Crea 10 oggetti che rappresentano una zucchina
//Dividi in due array le zucchine che misurano meno o più di 15cm
//Infine stampa separatamente quanto pesano i due gruppi di zucchine


// ----- FUNCTIONS ----- //
function randomWeight() {
    return Math.floor(Math.random() * 450) + 50;
}

function randomLength() {
    return Math.floor(Math.random() * 20) + 10;
}

function totalWeight(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].weight;
        //console.log(zucchine[i].weight);
    }
    return sum;
}

function verifiedLength() {

    for (let i = 0; i < zucchine.length; i++) {

        if (zucchine[i].length < 15) {
            shortZucchine.push(zucchine[i]);
        } else {
            longZucchine.push(zucchine[i]);
        }
    }
}


// ----- GENERAL ----- //
const zucchine = [{
    variety: 'nera',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'tonde',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'trombetta',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'pâtisson',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'Crookneck',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'giallo',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'napoletana',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'fiorentino',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'romanesco',
    weight: randomWeight(),
    length: randomLength()
},
{
    variety: 'striata',
    weight: randomWeight(),
    length: randomLength()
},
];

//array lunghezze zucchine
const shortZucchine = [];
const longZucchine = [];


totalWeight(zucchine);
verifiedLength()
console.log('Le zucchine più corte di 15cm: ', shortZucchine);
console.log('Le zucchine più lunghe di 15cm: ', longZucchine);
console.log('Il peso totale delle zucchine è: ', totalWeight(zucchine));
console.log('Il peso delle zucchine inferiori ai 15cm è: ', totalWeight(shortZucchine));
console.log('Il peso delle zucchine superiori ai 15cm è: ', totalWeight(longZucchine));