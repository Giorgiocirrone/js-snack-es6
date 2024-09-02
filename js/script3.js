/*SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/

//preparo una variabile vuota per poter inserire dall'interno del ciclo la mia biici più leggera 

//primo passo creiamo un array di oggetti e lo denominiamo 


//scorriamo gli elementi dell'array  
//cerco l'elemento che mi interessa (ovvero la bici con peso minore) 

//usiamo due array in cui nel secondo inseriremo gli stessi elementi in ordine di peso 



//creiamo un array  di oggetti 



/*

*SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

 */

/*


A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

//primo passo costruzione di un array 
const nomi = ['pippo', 'PLUTO', 'Paperino'];

const nomiCapitalizzati = [];

//iterare sul vettore in modo tale da ispezionare ogni elemento 

//scorriamo elemento per elemento 
for (let i = 0; i < nomi.length; i++) {


    //breve validazione 
    console.log(nomi[i]);

    //creazione di una variabile in modo tale da avere tutto in minuscolo 

    const lower = nomi[i].toLowerCase();

    //seconda validazione per vedere se tutto funziona

    console.log(lower);

    //a questo punto prendere la prima lettera e capitalizzarla

    const formattato = lower.charAt(0).toUpperCase() + lower.slice(1);
    //controllo 

    console.log(formattato);
    //mettere tutto in un vettore nuovo 


    nomiCapitalizzati.push(formattato);



}


//validazione finale 


console.log(nomiCapitalizzati);





/*correzione riccardo 



//creazione array di stringhe 

const strings = ['topolina','topoLINo','EstrEmaCaSEWord','pippo','PLUTO','Paperino'];


cosnt formattatedStrings = strings.map((word) => {


    //prendo il primo carattere della parola e lo trasformo in uppercase

    const firstChar = wod.charAt(0).toUpperCase(); 

    const restOfWord  = word.substring(1).tolowercase ;


    //nell'utlima fase si mette tutto in una riga 


    
)};























*/

/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/


//creazione array  con la lista dei mammiferi in aggiunta a quello precedente 

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'elefante', famiglia: 'elefantidi', classe: 'mammiferi' },
    { nome: 'serpente', famiglia: 'colubridi', classe: 'rettili' },
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'tartaruga', famiglia: 'testudinidi', classe: 'rettili' }
];

//piccola validazione 

console.log(animali);


//adesso 'selezionare solo i mammiferi'


const mammiferi = animali.filter(animale => animale.classe === 'mammiferi');
//validazione 
console.log(mammiferi);



/*


cosnt mammiferi =[]


animali.forEach((animal)) => {

    if (elementi.classe === 'mammiferi'){

    mammiferi.push(anilm)
    
    }
    
    
    }






 */


/*

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

*/


const persone = [


    { nome: 'giorgio', cognome: 'cirrone', età: '23' },
    { nome: 'marco', cognome: 'antonio', età: '16' },

    { nome: 'giulio', cognome: 'cesare', età: '40' },

    { nome: 'tizio', cognome: 'caio', età: '16' },
    { nome: 'giulio', cognome: 'cerrone', età: '15' },


];




const minAge = 18;
message1 = 'puoi guidare';

message2 = 'non puoi guidare';


guiudatori = [];


//così facendo vado ad iterare su questo array e con una validazione interna capisco chi può e chi non può guidare 
const frase = '';
persone.forEach((persona) => {
    const frase = `${persona.nome} ${persona.cognome} ${persona.età >= minAge ? message1 : message2}`;
    guidatori.push(frase);
});

console.log(guidatori);