<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>用户查询</title>
<script type="text/javascript" src="<%=basePath%>js/userList.js"></script>
</head>
<body onLoad = "getStu()" style="background:lightgreen">
<div id="div1">
	<center> 
		【<span style="color:red;">红色：未选课</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:green;">绿色：已选课</span>】
		<hr />
		<table border="1" id="table" style="width:50%;color:black;border-style:Solid;text-decoration:none;border-collapse:collapse;">	
		<tr align='center' style="font-size:20px;">
		<td style="font-size:15px;">学生学号   </td>
		<td style="font-size:15px;">学生姓名   </td>
		<td style="font-size:15px;">选课状态   </td>
		<td style="font-size:15px;">点击为该生选课   </td>
		<td style="font-size:15px;">删除该生  </td>
		</tr>
		</table>
	</center>
</div>

<div id="div2" style="display:none;">
	【<span id="nowId"></span>】同学的选课情况如下所示：<hr />
	<center>
			<table border="1" id="table2" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
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
						所属期数
					</td>
				</tr>
			</table>	
			<hr />
			<a id="yes"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-back'" onClick="reChoose()">返回学生信息</a>
			<a id="yes"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-reload'" onClick="reChoose()">重置该生选课</a>  
		</center>
		
</div>

<div id="div3" style="display:none;">
	
</div>
</body>
</html>