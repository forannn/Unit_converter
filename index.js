document.getElementById("convert").addEventListener("click", function() {
    document.getElementById("render1").textContent = `${number.value} meters = ${(number.value * 3.281).toFixed(3)} feet | ${number.value} feet = ${(0.304 * number.value).toFixed(3)} meters`

    document.getElementById("render2").textContent = `${number.value} liters = ${(number.value * 0.264).toFixed(3)} gallons | ${number.value} gallons = ${(3.787 * number.value).toFixed(3)} liters`

    document.getElementById("number").textContent = `${number.value} kilos = ${(number.value * 2.204).toFixed(3)} pounds | ${number.value} pounds = ${(0.453 * number.value).toFixed(3)} kilos`

})