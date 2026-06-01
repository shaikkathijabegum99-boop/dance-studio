document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("themeToggle");
  const rtlToggle = document.getElementById("rtlToggle");

  /* =========================
     LOAD SAVED THEME
  ========================= */

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  /* =========================
     LOAD SAVED DIRECTION
  ========================= */

  const savedDir = localStorage.getItem("dir");

  if (savedDir === "rtl") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }

  /* =========================
     THEME TOGGLE
  ========================= */

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

      const isDark =
        document.body.classList.contains("dark-mode");

      localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
      );

      themeToggle.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });
  }

  /* =========================
     RTL TOGGLE
  ========================= */

  if (rtlToggle) {
    rtlToggle.addEventListener("click", () => {

      const currentDir =
        document.documentElement.getAttribute("dir");

      const newDir =
        currentDir === "rtl" ? "ltr" : "rtl";

      document.documentElement.setAttribute(
        "dir",
        newDir
      );

      localStorage.setItem("dir", newDir);
    });
  }

});