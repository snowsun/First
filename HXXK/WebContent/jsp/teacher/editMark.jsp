<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>编辑简介</title>
<!-- js -->
<script type="text/javascript" src="<%=basePath%>/js/ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/teacher/editMark.js"></script>
</head>
<body style="background:lightgreen">
		<span id="userID" style="display:none;"><%=session.getAttribute("userID")%></span>
		<textarea name="editor1">在这里输入教师简介后，点击发布简介</textarea> 
		<script type="text/javascript"> 
			CKEDITOR.replace( 'editor1' );
		</script>
		<hr>
		<center>
		<input type="button" value="清空内容" id="clearEditor" style="width:100px;height:30px;">
		<input type="button" value="发布简介" id="publishMark" style="width:100px;height:30px;">
		</center>
		
</body>
</html>