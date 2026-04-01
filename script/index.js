nav = document.querySelector('.nav')
btn = document.querySelector('.btn')
hero = document.querySelector('.hero')
content = document.querySelector('.content')
body = document.querySelector('body')
// figure out the functions and how to use the if statements to control scrollY
const list = ['pink', 'purple']
index = 0
btn.addEventListener('click', () => {
    index = (index + 1) % 2
    if (index == 1){
        changeMode()
    }
    else {
        fixMode()
    }
})

function changeMode() {
    hero.classList.add('mode')
    nav.classList.add('mode')
    btn.classList.add('mode')
    content.classList.add('mode')
    body.style.background = '#ecbfff';
}

function fixMode() {
    hero.classList.remove('mode')
    nav.classList.remove('mode')
    nav.classList.add('active')
    btn.classList.remove('mode')
    content.classList.remove('mode')
    body.style.background = 'LavenderBlush';
}

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (changeMode()){
        if (scrollY > 500){
            nav.classList.add('mode2')
            nav.classList.remove('mode')
        }
        else {
            nav.classList.remove('mode2')
            nav.classList.add('mode')
        }
    }
    else if (fixMode()){
        if (scrollY > 500) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
})



// btn.addEventListener('click', () => {
//     hero.classList.add('mode')
//     nav.classList.add('mode')
//     btn.classList.add('mode')
//     content.classList.add('mode')
//     body.style.background = '#ecbfff';
//     // nav.classList.add('mode2')
//     })


// btn.addEventListener('click', () => {
//     hero.classList.remove('mode')
//     nav.classList.remove('mode')
//     nav.classList.add('active')
//     btn.classList.remove('mode')
//     content.classList.remove('mode')
//     body.style.background = 'LavenderBlush';
//     // nav.classList.remove('mode2')
//     })
