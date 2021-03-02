//Chiedere all'utente la sua email
var email = prompt("Inserisci la tua email");

//Creo l'array contenente la lista delle email
var array_email = ["pepe@gmail.com","bho@gmail.com","@gmail","fracesco@gmail.com","ciao@gmail.com","nonhoidee@gmail.com","boolean@gmail.it","email@gmail.com","etere@gmail.com","cento@gmail.com"];

var flag = false;

//Verifica se l'email scritta dall'utente c'è nella mia lista

for (var i = 0; i < array_email.length; i++) {

  if (email == array_email[i]) {

    flag = true;

  }
}
if (flag) {
  console.log("la tua email c'è nel elenco");
}else {
  console.log("la tua email non c'è nel elenco");
}
