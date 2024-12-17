const volume = document.querySelector("#volume");
const icon = document.querySelector("#volume > i");
const audio = document.querySelector("audio");

volume.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');

    } else {
        audio.pause();
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    }
});

const params = new URLSearchParams(window.location.search);
const fromChrisText = document.querySelector('.name');
fromChrisText.textContent = params.get('name') || 'NhunCR';