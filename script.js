document.getElementById("sign-in-btn").addEventListener("click", function () {
    const usernameInput = document.getElementById("input-username");
    const contactName = usernameInput.value;

    const passwordInput = document.getElementById("input-password");
    const password = passwordInput.value;
    if (contactName == "admin" && password == "admin123") {
        alert("sign-in success");
        window.location.replace("home.html");
    } else {
        alert("sign-in failed");
        return;
    }

});
