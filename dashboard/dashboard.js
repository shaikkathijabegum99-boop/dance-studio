
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("show");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 991 &&
    !sidebar.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    sidebar.classList.remove("show");
  }
});


const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dashboard-theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dashboard-theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

const savedTheme = localStorage.getItem("dashboard-theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme("light");
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setTheme(isDark ? "light" : "dark");
});


const dirToggle = document.getElementById("dirToggle");

function setDirection(direction) {
  document.documentElement.setAttribute("dir", direction);
  localStorage.setItem("dashboard-dir", direction);
}

const savedDir = localStorage.getItem("dashboard-dir");
if (savedDir) {
  setDirection(savedDir);
} else {
  setDirection("ltr");
}

dirToggle.addEventListener("click", () => {
  const currentDir = document.documentElement.getAttribute("dir");
  setDirection(currentDir === "ltr" ? "rtl" : "ltr");
});