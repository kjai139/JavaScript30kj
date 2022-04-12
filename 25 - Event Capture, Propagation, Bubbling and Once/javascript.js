const divs = document.querySelectorAll('div')
console.log(divs)

divs.forEach((div) => {
    div.addEventListener('click', (e) => {
        console.log(div)
        e.stopPropagation()
    }, {capture: false, once: true})
})