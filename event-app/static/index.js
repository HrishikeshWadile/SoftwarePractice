function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return false;
    }

    return true;
}

function showLog() {
    console.log("User registered successfully (JS)");
}