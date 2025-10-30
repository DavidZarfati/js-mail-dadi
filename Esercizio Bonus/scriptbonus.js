//////////COMMENTO ESERCIZI FINITI PER ALLEGGIRE LO SVOLGIMENTO DEL LIVE SERVER///////////////


// let numero = parseInt(prompt("Dammi un numero"))
// if (numero % 2 === 0) {
//     console.log(numero)
// }
// else {
//     console.log(numero + 1)
// }

let parola1 = prompt("inserisci una parola")
let parola2 = prompt("inserisci un'altra parola")
if (parola1.length > parola2.length) {
    console.log(parola2, parola1)
}
else if (parola1.length < parola2.length) {
    console.log(parola1, parola2)
}
else if (parola1.length === parola2.length) {
    console.log("Le tue parole hanno la stessa lunghezza")
}