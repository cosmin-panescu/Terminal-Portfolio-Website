function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".notification-container").classList.add("show");
  }, 10000);

  setTimeout(() => {
    document.querySelector(".notification-container").classList.remove("show");
  }, 15000);
});
