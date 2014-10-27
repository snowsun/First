<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String no = request.getParameter("no").toString();
	String mark = new DB_expMark().fetch_mark(no);
	if(mark.equals("error"))
		out.write("failed");
	else
		out.write(mark);
 		
%>
