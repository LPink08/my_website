clickBox = document.querySelector('.click')
//spinBox = document.querySelector('.spin')
hoverBox = document.querySelector('.hover')
moveBox = document.querySelector('.move')
//dblclickBox = document.querySelector('.dblclick')

colors = ['blue', 'green', 'purple', 'red']
index = 0

clickBox.addEventListener('click', () => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0
    }
    clickBox.style.color = 'white'
})

//spinBox.addEventListener('click', () => {
    //spinBox.classList.toggle('start')
//})

hoverBox.addEventListener('mouseover', () => {
    hoverBox.innerHTML = "Don't hover over me!"
})

hoverBox.addEventListener('mouseout', () => {
    hoverBox.innerHTML = "Hover over me!"
})

let positionY = 0;
let positionX = 0;

document.addEventListener('keyup', (event) => {
    console.log(event.key)

    if (event.key == 'ArrowDown') {
        positionY = positionY + 10
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY - 10
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 10
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 10
    }
    moveBox.style.top = `${positionY}px`
    moveBox.style.right = `${positionX}px`
})

