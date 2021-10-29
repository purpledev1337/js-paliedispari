/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. */
let userBet = prompt("Scegli: pari o dispari?");

if (userBet == "pari" || userBet == "dispari") {
    console.log("L'utente dice che esce:", userBet);
} else {
    alert("Puoi scegliere solo tra: 'pari' e 'dispari'"), location.reload();
}

let userNum = parseInt(prompt("Inserisci un numero tra 1 e 5"));

/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). */
function randomNum(max) {
    let randomNum = Math.floor(Math.random() * max) + 1;
    return randomNum;
}

let compNum = randomNum(5);
console.log("Il numero del computer è: ", compNum);

/* Sommiamo i due numeri */

let addictionNum = userNum + compNum;
console.log("La somma dei due numeri è:", addictionNum);

/* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) */

function isEven(num) {
    let result = false;
    if (num % 2 == 0) {
    result = true;
    } else {
    result = false;
    }
    return result;
}

const addictionIsEven = isEven(addictionNum);
console.log("Il risultato finale è pari?", addictionIsEven)

if (!addictionIsEven) {
    finalResult = "dispari";
} else {
    finalResult = "pari";
}

/* Dichiariamo chi ha vinto. */

if (userBet == finalResult) {
  console.log("Hai vinto!")
} else {
  console.log("Hai perso!")
}