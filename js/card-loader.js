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

        <h2>Sobre o Sistema</h2>
        <p>${data.description}</p>

        <h2>Testar Demonstração</h2>
        <p><strong>Usuário:</strong> ${data.demoUser}</p>
        <p><strong>Senha:</strong> ${data.demoPass}</p>
        <a href="${data.demoLink}" class="cta-btn" target="_blank">Acessar Sistema</a>

        <h2>Solicitar Orçamento</h2>
        <p>${data.callToAction}</p>
        <a href="#" class="cta-btn" onclick="carregarSecao('contato')">Solicitar orçamento</a>

        <a class="back-btn" onclick="window.location.href='/prototipo_site_empresarial/index.html'">← Voltar</a>


      `;
    });

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
function mostrarContato() {
  const contatoContainer = document.getElementById("contato-dinamico");

  // Se já estiver carregado, apenas exibe
  if (contatoContainer.innerHTML.trim() !== "") {
    contatoContainer.style.display = 'block';
    contatoContainer.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Carrega o conteúdo da seção de contato
  fetch('/prototipo_site_empresarial/sections/contato.html')
    .then(res => res.text())
    .then(html => {
      contatoContainer.innerHTML = html;
      contatoContainer.style.display = 'block';
      contatoContainer.scrollIntoView({ behavior: 'smooth' });
    })
    .catch(err => {
      contatoContainer.innerHTML = "<p>❌ Não foi possível carregar a seção de contato.</p>";
      contatoContainer.style.display = 'block';
    });
}
function mostrarContato() {
  const contatoContainer = document.getElementById("contato-dinamico");

  // Evita carregar mais de uma vez
  if (contatoContainer.dataset.loaded === "true") {
    contatoContainer.style.display = "block";
    contatoContainer.scrollIntoView({ behavior: "smooth" });
    return;
  }

  fetch("/prototipo_site_empresarial/sections/contato.html")
    .then(res => res.text())
    .then(html => {
      // Extrai apenas o conteúdo da <section id="contato">
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      const contatoSection = tempDiv.querySelector("#contato");
      if (contatoSection) {
        contatoContainer.innerHTML = contatoSection.outerHTML;
        contatoContainer.style.display = "block";
        contatoContainer.dataset.loaded = "true";
        contatoContainer.scrollIntoView({ behavior: "smooth" });
      }
    })
    .catch(err => {
      contatoContainer.innerHTML = "<p>❌ Não foi possível carregar a seção de contato.</p>";
      contatoContainer.style.display = "block";
    });
}
