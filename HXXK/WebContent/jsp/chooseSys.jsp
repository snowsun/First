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
	</head>
	<body onLoad="onLoading()"> 	
		<div class="button">
			<input type='button' id="button1" value="学期选课系统" style="font-family:'幼圆';font-size:70px;color:white;width:50%;height:99%;border-radius:40px;background-color:lightblue; cursor:hand" onClick="log('xuanke')" />
			<input type='button' id="button2" value="作业提交系统" style="font-family:'幼圆';font-size:70px;color:white;width:49%;height:99%;border-radius:40px;background-color:lightgreen; cursor:hand" onClick="log('zuoye')"/>	
		</div>
	</body>
</html>