$(document).ready(function(){
	$('#clearEditor').click(function(){
		CKEDITOR.instances.editor1.setData('');
	});
	$('#publishMark').click(function(){
		var markInfo = CKEDITOR.instances.editor1.getData();
		var userID = $('#userID').text();
		if(userID == 'null'){
			alert("用户名为空,赶紧联系程序猿同学");
			return;
		}
		if(markInfo == ''){
			alert("输入内容不能为空");
			return;
		}
		if(markInfo.length > 4096 ){
			alert("输入内容过多，不能超过4096字节");
			return;
		}
		markInfo = encodeURI(encodeURI(markInfo));
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
					alert("数据库访问出错，请联系程序猿同学");
				}else if(flag =='success'){
					alert("简介发布成功");
				}
		    }
		};
		xmlhttp.open("GET",server_context+"/server/teacher/mark/updateMarkInfo.jsp?markInfo="+markInfo+"&userID="+userID+"&p="+Math.random(),true);
		xmlhttp.send();
	});
});