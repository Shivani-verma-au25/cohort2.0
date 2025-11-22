let pianoBtn = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',"h","i","j","k","l"]
let conatiner = document.querySelector('.piano-buttons');

conatiner.innerHTML = pianoBtn
.map(letter => `<div class="p-btn" data-key="${letter}">${letter}</div>`).join("");


document.querySelectorAll('.p-btn').forEach((btn ,indx) => (
    btn.addEventListener('click' ,() =>{
        let letter = btn.getAttribute('data-key');
        document.querySelector('.top-container h2').innerHTML = letter
        let soundNo = indx + 1
        // creating audio file
        let audio = new Audio(`./sounds/${soundNo}.mp3`);
        audio.play()
    })
))


// auto play


let isPlaying = false;
let autoTune;
let img;


document.querySelector('.container button').addEventListener('click' ,() => {
    if (!isPlaying) {
        
        isPlaying = true;

        document.querySelector('.container button').textContent = 'Stop Sound'
        document.querySelector('.top-container h2').style.display = 'none';

        // creating gif
        img = document.createElement('img');
        img.src = `./sounds/music.gif`;
        img.style.width = '700px'
        img.style.height = '200px';

        document.querySelector('.top-container').appendChild(img);

        // play audio
        autoTune = new Audio(`./sounds/fullsound.mp3`);
        autoTune.play();

    }else{
        isPlaying = false;
        document.querySelector('.container button').textContent = 'Play Sound';

        document.querySelector('.top-container h2').style.display = 'block';

        // remove gif
        if (img) {
            img.remove();
        }

        // stop music
        if (autoTune) {
            autoTune.pause();
            autoTune.currentTime = 0; // reset audio 
        }


    }
})

