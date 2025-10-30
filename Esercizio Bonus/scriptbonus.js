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


// let numero = 1234
// let somma = 0
// let cifreStringa = numero.toString()
// // console.log(cifreStringa)
// let cifreSingole = cifreStringa.split("")
// // console.log(cifreSingole);
// for (let i = 0; i < cifreSingole.length; i++) {
//     let cifreNumeri = parseInt(cifreSingole[i]);
//     somma = somma + cifreNumeri;
// }
// console.log(somma);

// let limiteNumeri = prompt("Inserisci il numero fino al quale vuoi sapere il cubo")
// for (let i = 1; i <= limiteNumeri; i++) {
//     console.log(i * i * i)
// }

// const nomi = [
//     "Albert",
//     "Leonardo",
//     "Marilyn",
//     "Michael",
//     "Serena",
//     "Elon",
//     "Frida",
//     "Steve",
//     "Beyoncé",
//     "David"
// ];

// const cognomi = [
//     "Einstein",
//     "da Vinci",
//     "Monroe",
//     "Jackson",
//     "Williams",
//     "Musk",
//     "Kahlo",
//     "Jobs",
//     "Knowles",
//     "Beckham"
// ];
// let invitati = []
// for (i = 0; i < 5; i++) {
//     let indiceNome = parseInt(Math.random() * nomi.length)
//     let nomeSingolo = nomi[indiceNome]
//     nomi.splice(indiceNome, 1)
//     let indiceCognome = parseInt(Math.random() * cognomi.length)
//     let cognomeSingolo = cognomi[indiceCognome]
//     cognomi.splice(indiceCognome, 1)
//     console.log(indiceNome, nomeSingolo, indiceCognome, cognomeSingolo)
// }

let A = [3, 5, 7, 9]
let B = [4, 6, 8, 10, 12, 14]

if (A.length < B.length) {
    for (i = 0; i <= B.length - A.length; i++) {
        A.push("Aggiungi")
    }
    console.log(A, B)
}
else if (A.length > B.length) {
    for (i = 0; i <= A.length - B.length; i++) {
        B.push("Aggiungi")
    }
    console.log(A, B)
}
else if (A.length == B.length) {
    console.log("i tuoi array hanno la stessa lunghezza")
}


// if (A.length > B.length) {
//     B.push("Aggiungi")
// }
// else if (B.length > A.length) {
//     A.push("Aggiungi")
// }
// else if (B.length === A.length) {
//     console.log("i tuoi array hanno la stessa lunghezza")
// }
// console.log(A, B)