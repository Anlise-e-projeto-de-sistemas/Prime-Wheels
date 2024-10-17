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
/*Fim cadastro/login*/



/*Inicio cards*/
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

function updateCarrossel() {
  const offset = -currentIndex * (300 + 20); // Largura do card + margem
  document.querySelector('.carrossel').style.transform = `translateX(${offset}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function goToCard(index) {
  currentIndex = index;
  updateCarrossel();
}
/*Fim cards*/