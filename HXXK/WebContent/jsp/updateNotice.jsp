<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="common/common.jsp" %>
<html>
<head>
<title>发布公告</title>
<script type="text/javascript" src="<%=basePath%>/js/ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/updateNotice.js"></script>
</head>
<body>
		<textarea name="editor1">在这里输入公告内容后，点击发布公告</textarea> 
		<script type="text/javascript"> 
			CKEDITOR.replace( 'editor1' );
		</script>
		<hr>
		<center>
		<input type="button" value="清空内容" id="clearEditor" style="width:100px;height:30px;">
		<input type="button" value="发布公告" id="publishNotice" style="width:100px;height:30px;">
		</center>
		
</body>
</html>