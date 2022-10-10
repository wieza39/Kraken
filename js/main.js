const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20;

function increaseText() {
    fontSize+=5
    p.style.fontSize = fontSize + 'px'
}

function decreaseText() {
    fontSize-=5
    p.style.fontSize = fontSize + 'px'
}

function colorChange() {
    p.style.color = 'gold'
}

sizeUp.addEventListener('click', increaseText)
sizeDown.addEventListener('click', decreaseText)
color.addEventListener('click', colorChange)