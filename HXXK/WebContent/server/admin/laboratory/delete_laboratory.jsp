<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String room = request.getParameter("ROOM").toString();
	room = java.net.URLDecoder.decode(room,"utf-8");
	int fl = new DB_laboratory().delete_laboratory(room);
	System.out.println(fl);
	if(fl==0)
		out.write("databaseError");
	else if(fl==1)
		out.write("success");
%>
