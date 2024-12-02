const bancoDeDados = [];

// Adiciona um ouvinte de evento para o formulário de cadastro
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;

    // Captura o plano selecionado
    const plano = document.querySelector('input[name="plano"]:checked').value;

    // Adiciona os dados ao "banco de dados"
    bancoDeDados.push({ nome, cpf, email, plano });

    // Limpa o formulário
    this.reset();

    // Exibe o conteúdo do "banco de dados" no console
    console.log('Usuários cadastrados:', bancoDeDados);
    alert('Usuário cadastrado com sucesso!');
});

// Função para formatar o CPF
function formatCPF(cpfField) {
    let cpf = cpfField.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11); // Limita a 11 caracteres
    }
    
    // Formata o CPF
    if (cpf.length > 9) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (cpf.length > 6) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (cpf.length > 3) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1-$2');
    }

    cpfField.value = cpf; // Atualiza o campo de CPF com a formatação
}
