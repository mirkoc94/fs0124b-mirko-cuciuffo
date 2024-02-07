// BOTTONE

let bottone = document.getElementById("bottone")

let task = bottone.addEventListener('click', function (e) {
    let div = e.createElement('div')
    let toDo = document.getElementById('myInput').value
    let valoreTesto = document.div.innerText(toDo)
    div.appendChild(valoreTesto)
})