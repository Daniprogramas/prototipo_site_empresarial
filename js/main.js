// Abrir modal de agradecimento
function abrirModal() {
  document.getElementById('modal-obrigado').style.display = 'flex';
}

// Fechar modal e voltar para a seção de contato
function fecharModal() {
  document.getElementById('modal-obrigado').style.display = 'none';

  const contato = document.getElementById('contato');
  if (contato) {
    contato.scrollIntoView({ behavior: 'smooth' });
  }
}


// Carregar seção de início automaticamente ao abrir o site
window.addEventListener('DOMContentLoaded', function () {
  carregarSecao('inicio');
});

//validação do formulario
// Seleciona o formulário
const form = document.querySelector('.form-contato');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede envio automático

    const email = document.getElementById('email').value.trim();

    // Regex mais completa para validar email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      return; // cancela envio
    }

    // Opcional: validar comprimento mínimo e máximo
    if (email.length < 6 || email.length > 254) {
      alert('O email deve ter entre 6 e 254 caracteres.');
      return;
    }

    // Se passou na validação, envia o formulário
    form.submit();
  });
}
