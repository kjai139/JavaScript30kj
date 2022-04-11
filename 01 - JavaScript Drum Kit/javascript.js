keys = document.querySelectorAll('.key')
console.log(keys)



document.addEventListener('keypress', event => {
    if (event.key === 'a'){
        let aKey = document.querySelector('[data-key="65"]')
        aKey.classList.add('playing')
        let audio = new Audio('sounds/clap.wav')
        audio.play()
        console.log(event.propertyName)
        aKey.addEventListener('transitionend', () =>{
            aKey.setAttribute('class', 'key')
        })
    } else if (event.key ==='s'){
        let sKey = document.querySelector('[data-key="83"]')
        sKey.classList.add('playing')
        let audio = new Audio('sounds/hihat.wav')
        audio.play()
        document.addEventListener('transitionend', () =>{
            sKey.setAttribute('class', 'key')
        })
    } else if (event.key ==='d'){
        let dKey = document.querySelector('[data-key="68"]')
        dKey.classList.add('playing')
        let audio = new Audio('sounds/kick.wav')
        audio.play()
        document.addEventListener('transitionend', () => {
            dKey.setAttribute('class', 'key')
        })
    } else if (event.key ==='f') {
        let fKey = document.querySelector('[data-key="70"')
        fKey.classList.add('playing')
        let audio = new Audio('sounds/openhat.wav')
        audio.play()
        document.addEventListener('transitionend', () => {
            fKey.setAttribute('class', 'key')
        })
    } else if (event.key ==='g') {
        let gKey = document.querySelector('[data-key="71"')
        gKey.classList.add('playing')
        let audio = new Audio('sounds/boom.wav')
        audio.play()
        document.addEventListener('transitionend', () => {
            gKey.setAttribute('class', 'key')
        })
    } else if (event.key ==='h') {
        let hKey = document.querySelector('[data-key="72"')
        hKey.classList.add('playing')
        let audio = new Audio('sounds/ride.wav')
        audio.play()
        hKey.addEventListener('transitionend', () => {
            hKey.setAttribute('class', 'key')
        })
    } else if (event.key ==='j') {
        let jKey = document.querySelector('[data-key="74"')
        jKey.classList.add('playing')
        let audio = new Audio('sounds/snare.wav')
        audio.play()
        document.addEventListener('transitionend', () => {
            jKey.setAttribute('class', 'key')
        })
    } else if (event.key ==='k') {
        let kKey = document.querySelector('[data-key="75"')
        kKey.classList.add('playing')
        let audio = new Audio('sounds/tom.wav')
        audio.play()
        document.addEventListener('transitionend', () => {
            kKey.setAttribute('class', 'key')
        })
    } else if (event.key ==='l') {
        let lKey = document.querySelector('[data-key="76"')
        lKey.classList.add('playing')
        let audio = new Audio('sounds/tink.wav')
        audio.play()
        document.addEventListener('transitionend', () => {
            lKey.setAttribute('class', 'key')
        })
    }
})