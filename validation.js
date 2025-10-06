document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("nameMsg").innerText = "";
    document.getElementById("emailMsg").innerText = "";
    document.getElementById("passMsg").innerText = "";
    document.getElementById("confirmMsg").innerText = "";

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("useremail").value.trim();
    const password = document.getElementById("userpass").value;
    const confirm = document.getElementById("confirmpass").value;

    let isValid = true;

    if (name === "") {
        document.getElementById("nameMsg").innerText = "Name is required.";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailMsg").innerText = "Invalid email format.";
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById("passMsg").innerText = "Password must be 8 characters or more.";
        isValid = false;
    }

    if (password !== confirm) {
        document.getElementById("confirmMsg").innerText = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
}
);
