let p = document.querySelector('p');
const text = p.innerText;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

let iteration = 0;
const ranText = () => {
    const str = text.split('').map((char ,ind) =>{
         if (ind < iteration) {
        return char;
    }
        return characters.split('')[Math.floor(Math.random() *53)]
    }).join('')

    p.innerText = str;
    iteration += 0.30
}


let int = setInterval(ranText ,40);

clearInterval(() => int)