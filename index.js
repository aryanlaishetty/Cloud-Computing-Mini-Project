const playButton = document.getElementById("play");
const todoItemsContainer = document.getElementById('todolist');
const addTodoButton = document.getElementById('addTodoButton');
const saveTodoButton = document.getElementById('saveTodoButton');
const body = document.getElementById('body');
const audioPlayer = document.getElementById("audioPlayer");

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

const minuties = document.getElementById('min')
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
        minuties.textContent = min
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
    minuties.textContent = min
    sec.textContent = seconds
}

const gifs = ["gifs/1.gif", "gifs/2.gif", "gifs/3.gif", "gifs/4.gif", "gifs/5.gif", "gifs/6.gif", "gifs/7.gif", "gifs/8.gif", "gifs/9.gif", "gifs/10.gif", "gifs/11.gif", "gifs/12.gif", "gifs/13.gif", "gifs/14.gif"];
const songs = [
    { name: "Rain Lofi", file: "songs/song1.mp3" },
    { name: "Night Study", file: "songs/song2.mp3" },
    { name: "Chill Beats", file: "songs/song3.mp3" }
];

let currentSong = 0;
const songName = document.querySelector(".song-name");

function loadSong(index) {
    audioPlayer.src = songs[index].file;
    songName.innerText = songs[index].name;
}
loadSong(currentSong);

function next() {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    body.style.backgroundImage = `url(${randomGif})`;
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audioPlayer.play();
}
audioPlayer.addEventListener("ended", () => {
    next();
});

const muteBtn = document.querySelector(".mute-sound");
const muteIcon = document.querySelector(".mute-sound i");

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

const volumeSlider = document.querySelector(".volume-slider");

volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
});