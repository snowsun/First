<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String no = request.getParameter("no").toString();
	int fl = new DB_experiment().dalete_experiment(no);
	int fl1 = new DB_mainInfo().dalete_mainInfo(no);
 	if(fl==1&&fl1==1)
 		out.write("success");
 	else
 		out.write("failed");
 		
%>
