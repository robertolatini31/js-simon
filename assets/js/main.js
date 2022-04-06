// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire (uno alla volta) i numeri che ha visto precedentemente, tramite il prompt()
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Visualizzare in pagina 5 numeri casuali.

// collego l'elemnto html in cui inserisco i numeri
const randomNumbersElement = document.querySelector('.random_numbers');

// creo un array di 5 numeri random ---- OK
    const generatedNumbersArray = [];
    for (let i = 0; i < 5; i++) {
        generatedNumbersArray[i] = Math.floor(Math.random() * 10 + 1);
        // e li stampo a chermo
        if(i != 4) {randomNumbersElement.innerHTML += generatedNumbersArray[i] + ' - ';}
        else { randomNumbersElement.innerHTML += generatedNumbersArray[i] }
    }
   
// console.log(generatedNumbersArray);




// Dopo 30 secondi l'utente deve inserire (uno alla volta) i numeri che ha visto precedentemente, tramite il prompt()
// faccio pulire html dopo 29s
setTimeout(deleteHtml, 2900)
// faccio inserire 5 numeri da prompt dopo 30s
setTimeout(askNumbers(generatedNumbersArray, randomNumbersElement), 30000)

// funzione che pulisce html
function deleteHtml () {
    randomNumbersElement.innerHTML = '';
}

//funzione che chiede 5 numeri
function askNumbers(arrayGenerated, htmlElement) {
    const inserted = [];
    for(let i = 0; i < 5; i++) {
        inserted[i] = parseInt(prompt('inserisci un numero'));
        //console.log(inserted[i]);
    }
    for(let j = 0; j < 5; j++){ // ciclo che stampa a schermo i risultati
        if(arrayGenerated[j] == inserted[j]){
            htmlElement.innerHTML += `bravo era: ${inserted[j]}`;
        } else  {
            htmlElement.innerHTML += `hai sbagliato era: ${arrayGenerated[j]}`;
        }
    }

    //console.log(inserted);
}





// il software dice quanti e quali dei numeri da indovinare sono stati individuati.



