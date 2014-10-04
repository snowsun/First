<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../jsp/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../js/main.js"></script>
		<title>教师信息管理</title>
	</head>
	<body>
		<center>
			<input type="button" id="handInput" value="手动导入教师信息" style="font-family:'黑体';width:95%;height:30%;border-radius:10px;cursor:hand;" onClick="disTea('1')"/>
			<input type="button" id="pswReset" value="教师密码重置" style="font-family:'黑体';width:95%;height:30%;border-radius:10px;cursor:hand;" onClick="disTea('2')"/>
			<input type="button" id="deleteTeacher" value="教师删除" style="font-family:'黑体';width:95%;height:30%;border-radius:10px;cursor:hand;" onClick="disTea('3')"/>
			<iframe name="hidden_frame" id="hidden_frame" style="display:none;"></iframe>		
			<!--
			
			下面部分手动导入信息
			
			-->
			<div id="handImp" style="display:none;">
				<br>
				<span style="color:red;font-size:18px;font-family:'黑体';">请仔细核实教师姓名工号，导入错误后将无法恢复</span>
				<br>
				教师工号:<input type="text" id="id" style="width:20%;height:10%;border-radius:8px;">
				教师姓名:<input type="text" id="name" style="width:20%;height:10%;border-radius:8px;">
				<br><br>
				<button id="import2" style="width:30%;height:10%;border-radius:5px;cursor:hand;"  onClick="impToDB3()">导入</button>			
				<br>
				<span id='hiddenRemark1' style="color:red;font-size:18px;font-family:'黑体';"></span>
			</div>
			
			<!--
			
			下面部分手动重置密码
			
			-->
			<div id="resetPsw" style="display:none;">
				<br><br>
				教师工号:<input type="text" id="id2" style="width:20%;height:10%;border-radius:8px;">
				<button id="reset" style="width:15%;height:10%;border-radius:5px;cursor:hand;"  onClick="resetPsw2()">重置</button>
				<br>
				<span id='hiddenRemark2' style="color:red;font-size:18px;font-family:'黑体';"></span>
			</div>
			
		</center>
	</body>
</html>