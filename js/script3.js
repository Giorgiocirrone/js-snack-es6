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


