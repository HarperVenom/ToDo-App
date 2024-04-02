const tasksContainer = document.querySelector('.tasks-container');
const completeTasksContainer = document.querySelector('.completed-tasks-container');
const completeListOpenButton = document.querySelector('.open-completed-button');

const input = document.querySelector('.task-input');
const addButton = document.querySelector('.task-add-button');


addButton.addEventListener('click', () => {
    if (input.value === '') return;
    createTask(input.value);
})

function createTask(task) {
    const container = document.createElement('div');
    const checkBox = document.createElement('div');
    const text = document.createElement('p');
    const removeButton = document.createElement('div');

    container.classList.add('task-container', 'white', 'shadow');
    checkBox.classList.add('checkbox', 'nocheck');
    checkBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>`;
    text.innerHTML = task;
    removeButton.classList.add('task-remove-button', 'red');
    removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>`;

    checkBox.addEventListener('click', () => {
        checkBox.classList.remove('nocheck');
        checkBox.classList.add('check');

        setTimeout( () => {
            moveToDoneList(task)
            tasksContainer.removeChild(container);
        } ,500);
    });

    removeButton.addEventListener('click', () => {
        tasksContainer.removeChild(container);
    });

    container.append(checkBox, text, removeButton);
    tasksContainer.appendChild(container);
}

// document.body.addEventListener('click', (e) => {
//     console.log(e.target);
//     //completeTasksContainer.removeChild(container);
// });

function moveToDoneList(task) {
    const container = document.createElement('div');
    const removeButton = document.createElement('div');
    const text = document.createElement('p');
    const checkMark = document.createElement('div');

    container.classList.add('completed-task');
    removeButton.classList.add('remove');
    removeButton.innerHTML = `<svg class="remove" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>`;
    text.innerHTML = task;
    checkMark.innerHTML = `<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>`;
    checkMark.classList.add('checkmark');

    removeButton.addEventListener('click', () => {
        completeTasksContainer.removeChild(container);
    });
    container.append(removeButton, text, checkMark);

    completeTasksContainer.appendChild(container);
}

completeListOpenButton.addEventListener('click', () => {
    document.querySelector('.app-completed').classList.toggle('opened');
})