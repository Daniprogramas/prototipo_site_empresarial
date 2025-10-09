// Exibe alerta de contato
function mostrarContato() {
  alert("Entre em contato pelo e-mail: danielle.morais940@gmail.com");
}

function alternarTema() {
  const body = document.body;
  const botao = document.getElementById("tema-btn");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    botao.textContent = "☀️"; // modo claro
  } else {
    botao.textContent = "🌙"; // modo escuro
  }
}


function carregarSecao(secao) {
  fetch(`sections/${secao}.html`)
    .then(response => response.text())
    .then(html => {
      const conteudo = document.getElementById("conteudo");
      conteudo.innerHTML = html;

      // Aplica a classe de animação e estilo
      conteudo.classList.remove("mostrar");
      void conteudo.offsetWidth; // força reflow para reiniciar animação
      conteudo.classList.add("tab-content", "mostrar");
    })
    .catch(error => {
      console.error("Erro ao carregar a seção:", secao, error);
    });
}


// Carrega a seção "inicio" automaticamente ao abrir o site
window.addEventListener("DOMContentLoaded", () => {
  carregarSecao("inicio");
});
