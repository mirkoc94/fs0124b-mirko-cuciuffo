/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let petsOrdinato = pets.sort()
console.log(petsOrdinato);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let petsInvertito = pets.reverse()
for (let i = 0; i < petsInvertito.length; i++) {
  console.log(petsInvertito[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let primoPets = pets.shift()
console.log(primoPets)
let finalPets = pets.push(primoPets)
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let index = 0; index < cars.length; index++) {
  cars[index].licensePlate= "AB 123 CD"
}
console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let nObj = {
    brand: 'Opel',
    model: 'Astra',
    color: 'black',
    trims: ['opaque', 'sport', 'active'],
    licensePlate: "AB 123 CD"

}
cars.push(nObj)
console.log(cars);
for (let index = 0; index < cars.length; index++) {
  cars[index].trims.pop()
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let j = 0; j < cars.length; j++) {
  console.log(cars[j])
  for (let i = 0; i < cars[j].trims.length; i++) {                  //rivedere
    let firstTrims = cars[j].trims[0]
    justTrims.push(firstTrims)
  }
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.indexOf("b", 0)) {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

i = 0
while (i < numericArray.indexOf(32)) {
  console.log(numericArray[i]);
  i++
}




/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd']
let nuovoArray = ['g', 'n', 'u', 'z', 'd']
  for (let i = 0; i < charactersArray.length; i++) {
    
  switch (charactersArray[i]) {
    case "a":
      nuovoArray[i] = (1)
    break;

    case "b":
      nuovoArray[i] = (2)
    break;

    case "c":
      nuovoArray[i] = (3)
    break;

    case "d":
      nuovoArray[i] = (4)
    break;

    case "3":
      nuovoArray[i] = (5)
    break;

    case "f":
      nuovoArray[i] = (16)
    break;

    case "g":
      nuovoArray[i] = (7)
    break;

    case "h":
      nuovoArray[i] = (8)
    break;

    case "i":
      nuovoArray[i] = (9)
    break;

    case "l":
      nuovoArray[i] = (10)
    break;

    case "m":
      nuovoArray[i] = (11)
    break;

    case "n":
      nuovoArray[i] = (12)
    break;

    case "o":
      nuovoArray[i] = (13)
    break;

    case "p":
      nuovoArray[i] = (14)
    break;

    case "q":
      nuovoArray[i] = (15)
    break;

    case "r":
      nuovoArray[i] = (16)
    break;

    case "s":
      nuovoArray[i] = (17)
    break;

    case "t":
      nuovoArray[i] = (18)
    break;

    case "u":
      nuovoArray[i] = (19)
    break;

    case "v":
      nuovoArray[i] = (20)
    break;

    case "z":
      nuovoArray[i] = (21)
    break;

    default:
      nuovoArray[i] = "Non e' presente nell'alfabeto italiano"

    }
  }
  console.log(nuovoArray)

