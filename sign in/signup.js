/* =========================================
   PASSWORD SHOW / HIDE
========================================= */

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const targetId = button.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const icon = button.querySelector("i");

    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }

  });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

/* LOAD SAVED THEME */
if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark-mode");

  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");

}

/* TOGGLE THEME */
themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

    localStorage.setItem("theme", "dark");

  } else {

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");

    localStorage.setItem("theme", "light");

  }

});


/* =========================================
   RTL / LTR TOGGLE
========================================= */

const dirToggle = document.getElementById("dirToggle");
const html = document.documentElement;

/* LOAD SAVED DIRECTION */
const savedDir = localStorage.getItem("direction");

if (savedDir) {

  html.setAttribute("dir", savedDir);

  dirToggle.innerText = savedDir === "rtl" ? "LTR" : "RTL";

}

/* TOGGLE DIRECTION */
dirToggle.addEventListener("click", () => {

  const currentDir = html.getAttribute("dir");

  if (currentDir === "ltr") {

    html.setAttribute("dir", "rtl");
    dirToggle.innerText = "LTR";

    localStorage.setItem("direction", "rtl");

  } else {

    html.setAttribute("dir", "ltr");
    dirToggle.innerText = "RTL";

    localStorage.setItem("direction", "ltr");

  }

});


/* =========================================
   SIGNUP FORM
========================================= */

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  /* VALIDATION */
  if (password !== confirmPassword) {

    alert("Passwords do not match.");
    return;

  }

  if (password.length < 6) {

    alert("Password must be at least 6 characters.");
    return;

  }

  /* SUCCESS */
  alert(`Welcome ${fullName}! Your account has been created successfully.`);

  console.log({
    fullName,
    email,
    phone
  });

  signupForm.reset();

});