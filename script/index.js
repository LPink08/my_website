nav = document.querySelector('.nav')
btn = document.querySelector('.btn')
hero = document.querySelector('.hero')
content = document.querySelector('.content')
body = document.querySelector('body')

function changeMode() {
    btn.addEventListener('click', () => {
    hero.classList.add('mode')
    nav.classList.add('mode')
    btn.classList.add('mode')
    content.classList.add('mode')
    body.style.background = '#ecbfff';
    // nav.classList.add('mode2')
    })
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
    else {
        if (scrollY > 500) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
})
