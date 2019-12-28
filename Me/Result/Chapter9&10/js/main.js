var $ = function(id){
    return document.getElementById(id);
}
// function common get task from localstorage
var getTasks = function() {
   // get task from localstorage
    var task = localStorage.getItem("my_task"); // type String
    // convert String => array
    return (task == null || task == "") ? [] :task.split(":");
}
function showTask() {
    // get task from localstorage
    var tasks = getTasks();
    // create html, display task
    var html = "";
    // display format : 
    // <p><a href = "#" toogle_id = "task_1" >Delete</a>Content task 01</p>
    // <p><a toogle_id = "task_2" >Delete</a>Content task 02</p>

    for (i in tasks) {
            html += "<p><a href ='#' toogle_id ='task_" + i
                +"'>Delete </a>"
             + tasks[i] + "</p>";
        }
    $("content").innerHTML = "";
    $("content").innerHTML = html;
    asignEvent();
}
$("add").onclick = function addTask() {
    var conntent_task = $("task").value;
    if(conntent_task.trim() != ""){
        var task = localStorage.getItem("my_task");
        task = (task == "" || task == null) ? "" : task+":";
        task += conntent_task;
        localStorage.setItem("my_task", task);
        showTask();
        $("task").value = "";
    } else alert("error");
}
function asignEvent() {
    var tag_a = document.getElementsByTagName("a");
    for (i in tag_a) {
        // asign event delete task for tag a
        tag_a[i].onclick = deleteTask;
    }
}
// invoke and execute method display show task
// when load page, will execute
showTask();
// function delete task
function deleteTask() {
    var tag_a = this;
    // get toogle_id, have value format task_0,task_1...
    var toogle_id = tag_a.getAttribute("toogle_id");
    // get tasks localstorage: type array
    var tasks = getTasks();
    // get index of task
    var index = toogle_id.split("_")[1];
    // remove task
    tasks.splice(index, 1);
    console.log(tasks);
    localStorage.setItem("my_task", tasks.join(":"));
    showTask();
}
