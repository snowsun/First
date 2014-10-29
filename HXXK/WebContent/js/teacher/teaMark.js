function getMarkInfo(){
	var userID = $('#userID').text();
	if(userID == 'null'){
		alert("我嚓,用户名居然是空的?请联系程序员同学");
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
			if(flag =='failed'){
				alert("数据库访问出错，请联系管理员");
				return;
			}else if(flag =='zero'){
				document.getElementById("markInfo").innerHTML="尚未编辑教师简介";
				return;
			}else{
				document.getElementById("markInfo").innerHTML=flag;
			}
				
	    }
	};
	xmlhttp.open("GET",server_context+"/server/teacher/mark/getMarkInfo.jsp?userID="+userID+"&p="+Math.random(),true);
	xmlhttp.send();
}