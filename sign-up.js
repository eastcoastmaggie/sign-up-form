const passwordField = document.querySelector("#password");
const confirmField = document.querySelector("#password-confirm");
const validationMessage = document.querySelector("#validation-message")

function checkValidation(){
        while(confirmField.value != passwordField.value){
            confirmField.setCustomValidity("*Passwords do not match");
            validationMessage.textContent = "*Passwords do not match";
            return;
        }
        validationMessage.textContent = "";
        passwordField.classList.remove("invalid");
        confirmField.classList.remove("invalid");
}
confirmField.addEventListener('keyup', checkValidation);
passwordField.addEventListener('keyup', checkValidation);
passwordField.classList.add("invalid");
confirmField.classList.add("invalid");
