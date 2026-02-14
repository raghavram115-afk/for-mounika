window.onload = function () {

  // ----------- FALLING HEARTS -----------

const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300);
}



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

// ===========================
// STORY FLOW
// ===========================
let step = 0;
function next(){
  const text = document.getElementById("text");

  if(step === 0){
    text.innerHTML = "December 28th, 2024 \u{1F338}<br><br>The day I first saw you.";
  } else if(step === 1){
    text.innerHTML = "March 10th, 2025 \u{1F4AB}<br><br>The day I felt connected to you.";
  } else if(step === 2){
    text.innerHTML = "Since then…<br><br>Every little moment with you has meant something to me \u2764\uFE0F";
  } else if(step === 3){
    const cinematicLines = [
      "I know I may not be everything you are looking for…",
      "But this is me.",
      "Lately, I feel like you’ve been a little distant from me…",
      "I know I did something last week that may have upset you, but my intention was never to hurt you.",
      "I just want honesty between us.",
      "And no matter what… I would always try to make you feel special."
    ];
    typeWriterCinematic(cinematicLines,"text",700,40);
  } else if(step === 4){
    showValentineQuestion();
  }

  step++;
}

// ----------- VALENTINE QUESTION -----------

function showValentineQuestion() {
  const main = document.getElementById("mainContent");
  const valentine = document.getElementById("valentineSection");

  if (main && valentine) {
    main.style.display = "none";
    valentine.style.display = "block";
  }
}
