// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.
var numeri = parseInt(prompt('inserisci un numero'));

// console.log(numeri);
for (var i = 1; i <= numeri; i++) {
  console.log(Math.pow(i, 3));
}
