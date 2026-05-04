/* =========================
   LOAD COMPONENTS
========================= */
async function loadComponent(id, filePath) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error("Failed to load " + filePath);
    element.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

/* =========================
   APPLY THEME
========================= */
function applyTheme(theme) {
  const html = document.documentElement;

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    html.setAttribute("data-theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    html.setAttribute("data-theme", "light");
  }

  localStorage.setItem("theme", theme);

  const icon = document.getElementById("theme-toggle");
  if (icon) {
    icon.innerHTML =
      theme === "dark"
        ? `<i class="fas fa-sun"></i>`
        : `<i class="fas fa-moon"></i>`;
  }
}

/* =========================
   APPLY RTL / LTR
========================= */
function applyDirection(dir) {
  document.documentElement.setAttribute("dir", dir);
  localStorage.setItem("dir", dir);

  reverseNavLinks(dir);
}

/* =========================
   NAV ORDER FIX (LTR / RTL)
========================= */
function reverseNavLinks(dir) {
  const nav = document.querySelector(".nav-links");
  if (!nav) return;

  // Save original order ONCE
  if (!nav.dataset.original) {
    nav.dataset.original = "true";
    nav._originalItems = Array.from(nav.children);
  }

  const items = nav._originalItems;

  nav.innerHTML = "";

  if (dir === "rtl") {
    // RTL: Dashboard → Home
    [...items].reverse().forEach(item => nav.appendChild(item));
  } else {
    // LTR: Home → Dashboard
    items.forEach(item => nav.appendChild(item));
  }
}

/* =========================
   ACTIVE MENU LINK
========================= */
function setActiveMenu() {
  const links = document.querySelectorAll(".nav-link, .mobile-links a");

  const currentPath = window.location.pathname.split("/").pop().trim();

  links.forEach((link) => {
    const href = link.getAttribute("href")?.split("/").pop().trim();

    link.classList.remove("active");

    if (href === currentPath) {
      link.classList.add("active");
    }
  });
}

/* =========================
   NAVBAR INTERACTIONS
========================= */
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdowns = document.querySelectorAll(".has-dropdown");

  /* Toggle Mobile Menu */
  hamburger?.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  });

  /* Dropdown click (tablet/mobile) */
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector(".nav-link");

    link?.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();

        dropdowns.forEach((d) => {
          if (d !== dropdown) d.classList.remove("open");
        });

        dropdown.classList.toggle("open");
      }
    });
  });

  /* Close outside click */
  document.addEventListener("click", (e) => {
    if (
      mobileMenu?.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });
}

/* =========================
   INIT BUTTONS
========================= */
function initControls() {
  const themeBtn = document.getElementById("theme-toggle");
  const rtlBtn = document.getElementById("rtl-toggle");

  const savedTheme = localStorage.getItem("theme") || "light";
  const savedDir = localStorage.getItem("dir") || "ltr";

  applyTheme(savedTheme);
  applyDirection(savedDir);

  /* Theme toggle */
  themeBtn?.addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* RTL toggle */
  rtlBtn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("dir");
    applyDirection(current === "rtl" ? "ltr" : "rtl");
  });
}

/* =========================
   INIT APP
========================= */
document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar", "../components/navbar.html");
  await loadComponent("footer", "../components/footer.html");

  initNavbar();
  initControls();
  setActiveMenu();
});