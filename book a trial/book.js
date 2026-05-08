const trialForm = document.getElementById("trialForm");
const successPopup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");
const dateInput = document.getElementById("date");


const today = new Date().toISOString().split("T")[0];
dateInput.min = today;


trialForm.addEventListener("submit", function (e) {
  e.preventDefault();


  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !phone || !email) {
    alert("Please fill in all required fields.");
    return;
  }


  successPopup.classList.add("show");


  trialForm.reset();


  dateInput.min = today;
});


closePopup.addEventListener("click", function () {
  successPopup.classList.remove("show");
});


successPopup.addEventListener("click", function (e) {
  if (e.target === successPopup) {
    successPopup.classList.remove("show");
  }
});
/* =========================================
   DARK MODE + RTL TOGGLE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("themeToggle");
  const rtlToggle = document.getElementById("rtlToggle");

  /* =========================================
     LOAD SAVED THEME
  ========================================= */

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
      themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    }
  }

  /* =========================================
     THEME TOGGLE
  ========================================= */

  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");

      localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
      );

      themeToggle.innerHTML = isDark
        ? `<i class="fas fa-sun"></i>`
        : `<i class="fas fa-moon"></i>`;
    });

  }

  /* =========================================
     LOAD RTL
  ========================================= */

  const savedDir = localStorage.getItem("dir");

  if (savedDir) {
    document.documentElement.setAttribute("dir", savedDir);
  }

  /* =========================================
     RTL TOGGLE
  ========================================= */

  if (rtlToggle) {

    rtlToggle.addEventListener("click", () => {

      const html = document.documentElement;

      const currentDir = html.getAttribute("dir");

      const newDir =
        currentDir === "rtl" ? "ltr" : "rtl";

      html.setAttribute("dir", newDir);

      localStorage.setItem("dir", newDir);

    });

  }

});