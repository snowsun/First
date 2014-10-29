<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="common/common.jsp" %>
<html>
<head>
<title>用户查询</title>
<script type="text/javascript" src="<%=basePath%>js/userList.js"></script>
</head>
<body onLoad = "searchData()" style="background:lightgreen">
	<TABLE style="font-size: 9px; font-family: Arial; table-layout: fixed; width: 100%; height: 90%;">
		<TR>
			<TD width="86%" valign="top" style="border-left: #7BAED5 solid 0px; padding-left: 2px">
				<hr>
				<div id="userTable">
				</div>
			</TD>
		</TR>
	</TABLE>
</body>
</html>