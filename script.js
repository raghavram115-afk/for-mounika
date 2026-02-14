window.onload = function () {

  // ===========================
  // DAYS COUNTER
  // ===========================
  function updateDays() {
    const today = new Date();
    const firstMet = new Date("December 28, 2024");
    const connected = new Date("March 10, 2025");

    const diff1 = Math.floor((today - firstMet) / (1000*60*60*24));
    const diff2 = Math.floor((today - connected) / (1000*60*60*24));

    document.getElementById("daysBox").innerHTML =
      "Days since we first met: " + diff1 + " days<br>" +
      "Days since I felt connected: " + diff2 + " days";
  }
  updateDays();

  // ===========================
  // PHOTO SLIDESHOW (5 photos)
  // ===========================
  const photos = [
    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg"
  ];

  let index = 0;

  function fadeInPhoto(idx){
    const img = document.getElementById("slide");
    img.src = photos[idx];
    img.style.opacity = 0;
    let op = 0;
    const timer = setInterval(function(){
      if(op >= 1) clearInterval(timer);
      img.style.opacity = op;
      op += 0.02;
    }, 30);
  }

  setInterval(function(){
    index = (index + 1) % photos.length;
    fadeInPhoto(index);
  }, 3000);

  // ===========================
  // FLOATING HEARTS
  // ===========================
  const container = document.querySelector(".hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random()*3 + 3) + "s";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300);

};

// ===========================
// STORY FLOW
// ===========================
let step = 0;

function next(){
  const text = document.getElementById("text");

  if(step === 0){
    text.innerHTML = "December 28th, 2024<br><br>The day I first saw you.";
  }
  else if(step === 1){
    text.innerHTML = "March 10th, 2025<br><br>The day I felt connected to you.";
  }
  else if(step === 2){
    text.innerHTML = "Since then…<br><br>Every little moment with you has meant something to me.";
  }
  else if(step === 3){
    text.innerHTML = "I know I may not be everything you are looking for…<br><br>But this is me.<br><br>I would always try to make you feel special.";
  }
  else if(step === 4){
    showValentineQuestion();
  }

  step++;
}

// ===========================
// VALENTINE QUESTION
// ===========================
function showValentineQuestion(){
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const question = document.createElement("h1");
  question.innerText = "Will you be my Valentine or partner?";
  container.appendChild(question);

  const yesBtn = document.createElement("button");
  yesBtn.innerText = "Yes";
  yesBtn.onclick = function(){ celebrate("partner"); };

  const noBtn = document.createElement("button");
  noBtn.innerText = "No";
  noBtn.onclick = function(){ celebrate("friend"); };

  container.appendChild(yesBtn);
  container.appendChild(noBtn);
}

function celebrate(choice){
  const container = document.querySelector(".container");

  if(choice === "partner")
    container.innerHTML = "<h1 style='margin-top:150px;'>You just made me the happiest person alive.</h1>";
  else
    container.innerHTML = "<h1 style='margin-top:150px;'>No matter what, I respect your choice.</h1>";
}
