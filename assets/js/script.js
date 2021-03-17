var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskIdCounter = 0;

var pageContentEl = document.querySelector("#page-content");


//important to place this before the eventlistener

var taskFormHandler = function (event){
    
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput= document.querySelector("select[name='task-type']").value;
  
    //package up data as an object 
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput,
    };
    
    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    
    formEl.reset();
    
    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

    var createTaskEl = function(taskDataObj) {
        
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className="task-item";
        
    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    
    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className="task-info";
    
    //add HTML content to div
    taskInfoEl.innerHTML= "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
        
    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
        
    //increase task counter for next unique id
    taskIdCounter++;
    };

    var createTaskActions = function(taskId) {
        
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className= "task-actions";
        
    //create edit button
    var editButtonEl = document.createElement("button");
        editButtonEl.textContent= "Edit";
        editButtonEl.className= "btn edit-btn";
        editButtonEl.setAttribute("data-task-id", taskId);
    
    actionContainerEl.appendChild(editButtonEl);
        
    //create delete button
    var deleteButtonEl=document.createElement("button");
        deleteButtonEl.textContent="Delete";
        deleteButtonEl.className="btn delete-btn";
        deleteButtonEl.setAttribute("data-task-id", taskId);
        
    actionContainerEl.appendChild(deleteButtonEl);
        
    var deleteTask=function(taskId) {
        var taskSelected=document.querySelector(".task-item[data-task-id='" + taskId + "']");
        taskSelected.remove();
    };

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className="select-status";
    statusSelectEl.setAttribute("name","status-change");
    statusSelectEl.setAttribute("data-task-id",taskId);
    
    actionContainerEl.appendChild(statusSelectEl);
        
    var statusChoices=["To Do", "In Progress", "Completed"];
    for (var i=0; i < statusChoices.length; i++) {
        //create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);
        
        //append to select
        statusSelectEl.appendChild(statusOptionEl);
    }
        
    return actionContainerEl;
    }

// type of event we'll listen for and the event response to execute when the even is triggered. 
//create a new task, styled the task item, add the text, append this element to task list. These 4 steps are key. 
formEl.addEventListener("submit", taskFormHandler); 

var taskButtonHandler = function(event) {
    console.log(event.target);
    
    if (event.target.matches(".delete-btn")) {
        //get the elements task id
        var taskId= event.target.getAttribute("data-task-id);
        deleteTask(taskId);
    }
};
   
pageContentEl.addEventListener("click", taskButtonHandler);
