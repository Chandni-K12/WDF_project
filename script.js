document.getElementById("eLibraryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const errorFields = [
    "elibIdError",
    "fullNameError",
    "emailError",
    "passwordError",
    "confirmPasswordError"
  ];
  errorFields.forEach(id => document.getElementById(id).innerText = "");

  const elibId = document.getElementById("elibId").value.trim();
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  if (elibId === "") {
    document.getElementById("elibIdError").innerText = "E-Library ID is required.";
    isValid = false;
  }

  if (fullName === "") {
    document.getElementById("fullNameError").innerText = "Full Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email address.";
    isValid = false;
  }

  if (password.length < 8) {
    document.getElementById("passwordError").innerText = "Password must be at least 8 characters.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("E-Library Registration Successful!");
  }
});
