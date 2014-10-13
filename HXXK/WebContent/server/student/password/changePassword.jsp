<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	System.out.println("server changePassword");
	String userID = request.getParameter("userID").toString();
	String oldPassword = request.getParameter("oldPassword").toString();
	String newPassword = request.getParameter("newPassword").toString();
	int IF_SUCCESS = new DB_baseInfo().login(userID, oldPassword);
	if(IF_SUCCESS == 1){
		boolean flag = new DB_password().changePassword(userID, newPassword);
		if(flag){
			out.write("success");
		}else{
			out.write("fail");
		}
	}else{
		out.write("oldPasswordError");
	}
%>
