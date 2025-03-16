function dados() {
    const formulario = document.querySelector(".js-form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.querySelector("#name").value;
        const dataNascimento = document.querySelector("#birth-date").value;

        document.getElementById("resultado").textContent = `Seu nome é ${nome} e sua data de nascimento é ${dataNascimento}.`;
    })
}

dados()