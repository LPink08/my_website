clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
hoverBox = document.querySelector('.hover')
moveBox = document.querySelector('.move')

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

spinBox.addEventListenter('click', () => {
    spinBox.classList.toggle('start')
})

hoverBox.addEventListener('mouseover', () => {
    hoverBox.innerHTML = "Don't hover over me!"
})

hoverBox.addEventListener('mouseout', () => {
    hoverBox.innerHTML = "Hover over me!"
})

//moveBox

