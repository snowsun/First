<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../jsp/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>cfs</title>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../js/RECH.js"></script>
	</head>
	<body style="background-color:lightgreen;font-family:'微软雅黑';">
		<div id="dialog" class="easyui-dialog" style="width:400px;height:180px"
		data-options="title:'message',modal:true,
			buttons:[{
				text:'确认',
				handler:function(){RECH();}
			},{
				text:'关闭',
				handler:function(){}
			}]">
			<center>
			<span style="color:red;">请注意，若该生已经选课，将清除该生之前所有选课记录。</span>
			<br><br><br>
         	请输入学生学号
   			<input id="stuId" type="text"/></center>
		</div>

		<h1 id="msg"></h1>
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
			<hr/>
			<a id="re"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-reload'" style="display:none;" onClick="reChoose()">重新选课</a>  
			<a id="ok"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-ok'"     style="display:none;" onClick="submit()">提交选课信息</a>  
		</center>
		<span id="_NUM_" style="display:none;"></span>
		<span id="_ROWS_" style="display:none;"></span>
		<span id="hiddenStuID" style="display:none;"></span>
		
		
	</body>
</html>


















