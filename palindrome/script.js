// Palidroma:
// 1.  Chiedere all’utente di inserire una parola
// const userWord = prompt("Inserisci una parola");
const inseredWord = document.querySelector("input");

const clickBtn = document.getElementById("bottone");

clickBtn.addEventListener("click",
function() {
    let userWord = inseredWord.value;
    let isPalindrome = palindrome(userWord);
    
    console.log(`La parola scelta dall'utente è :"${userWord}"`);
    document.querySelector(".lista_parole").innerHTML += (`<li>${userWord}</li>`);
    // 3.2 Stampo un output se il risutato è vero e l'altro output se è falso
    if (!isPalindrome) {
        console.log(`La parola "${userWord}" non è palindroma!`);
        document.querySelector(".parola").innerHTML = (`La parola "${userWord}" non è palindroma!`);
    } else {
        console.log(`La parola "${userWord}" è palindroma!`);
        document.querySelector(".parola").innerHTML = (`La parola "${userWord}" è palindroma!`)
    }
}
);

// 2.  Creare una funzione per capire se la parola inserita è palindroma.
function palindrome(wordToCheck) {
        // 2.1 All'interno creo un ciclo for che pesca i caratteri della parola fino ad arrivare alla metà della sua lunghezza
    for (var i = 0; i < wordToCheck.length / 2; i++) {
        // 2.2 Metto a confronto il carattere dell'interazione con il rispettivo in fondo alla parola
        if (wordToCheck[i] !== wordToCheck[wordToCheck.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// 3.  Dare l’output relativo.
// 3.1 Assegno una variabile al risultato della funzione applicata alla parole dell'utente