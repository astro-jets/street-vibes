// PRESS THE MENU BUTTON TO TRIGGER ANIMATION
// PRESS PLAY BUTTON TO LISTEN THE DEMO SONG

// As seen on: "https://dribbble.com/shots/2144866-Day-5-Music-Player-Rebound/"

// THANK YOU!
window.onload = ()=>{
var audio = document.getElementById('audio');
var playpause = document.getElementById("play");
const allMuisc = document.querySelectorAll("#music-item");

allMuisc.forEach((m) => {
   m.addEventListener("click", () => {
      audio.firstChild.nextElementSibling.attributes[0].value ="player/"+ m.getAttribute("data-music")
      togglePlayPause();
   });
});

function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "Pause";
      audio.play();
   } else {
      playpause.title = "Play";
      audio.pause();
   }
}
}