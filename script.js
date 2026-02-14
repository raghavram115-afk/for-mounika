// ----------- PHOTO SLIDESHOW -----------

const photos = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg",
  "photo5.jpeg"
];

let index = 0;
const photoElement = document.getElementById("photo");

function showNextPhoto() {
  photoElement.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % photos.length;
    photoElement.src = photos[index];
    photoElement.style.opacity = 1;
  }, 500);
}

setInterval(showNextPhoto, 3000);


// ----------- TYPING MESSAGE -----------

const message = "the day I first saw you changed something inside me. I am feeling that you are distancing lately. I did something but my intention was never to hurt you.";

const typingElement = document.getElementById("typingText");

let i = 0;

function typeWriter() {
  if (i < message.length) {
    typingElement.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();


// ----------- VALENTINE QUESTION -----------

function showValentineQuestion() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("valentineSection").style.display = "block";
}


// ----------- MUSIC BUTTON -----------

const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playMusicBtn");

if (playBtn) {
  playBtn.addEventListener("click", function() {
    music.play();
    music.volume = 0.3;
    playBtn.style.display = "none";
  });
}
