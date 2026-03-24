const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const start_btn = document.getElementById('start-btn')
const timeE1 = document.getElementById('time')
const scoreE1 = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const alt = img.getAttribute('alt')
        const src = img.getAttribute('src')
        screens[1].classList.add('up')
        selected_insect = {src, alt}
        setTimeout(createInsect, 1000)
        startGame()
    })
})

// function startGame() {
//     setTimeout(createInsect, 1000)
//     setInterval(increaseTime, 1000)
// }

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style = "transform: rotate(${Math.random() * 360}deg)" />`
    game_container.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x, y}
}






// function catchInsect(insect) {
//     increaseScore()
//     insect.classList.add('caught')
//     set timeout ( () => insect.reomve(), 2000)
//     addInsects()
// }

// function addInsects() {
//     set timeout(createInsect, 1000)
//     set timeout(createInsect, 1500)
// }

// function increaseScore() {
//     score = score + 1
//     scoreE1.innerHTML = `Score: ${score}`
// }

// function increaseTime() {
//     seconds = seconds + 1
//     m = Math.floor(seconds/60)
//     s = seconds % 60
//     if (m < 10){
//         m = `0${m}`
//     }
//     if (s< 10){
//         s = `0${s}`
//     }

//     timeE1.inerHTML = `Time: ${m}:${s}`

// }
