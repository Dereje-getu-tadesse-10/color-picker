const body = document.querySelector('body');
const copyHex = document.querySelector('#copy');
const generate = document.querySelector('#generate');
const hexCode = document.querySelector('.hexCode');

copyHex.addEventListener('click', copyColor);

generate.addEventListener('click', () => {
    hexCode.textContent = getRandomColor();
    body.style.backgroundColor = getRandomColor();
});

body.style.backgroundColor = getRandomColor();
hexCode.textContent = getRandomColor();

function getRandomColor() {
    let numbers = '0123456789ABCDEF';
    let tags = '#';
    for (let i = 0; i < 6; i++) {
        tags += numbers[Math.floor(Math.random() * 16)];
    }
    return tags;
}


function copyColor() {
    document.execCommand('copy');
}