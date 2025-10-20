const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".dashboard-button");

links.forEach(link => {
if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
}
});

const buttons = document.querySelectorAll(".dashboard-button");
  const sections = document.querySelectorAll(".section");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active from all buttons
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Hide all sections
      sections.forEach(section => section.classList.remove("active-section"));

      // Get target ID from href (like #dashboard)
      const targetId = button.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.classList.add("active-section");
      }
    });
  });
