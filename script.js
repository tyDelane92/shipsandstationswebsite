const pageData = {
    home: {
        title: "home.png",
        content: "<p>Welcome to our homepage!</p>"
    },
    news: {
        title: "news.png",
        content: "<p>Keep up to date with the latest ships and stations updates.</p>"
    },
    about: {
        title: "about.png",
        content: "<p>Learn more about the project.</p>"
    },
    team: {
        title: "team.png",
        content: "<p>Meet the talented team building this project.</p>"
    },
    pay: {
        title: "pay.png",
        content: "<p>Make a dontation.</p>"
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
