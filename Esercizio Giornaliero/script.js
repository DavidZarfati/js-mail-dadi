let emailAccessoConsentito = ["david@gmail.com", "olga@libero.it", "loris@outlook.org", "samuel@hotmail.en"] //Lista email autorizzate
let emailDaVerificare = prompt("Inserisci la mail con la quale ti sei registrato") //inserisci la mail con la quale vuoi accedere
let emailMinuscolo = emailDaVerificare.toLowerCase() //passo in minuscolo per poter controllare con quelle salvate in memoria(che io ho salvato in minuscolo per comodita)
let emailVerificata = 0 //inizializza a zero la variabile che decidera se l'accesso verra negato o confermato
for (let i = 0; i < emailAccessoConsentito.length - 1; i++) { //ciclo che scannerizza se la mail che ho corrisponde a una mail all'interno del mio array
    if (emailMinuscolo === emailAccessoConsentito[i]) { //uso la condizione di identita per verificare che la mia mail sia uguale a una mail all'interno di quelle autorizzate
        emailVerificata = 1
        break //codice per uscire dal for una volta autorizzata la mail
    }
}
if (emailVerificata === 1) {
    console.log("Accesso Garantito")//Stampa che viene garantito l'accesso quando è stata trovata la mail in array
}
else if (emailVerificata === 0) {
    console.log("Accesso negato")//Stampa che l'accesso è negato quando non viene trovata la mail tra quelle autorizzate
}


//////////////////////////RICORDA DI TOGLIERE IL COMMENTO DAL PROMPT RIGA 2
// //////////////////////DELLA MAIL QUANDO FINISCI ESERCIZIO DADI