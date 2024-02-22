function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}
function validateForm() {
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var password = document.Form.pass.value;

    var nameErr = emailErr = passwordErr = true;
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if (password.length < 6) {
        printError("passErr", "Password must be at least 6 characters");
    } else {
        printError("passErr", "");
        passwordErr = false;
    }
    if (nameErr || emailErr || passwordErr) {
        return false;
    }
}
