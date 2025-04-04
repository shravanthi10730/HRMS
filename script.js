document.addEventListener("DOMContentLoaded", function () {
  const showPassword = document.getElementById("showPassword");
  const passwordInput = document.getElementById("password");
  const form = document.getElementById("loginForm");
  const messageLabel = document.getElementById("messageLabel");

  showPassword.addEventListener("change", () => {
    passwordInput.type = showPassword.checked ? "text" : "password";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      messageLabel.textContent = "Username or Password cannot be empty!";
    } else if (username === "hradmin" && password === "hr@123") {
      messageLabel.textContent = "";
      alert("WELCOME TO HRMS PORTAL");
      form.reset();
    } else {
      messageLabel.textContent = "Invalid Username or Password!";
    }
  });
});
