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
const form = document.querySelector('.form-contato');
const emailInput = document.getElementById('email');
const emailErro = document.getElementById('email-erro');

if (form && emailInput && emailErro) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Limpa mensagem de erro antes da validação
    emailErro.textContent = '';

    // Validação de formato
    if (!emailRegex.test(email)) {
      emailErro.textContent = 'Por favor, insira um email válido.';
      emailInput.focus();
      return;
    }

    // Validação de comprimento
    if (email.length < 6 || email.length > 254) {
      emailErro.textContent = 'O email deve ter entre 6 e 254 caracteres.';
      emailInput.focus();
      return;
    }

    // Se passou em tudo, envia o formulário
    form.submit();
  });

  // Remove mensagem de erro quando o usuário digita algo
  emailInput.addEventListener('input', () => {
    emailErro.textContent = '';
  });
}

