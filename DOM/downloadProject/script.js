
let btn = document.querySelector('button');
let inner  = document.querySelector('.inner');
let h1  = document.querySelector('h1');
let p = document.querySelector('.card > p')
let card = document.querySelector('.card')
let cant = document.querySelector('.cant');
let count = 0;



let arr = ['🎉','🎊','🎉','🎊','🎉','🎊','🎉','🎊','🎉','🎊']

btn.addEventListener('click' , () => {
    btn.style.pointerEvents = 'none';
    btn.innerHTML = "Downloading...";
    btn.style.opacity = 0.5

    const ranNum = 50 + Math.floor(Math.random()*50);
    
    let setInt = setInterval(()=>{
        count++;
        h1.innerHTML = `${count}%`;
        inner.style.width= `${count}%`
    },ranNum);

    setTimeout(()=>{
        clearInterval(setInt);
        btn.innerHTML = "Download Done";
        p.innerHTML = 'You can see your file on downloads!';
        btn.style.pointerEvents = 'none'
        celeration()
    },ranNum*100)   
})




//  celeration


const celeration =() => {
    let int = setInterval(() => {
    let h3 = document.createElement('h3');
        let X = (Math.random() * 200) - 100;  // -100px to +100px
        let Y = (Math.random() * 200) - 100;
        let rot = Math.random() * 360;
        let scl = 0.5 + Math.random() * 1.2;  // 0.5x to 1.7x scale
        let a = Math.floor(Math.random() * arr.length);

            h3.innerHTML = arr[a];
            h3.style.position = 'absolute';
            h3.style.transform = "translate(-50%, -50%)";
            h3.style.left = `${X}%`;
            h3.style.top = `${Y}%`;
            h3.style.rotate = `${rot}deg`;
            h3.style.scale = scl;
            h3.style.opacity = "1";
        h3.style.transition = "all 0.8s ease-out";

        cant.appendChild(h3)

        // force reflow for smooth animation
    setTimeout(() => {
      h3.style.transform = `translate(${X}px, ${Y}px) rotate(${rot}deg) scale(${scl})`;
      h3.style.opacity = "0";
    }, 20);

    // remove after animation
    setTimeout(() => {
      h3.remove();
    }, 900);

        setTimeout(()=>{
            clearInterval(int)
        },100)
    },10)
}

