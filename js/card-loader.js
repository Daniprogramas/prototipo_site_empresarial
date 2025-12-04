document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const card = params.get("card");

  // Caminho base centralizado
  const BASE_PATH = "/prototipo_site_empresarial/sections";

  fetch(`${BASE_PATH}/projetos/${card}.json`)
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

        <h2>Documentação Inclusa</h2>
        <ul>${data.documentation.map(d => `<li>${d}</li>`).join("")}</ul>

        <h2>Benefícios</h2>
        <ul>${data.benefits.map(b => `<li>${b}</li>`).join("")}</ul>

        <h2>Preço</h2>
        <p>${data.price}</p>

        <h2>Formas de Pagamento</h2>
        <ul>${data.paymentMethods.map(pm => `<li>${pm}</li>`).join("")}</ul>

        ${data.videoDemo ? `
          <h2>Vídeo Demonstrativo</h2>
          <video controls width="100%">
            <source src="${data.videoDemo}" type="video/mp4">
            Seu navegador não suporta vídeo.
          </video>
        ` : ""}

        <h2>Solicitar Orçamento</h2>
        <p>${data.callToAction}</p>
        <a href="#" class="cta-btn" onclick="window.open('https://wa.me/5584994285441?text=Olá,%20vim%20do%20site%20e%20verifiquei%20os%20projetos.%20Gostaria%20de%20obter%20mais%20informações.','_blank')"">Solicitar orçamento</a>

        <a class="back-btn" onclick="window.location.href='/prototipo_site_empresarial/index.html'">← Voltar</a>
      `;
    });

  // Controle de tema (dark/light) com ícones sol/lua
  const toggleBtn = document.getElementById('toggle-dark');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
    toggleBtn.textContent = "🌞"; // sol no modo claro
  } else {
    body.classList.add('dark-mode');
    toggleBtn.textContent = "🌙"; // lua no modo escuro
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      // troca o ícone conforme o modo
      toggleBtn.textContent = newTheme === 'dark' ? "🌙" : "🌞";
    });
  }

  // Ajuste do cabeçalho para centralizar e dar espaçamento
  const header = document.querySelector(".card-header");
  if (header) {
    header.style.display = "flex";
    header.style.flexDirection = "column";
    header.style.alignItems = "center";
    header.style.justifyContent = "center";
    header.style.padding = "2.5rem 1.5rem"; // mais espaçamento das bordas
    header.style.textAlign = "center";
  }
});

// Função para carregar seção de contato
function mostrarContato() {
  const contatoContainer = document.getElementById("contato-dinamico");

  if (contatoContainer.dataset.loaded === "true") {
    contatoContainer.style.display = "block";
    contatoContainer.scrollIntoView({ behavior: "smooth" });
    return;
  }

  fetch("/prototipo_site_empresarial/sections/contato.html")
    .then(res => res.text())
    .then(html => {
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
