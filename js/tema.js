function alternarTema() {
  const body = document.body;
  const botao = document.getElementById("tema-btn");

  // Alterna a classe do modo escuro
  body.classList.toggle("dark-mode");

  // Atualiza o ícone do botão
  const modoAtual = body.classList.contains("dark-mode") ? "dark" : "light";
  botao.textContent = modoAtual === "dark" ? "☀️" : "🌙";

  // Salva a preferência no localStorage
  localStorage.setItem("tema", modoAtual);
}

// Aplica o tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  const body = document.body;
  const botao = document.getElementById("tema-btn");

  if (temaSalvo === "dark") {
    body.classList.add("dark-mode");
    botao.textContent = "☀️";
  } else {
    botao.textContent = "🌙";
  }
});
