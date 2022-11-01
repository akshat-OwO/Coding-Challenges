const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--hue', button.dataset.color);
    });
});