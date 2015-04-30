<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	String id = session.getAttribute("userID").toString();
	if(new DB_FirstLoginTimeRecord().reset_by_id(id))
		out.write("success");
	else
		out.write("failed");
%>
