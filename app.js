// create an array with 50 hexadecimal colors

const colors = [];
for (var i = 0; i < 50; i++) {
    colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
}
