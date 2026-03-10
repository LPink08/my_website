box = document.querySelector('.box')

colors = ['blue', 'green', 'purple', 'red', 'pink', 'orange', 'yellow']
let index = 0

box.addEventListener('click', () => {
    style.body.background = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0
    }
})
