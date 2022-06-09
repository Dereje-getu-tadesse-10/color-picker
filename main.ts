const body = document.querySelector('body') as HTMLBodyElement;
const copyHex = document.querySelector('#copy') as HTMLButtonElement;
const generate = document.querySelector('#generate') as HTMLButtonElement;
const hexCode = document.querySelector('.hexCode') as HTMLParagraphElement;

const letter : string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
copyHex.addEventListener('click', copyColor);

generate.addEventListener('click', ()=>{
    let color : string = '#';
    for(let i = 0; i < 6; i++){
        color += letter[getRandomNmbr()];
    }
    hexCode.textContent = color;
    body.style.backgroundColor = color;
});

function getRandomColor(){
    let color : string = '#';
    for(let i = 0; i < 6; i++){
        color += letter[getRandomNmbr()];
    }
    return color;
}

function getRandomNmbr(){
    let res : number = Math.floor(Math.random() * letter.length);
    return res;
}

function copyColor() {
    document.execCommand('copy');
    let thx : string = 'Hex code Copied !';
    hexCode.textContent = thx;
}


body.style.backgroundColor = getRandomColor();
hexCode.textContent = getRandomColor();