// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // ✅ Select DOM elements
    const addButton = document.getElementById('add-task'); // button
    const taskInput = document.getElementById('task-input'); // input field
    const taskList = document.getElementById('task-list'); // ul list

    // ✅ Function to add a task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add event to remove the task when button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // ✅ Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // ✅ Add task when Enter is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});