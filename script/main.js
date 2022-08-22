const canvas = document.querySelector("#main")
const clearButton = document.querySelector("#clear")
const colors = [...document.querySelectorAll(".colorItem")]
const shapes = [...document.querySelectorAll(".shapeItem")]
const sizeSlider = document.querySelector("#shapeSizeInput")
const sizeOutput = document.querySelector("#shapeSizeOutput")

let colorValue = "black"
let shape = "square"
let size = 10
let half = 5

const paint = function (ev) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel")
    if (shape == "circle") pixel.classList.add("circle")
    pixel.style.left = `${ev.clientX - half}px`
    pixel.style.top = `${ev.clientY - half}px`
    pixel.style.height = `${size}px`
    pixel.style.width = `${size}px`
    pixel.style.backgroundColor = colorValue
    canvas.appendChild(pixel)
    canvas.onmousemove = paint
}

const clear = function() {
    canvas.innerHTML = ""
}

colors.forEach(e => { e.onclick = e => { colorValue = e.currentTarget.value } })
shapes.forEach(e => { e.oninput = e => { shape = e.currentTarget.value; console.log(e.currentTarget, shape) } }) 
sizeSlider.oninput = () => {
    size = sizeSlider.value
    half = size/2 | 0
    sizeOutput.textContent = size
}
canvas.onmousedown = paint
canvas.onmouseup = () => { canvas.onmousemove = null }
clearButton.onclick = clear