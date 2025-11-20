let h1 = document.querySelector('h1')
h1.innerHTML = "world"; // changes html text
h1.style.color = "yellow" // this changes style of your tag like h1 change in yellow color

console.log(h1);


// eventlisteners


let h2 = document.querySelector('h2')
let btn = document.querySelector('button')

var a = 0 ;
btn.addEventListener('click',() => {
    a++;
    console.log(a);
    h2.innerHTML = a
})


btn.addEventListener('click',() => {
    a++;
    console.log(a);
    h2.innerHTML = a
})