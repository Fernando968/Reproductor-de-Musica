const list_container = document.getElementById("list-container")
const audio = document.getElementById("audio");
const play_button = document.getElementById("play-button")
const prev_button = document.getElementById("prev-button")
const next_button = document.getElementById("next-button")
const cover_card_img = document.getElementById("cover-card-img");
const title_card = document.getElementById("title-card")
let is_playing = false;
let actual = 0;
let index = 0;

const canciones = [
    {
        id:1,
        title:"The Nights",
        audio:"Audios/Avicii-TheNights.mp3",
        cover:"Img/the-nights-artwork.jpg",
        artist:"Avicii"
    },
    {
        id:2,
        title:"GetLucky",
        audio:"Audios/DaftPunck-GetLucky.mp3",
        cover:"Img/GetLucky-DaftPunck.jpg",
        artist:"DaftPunck"
    },
    {
        id:3,
        title:"Alone",
        audio:"Audios/Alone-Marshmello.mp3",
        cover:"Img/Alone-Marshmello.jpg",
        artist:"Marshmello"
    },
    {
        id:4,
        title:"Darkside",
        audio:"Audios/Darkside-AlanWalker.mp3",
        cover:"Img/Darkside-AlanWalker.jpg",
        artist:"AlanWalker"
    },
    {
        id:5,
        title:"Waiting For Love",
        audio:"Audios/WaitingForLove-Avicii.mp3",
        cover:"Img/WaitingForLove-Avicii.jpg",
        artist:"Avicii"
    },
]

canciones.forEach((e)=>{
    list_container.insertAdjacentHTML("beforeend",
    `
     <div class="list-item" id="${e.id}">
        <img class="cover" src="${e.cover}" alt="${e.title}" />
        <div class="song-dates">
                <div>${e.title}</div>
                <div>${e.artist}</div>
        </div>
     </div>
    `
    )
})

const play_card = (obj_audio)=>{
    cover_card_img.src = obj_audio.cover;
}

const play_audio = (id) =>{
    const res = canciones.find((e)=>e.id ==id)
    if(res){
        audio.src = res.audio;
        audio.play();
        animation_active();
    }
};   

const animation_active = () =>{
    if(is_playing){
        cover_card_img.style.animationPlayState = "running";
    }
    else{
        cover_card_img.style.animationPlayState = "paused";
    }
}

list_container.addEventListener("click", (e) => {
    if (e.target.matches(".list-item")) {
        play_audio(e.target.id);
        let pop = canciones.find((element) => element.id == e.target.id)
        if(pop){
            play_card(pop);
        }
    }
    else if(e.target.matches(".cover")){
        play_audio(e.target.parentNode.id);
        let pop = canciones.find((element) => element.id == e.target.parentNode.id)
        if(pop){
            play_card(pop);
        }
    }
    else if(e.target.matches(".song-dates")){
        play_audio(e.target.parentNode.id);
        let pop = canciones.find((element) => element.id == e.target.parentNode.id)
        if(pop){
            play_card(pop);
        }
    }
    else if(e.target.matches(".song-dates div")){
        play_audio(e.target.parentNode.parentNode.id);
        let pop = canciones.find((element) => element.id == e.target.parentNode.parentNode.id)
        if(pop){
            play_card(pop);
        }
    }
});     
play_button.addEventListener("click", () => {
    if(is_playing){
        audio.pause();
        is_playing = false;
        play_button.innerHTML="play";
        animation_active();
    }
    else{
        is_playing = true;
        audio.play();
        play_button.innerHTML="pause";
        animation_active();
    }
})

window.addEventListener("load", () =>{
    const barra = document.getElementById("barra")
    barra.max = audio.duration;
    barra.min = 0;
    window.setInterval(() => {
        barra.value = audio.currentTime;
    }, 1000);
    barra.addEventListener("change", ()=>{
        audio.currentTime = barra.value;
    })
})

next_button.addEventListener("click", ()=>{
    if(index <= canciones.length){
        index++;
        play_audio(index);
    }
})

prev_button.addEventListener("click", ()=>{
    if(index>0){
        index--;
        play_audio(index);
    }

})




const search_input = document.getElementById("search-input")

search_input.addEventListener('focus', ()=>{
    document.addEventListener
})