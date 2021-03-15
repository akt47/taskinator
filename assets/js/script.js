var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
var tasksToDoEl = document.querySelector("#tasks-to-do");

//important to place this before the eventlistener

var createTaskHandler = function (){
    var listItemEl = document. createElement("li");
    listItemEl.className="task-item";
    listItemEl.textContent="This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}
// type of event we'll listen for and the event response to execute when the even is triggered. 
//create a new task, styled the task item, add the text, append this element to task list. These 4 steps are key. 
buttonEl.addEventListener("click", createTaskHandler); 