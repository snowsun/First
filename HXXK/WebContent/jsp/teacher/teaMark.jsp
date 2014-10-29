<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>教师简介</title>
<!-- js -->
<script type="text/javascript" src="<%=basePath%>js/teacher/teaMark.js"></script>
</head>
<body onLoad="getMarkInfo()" style="background:lightgreen;">
<center>
<span id="userID" style="display:none;"><%=session.getAttribute("userID")%></span>
<div id="markInfo" class="easyui-panel" title="教师简介"     
        style="width:550px;height:350px;padding:10px;background:#fafafa;margin:0px auto;"   
        data-options="iconCls:'icon-ok',closable:false,    
                collapsible:true,minimizable:false,maximizable:true">   
</div>  
</center>
</body>
</html>