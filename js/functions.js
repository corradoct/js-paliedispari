// Funzione che controlla se una parola, inserita dall'utente via prompt, è palindroma.
// La funzione richiede come argomento la parola che l'utente inserisce in un prompt,
// crea una variabile dove, tramite un ciclo for, inserisce la parola inverita.
// Con un ciclo if controlla se la parola inserita dall'utente è uguale alla parola invertita e ritorna il risultato.

function controlloPalindroma(userWord) {
  var parolaPalindroma = '';
  var result = false;
  for (var i = userWord.length - 1; i >= 0;  i--) {
    parolaPalindroma += userWord[i];
    if (userWord === parolaPalindroma ) {
      result = true;
    }
  }
  return result;
}


// Funzione che genera un numero intero random in un range di valori.
// La funzione richiede come argomenti il numero di partenza del range e il numero finale del range.
// Ad esempio per un numero da 1 a 5, numStart è 1 e numEnd è 5.
// La funzione ritorna il numero random.

function generaNumero(numStart, numEnd) {
  var number = Math.floor(Math.random() * numEnd + numStart);
  return number;
}


// Funzione che calcola la somma di due numeri.
// La funzione richiede come argomenti i due numeri da sommare.
// La funzione ritorna la somma.

function somma(num1, num2) {
  var sum = num1 + num2;
  return sum;
}


// Funzione che controlla se un numero è pari.
// La funzione richiede come argomento il numero da controllare.
// La funzione ritorna true se il numero è pari e false se il numero è dispari.

function isEven(number) {
  var even = false;
  if (number % 2 == 0) {
    even = true;
  }
  return even;
}
