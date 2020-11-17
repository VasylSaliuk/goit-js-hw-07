const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener("input", inputChange);

function inputChange(event) {
    output.textContent = input.value === "" 
    ? "незнакомец" 
    : event.currentTarget.value;
}