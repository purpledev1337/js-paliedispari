// Palidroma:
// 1.  Chiedere all’utente di inserire una parola
const userWord = prompt("Inserisci una parola");
console.log("La parola scelta dall'utente è: ", userWord);

// 2.  Creare una funzione per capire se la parola inserita è palindroma.
function palindrome(wordToCheck) {
        // 2.1 All'interno creo un ciclo for che pesca i caratteri della parola partendo dalla fine
    for (var i = 0; i < wordToCheck.length / 2; i++) {
        // 2.2 Se i caratteri presi in esame sono diversi ritorno un risultato falso
        if (wordToCheck[i] !== wordToCheck[wordToCheck.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// 3.  Dare l’output relativo.
// 3.1 Assegno una variabile al risultato della funzione applicata alla parole dell'utente
let isPalindrome = palindrome(userWord)

// 3.2 Stampo un output se il risutato è vero e l'altro output se è falso
if (!isPalindrome) {
    console.log(`La parola ${userWord} non è palindroma!`);
} else {
    console.log(`La parola ${userWord} è palindroma!`);
}