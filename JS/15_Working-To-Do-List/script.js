document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.classList.add('task');
    
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
        showNotification(`Task removed: ${taskText}`);
    });
    
    li.appendChild(deleteBtn);
    li.addEventListener('click', function() {
        li.classList.toggle('complete');
    });
    
    taskList.appendChild(li);
    showNotification(`Task added: ${taskText}`);
    taskInput.value = '';
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.getElementById('notifications').appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}