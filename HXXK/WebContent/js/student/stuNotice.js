function getNoticeInfo(){
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
			}else if(flag =='null'){
				document.getElementById("noticeInfo").innerHTML="当前无公告信息";
				return;
			}else{
				var notice = flag.split('#')[0];
				document.getElementById("noticeInfo").innerHTML=notice;
				
				var time = flag.split('#')[1].split('*');
				var obj = document.getElementById('time');
				for(var i=0 ; i< time.length-1 ; i++){
					var nowDate = new Date();
					var oldDate = new Date(time[i].split('.')[0].replace(/-/g,"/"));
					var days = Math.floor((nowDate.getTime() - oldDate.getTime())/(24*60*60*1000));
					obj.options.add(new Option(time[i]+'------【'+days+'】天前',i)); //这个兼容IE与firefox
				}
			}
				
	    }
	};
	xmlhttp.open("GET",server_context+"/server/student/notice/getNoticeInfo.jsp?p="+Math.random(),true);
	xmlhttp.send();
}


function check_notice(){
	var index ,obj;
	obj = document.getElementById('time');
	index=obj.selectedIndex;
	var time = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	time = time.split('------')[0];
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
			}
			else{
				document.getElementById("noticeInfo").innerHTML=flag;
			}
	    }
	};
	xmlhttp.open("GET",server_context+"/server/student/notice/getXTimeNotice.jsp?time="+time+"&p="+Math.random(),true);
	xmlhttp.send();
}

function delete_notice(){
	$.messager.confirm('警告确认框', '该操作不可恢复，确定要删除此公告？', function(r){
		if (r){
			var index ,obj;
			obj = document.getElementById('time');
			index=obj.selectedIndex;
			var time = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
			time = time.split('------')[0];
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
					}
					else{
						window.location.reload(true);
					}
			    }
			};
			xmlhttp.open("GET",server_context+"/server/student/notice/deleteNotice.jsp?time="+time+"&p="+Math.random(),true);
			xmlhttp.send();
		}			
		else
			return;	
	});
}