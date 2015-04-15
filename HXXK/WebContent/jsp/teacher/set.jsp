<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>学生列表</title>
<script type="text/javascript" src="<%=basePath%>js/teacher/set.js"></script>
</head>
<body onLoad = "onloading()" style="background:lightgreen">
	<span id="teacherID" style="display:none;"><%=session.getAttribute("userID")%></span>
	<table border="1" id="table" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
		<tr id="ttitle" align="center" style="color:DimGray;border-style:Solid;background:Silver">
		<td>编号</td><td>实验名称</td><td>期数</td><td>时间</td><td>DeadLine</td><td>下载</td><td>上传批改后作业</td><td>发布要求</td>
		</tr>
	</table>
	
	
	<a id="gen" title="点击可以导出课表至桌面位置" href="javascript:void(0)" onClick="downloadSchedule()">点击此处下载课表</a>
		<div id="progress" class="easyui-progressbar" data-options="value:0" style="background-color:white;width:auto;display:none;"></div> 	
		<span id="hs"></span>
	<a id="dwn" href="../../scheduleLocation/Schedule.xls" style="display:none;">课表生成成功,点击此处下载课表</a>
	
	<div id="dialog" class="easyui-dialog" style="width:600px;height:300px"
			data-options="title:'My Dialog',buttons:'#bb',modal:true,closed:true,
			onClose:function(){document.getElementById('ta').disabled=true;},
			toolbar:[{
				text:'编辑',
				iconCls:'icon-edit',
				handler:function(){document.getElementById('ta').disabled='';}
			}]">
			<textarea id='ta' rows="14" cols="78" disabled></textarea>
	</div>
	<div id="bb">
		<a href="#" class="easyui-linkbutton" onClick="save_request()">保存</a>
		<a href="#" class="easyui-linkbutton" onClick="$('#dialog').window('close');">关闭</a>
	</div>
		
	<!-- BUFFER FOR MARK -->
	<span id="hidden_id" style="display:none;"></span>
	<span id="hidden_turn" style="display:none;"></span>
</body>
</html>

