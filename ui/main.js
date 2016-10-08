console.log('Loaded!');
//change the element of the main-text
var element = document.getElementById('main-text');
element.innerHTML = 'I am an Indian';
// move the image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft ='100px';
};