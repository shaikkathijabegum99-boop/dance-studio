
const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();

    if (!email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Sign in successful! Redirecting...");
    window.location.href = "../home/home1.html";
  });
}


const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const icon = this.querySelector("i");

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
});
/* ===========================
   THEME TOGGLE
=========================== */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const icon = themeToggle.querySelector("i");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

});

/* ===========================
   RTL TOGGLE
=========================== */

const rtlToggle = document.getElementById("rtlToggle");

rtlToggle.addEventListener("click", () => {

  const html = document.documentElement;

  if (html.getAttribute("dir") === "rtl") {
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", "en");
  } else {
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");
  }

});