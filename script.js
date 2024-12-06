function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '60px' : '250px';
}

function toggleMute() {
    const audio = document.getElementById('background-music');
    const volumeToggle = document.getElementById('volume-toggle');
    audio.muted = !audio.muted;
    volumeToggle.textContent = audio.muted ? '🔇' : '🔊';
}

function setVolume(value) {
    const audio = document.getElementById('background-music');
    audio.volume = value;
}

window.onload = function () {
    const audio = document.getElementById('background-music');
    audio.play();
};