// common function
var $ = (id) => {
    return document.getElementById(id);
};
// show data
var showTasks = () => {
    var id = 0;
    $("content").innerHTML = "";
    var tasks = localStorage.getItem("tasks");
    var arrTasks = (tasks == null || tasks == "") ? [] : tasks.split(":");
    tasks = tasks == null ? "" : tasks;
    for (let task of arrTasks) {
        $("content").innerHTML += `<div class="task"><a href="#" id-toggle = "${id}">Delete </a><p>${task}</p></div>`;
        id++;
    }
    var list = document.getElementsByTagName("a");
    for (let a of list) {
        a.addEventListener("click",removeTask);
    }
}
showTasks();
// add data localstorage
$("add").onclick = () => {
    var task = $("input").value;
    var tasks = localStorage.getItem("tasks");
    tasks = (tasks == null || tasks == "") ? "" : tasks + ":" ;
    if (task == "") {
        alert("Pls input first");
    }
    else {
        localStorage.setItem("tasks", tasks + task );
    }
    $("input").value = "";
    showTasks();
};
// clear all  data
$("clear").onclick = () => {
    localStorage.clear();
    showTasks();
};
// delete data
function removeTask(e) {
    e.preventDefault();
    var index = this.getAttribute("id-toggle");
    var tasks = localStorage.getItem("tasks");
    var arrTasks = tasks.split(":");
    arrTasks.splice(index,1);
    tasks = arrTasks.join(":");
    if (tasks === "") {
        localStorage.clear();
    }
    else {
        localStorage.setItem("tasks",tasks);
    }
    showTasks();
};
