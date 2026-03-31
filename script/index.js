nav = document.querySelector('.nav')
btn = document.querySelector('.btn')
hero = document.querySelector('.hero')
content = document.querySelector('.content')
body = document.querySelector('body')

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (scrollY > 500) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})
changeMode(){
    btn.addEventListener('click', () => {
    hero.classList.add('active')
    nav.classList.add('active2')
    btn.classList.add('active')
    content.classList.add('active')
    body.style.background = '#ecbfff';
    nav.classList.add('active3')
    })
}
