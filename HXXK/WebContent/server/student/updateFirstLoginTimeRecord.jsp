<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	String id = request.getParameter("id").toString();
	String time = request.getParameter("time").toString();
	if(new DB_FirstLoginTimeRecord().set_time(id, time))
		out.write("success");
	else
		out.write("failed");
%>
