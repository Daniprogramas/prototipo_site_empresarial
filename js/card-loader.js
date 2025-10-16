document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const card = params.get("card");

  fetch(`/prototipo_site_empresarial/sections/projetos/${card}.json`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("page-title").textContent = `${data.title} | DaniSoft Web`;
      document.getElementById("card-title").textContent = data.icon + " " + data.title;
      document.getElementById("card-subtitle").textContent = data.subtitle;

      const content = document.getElementById("card-content");
      content.innerHTML = `
        <h2>Funcionalidades</h2>
        <ul>${data.features.map(f => `<li>${f}</li>`).join("")}</ul>

        <h2>Testar Demonstração</h2>
        <p><strong>Usuário:</strong> ${data.demoUser}</p>
        <p><strong>Senha:</strong> ${data.demoPass}</p>
        <a href="${data.demoLink}" class="cta-btn" target="_blank">Acessar Sistema</a>

        <h2>Solicitar Orçamento</h2>
        <p>${data.callToAction}</p>
        <a href="/prototipo_site_empresarial/sections/contato.html" class="cta-btn">Solicitar orçamento</a>

        <div class="back-btn" onclick="window.history.back()">← Voltar</div>
      `;
    });
});
