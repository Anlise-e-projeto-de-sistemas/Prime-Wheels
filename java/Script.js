/*inicio carrossel*/
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
/*fim carrossel*/

/*Inicio barra de seleção*/
document.getElementById('local').addEventListener('change', function() {
    console.log('Local selecionado: ' + this.value);
});

document.getElementById('data').addEventListener('change', function() {
    console.log('Data selecionada: ' + this.value);
});

document.getElementById('hora').addEventListener('change', function() {
    console.log('Hora selecionada: ' + this.value);
});
/*fim barra de seleção*/