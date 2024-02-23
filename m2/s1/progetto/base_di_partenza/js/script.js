//COLORE HEADER

let welcome = document.querySelector('.welcome')
console.dir(welcome)

window.addEventListener('scroll',function(){
    let header = document.querySelector('header')
    let button = document.querySelector('.nav-btn')
    let top = window.scrollY;
    
    if (top > 260) {
        header.classList.add('white');
        button.classList.add('green')
    } else {
        header.classList.remove('white');
        button.classList.remove('green');
    }
});

window.addEventListener('scroll',function(){
    let rightMain = document.querySelector('.right-main')
    let top = window.scrollY;
    
    if (top > 60) {
        rightMain.classList.add('sticky');
    } else {
        rightMain.classList.remove('sticky');
    }
});