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