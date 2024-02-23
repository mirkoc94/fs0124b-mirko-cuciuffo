//COLORE HEADER

let welcome = document.querySelector('.welcome')
console.dir(welcome)

window.addEventListener('scroll',function(){
    let header = document.querySelector('header')
    let top = window.scrollY;
    
    if (top > 260) {
        header.classList.add('color-change');
    } else {
        header.classList.remove('color-change');
    }
});