const body = document.querySelector('body');

const colors = [];
for (let i = 0; i < 100; i++) {
    colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

body.style.backgroundColor = getRandomColor();