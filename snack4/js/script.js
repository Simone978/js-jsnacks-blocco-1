
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var invitati = ['pippo', 'pluto', 'paperino'];
var ospite = prompt('inserisci il tuo nome');
var messaggio = false;

for (var i = 0; i < invitati.length; i++) {
  if(invitati[i] == ospite){
  messaggio = true;
}else {
  messaggio = false;
}
};

if (messaggio == true){
  alert('sei invitato');
}else {
  alert('non sei invitato');
}
