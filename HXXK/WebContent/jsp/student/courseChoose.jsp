<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../../js/student/courseChoose.js"></script>
		<title>课程信息设置</title>
	</head>
	<body style="background-color:lightgreen;font-family:'微软雅黑';" onLoad="onloading_courseChoose()">
		<a id="add"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-reload'" onClick="refresh()">刷新页面/重新选课</a>  
		<a id="ok"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onClick="submit()">提交选课信息</a>  
		
		Tips：学生可以通过点击对应课程的名称查看该课程的相关备注
		<hr />
		
		<center>
			<table border="1" id="table" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
				<tr id='_TITLE_' align="center" style="background:Silver;">
					<td>
						编号
					</td>
					<td>
						实验名称
					</td>
					<td>
						周期
					</td>
					<td>
						实验室
					</td>
					<td>
						教师
					</td>
					<td>
						实验时间
					</td>
					<td>
						状态
					</td>
					<td>
						人数限制
					</td>
				</tr>
			</table>	
		</center>
		<hr />	
		<span id="_NUM_" style="display:none;"></span>
		<span id="_ROWS_" style="display:none;"></span>
		
		<!-- 备注输入框 -->
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
		<a href="#" class="easyui-linkbutton" onClick="$('#dialog').window('close');">关闭</a>
		</div>
		
		<!-- BUFFER FOR MARK -->
		<span id="hidden_id" style="display:none;"></span>
		
		
	</body>
</html>


















