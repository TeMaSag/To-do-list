let listForm = document.querySelector(".list-form");
let list = document.querySelector(".list");
let fieldTask = document.querySelector(".field-task");
let taskList = document.querySelector(".list");
let deleteCompletedTask = document.querySelector("#deleteCompletedTask");

//добавление задания
listForm.onsubmit = function(evt) {
    evt.preventDefault();
    if (fieldTask.value !== "") {
        let newTask = document.createElement("p");
        newTask.textContent = fieldTask.value;
        let span = document.createElement("span");
        span.className = "destroy";
        span.innerHTML = ("&#10008");
        newTask.append(span);
        newTask.classList.add("activeTask");
        list.append(newTask);
        fieldTask.value = "";
        fieldTask.placeholder = "Добавьте задание";

    } else {
        fieldTask.placeholder = "пустое поле";
    }
};

//выполнение задания 
taskList.addEventListener("click", function(ev) {
    if (ev.target.tagName === "P") {
        ev.target.classList.toggle("toggle");
    }
}, false);

// удаление задания 
taskList.addEventListener("click", function(ev) {
    if (ev.target.tagName === "SPAN") {
        ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
    }
}, false);

// удаление завершенных задач
document.querySelector('#deleteCompletedTask').onclick = function() {
    document.querySelectorAll(".toggle").forEach(e => e.remove());
}

//удаление всез задач
document.querySelector('#AllDelete').onclick = function() {
    document.querySelectorAll("p").forEach(e => e.remove());
}

// Показать неготовые задачт
document.querySelector('#activeTask').onclick = function() {
    document.querySelectorAll(".hidden").forEach(e => e.classList.remove("hidden"));
    document.querySelectorAll(".toggle").forEach(e => e.classList.add("hidden"));
}

// Показать готовые задачи
document.querySelector('#completedTask').onclick = function() {
    document.querySelectorAll(".hidden").forEach(e => e.classList.remove("hidden"));
    document.querySelectorAll(".activeTask").forEach(e => e.classList.add("hidden"));
}

// Показать все задачи
document.querySelector('#allTask').onclick = function() {
    document.querySelectorAll(".hidden").forEach(e => e.classList.remove("hidden"));
}