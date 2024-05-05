const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');
const layer4 = document.getElementById('layer4');

window.addEventListener('srcoll', () =>{
    let value = window.scrollY;

    text1.style.marginTop = value * 2.5 + 'px';
    text2.style.top = value * 2.5 + 'px';
    text2.style.left = value * 2.5 + 'px';

    layer1.style.top = value * 1.5 + 'px';
    layer2.style.top = value * -1.5 + 'px';
    layer3.style.top = value * 1.5 + 'px';
    layer4.style.top = value * -1.5 + 'px';
    
});