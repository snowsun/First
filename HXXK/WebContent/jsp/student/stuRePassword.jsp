<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../common/common.jsp" %>
<html>
<head>
<title>更改密码</title>
<!-- js -->
<script type="text/javascript" src="<%=basePath%>js/student/stuRePassword.js"></script>
</head>
<body style="background:green">
<center>
<div class="easyui-panel" title="密码修改" style="width:500px;padding:10px 60px 20px 60px">
        <table style="font-family:楷体;font-size:10px;">
        	<tr>
        		<td>用户名:</td>
        		<td><span id="userID"><%=session.getAttribute("userID")%></span></td>
        	</tr>
            <tr>
                <td>旧密码:</td>
                <td><input class="easyui-validatebox" type="password" data-options="required:true,validType:'length[1,18]'" id="oldPassword" style="width:230px"></td>
            </tr>
            <tr>
                <td>新密码:</td>
                <td><input class="easyui-validatebox" type="password" data-options="required:true,validType:'length[1,18]'" id="newPassword" style="width:230px"></td>
            </tr>
            <tr>
                <td>确认新密码:</td>
                <td><input class="easyui-validatebox" type="password" data-options="required:true,validType:'length[1,18]'" id="newPasswordAffirm" style="width:230px"></td>
            </tr>
            <tr>
            	<td><input type="button" value="提交" style="width:60px;height:25px;" id="changePassword"></td>
            	<td><input type="button" value="清空输入" style="width:80px;height:25px;" id="clearInput"></td>
            </tr>
        </table>
    </div>
</center>
</body>
</html>