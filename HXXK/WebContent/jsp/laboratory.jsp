<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../jsp/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../js/courseManage.js"></script>
		<title>课程信息全局设置</title>
	</head>
	<body style="background-color:lightgreen;font-family:'微软雅黑';" onLoad="onloading_laboratory()">
		<center>
			<div id='btn'>
			<a class="easyui-linkbutton" data-options="iconCls:'icon-add'" onClick="add_">增加实验室</a>  
			<a class="easyui-linkbutton" data-options="iconCls:'icon-remove'">删除实验室</a>
			</div><br><br><br>
			
			<table border="1" id="table" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
			</table>
		</center>
	</body>
</html>