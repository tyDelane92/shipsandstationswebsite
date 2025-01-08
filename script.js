const pageData = {
    home: {
        title: "home.png",
        content: "<p>Welcome to our homepage!</p>"
    },
    news: {
        title: "about.png",
        content: "<p>Learn more about us on this page.</p>"
    },
    about: {
        title: "services.png",
        content: "<p>Explore the services we offer.</p>"
    },
    team: {
        title: "portfolio.png",
        content: "<p>View our portfolio to see our work.</p>"
    },
    pay: {
        title: "contact.png",
        content: "<p>Get in touch with us here.</p>"
    }
};

function showPage(page) {
    const titleImage = document.getElementById('page-title');
    const contentDiv = document.getElementById('page-content');

    if (pageData[page]) {
        titleImage.src = pageData[page].title;
        contentDiv.innerHTML = pageData[page].content;
    }
}

window.onload = () => {
    showPage('home');
};
