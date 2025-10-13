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
