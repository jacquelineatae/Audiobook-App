// Get references to HTML elements
const buttonPlayPause = document.getElementById("play-pause");
const buttonPreviousChapter = document.getElementById("previous");
const buttonNextChapter = document.getElementById("next");
const audio = document.getElementById("audio-chapter");
const nameChapter = document.getElementById("chapter");

// Set the total number of chapters
const quantityChapters = 10;

// Initialize variables
let isPlaying = false;
let chapter = 1;

// Function to play a track
function playTrack() {
    // Play the audio
    audio.play();
    
    // Update play/pause button classes
    buttonPlayPause.classList.remove("bi-play-circle");
    buttonPlayPause.classList.add("bi-pause-circle");
    
    // Update the play status
    isPlaying = true;
}

// Function to pause a track
function pauseTrack() {
    // Pause the audio
    audio.pause();
    
    // Update play/pause button classes
    buttonPlayPause.classList.add("bi-play-circle");
    buttonPlayPause.classList.remove("bi-pause-circle");
    
    // Update the play status
    isPlaying = false;
}

// Function to toggle between play and pause
function playOrPause() {
    if (isPlaying === true) {
        pauseTrack();
    } else {
        playTrack();
    }
}

// Function to play the next chapter
function nextChapter() {
    // Increment chapter number
    if (chapter < quantityChapters) {
        chapter += 1;
    } else {
        // If the last chapter, go back to the first chapter
        chapter = 1;
    }
    
    // Update audio source and chapter name
    audio.src = "books/dom-casmurro/" + chapter + ".mp3";
    nameChapter.innerText = "Chapter " + chapter;
    
    // Play the new chapter
    playTrack();
}

// Function to play the previous chapter
function previousChapter() {
    // Decrement chapter number
    if (chapter === 1) {
        // If the first chapter, go to the last chapter
        chapter = quantityChapters;
    } else {
        chapter -= 1;
    }
    
    // Update audio source and chapter name
    audio.src = "books/dom-casmurro/" + chapter + ".mp3";
    nameChapter.innerText = "Chapter " + chapter;
    
    // Play the new chapter
    playTrack();
}

// Event listeners
buttonPlayPause.addEventListener("click", playOrPause);
buttonNextChapter.addEventListener("click", nextChapter);
buttonPreviousChapter.addEventListener("click", previousChapter);
audio.addEventListener("ended", nextChapter);
