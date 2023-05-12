// Get the elements from the HTML code
const inputEl = document.getElementById('input');
const selectEl = document.getElementById('select');
const outputEl = document.getElementById('output');
const convertBtn = document.getElementById('convertBtn');

// Function to convert temperature based on the selected option
function convertTemperature() {
  const temperature = parseFloat(inputEl.value);
  const option = selectEl.value;
  
  if (isNaN(temperature)) {
    outputEl.textContent = 'Please enter a valid temperature.';
    return;
  }
  
  let convertedTemperature;
  let convertedUnit;
  
  switch (option) {
    case 'celsius':
      convertedTemperature = (temperature * 9/5) + 32;
      convertedUnit = 'Fahrenheit';
      break;
    case 'fahrenheit':
      convertedTemperature = (temperature - 32) * 5/9;
      convertedUnit = 'Celsius';
      break;
    case 'kelvin':
      convertedTemperature = temperature - 273.15;
      convertedUnit = 'Celsius';
      break;
    default:
      outputEl.textContent = 'Please select a valid temperature option.';
      return;
  }
  
  outputEl.textContent = `The converted temperature is: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}

// Add an event listener to the convert button
convertBtn.addEventListener('click', convertTemperature);