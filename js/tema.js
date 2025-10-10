function alternarTema() {
  const body = document.body;
  const botao = document.getElementById("tema-btn");

  body.classList.toggle("dark-mode");
  botao.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
}
