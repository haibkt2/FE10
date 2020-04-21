// page longin
// 1.get info user input
// 2.check info
//		2.1 login error -> show mes err
//		2.2 login ss 	-> 
//						2.2.1 is admin -> show manager
//						2.2.2 orther   -> show index
// 1.get info
name = $('#id_name').val();
pass = $('#id_pass').val();
// 2.check info
pass_new = localStorage.getItem(name);



if(pass_new == null) // --> alert err
if(pass == pass_new) {
	if(name == 'admin') // goto page manager
		{
			$('#id_form').attr('action', 'manager.html');
			$('#id_form').submit();
		}
	else // goto index
		{
			$('#id_form').attr('action', 'index.html');
			$('#id_form').submit();
		}
}
// page manager
// 1. button add
// 1.1 validate
// 1.2 show info input + value user
// 1.3 reset form, focus

/*<tr>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>*/
$('id_bt_add').click(function(){
	code_input = $('#id_code').val();
	var html = '<tr>'
			+ '<td><input type = "radio"></td>'
			+ '<td>'+ code_input+'</td>'
			+ '<td>'+ name_input+'</td>'
			+ '<td>'+ address_input+'</td>'
			+ '<td>'+ email_input+'</td>'
			+ '<td>'+ usename_input+'</td>'
			+ '</tr>';
			$('#id_table').append(html);
			// btton type = reset
			// <button type ='botton'>add</button>
			$('#id_form').trigger('reset');
			$('#id_name').focus();
			// save info add into local
			
			// init page
			// save json
			// array[objec1,object2, ...]
			//array --> json --> string
			var arrayString = JSON.stringify(array);
			// save 
			localStorage.setItem('user_register', arrayString);
			// get
			var str = localStorage.getItem('user_register');
			//convert str to array
			// loop array display

});

// button 
















