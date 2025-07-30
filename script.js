document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  // ✅ Load tasks on page load
  loadTasks();

  function loadTasks() {
    tasks.forEach(taskText => {
      createTaskElement(taskText);
    });
  }

  function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // ✅ Remove from DOM and update array + localStorage
    removeBtn.onclick = () => {
      const index = tasks.indexOf(taskText);
      if (index > -1) {
        tasks.splice(index, 1);
        saveTasksToLocalStorage();
      }
      taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  function addTask(taskText) {
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    tasks.push(taskText);
    saveTasksToLocalStorage();
    createTaskElement(taskText);
  }

  // ✅ Add task via button click
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    addTask(taskText);
    taskInput.value = '';
  });

  // ✅ Add task via Enter key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      addTask(taskText);
      taskInput.value = '';
    }
  });
});