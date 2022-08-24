let submitButton = document.querySelector("#submitButton")
let conPasswordInput = document.getElementById("conPassword");

submitButton.addEventListener("click", () => {
    let password = document.getElementById("password").value;
    let conPassword = document.getElementById("conPassword").value;
    let conPasswordInput = document.getElementById("conPassword");
    let message = document.getElementById("message");

    if (password.length != 0) {
        if (password != conPassword) {
            message.textContent = "Password does NOT match!"
            conPasswordInput.style.borderColor = "red";
        }
    }
})


conPasswordInput.addEventListener('input', () => {
    let password = document.getElementById("password").value;
    let conPassword = document.getElementById("conPassword").value;

    let message = document.getElementById("message");
    if (conPassword != password) {
        conPasswordInput.style.borderColor = "red";
    } else {
        conPasswordInput.style.borderColor = "hsl(120, 76%, 50%)";
    }
})