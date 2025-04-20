document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task");
  const priorityInput = document.getElementById("priority");
  const deadlineInput = document.getElementById("deadline");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    if (task === "" || deadline === "") {
      alert("Please enter a task and select a valid deadline.");
      return;
    }

    const selectedDate = new Date(deadline + "T00:00:00");
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate <= currentDate) {
      alert("Please select a future date for the deadline.");
      return;
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task", `task-${priority}`);
    taskItem.innerHTML = `
      <p><strong>${task}</strong></p>
      <p>Priority: ${priority}</p>
      <p>Deadline: ${deadline}</p>
      <button class="mark-done">Mark Done</button>
    `;

    taskList.appendChild(taskItem);

    // Reset input fields
    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
      const taskItem = event.target.parentElement;
      taskItem.style.backgroundColor = "#e6ffe6";
      event.target.disabled = true;
      event.target.textContent = "Completed";
    }
  });
});
