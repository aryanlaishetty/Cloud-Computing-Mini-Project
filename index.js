const playButton = document.getElementById("play");
playButton.classList.remove("fa-pause");
playButton.classList.add("fa-play");

const todoItemsContainer = document.getElementById('todolist');
const addTodoButton = document.getElementById('addTodoButton');
const saveTodoButton = document.getElementById('saveTodoButton');
const body = document.body;
const audioPlayer = document.getElementById("audioPlayer");

const fullScreen = document.getElementById("fullScreen");

fullScreen.addEventListener("click", () => {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }

});

const github = document.getElementById("github");
const logo = document.getElementById("logo");
const volumeSlider = document.querySelector(".volume-slider");

const muteBtn = document.querySelector(".mute-sound");
const muteIcon = document.querySelector(".mute-sound i");

const gifs = [
"Assets/gifs/1.gif",
"Assets/gifs/2.gif",
"Assets/gifs/3.gif",
"Assets/gifs/4.gif",
"Assets/gifs/5.gif",
"Assets/gifs/6.gif",
"Assets/gifs/7.gif",
"Assets/gifs/8.gif",
"Assets/gifs/9.gif",
"Assets/gifs/10.gif",
"Assets/gifs/11.gif",
"Assets/gifs/12.gif",
"Assets/gifs/13.gif",
"Assets/gifs/14.gif",
"Assets/gifs/15.gif",
"Assets/gifs/16.gif",
"Assets/gifs/17.gif",
"Assets/gifs/18.gif",
"Assets/gifs/19.gif",
"Assets/gifs/20.gif",
"Assets/gifs/21.gif",
"Assets/gifs/22.gif",
"Assets/gifs/23.gif",
"Assets/gifs/24.gif",
"Assets/gifs/25.gif",
"Assets/gifs/26.gif",
"Assets/gifs/27.gif",
"Assets/gifs/28.gif",
"Assets/gifs/29.gif",
"Assets/gifs/30.gif",
"Assets/gifs/31.gif",
"Assets/gifs/32.gif",
"Assets/gifs/33.gif",
"Assets/gifs/34.gif",
"Assets/gifs/35.gif",
"Assets/gifs/36.gif",
"Assets/gifs/37.gif",
"Assets/gifs/38.gif",
"Assets/gifs/39.gif",
"Assets/gifs/40.gif",
"Assets/gifs/41.gif",
"Assets/gifs/42.gif",
"Assets/gifs/43.gif",
"Assets/gifs/44.gif",
"Assets/gifs/45.gif",
"Assets/gifs/46.gif",
"Assets/gifs/47.gif",
"Assets/gifs/48.gif",
"Assets/gifs/49.gif",
"Assets/gifs/50.gif",
"Assets/gifs/51.gif",
"Assets/gifs/52.gif",
"Assets/gifs/53.gif",
"Assets/gifs/54.gif",
"Assets/gifs/55.gif",
"Assets/gifs/56.gif",
"Assets/gifs/57.gif",
"Assets/gifs/58.gif",
"Assets/gifs/59.gif",
"Assets/gifs/60.gif",
"Assets/gifs/61.gif",
"Assets/gifs/62.gif",
"Assets/gifs/63.gif",
"Assets/gifs/64.gif",
"Assets/gifs/65.gif",
"Assets/gifs/66.gif",
"Assets/gifs/67.gif",
"Assets/gifs/68.gif",
"Assets/gifs/69.gif",
"Assets/gifs/70.gif",
"Assets/gifs/71.gif",
"Assets/gifs/72.gif",
"Assets/gifs/73.gif",
"Assets/gifs/74.gif",
"Assets/gifs/75.gif",
"Assets/gifs/76.gif",
"Assets/gifs/77.gif",
"Assets/gifs/78.gif",
"Assets/gifs/79.gif",
"Assets/gifs/80.gif",
"Assets/gifs/81.gif",
"Assets/gifs/82.gif",
"Assets/gifs/83.gif",
"Assets/gifs/84.gif",
"Assets/gifs/85.gif",
"Assets/gifs/86.gif",
"Assets/gifs/87.gif",
"Assets/gifs/88.gif",
"Assets/gifs/89.gif",
"Assets/gifs/90.gif",
"Assets/gifs/91.gif",
"Assets/gifs/92.gif",
"Assets/gifs/93.gif"
];
const songs = [
{ name: "Mohammed Rafi - Abhi Na Jao Chhod Kar (LoFi Mix)", file: "Assets/songs/Mohammed Rafi - Abhi Na Jao Chhod Kar (LoFi Mix).mp3" },
{ name: "Anurag Saikia - Aise Kyun (Ghazal Version)", file: "Assets/songs/Anurag Saikia - Aise Kyun (Ghazal Version).mp3" },
{ name: "Ali Zafar - Jhoom (LoFi Cover)", file: "Assets/songs/Ali Zafar - Jhoom (LoFi Cover).mp3" },
{ name: "AMARIA BB - Slow Motion (Slowed + Reverb)", file: "Assets/songs/AMARIA BB - Slow Motion (Slowed + Reverb).mp3" },
{ name: "AP Dhillon - Excuses (Slowed + Reverb)", file: "Assets/songs/AP Dhillon - Excuses (Slowed + Reverb).mp3" },
{ name: "Arctic Monkeys - I Wanna Be Yours (Slowed + Reverb)", file: "Assets/songs/Arctic Monkeys - I Wanna Be Yours (Slowed + Reverb).mp3" },
{ name: "Arijit Singh - Dildara (Slowed + Reverb)", file: "Assets/songs/Arijit Singh - Dildara (Slowed + Reverb).mp3" },
{ name: "Arijit Singh - Sajni (Slowed + Reverb)", file: "Assets/songs/Arijit Singh - Sajni (Slowed + Reverb).mp3" },
{ name: "AURORA - Runaway (LoFi Remix)", file: "Assets/songs/AURORA - Runaway (LoFi Remix).mp3" },
{ name: "Ayushmann Khurrana - Mera Mann (LoFi)", file: "Assets/songs/Ayushmann Khurrana - Mera Mann (LoFi).mp3" },
{ name: "Barney Sku - Your Eyes Got My Heart Falling For You", file: "Assets/songs/Barney Sku - Your Eyes Got My Heart Falling For You.mp3" },
{ name: "Teriyaki Boyz - Tokyo Drift (LoFi Remix)", file: "Assets/songs/Teriyaki Boyz - Tokyo Drift (LoFi Remix).mp3" },
{ name: "Bruno Mars - Talking To The Moon x Playdate", file: "Assets/songs/Bruno Mars - Talking To The Moon x Playdate.mp3" },
{ name: "Djo - End of Beginning (Slowed + Reverb)", file: "Assets/songs/Djo - End of Beginning (Slowed + Reverb).mp3" },
{ name: "Drake - One Dance (Slowed + Reverb)", file: "Assets/songs/Drake - One Dance (Slowed + Reverb).mp3" },
{ name: "Duncan Laurence - Arcade (Slowed + Reverb)", file: "Assets/songs/Duncan Laurence - Arcade (Slowed + Reverb).mp3" },
{ name: "French Montana ft. Swae Lee - Unforgettable (Slowed + Reverb)", file: "Assets/songs/French Montana ft. Swae Lee - Unforgettable (Slowed + Reverb).mp3" },
{ name: "Gajendra Verma - Mann Mera (Slowed + Reverb)", file: "Assets/songs/Gajendra Verma - Mann Mera (Slowed + Reverb).mp3" },
{ name: "Gotye - Somebody That I Used To Know (80s Slowed)", file: "Assets/songs/Gotye - Somebody That I Used To Know (80s Slowed).mp3" },
{ name: "Indila - Dernière Danse (Slowed + Reverb)", file: "Assets/songs/Indila - Dernière Danse (Slowed + Reverb).mp3" },
{ name: "Joji - Glimpse Of Us (LoFi Remix)", file: "Assets/songs/Joji - Glimpse Of Us (LoFi Remix).mp3" },
{ name: "Kailash Kher - Piya Ghar Aavenge (Slowed + Reverb)", file: "Assets/songs/Kailash Kher - Piya Ghar Aavenge (Slowed + Reverb).mp3" },
{ name: "Kailash Kher - Saiyyan (Slowed + Reverb)", file: "Assets/songs/Kailash Kher - Saiyyan (Slowed + Reverb).mp3" },
{ name: "Kailash Kher - Teri Deewani (Slowed + Reverb)", file: "Assets/songs/Kailash Kher - Teri Deewani (Slowed + Reverb).mp3" },
{ name: "Kate Bush - Running Up That Hill (Slowed + Reverb)", file: "Assets/songs/Kate Bush - Running Up That Hill (Slowed + Reverb).mp3" },
{ name: "Kishore Kumar - Kaun Tujhe (AI Cover)", file: "Assets/songs/Kishore Kumar - Kaun Tujhe (AI Cover).mp3" },
{ name: "Kishore Kumar - Saiyaara", file: "Assets/songs/Kishore Kumar - Saiyaara.mp3" },
{ name: "Kushagra - Finding Her (Slowed + Reverb)", file: "Assets/songs/Kushagra - Finding Her (Slowed + Reverb).mp3" },
{ name: "Lata Mangeshkar - Lag Ja Gale (LoFi)", file: "Assets/songs/Lata Mangeshkar - Lag Ja Gale (LoFi).mp3" },
{ name: "Ludovico Einaudi - Experience (Slowed + Reverb)", file: "Assets/songs/Ludovico Einaudi - Experience (Slowed + Reverb).mp3" },
{ name: "Mohammed Rafi - Kya Hua Tera Wada (LoFi Mix)", file: "Assets/songs/Mohammed Rafi - Kya Hua Tera Wada (LoFi Mix).mp3" },
{ name: "Papon - Kyon (LoFi Remix)", file: "Assets/songs/Papon - Kyon (LoFi Remix).mp3" },
{ name: "Pritam - In Dino (LoFi Flip)", file: "Assets/songs/Pritam - In Dino (LoFi Flip).mp3" },
{ name: "PropheC - Kinna Chir (LoFi Flip)", file: "Assets/songs/PropheC - Kinna Chir (LoFi Flip).mp3" },
{ name: "Shankar Mahadevan - Kaakan (Slowed + Reverb)", file: "Assets/songs/Shankar Mahadevan - Kaakan (Slowed + Reverb).mp3" },
{ name: "Shankar Mahadevan - Kadhi Tu (LoFi)", file: "Assets/songs/Shankar Mahadevan - Kadhi Tu (LoFi).mp3" },
{ name: "Shankar Mahadevan - Mitwa (Slowed + Reverb)", file: "Assets/songs/Shankar Mahadevan - Mitwa (Slowed + Reverb).mp3" },
{ name: "Sona Mohapatra - Jiya Lage Na (Slowed + Reverb)", file: "Assets/songs/Sona Mohapatra - Jiya Lage Na (Slowed + Reverb).mp3" },
{ name: "The Bilz & Kashif - Tera Nasha (Slowed + Reverb)", file: "Assets/songs/The Bilz & Kashif - Tera Nasha (Slowed + Reverb).mp3" },
{ name: "The Chainsmokers - Closer (Slowed + Reverb)", file: "Assets/songs/The Chainsmokers - Closer (Slowed + Reverb).mp3" },
{ name: "The Stranglers - Golden Brown (Slowed + Reverb)", file: "Assets/songs/The Stranglers - Golden Brown (Slowed + Reverb).mp3" },
{ name: "Biki Khariya - Timro Pratiksha (Slowed + Reverb)", file: "Assets/songs/Biki Khariya - Timro Pratiksha (Slowed + Reverb).mp3" },
{ name: "Kailash Kher - Tu Jaane Na (Unplugged Slowed)", file: "Assets/songs/Kailash Kher - Tu Jaane Na (Unplugged Slowed).mp3" },
{ name: "Lata Mangeshkar - Tujhse Naraz Nahi Zindagi (LoFi)", file: "Assets/songs/Lata Mangeshkar - Tujhse Naraz Nahi Zindagi (LoFi).mp3" },
{ name: "Arijit Singh - Tum Mile Dil Khile (Slowed + Reverb)", file: "Assets/songs/Arijit Singh - Tum Mile Dil Khile (Slowed + Reverb).mp3" },
{ name: "Javed Ali - Tum Tak (LoFi Remix)", file: "Assets/songs/Javed Ali - Tum Tak (LoFi Remix).mp3" },
{ name: "Chris Brown - Under The Influence (Slowed + Reverb)", file: "Assets/songs/Chris Brown - Under The Influence (Slowed + Reverb).mp3" },
{ name: "Unknown - Hope (LoFi)", file: "Assets/songs/Unknown - Hope (LoFi).mp3" },
{ name: "Stephen Sanchez - Until I Found You (Slowed + Reverb)", file: "Assets/songs/Stephen Sanchez - Until I Found You (Slowed + Reverb).mp3" },
{ name: "Romy - Vaaroon (Slowed + Reverb)", file: "Assets/songs/Romy - Vaaroon (Slowed + Reverb).mp3" },
{ name: "Xulfi - Laree Chooti (Slowed + Reverb)", file: "Assets/songs/Xulfi - Laree Chooti (Slowed + Reverb).mp3" },
{ name: "A.R. Rahman - Guzaarish (Slowed + Reverb)", file: "Assets/songs/A.R. Rahman - Guzaarish (Slowed + Reverb).mp3" },
{ name: "A.R. Rahman - Tere Bina (Slowed + Reverb)", file: "Assets/songs/A.R. Rahman - Tere Bina (Slowed + Reverb).mp3" },
{ name: "The Local Train - Aaoge Tum Kabhi (Slowed + Reverb)", file: "Assets/songs/The Local Train - Aaoge Tum Kabhi (Slowed + Reverb).mp3" },
{ name: "Nikita Ahuja - Aap Ki Aadatein (From Lootere)", file: "Assets/songs/Nikita Ahuja - Aap Ki Aadatein (From Lootere).mp3" }
];

if (github) {
    github.addEventListener("click", () => {
        window.open("https://github.com/aryanlaishetty/Cloud-Computing-Mini-Project", "_blank");
    });
}

if (saveTodoButton) {
    saveTodoButton.onclick = function() {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };
}

if (addTodoButton) {
    addTodoButton.onclick = function() {
        onAddTodo();
    };
}

if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {

        audioPlayer.volume = Number(volumeSlider.value);

        if (audioPlayer.volume === 0) {
            audioPlayer.muted = true;
            muteIcon.classList.remove("fa-volume-high");
            muteIcon.classList.add("fa-volume-xmark");
        } else {
            audioPlayer.muted = false;
            muteIcon.classList.remove("fa-volume-xmark");
            muteIcon.classList.add("fa-volume-high");
        }

    });
}

const hider = document.querySelectorAll(".hider");

if(logo) {
    logo.addEventListener("click", () => {
        hider.forEach(el => {
            el.classList.toggle("hidden");
        });
    });
}





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

body.style.backgroundImage = `url(Assets/gifs/87.gif)`;
// audioPlayer.src = songs[47].file;
// audioPlayer.play();

audioPlayer.addEventListener("ended", () => {
    changeSong();
});

function changeSong() {

    const randomSongIdx = randomGen(songs.length);

    loadSong(randomSongIdx);
    audioPlayer.play();
}




const img = document.createElement('img');
img.src = 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png';
img.classList.add('no-img')

// let song = "play";

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

// saveTodoButton.onclick = function() {
//     localStorage.setItem("todoList", JSON.stringify(todoList));
// };

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

// addTodoButton.onclick = function() {
//     onAddTodo();
// };

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
let min = Number(document.getElementById('min').textContent);
let seconds = Number(document.getElementById('sec').textContent);
let id = null;
function startTimer() {
    if(id !== null) {
        return;
    }
    id = setInterval(() => {
        if(seconds === 0) {
        seconds = 59
        min = min -1
        minutes.textContent = min
        sec.textContent = seconds
            if(min === 0 && seconds === 0){
            clearInterval(id)
        }   
    } else if (seconds === 1) {
        seconds = 0
        sec.textContent = seconds
    }
    else {
        seconds = seconds - 1
        sec.textContent = seconds.toString().padStart(2, "0");
    }
    }, 1000)
    if(min === 0 && seconds === 0){
        clearInterval(id)
    }
}
function stopTimer() {
    clearInterval(id)
    id = null;
}
function resetTimer() {
    clearInterval(id);
    id = null;

    min = 25;
    seconds = 0;

    minutes.textContent = min;
    sec.textContent = seconds.toString().padStart(2, "0");
}


const initRandomIdx = Math.floor(Math.random() * songs.length);

const songName = document.querySelector(".song-name");

function loadSong(index) {
    audioPlayer.src = songs[index].file;

    if (songName) {
        songName.innerText = songs[index].name;
    }

    // audioPlayer.play();
    // playButton.classList.remove("fa-play");
    // playButton.classList.add("fa-pause");

}
loadSong(initRandomIdx);

function changeGif() {
    const randomGifIdx = randomGen(gifs.length);
    body.style.backgroundImage = `url(${gifs[randomGifIdx]})`;
}





function randomGen(length) {
    const randomIdx = Math.floor(Math.random() * length);
    return randomIdx;
}

if(muteBtn) {
    muteBtn.addEventListener("click", () => {
    
        audioPlayer.muted = !audioPlayer.muted;
    
        if (audioPlayer.muted) {
            muteIcon.classList.remove("fa-volume-high");
            muteIcon.classList.add("fa-volume-xmark");
        } else {
            muteIcon.classList.remove("fa-volume-xmark");
            muteIcon.classList.add("fa-volume-high");
        }
    
    });
}


