<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="common/common.jsp" %>
<html>
<head>
<title>ss</title>
</head>
<body>
<div style="width:100%;height:100%;background:#58FAD0;opacity:0.8;border-radius:10px;box-shadow: 10px 10px 5px #888888;">
<table border="1" style="width:500px;height:300px;margin-right:auto;margin-left:auto;">
<caption style="font-family:楷体;font-size:25px;">公告板</caption>
<tr>
	<td style="width:120px;">
		<select id="announcement_date" style="width:120px;">
		<option>点击选择公告</option>
		<option>2012年11月12日</option>
		<option>日期2</option>
		<option>日期3</option>
		<option>日期4</option>
		</select>
	</td>
	<td style="width:300px;">
		<marquee behavior="scroll" onmouseover=this.stop() onmouseout=this.start() width=100% height=100% direction="up" style="text-align:center;" id="announcement_info">
			这里是公告内容
		</marquee> 
	</td>
</tr>
</table>
</div>
</body>
</html>