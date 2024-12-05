/* General Styles */
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
}

/* Hamburger Menu */
#menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.hamburger {
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  background: white;
  color: black;
}

.menu-links {
  display: none;
  flex-direction: column;
  background: black;
  position: absolute;
  padding: 10px;
}

.menu-links a {
  color: white;
  text-decoration: none;
  padding: 5px 0;
}

/* Static Elements */
// Hamburger Menu
document.querySelector(".hamburger").addEventListener("click", function () {
  const menuLinks = document.querySelector(".menu-links");
  menuLinks.style.display = menuLinks.style.display === "flex" ? "none" : "flex";
});

// Parallax Scrolling Effect
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.getElementById("stars-back").style.transform = `translateY(${scrollY * 0.1}px)`;
  document.getElementById("stars-mid").style.transform = `translateY(${scrollY * 0.3}px)`;
  document.getElementById("stars-front").style.transform = `translateY(${scrollY * 0.5}px)`;
});