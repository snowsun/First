<%@ page contentType="text/html; charset=GB2312" %>
<%@ page import="source.DB"%>
<%
	String username = request.getParameter("username").toString();
	String password = request.getParameter("password").toString();
	int IF_SUCCESS = new DB().login(username, password);
	if(IF_SUCCESS==1)
		out.write("loginSuccess");
	
	else
		out.write("loginFailed");
%>