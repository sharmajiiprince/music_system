
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
    songName: 'chal ghar chalen.mp3',
    artistName: 'Mithoon,Argit shingh'
},
{
    id: 'song2',
    songName: 'song12.mp3',
    artistName: 'Tonny kakkar' 
},
{
    id: 'song3',
    songName: 'song19.mp3',
    artistName: 'Palak Muchal'
},
{
    id: 'song5',
    songName: 'song14.mp3',
    artistName: 'Armaan Malik'
},
{
    id: 'song6',
    songName: 'song15.mp3',
    artistName: 'O2SRK'
},
{
    id: 'song7',
    songName: 'song16.mp3',
    artistName: 'Argit Shingh..'
},
{
    id: 'song8',
    songName: 'song17.mp3',
    artistName: 'Argit shingh'
},
{
    id: 'song9',
    songName: 'song18.mp3',
    artistName: 'Atif Aslam'
},
{
    id: 'song10',
    songName: 'Remix.mp3',
    artistName: 'Owner Credits-9'
},
{
    id: 'song11',
    songName: 'song10',
    artistName: 'xyz'
},

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
