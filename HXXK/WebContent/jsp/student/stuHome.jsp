<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<%@ page import="source.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>学生主界面</title>
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
	if(SESSION_ID=='null' || SESSION_TYPE!='stu'){
		window.location.href='../login.jsp';
	}
</script>
</head>
<body class="easyui-layout" onLoad="check_whether_choose_time()">
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
			</div>
			<div title="课程管理" >
				<a href="javascript:void(0)"  src="<%=basePath%>jsp/student/courseChoose.jsp" class="cs-navi-tab">
  					<button id="chButton" class="cs-link">学期选课</button>
  				</a><br>
				<a href="javascript:void(0)"  src="<%=basePath%>jsp/student/schedule.jsp" class="cs-navi-tab">
  					<button class="cs-link">我的课表</button>
  				</a><br>
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/student/rechoose.jsp" class="cs-navi-tab">
  					<button id="reButton" class="cs-link">重新选课</button>
  				</a><br>
			</div>
			<div title="用户管理" >
  				<a href="javascript:void(0)"  src="<%=basePath%>jsp/student/stuRePassword.jsp" class="cs-navi-tab">
  					<button class="cs-link">修改密码</button>
  				</a><br>
			</div>
			<div title="系统功能" >
  				<a href="javascript:void(0)"  class="cs-navi-tab" onClick="window.location.href='../login.jsp'">
  					<button class="cs-link">退出</button>
  				</a><br>
			</div>
		</div>
    </div>
    <div data-options="region:'center',border:true,split:true" id="tt">
    	<div id="tabs" class="easyui-tabs"  fit="true" border="false">
            <div title="Home">
				<div>
					<p style="font-family:'华文行楷';font-size:35px;border-radius:10px;text-align:center;">南京大学化学实验中心选课系统欢迎您！</p>
					<div id="dialog2" class="easyui-dialog" style="width:650px;height:300px" data-options="title:'可选课时间确认',closed:true,buttons:'#bb',modal:true,onClose:function(){window.location.reload();}">
						
						<center>
						<p style="color:blue;font-family:'微软雅黑';font-size:15px;">请注意，时间一旦设置完毕将不可自行更改，除非联系管理员老师！</p>
						<p style="color:blue;font-family:'微软雅黑';font-size:15px;">你在下表右侧勾选的为你【不能选择实验】的时间！</p>
						<p style="color:blue;font-family:'微软雅黑';font-size:15px;">如果实验开放的所有时间【都与其他课程不冲突】，则【无需选择】直接提交即可！</p>
						<table border="5" id="opTable" style="color:DimGray;border-style:Solid;font-family:'黑体';font-style:normal;text-decoration:none;border-collapse:collapse;">
							<tr id='_TITLE_' align="center">
								<td>
									实验时间
								</td>
								<td style="color:red;">
									【不能】上本实验课的时间
								</td>
							</tr>
						</table></center> 
					</div>
					<div id="bb">
					<a href="#" class="easyui-linkbutton" onClick="save_time()">提交</a>
					</div>
				</div>
			</div>
   		</div>
    </div>
    <div data-options="region:'south',split:false,border:true" class="cs-south">
    	<br>
    	<span style="font-family:'微软雅黑';">Copyright © 2014 南京大学化学与化工学院   All rights reserved</span> 
    </div>
    
    <%
		String BEGIN_TIME =  new DB_config().fetch_config()[4];
		String END_TIME =  new DB_config().fetch_config()[5];
		int y,m,d,h,mi,s;    
		java.util.Calendar cal=java.util.Calendar.getInstance();    
		y=cal.get(java.util.Calendar.YEAR);    
		m=cal.get(java.util.Calendar.MONTH)+1;    
		d=cal.get(java.util.Calendar.DATE);
		
		String yy,mm,dd;
		yy=y+"";
		if(m<10) mm="0"+m;
		else mm=m+"";
		if(d<10) dd="0"+d;
		else dd=d+"";
		
		String NOW_TIME = yy+"-"+mm+"-"+dd;
		System.out.println(NOW_TIME);
		if(NOW_TIME.compareTo(BEGIN_TIME)<0){
			%>
				<script type="text/javascript">
					alert('选课系统尚未开启');
					window.location.href='../login.jsp';
				</script>
			<%
		}
		else if(NOW_TIME.compareTo(END_TIME)>0){
			%>
			<script type="text/javascript">
				document.getElementById('chButton').style.display='none';
				document.getElementById('reButton').style.display='none';
			</script>
		<%
		}
	%>
	
</body>
</html>
