<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>查看公告</title>
<!-- js -->
<script type="text/javascript" src="<%=basePath%>js/student/stuNotice.js"></script>
</head>
<body onLoad="getNoticeInfo()" style="background:lightgreen;">
<center>
<div id="noticeInfo" class="easyui-panel" title="公告栏"     
        style="width:550px;height:350px;padding:10px;background:#fafafa;margin:0px auto;"   
        data-options="iconCls:'icon-ok',closable:false,    
                collapsible:true,minimizable:false,maximizable:true">   
</div>  
</center>
</body>
</html>