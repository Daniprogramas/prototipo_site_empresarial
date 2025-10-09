function mostrarContato() {
  alert("Entre em contato pelo e-mail: contato@empresaexemplo.com");
}
function alternarTema() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelectorAll("nav a").forEach(el => el.classList.toggle("dark-mode"));
  document.querySelector("button").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
}
