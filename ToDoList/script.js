function addTask() {
    //VALUE
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    // No estavacío
    if (taskText === '') {
        alert("¡Llene el campo, no sea idiota!");
        return;
    }

    // Crear nuevo elemento de lista
    let li = document.createElement("li");
    li.className = "task";
    
    // Agregar el texto
    li.innerHTML = `
        ${taskText}
        <button onclick="deleteTask(this)">X</button>
        <button onclick="toggleComplete(this)">✓</button>
    `;
    

    // Agregar a la lista
    document.getElementById("taskList").appendChild(li);
    
    input.value = '';
}

function toggleComplete(button) {
    let task = button.parentElement;
    task.classList.toggle("completed");
}

/*function toggleEdit(button) {
    let task = button.parentElement;    

}*/

function deleteTask(button) {
    let task = button.parentElement;
    task.remove();
}