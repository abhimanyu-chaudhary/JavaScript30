document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');

        taskItem.innerHTML = `
            <span class="task">${taskText}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `
        taskItem.querySelector('.edit').addEventListener('click', () => editTask(taskItem));

        taskItem.querySelector('.delete').addEventListener('click', () => deleteTask(taskItem));

        taskList.appendChild(taskItem);
        taskInput.value= '';
    }

}

function editTask(taskItem){
    const taskText = taskItem.querySelector('.task').innerText;
    const newTaskText = prompt('Edit your task', taskText);

    if(newTaskText !== null && newTaskText.trim() !== ''){
        taskItem.querySelector('.task').innerText = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}