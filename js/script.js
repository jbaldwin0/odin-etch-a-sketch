const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const content = document.createElement('div');
    document.getElementById("content").id = "block";
    container.appendChild(content);
}


const hover = document.querySelector('block');
hover.addEventListener('click', () => {
    content.style.backgroundColor = "black";
});