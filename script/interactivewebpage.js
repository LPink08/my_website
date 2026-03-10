box = document.querySelector('.box')
// body = document.querySelector('body')

console.log(body)

colors = ['blue', 'green', 'purple', 'red', 'pink', 'orange', 'yellow']
let index = 0

box.addEventListener('click', () => {
    document.style.background = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0
    }
})
