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

document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Current scroll position

    // Adjust the background positions at different speeds
    document.querySelector('.stars-layer1').style.backgroundPositionY = `${scrollTop * -0.0015}px`; // Slowest
    document.querySelector('.stars-layer2').style.backgroundPositionY = `${scrollTop * -0.007}px`;
    document.querySelector('.stars-layer3').style.backgroundPositionY = `${scrollTop * -0.01}px`;
    document.querySelector('.stars-layer4').style.backgroundPositionY = `${scrollTop * -0.03}px`;
    document.querySelector('.stars-layer5').style.backgroundPositionY = `${scrollTop * -0.05}px`;
    document.querySelector('.stars-layer6').style.backgroundPositionY = `${scrollTop * -0.12}px`;
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