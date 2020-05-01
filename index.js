let body = document.getElementById('body')
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let output = document.querySelector('h3')
let randomButton = document.getElementById('randomButton')


output.textContent = `background: linear-gradient(to right, ${color1.value}, ${color2.value});`

// Generate Random Color
function setRandomColor(){
    let randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    let randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`
    output.textContent = `background: linear-gradient(to right, ${randomColor1}, ${randomColor2});`

}


function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    
    output.textContent = `background: linear-gradient(to right, ${color1.value}, ${color2.value});`
}

color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
randomButton.addEventListener('click', setRandomColor)

