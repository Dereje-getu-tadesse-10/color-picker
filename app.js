const body = document.querySelector('body');
const copyHex = document.querySelector('#copy');
const generate = document.querySelector('#generate');
const hexCode = document.querySelector('.hexCode');
const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
copyHex.addEventListener('click', copyColor);

generate.addEventListener('click', () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[getRandomNmbr()];
    }
    hexCode.textContent = color;
    body.style.backgroundColor = color;
});




body.style.backgroundColor = getRandomColor();
hexCode.textContent = getRandomColor();


function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[getRandomNmbr()];
    }
    return color;
}

function getRandomNmbr() {
    return Math.floor(Math.random() * letters.length);
}


function copyColor() {
    document.execCommand('copy');
    hexCode.textContent = 'Hex code Copied !';
}