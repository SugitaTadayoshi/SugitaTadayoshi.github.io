// header-include.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("../../header.html") // Adjust the path to go up two levels
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      // Update active state for current page
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll("nav a");

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        }
      });
    })
    .catch((error) => {
      console.error("Error loading header:", error);
      document.getElementById("header-container").innerHTML =
        '<p style="color: red">Error loading header. Check console for details.</p>';
    });
});
