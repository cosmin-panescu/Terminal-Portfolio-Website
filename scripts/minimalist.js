document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".notification-container").classList.add("show");
  }, 10000);

  setTimeout(() => {
    document.querySelector(".notification-container").classList.remove("show");
  }, 15000);
});
