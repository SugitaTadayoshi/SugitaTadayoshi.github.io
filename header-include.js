// header-include.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("../../header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // Extract and append styles
      const styles = tempDiv.querySelector("style");
      if (styles) {
        document.head.appendChild(styles.cloneNode(true));
      }

      // Extract and append header content
      const header = tempDiv.querySelector("header");
      if (header) {
        document.getElementById("header-container").innerHTML =
          header.outerHTML;
      }

      // Extract and execute scripts
      const scripts = tempDiv.querySelector("script");
      if (scripts) {
        const newScript = document.createElement("script");
        newScript.textContent = scripts.textContent;
        document.body.appendChild(newScript);
      }

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
