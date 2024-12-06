/* Static Elements */
// Hamburger Menu
document.querySelector(".hamburger").addEventListener("click", function () {
  const menuLinks = document.querySelector(".menu-links");
  menuLinks.style.display = menuLinks.style.display === "flex" ? "none" : "flex";
});

// Parallax Scrolling Effect
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.getElementById("stars-back").style.transform = `translateY(${scrollY * 0.9}px)`;
  document.getElementById("stars-mid").style.transform = `translateY(${scrollY * 0.3}px)`;
  document.getElementById("stars-front").style.transform = `translateY(${scrollY * 0.1}px)`;
});
