const container = document.getElementById("container")
const settings = document.getElementById("settings")


function makeGrid(rows, cols) {
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    

    for (i = 0; i < (rows * cols); i++) {
        const grids = document.createElement('div')
        container.appendChild(grids).className = "grid-item"

        const color = {
            hover: function(event) {
                event.target.style.backgroundColor = "black"
            }
        }
        grids.addEventListener("mouseover", color.hover, false)
    }
}




const btnSmall = document.createElement('button')
btnSmall.textContent = "Small (8x8)"
settings.appendChild(btnSmall).className = "btn-small"

btnSmall.addEventListener('click', function() {
    reset()
    makeGrid(8, 8)
})

const btnDefault = document.createElement('button')
btnDefault.textContent = "Default (16x16)"
settings.appendChild(btnDefault).className = "btn-default"

btnDefault.addEventListener('click', function() {
    reset()
    makeGrid(16, 16)
})

const btnBig = document.createElement('button')
btnBig.textContent = "Big (32x32)"
settings.appendChild(btnBig).className = "btn-big"

btnBig.addEventListener('click', function() {
    reset()
    makeGrid(32, 32)
})

function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

window.onload = () => {
    makeGrid(16, 16)
}