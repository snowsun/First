//include in userList.jsp
//查找所有用户信息
function searchData() {
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
			}else{
				document.getElementById("userTable").innerHTML = flag;
			}	
	    }
	};
	xmlhttp.open("GET",server_context+"/server/admin/userInfo/getUserByInput.jsp?p="+Math.random(),true);
	xmlhttp.send();
}
