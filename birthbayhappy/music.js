

const music = new Audio('Happy Birthday To You.mp3');
music.volume = 0.5;

var c = document.getElementById('canvas');
c.addEventListener('click', () => {
    setTimeout(() =>{ music.play();})
})