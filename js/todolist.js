let toDoList = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

toDoList.forEach(element => {
    addTaskToList(element);
});

function saveTask() {  
    const newTask = document.querySelector("#task");
    if(newTask.value.trim().length === 0 || newTask.value.length === 0) {
        $('.error').toast('show');
    } else {
        addTaskToList(newTask.value);
        $('.success').toast('show');
        toDoList.push(newTask.value);
        localStorage.setItem('list', JSON.stringify(toDoList));
    }
}

function addTaskToList(value) {
    let toDoList =document.querySelector('#list');
    const li = document.createElement('li');
    li.innerHTML = value;
    li.onclick = function() {
        li.classList.toggle("checked");
    };
    const span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "X";
    span.onclick = function() {
        toDoList.removeChild(li);
    };
    li.appendChild(span);
    toDoList.append(li);
}