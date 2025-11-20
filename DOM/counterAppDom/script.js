let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');
let h1 = document.querySelector('span')



let a = 0;
inc.addEventListener('click',() =>{
    a++;
    console.log(a);
    h1.innerHTML = a;
})

dec.addEventListener('click',() =>{
    if (a > 0) {
        a--; 
    }
    h1.innerHTML = a;
})