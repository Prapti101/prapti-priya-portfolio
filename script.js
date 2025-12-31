// ===============================
// Run JS only AFTER DOM is ready
// ===============================
document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // EmailJS Initialization
  // ===============================
  emailjs.init("Uj-2LPvdX3qIRZ3nB"); // PUBLIC KEY


  // ===============================
  // Smooth Scroll for Navbar Links
  // ===============================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });


  // ===============================
  // Contact Form (EmailJS)
  // ===============================
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      formStatus.textContent = "Sending message...";

      emailjs.sendForm(
        "service_c2cs5e9",   // SERVICE ID
        "template_fnh3qms",  // TEMPLATE ID
        this
      ).then(
        () => {
          formStatus.textContent = "Message sent successfully! 😊";
          contactForm.reset();
        },
        (error) => {
          formStatus.textContent = "Failed to send message. Please try again.";
          console.error("EmailJS Error:", error);
        }
      );
    });
  }


  // ===============================
  // Dark Mode (FIXED + WORKING)
  // ===============================
  const darkToggle = document.getElementById("darkToggle");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (darkToggle) darkToggle.textContent = "☀️";
  } else {
    if (darkToggle) darkToggle.textContent = "🌙";
  }

  // Toggle theme
  if (darkToggle) {
    darkToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        darkToggle.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        darkToggle.textContent = "🌙";
      }
    });
  }

});
