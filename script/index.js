nav = document.querySelector('.nav')
btn = document.querySelector('.btn')
hero = document.querySelector('.hero')

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (scrollY > 500) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})

btn.addEventListener('click', () => {
    hero.style.background-image
})
