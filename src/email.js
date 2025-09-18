document.querySelector(".form-contacts").addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    console.log("name", name, "email", email, "message", message);
})

function composeEmail(){

}