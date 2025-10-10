function mostrarContato() {
  alert("Entre em contato pelo e-mail: danielle.morais940@gmail.com");
}

function carregarSecao(secao) {
  fetch(`sections/${secao}.html`)
    .then(response => response.text())
    .then(html => {
      const conteudo = document.getElementById("conteudo");
      conteudo.innerHTML = html;

      conteudo.classList.remove("mostrar");
      void conteudo.offsetWidth;
      conteudo.classList.add("tab-content", "mostrar");
    })
    .catch(error => {
      console.error("Erro ao carregar a seção:", secao, error);
    });
}
