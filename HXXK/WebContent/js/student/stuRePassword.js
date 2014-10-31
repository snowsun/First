//修改密码
$(document).ready(function(){
	$('#clearInput').click(function(){
		document.getElementById("oldPassword").value="";
		document.getElementById("newPassword").value="";
		document.getElementById("newPasswordAffirm").value="";
	});
	$('#changePassword').click(function(){
		var userID = $('#userID').text();
		var oldPassword = $('#oldPassword').val();
		var newPassword = $('#newPassword').val();
		var newPasswordAffirm = $('#newPasswordAffirm').val();
		
		if( newPassword.length<=3){
			alert('新密码长度过短,请重新填写！');
			return;
		}
		if(newPassword!=newPasswordAffirm){
			alert("新密码两次输入的值不匹配");
			return;
		}
		
		var xmlhttp;
		if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				var flag = xmlhttp.responseText.replace(/^\s*|\s*$/g,"");
				if(flag =='fail'){
					alert("数据库操作失败,请联系程序猿同学");
					return;
				}else if(flag =='oldPasswordError'){
					alert("原密码输入有误,请重新操作");
					return;
				}else if(flag =='success'){
					alert("修改成功,请记住你的新密码");
				}
					
		    }
		};
		xmlhttp.open("GET",server_context+"/server/student/password/changePassword.jsp?userID="+userID+"&oldPassword="+oldPassword+"&newPassword="+newPassword+"&p="+Math.random(),true);
		xmlhttp.send();
		
	});
});