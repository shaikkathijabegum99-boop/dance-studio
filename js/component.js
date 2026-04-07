
async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const html = await response.text();
    el.innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
  }
}


function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const desktopThemeIcon = document.getElementById("theme-toggle");
  const mobileThemeIcon = document.getElementById("mobile-theme-toggle");

  const iconHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  if (desktopThemeIcon) desktopThemeIcon.innerHTML = iconHTML;
  if (mobileThemeIcon) mobileThemeIcon.innerHTML = iconHTML;
}


function applyDirection(dir) {
  document.documentElement.setAttribute("dir", dir);
  localStorage.setItem("dir", dir);
}

function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");

      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
    });
  }
}


function initThemeToggle() {
  const desktopToggle = document.getElementById("theme-toggle");
  const mobileToggle = document.getElementById("mobile-theme-toggle");

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  [desktopToggle, mobileToggle].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-mode");
        applyTheme(isDark ? "light" : "dark");
      });
    }
  });
}


function initRTLToggle() {
  const desktopRTL = document.getElementById("rtl-toggle");
  const mobileRTL = document.getElementById("mobile-rtl-toggle");

  const savedDir = localStorage.getItem("dir") || "ltr";
  applyDirection(savedDir);

  [desktopRTL, mobileRTL].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", () => {
        const currentDir = document.documentElement.getAttribute("dir");
        applyDirection(currentDir === "rtl" ? "ltr" : "rtl");
      });
    }
  });
}


document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar", "../components/navbar.html");
  await loadComponent("footer", "../components/footer.html");

  // IMPORTANT: initialize only AFTER components load
  initNavbar();
  initThemeToggle();
  initRTLToggle();
});