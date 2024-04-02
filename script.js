const tasksContainer = document.querySelector('.tasks-container');

const input = document.querySelector('.task-input');
const addButton = document.querySelector('.task-add-button');


addButton.addEventListener('click', () => {
    createTask(input.value);
})

function createTask(task) {
    const container = document.createElement('div');
    const checkBox = document.createElement('div');
    const text = document.createElement('p');

    container.classList.add('task-container', 'white', 'shadow');
    checkBox.classList.add('checkbox', 'nocheck');
    checkBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>`;
    text.innerHTML = task;

    checkBox.addEventListener('click', () => {
        checkBox.classList.remove('nocheck');
        checkBox.classList.add('check');
    })

    container.append(checkBox, text);
    tasksContainer.appendChild(container);
}