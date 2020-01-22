// / Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino
// Sicuro di aver chiuso il gas?
// Chi semina vento raccoglie tempesta
// Il mattino ha l'oro in bocca
// Tanto va la gatta al lardo che ci lascia lo zampino

// var frase1 = 'Oggi troverai una cosa dimenticata';
// var frase2 = 'Ciò che è fatto è fatto';
// var frase3 = 'Il buon giorno si vede dal mattino';
// var frase4 = 'Tanto va la gatta al lardo che ci lascia lo zampino';
// var frase5 = 'Chi semina vento raccoglie tempesta';
//
// var numeroCasuale=Math.floor(Math.random() * (5 - 1) ) + 1;
//
//
// if(numeroCasuale==1){
//   console.log(frase1);
// }else if (numeroCasuale==2) {
//   console.log(frase2);
// }else if (numeroCasuale==3) {
//   console.log(frase3);
// }else if (numeroCasuale==4) {
//   console.log(frase4);
// }else if (numeroCasuale==5) {
//   console.log(frase5);
// }

var frasi = [
  'Oggi troverai una cosa dimenticata',
  'Ciò che è fatto è fatto',
  'Il buon giorno si vede dal mattino',
  'Sicuro di aver chiuso il gas?',
  'Chi semina vento raccoglie tempesta',
  'Il mattino ha l\'oro in bocca',
  'Tanto va la gatta al lardo che ci lascia lo zampino'
];

var fraseRandom = Math.floor(Math.random() * (7 - 1) ) + 1;
