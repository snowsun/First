<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../jsp/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../js/checkChoose.js"></script>
		<title>课程信息设置</title>
	</head>
	<body style="background-color:lightgreen;font-family:'微软雅黑';" onLoad="onloading()">		
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
						实验室
					</td>
					<td>
						教师
					</td>
					<td>
						实验时间
					</td>
					<td>
						上限
					</td>
				</tr>
			</table>	
		</center>
		<hr />	
		<span id="_NUM_" style="display:none;"></span>
		<span id="_ROWS_" style="display:none;"></span>		
		
		<div id="dd" class="easyui-dialog" title="My Dialog" style="width:200px;height:300px;"   
        	data-options="iconCls:'icon-save',resizable:true,modal:true,closed:true,
        	buttons:[{
				text:'复制信息',
				handler:function(){var v=document.getElementById('list').innerHTML;window.clipboardData.setData('text',v);alert('学生信息复制成功');}
			}]">   
    		<span id="list"></span>
		</div>  
		<a id="dwn" title="点击可以导出课表至桌面位置" href="javascript:void(0)" onClick="downloadSchedule()">点击此处下载课表</a>
		<div id="progress" class="easyui-progressbar" data-options="value:0" style="background-color:white;width:auto;display:none;"></div> 	
		<span id="hs"></span>
	</body>
</html>


















