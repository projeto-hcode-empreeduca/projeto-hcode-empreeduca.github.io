const buttonMenu = document.querySelector("#open-menu");
// const button = document.getElementById("open-menu");
const buttonClose = document.querySelector("#close-menu");
const header = document.querySelector("header.header-top-site");
const overlay = header.querySelector(".overlay");
const body = document.body;

// Arrow function para fechar o menu
const closeMenu = () => {
    body.classList.remove("open-menu");
};

// camelCase
buttonMenu.addEventListener("click", () => {

    console.log(`CLASS NAME: ${header.className}`);
    console.log(`CLASS LIST: ${header.classList}`);

    // header.className = "header-top-site desktop-max-width open-menu";
    // header.className = "open-menu";

    body.classList.add("open-menu");

});

// DRY - Don't repeat yourself (Não se repita / Não repita a si mesmo)
buttonClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);