<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="common/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>主界面</title>
<!-- css -->
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/system/home.css">
<!-- js -->
<script type="text/javascript" src="<%=basePath%>js/system/home.js"></script>
<!-- may use js -->
<script type="text/javascript" src="<%=basePath%>js/easyUI/plugins/jquery.panel.js"></script>
<script type="text/javascript" src="<%=basePath%>js/easyUI/plugins/jquery.linkbutton.js"></script>
<script type="text/javascript" src="<%=basePath%>js/easyUI/plugins/jquery.parser.js"></script>
<script type="text/javascript" src="<%=basePath%>js/easyUI/plugins/jquery.tabs.js"></script>

<script type="text/javascript">
	var SESSION_ID = "<%=request.getSession().getAttribute("userID") %>";
	var SESSION_TYPE = "<%=request.getSession().getAttribute("userType") %>";
	if(SESSION_ID=='null' || SESSION_TYPE!='admin'){
		window.location.href='login.jsp';
	}
	
	function logout(){
		window.location.href='login.jsp';
	}
</script>

</head>
<body class="easyui-layout" onLoad="time()">
    <div data-options="region:'north',split:false" class="cs-north">
    	<center>
    	<div class="title" id="title"></div>
    	</center>
    </div>
    <div data-options="region:'west',title:'功能菜单',split:false" class="cs-west">
    	<div class="easyui-accordion" fit="true" border="false">
    		<div title="课程公告" >
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/student/stuNotice.jsp" class="cs-navi-tab">
  					<button class="cs-link">查看公告</button>
  				</a><br>
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/updateNotice.jsp" class="cs-navi-tab">
  					<button class="cs-link">发布新公告</button>
  				</a><br>
			</div>
			<div title="课程管理" >
				<a href="javascript:void(0)"  src="<%=basePath%>jsp/config.jsp" class="cs-navi-tab">
  					<button class="cs-link" title="点击可以打开或刷新页面">1.全局信息设置</button>
  				</a><br>
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/laboratory.jsp" class="cs-navi-tab">
  					<button class="cs-link" title="点击可以打开或刷新页面">2.实验教室设置</button>
  				</a><br>
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/experiment.jsp" class="cs-navi-tab">
  					<button class="cs-link" title="点击可以打开或刷新页面">3.实验信息设置</button>
  				</a><br>
<%--   				<a href="javascript:void(0)" title="cfs" src="<%=basePath%>jsp/chooseForStu.jsp" class="cs-navi-tab"> --%>
<!--   					<button class="cs-link"   title="点击可以打开或刷新页面" style="background-color:lightgray;">手动为学生选课</button> -->
<!--   				</a><br> -->
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/checkChoose.jsp" class="cs-navi-tab">
  					<button class="cs-link"   title="点击可以打开或刷新页面" style="background-color:lightgray;">选课情况查看</button>
  				</a><br>
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/schedule.jsp" class="cs-navi-tab">
  					<button class="cs-link"   title="点击可以打开或刷新页面" style="background-color:lightgreen;">当天总课程表</button>
  				</a><br>
			</div>
			<div title="用户管理" >
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/studentInfo.jsp" class="cs-navi-tab">
  					<button class="cs-link">学生信息</button>
  				</a><br>
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/teacherInfo.jsp" class="cs-navi-tab">
  					<button class="cs-link">教师信息</button>
  				</a><br>
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/userList.jsp" class="cs-navi-tab">
  					<button class="cs-link">用户查询</button>
  				</a><br>
			</div>
			<div title="系统功能" >
  				<a href="javascript:void(0)"  class="cs-navi-tab">
  					<button class="cs-link" onClick="logout()">退出</button>
  				</a><br>
  				
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/reset.jsp" class="cs-navi-tab">
  					<button class="cs-link">重置</button>
  				</a><br>
  				
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/SaveMark.jsp" class="cs-navi-tab">
  					<button class="cs-link">备份往年作业数据</button>
  				</a><br>
  				
			</div>
		</div>
    </div>
    <div data-options="region:'center',border:true,split:true" id="tt">
    	<div id="tabs" class="easyui-tabs"  fit="true" border="false">
            <div title="Home">
				<div>
					<p style="font-family:'华文行楷';font-size:35px;border-radius:10px;text-align:center;">南京大学化学实验中心选课系统欢迎您！</p>
				</div>
				<div id="showtime" style="top:68%;text-align:right;position:relative;"></div>
			</div>
   		</div>
    </div>
    <div data-options="region:'south',split:false,border:true" class="cs-south">
    	<br>
    	<span style="font-family:'微软雅黑';">Copyright © 2014 南京大学化学与化工学院   All rights reserved</span> 
    </div>
</body>
</html>