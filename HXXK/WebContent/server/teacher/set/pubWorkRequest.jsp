<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	
	String id = request.getParameter("id").toString();
	String turn = request.getParameter("turn").toString();
	String mark = new DB_workRequest().fetch_request(id, turn);
	if(mark.equals("error"))
		out.write("failed");
	else
		out.write(mark);
 		
%>
