/*

Global arrays. There ought to be a 1:1 relationship of each index of your todos
and each index of your isDone.

For example, isDone[3] would hold the "done-ness" information for todos[3].

*/

let todos = [];
let isDone = [];

// When the html finishes loading, launch `init`.
window.onload = init;

// Set up all event listeners.
function init() {
    // When they click the add todo button, run `addTodo`.
    document.getElementById('add-todo')
        .addEventListener('click', addTodo)
        
    // When they click the clear done todos button, run `clearDoneTodos`.
    document.getElementById('clear-done-todos') 
        .addEventListener('click', clearDoneTodos)
    
    // When they click the clear all todos button, run `clearAllTodos`.
    document.getElementById('clear-all-todos') 
        .addEventListener('click', clearAllTodos)
    
    
   
}

function addTodo(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

    // Get new todo from the new todo input field.
    const newToDo = document.querySelector('#new-todo').value;

    
    // Clear the input field of all text.
    const inputs = document.querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    
    // Put the todo and its "done-ness" in their respective arrays.
    todos.push(newToDo);
    
    // Create a new html element and put our new todo's text in there.
    const ol = document.querySelector('#todo-list');
    const newLi = document.createElement('li');
    newLi.innerText = newToDo;

    // Put our new element on the list part of our page!
    ol.appendChild(newLi);
     // Add an event listener on the newly created html element to launch
    // `toggleDone` when it's clicked.
        newLi.addEventListener('click', toggleDone)
}


function clearAllTodos(event) {
    // Stop page from reloading on button click.
    event.preventDefault()
    
    // Remove all todos from BOTH arrays.
    todos = [];
    isDone = [];
    
    // Remove all todos from the html.
    // You'll have to write that function too, but we'll call it here:
    removeAllChildrenOfOl();
}

function clearDoneTodos(event) {
    // Stop page from reloading on button click.
    event.preventDefault()
    /*
        Find which todos need to be removed and remove them from BOTH arrays.
        If you did it right when making them, you should be able to check the
        `isDone` array to figure out which ones are, in fact, done. Remember
        that there is a 1:1 relationship between `todos` indices and `isDone`
        indices!

        One way to do this is to build up a new array. Give that a try first!

    */ 
    const ol = document.querySelector('#todo-list');
    let index ;
    const newTodos = [];
    const newIsDone = [];
    for(let i = 0; i < isDone.length; i++){
        if(isDone[i] === true){
            newTodos.push(todos[i]);
            newIsDone.push(isDone[i]);
            todos = newTodos;
            isDone = newIsDone;
        }
    }

                
                
      
   


    /*
        Now remove the done todos from the html.

        Although it's not technically efficient as there is a slight time cost
        to rendering new elements on a web page, you might think not of removing
        certain todos but making a new set of lis to replace what we have. You
        may even already have some code to clear the whole list!

        You could do it the harder but more html efficient way instead, though.

        Your call.
    */


}

function toggleDone(event) {
    // No need to run `event.preventDefault` here; that default behavior only
    // applies to buttons.
    console.log('does it work?');
    
    // Grab the HTML element that was clicked.
    // If you don't know, the event parameter has what you need... somewhere.
    const Ol = document.querySelector('#todo-list');
    const currentLi = event.target;
    let index;
    
    // Find the index of the array that this todo resides in. There are a couple
    // ways to do this, and I'm sure you'll figure one out!
    for(let i = 0; i < Ol.childNodes.length; i++){
       if(Ol.childNodes[i].innerText === currentLi.innerText){
        index = i;
        }
    }
    console.log(todos);
    console.log(index);

    // *IF* it's not done yet, apply strikethrough. Otherwise, take that
    // strikethrough away!
    if(isDone[index]){
       currentLi.style.textDecoration = "none";
    } else {
       currentLi.style.textDecoration = "line-through"
    };


    // Toggle the "done-ness" of the same todo, using the isDone array.
    isDone[index] = !isDone[index];
    
    console.log(isDone)

}

function removeAllChildrenOfOl() {
    // Grab the ol.
    const ol = document.getElementById('todo-list');
    while(ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild)
    }
    // Remove all its children.
    // The way I like to do that is to continue to remove children as long as
    // there are some to remove.
    // Look at the methods `.hasChildNodes` and `removeChild`.
    // There are other ways too, though. Feel free to poke around.
 
}
