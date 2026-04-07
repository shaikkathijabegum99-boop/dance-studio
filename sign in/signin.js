
const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();

    if (!email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Sign in successful! Redirecting...");
    window.location.href = "../home/home1.html";
  });
}


const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const icon = this.querySelector("i");

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
});