const counterValue = document.querySelector('#value');
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

incBtn.addEventListener("click", () => {counterValue.textContent = +counterValue.textContent + 1});

decBtn.addEventListener("click", () => {counterValue.textContent -= 1});

