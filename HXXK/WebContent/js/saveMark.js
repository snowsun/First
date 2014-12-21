function beginMark(){
	$.messager.progress({
		title:'操作进度',
		msg:'正在压缩文件，这可能需要较长一段时间，请稍等...',
		text:''
	}); 
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
			if(flag!='failed'){
				window.location.href="../saveMark/"+flag;
				$.messager.progress('close');
			}
			else{
				$.messager.progress('close');
				$.messager.alert('警告','下载失败,原因有可能为:<br>1.网络异常，请检查后重试<br>2.服务器异常，请前往服务器手动下载');
				
			}
	    }
	};
	xmlhttp.open("GET",server_context+"/server/dwnMark.jsp?p="+Math.random(),true);
	xmlhttp.send();
	
}