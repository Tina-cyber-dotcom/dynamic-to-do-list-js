// ✅ Run JavaScript after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // ✅ Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // ✅ Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    // ✅ Check for empty input
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // ✅ Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // ✅ Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // ✅ Remove task when button is clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // ✅ Append button to list item, and item to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // ✅ Clear the input field
    taskInput.value = '';
  }

  // ✅ Add task when button is clicked
  addButton.addEventListener('click', addTask);

  // ✅ Add task when "Enter" key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});