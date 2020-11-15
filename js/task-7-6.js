const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('change', event => {
    event.target.value.length === Number(inputLength)
        ? (input.classList.add('valid'), input.classList.remove('invalid'))
        : (input.classList.add('invalid'), input.classList.remove('valid'));
    if (event.target.value.length === 0) {input.classList.remove('invalid'), input.classList.remove('valid')}
})