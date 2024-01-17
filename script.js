let 
    boxContainer = document.querySelector('.boxes'),
    boxes = document.querySelectorAll('.box'),
    checkbox = document.querySelector('input'),
    overlay = document.querySelector('.overlay'),
    popup = document.getElementById('popup'),
    popupText = document.getElementById('popupText');
    blockCount = 4;

function createBlock(number) {
    const block = document.createElement('div');
    block.classList.add('box');
    block.textContent = number.toString();
    block.addEventListener('click', () => {
        showPopup(block.innerText);
    });
    return block;
}

function addBlock() {
    const block = createBlock(blockCount + 1);
    boxContainer.appendChild(block);
    blockCount++;
}

function showPopup(text) {
    popupText.innerText = 'Выюран блок № ' + text;
    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 100);
}


function closePopup() {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
}, 500);
}

overlay.addEventListener('click', closePopup);

boxes.forEach(box => {
    box.addEventListener('click', () => {
        showPopup(box.innerText);
    });
});

checkbox.addEventListener('change', () => {
    let blocks = document.querySelectorAll('.box');
    blocks.forEach((block, index) => {
        if (index % 2 === 1) {
            block.classList.toggle('gray');
        }
    });
});