// script.js

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Example: show an alert when the user clicks on the title
  const title = document.querySelector(".main-title");

  if (title) {
    title.addEventListener("click", function () {
      alert("Welcome to Meyahona Team's website!");
    });
  }

  // Example: highlight contact section on hover
  const contactSection = document.querySelector(".contact-section");

  if (contactSection) {
    contactSection.addEventListener("mouseenter", function () {
      contactSection.style.backgroundColor = "#f0f0f0";
    });

    contactSection.addEventListener("mouseleave", function () {
      contactSection.style.backgroundColor = "";
    });
  }
});
