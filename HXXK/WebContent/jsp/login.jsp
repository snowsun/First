<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../jsp/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<link rel="shortcut icon" href="favicon.ico" />
		<script charset="utf-8" language="javascript" src="../js/login.js"></script>
		<link rel="stylesheet" href="../css/login.css"/>
		<title>南京大学化学实验教学中心 </title>
		
		<script>
			if (document.addEventListener){//如果是Firefox		
				document.addEventListener("keypress", Query, true);	
			}
			else{		
				document.attachEvent("onkeypress", Query);	
			}
			
			function Query(event){
				if(event.keyCode==13){
					document.getElementById("login").click();
					event.returnValue = false ;
				}
			}
		</script>
		
	</head>
	<body  onLoad="onLoading()" style="background-color:lightblue">
		<%
			session.invalidate();
		%>	
		<div class="title" id="face">
			<img src="../image/login/22.png">
			<img src="../image/login/33.png">
		</div>
		<div class="icon" id="qwe" style="cursor:hand;">
			<div class="loginBox" id="box" style="display:none">
				<img src="../image/login/loginBox.png">
				<div class="username">
					<input type="text" id="username" placeholder="username" style="font-size:20;width:200px;height:30px;background-color:transparent;border:0;background-image:url(image/none.png)"/>
				</div>
				<div class="password">
					<input type="password" id="password" placeholder="password" style="font-size:20;width:200px;height:30px;background-color:transparent;border:0;background-image:url(image/none.png)"/>
				</div>
				<div class="login" id="login" style="cursor:hand; background-image:url(../image/none.png)" onClick="log('0')"></div>
				<div class="back"  id="back"  style="cursor:hand; background-image:url(../image/none.png)" onClick="back()"></div>
				<div class="fp"  id="fp"  style="cursor:hand; background-image:url(../image/none.png)" onClick="ffg()"></div>
			</div>
			<img id="no1" src="../image/login/admin.png" style="cursor:hand;"    onClick="go_login('no1')">
			<img id="no2" src="../image/login/student.png" style="cursor:hand;"  onClick="go_login('no2')">
			<img id="no3" src="../image/login/teacher.png" style="cursor:hand;"  onClick="go_login('no3')">	
			<br>
			<img id="no11" src="../image/login/a.png">
			<img id="no22" src="../image/login/s.png">
			<img id="no33" src="../image/login/t.png">
		</div>
	</body>
</html>