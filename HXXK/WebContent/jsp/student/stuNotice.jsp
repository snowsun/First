<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<html>
<head>
<title>查看公告</title>
<!-- js -->
<script type="text/javascript" src="<%=basePath%>js/student/stuNotice.js"></script>
</head>
<body onLoad="getNoticeInfo()" style="background:#088A4B;">
<center>
<div id="noticeInfo" class="easyui-panel" title="公告栏"     
        style="width:550px;height:350px;padding:10px;background:#fafafa;margin:0px auto;"   
        data-options="iconCls:'icon-ok',closable:false,    
                collapsible:true,minimizable:false,maximizable:true">   
</div>  
</center>
</body>
</html>