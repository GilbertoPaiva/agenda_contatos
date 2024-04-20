const form = document.getElementById('form-agenda');
const nomeInput = document.getElementById('nome-contato');
const telefoneInput = document.getElementById('numero-contato'); 
const contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = nomeInput.value;
    const telefone = telefoneInput.value; 

    if (telefone in contatos) {
        alert(`O telefone ${telefone} já está salvo para o contato ${contatos[telefone]}.`);
        return;
    }

    contatos[telefone] = nome;

    adicionarLinha(nome, telefone); 
    
    nomeInput.value = '';
    telefoneInput.value = ''; 
});

function adicionarLinha(nome, telefone) { 
    const newRow = tabelaContatos.insertRow();
    const cellNome = newRow.insertCell(0);
    const cellTelefone = newRow.insertCell(1);

    cellNome.textContent = nome;
    cellTelefone.textContent = telefone; 
}
