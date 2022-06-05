const body = document.querySelector('body');
const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate');


generate.addEventListener('click', () => {
    body.style.backgroundColor = getRandomColor();
});

body.style.backgroundColor = getRandomColor();

function getRandomColor() {
    let numbers = '0123456789ABCDEF';
    let tags = '#';
    for (var i = 0; i < 6; i++) {
        tags += numbers[Math.floor(Math.random() * 16)];
    }
    return tags;
}