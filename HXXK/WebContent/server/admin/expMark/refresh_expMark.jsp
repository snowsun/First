<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String no = request.getParameter("no").toString();
	String mark = request.getParameter("mark").toString();
	mark = java.net.URLDecoder.decode(mark,"utf-8");
	if(new DB_expMark().refresh_mark(no, mark))
		out.write("success");
	else
		out.write("false");
%>
