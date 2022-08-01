const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const content = document.createElement('div');
    content.className = 'content';
    container.appendChild(content);
}

const blocks = Array.prototype.slice.apply(document.querySelectorAll('.content')
);

for (content of blocks) {
    content.addEventListener('mouseenter', () => {
        content.style.backgroundColor = "black";
      });
      content.addEventListener('mouseleave', () => {
        content.style.backgroundColor = "#b0c2c2";
      });
}


