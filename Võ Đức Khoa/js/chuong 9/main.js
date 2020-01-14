// common fuction
var $ = function(id) {
        return document.getElementById(id)
    }
    // get value localstorage
var getTask = function() {
        var tasked = localStorage.getItem('tasked');
        return (tasked == null || tasked == "") ? [] : tasked.split(":");
    }
    // add task
$('add').onclick = function() {
    var add = $('task').value;
    var tasked = localStorage.getItem('tasked');
    var content = "";
    content = (tasked == null || tasked.trim() == "") ? add : tasked + ":" + add;
    localStorage.setItem('tasked', content);
    showTask();
}

function showTask() {
    var tasks = getTask();
    var html = "";
    // for (i in tasks) {
    //     html += "<p><a href='#' toogle_id='task_" + i + "'> Delete <\a>" + tasks[i] + "<\p>";
    // }
    for (i in tasks) {
        html += "<p><a href ='#' toogle_id ='task_" + i + "'>Delete </a>" + tasks[i] + "</p>";
    }
    $('task').value = "";
    $('content').innerHTML = html;
    asignEvent();
    //asign event
}
showTask();
//evetn asign
function asignEvent() {
    var tag_a = document.getElementsByTagName("a");
    for (i in tag_a) {
        tag_a[i].onclick = deleteTask;
    }
}

function deleteTask() {
    var tag_a = this;
    // get toogle_id, have value format task_0,task_1...
    var toogle_id = tag_a.getAttribute('toogle_id'); // get tasks localstorage: type array
    var tasks = getTask();
    // get index of task
    // ex:toogle_id = task_1 => [task,1]
    var toogle_arr = toogle_id.split("_");
    var index = toogle_arr[1];
    /*var index = toogle_id.split("_")[1]; */
    // remove task
    tasks.splice(index, 1);
    localStorage.setItem("tasked", tasks.join(":"));
    showTask();
}
$('clear').onclick = function() {
    localStorage.removeItem('tasked');
    $('content').innerHTML = "";
}