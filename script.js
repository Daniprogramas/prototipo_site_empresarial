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
  const conteudo = document.getElementById("conteudo");
  conteudo.classList.remove("mostrar");

  fetch(`sections/${secao}.html`)
    .then(response => {
      if (!response.ok) throw new Error(`Erro ao carregar a seção: ${secao}`);
      return response.text();
    })
    .then(html => {
      conteudo.innerHTML = html;
      setTimeout(() => conteudo.classList.add("mostrar"), 50);
    })
    .catch(error => {
      conteudo.innerHTML = `<p style="color:red;">${error.message}</p>`;
      conteudo.classList.add("mostrar");
      console.error(error);
    });
}


// Carrega a seção "inicio" automaticamente ao abrir o site
window.addEventListener("DOMContentLoaded", () => {
  carregarSecao("inicio");
});
