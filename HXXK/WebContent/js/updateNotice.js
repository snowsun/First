$(document).ready(function(){
	$('#clearEditor').click(function(){
		CKEDITOR.instances.editor1.setData('');
	});
	$('#publishNotice').click(function(){
		var noticeInfo = CKEDITOR.instances.editor1.getData();
		if(noticeInfo == ''){
			alert("输入内容不能为空");
			return;
		}
		if(noticeInfo.length > 4096 ){
			alert("输入内容过多，不能超过4096字节");
			return;
		}
		noticeInfo = encodeURI(encodeURI(noticeInfo));
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
					alert("公告发布成功");
				}
		    }
		};
		xmlhttp.open("GET",server_context+"/server/admin/noticeInfo/updateNoticeInfo.jsp?noticeInfo="+noticeInfo+"&p="+Math.random(),true);
		xmlhttp.send();
	});
});