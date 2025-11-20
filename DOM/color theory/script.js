let container = document.querySelector('.container')
let btm = document.querySelector('button')

btm.addEventListener('click',() =>{
    let ranColor1 = Math.floor(Math.random()*256);
    let ranColor2 = Math.floor(Math.random()*256);
    let ranColor3 = Math.floor(Math.random()*256);
    
    container.style.backgroundColor = `rgb(${ranColor1},${ranColor2},${ranColor3},${Math.random()})`;

})