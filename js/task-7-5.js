const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener("input", inputChange);

function inputChange(event) {
    input.value === "" 
    ? output.textContent = "незнакомец" 
    : output.textContent = event.currentTarget.value;
}