panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
    })
})

for (let i = 0; i < 5; i = i + 1) {
    panels[i].addEventListener('click', () => {
        removeActiveFromAllPanels()
        panels[i].classList.add('active')
    })
}


function removeActiveFromAllPanels() {
    for (let i = 0l i < 5; i = i + 1){
        panels[i].classList.remove('active')
    }
}
