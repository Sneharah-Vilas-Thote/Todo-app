const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.textContent = taskText;
    taskList.appendChild(taskCard);
    taskInput.value = "";
  }
});

function scrollLeft() {
  taskList.scrollBy({ left: -250, behavior: "smooth" });
}

function scrollRight() {
  taskList.scrollBy({ left: 250, behavior: "smooth" });
}
