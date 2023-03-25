/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const ratios = [3.281, 0.264, 2.204]
const convertBtn = document.getElementById("convert-btn")
const inputBox = document.getElementById("input-num")
const lengthText = document.getElementById("text1");
const volumeText = document.getElementById("text2");
const massText = document.getElementById("text3");


convertBtn.addEventListener("click", function() {
    let inputNumber = inputBox.value
    calculateUnit(inputNumber)
    inputNumber = []
})

function calculateUnit(metric) {
    lengthText.textContent = `${metric} meters = ${(metric * ratios[0]).toFixed(3)} feet | ${metric} feet = ${(metric/ratios[0]).toFixed(3)} meters`
    volumeText.textContent = `${metric} litres = ${(metric * ratios[1]).toFixed(3)} gallons | ${metric} gallons = ${(metric/ratios[1]).toFixed(3)} litres`
    massText.textContent = `${metric} kilos = ${(metric * ratios[2]).toFixed(3)} pounds | ${metric} pounds = ${(metric/ratios[2]).toFixed(3)} kilos`
}