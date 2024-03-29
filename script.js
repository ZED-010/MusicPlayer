const musicContainer = document.getElementById('audio-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const audio = document.getElementById('audio')
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const title = document.getElementById('title')
const cover = document.getElementById('cover')


const songs = ['(Dh Orchestral Version)    Lana Del Rey - Young And Beautifu', 'Rema - Calm Down(1)','Егор_Крид_МакSим_Отпускаю_EYVX6VVB_Vc_140', 'Зеркала_Григорий_Лепс_Ани_Лорак',
'Akon, Eminem – Smack That', 'Stromae – Formidable' ]

 
let songIndex = 0

function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

loadSong(songs[songIndex])

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}


function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}


function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex = songs.length-1
    }

    loadSong(songs[songIndex])
    playSong()
}


function nextSong(){
    songIndex++;

    if(songIndex> songs.length-1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

function updateProgress(e){
    const {duration, currentTime} =e.srcElement
    const updateProgress = (currentTime / duration) * 100
    progress.style.width = `${updateProgress}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
 }

 playBtn.addEventListener('click', function() {
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
 })

 prevBtn.addEventListener('click', prevSong)
 nextBtn.addEventListener('click', nextSong)
 audio.addEventListener('timeupdate', updateProgress)
 progressContainer.addEventListener('click', setProgress)
 audio.addEventListener('ended', nextSong)