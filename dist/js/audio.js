function changeCurrentTime(){newCurrentTime=this.value,audio.currentTime=newCurrentTime}function updateProgressBar(){currenTime=audio.currentTime,progressBarAudio.value=currenTime}function restartAudio(){currentStateAudio.classList.remove("icon-pause"),currentStateAudio.classList.add("icon-play")}function changeVolume(){var e=inputVolume.value;audio.volume=e,changeIconVolume(),inputMutedAudio.checked=audio.volume>0?!1:!0}function mutedAudio(){this.checked?(audio.muted=!0,inputVolume.value=minVolumen):(audio.muted=!1,inputVolume.value=maxVolumen),changeVolume()}function loopAudio(){audio.loop=this.checked?!0:!1}function playPauseAuido(e){var u=audio.duration;progressBarAudio.setAttribute("max",u),audio.paused?(audio.play(),currentStateAudio.classList.remove("icon-play"),currentStateAudio.classList.add("icon-pause")):(audio.pause(),currentStateAudio.classList.remove("icon-pause"),currentStateAudio.classList.add("icon-play")),changeIconVolume()}function changeIconVolume(){var e=Number(inputVolume.value);audio.muted=!1,currentIconVolume.className="",0==e?currentIconVolume.classList.add("icon-silenciado"):mediumVolumen>e?currentIconVolume.classList.add("icon-volumenBajo"):e>mediumVolumen?currentIconVolume.classList.add("icon-volumenAlto"):e==mediumVolumen&&currentIconVolume.classList.add("icon-volumenMedio")}var audio=new Audio("/audio/audiop.mp3"),minVolumen=0,maxVolumen=1,mediumVolumen=maxVolumen/2,currenTime=0,progressBarAudio=document.getElementById("barraDePorgresoAudio_js"),currentStateAudio=document.getElementById("estadoActualAudio_js"),currentIconVolume=document.getElementById("htmlSpanIconoVolumenActual_js"),inputMutedAudio=document.getElementById("silenciarAudio_js"),inputVolume=document.getElementById("volumenAudio_js"),buttonPlayPauseAudio=document.getElementById("reproductorMusica_js"),buttonLoop=document.getElementById("repetirAudio_js");buttonPlayPauseAudio.addEventListener("click",playPauseAuido),buttonLoop.addEventListener("change",loopAudio),inputMutedAudio.addEventListener("change",mutedAudio),inputVolume.addEventListener("change",changeVolume),progressBarAudio.addEventListener("change",changeCurrentTime),audio.addEventListener("timeupdate",updateProgressBar),audio.addEventListener("ended",restartAudio);