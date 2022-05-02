const container = document.getElementById("container")
const settings = document.getElementById("settings")

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div')
        container.appendChild(cell).className = "grid-item"
    }
}

const btn = document.createElement('button')

settings.appendChild(btn)

btn.addEventListener('click', function() {
    makeGrid(30, 30)
})

window.onload = () => {
    makeGrid(16, 16)
}