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

/*Inicio botao topo*/
// Função para rolar suavemente até o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar o botão apenas quando o usuário rolar a página
window.onscroll = function() {
    const btnTopo = document.getElementById('btnTopo');
    if (window.pageYOffset > 300) {
        btnTopo.classList.add('show');  // Exibe o botão ao rolar mais de 300px
    } else {
        btnTopo.classList.remove('show');  // Esconde o botão ao voltar para o topo
    }
};
/*fim botao topo*/

/*Inicio cadastro/login*/
    // Abrir modal ao clicar no avatar
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('defaultTab').click(); // Abre o tab de login por padrão
});

// Fechar modal ao clicar no "x"
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Fechar modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};

// Alternar entre as abas de Login e Cadastro
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Esconder todos os conteúdos das abas
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    // Remover a classe "active" de todos os botões
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    // Mostrar o conteúdo atual e marcar o botão como ativo
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Função para alternar o tipo de input da senha (mostrar/ocultar)
function togglePassword(inputId, iconId) {
    var inputField = document.getElementById(inputId);
    var icon = document.getElementById(iconId);

    if (inputField.type === "password") {
        inputField.type = "text";
        icon.src = "img/eye-open.svg"; // Trocar para o ícone de olho aberto
    } else {
        inputField.type = "password";
        icon.src = "img/eye-closed.svg"; // Trocar para o ícone de olho fechado
    }
}
/*fim cadastro/login*/