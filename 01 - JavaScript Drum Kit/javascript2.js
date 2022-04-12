

let playSound = (inp) => {
    const key = document.querySelector(`div[data-key="${inp.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${inp.keyCode}"]`);
    console.log(inp)
    console.log(key, audio)
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play()
    key.addEventListener('transitionend', () => {
        key.setAttribute('class', 'key')
    } )


}

document.addEventListener('keydown', playSound)
