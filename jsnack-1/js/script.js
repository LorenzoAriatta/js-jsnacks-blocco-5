console.log('JS OK!');

// ----- JSNACK 1 ----- //
//Crea un array di 10 oggetti che rappresentano una zucchina
//indicando per ognuna varietà, peso e lunghezza
//Calcola quanto pesano tutte le zucchine

function randomWeight() {
    return Math.floor(Math.random() * 450) + 50;
}

function totalWeight() {
    let sum = 0;
    for (let i = 0; i < zucchine.length; i++) {
        sum += zucchine[i].weight;
        console.log(zucchine[i].weight);
    }
    return sum;
}

const zucchine = [{
    variety: 'nera',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'tonde',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'trombetta',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'pâtisson',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'Crookneck',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'giallo',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'napoletana',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'fiorentino',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'romanesco',
    weight: randomWeight(),
    length: '26cm'
},
{
    variety: 'striata',
    weight: randomWeight(),
    length: '26cm'
},
];

console.log('Array lungo: ' + zucchine.length);

totalWeight();
console.log('Il peso totale delle zucchine è: ' + totalWeight());