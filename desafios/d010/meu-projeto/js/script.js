let nav = document.querySelector("#nav");

function mudouTamanho() {
  if (innerWidth >= 600) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

function abrir() {
  let close = document.querySelector(".close");
  let menu = document.querySelector(".menu");
  close.style.display = "block";
  menu.style.display = "none";
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

function fechar() {
  let close = document.querySelector(".close");
  let menu = document.querySelector(".menu");
  close.style.display = "none";
  menu.style.display = "block";
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
