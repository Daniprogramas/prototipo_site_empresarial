// Exibe alerta de contato rápido
function mostrarContato() {
  alert("Entre em contato pelo e-mail: danielle.morais940@gmail.com");
}

// Carrega dinamicamente a seção solicitada
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

      // Insere o conteúdo HTML da seção
      conteudo.innerHTML = html;

      // Reinicia a animação de transição
      conteudo.classList.remove("mostrar");
      void conteudo.offsetWidth; // Força reflow
      conteudo.classList.add("tab-content", "mostrar");
    })
    .catch(error => {
      console.error("Erro ao carregar a seção:", secao, error);
      document.getElementById("conteudo").innerHTML = `
        <p style="text-align:center; color: red;">
          Não foi possível carregar a seção <strong>${secao}</strong>.
        </p>`;
    });
}
