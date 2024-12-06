function toggleDock() {
    const dockMenu = document.getElementById('dockMenu');
    dockMenu.classList.toggle('open');
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
    document.getElementById('background-music').play();
};
