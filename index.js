const playButton = document.getElementById("play");
const todoItemsContainer = document.getElementById('todolist');
const addTodoButton = document.getElementById('addTodoButton');
const saveTodoButton = document.getElementById('saveTodoButton');
const body = document.getElementById('body');
const audioPlayer = document.getElementById("audioPlayer");
const fullScreen = document.getElementById("fullScreen");
const github = document.getElementById("github");


github.addEventListener("click", () => {
    window.open("https://github.com/aryanlaishetty/Cloud-Computing-Mini-Project", "_blank");
});


fullScreen.addEventListener("click", () => {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } 
    else {
        document.exitFullscreen();
    }

});


const img = document.createElement('img');
img.src = 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png';
img.classList.add('no-img')

let song = "play";

function play() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");
    } else {
        audioPlayer.pause();
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play");
    }
}

function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;

    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId, todoId);
    };

    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
    if (todo.isChecked === true) {
        inputElement.checked = true;
        labelElement.classList.add("checked");
    }
}

saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    if (todoList.length === 0){
        todoItemsContainer.removeChild(img)
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
        isChecked: false
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
};

function onTodoStatusChange(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    let todoObjectIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        console.log(eachTodoId);
        console.log(todoId);
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    let todoObject = todoList[todoObjectIndex];

    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    } else {
        todoObject.isChecked = true;
    }

}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);

    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    todoList.splice(deleteElementIndex, 1);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}
if (todoList.length === 0) {
    console.log(todoList.length === 0)
    todoItemsContainer.appendChild(img);
}

const minutes = document.getElementById('min')
const sec = document.getElementById('sec')
let min = document.getElementById('min').textContent
let seconds = document.getElementById('sec').textContent
let id = null;
function startTimer() {
    if(id !== null) {
        return;
    }
    id = setInterval(() => {
        if(seconds === "00") {
        seconds = 59
        min = min -1
        minutes.textContent = min
        sec.textContent = seconds
    } else if (seconds == 1) {
        seconds = '00'
        sec.textContent = seconds
    }
    else {
        seconds = seconds - 1
        sec.textContent = seconds
    }
    }, 1000)
    if(min == 0){
        clearInterval(id)
    }
}
function stopTimer() {
    clearInterval(id)
    id = null;
}
function resetTimer() {
    clearInterval(id)
    id = null;
    min = 25
    seconds = '00'
    minutes.textContent = min
    sec.textContent = seconds
}

const gifs = ["gifs/1.gif", "gifs/2.gif", "gifs/3.gif", "gifs/4.gif", "gifs/5.gif", "gifs/6.gif", "gifs/7.gif", "gifs/8.gif", "gifs/9.gif", "gifs/10.gif", "gifs/11.gif", "gifs/12.gif", "gifs/13.gif", "gifs/14.gif"];
const songs = [
{name: "AISE KYUN (Ghazal Version) Lyrics From Mismatched Season 2 Song Anurag Saikia, Rekha Bhardwaj", file: "songs/AISE KYUN (Ghazal Version) Lyrics From Mismatched Season 2 Song Anurag Saikia, Rekha Bhardwaj.mp3"},
{name: "AMARIA BB - Slow Motion (SLOWED n REVERB)", file: "songs/AMARIA BB - Slow Motion (SLOWED n REVERB).mp3"},
{name: "Arcade [Slowed Reverb] - Duncan Laurence Lofi Songs English Lofi Song Channel", file: "songs/Arcade [Slowed Reverb] - Duncan Laurence Lofi Songs English Lofi Song Channel.mp3"},
{name: "Aurora - Runaway (Alphasvara Lo-Fi Remix)", file: "songs/Aurora - Runaway (Alphasvara Lo-Fi Remix).mp3"},
{name: "Barney Sku- Your eyes got my heart falling for you x (Teri nazron ne) #your eyes got my heart", file: "songs/Barney Sku- Your eyes got my heart falling for you x (Teri nazron ne) #your eyes got my heart.mp3"},
{name: "Closer [Slowed Reverb] - The Chainsmokers Lofi Songs Lofi Song English English Lofi Song Cha", file: "songs/Closer [Slowed Reverb] - The Chainsmokers Lofi Songs Lofi Song English English Lofi Song Cha.mp3"},
{name: "dernière danse slowedreverb indila", file: "songs/dernière danse slowedreverb indila.mp3"},
{name: "Dildara (slowedreverb)", file: "songs/Dildara (slowedreverb).mp3"},
{name: "Djo - End of Beginning (slowed reverb)", file: "songs/Djo - End of Beginning (slowed reverb).mp3"},
{name: "Excuses lofi (slowed & reverb) kendi hundi si song lofi Ap dhillon", file: "songs/Excuses lofi (slowed & reverb) kendi hundi si song lofi Ap dhillon.mp3"},
{name: "Finding Her (Slowed Reverb) Kushagra Vanshika Kashyap Bharath VR Lofilax", file: "songs/Finding Her (Slowed Reverb) Kushagra Vanshika Kashyap Bharath VR Lofilax.mp3"},
{name: "french montana ft. swae lee - unforgettable (slowed reverb)", file: "songs/french montana ft. swae lee - unforgettable (slowed reverb).mp3"},
{name: "guzaarish [ghajini] (slowed reverb)", file: "songs/guzaarish [ghajini] (slowed reverb).mp3"},
{name: "hope lofi", file: "songs/hope lofi.mp3"},
{name: "i wanna be yours arctic monkeys slowedreverblyrics", file: "songs/i wanna be yours arctic monkeys slowedreverblyrics.mp3"},
{name: "In Dino Lofi Flip Video Life In A Metro Pritam Soham Shilpa Shetty Shiney VIBIE", file: "songs/In Dino Lofi Flip Video Life In A Metro Pritam Soham Shilpa Shetty Shiney VIBIE.mp3"},
{name: "Jhoom (Lofi) - JalRaj Ali Zafar Latest Hindi Cover Song 2022", file: "songs/Jhoom (Lofi) - JalRaj Ali Zafar Latest Hindi Cover Song 2022.mp3"},
{name: "Jiya Lage Na - Sona Mohapatra, Ravindra Upadhyay (Talaash) [slowed reverb]", file: "songs/Jiya Lage Na - Sona Mohapatra, Ravindra Upadhyay (Talaash) [slowed reverb].mp3"},
{name: "Joji - Glimpse Of Us (Alphasvara Lo-Fi Remix)", file: "songs/Joji - Glimpse Of Us (Alphasvara Lo-Fi Remix).mp3"},
{name: "Kaakan - (Slowed & Reverb) Shankar Mahadevan, Neha Rajpal Nostalgic", file: "songs/Kaakan - (Slowed & Reverb) Shankar Mahadevan, Neha Rajpal Nostalgic.mp3"},
{name: "Kadhi Tu Song - lofi ( Slowed reverb ) Marathi lofi SM CREATION", file: "songs/Kadhi Tu Song - lofi ( Slowed reverb ) Marathi lofi SM CREATION.mp3"},
{name: "Kaun Tujhe Kishore Kumar (Re uploaded) Full Video Song AI Cover", file: "songs/Kaun Tujhe Kishore Kumar (Re uploaded) Full Video Song AI Cover.mp3"},
{name: "Kinna Chir - PropheC (Gravero & The Two Lofi Flip)", file: "songs/Kinna Chir - PropheC (Gravero & The Two Lofi Flip).mp3"},
{name: "Kya Hua Tera Wada LoFi Chill Mix The Keychangers Mohammed Rafi Slowed and Reverb Songs", file: "songs/Kya Hua Tera Wada LoFi Chill Mix The Keychangers Mohammed Rafi Slowed and Reverb Songs.mp3"},
{name: "Lag ja gale Night chill sleep Lo-fi Slowed Reverb Ft @Lata-Mangeshkar", file: "songs/Lag ja gale Night chill sleep Lo-fi Slowed Reverb Ft @Lata-Mangeshkar.mp3"},
{name: "Laree Chooti (slowed reverbed) - Xulfi", file: "songs/Laree Chooti (slowed reverbed) - Xulfi.mp3"},
{name: "ludovico einaudi - experience (slowed reverb)", file: "songs/ludovico einaudi - experience (slowed reverb).mp3"},
{name: "Mann Mera [Slowed Reverb] Bollywood hindi lofi song", file: "songs/Mann Mera [Slowed Reverb] Bollywood hindi lofi song.mp3"},
{name: "Mera Mann Lo fi Nautanki Saala! @JAZ Scape Textaudio Lyrics", file: "songs/Mera Mann Lo fi Nautanki Saala! @JAZ Scape Textaudio Lyrics.mp3"},
{name: "Mitwa [SlowedReverb] Beatflow", file: "songs/Mitwa [SlowedReverb] Beatflow.mp3"},
{name: "One Dance - Drake Slowed Reverbed Attractive Playlist", file: "songs/One Dance - Drake Slowed Reverbed Attractive Playlist.mp3"},
{name: "Papon - Kyon (Gravero & @wormono Lofi Remake) Barfi", file: "songs/Papon - Kyon (Gravero & @wormono Lofi Remake) Barfi.mp3"},
{name: "Piya Ghar aavenge kailash kher ( slowed reverb )#kailashkher #lofi", file: "songs/Piya Ghar aavenge kailash kher ( slowed reverb )#kailashkher #lofi.mp3"},
{name: "Running Up That Hill - Kate Bush (slowed reverb)", file: "songs/Running Up That Hill - Kate Bush (slowed reverb).mp3"},
{name: "SAIYAARA Kishore Kumar Haye Main Mar Hi jau Old Goldern Era Viral Song", file: "songs/SAIYAARA Kishore Kumar Haye Main Mar Hi jau Old Goldern Era Viral Song.mp3"},
{name: "Saiyyan - Kailash Kher [ SlowedReverb ]#saiyyan #slowedandreverb #kailashkher #lofi #slowed #viral", file: "songs/Saiyyan - Kailash Kher [ SlowedReverb ]#saiyyan #slowedandreverb #kailashkher #lofi #slowed #viral.mp3"},
{name: "Sajni (Slowed Reverb) Arijit Singh Laapataa Ladies SR Lofi", file: "songs/Sajni (Slowed Reverb) Arijit Singh Laapataa Ladies SR Lofi.mp3"},
{name: "somebody that i used to know, 80s slowed (tik tok version no tempo changes)", file: "songs/somebody that i used to know, 80s slowed (tik tok version no tempo changes).mp3"},
{name: "TALKING TO THE MOON X PLAYDATE (CLEANED UP TIKTOK EDIT)", file: "songs/TALKING TO THE MOON X PLAYDATE (CLEANED UP TIKTOK EDIT).mp3"},
{name: "TERA NASHA THE BILZ AND KASHIF (slowed reverb)", file: "songs/TERA NASHA THE BILZ AND KASHIF (slowed reverb).mp3"},
{name: "Tere bina A.R Rehman Guru [ Slowed & Reverb ]", file: "songs/Tere bina A.R Rehman Guru [ Slowed & Reverb ].mp3"},
{name: "Teri Deewani [Slowed Reverb] - Kailash Kher Lofi edits", file: "songs/Teri Deewani [Slowed Reverb] - Kailash Kher Lofi edits.mp3"},
{name: "The Stranglers - Golden Brown (Slowed Reverb)", file: "songs/The Stranglers - Golden Brown (Slowed Reverb).mp3"},
{name: "Timro Pratiksha SlowedReverb New Lofi Song 2024 Sad Song BikiKhariya", file: "songs/Timro Pratiksha SlowedReverb New Lofi Song 2024 Sad Song BikiKhariya.mp3"},
{name: "Tokyo Drift (Lofi Remix)", file: "songs/Tokyo Drift (Lofi Remix).mp3"},
{name: "tu jaane na (unplugged version) - kailash kher (slowed & reverbed)", file: "songs/tu jaane na (unplugged version) - kailash kher (slowed & reverbed).mp3"},
{name: "Tujhse Naraaz Nahi Zindagi R.D Burman Masoom Gulzar. LOFI MUSIC", file: "songs/Tujhse Naraaz Nahi Zindagi R.D Burman Masoom Gulzar. LOFI MUSIC.mp3"},
{name: "Tum Mile Dil Khile - [ Slowed Reverb ] , - Arijit Singh", file: "songs/Tum Mile Dil Khile - [ Slowed Reverb ] , - Arijit Singh.mp3"},
{name: "Tum Tak - Javed Ali (Gravero Lofi Remake) Raanjhanaa Bollywood Lofi", file: "songs/Tum Tak - Javed Ali (Gravero Lofi Remake) Raanjhanaa Bollywood Lofi.mp3"},
{name: "Under The Influence - Chris Brown Slowed Reverbed Attractive Playlist", file: "songs/Under The Influence - Chris Brown Slowed Reverbed Attractive Playlist.mp3"},
{name: "Until I Found You -Stephen Sanchez & Em Beihold(Slowed & Reverb)", file: "songs/Until I Found You -Stephen Sanchez & Em Beihold(Slowed & Reverb).mp3"},
{name: "Vaaroon Slowed and Reverb Mirzapur Romy & Aanand Bhaskar", file: "songs/Vaaroon Slowed and Reverb Mirzapur Romy & Aanand Bhaskar.mp3"},
{name: "Aaoge Tum Kabhi The Local Train SlowedReverb", file: "songs/Aaoge Tum Kabhi The Local Train SlowedReverb.mp3"},
{name: "Aap Ki Aadatein (From _Lootere_) (Unplugged) [DV1bohhPL9U]", file: "songs/Aap Ki Aadatein (From _Lootere_) (Unplugged) [DV1bohhPL9U].mp3"},
{name: "Abhi Na Jao Chhod Kar - LoFi Mix The Keychangers Asha Bhosle Mohammed Rafi", file: "songs/Abhi Na Jao Chhod Kar - LoFi Mix The Keychangers Asha Bhosle Mohammed Rafi.mp3"}
];

const initRandomIdx = Math.floor(Math.random() * songs.length);

const songName = document.querySelector(".song-name");

function loadSong(index) {
    audioPlayer.src = songs[index].file;
    songName.innerText = songs[index].name;
    audioPlayer.play();

}
loadSong(initRandomIdx);

function randomGen(length) {
    const randomIdx = Math.floor(Math.random() * length);
    return randomIdx;
}

function changeGif() {
    const randomGifIdx = gifs[randomGen(gifs.length)];
    document.body.style.backgroundImage = `url(${randomGifIdx})`;
}

function changeSong() {

    const randomSongIdx = randomGen(songs.length);

    loadSong(randomSongIdx);
    audioPlayer.play();
}

audioPlayer.addEventListener("ended", () => {
    changeSong();
});

const muteBtn = document.querySelector(".mute-sound");
const muteIcon = document.querySelector(".mute-sound i");

muteBtn.addEventListener("click", () => {

    audioPlayer.muted = !audioPlayer.muted;

    // <i class="fa-solid fa-volume-high"></i>
    // <i class="fa-solid fa-volume-xmark"></i>

    if (audioPlayer.muted) {
        muteIcon.classList.remove("fa-volume-high");
        muteIcon.classList.add("fa-volume-xmark");
    } else {
        muteIcon.classList.remove("fa-volume-xmark");
        muteIcon.classList.add("fa-volume-high");
    }

});

const volumeSlider = document.querySelector(".volume-slider");

volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
});