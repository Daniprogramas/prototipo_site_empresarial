function alternarTema() {
  const body = document.body;
  const botao = document.getElementById("tema-btn");

  body.classList.toggle("dark-mode");

  const modoAtual = body.classList.contains("dark-mode") ? "dark" : "light";
  botao.textContent = modoAtual === "dark" ? "☀️" : "🌙";

  localStorage.setItem("tema", modoAtual);
}

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
