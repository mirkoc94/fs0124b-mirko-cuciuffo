/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
    return l1 * l2
}
console.log(area(2, 8));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a ,b) {
    if (a == b) {
        return (a + b)*3
    }else {
        return a + b
    }
}
console.log(crazySum(2, 2))
console.log(crazySum(2, 4))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a, b=19) {
    if (a < b) {
        return Math.abs(a - b)
    }else {
        return (a - b)*3
    } 
}
console.log(crazyDiff(3))
console.log(crazyDiff(22))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n>20 && n<=100) || n==400) {
return true
    }else {
        return false
    }
}
console.log(boundary(33));
console.log(boundary(19));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
        return stringa
    }else{
    return "EPICODE" + stringa
    }
}
console.log(epify(" ciao sono mirko"));
console.log(epify("EPICODE sono mirko"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
    if (n%3==0 || n%7==0) {
        return true
    } else {
        return false
    }
}
console.log(check3and7(4));
console.log(check3and7(27));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let stringa = "EPICODE"
function reverseString(stringa) {
    return stringa.split("").reverse().join("");
}
console.log(reverseString(stringa))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


function upperFirst(stringa) {
    let singolePar = stringa.split(" ")
    let arrParole = []
    for (let index = 0; index < singolePar.length; index++) {
        let selectFirst = singolePar[index].charAt(0)
        let firstUp = selectFirst.toUpperCase()
        let restoParola = singolePar[index].slice(1)
        let parolaIntera = firstUp + restoParola
        arrParole.push(parolaIntera)
    }
    console.log(arrParole.join(" "))
}
console.log(upperFirst("ciao sono mirko"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
    return stringa.slice(1, stringa.length - 1)
}
console.log(cutString("ciao sono mirko"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let arrCasuale = []
    for (let index = 0; index < n; index++) {
        arrCasuale.push(Math.floor(Math.random()*10))
    }
    return arrCasuale
}
console.log(giveMeRandom(5));