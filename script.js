function showPage(page) {
    const titleImage = document.getElementById("page-title");
    const contentDiv = document.getElementById("page-content");

    if (pageData[page]) {
        titleImage.src = pageData[page].title;

        // List of content block files to load for this page
        const blocks = pageData[page].blocks;

        // Clear existing content
        contentDiv.innerHTML = "";

        // Dynamically fetch and load each content block
        blocks.forEach(blockFile => {
            fetch(blockFile)
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to load ${blockFile}`);
                    return response.text();
                })
                .then(html => {
                    // Append each block to the content container
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = html;
                    contentDiv.appendChild(tempDiv.firstChild);
                })
                .catch(error => {
                    console.error(error);
                });
        });
    }
}

// Example pageData object
const pageData = {
    home: {
        title: "Images/newtitlepng.png",
        blocks: ["Blocks/HomeBlockOne.html"] // Files for content blocks
    },
    about: {
        title: "Images/newtitlepng.png",
        blocks: ["Blocks/AboutBlockOne.html"]
    },
    news: {
        title: "Images/newtitlepng.png",
        blocks: ["Blocks/NewsBlockOne.html"]
    },
    team: {
        title: "Images/newtitlepng.png",
        blocks: ["Blocks/TeamBlockOne.html"]
    },
    donate: {
        title: "Images/newtitlepng.png",
        blocks: ["Blocks/DonateBlockOne.html"]
    }
};

// Load the default page on load
window.onload = () => {
    showPage("home");
};




function updateParallax(scrollY) {
    document.querySelector('.background').style.transform = `translateY(${scrollY * -0.002}px)`;
    document.querySelector('.stars-layer1').style.transform = `translateY(${scrollY * -0.003}px)`;
    document.querySelector('.stars-layer2').style.transform = `translateY(${scrollY * -0.004}px)`;
    document.querySelector('.stars-layer3').style.transform = `translateY(${scrollY * -0.005}px)`;
    document.querySelector('.stars-layer4').style.transform = `translateY(${scrollY * -0.006}px)`;
    document.querySelector('.stars-layer5').style.transform = `translateY(${scrollY * -0.008}px)`;
    document.querySelector('.stars-layer6').style.transform = `translateY(${scrollY * -0.02}px)`;
}



function updateViewportHeight() {
    const vh = window.innerHeight * 0.01; // 1vh in pixels
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Update viewport height on load and resize
updateViewportHeight();
window.addEventListener('resize', updateViewportHeight);

let lastScrollY = 0;
let ticking = false;




document.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax(lastScrollY);
            ticking = false;
        });
        ticking = true;
    }
});





// Get all buttons with the onclick functionality
const buttons = document.querySelectorAll('.menu-bar button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'auto' // Smooth scrolling effect
        });
    });
});



function forceRepaint() {
    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach(layer => {
        // Force a repaint by toggling a CSS class
        layer.style.display = 'none';
        requestAnimationFrame(() => {
            layer.style.display = '';
        });
    });
}

// Trigger on resize or scroll
window.addEventListener('resize', forceRepaint);


