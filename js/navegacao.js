function carregarSecao(secao) {
  fetch(`sections/${secao}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      const conteudo = document.getElementById("conteudo");
      conteudo.innerHTML = html;

      conteudo.classList.remove("mostrar");
      void conteudo.offsetWidth;
      conteudo.classList.add("tab-content", "mostrar");
    })
    .catch(error => {
      console.error("Erro ao carregar a seção:", secao, error);
      document.getElementById("conteudo").innerHTML = `<p style="text-align:center;">Não foi possível carregar a seção <strong>${secao}</strong>.</p>`;
    });
}
