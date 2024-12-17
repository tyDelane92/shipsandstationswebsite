const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

// Ensure these heights match the CSS sidebar height values
let collapsedSidebarHeight = "56px"; // Height in mobile view (collapsed)
let fullSidebarHeight = "calc(100vh - 32px)"; // Height in larger screen

// Toggle sidebar's collapsed state
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// Update sidebar height and menu toggle text
const toggleMenu = (isMenuActive) => {
  sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
  menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}

// Toggle menu-active class and adjust height
menuToggler.addEventListener("click", () => {
  toggleMenu(sidebar.classList.toggle("menu-active"));
});

// (Optional code): Adjust sidebar height on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 805) {
    sidebar.style.height = fullSidebarHeight;
  } else {
    sidebar.classList.remove("collapsed");
    sidebar.style.height = "auto";
    toggleMenu(sidebar.classList.contains("menu-active"));
  }
});

window.addEventListener("resize", () => {
    const content = document.querySelector(".content");
    if (window.innerWidth >= 805) {
        sidebar.style.height = fullSidebarHeight; // Full height for larger screens
        content.style.left = "85px"; // Offset for sidebar
        content.style.width = "calc(100% - 85px)"; // Remaining width
    } else {
        sidebar.classList.remove("collapsed"); // Reset sidebar for smaller screens
        sidebar.style.height = "auto";
        content.style.left = "0"; // Center content
        content.style.width = "100%"; // Full width
    }
});


// Select all nav items and pages
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

// Initialize active page variable
let activePage = "home"; // Default to "home" on startup

// Function to update the displayed page
function showPage(pageId) {
  // Hide all pages
  pages.forEach((page) => {
    page.style.display = "none";
  });

  // Show the target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = "block";
  } else {
    console.error(`Page with id "${pageId}" not found.`);
  }
}

// Show the initial active page
showPage(activePage);

// Add click event listeners to all nav items
navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const targetPage = item.getAttribute('data-page');

    // Check if the nav item has a data-page attribute
    if (targetPage) {
      e.preventDefault(); // Prevent default link behavior for internal navigation

      // Update the active page variable
      activePage = targetPage;
      showPage(activePage); // Update the visible page
    } else {
      // Allow the default behavior for links without data-page (like external links)
      console.log("External link clicked, allowing default behavior.");
    }
  });
});
