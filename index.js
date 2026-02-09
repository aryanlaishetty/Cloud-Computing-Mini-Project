const playButton = document.getElementById("play");
const todoItemsContainer = document.getElementById('todolist');
const addTodoButton = document.getElementById('addTodoButton');
const saveTodoButton = document.getElementById('saveTodoButton');

// const img = document.createElement('img');
// img.src = 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png';
// img.classList.add('no-img')

let song = "play";

function play() {
    if (song === 'play') {
        song = 'pause';
        playButton.classList.remove('fa-play');
        playButton.classList.toggle("fa-pause");
    } else {
        song = 'play';
        playButton.classList.remove('fa-pause');
        playButton.classList.toggle("fa-play");
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
let id;
function startTimer() {
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
}