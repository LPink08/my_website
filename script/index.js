nav = document.querySelector('.nav')
btn = document.querySelector('.btn')

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
    btn.classList.add('active')
})
