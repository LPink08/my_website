nav = document.querySelector('.nav')
btn = document.querySelector('.btn')
hero = document.querySelector('.hero')
content = document.querySelector('.content')
body = document.querySelector('body')

changeMode(){
    btn.addEventListener('click', () => {
    hero.classList.add('active')
    // nav.classList.add('active2')
    btn.classList.add('active')
    content.classList.add('active')
    body.style.background = '#ecbfff';
    // nav.classList.add('active3')
    })
}

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (changeMode()){
        if (scrollY > 500){
            nav.classList.add('active3')
        }
        else {
            nav.classList.remove('active3')
            nav.classList.add('active2')
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
