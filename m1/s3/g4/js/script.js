//elementi generali

const tabelloneElement = document.querySelector('#tabellone')
const button = document.querySelector('#btn')
const randomElement = document.querySelector('.random')


//bottone

button.addEventListener('click', () => selectNumber())


//caselle numeri

let n = 90
let arrNumb = []

for(let i = 1; i <= n; i++ ) {
    const numbBox = document.createElement('div')
    numbBox.classList.add('number')
    numbBox.innerText = i
    
    arrNumb[i] = numbBox
    
    tabelloneElement.append(numbBox)
}

let sacchetto = [...arrNumb]

function evidenzia() {
    let estratto = selectNumber()
    sacchetto.splice(estratto, 1)
    arrNumb[estratto].classList.add('selectedNumber')
}

function selectNumber() {
    randomElement.innerHTML = Math.floor(Math.random() * 90) + 1
}