window.onload = ()=>{
   const allMuisc = document.querySelectorAll("#music-item");
   let isPlaying = false;
   let currentSong = {id:"",song:"",prev:""};

   allMuisc.forEach((m) => {
      m.addEventListener("click", () => {
         let work = m.parentElement;
         let audio = work.querySelector("#audio");
         const playBtn = work.querySelector(".bi-play");
         const pauseBtn = work.querySelector(".bi-pause");
         
         if(currentSong.song === audio.src || currentSong.song === "")
         {            
            if(isPlaying){
               pauseSong(audio,pauseBtn);
            }
            else{
               currentSong.song = audio.src;
               currentSong.id = audio.id;
               currentSong.prev = work;
               playSong(audio,playBtn);
            }
         }
         
         else
         {
            let prevSong = currentSong.prev.querySelector("#audio");
            let pb = currentSong.prev.querySelector(".bi-pause");
            pauseSong(prevSong,pb)
            currentSong.song = audio.src;
            currentSong.id = audio.id;
            currentSong.prev = work;
            playSong(audio,playBtn);
         }
      });
   });

   function playSong(audio,playBtn)
   {
      audio.play();
      playBtn.classList.remove("bi-play")
      playBtn.classList.add("bi-pause")
      isPlaying = true;
   }

   function pauseSong(audio,pauseBtn)
   {
      audio.pause();
      pauseBtn.classList.remove("bi-pause")
      pauseBtn.classList.add("bi-play")
      isPlaying = false;
   }

}