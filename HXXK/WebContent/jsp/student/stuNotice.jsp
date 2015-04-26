<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>查看公告</title>
<!-- js -->
<script type="text/javascript" src="<%=basePath%>js/student/stuNotice.js"></script>

<script>
function initial(){
	var SESSION_TYPE = "<%=request.getSession().getAttribute("userType") %>";
	if(SESSION_TYPE=='stu'){
		$('#delete').linkbutton('disable');
	}
}
</script>
</head>
<body onLoad="getNoticeInfo();initial()" style="background:lightgreen;">
<span style="font-family:'黑体';font-size:15px;">按时间选择公告</span> &nbsp;&nbsp;<select id="time" style="width:25%;height:30px;border-radius:5px;"></select>
<a id="check"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onClick="check_notice()">查看此公告</a>  
<a id="delete"  href="javascript:void(0)"  class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onClick="delete_notice()">删除此公告</a>  
<hr />
<center>
<div id="noticeInfo" class="easyui-panel" title="最新公告"     
        style="width:auto;height:auto;padding:10px;background:#fafafa;margin:0px auto;"   
        data-options="iconCls:'icon-ok',closable:false,    
                collapsible:true,minimizable:false,maximizable:true">   
</div>  
</center>
</body>
</html>