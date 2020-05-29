//  *********************  Palindroma   ******************

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Creo la variabile dell'elemento
var messaggio = document.getElementById('messaggio');

// Chiedo all'utente di inserire una parola e controllo la validità della parola
var parolaUtente = prompt('Inserisci una parola per verificare se è palindroma');
while (parolaUtente.length === 0 || !(isNaN(parolaUtente))) {
  parolaUtente = prompt('Errore.Inserisci una parola per verificare se è palindroma');
}

// Controllo se la parola inserita è palindroma
var isPalindrome = controlloPalindroma(parolaUtente);

// Stampo a video la risposta
if (isPalindrome === true) {
  messaggio.innerHTML = 'La parola ' + parolaUtente + ' è palindroma';
} else {
  messaggio.innerHTML = 'La parola ' + parolaUtente + ' non è palindroma';
}



//  ******************   Pari e Dispari   ****************

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// // Creo la variabile dell'elemento
// var messaggio = document.getElementById('messaggio');
//
// // Chiedo all'utente di inserire un numero da 1 a 5 e controllo la validità del numero
// var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
// while (isNaN(numeroUtente) || numeroUtente === 0 || numeroUtente > 5) {
//   numeroUtente = parseInt(prompt('Errore.Inserisci un numero da 1 a 5'));
// }
//
// // Chiedo all'utente di scegliere tra pari e dispari
// var pariDispari = prompt('Inserisci la tua scelta: pari o dispari');
// while (!(isNaN(pariDispari)) || pariDispari.length === 0) {
//   pariDispari = prompt('Errore.Inserisci la tua scelta: pari o dispari');
// }
//
// // Genero un numero da 1 a 5 per il computer
// var numeroComputer = generaNumero(1, 5);
//
// // Sommo i due numeri
// var somma = somma(numeroUtente, numeroComputer);
//
// // Controllo se la somma è pari o dispari
// var sommaPariDispari = isEven(somma);
//
// // Creo le variabili per il messaggio finale
// var risultato = 'dispari';
// var vittoria = 'Hai perso';
// if (sommaPariDispari) {
//   risultato = 'pari';
//   vittoria = 'Hai vinto';
// }
//
// // Stampo il messaggio finale
// messaggio.innerHTML = 'Il tuo numero è ' + numeroUtente + ' ed hai scelto ' + pariDispari + ' .<br>' +
// 'Il numero del computer è ' + numeroComputer + ' .<br>' +
// 'La somma è ' + somma + ' e quindi è ' + risultato + ' .<br>' + vittoria + ' .';
