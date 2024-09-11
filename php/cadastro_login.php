<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "meubanco";

// Criação de conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checagem de conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Exemplo de lógica para cadastro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
    if ($conn->query($sql) === TRUE) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>