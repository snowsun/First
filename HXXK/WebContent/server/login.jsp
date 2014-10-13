<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.DB_baseInfo"%>
<%
	String username = request.getParameter("username").toString();
	String password = request.getParameter("password").toString();
	int IF_SUCCESS = new DB_baseInfo().login(username, password);
	if(IF_SUCCESS==1){
		
		int flag = new DB_baseInfo().getUserType(username);
		if(flag==1){
			out.write("admin");
		}
// 		out.write("loginSuccess");
// 		session.setAttribute("userID", "username");
		else if(flag==2){
			out.write("stu");
		}
		else{
			out.write("loginFailed");
		}
	}
	else
		out.write("loginFailed");
%>
