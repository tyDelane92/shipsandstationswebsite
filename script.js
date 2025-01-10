const pageData = {
    home: {
        title: "newtitlepng.png",
        content: "<p>Welcome to our homepage! Stay updated with the latest news.</p>"
    },
    about: {
        title: "newtitlepng.png",
        content: "<p>Learn more about our mission and values here.</p>"
    },
    services: {
        title: "newtitlepng.png",
        content: "<p>Discover the services we proudly offer to our customers.</p>"
    },
    portfolio: {
        title: "newtitlepng.png",
        content: "<p>Meet our team and explore our past projects.</p>"
    },
    contact: {
        title: "newtitlepng.png",
        content: "<p>Support us by donating or get in touch with us today!</p>"
    }
};

function showPage(page) {
    const titleImage = document.getElementById("page-title");
    const contentDiv = document.getElementById("page-content");

    if (pageData[page]) {
        titleImage.src = pageData[page].title;
        contentDiv.innerHTML = pageData[page].content;
    }
}

// Show default page on load
window.onload = () => {
    showPage("home");
};