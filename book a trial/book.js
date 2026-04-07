const trialForm = document.getElementById("trialForm");
const successPopup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");
const dateInput = document.getElementById("date");

// Set minimum date to today
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;

// Handle form submit
trialForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Optional simple validation
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !phone || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  // Show success popup
  successPopup.classList.add("show");

  // Reset form
  trialForm.reset();

  // Reset min date again after reset
  dateInput.min = today;
});

// Close popup
closePopup.addEventListener("click", function () {
  successPopup.classList.remove("show");
});

// Close popup on outside click
successPopup.addEventListener("click", function (e) {
  if (e.target === successPopup) {
    successPopup.classList.remove("show");
  }
});