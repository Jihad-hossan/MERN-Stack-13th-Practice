const c_heading = document.getElementById('c_heading');
const font_size = document.getElementById('font_size');
const color = document.getElementById('color');
const font_family = document.getElementById('font_family');
const h1 = document.querySelector('h1');
const align = document.querySelectorAll('.align'); 


c_heading.onkeyup = () => {
    h1.innerHTML = c_heading.value;
}
align.forEach( item => {

    item.onchange = () => {
        h1.style.textAlign = item.value;
    }
});

font_size.oninput = () => {
    h1.style.fontSize = font_size.value + 'px';
}

color.oninput = () => {
    h1.style.color = color.value;
}

font_family.onchange = () => {
    h1.style.fontFamily = font_family.value;
}