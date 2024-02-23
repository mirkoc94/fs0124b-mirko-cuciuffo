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

window.addEventListener('scroll',function(){
    let rightMain = document.querySelector('.right-main')
    let top = window.scrollY;
    
    if (top > 60) {
        rightMain.classList.add('sticky');
    } else {
        rightMain.classList.remove('sticky');
    }
});