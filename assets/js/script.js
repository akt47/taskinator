var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

//important to place this before the eventlistener

var createTaskHandler = function (event){
    
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput= document.querySelector("select[name='task-type']").value;
  
    //create list item
    var listItemEl = document. createElement("li");
    listItemEl.className="task-item";
    
    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className="task-info";
    
    //add HTML content to div
    taskInfoEl.innerHTML= "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}
// type of event we'll listen for and the event response to execute when the even is triggered. 
//create a new task, styled the task item, add the text, append this element to task list. These 4 steps are key. 
formEl.addEventListener("submit", createTaskHandler); 
   
