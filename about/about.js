

document.addEventListener("DOMContentLoaded", () => {
  initCounterAnimation();
  initRevealAnimation();
});


function initCounterAnimation() {
  const counters = document.querySelectorAll(".counter");

  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        animateCounter(counter, target);
        obs.unobserve(counter);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(el, target) {
  let current = 0;
  const duration = 1800;
  const increment = target / (duration / 16);

  function updateCounter() {
    current += increment;

    if (current < target) {
      el.textContent = formatCounterValue(Math.floor(current), target);
      requestAnimationFrame(updateCounter);
    } else {
      el.textContent = formatCounterValue(target, target);
    }
  }

  updateCounter();
}

function formatCounterValue(value, target) {
  if (target >= 1000) {
    return value >= 1000 ? (value / 1000).toFixed(value >= 10000 ? 0 : 1).replace(".0", "") + "K+" : value + "+";
  }
  return value + "+";
}


function initRevealAnimation() {
  const revealElements = document.querySelectorAll(`
    .about-hero-content,
    .about-hero-image-wrap,
    .story-image-wrap,
    .story-content,
    .why-about-card,
    .timeline-item,
    .stat-box,
    .team-card,
    .about-cta-box
  `);

  revealElements.forEach((el) => {
    el.classList.add("reveal-up");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 80);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}