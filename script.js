console.log("Welcome to Hindi Hits");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Itni Si Baat Hain.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Banjaara", filePath: "songs/1.mp3", coverPath: "covers/banjara.jpeg"},
    {songName: "Itni Si Baat Hain", filePath: "songs/2.mp3", coverPath: "covers/itsni si baat hai.jpeg"},
    {songName: "Main Agar Kahoon", filePath: "3.mp3", coverPath: "covers/main agar kahoon.jpg"},
    {songName: "Ek Tarfa", filePath: "songs/4.mp3", coverPath: "covers/ek tarfa.jpg"},
    {songName: "Kalank", filePath: "songs/5.mp3", coverPath: "123.jpg"},
    {songName: " Yeh Aaina ", filePath: "songs/ 6.mp3", coverPath: "covers/yeh aina.jpg"},
    {songName: "Kabir singh", filePath: "songs/7.mp3", coverPath: "covers/Tujhe Kitna Chahne Lage - Kabir Singh.jpeg"},
    {songName: "Dil jaaniye", filePath: "songs/8.mp3", coverPath: "covers/Dil jaaniye.jpeg"},
    {songName: "Chale-Aate-Ho", filePath: "songs/8.mp3", coverPath: "covers/tum kyu chale ateho.jpg"},
    {songName: "Zara Zara", filePath: "songs/10.mp3", coverPath: "covers/zara zara.jpeg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})