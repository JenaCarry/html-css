let nav = document.querySelector("#nav");

function clicar() {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    document.querySelector(".menu").src = "imagens/menu_white.svg"
  } else {
    nav.classList.add("open");
    document.querySelector(".menu").src = "imagens/close_white.svg"
  }
}
