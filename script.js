let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')
let resultado = document.querySelector('span')

function somar() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}
function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}
function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}
function dividir() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}