// Toggle Dropdown Menus
document.querySelectorAll("nav ul li").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const dropdown = item.querySelector(".dropdown");
    if (dropdown) dropdown.style.display = "block";
  });

  item.addEventListener("mouseleave", () => {
    const dropdown = item.querySelector(".dropdown");
    if (dropdown) dropdown.style.display = "none";
  });
});

// Smooth Scroll to Sections
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form Validation
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting by default
  const name = contactForm.querySelector('input[placeholder="Your Name"]');
  const email = contactForm.querySelector('input[placeholder="Your Email"]');
  const message = contactForm.querySelector(
    'textarea[placeholder="Your Message"]'
  );

  if (!name.value.trim()) {
    alert("Please enter your name.");
    name.focus();
    return;
  }

  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return;
  }

  if (!message.value.trim()) {
    alert("Please enter your message.");
    message.focus();
    return;
  }

  alert("Thank you! Your message has been sent.");
  contactForm.reset(); // Clear the form
});

// Validate Email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
