// Exibe alerta de contato
function mostrarContato() {
  alert("Entre em contato pelo e-mail: contato@danisoftweb.com");
}

// Alterna entre tema claro e escuro
function alternarTema() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelectorAll("nav a").forEach(el => el.classList.toggle("dark-mode"));
  document.querySelectorAll("button").forEach(el => el.classList.toggle("dark-mode"));
  document.querySelector("footer").classList.toggle("dark-mode");
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
