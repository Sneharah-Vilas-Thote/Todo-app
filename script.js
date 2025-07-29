function addTask() {
  const taskInput = document.getElementById("taskInput");
  const tasksContainer = document.getElementById("tasksContainer");

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskCard = document.createElement("div");
  taskCard.className = "task";
  taskCard.innerHTML = `
    <p>${taskText}</p>
    <button onclick="removeTask(this)">🗑</button>
  `;

  tasksContainer.appendChild(taskCard);
  taskInput.value = "";
}

function removeTask(button) {
  const taskCard = button.parentElement;
  taskCard.remove();
}
