<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	System.out.println("13");
	String id = request.getParameter("id").toString();
	String turn = request.getParameter("turn").toString();
	String mark = request.getParameter("mark").toString();
	mark = java.net.URLDecoder.decode(mark,"utf-8");
	System.out.println(id+"__"+turn+"___"+mark);
	if(new DB_workRequest().refresh_request(id, turn, mark))
		out.write("success");
	else
		out.write("false");
%>
