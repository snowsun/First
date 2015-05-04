<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String id = request.getParameter("id").toString();
	String cannotTime = new DB_FirstLoginTimeRecord().fetch_info(id);
	out.write(cannotTime);
	
	
%>
