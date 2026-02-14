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
    "\u{1F338} Days since we first met: " + diff1 + " days<br>\u{1F4AB} Days since I felt connected: " + diff2 + " days";
}
updateDays();

// ===========================
// PHOTO SLIDESHOW
// ===========================
// ===========================
// PHOTO SLIDESHOW
// ===========================
const photos = ["photo1.jpeg","photo2.jpeg","photo3.jpeg"];

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
// CINEMATIC TYPING
// ===========================
function typeWriterCinematic(lines, elementId, lineDelay, charDelay){
  lineDelay = lineDelay || 600;
  charDelay = charDelay || 35;
  const element = document.getElementById(elementId);
  element.innerHTML = "";
  let lineIndex = 0;

  function typeLine(){
    if(lineIndex >= lines.length){
      element.innerHTML += "<span class='cursor'>|</span>";
      return;
    }
    let i = 0;
    const currentLine = lines[lineIndex];
    function typeChar(){
      if(i < currentLine.length){
        element.innerHTML += currentLine.charAt(i);
        i++;
        setTimeout(typeChar, charDelay);
      } else {
        element.innerHTML += "<br><br>";
        lineIndex++;
        setTimeout(typeLine, lineDelay);
      }
    }
    typeChar();
  }
  typeLine();
}

// ===========================
// FLOATING HEARTS
// ===========================
function createHearts() {
  for(let i=0; i<30; i++){
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (Math.random()*3 + 3) + "s";
    document.body.appendChild(heart);
  }
}
createHearts();

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

// ===========================
// VALENTINE QUESTION
// ===========================
function showValentineQuestion(){
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const question = document.createElement("h1");
  question.innerText = "Will you be my Valentine or partner? \u{1F496}";
  container.appendChild(question);

  const yesBtn = document.createElement("button");
  yesBtn.innerText = "Yes \u{1F60D}";
  yesBtn.onclick = function(){ celebrate("partner"); };

  const noBtn = document.createElement("button");
  noBtn.innerText = "No \u{1F60C}";
  noBtn.onclick = function(){ askBestPerson(); };

  const maybeBtn = document.createElement("button");
  maybeBtn.innerText = "Maybe / Best Friend \u{1F338}";
  maybeBtn.onclick = function(){ celebrate("friend"); };

  container.appendChild(yesBtn);
  container.appendChild(noBtn);
  container.appendChild(maybeBtn);
}

// ===========================
// ASK BEST PERSON
// ===========================
function askBestPerson(){
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const question = document.createElement("h1");
  question.innerText = "Would you still like to stay the best person in my life? \u{1F49B}";
  container.appendChild(question);

  const yesBtn = document.createElement("button");
  yesBtn.innerText = "Yes \u{1F338}";
  yesBtn.onclick = function(){ celebrate("friend"); };

  const noBtn = document.createElement("button");
  noBtn.innerText = "No \u{1F614}";
  noBtn.onclick = function(){ celebrate("none"); };

  container.appendChild(yesBtn);
  container.appendChild(noBtn);
}

// ===========================
// CELEBRATION MESSAGES
// ===========================
function celebrate(choice){
  const container = document.querySelector(".container");
  container.innerHTML = "";

  if(choice === "partner")
    container.innerHTML = "<h1 style='margin-top:150px;color:white;'>You just made me the happiest person alive \u{1F496}\u2728</h1>";
  else if(choice === "friend")
    container.innerHTML = "<h1 style='margin-top:150px;color:white;'>I’m grateful to still have you as the best person in my life \u{1F338}\u{1F49B}</h1>";
  else
    container.innerHTML = "<h1 style='margin-top:150px;color:white;'>I respect your choice \u{1F339}</h1>";

  for(let i=0; i<30; i++){
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random()*100+"vw";
    heart.style.animationDuration = (Math.random()*3+3)+"s";
    document.body.appendChild(heart);
  }
}

const music = document.getElementById("bgMusic");
music.volume = 0.3; // optional: reduce volume
music.play();


