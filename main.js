const sliderImages = document.querySelector('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    imageSpan = document.getElementById('imageSpan');
let current = 0;

const images = [
    {
        imageUrl: './images/image1.jpeg',
        spanText: 'Image One'
    },
    {
        imageUrl: './images/image2.jpeg',
        spanText: 'Image Two'
    },
    {
        imageUrl: './images/image3.jpeg',
        spanText: 'Image Three'
    },
];

function showImage() {
    sliderImages.style.backgroundImage = `url(${images[current].imageUrl})`;
    imageSpan.textContent = images[current].spanText;
}

showImage();

function slideLeft() {
    if (current === 0) {
        current = images.length;
    }
    current--;
    showImage();
}

function slideRight() {
    if (current === images.length - 1) {
        current = -1;
    }
    current++;
    showImage();
}

arrowLeft.addEventListener('click', slideLeft);

arrowRight.addEventListener('click', slideRight);









