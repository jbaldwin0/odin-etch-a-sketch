const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const content = document.createElement('div');
    content.className = 'content';
    container.appendChild(content);
}

const blocks = Array.prototype.slice.apply(document.querySelectorAll('.content')
);

blocks.forEach(block => {
    //add event listeners
    block.addEventListener("mouseover", handleMouseOver = () => {
        mouseOver(block);
    });
    /*
    block.addEventListener("mouseout", handleMouseOut = () => {
        mouseOut(block);
    });
    */
});

const mouseOver = (block) => {
    block.style.backgroundColor = "black";
};
const mouseOut = (block) => {
    block.style.backgroundColor = "#b0c2c2";
};