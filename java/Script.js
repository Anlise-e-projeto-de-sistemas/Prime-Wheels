/*Inicio carrossel*/
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carrosselTrack = document.querySelector('.carrossel-track');
const pageDots = document.querySelectorAll('.dot');

let currentIndex = 0; // Posição inicial do carrossel
const totalSlides = document.querySelectorAll('.carrossel-images').length; // Total de grupos de 4 imagens

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Volta para o último grupo
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta para o primeiro grupo
    }
    updateCarousel();
});

function updateCarousel() {
    const translatePercentage = -(currentIndex * 33.33); // Move 33% para cada slide
    carrosselTrack.style.transform = `translateX(${translatePercentage}%)`;
    
    // Atualiza os círculos do indicador de página
    pageDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
/*Fim carrossel*/



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
/*Fim barra de seleção*/



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
/*Fim botao topo*/



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



/*Inicio retirada/devolução*/
// Função para verificar se todos os campos da form-section estão preenchidos
function areAllFieldsFilled(section) {
    const selects = section.querySelectorAll('select');
    const inputs = section.querySelectorAll('input');

    for (let select of selects) {
        if (select.value === "" || select.value === "Selecione a garagem de retirada") {
            return false; // Algum campo select não está preenchido
        }
    }

    for (let input of inputs) {
        if (input.value === "") {
            return false; // Algum campo input não está preenchido
        }
    }

    return true; // Todos os campos estão preenchidos
}

// Função para monitorar e exibir a form-section2
function checkFormSection1() {
    const formSection = document.querySelector('.form-section');
    const formSection2 = document.querySelector('.form-section2');

    if (areAllFieldsFilled(formSection)) {
        formSection2.style.display = 'flex'; // Exibe a form-section2
    } else {
        formSection2.style.display = 'none'; // Oculta a form-section2
    }
}

// Função para monitorar e exibir o item3
function checkFormSection2() {
    const formSection2 = document.querySelector('.form-section2');
    const item3 = document.querySelector('.item3');

    if (areAllFieldsFilled(formSection2)) {
        item3.style.display = 'flex'; // Exibe o item3
    } else {
        item3.style.display = 'none'; // Oculta o item3
    }
}

// Função que vai monitorar os campos e chamar as funções necessárias
function monitorFields() {
    checkFormSection1(); // Verifica se a form-section2 deve ser exibida
    checkFormSection2(); // Verifica se o item3 deve ser exibido
}

// Adicionar evento nos campos de input e select da form-section e form-section2 para monitorar
const formSection = document.querySelector('.form-section');
const formSection2 = document.querySelector('.form-section2');

formSection.addEventListener('input', monitorFields);
formSection2.addEventListener('input', monitorFields);
/*Fim retirada/devolução*/



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
