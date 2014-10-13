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
		<a id="ok"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onClick="submit()">提交选课信息</a>  
	
		<span id="_NUM_" style="display:none;"></span>
		<span id="_ROWS_" style="display:none;"></span>
		
	</body>
</html>


















