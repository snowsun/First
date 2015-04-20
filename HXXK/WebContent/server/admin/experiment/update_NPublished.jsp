<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String cId = request.getParameter("courseId").toString();
	String sp = request.getParameter("sp").toString();
	if(new DB_NPublished().insert_NPublished(cId, sp)==1)
		out.write("success");
	else
		out.write("failed");
	
	
%>
