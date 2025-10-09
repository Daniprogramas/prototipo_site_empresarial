function mostrarContato() {
  alert("Entre em contato pelo e-mail: contato@danisoftweb.com");
}

function alternarTema() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelectorAll("nav a").forEach(el => el.classList.toggle("dark-mode"));
  document.querySelectorAll("button").forEach(el => el.classList.toggle("dark-mode"));
  document.querySelector("footer").classList.toggle("dark-mode");
}

function mostrarAba(id) {
  document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
  document.getElementById(id).style.display = "block";
}
