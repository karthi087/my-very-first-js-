let num1=5
let num2=5

document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

let sumEl=document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent="sum:" + result
}

function sub() {
    let result = num1 - num2
    sumEl.textContent="sum:" + result
}

function multi() {
    let result = num1 * num2
    sumEl.textContent="sum:" + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent="sum:" + result
}