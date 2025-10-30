//////////COMMENTO ESERCIZI FINITI PER ALLEGGIRE LO SVOLGIMENTO DEL LIVE SERVER///////////////
// RICORDA ctrl k u per togliere le linee dei commenti tutti insieme

// let numero = parseInt(prompt("Dammi un numero"))
// if (numero % 2 === 0) {
//     console.log(numero)
// }
// else {
//     console.log(numero + 1)
// }

// let parola1 = prompt("inserisci una parola")
// let parola2 = prompt("inserisci un'altra parola")
// if (parola1.length > parola2.length) {
//     console.log(parola2, parola1)
// }
// else if (parola1.length < parola2.length) {
//     console.log(parola1, parola2)
// }
// else if (parola1.length === parola2.length) {
//     console.log("Le tue parole hanno la stessa lunghezza")
// }


let numero = 1234
let somma = 0
let cifreStringa = numero.toString()
// console.log(cifreStringa)
let cifreSingole = cifreStringa.split("")
// console.log(cifreSingole);
for (let i = 0; i < cifreSingole.length; i++) {
    let cifreNumeri = parseInt(cifreSingole[i]);
    somma = somma + cifreNumeri;
}
console.log(somma);
