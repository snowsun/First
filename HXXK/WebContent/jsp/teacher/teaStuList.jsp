<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>学生列表</title>
<script type="text/javascript" src="<%=basePath%>js/teacher/teaStuList.js"></script>
</head>
<body onLoad = "searchData()" style="background:lightgreen">
	<span id="teacherID"><%=session.getAttribute("userID")%></span>
	<TABLE style="font-size: 9px; font-family: Arial; table-layout: fixed; width: 100%; height: 90%;">
		<TR>
			<TD width="86%" valign="top" style="border-left: #7BAED5 solid 0px; padding-left: 2px">
				<hr>
				<table border="1" id="stuList" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
				<tr style="background:lightblue">
					<td>实验室名称</td><td>实验室</td><td>老师</td><td>时间</td><td>第一期</td><td>第二期</td><td>第三期</td><td>第四期</td><td>第五期</td>
				</tr>
				</table>
			</TD>
		</TR>
	</TABLE>
</body>
</html>