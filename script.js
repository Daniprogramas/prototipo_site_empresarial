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

// Carrega conteúdo de uma seção externa na div #conteudo
function carregarSecao(secao) {
  fetch(`sections/${secao}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById("conteudo").innerHTML = html;
    });
}

// Carrega a seção "inicio" automaticamente ao abrir o site
window.addEventListener("DOMContentLoaded", () => {
  carregarSecao("inicio");
});
