
let tasks = [];
let node = "";

// Load tasks from localStorage on page load
window.onload = function () {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        tasks = storedTasks;
        renderTask();
    }
};

function addText() {
    const task = document.getElementById("inputTask").value;
    if (task.length === 0) {
        return;
    }
    tasks.push(task);
    renderTask();
    store();
}

function renderTask() {
    node = ""; // Clear the node before rendering to avoid duplication
    tasks.forEach((elem, index) => {
        node += `
        <div class="task">
            <p>${elem}</p>
            <button index="${index}" onclick="removeTask(${index})">DEL</button>
        </div>
        `;
    });
    const container = document.getElementById("taskBox");
    container.innerHTML = node;
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTask();
    store();
}

function store() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
    
