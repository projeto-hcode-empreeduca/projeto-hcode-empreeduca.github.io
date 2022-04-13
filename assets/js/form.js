// const formElement = document.getElementById("formulario");
// const formElement = document.getElementsByClassName("elementos");
// const formElement = document.getElementsByTagName("form");

const formContainer = document.querySelector("#form-get-in-touch");
const form = formContainer.querySelector("form");

const button = form.querySelector("button");
// Evento possui uma variável de evento
form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Formulário sendo enviado");

    /*
    // Selecionando o valor dos elementos com o atributo .value
    const inputEmail = form.querySelector("#email-get-in-touch");
    console.log(inputEmail.value);
    */

    // Selecionando o valor dos elementos com o FormData
    const dados = new FormData(form);

    console.log(dados.get("my-email"));
    console.log(dados.get("my-message"));
    console.log(dados.get("selected-subject"));

});

console.log(form);