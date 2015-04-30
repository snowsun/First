<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
	<script type="text/javascript">
		function reset(){
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
					if(flag=='failed')
						alert('数据库操作失败，请稍后重试！');
					else{
						top.location.href = '../login.jsp';
					}
			    }
			};
			xmlhttp.open("GET","../../server/student/reset_FL.jsp?p="+Math.random(),true);
			xmlhttp.send();
		}
	</script>
</head>
<body style="background:lightgreen">
	<span style="font-family:'黑体';">
	点击下方按钮即可重置可用时间，该过程不可逆！重置成功将自动退出，你需要重新登陆系统，若你之前已经选课，重置后，你需要到【课程管理】-【重新选课】中，清除之前的选课记录，进行重新选课！
	</span>
	<center>
	<input id="reset" value="一键重置" type="button" style="font-size:25px;font-family:'黑体';background-image:url(../../image/round3.png); width:256px;height:256px;background-color:lightgreen;border-radius:125px;cursor:pointer;" onClick="reset()">
	</center>
</body>
</html>