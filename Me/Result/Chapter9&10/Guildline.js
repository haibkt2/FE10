//init
// get task
var task = localStorage.getItem("");
var tasks = task.split(":");
for(let index in tasks){
	$("").innerHTML = '<a>Delete</a>' + '<p>'+tasks[index]+'</p>';
}
// add task
	1.get value input, check validate
	2.get old task
	3.add new : task_new = task_old + input_value
	4.set text show : $("id_text_block_task") = task_new
// Clear all tasks
	1. invoke method remove key in localStorage
// Chear task
	1.asign event for a tag
// event clear task
	1. var tag_a = get Elemtn tag a =>> Array
	2.loop tag_a : i=> tag_a.length -> asign function del
// function del
	1.use this -> get text--> text_del
	2.get task -> convert tasks[]
	3.loop tasks : 0 -> tasks.lenght
	4.compare text_del with tasks[i] -> delete
	5.set new localStorage