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
			<div id="btn">
			<a id="add"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-add'" onClick="add()">增加实验室</a>  
			<a id="sub"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-remove'" onClick="remove_laboratory()">删除实验室</a>
			<a id="change"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-edit'" onClick="change_laboratory()">修改实验室</a>
			<a id="save" href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-save'" style="display:none;" onClick="save_laboratory()">保存实验室</a>
			<a id="saveEdit" href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-edit'" style="display:none;" onClick="save_edit_laboratory()">修改实验室</a>

			</div><br><br>
			
			<table border="1" id="table" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
			</table>	
		</center>
		
		<!-- HIDDEN_SPAN for recording laboratory's number -->
		<span id="record" style="display:none;"></span>
		
		<span id="record_room" style="display:none;"></span>
	</body>
</html>