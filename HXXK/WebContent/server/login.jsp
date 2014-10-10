<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.DB_baseInfo"%>
<%
	String username = request.getParameter("username").toString();
	String password = request.getParameter("password").toString();
	int IF_SUCCESS = new DB_baseInfo().login(username, password);
	if(IF_SUCCESS==1){
		out.write("loginSuccess");
		session.setAttribute("userID", "username");
		
	}
	else
		out.write("loginFailed");
%>
