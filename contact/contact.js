
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    formStatus.textContent = "Your message has been sent successfully!";
    formStatus.style.color = "#ff4d6d";

    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
    }, 4000);
  });
}


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      faq.querySelector(".faq-answer").style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});