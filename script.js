// script.js
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = input.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '❌';
    delBtn.classList.add('delete-btn');

    delBtn.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = '';
  }
});
