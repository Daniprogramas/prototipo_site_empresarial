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
// ===== Validação do formulário de contato =====
const form = document.querySelector('.form-contato');
const emailInput = document.getElementById('email');
const emailErro = document.getElementById('email-erro');

if (form && emailInput && emailErro) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede envio automático

    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailErro.textContent = '';

    if (!emailRegex.test(email)) {
      emailErro.textContent = 'Por favor, insira um email válido.';
      emailInput.focus();
      return;
    }

    if (email.length < 6 || email.length > 254) {
      emailErro.textContent = 'O email deve ter entre 6 e 254 caracteres.';
      emailInput.focus();
      return;
    }

    abrirModal(); // mostra modal de obrigado
    form.submit(); // envia apenas se passar na validação
  });

  emailInput.addEventListener('input', () => {
    emailErro.textContent = '';
  });
}


