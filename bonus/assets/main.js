
alert("ciao sono javascript ecco il gioco dei dadi prova a vincere");
//Generiamo un numero random 1 a 6 computer
function genera(){
    // dado_computer = dado_compute;

   var dado_computer = Math.floor(Math.random() * 6) + 1 ;
   console.log(dado_computer);
   //Generiamo un numero random 1 a 6 utente
   // var dado_utente = dado_utente.value;
   var dado_utente = Math.floor(Math.random() * 6) + 1 ;
   console.log(dado_utente);


  //Verifica chi vince
  if (dado_computer > dado_utente) {
    document.getElementById('dado').innerHTML="il vincitore è il computer " + " " + dado_computer + " " + "invece tu hai perso con"+ " " + dado_utente;
  }else if (dado_computer == dado_utente) {
    document.getElementById('dado').innerHTML="il vincitore non è nessuno premi di nuovo il pulsante";
  }else{
    document.getElementById('dado').innerHTML="il vincitore sei tu con" + " " + dado_utente + " " + "invece il computer ha perso con"+ " " + dado_computer;
  }

}
