<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../../js/student/courseChoose.js"></script>
		<title>课程信息设置</title>
	</head>
	<body style="background-color:lightgreen;font-family:'微软雅黑';" onload="loading_schedule()">
		<h1>
			<%=session.getAttribute("userID")%>同学，你今年综合化学所选实验课表如下所示，请按照时间与地点准时参与实验！
		</h1>
		<hr/>
		<center>
			<table border="1" id="table" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
				<tr id='_TITLE_' align="center" style="background:Silver;">
					<td>
						编号
					</td>
					<td>
						实验名称---(点击可查看)
					</td>
					<td>
						周期
					</td>
					<td>
						实验室
					</td>
					<td>
						教师---(点击可查看)
					</td>
					<td>
						实验时间
					</td>
					<td>
						所属期数
					</td>
				</tr>
			</table>	
			
		</center>
		<hr />
		<h2>
		注意：<br>
		1.本学期第一期实验将从第<span id="HHH" style="color:red;font-size:20px;"></span>周开始进行，每期实验将持续3周时间，以此关系顺延，请合理安排时间，及时参与实验！
		<br>
		2.选课系统将于<span id="DDL" style="color:red;font-size:20px;"></span>关闭，届时您将不能再选课或者修改选课，请按时完成选课相关的所有操作！
		</h2>
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
		
		
		
		
		<div id="dialog2" class="easyui-dialog" style="width:600px;height:300px" data-options="title:'教师简介',closed:true,modal:true">
			<div id="teaInfo" class="easyui-panel"  style="width:auto;height:auto;background:#fafafa;margin:0px auto;"   
                data-options="iconCls:'icon-ok',closable:false,collapsible:true,minimizable:false,maximized:true">   
            </div>  
		</div>
		
	</body>
</html>


















