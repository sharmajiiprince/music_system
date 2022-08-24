
const music=document.querySelector("audio");
const play=document.getElementById("play");
const img=document.querySelector('img');

const songName=document.getElementById("songName");
const artistName=document.getElementById("artistName");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs=[
{
    id: 'song1',
    songName: 'song1.mp3',
    artistName: 'Owner Credits'
},
{
    id: 'song2',
    songName: 'song2.mp3',
    artistName: 'Owner Credits-1' 
},
{
    id: 'song3',
    songName: 'song3.mp3',
    artistName: 'Owner Credits-3'
},
{
    id: 'song5',
    songName: 'song4.mp3',
    artistName: 'Owner Credits-4'
},
{
    id: 'song6',
    songName: 'song5.mp3',
    artistName: 'Owner Credits-5'
},
{
    id: 'song7',
    songName: 'song6.mp3',
    artistName: 'Owner Credits-6'
},
{
    id: 'song8',
    songName: 'song7.mp3',
    artistName: 'Owner Credits-7'
},
{
    id: 'song9',
    songName: 'song8.mp3',
    artistName: 'Owner Credits-8'
},
{
    id: 'song10',
    songName: 'song9.mp3',
    artistName: 'Owner Credits-9'
}

]

let isAudioPlaying=false;

const playTheMusic= ()=>{
    isAudioPlaying=true;
    music.play();
    // play.classList.replace("fa-google-play","fa-google-pause");
    img.classList.add(".rotateAnime");
};

const pauseTheMusic= ()=>{
    isAudioPlaying=false;
    music.pause();
    // play.classList.replace("power_settings_new","info");
    img.classList.remove(".rotateAnime");
};
//event is firing when play button is clicking.
play.addEventListener("click",()=>{
    if(isAudioPlaying){
        pauseTheMusic();
    }
    else{
       playTheMusic();
    }
});

const loadThesong= (songs)=>{
    songName.textContent=songs.songName;
    artistName.textContent=songs.artistName;
    music.src = "./music/" + songs.id + ".mp3";
    img.src ="./img/" + songs.id + ".jpg";
}

songIndex =0;
const nextsong = ()=>{
    songIndex = (songIndex+1) % songs.length;
    loadThesong(songs[songIndex]);
    playTheMusic();
};
const prevsong = ()=>{
    songIndex = (songIndex-1) % songs.length;
    loadThesong(songs[songIndex]);
    playTheMusic();
};
next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);
