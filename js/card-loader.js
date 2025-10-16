document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const card = params.get("card");

  // Carrega conteúdo do sistema
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

  // Ativa modo escuro/claro com persistência
  const toggleBtn = document.getElementById('toggle-dark');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
    });
  }
});
