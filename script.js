window.onload = function () {

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

  if (photoElement) {
    function showNextPhoto() {
      photoElement.style.opacity = 0;

      setTimeout(() => {
        index = (index + 1) % photos.length;
        photoElement.src = photos[index];
        photoElement.style.opacity = 1;
      }, 500);
    }

    setInterval(showNextPhoto, 3000);
  }

  // ----------- TYPING MESSAGE -----------

  const message = "the day I first saw you changed something inside me. I am feeling that you are distancing lately. I did something but my intention was never to hurt you.";

  const typingElement = document.getElementById("typingText");

  if (typingElement) {
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typingElement.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    typeWriter();
  }

  // ----------- MUSIC BUTTON -----------

  const music = document.getElementById("bgMusic");
  const playBtn = document.getElementById("playMusicBtn");

  if (playBtn && music) {
    playBtn.addEventListener("click", function () {
      music.play();
      music.volume = 0.3;
      playBtn.style.display = "none";
    });
  }

};

// ----------- VALENTINE QUESTION -----------

function showValentineQuestion() {
  const main = document.getElementById("mainContent");
  const valentine = document.getElementById("valentineSection");

  if (main && valentine) {
    main.style.display = "none";
    valentine.style.display = "block";
  }
}
