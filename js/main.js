function abrirModal() {
  document.getElementById('modal-obrigado').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal-obrigado').style.display = 'none';

  // Volta para a seção de contato
  const contato = document.getElementById('contato');
  if (contato) {
    contato.scrollIntoView({ behavior: 'smooth' });
  }
}
<script>
  window.addEventListener('DOMContentLoaded', function () {
    carregarSecao('inicio');
  });
</script>
