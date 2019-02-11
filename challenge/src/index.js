import './scss/main.scss';

const dropAreas = Array.from(document.getElementsByClassName('js-dropArea'))
const dragImages = Array.from(document.getElementsByClassName('js-drag'))
let srcImg // image being dragged
let srcArea // area that dragged image originated from
let swapImg // image to be swapped out for dragged image
let dropped = false; // verifying that dragging has ceased

for (let img of dragImages) {
    img.setAttribute('draggable', true)
    img.addEventListener('dragstart', (e) => {
        // capture image being dragged
        srcImg = img;
        srcArea = img.closest('.js-dropArea');
        img.classList.add('active')
    })
    img.addEventListener('dragend', (e) => {
        // check for active classes on images
        checkActive(dragImages)
    })
}

for (const area of dropAreas) {
    area.addEventListener('dragover', (e) => {
        e.preventDefault()
    })
    area.addEventListener('dragenter', (e) => {
        // detect drop area
        e.preventDefault()
        if (area !== srcArea) {
            area.classList.add('active');
        }
    })
    area.addEventListener('dragleave', (e) => {
        // for exiting the drop area
        const { classList } = e.target

        if (classList.contains('js-dropArea')) {
           classList.remove('active');
        }
    })
    area.addEventListener('drop', (e) => {
        // drop and swap images
        e.preventDefault()
        swapImg = area.children[0]
        swap(srcImg, srcArea, swapImg, area)
        dropped = true;
        checkActive(dropAreas)
    })
}

function checkActive(arr) {
    // cycle through arrays to remove active classes
    if (dropped === true) {
        for (const item of arr) {
            item.classList.remove('active')
        }
    }
}

function swap(sourceImage, sourceArea, swapImage, swapArea) {
    //swap dragged image with target image
    sourceImage.parentNode.removeChild(sourceImage)
    swapArea.appendChild(sourceImage)
    swapImage.parentNode.removeChild(swapImage)
    sourceArea.appendChild(swapImage)
}
