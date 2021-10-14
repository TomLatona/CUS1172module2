//JavaScript for Task List Application

document.addEventListener('DOMContentLoaded',function() {

    document.addEventListener('input', function() {
        //cant submit if theres no info in form
        if (document.querySelector("#task-title").value.length == 0) {
            document.querySelector("#submit").disabled = true;
        }
        else {
            document.querySelector("#submit").disabled = false;
        }
    })

    function pickColor(task_priority) {
        //set color of text for task priority
        if (task_priority == "High") {
            return "red";
        }
        else if (task_priority == "Medium") {
            return "orange";
        }
        else {
            return "cornflowerblue";
        }
    }

    let all_tasks = [];
    all_tasks.toString = () => {
        array.forEach(element => {
            return `element.innerHTML\n`
        });
    }

    function radioDec() {
        let status = document.querySelector("#pending").checked;
        return ((!status)?"line-through":"none");
    }

    function radioCheck(element) {
        let status = document.querySelector("#pending").checked;
        if(!status) 
        {
            element.querySelector(".checkbox").checked = true;
        }
    }

    function radioChoice() {
        if (document.querySelector("#pending").checked == true) 
        {
            return "pending";
        }
        else 
        {
            return "completed";
        }
    }

    document.querySelector("#add-task").onsubmit = () => {
        //create new li items using the form data
        let li = document.createElement('li');
        let task_title = document.querySelector("#task-title").value;
        let task_priority = document.querySelector("#task-priority").value;
        let task_status = radioChoice();
        li.innerHTML = 
            `<input class="checkbox" type="checkbox">
            <p class="displayed-task-title" style="text-decoration:${radioDec()}">${task_title}</p>
            <button class="remove">Remove</button>
            <span class="displayed-task-priority" style="color:${pickColor(task_priority)}">${task_priority} Priority </span>`        
        
        radioCheck(li);
        document.querySelector("#task-list").append(li);
        all_tasks.push(li);
        li.addEventListener('click', function(event) {
            element = event.target;
            if(element.className == "remove") 
            {
                element.parentElement.remove()
                index = all_tasks.indexOf(element.parentElement);
                all_tasks.splice(index,1)
            }
            else if(element.className == "checkbox") 
            {
                this.querySelector('.displayed-task-title').style.textDecoration = (this.querySelector(".checkbox").checked) ? "line-through" : "none";
            }
        })

        //set the whole form field back to its original values
        document.querySelector("#task-title").value = '';
        document.querySelector("#task-priority").value = "High";
        document.querySelector("#submit").disabled = true;
        document.querySelector("#pending").checked = "true";
        return false;
    }

})