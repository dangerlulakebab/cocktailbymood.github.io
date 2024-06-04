const buttons = document.querySelectorAll('.pick-emojo-item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('pressed');
    });
});