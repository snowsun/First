<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String room = request.getParameter("ROOM").toString();
	room = java.net.URLDecoder.decode(room,"utf-8");
	int fl = new DB_laboratory().insert_laboratory(room);
	if(fl==0)
		out.write("alreadyExist");
	else if(fl==1)
		out.write("success");
	else if(fl==2)
		out.write("databaseError");
%>
