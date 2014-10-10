<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../jsp/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<script type="text/javascript" src="../js/courseManage.js"></script>
		<title>课程信息全局设置</title>
	</head>
	<body onLoad="onLoading()" style="background-color:lightgreen;font-family:'微软雅黑';color:blue;" >
	
		<!-- 这里有一个极其重要的关键隐藏 -->
		<div style="display:none;">
		<span id="IF_CONFIG"></span>
		<span id="IF_USED"></span>
		<span id="YEAR"></span>
		<span id="LAB_NO"></span>
		<span id="BEGIN_TIME"></span>
		<span id="END_TIME"></span>
		<span id="WEEK"></span>
		</div>
		
		<center> 
		<table id="opTable" border="1">
		<tr>
		<td>请选择当前年份   </td>
		<td>
		<select id="cc" class="easyui-combobox" name="dept" style="width:200px;">   
			<%
				for(int i=2014;i<=2099;i++)
				{			
				%>
					<option value=<%=i-2014%>><%=i%></option>
				<%
				}
			%>		
		</select>  
		</td>
		</tr>
		
		<tr>
		<td>请选择学生所需实验数目    </td>
		<td>
		<select id="dd" class="easyui-combobox" name="dept" style="width:200px;">   
			<%
				for(int i=2;i<=6;i++)
				{			
				%>
					<option value=<%=i-2%>><%=i%></option>
				<%
				}
			%>		
		</select>  
		</td>
		</tr>
		<tr>
		<td>请选择选课系统开启日期  &nbsp</td>
		<td>
		<input id="ee" type="text" class="easyui-datebox" required="required"></input>
		</td>
		</tr>
		
		<tr>
		<td>请选择选课系统关闭日期</td>
		<td>
 		<input id="ff" type="text" class="easyui-datebox" required="required"></input>
 		</td>
 		</tr>
 		
 		<tr>
 		<td>请设置实验从第几周开始</td>
 		<td>
 		<select id="gg" class="easyui-combobox" name="dept" style="width:200px;">   
			<%
				for(int i=1;i<=10;i++)
				{			
				%>
					<option value=<%=i-1%>><%=i%></option>
				<%
				}
			%>		
		</select>  
 		</td>
 		</tr>
 		
 		<tr>
 		<td><center>
 			<button id="cancle" style="cursor:hand;" onClick="cancle_clicked()">清空</button>
 		</center></td>
 		<td><center>
 			<button id="yes" style="cursor:hand;" onClick="yes_clicked()">预览</button>
 		</center></td>
 		</tr>
		</table>
		<br><br><br>
		
		<span id="hidden" style="font-size:15px;display:none;">请仔细核对下表信息，全局设置将对课程设置产生关键影响</span>
		<br>
		
		<!-- 
			下面这个table是隐藏table
		 -->
		
		<table id="hiddenTable" border="1" style="color:black;display:none;">
			<tr>
				<td>学年信息</td>
				<td><span id="year"></span></td>
			</tr>
			<tr>
				<td>学生需要完成实验数目为</td>
				<td><span id="lab_no"></span></td>
			</tr>
			<tr>
				<td>系统开启时间为</td>
				<td><span id="begin_time"></span></td>
			</tr>
			<tr>
				<td>系统关闭时间为</td>
				<td><span id="end_time"></span></td>
			</tr>
			<tr>
				<td>实验开始周次为</td>
				<td><span id="week"></span></td>
			</tr>
			<tr>
 				<td><center>
 					<button id="change" style="cursor:hand;" onClick="change_clicked()">修改</button>
 				</center></td>
 				<td><center>
 					<button id="submit" style="cursor:hand;" onClick="submit_clicked()">提交</button>
 				</center></td>
 			</tr>
			
		</table>
		
		
		</center>
		
	</body>
</html>