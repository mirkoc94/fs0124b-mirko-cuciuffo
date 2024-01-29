/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quando ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype sono: numero, stringa, booleano. I datatype vanno a descrivere e quindi ad anticipare 
  quello che sara' il valore assegnato alla variabile. Numero e Stringa sono piu' immediati: per Numero il valore 
  sara' un numero, per Stringa sara' un normale testo o una parola. Anche se, essendo JS a tipizzazione debole,
  l'effettivo valore della variabile sara' definito dalla sintassi con la quale verra' scritto. Per Booleano,
  invece, il valore, che potra' essere solo TRUE o FALSE, dipendera' dal rapporto (Es: uguaglianza, maggiore
  o minore, ecc) che c'e' tra piu' elementi, e sara' visibile solo sulla console del browser. */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Mirko'
console.log (myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12
let b = 20
let c = a + b
console.log (c)
console.log (a + b)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Cuciuffo'
console.log (myName)
/*
const myName = 'Cuciuffo'
console.log (myName)
Essendo il token myName gia' assegnato ad un'altra variabile, alla variabile const non puo' essere riassegnato lo
   stesso token, infatti esso produce un errore nella console identificando myName come gia' dichiarato*/

/* ESERCIZIO 6
 Esegui una sottrazione tra il numero 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let d = 4
console.log ( 4 - x )

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
console.log (name1 == name2)
console.log (name1 == name2.toLowerCase())
