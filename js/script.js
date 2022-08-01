const container = document.querySelector('.container');
var blockCount = 16;
var blockResize = 6.25;

for (let i = 0; i < Math.pow(blockCount, 2); i++) {
    const content = document.createElement('div');
    content.className = 'content';
    container.appendChild(content);
}

//Section containing information related to the block divs
const blocks = Array.prototype.slice.apply(document.querySelectorAll('.content')
);

blocks.forEach(block => {
    block.addEventListener("mouseover", handleMouseOver = () => {
        mouseOver(block);
    });
    //Could be used for an eraser function later
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

//Section focusing on the reset button
const rButton = document.querySelector('.resize');
rButton.addEventListener("click", () => {
    blockCount = prompt('Enter the number of squares in each row,\n'+
    'The number should be between 1 and 100.');
    if (blockCount > 100 
        || blockCount < 1 
        || isNaN(blockCount) 
        || blockCount % 1 != 0) {
        blockCount = 16;
        return alert('Invalid input, setting default value')
    }
    gridClear();
    resizeGrid();
});

function gridClear() {
    blocks.forEach(block => { 
        block.style.backgroundColor = "#b0c2c2";
    });
}

function resizeGrid() {
    //Delete old nodelist
    document.querySelectorAll(".content").forEach(e => e.remove());
    
    //Create and resize new nodelist
    for (let i = 0; i < Math.pow(blockCount, 2); i++) {
        const content = document.createElement('div');
        content.className = 'content';
        container.appendChild(content);
    }
    blockResize = (100/blockCount);
    const newSize = document.querySelectorAll('.content');
    for (let i = 0; i < newSize.length; i++) {
        newSize[i].style=`height: ${blockResize}%; width: ${blockResize}%`;
    }

    //Reapply listeners
    const blocks = Array.prototype.slice.apply(document.querySelectorAll('.content')
    );  
    blocks.forEach(block => {
        block.addEventListener("mouseover", handleMouseOver = () => {
            mouseOver(block);
        });
    });
}
