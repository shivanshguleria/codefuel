const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    window.location.assign("login.html");
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "123") {
        alert("You have successfully logged in.");
        window.location.assign("https://www.tutorialspoint.com");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})