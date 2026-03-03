clickBox = document.querySelector('click')
spinBox = document.querySelector('click')

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

