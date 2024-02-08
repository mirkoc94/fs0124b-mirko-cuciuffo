//elementi generali

const caselleElement = document.querySelector('#caselle')
const button = document.querySelector('#btn')
const randomElement = document.querySelector('.random')


//bottone

button.addEventListener('click', () => {
    selectNumber()
})

function selectNumber() {
    randomElement.innerHTML = Math.floor(Math.random() * 90) + 1
}


//caselle numeri

for(let i = 1;i <= 90; i++ ){
    const numbBox = document.createElement('div')
    numbBox.classList.add('number')
    numbBox.innerText = i

    caselleElement.append(numbBox)
    }