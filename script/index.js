nav = document.querySelector('.nav')
btn = document.querySelector('.btn')
hero = document.querySelector('.hero')
content = document.querySelector('.content')
body = document.querySelector('body')

const list = ['pink', 'purple']
let index = 0
btn.addEventListener('click', () => {
        index = (index + 1) % 2
        handleScroll()
        if (index == 1){
            changeMode()
        }
        else if (index == 0){
            fixMode()
        }
})

handleScroll()

function handleScroll() {
    if (index == 1){
        window.removeEventListener('scroll', addScrollYPink)
        window.addEventListener('scroll', addScrollYPurple)
    }
    else if (index == 0){
        window.removeEventListener('scroll', addScrollYPurple)
        window.addEventListener('scroll', addScrollYPink)
    }
}

function changeMode() {
    nav.classList.remove('active')
    hero.classList.add('mode')
    nav.classList.add('mode')
    btn.classList.add('mode')
    content.classList.add('mode')
    body.style.background = '#ecbfff'
}

function fixMode() {
    hero.classList.remove('mode')
    nav.classList.remove('mode')
    btn.classList.remove('mode')
    content.classList.remove('mode')
    nav.classList.remove('mode2')
    body.style.background = '#ffd4e6'
}

function addScrollYPurple() {
   console.log(scrollY)
    if (scrollY > 500){
        nav.classList.add('mode2')
        nav.classList.remove('mode')
    }
    else {
        nav.classList.remove('mode2')
        nav.classList.add('mode')
    }
}

function addScrollYPink() {
    console.log(scrollY)
    if (scrollY > 500){
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
}
