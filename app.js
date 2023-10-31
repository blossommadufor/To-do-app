
// SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const popUpDiv = document.querySelector('.pop-up-div')
const popUpLi = document.querySelector('.pop-up-li')


// EVENT LISTENERS

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);
filterOption.addEventListener('click', filterTodo)
todoList.addEventListener('todo.remove()' , popUpMessage);
document.addEventListener('DOMContentLoaded', getTodos);



// FUNCTIONS

function addTodo(event){
    // prevent form from submitting
    event.preventDefault();

    if(todoInput.value === ""){
        alert("Add A Todo")
        return false
    }

    else{
         // Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
  


    // create LI
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item');
    const capitalizeInput = todoInput.value[0].toUpperCase() + todoInput.value.slice(1).toLowerCase() ;
    newTodo.innerText = capitalizeInput;
    todoDiv.appendChild(newTodo);


    // CHECK BUTTON
    const checkedButton = document.createElement('button')
    checkedButton.classList.add('todo-check-btn')
    checkedButton.innerText = 'Check';
    todoDiv.appendChild(checkedButton)


    // ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);



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
    }


function deletecheck(s){
    const item = s.target;
    
    // DELETE TODO

    if(item.classList[0] === "todo-delete-btn" ){
        const todo = item.parentElement;

        // ANIMATION
        todo.classList.add('fall');
        removeLocalTodos(todo)
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
    // CHECK---- DO I ALREADY HAVE THINGS IN THERE?
    let todos;

    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }


    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

    popUpMessage() 


}

function getTodos(){

    

    let todos;

     // CHECK---- DO I ALREADY HAVE THINGS IN THERE?
    //  let todos;

     if (localStorage.getItem('todos') === null){
         todos = [];
     }
     else{
         todos = JSON.parse(localStorage.getItem('todos'));
     }

     todos.forEach(function(todo) {
         // Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // create LI
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item');
    newTodo.innerText = todo;
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
     });
}

function removeLocalTodos(todo){
    let todos;


      // CHECK---- DO I ALREADY HAVE THINGS IN THERE?
    //  let todos;

    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);

    localStorage.setItem('todos', JSON.stringify(todos));
    

    popUpMessage() 

}


function popUpMessage () {
   

    let data = localStorage.getItem('todos')

    data = JSON.parse(data)

    console.log(data.length)
    

    if( data.length === 0 ) {
        popUpDiv.style.display = 'block';
    }

    else{
        popUpDiv.style.display = 'none';
    };
};


popUpMessage() 