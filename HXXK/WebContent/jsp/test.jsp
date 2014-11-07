<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>作业提交</title>
<!-- css -->
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/system/workHome.css">
<!-- js -->
<script type="text/javascript" src="<%=basePath%>js/pushWork/workHome.js"></script>
<!-- may use js -->
<script type="text/javascript" src="<%=basePath%>js/easyUI/plugins/jquery.panel.js"></script>
<script type="text/javascript" src="<%=basePath%>js/easyUI/plugins/jquery.linkbutton.js"></script>
<script type="text/javascript" src="<%=basePath%>js/easyUI/plugins/jquery.parser.js"></script>
<script type="text/javascript" src="<%=basePath%>js/easyUI/plugins/jquery.tabs.js"></script>

<script type="text/javascript">
	var SESSION_TYPE = "<%=request.getSession().getAttribute("userType") %>";
	if(SESSION_TYPE!='stu'){
		window.location.href='login.jsp';
	}
</script>

</head>
<body class="easyui-layout" onLoad="onloading()">
    <div data-options="region:'north',split:false" class="cs-north">
    	<center>
    	<div class="title" id="title"></div>
    	</center>
    </div>
    <div data-options="region:'center',border:true,split:true" id="tt">
    	<div id="tabs" class="easyui-tabs"  fit="true" border="false">
            <div title="WorkSpace" style="background-color:lightgreen;">
            	
            	<center>
            	<br><h1 id="userID"><%=request.getSession().getAttribute("userID") %></h1><h1 id="info" style="color:white;"></h1><br><br>
            	<table border="1" id="stuTable" style="color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:95%;border-collapse:collapse;">
            		<tr id='_TITLE_' align="center" style="background:Silver;border-style:Solid;">
					<td>
						<h1>编号</h1>
					</td>
					<td>
						<h1>实验名称</h1>
					</td>
					<td>
						<h1>教师</h1>
					</td>
					<td>
						<h1>实验时间</h1>
					</td>
					<td>
						<h1>期数</h1>
					</td>
					<td>
						<h1>DeadLine</h1>
					</td>
					<td>
						<h1>提交作业</h1>
					</td>
					<td>
						<h1>状态</h1>
					</td>
				</tr>
            	</table>
            	</center>

			</div>
   		</div>
    </div>
</body>
</html>