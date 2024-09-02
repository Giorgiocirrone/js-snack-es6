/*
*SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/



const biciclette = [
    {
        nome: "Bici da Corsa 1",
        peso: 8
    },
    {
        nome: "Bici da Corsa 2",
        peso: 9
    },
    {
        nome: "Bici da Corsa 3",
        peso: 10
    },

    {
        nome: "Bici da Corsa 4",
        peso: 5
    },

    {
        nome: "Bici da Corsa 5",
        peso: 7
    }
];

// Stampa l'array di biciclette
console.log(biciclette);



//preparo una variabile a cui assegno la prima bici 

let leggera = biciclette[0];

//scorro all'interno del listato di bici 


biciclette.forEach((bicicletta) => {

    if (bicicletta.peso < leggera.peso) {
        //sovrascrivo una variabile 
    } leggera = bicicletta;


});
//validazione finale 

console.log(leggera);



/*snack 4 */




// Array di oggetti che descrive alcune squadre di calcio
const squadre = [
    {
        nome: "Squadra 1",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra 2",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra 3",
        puntiFatti: 45,
        falliSubiti: 18
    },
    {
        nome: "Squadra 4",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra 5",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// Stampa l'array di squadre
console.log(squadre);


//genero numeri randomici 

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//questa funzione andrà a inserire numeri random nelle proprietà settate a 0 


for (let i = 0; i < squadre.length; i++) {


    const squadra = squadre[i];
    squadra.falliSubiti = getRandomNumber(10, 50);
    squadra.puntiFatti = getRandomNumber(20, 120);
}



console.log(squadre);


//destrutturazione del dato 


const nuovalista = squadre.map((elmento) => {


    const { nome, falliSubiti } = elemento;
    return { nome, falliSubiti };
});



console.log(nuovalista);