<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../jsp/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../js/userManage.js"></script>
		<title>学生信息管理</title>
	</head>
	<body style="background-color:lightgreen;">
		<center>
			<input type="button" id="excelInput" value="从EXCEL表导入学生信息" style="font-family:'黑体';width:95%;height:30%;border-radius:10px;cursor:hand;" onClick="disStu('1')"/>
			<input type="button" id="handInput" value="手动导入学生信息" style="font-family:'黑体';width:95%;height:30%;border-radius:10px;cursor:hand;" onClick="disStu('2')"/>
			<input type="button" id="pswReset" value="学生密码重置" style="font-family:'黑体';width:95%;height:30%;border-radius:10px;cursor:hand;" onClick="disStu('3')"/>
			<iframe name="hidden_frame" id="hidden_frame" style="display:none;"></iframe>
			<!--
			
			下面部分从Excel导入信息
			
			-->
			<div id="ddd" style="display:none;">
				<br><br>
				<form action="../server/admin/studentInfo/upload.jsp" method="post" enctype="multipart/form-data" target="hidden_frame" onsubmit="return checkExt()">
				<input type="file" style="border-radius:5px;cursor:hand;" name="file" id="file">
				
				<br><br>
				<input type="submit" id="upload" style="width:50%;height:10%;border-radius:5px;cursor:hand;" value="上传">
				<br>
				<span id='hiddenClock' style="color:red;font-size:18px;font-family:'黑体';"></span>
				</form>
				
				<input type="button" id="import" style="width:50%;height:10%;border-radius:5px;cursor:hand;" disabled="disabled" value="导入" onClick="impToDB()">
				<br>
				<span id='hiddenRemark' style="color:red;font-size:18px;font-family:'黑体';"></span>
			</div>
			
			<!--
			
			下面部分手动导入信息
			
			-->
			<div id="handImp" style="display:none;">
				<br>
				<span style="color:red;font-size:18px;font-family:'黑体';">请仔细核实学生姓名学号，导入错误后将无法恢复</span>
				<br>
				学生学号:<input type="text" id="id" style="width:20%;height:10%;border-radius:8px;">
				学生姓名:<input type="text" id="name" style="width:20%;height:10%;border-radius:8px;">
				<br><br>
				<button id="import2" style="width:30%;height:10%;border-radius:5px;cursor:hand;"  onClick="impToDB2()">导入</button>			
				<br>
				<span id='hiddenRemark2' style="color:red;font-size:18px;font-family:'黑体';"></span>
			</div>
			
			<!--
			
			下面部分手动重置密码
			
			-->
			<div id="resetPsw" style="display:none;">
				<br><br>
				学生学号:<input type="text" id="id2" style="width:20%;height:10%;border-radius:8px;">
				<button id="reset" style="width:15%;height:10%;border-radius:5px;cursor:hand;"  onClick="resetPsw()">重置</button>
				<br>
				<span id='hiddenRemark3' style="color:red;font-size:18px;font-family:'黑体';"></span>
			</div>
			
		</center>
	</body>
</html>