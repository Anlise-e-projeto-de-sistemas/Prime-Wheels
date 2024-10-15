* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: SpeedCorpo;
  font-size: 14px;

/* Define a largura da barra de rolagem */
::-webkit-scrollbar {
  width: 12px; /* Largura vertical */
  height: 12px; /* Altura horizontal */
}
/* Personaliza a trilha da barra de rolagem */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* Cor da trilha */
  border-radius: 10px; /* Cantos arredondados */
}
/* Personaliza o polegar da barra de rolagem */
::-webkit-scrollbar-thumb {
  background-color: #888; /* Cor do polegar */
  border-radius: 10px; /* Cantos arredondados */
  border: 2px solid #f1f1f1; /* Borda ao redor */
}
/* Efeito hover no polegar */
::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Cor mais escura no hover */
}
}
body {
  font-family:Arial, Helvetica, sans-serif; /*ADICIONAR A FONTE CORRETA*/
  background-color: rgb(205, 232, 253);
}
.fundo {
  margin: 0;
  height: 60px;
  width: 100%;
}
.logo{
 /*margin-top: ; colocar a distancia do topo para manter o logo no meio*/
  float: left;
  width: 150px; /* Defina o tamanho do logo */
  height: auto; /* Mantém a proporção da imagem */
  margin-left: 400px;
}
.login{
  color: #ffffff;
}
.login:hover{
  cursor: pointer;
  color: #ff8418;
  transform: scale(1.2); /* Aumenta o texto em 20% */
}
nav ul {
  list-style: none; /* Remove os marcadores de lista */
  display: flex; /* Ativa o Flexbox */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  height: 40px; /* Define uma altura para visualização vertical */
  margin-right: 400px;
  margin-top: -55px;
}
nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  color: #ff8418;
}
nav li {
  margin-right: 30px;
  margin-left: 30px;
  font-size: 20px;
  transition: transform 0.3s ease; /* Transição suave */
}
nav li:hover {
  cursor: pointer;
  color: #ff8418;
  transform: scale(1.2); /* Aumenta o texto em 20% */
}
.form-section {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 15px;
  width: 1040px;
  margin: -100px 0 0 405px;
}
.form-section:hover {
  cursor: pointer;
  background-color: #fff;
  color: #ff8418;
}
.item {
  background-color: rgba(255, 255, 255, 0.522);
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  flex-grow: 1;
  position: relative;
}
.item:hover {
  cursor: pointer;
  background-color: #fff;
  color: #ff8418;
}
.item label {
  margin-right: 10px;
  font-size: 16px;
}
.item select, .item input {
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  padding-left: 10px;
  margin-left: 10px;
}
#local{
  padding-left: 60px;
}
.item input[type="date"], .item input[type="time"] {
  padding-left: 50px;
}
/* Fim edição do cabeçalho */



/* Inicio botão ZAP */
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  left: 40px; /* Botão do WhatsApp à esquerda */
  z-index: 100;
  color: #01e323;
}
.whatsapp-float img {
  width: 100%;
  height: 100%;
}
/* Fim botão ZAP */



/* Inicio do botão de voltar ao topo */
.btn-topo {
  position: fixed;
  bottom: 50px;
  right: 20px;
  display: none; /* Oculto inicialmente */
  background-color: #0004504c;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 100%;
  font-size: 18px;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
/* Exibe o botão quando visível */
.btn-topo.show {
  display: block;
  opacity: 1;
  transform: scale(1);
}
.btn-topo:hover {
  background-color: #ff8418;
  transform: scale(1.1); /* Aumenta um pouco no hover */
}
/* Fim botão topodo botão de voltar ao topo */


/* Inicio cadastro/login */
/* Estilo do avatar */
.avatar-container {
  position: relative;
  text-align: right;
  padding: 20px;
}
.avatar {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
/* Estilo do modal (janela popup) */
.modal {
  display: none; /* Oculto inicialmente */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #00045086;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: #000450;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  position: relative;
  margin: auto;
}
/* Fechar modal */
.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}
/*Titulo de login e cadastro*/
#Login h2{
  color: #fff;
  padding-bottom: 10px;
}
#Cadastro h2{
  color: #fff;
  padding-bottom: 10px;
}
/* Tabs para Login e Cadastro */
.tab {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
}
.tab button {
  background-color: #001a63;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 48%;
}
.tab button.active {
  background-color: #ff8418;
  color: white;
}
.tabcontent {
  display: none;
}
.tabcontent.active {
  display: block;
}
/* Estilo do formulário */
form {
  color: #fff;
  display: flex;
  flex-direction: column;
}
form input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
}
form button {
  background-color: #ff8418;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
form button:hover {
  background-color: #fecd03;
}
/* Estilo do campo de senha com ícone de olho */
.password-container {
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
}
.password-container input {
  flex: 1;
}
.toggle-password {
  position: absolute;
  right: 10px;
  cursor: pointer;
}
.toggle-password img {
  width: 20px;
  height: 20px;
}
/* Fim cadastro/login */










/*ADICIONE O CONTEUDO DESTA PAGINA AQUI */
.conteudo{
  background-color: #01e323;
  height: 180px;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 20%;
}











/* Inicio rodapé */
.footer {
  color: #fff;
  padding: 20px 0;
  font-family: Arial, sans-serif;
  padding: 0;
}
.fundo2 {
  margin-bottom: -150px;
  height: 180px;
  width: 100%;
}
/* Container para o conteúdo do rodapé */
.footer-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}
/* saiba mais do rodapé */
.espaco{
  padding: 23px;
}
.saiba{
  color: #fff;
  text-decoration: none;
}
.saiba:hover{
  cursor: pointer;
  color: #ff8418;
  text-decoration: underline;
}
/* Seções individuais do rodapé */
.footer-section {
  flex: 1;
  margin: 0 20px;
}
.footer-section h4 {
  border-bottom: 4px solid #ff8418;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}
.footer-section p, .footer-section ul {
  font-size: 14px;
}
/*Espaço entre e-mail e telefone*/
.telefone{
  margin-top: 10px;
}
.footer-section ul {
  list-style: none;
  padding: 0;
}
.footer-section ul li {
  margin-bottom: 10px;
}
.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}
.footer-section ul li a:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #ff8418;
}
/* Estilo para os ícones de redes sociais */
.social-media {
  display: flex;
  align-items: center;
}
.social-icon {
  padding: 30px;
  color: #ffffff;
}
.social-icon:hover{
  cursor: pointer;
  color: #ff8418;
}
.social-icon img {
  width: 24px;
  height: 24px;
}
/* Estilo para a parte inferior do rodapé */
.footer-bottom {
  text-align: center;
  padding: 10px;
  background-color: #ff8418;
}
.footer-bottom p {
  margin: 0;
  font-size: 14px;
}
/* Fim rodapé */
