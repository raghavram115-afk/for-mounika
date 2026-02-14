let step = 0;
/* SLIDESHOW */
const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let index = 0;
function fadeInPhoto(idx){
  const img = document.getElementById("slide");
  img.src = photos[idx];
  img.style.opacity = 0;
  let op = 0;
  const timer = setInterval(()=>{if(op>=1) clearInterval(timer); img.style.opacity=op; op+=0.02;},30);
}
setInterval(()=>{ index=(index+1)%photos.length; fadeInPhoto(index); },3000);

/* CINEMATIC TYPING */
function typeWriterCinematic(lines, elementId, lineDelay=600, charDelay=35){
  const element = document.getElementById(elementId);
  element.innerHTML="";
  let lineIndex=0;
  function typeLine(){
    if(lineIndex>=lines.length){ element.innerHTML+="<span class='cursor'>|</span>"; return; }
    let i=0; const currentLine=lines[lineIndex];
    function typeChar(){ if(i<currentLine.length){ element.innerHTML+=currentLine.charAt(i); i++; setTimeout(typeChar,charDelay); }
    else{ element.innerHTML+='<br><br>'; lineIndex++; setTimeout(typeLine,lineDelay); }}
    typeChar();
  }
  typeLine();
}

/* STORY FLOW */
function next(){
  const text = document.getElementById("text");
  if(step===0){ text.innerHTML="December 28th, 2024 🌸<br><br>That was the beginning."; }
  else if(step===1){ text.innerHTML="March 10th, 2025 💫<br><br>That was the day I truly felt connected to you."; }
  else if(step===2){ text.innerHTML="Since then…<br><br>Every little moment with you has meant something to me ❤️"; }
  else if(step===3){
    const cinematicLines=[
      "I know I may not be everything you are looking for…",
      "But this is me.",
      "Lately, I feel like you’ve been a little distant from me…",
      "I know I did something last week that may have upset you, but my intention was never to hurt you.",
      "I just want honesty between us.",
      "And no matter what… I would always try to make you feel special."
    ];
    typeWriterCinematic(cinematicLines,"text",700,40);
  }
  else if(step===4){
    const container=document.querySelector(".container");
    text.innerHTML="I know you may not accept this…<br><br>But I still want to ask:<br><br>Will you be my Valentine or partner? 💖";
    container.querySelectorAll("button").forEach(b=>b.remove());
    const yesBtn=document.createElement("button"); yesBtn.innerText="Yes 😍"; yesBtn.onclick=()=>celebrate("partner");
    const noBtn=document.createElement("button"); noBtn.innerText="No 😌"; noBtn.onclick=()=>askBestPerson();
    const maybeBtn=document.createElement("button"); maybeBtn.innerText="Maybe / Best Friend 🌸"; maybeBtn.onclick=()=>celebrate("friend");
    container.appendChild(yesBtn); container.appendChild(noBtn); container.appendChild(maybeBtn);
  }
  step++;
}

function askBestPerson(){
  const text=document.getElementById("text");
  text.innerHTML="Would you still like to stay the best person in my life? 💛";
  const container=document.querySelector(".container");
  container.querySelectorAll("button").forEach(b=>b.remove());
  const yesBtn=document.createElement("button"); yesBtn.innerText="Yes 🌸"; yesBtn.onclick=()=>celebrate("friend");
  const noBtn=document.createElement("button"); noBtn.innerText="No 😔"; noBtn.onclick=()=>celebrate("none");
  container.appendChild(yesBtn); container.appendChild(noBtn);
}

function celebrate(choice){
  const container=document.querySelector(".container"); container.innerHTML="";
  if(choice==="partner") container.innerHTML="<h1 style='margin-top:150px;color:white;'>You just made me the happiest person alive 💖✨</h1>";
  else if(choice==="friend") container.innerHTML="<h1 style='margin-top:150px;color:white;'>I’m grateful to still have you as the best person in my life 🌸💛</h1>";
  else container.innerHTML="<h1 style='margin-top:150px;color:white;'>I respect your choice 🌹</h1>";
  for(let i=0;i<30;i++){let heart=document.createElement("div"); heart.className="heart"; heart.style.left=Math.random()*100+"vw"; heart.style.animationDuration=(Math.random()*3+3)+"s"; document.body.appendChild(heart);}
}