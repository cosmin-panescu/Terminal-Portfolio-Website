function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("btn-message").classList.add("show");
  }, 3000);

  document
    .getElementById("close-btn")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Evită activarea altor evenimente
      document.getElementById("btn-message").classList.remove("show");
    });
});
