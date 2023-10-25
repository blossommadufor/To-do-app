
// SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// EVENT LISTENERS

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);
filterOption.addEventListener('click', filterTodo)



// FUNCTIONS

function addTodo(event){
    // prevent form from submitting
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // create LI
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // CHECK BUTTON
    const checkedButton = document.createElement('button')
    checkedButton.classList.add('todo-check-btn')
    checkedButton.innerText = 'Check';
    todoDiv.appendChild(checkedButton)


    // TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.classList.add('todo-delete-btn');
    trashButton.innerText = 'Delete' ;
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);

    // CLEAR TODO INPUT VALUE

    todoInput.value = "";
}

function deletecheck(s){
    const item = s.target;
    
    // DELETE TODO

    if(item.classList[0] === "todo-delete-btn" ){
        const todo = item.parentElement;

        // ANIMATION
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }


    // CHECK TODO

    if(item.classList[0] === "todo-check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case 'all': 
            todo.style.display = 'flex';
            break;

            case "completed": 
            if(todo.classList.contains("completed")) {
                todo.style.display = 'flex';
            }
            else{
                todo.style.display = 'none';
            }
            break;

            case "uncompleted": 
            if (!todo.classList.contains("completed")) {
                todo.style.display = 'flex';
            }
            else{
                todo.style.display = 'none';
            }

        }
    });
}


function saveLocalTodos(todo){

}

