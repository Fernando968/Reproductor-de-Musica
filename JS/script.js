const Play_btn = document.getElementById("play")
const Pause_btn = document.getElementById("pause")
const audio = document.getElementById("audio")
const Stop_btn = document.getElementById("stop")
const imagen = document.getElementById("imagen")
const barra = document.getElementById("barra")
const volume_up_btn = document.getElementById("volume-up")
const volume_down_btn = document.getElementById("volume-down")

let isplaying = false;

Play_btn.addEventListener('click',()=>{
    audio.play();
    imagen.style.animationPlayState = "running"
})
Stop_btn.addEventListener('click',()=>{
    audio.pause();
    audio.currentTime = 0;
    imagen.style.animationPlayState = "paused"
})
Pause_btn.addEventListener('click',()=>{
    audio.pause();
    imagen.style.animationPlayState = "paused"
})
window.addEventListener("load",()=>{
    barra.max = audio.duration;
    setInterval(() => {
        barra.value = audio.currentTime;
    
    }, 500)
})
barra.addEventListener("change", ()=>{
    audio.currentTime = barra.value;

})
volume_up_btn.addEventListener('click', () =>{
    audio.volume = audio.volume + 0.1;
})
volume_down_btn.addEventListener('click', () =>{
    audio.volume = audio.volume - 0.1;
})
document.addEventListener("keyup", (event) =>{
    if(event.key == "ArrowUp"){
        audio.volume = audio.volume + 0.1;
    }
    else if(event.key == "ArrowDown"){
        audio.volume = audio.volume - 0.1;
    }
})
document.addEventListener("keyup", (event)=> {
    if(event.keyCode == 32){
        if(isplaying){
            audio.pause();
            imagen.style.animationPlayState = "paused"
            isplaying = false;
        }
        else{
            audio.play();
            imagen.style.animationPlayState = "running"
            isplaying = true;
        }
    }
})