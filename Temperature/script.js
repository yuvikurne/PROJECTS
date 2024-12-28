document.getElementById('button').addEventListener('click', function(){
    const inputTemp = (document.getElementById('input').value)
    const inputUnit = document.getElementById('select').value
    const convertToUnit = document.getElementById('selector').value
    const temperatureDisplay = document.getElementById('temperature')
    let convertedTemp;
    if  (inputUnit === 'F') {
        if (convertToUnit === 'Celcius') {
            convertedTemp = (inputTemp - 32) * 5/9;
            temperatureDisplay.innerHTML = `${convertedTemp}<span style="vertical-align: super; font-size: 30px">°C</span>`
        } else {
            convertedTemp = inputTemp;
        }
    }else if (inputUnit === 'C') {
        if (convertToUnit === 'Fahrenheit') {
            convertedTemp = (inputTemp * 9/5) + 32;
            temperatureDisplay.innerHTML = `${convertedTemp}<span style="vertical-align: super; font-size: 30px">°F</span>`
        } else {
            convertedTemp = inputTemp; 
        }
    }
})

document.getElementById('select').addEventListener('change', function() {
    const inputUnit = document.getElementById('select').value;
    const selector = document.getElementById('selector');

    if (inputUnit === 'C') {
        selector.value = 'Fahrenheit';
    } else if (inputUnit === 'F') {
        selector.value = 'Celcius'
    }
});