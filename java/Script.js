let index = 0;
const images = document.querySelectorAll('.carrossel-images img');
const totalImages = images.length;

document.querySelector('.next-btn').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateCarrossel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarrossel();
});

function updateCarrossel() {
    const carrosselWidth = document.querySelector('.carrossel-container').offsetWidth;
    document.querySelector('.carrossel-images').style.transform = `translateX(${-index * carrosselWidth}px)`;
}
