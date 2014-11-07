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
	<table border="1" id="stuList" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;">
		<tr id="ttitle" align="center" style="color:DimGray;border-style:Solid;background:Silver">
		<td>编号</td><td>实验室名称</td><td>期数</td><td>老师</td><td>时间</td><td>DeadLine</td><td>下载</td>
		</tr>
	</table>
</body>
</html>