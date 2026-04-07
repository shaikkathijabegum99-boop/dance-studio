
document.addEventListener("DOMContentLoaded", () => {
  const animatedCards = document.querySelectorAll(
    ".premium-feature-card, .premium-program-card, .schedule-card, .premium-testimonial-card, .gallery-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-card");
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedCards.forEach((card) => {
    card.classList.add("fade-card");
    observer.observe(card);
  });
});