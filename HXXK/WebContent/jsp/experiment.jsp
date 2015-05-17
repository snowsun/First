<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../jsp/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../js/courseManage.js"></script>
		<title>课程信息设置</title>
	</head>
	<body style="background-color:lightgreen;font-family:'微软雅黑';" onLoad="onloading_experiment()">
		<center>
			<div id="btn">
			<a id="add"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-add'" onClick="add_experiment()">增加实验</a>  
			<a id="sub"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-remove'" onClick="remove_experiment()">删除实验</a>
			<a id="edit"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-edit'" onClick="edit_experiment()">修改实验</a>
			<a id="save" href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-save'" style="display:none;" onClick="save_experiment()">保存</a>
			<a id="upEdit" href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-edit'" style="display:none;" onClick="upEdit_experiment()">修改</a>

			</div><br>
			<table border="1" id="table" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
				<tr align="center" style="background:Silver;">
					<td>
					</td>
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
					<td>
						期数设置
					</td>
				</tr>
			</table>	
		</center><br>管理员可以通过点击实验名称，添加、修改实验说明！
		
		<!-- 试验编号 -->
		<span id='_ID_'></span>
		
		
		
		
		
		<!-- 试验编号 -->
		<select id="_NO_"  name="dept" style="width:100%;display:none;">   
			<%
				for(int i=1;i<=200;i++)
				{			
				%>
					<option value=<%=i-2%>><%=i%></option>
				<%
				}
			%>		
		</select>
		  
		<!-- 试验名称-->
		<input id="_NAME_" type="text" style="width:100%;display:none;">
		<!-- 试验周期 -->
		<span id="_TURNAL_" style="display:none;"></span>
		<!-- 实验室 -->
		<select id="_LABORATORY_"  name="dept" style="width:100%;display:none;">  
		</select>
		<!-- 教师-->
		<select id="_TEACHER_"   name="dept" style="width:100%;display:none;">  
		</select>
		<!-- 时间-->
		<select id="_TIME_"  name="dept" style="width:100%;display:none;">  
		</select>
		<!-- 状态-->
		<select id="_STATUS_"  name="dept" style="width:100%;display:none;">  
			<option value="1">开放</option>
		</select>
		<!-- 人数限制-->
		<select id="_LIMIT_"  name="dept" style="width:100%;display:none;">  
			<%
				for(int i=1;i<=100;i++)
				{			
				%>
					<option value=<%=i-1%>><%=i%></option>
				<%
				}
			%>		
		</select>
		
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
		<a href="#" class="easyui-linkbutton" onClick="save_mark()">保存</a>
		<a href="#" class="easyui-linkbutton" onClick="$('#dialog').window('close');">关闭</a>
		</div>
		
		<!-- BUFFER FOR MARK -->
		<span id="hidden_id" style="display:none;"></span>
		
		<span id="hidden_t" style="display:none;"></span>
	
	</body>
</html>


















