document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");

  this.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-links li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const navLinksContainer = document.getElementById("nav-links");
    navLinksContainer.classList.remove("active");

    document.getElementById("hamburger").classList.remove("active");
  });
});
