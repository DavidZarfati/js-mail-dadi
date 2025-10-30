let emailAccessoConsentito = ["david@gmail.com", "olga@libero.it", "loris@outlook.org", "samuel@hotmail.en"] //Lista email autorizzate
let emailDaVerificare = prompt("Inserisci la mail con la quale ti sei registrato")
let emailMinuscolo = emailDaVerificare.toLowerCase()
let emailVerificata = 0
for (let i = 0; i < emailAccessoConsentito.length - 1; i++) {
    if (emailMinuscolo === emailAccessoConsentito[i]) {
        emailVerificata = 1
        break
    }
}
if (emailVerificata === 1) {
    console.log("Accesso Garantito")
}
else if (emailVerificata === 0) {
    console.log("Accesso negato")
}