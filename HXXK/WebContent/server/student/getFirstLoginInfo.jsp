<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	String id = request.getParameter("id").toString();
	if(new DB_FirstLoginTimeRecord().if_set(id)){
		out.write("yet");
	}
	else
		out.write("notYet");
%>
