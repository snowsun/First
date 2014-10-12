<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="common/common.jsp" %>
<html>
	<head>
		<title>ss</title>
		<script type="text/javascript" src="../js/ckeditor/ckeditor.js"></script>
		<script type="text/javascript">
			function ss(){
				alert();
				var editor_data = CKEDITOR.instances.editor1.getData(); 
				alert(editor_data);
			}
		</script>
	</head>
	<body>
		<textarea name="editor1">Initial value.</textarea> 
		<script type="text/javascript"> 
			CKEDITOR.replace( 'editor1' );
		</script> 
		
		<button onClick="ss()">submit</button>
	</body>	
</html>